
"use strict";
// ROLES/COLOUR are baked in at build time from the same RegionRole enum and
// ROLE_COLOUR table the single-page annotator uses (annotate.py, overlay.py)
// so the two tools never drift apart on what a role is called or coloured.
const ROLES = ["dialogue_panel", "highlight_box", "grammar_table", "prose", "new_words", "english_version", "exercise", "lesson_header", "section_label", "page_furniture", "figure", "decoration", "picture_word_grid", "audio_cue", "panel_divider", "dialogue_column", "panel_heading", "photo_slot", "folio", "running_head", "thumb_index", "unknown"];
const COLOUR = {"dialogue_panel": "#d91a1a", "highlight_box": "#8c1abf", "grammar_table": "#008c8c", "prose": "#1a59d9", "new_words": "#e67300", "english_version": "#339933", "exercise": "#bf5900", "section_label": "#000000", "audio_cue": "#f29900", "figure": "#737373", "decoration": "#bfbfbf", "picture_word_grid": "#bf7300", "lesson_header": "#990066", "page_furniture": "#b2b2b2", "unknown": "#e60099", "panel_divider": "#001aa6", "dialogue_column": "#0073cc", "panel_heading": "#d9008c", "photo_slot": "#595959", "folio": "#999933", "running_head": "#996633", "thumb_index": "#663399"};
const STORAGE_PREFIX = "hsk-annotate-app/v1/";

// -------------------------------------------------------------------------
// State
// -------------------------------------------------------------------------
// `regions` is the single source of truth for every region in every book,
// keyed by id. It starts as the detector's output (data/regions.json) and is
// then overwritten in place by whatever localStorage has for pages that were
// previously edited, so counts and lists computed from it are always the
// live, corrected picture -- not just what's on screen.
let books = [];
let pagesByKey = new Map();   // "book:page" -> {image, w, h}
let regions = new Map();      // id -> region record
let scale = 1;

let currentBook = null;
let currentPage = 1;
let selectedId = null;
let roleFilter = null;
let nextManualSeq = 0;

const pageKey = (book, page) => `${book}:${page}`;
const storageKey = (book, page) => `${STORAGE_PREFIX}${book}/p${String(page).padStart(3, "0")}`;

function regionsForPage(book, page) {
  const out = [];
  for (const r of regions.values()) if (r.book === book && r.page === page) out.push(r);
  // Smaller boxes drawn last so they stay clickable on top of their parent --
  // same rule as the single-page annotator, for the same reason (a photo
  // slot nested inside a dialogue panel must not be swallowed by it).
  out.sort((a, b) => areaOf(b) - areaOf(a));
  return out;
}

function areaOf(r) {
  return Math.max(1, (r.bbox[2] - r.bbox[0]) * (r.bbox[3] - r.bbox[1]));
}

function persistPage(book, page) {
  const snapshot = regionsForPage(book, page);
  localStorage.setItem(storageKey(book, page), JSON.stringify(snapshot));
}

function loadLocalOverrides() {
  // Corrections persist per (book, page) -- see module docstring. Scanning
  // every matching key at startup, rather than lazily per page view, is what
  // lets the component panel show *global*, corrected counts immediately,
  // before the reviewer has revisited a single page.
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key || !key.startsWith(STORAGE_PREFIX)) continue;
    let saved;
    try { saved = JSON.parse(localStorage.getItem(key)); } catch { continue; }
    if (!Array.isArray(saved)) continue;
    for (const r of saved) if (r && r.id) regions.set(r.id, r);
  }
}

// -------------------------------------------------------------------------
// Boot
// -------------------------------------------------------------------------

async function boot() {
  const res = await fetch("data/regions.json");
  const data = await res.json();
  scale = data.scale;
  books = data.books;
  for (const p of data.pages) pagesByKey.set(pageKey(p.book, p.page), p);
  for (const r of data.regions) {
    regions.set(r.id, { ...r, deleted: false, edited: false, added: false });
  }
  loadLocalOverrides();

  const bookSelect = document.getElementById("bookSelect");
  books.forEach(b => bookSelect.add(new Option(`${b.id} (${b.page_count}p)`, b.id)));
  currentBook = books[0] && books[0].id;
  bookSelect.value = currentBook;
  bookSelect.onchange = () => { currentBook = bookSelect.value; currentPage = 1; render(); };

  document.getElementById("role").append(...ROLES.map(r => new Option(r, r)));

  wireStaticHandlers();
  render();
}

// -------------------------------------------------------------------------
// Rendering
// -------------------------------------------------------------------------

function render() {
  renderPageImage();
  renderBoxes();
  renderComponentPanel();
  renderInspector();
  renderTopbar();
}

function currentBookMeta() {
  return books.find(b => b.id === currentBook);
}

function renderTopbar() {
  const meta = currentBookMeta();
  document.getElementById("pageInput").value = currentPage;
  document.getElementById("pageOf").textContent = meta ? `/ ${meta.page_count}` : "";
  const pending = Array.from(regions.values()).filter(r => r.edited || r.deleted || r.added).length;
  document.getElementById("pending").textContent =
    pending === 1 ? "1 correction pending" : `${pending} corrections pending`;
  document.getElementById("exportComponent").disabled = !roleFilter;
}

function renderPageImage() {
  const meta = pagesByKey.get(pageKey(currentBook, currentPage));
  const img = document.getElementById("page");
  if (!meta) { img.removeAttribute("src"); return; }
  if (img.dataset.key !== pageKey(currentBook, currentPage)) {
    img.src = meta.image;
    img.width = meta.w;
    img.height = meta.h;
    img.dataset.key = pageKey(currentBook, currentPage);
  }
}

function renderBoxes() {
  const wrap = document.getElementById("wrap");
  wrap.querySelectorAll(".box").forEach(e => e.remove());
  const meta = pagesByKey.get(pageKey(currentBook, currentPage));
  if (!meta) return;
  const list = regionsForPage(currentBook, currentPage);
  const W = meta.w, H = meta.h;
  list.forEach((r, i) => {
    const d = document.createElement("div");
    // Components can extend past the page box -- the source PDFs were
    // trimmed out of a larger spread, so some margin art is genuinely
    // off-page (see docs/EXTRACTION_APPROACHES.md). Render clamped so every
    // box stays reachable with the mouse; the stored bbox keeps the truth.
    const x0 = Math.max(0, Math.min(W, r.bbox[0] * scale));
    const y0 = Math.max(0, Math.min(H, r.bbox[1] * scale));
    const x1 = Math.max(0, Math.min(W, r.bbox[2] * scale));
    const y1 = Math.max(0, Math.min(H, r.bbox[3] * scale));
    const clipped = x0 !== r.bbox[0] * scale || y0 !== r.bbox[1] * scale ||
                    x1 !== r.bbox[2] * scale || y1 !== r.bbox[3] * scale;
    d.className = "box" + (r.id === selectedId ? " sel" : "") +
                  (r.deleted ? " del" : "") + (clipped ? " clipped" : "");
    // `list` is already sorted largest-area-first (see regionsForPage), so
    // the array position alone is a tie-free stacking order: the smallest
    // region is always last and gets the highest z-index. Deriving z-index
    // from the area *value* instead (100000 - area) was tried first and was
    // wrong -- two regions both larger than ~100000pt^2 (a whole panel and
    // the page's prose column, say) both clamp to the same z-index 1, so
    // whichever was drawn later wins arbitrarily and the other becomes
    // unclickable wherever they overlap.
    d.style.cssText = `left:${x0}px;top:${y0}px;` +
      `width:${Math.max(3, x1 - x0)}px;height:${Math.max(3, y1 - y0)}px;` +
      `z-index:${i + 1};` +
      `border-color:${COLOUR[r.role] || "#f0f"}`;
    d.innerHTML = `<span class="tag" style="background:${COLOUR[r.role] || "#f0f"}">${r.role}</span>` +
                  `<span class="h"></span>`;
    d.onmousedown = e => startDrag(e, r.id, e.target.classList.contains("h"));
    wrap.appendChild(d);
  });
}

function renderComponentPanel() {
  const counts = new Map();
  for (const r of regions.values()) {
    if (r.deleted) continue;
    counts.set(r.role, (counts.get(r.role) || 0) + 1);
  }
  const total = Array.from(counts.values()).reduce((a, b) => a + b, 0);
  document.getElementById("componentCount").textContent = `${total} components, ${counts.size} types`;

  const ol = document.getElementById("componentList");
  ol.innerHTML = "";
  const sorted = ROLES.filter(r => counts.has(r)).sort((a, b) => counts.get(b) - counts.get(a));
  for (const role of sorted) {
    const li = document.createElement("li");
    li.setAttribute("aria-selected", role === roleFilter);
    li.innerHTML = `<span style="display:flex;align-items:center;gap:6px;overflow:hidden">` +
      `<span class="dot" style="background:${COLOUR[role] || "#f0f"}"></span>` +
      `<span>${role}</span></span><span class="count">${counts.get(role)}</span>`;
    li.onclick = () => { roleFilter = role; render(); };
    ol.appendChild(li);
  }

  const panel = document.getElementById("instancePanel");
  if (!roleFilter) { panel.hidden = true; return; }
  panel.hidden = false;
  document.getElementById("instanceHeading").textContent = roleFilter;
  const instances = Array.from(regions.values())
    .filter(r => r.role === roleFilter)
    // Sort by book then page *numerically* -- concatenating book+page into
    // one string and comparing lexicographically (tried first) puts page 10
    // before page 9, because "1" < "9" as the next character after a shared
    // "hsk1-v1" prefix.
    .sort((a, b) => a.book.localeCompare(b.book) || a.page - b.page);
  const il = document.getElementById("instanceList");
  il.innerHTML = "";
  for (const r of instances) {
    const li = document.createElement("li");
    li.className = (r.deleted ? "del " : "") + (r.edited || r.added ? "edited" : "");
    li.dataset.active = r.id === selectedId;
    li.innerHTML = `<span>${r.book} p${r.page}</span>`;
    li.onclick = () => { currentBook = r.book; currentPage = r.page; selectedId = r.id; render(); };
    il.appendChild(li);
  }
}

function renderInspector() {
  const r = selectedId ? regions.get(selectedId) : null;
  const roleSel = document.getElementById("role");
  roleSel.value = r ? r.role : "";
  document.getElementById("info").innerHTML = r ? infoRows(r) : "";
  document.getElementById("del").textContent = r && r.deleted ? "Restore" : "Delete / restore";
}

function infoRows(r) {
  const ev = r.evidence || {};
  const sw = ev.fill
    ? `<span class="swatch" style="background:rgb(${ev.fill.map(v => Math.round(v * 255)).join(",")})"></span>`
    : "";
  const rows = [
    ["book / page", `${r.book} / p${r.page}`],
    ["signal", ev.signal || "—"],
    ["fill", ev.fill ? sw + ev.fill.map(v => v.toFixed(2)).join(", ") : "—"],
    ["size", `${(r.bbox[2] - r.bbox[0]).toFixed(0)} × ${(r.bbox[3] - r.bbox[1]).toFixed(0)} pt`],
    ["origin", r.added ? "added by hand" : "detected"],
    ["off-page", (r.bbox[0] < 0 || r.bbox[1] < 0) ? "yes — page box was trimmed" : "no"],
  ];
  return rows.map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join("");
}

// -------------------------------------------------------------------------
// Editing
// -------------------------------------------------------------------------

function startDrag(e, id, resize) {
  e.preventDefault();
  selectedId = id;
  render();
  const r = regions.get(id);
  const sx = e.clientX, sy = e.clientY, b = r.bbox.slice();
  const move = ev => {
    const dx = (ev.clientX - sx) / scale, dy = (ev.clientY - sy) / scale;
    r.bbox = resize
      ? [b[0], b[1], Math.max(b[0] + 4, b[2] + dx), Math.max(b[1] + 4, b[3] + dy)]
      : [b[0] + dx, b[1] + dy, b[2] + dx, b[3] + dy];
    r.edited = true;
    renderBoxes();
    renderInspector();
  };
  const up = () => {
    removeEventListener("mousemove", move);
    removeEventListener("mouseup", up);
    persistPage(r.book, r.page);
    renderTopbar();
  };
  addEventListener("mousemove", move);
  addEventListener("mouseup", up);
}

function selectRole(role) {
  if (!selectedId) return;
  const r = regions.get(selectedId);
  r.role = role;
  r.edited = true;
  persistPage(r.book, r.page);
  render();
}

function toggleDelete() {
  if (!selectedId) return;
  const r = regions.get(selectedId);
  r.deleted = !r.deleted;
  persistPage(r.book, r.page);
  render();
}

function addBox() {
  const id = `manual-${currentBook}-p${currentPage}-${nextManualSeq++}`;
  const r = {
    id, book: currentBook, page: currentPage, bbox: [80, 80, 300, 200],
    role: ROLES[0], evidence: { signal: "manual" },
    deleted: false, edited: true, added: true,
  };
  regions.set(id, r);
  selectedId = id;
  persistPage(currentBook, currentPage);
  render();
}

function gotoPage(n) {
  const meta = currentBookMeta();
  if (!meta) return;
  currentPage = Math.max(1, Math.min(meta.page_count, n));
  selectedId = null;
  render();
}

// -------------------------------------------------------------------------
// Export
// -------------------------------------------------------------------------
// Every export is a client-side download -- constraint 3 (no network calls)
// applies just as much to *writing* data as to reading it.

function download(name, text, type) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([text], { type }));
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

// The fitter contract (`hsk_extract.template.fit`): each correction is
// exactly these six keys, nothing more. Extra keys are harmless to `fit`
// (it reads by name), but the browser test suite asserts the *exact* key
// set, because that assertion is what keeps this export byte-compatible
// with the single-page annotator's, which is the thing `fit` was written
// against.
function toFitterContract(r) {
  return {
    page: r.page,
    bbox: r.bbox.map(v => +v.toFixed(2)),
    role: r.role,
    deleted: !!r.deleted,
    edited: !!r.edited,
    added: !!r.added,
  };
}

function exportCorrections() {
  const meta = currentBookMeta();
  const items = Array.from(regions.values()).filter(r => r.book === currentBook);
  const payload = {
    book: currentBook,
    source: meta ? meta.source : "",
    corrections: items.map(toFitterContract),
  };
  download(`corrections-${currentBook}.json`, JSON.stringify(payload, null, 2), "application/json");
}

function exportComponent() {
  if (!roleFilter) return;
  const items = Array.from(regions.values()).filter(r => r.role === roleFilter);
  const payload = {
    role: roleFilter,
    corrections: items.map(r => ({ book: r.book, ...toFitterContract(r) })),
  };
  download(`corrections-${roleFilter}.json`, JSON.stringify(payload, null, 2), "application/json");
}

function exportCsv() {
  const header = ["book", "page", "id", "role", "x0", "y0", "x1", "y1",
                   "area", "aspect", "signal", "deleted", "edited", "added"];
  const lines = [header.join(",")];
  const csvField = v => /[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : v;
  for (const r of regions.values()) {
    const [x0, y0, x1, y1] = r.bbox;
    const w = x1 - x0, h = y1 - y0;
    const row = [
      r.book, r.page, r.id, r.role, x0.toFixed(2), y0.toFixed(2), x1.toFixed(2), y1.toFixed(2),
      (w * h).toFixed(1), h ? (w / h).toFixed(3) : "",
      (r.evidence && r.evidence.signal) || "", !!r.deleted, !!r.edited, !!r.added,
    ];
    lines.push(row.map(csvField).join(","));
  }
  download("regions.csv", lines.join("\n"), "text/csv");
}

function exportAll() {
  const byBook = {};
  for (const b of books) byBook[b.id] = { source: b.source, corrections: [] };
  for (const r of regions.values()) {
    if (!byBook[r.book]) byBook[r.book] = { source: "", corrections: [] };
    byBook[r.book].corrections.push(toFitterContract(r));
  }
  download("corrections-all.json", JSON.stringify(byBook, null, 2), "application/json");
}

// -------------------------------------------------------------------------
// Wiring
// -------------------------------------------------------------------------

function wireStaticHandlers() {
  document.getElementById("prevPage").onclick = () => gotoPage(currentPage - 1);
  document.getElementById("nextPage").onclick = () => gotoPage(currentPage + 1);
  document.getElementById("pageInput").onchange = e => gotoPage(parseInt(e.target.value, 10) || 1);
  document.getElementById("clearFilter").onclick = () => { roleFilter = null; render(); };
  document.getElementById("role").onchange = e => selectRole(e.target.value);
  document.getElementById("del").onclick = toggleDelete;
  document.getElementById("add").onclick = addBox;

  const exportToggle = document.getElementById("exportToggle");
  const exportMenu = document.getElementById("exportMenu");
  exportToggle.onclick = () => { exportMenu.hidden = !exportMenu.hidden; };
  document.addEventListener("click", e => {
    if (!exportMenu.hidden && !exportMenu.contains(e.target) && e.target !== exportToggle) {
      exportMenu.hidden = true;
    }
  });
  document.getElementById("exportCorrections").onclick = exportCorrections;
  document.getElementById("exportComponent").onclick = exportComponent;
  document.getElementById("exportCsv").onclick = exportCsv;
  document.getElementById("exportAll").onclick = exportAll;

  addEventListener("keydown", e => {
    if (e.target.tagName === "SELECT" || e.target.tagName === "INPUT") return;
    if (e.key === "Delete" || e.key === "Backspace") toggleDelete();
    if (e.key === "n" || e.key === "N") addBox();
    if (e.key === "[") gotoPage(currentPage - 1);
    if (e.key === "]") gotoPage(currentPage + 1);
    if (e.key === "Escape") { selectedId = null; render(); }
  });
}

boot();
