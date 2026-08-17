import{p as _e,o as q,G as se,O as ye,f as h,q as re,s as p,y as Be,t as J,X as ve,b as d,c as xe,g as s,e as I,d as L,h as u,u as B,Y as Ce,a as Se,i as le}from"./iframe-Cp5EZZDQ.js";import{a as we,s as ae,c as Ee,d as Pe}from"./create-runtime-stories-DlWd_JCy.js";import{b as ie,s as R,e as ce}from"./attributes-DaXk2Qm-.js";import{b as Fe}from"./this-DDpeXo7Z.js";import{c as me}from"./shadcn-utils-KrE3H22K.js";import{p as ge}from"./reducedMotion.svelte-Bslp-IUh.js";import{g as Oe,s as $e}from"./scrollMemory-qOkQMXt7.js";import{N as be}from"./NavArrow-BDfNA9LA.js";import"./preload-helper-PPVm8Dsz.js";import"./Icon-DJbtmXrR.js";import"./transitions-DsHqt78k.js";import"./chevron-right-BLMDXJc8.js";var De=h("<div></div> <div></div>",1),Ke=h("<div><!> <!> <!>  <div><!></div></div>");function y(T,i){_e(i,!0);let x=q(i,"edgeFade",3,!0),W=q(i,"arrows",3,!0),C=q(i,"pageBy",3,.8),b=q(i,"ariaHidden",3,!1),O=q(i,"edgeInset",3,0),Q=q(i,"trackHeightAnimated",3,!0),Z=q(i,"snap",3,!1);se(()=>{});let c=I(void 0),E=I(0),P=I(0),Y=I(0);const z=B(()=>i.contentWidth??s(Y)),$=B(()=>s(P)>O()+2),D=B(()=>s(E)>0&&s(P)<s(z)-s(E)-O()-2);function M(n=!0){s(c)&&(L(P,s(c).scrollLeft,!0),i.contentWidth==null&&L(Y,s(c).scrollWidth,!0),n&&i.onScroll?.({scrollLeft:s(P),trackWidth:s(E),scrollWidth:s(z)}))}function X(){M(),s(c)&&i.scrollKey&&$e(i.scrollKey,s(P))}ye(()=>{const n=s(c);if(!n)return;L(E,n.clientWidth,!0),se(()=>M(!i.scrollKey));let f=0;const m=new ResizeObserver(()=>{f||(f=requestAnimationFrame(()=>{f=0,L(E,n.clientWidth,!0),X()}))});return m.observe(n),()=>{f&&cancelAnimationFrame(f),m.disconnect()}});let V;ye(()=>{!i.scrollKey||!s(c)||i.scrollKey!==V&&(s(c).scrollLeft=Oe(i.scrollKey)??0,V=i.scrollKey,se(()=>M()))});const ee=400;let F;function te(){if(!Z()||!s(c))return;const n=s(c);n.style.scrollSnapType="x mandatory",clearTimeout(F);const f=()=>{clearTimeout(F),n.removeEventListener("scrollend",m),n.style.scrollSnapType="none"},m=()=>{clearTimeout(F),F=setTimeout(f,ee)};n.addEventListener("scrollend",m),F=setTimeout(f,1500)}function a(n){if(!s(c))return;const f=n===1?s(c).scrollWidth-s(c).clientWidth-s(c).scrollLeft:s(c).scrollLeft,m=Math.min(s(c).clientWidth*C(),Math.max(0,f));s(c).scrollBy({left:n*m,behavior:ge()?"auto":"smooth"})}function e(n){s(c)&&(n.preventDefault(),s(c).scrollLeft+=Math.abs(n.deltaX)>Math.abs(n.deltaY)?n.deltaX:n.deltaY)}function t(n){if(s(c)&&(te(),Math.abs(n.deltaY)>Math.abs(n.deltaX))){if(n.deltaY>0&&!s(D)||n.deltaY<0&&!s($))return;n.preventDefault(),s(c).scrollLeft+=n.deltaY}}function o(n){n.metaKey||n.ctrlKey||n.altKey||n.target?.closest("input, textarea, select, [contenteditable]")||(n.key==="ArrowRight"?(n.preventDefault(),a(1)):n.key==="ArrowLeft"&&(n.preventDefault(),a(-1)))}let S=I(!1),H=I(!1);function A(n){n.preventDefault()}function oe(n,f={}){if(!s(c))return;const m=Math.max(0,n-s(c).clientWidth/2);s(c).scrollTo({left:m,behavior:f.jump||ge()?"auto":"smooth"})}var U={page:a,centerOn:oe},K=Ke(),G=u(K);{var ne=n=>{var f=De(),m=Se(f);let j;var He=p(m,2);let fe;J(()=>{j=ae(m,1,"hs-fade left svelte-xu6pob",null,j,{show:s($)}),fe=ae(He,1,"hs-fade right svelte-xu6pob",null,fe,{show:s(D)})}),d(n,f)};re(G,n=>{x()&&n(ne)})}var he=p(G,2);{var Ae=n=>{{let f=B(()=>!s($)),m=B(()=>b()?-1:void 0),j=B(()=>b()?A:void 0);be(n,{direction:"prev",class:"hs-arrow",get inactive(){return s(f)},iconSize:22,get tabindex(){return s(m)},ariaLabel:"Scroll left",get onmousedown(){return s(j)},onfocus:()=>L(S,!0),onblur:()=>L(S,!1),onwheel:e,onclick:()=>a(-1)})}};re(he,n=>{W()&&(s($)||s(S))&&n(Ae)})}var ue=p(he,2);{var Ne=n=>{{let f=B(()=>!s(D)),m=B(()=>b()?-1:void 0),j=B(()=>b()?A:void 0);be(n,{direction:"next",class:"hs-arrow",get inactive(){return s(f)},iconSize:22,get tabindex(){return s(m)},ariaLabel:"Scroll right",get onmousedown(){return s(j)},onfocus:()=>L(H,!0),onblur:()=>L(H,!1),onwheel:e,onclick:()=>a(1)})}};re(ue,n=>{W()&&(s(D)||s(H))&&n(Ne)})}var N=p(ue,2);N.__touchmove=te,N.__keydown=function(...n){(b()?void 0:o)?.apply(this,n)};let pe;var Le=u(N);return Be(Le,()=>i.content),Fe(N,n=>L(c,n),()=>s(c)),J((n,f)=>{ae(K,1,n,"svelte-xu6pob"),ie(K,"aria-hidden",b()||void 0),ae(N,1,f,"svelte-xu6pob"),ie(N,"tabindex",b()?-1:0),ie(N,"aria-label",b()?void 0:i.ariaLabel),pe=R(N,"",pe,{height:i.trackHeight!=null?`${i.trackHeight}px`:void 0})},[()=>we(me("hs-wrap",i.class)),()=>we(me("hs-track",i.trackHeight!=null&&"hs-track-autoheight",i.trackHeight!=null&&!Q()&&"hs-track-autoheight-instant",i.trackClass))]),ve("scroll",N,X),ve("wheel",N,t),d(T,K),xe(U)}Ce(["touchmove","keydown"]);y.__docgen={data:[{name:"content",visibility:"public",description:"the scrollable content",keywords:[{name:"required",description:""}],kind:"let",type:{kind:"function",text:"Snippet<[]>"},static:!1,readonly:!1},{name:"contentWidth",visibility:"public",description:"total scrollable width in px, if known ahead of time — skips a DOM\n`scrollWidth` measurement pass so edge-fade/arrow visibility reacts\nimmediately when content size changes for reasons that don't also\nresize/scroll the track. Omit to fall back to measuring `scrollWidth`\nopportunistically on scroll/resize.",keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1},{name:"edgeFade",visibility:"public",description:"left/right gradient fades over off-screen content (default true)",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"true"},{name:"arrows",visibility:"public",description:`prev/next paging arrows — auto-hidden at the ends, hover-revealed on a
fine pointer, never shown on touch (default true)`,keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"true"},{name:"pageBy",visibility:"public",description:`fraction of the visible width an arrow/keyboard page moves (default 0.8) — the
actual move is clamped to whatever's left to scroll, so a page near either end
travels less than this, never past the content.`,keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"0.8"},{name:"ariaHidden",visibility:"public",description:`pointer-only chrome: root gets \`aria-hidden\`, controls are non-focusable
(\`tabindex="-1"\`) and no keyboard paging is attached. Use when the scroll
is a redundant enhancement over a real keyboard path elsewhere (the
filmstrip's case — Lightbox's own arrow-key nav already exists).`,keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"},{name:"ariaLabel",visibility:"public",description:"accessible label for the scrollable region; required unless ariaHidden",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"scrollKey",visibility:"public",description:`persists/restores scrollLeft under this key across unmount/remount,
via the shared`,keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"edgeInset",visibility:"public",description:`extra px inset from each scroll bound before edge-fade/arrow visibility
considers that direction "exhausted" (default 0). For a consumer that
reserves scrollable padding at both ends so an edge item can still reach
the visual center (a common "always-centered active item" carousel
technique) — without this, HScroller's raw scroll-bounds check would keep
showing an arrow/fade for reserved empty padding, not real content.`,keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1,defaultValue:"0"},{name:"class",visibility:"public",description:"merges onto the root wrapper (rule 13).",keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"trackClass",visibility:"public",description:`merges onto the scrolling track — use for content padding/inset or an
entrance animation the generic chrome doesn't assume.`,keywords:[],kind:"let",type:{kind:"type",type:"string",text:"string"},static:!1,readonly:!1},{name:"onScroll",visibility:"public",description:`fires on every scroll/resize with the track's current scroll position and
viewport width. HScroller owns the scrolling element, so a consumer that
needs to window/virtualize its own content (e.g. the filmstrip) reads its
live scroll state through here rather than reaching for the DOM node
directly.`,keywords:[],kind:"let",type:{kind:"function",text:"(state: { scrollLeft: number; trackWidth: number; scrollWidth: number; }) => void"},static:!1,readonly:!1},{name:"trackHeight",visibility:"public",description:`Pixel height the track animates to via CSS, instead of its default (a
flex row's natural height — the TALLEST of every mounted page, side by side,
regardless of which one is scrolled into view). Omit to keep that default,
unanimated behaviour.

Domain-free by construction: HScroller doesn't know "which page is current"
(bring-your-own-markup content, per the top-of-file doc comment), so it can't
determine this number itself — the CONSUMER already knows exactly which DOM
node is live (e.g. a \`data-*-current\` marker, or \`i === someIndex\`) and measures
it (a \`ResizeObserver\` on that one element). HScroller's only job here is the
animated MECHANIC: apply the number with a CSS transition and clip the track's
overflow so a taller off-screen page can't visually spill past the shorter
animated height. Built for the language app's quiz/flashcard carousels, where
pages vary a lot in height and switching used to jump instantly.`,keywords:[],kind:"let",type:{kind:"type",type:"number",text:"number"},static:!1,readonly:!1},{name:"trackHeightAnimated",visibility:"public",description:`Whether THIS \`trackHeight\` value should animate in (default true) — set \`false\`
for an update that isn't a page-to-page transition at all, e.g. the CURRENT
page's own content growing in place (a flashcard revealing its answer, adding a
grade bar below the fold). Found the hard way: animating that too meant the
grade buttons were still sliding into their final position for the full
transition duration right as a learner went to press one — a real click-target
problem, not just a cosmetic one. Applied by briefly dropping the CSS transition
for that one update (then letting it resume), never by jumping the value itself
— the height still lands exactly where \`trackHeight\` says, just without motion.`,keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"true"},{name:"snap",visibility:"public",description:"Snap each page to rest under GENUINE user scrolling — drag, wheel, trackpad, touch\n— so a free-form scroll lands cleanly on one page instead of an arbitrary mid-scroll\nposition. Off by default.\n\n**Deliberately not a `trackClass=\"snap-x snap-mandatory\"` the consumer applies\nitself**, which is the obvious way to do this and is the way that's broken: a\nPERSISTENT `scroll-snap-type` fights `centerOn`'s animated `scrollTo` in Chromium,\nsilently collapsing the animation into an instant jump — measured (1 real `scroll`\nevent instead of 7+), and not fixable by suspending snap on-demand right before the\ncall (`armSnap` below documents everything that was tried). So HScroller\nowns the property itself instead of a consumer's class: snap is applied ONLY for the\nduration of a real user gesture (armed on wheel/touch/pointer-down, dropped again once\nthe scroll settles), and is therefore already `none` whenever a programmatic\n`page()`/`centerOn()` runs. The user-facing behaviour is the same; the animation\nconflict can't arise because the two are never on at the same time.",keywords:[],kind:"let",type:{kind:"type",type:"boolean",text:"boolean"},static:!1,readonly:!1,defaultValue:"false"}],name:"HScroller.svelte"};const{expect:r,userEvent:g,waitFor:l}=__STORYBOOK_MODULE_TEST__,_=T=>{var i=Ye();R(i,"display:flex; gap:8px; padding:0.5rem; width:1372px;"),ce(i,20,()=>de,x=>x,(x,W)=>{var C=je(),b=u(C);J(()=>{R(C,`flex:0 0 90px; height:64px; border-radius:8px; border:1px solid var(--border); background:hsl(${W*47%360} 70% 55%); color:#fff; font-weight:600;`),le(b,W)}),d(x,C)}),d(T,i)},ke=T=>{var i=Xe();R(i,"display:flex; gap:8px; padding:0.5rem; width:1372px;"),ce(i,20,()=>de,x=>x,(x,W)=>{var C=ze();C.__mousedown=O=>O.preventDefault();var b=u(C);J(()=>{R(C,`flex:0 0 90px; height:64px; border-radius:8px; border:1px solid var(--border); background:hsl(${W*47%360} 70% 55%); color:#fff; font-weight:600;`),le(b,W)}),d(x,C)}),d(T,i)},qe=T=>{var i=Ve();d(T,i)},Ie=90,Re=8,We=14,Me=Ie+Re,k=We*Me,de=Array.from({length:We},(T,i)=>i),Ge={title:"Composites/HScroller",component:y,tags:["autodocs"],parameters:{a11y:{context:{exclude:[[".demo-chip"]]}}}},{Story:v}=Pe();var je=h('<button type="button" class="demo-chip"> </button>'),Ye=h("<div></div>"),ze=h('<button type="button" class="demo-chip" tabindex="-1"> </button>'),Xe=h("<div></div>"),Ve=h('<div style="padding:0.5rem;">(nothing to scroll)</div>'),Ue=h('<div style="max-width:420px;"><!></div>'),Je=h('<div style="max-width:420px;"><!></div>'),Qe=h('<div style="max-width:420px;"><!></div>'),Ze=h('<div style="max-width:420px;"><!></div>'),et=h('<button type="button" class="demo-chip"> </button>'),tt=h('<div><input class="demo-input" aria-label="Demo text field" style="flex:0 0 160px; height:40px;"/> <!></div>'),at=h('<div style="max-width:420px;"><!></div>'),rt=h('<div style="max-width:420px;"><!></div>'),ot=h('<div style="max-width:420px;"><!></div>'),nt=h('<div style="max-width:420px;"><!></div>'),st=h('<div style="max-width:420px;"><!></div>'),it=h('<div style="max-width:420px;"><!></div>'),lt=h('<div style="max-width:420px;"><!></div>'),ct=h('<div style="max-width:420px;"><!></div>'),dt=h('<div style="max-width:420px;"><!></div>'),ht=h('<div style="max-width:420px;"><button type="button" data-testid="scrollkey-toggle">toggle mount</button> <!></div>'),ut=h('<div style="max-width:420px;"><!></div>'),pt=h('<div style="max-width:420px;"><!></div>'),ft=h('<div style="max-width:420px;"><!></div>'),yt=h('<div style="max-width:420px;"><!></div>'),vt=h("<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>  <!> <!> <!> <!> <!> <!>",1);function Te(T,i){_e(i,!0);let x=I(!0);var W=vt(),C=Se(W);v(C,{name:"Default",asChild:!0,children:(a,e)=>{var t=Ue(),o=u(t);y(o,{get content(){return _},contentWidth:k,ariaLabel:"Demo strip"}),d(a,t)},$$slots:{default:!0},parameters:{docs:{description:{story:"Default: fades + arrows appear only where there's off-screen content."}},__svelteCsf:{rawCode:`<div style="max-width:420px;">
	<HScroller content={chips} contentWidth={CONTENT_WIDTH} ariaLabel="Demo strip" />
</div>`}}});var b=p(C,2);v(b,{name:"No arrows / no fade",asChild:!0,children:(a,e)=>{var t=Je(),o=u(t);y(o,{get content(){return _},contentWidth:k,arrows:!1,edgeFade:!1,ariaLabel:"Demo strip, chrome-less"}),d(a,t)},$$slots:{default:!0},parameters:{docs:{description:{story:"Chrome-less: no fades/arrows — plain scroll track (e.g. a minimal chip strip)."}},__svelteCsf:{rawCode:`<div style="max-width:420px;">
	<HScroller
		content={chips}
		contentWidth={CONTENT_WIDTH}
		arrows={false}
		edgeFade={false}
		ariaLabel="Demo strip, chrome-less"
	/>
</div>`}}});var O=p(b,2);v(O,{name:"Pointer-only (ariaHidden)",asChild:!0,children:(a,e)=>{var t=Qe(),o=u(t);y(o,{get content(){return ke},contentWidth:k,ariaHidden:!0}),d(a,t)},$$slots:{default:!0},parameters:{docs:{description:{story:"Pointer-only chrome: aria-hidden root, no focusable controls — the filmstrip's mode."}},__svelteCsf:{rawCode:`<div style="max-width:420px;">
	<HScroller content={chipsNonFocusable} contentWidth={CONTENT_WIDTH} ariaHidden />
</div>`}}});var Q=p(O,2);v(Q,{name:"Keyboard paging",asChild:!0,play:async({canvasElement:a})=>{const e=a.querySelector(".hs-track");if(await r(e).not.toBeNull(),!e)return;e.focus(),await r(document.activeElement).toBe(e);const t=e.scrollLeft;await g.keyboard("{ArrowRight}"),await l(async()=>{await r(e.scrollLeft).toBeGreaterThan(t)}),e.scrollLeft=e.scrollWidth,await l(async()=>{await r(a.querySelector(".hs-arrow.next")).toBeNull()})},children:(a,e)=>{var t=Ze(),o=u(t);y(o,{get content(){return _},contentWidth:k,ariaLabel:"Keyboard paging demo"}),d(a,t)},$$slots:{default:!0},parameters:{docs:{description:{story:`Keyboard + a11y interaction test (rule 10):
- Focuses the scroll track directly and asserts it's the active element.
- Sends ArrowRight and asserts scrollLeft increased (keyboard paging).
- Scrolls to the end and asserts the right arrow disappears (auto-hide at
  the ends — the same visibility rule the fades follow).`}},__svelteCsf:{rawCode:`<div style="max-width:420px;">
	<HScroller content={chips} contentWidth={CONTENT_WIDTH} ariaLabel="Keyboard paging demo" />
</div>`}}});var Z=p(Q,2);v(Z,{name:"Arrow keys inside a nested input are not hijacked",asChild:!0,play:async({canvasElement:a})=>{const e=a.querySelector(".hs-track"),t=a.querySelector(".demo-input");if(await r(e).not.toBeNull(),await r(t).not.toBeNull(),!e||!t)return;t.focus(),await r(document.activeElement).toBe(t),await g.type(t,"hello"),t.setSelectionRange(0,0);const o=e.scrollLeft;await g.keyboard("{ArrowRight}"),await l(async()=>{await r(t.selectionStart).toBe(1)}),await r(e.scrollLeft).toBe(o)},children:(a,e)=>{var t=at(),o=u(t);y(o,{ariaLabel:"Nested-input demo",content:H=>{var A=tt();R(A,"display:flex; gap:8px; padding:0.5rem; width:1372px;");var oe=p(u(A),2);ce(oe,16,()=>de,U=>U,(U,K)=>{var G=et(),ne=u(G);J(()=>{R(G,`flex:0 0 90px; height:64px; border-radius:8px; border:1px solid var(--border); background:hsl(${K*47%360} 70% 55%); color:#fff; font-weight:600;`),le(ne,K)}),d(U,G)}),d(H,A)},$$slots:{content:!0}}),d(a,t)},$$slots:{default:!0},parameters:{docs:{description:{story:`Regression test: a text input nested inside the track must keep its OWN ArrowLeft/
ArrowRight caret-movement semantics — the track's keyboard-paging handler must not
hijack a keystroke aimed at the input just because it bubbles through the track (found
in expert review: the wikipedia app's gallery editor nests text inputs directly in the
content it hands HScroller).
- Focuses a text input inside the track (not the track itself).
- Types text, moves the caret to the start with Home, then presses ArrowRight and
  asserts the caret actually advanced (selectionStart 0 → 1) — if the track's handler
  had intercepted the key, the caret would stay at 0 and this would fail.
- Confirms the track's OWN scrollLeft did NOT change from that keystroke (it shouldn't
  page just because a descendant input happened to handle an arrow key).`}},__svelteCsf:{rawCode:`<div style="max-width:420px;">
	<HScroller ariaLabel="Nested-input demo">
		{#snippet content()}
			<div style="display:flex; gap:{GAP}px; padding:0.5rem; width:{CONTENT_WIDTH}px;">
				<input
					class="demo-input"
					aria-label="Demo text field"
					style="flex:0 0 160px; height:40px;"
				/>
				{#each items as i (i)}
					<button
						type="button"
						class="demo-chip"
						style="flex:0 0 {ITEM_W}px; height:64px; border-radius:8px; border:1px solid var(--border); background:hsl({(i *
							47) %
							360} 70% 55%); color:#fff; font-weight:600;"
					>
						{i}
					</button>
				{/each}
			</div>
		{/snippet}
	</HScroller>
</div>`}}});var c=p(Z,2);v(c,{name:"Arrow click paging",asChild:!0,play:async({canvasElement:a})=>{const e=a.querySelector(".hs-track"),t=a.querySelector(".hs-arrow.next");if(await r(e).not.toBeNull(),await r(t).not.toBeNull(),!e||!t)return;const o=e.scrollLeft;t.click(),await l(async()=>{await r(e.scrollLeft).toBeGreaterThan(o)}),e.focus();const S=e.scrollLeft;await g.keyboard("{ArrowRight}"),await l(async()=>{await r(e.scrollLeft).toBeGreaterThan(S)})},children:(a,e)=>{var t=rt(),o=u(t);y(o,{get content(){return _},contentWidth:k,ariaLabel:"Arrow click demo"}),d(a,t)},$$slots:{default:!0},parameters:{docs:{description:{story:`Mouse arrow-click paging (distinct code path from keyboard paging above: the
    arrow's onclick handler, not onTrackKeydown).`}},__svelteCsf:{rawCode:`<div style="max-width:420px;">
	<HScroller content={chips} contentWidth={CONTENT_WIDTH} ariaLabel="Arrow click demo" />
</div>`}}});var E=p(c,2);v(E,{name:"Arrow click paging clamps at content end (no overscroll)",asChild:!0,play:async({canvasElement:a})=>{const e=a.querySelector(".hs-track");if(await r(e).not.toBeNull(),!e)return;const t=e.scrollWidth-e.clientWidth;e.scrollLeft=t-40;let o=null;await l(async()=>{o=a.querySelector(".hs-arrow.next"),await r(o).not.toBeNull()}),o.click(),await l(async()=>{await r(e.scrollLeft).toBe(t)}),e.scrollLeft=t-10,e.focus(),await g.keyboard("{ArrowRight}"),await l(async()=>{await r(e.scrollLeft).toBe(t)})},children:(a,e)=>{var t=ot(),o=u(t);y(o,{get content(){return _},contentWidth:k,ariaLabel:"Arrow click clamp demo (end)"}),d(a,t)},$$slots:{default:!0},parameters:{docs:{description:{story:`Regression test: a page must never request more than what's actually left to
    scroll. Jumps to just short of the end (well under a full \`pageBy\` page) so the
    click's requested delta would overshoot the bound if \`page()\` didn't clamp it —
    asserts the strip lands EXACTLY at the max scrollLeft, not merely "increased" (the
    "Arrow click paging" story above only checks direction, not the landing point).`}},__svelteCsf:{rawCode:`<div style="max-width:420px;">
	<HScroller
		content={chips}
		contentWidth={CONTENT_WIDTH}
		ariaLabel="Arrow click clamp demo (end)"
	/>
</div>`}}});var P=p(E,2);v(P,{name:"Arrow click paging clamps at content start (no overscroll)",asChild:!0,play:async({canvasElement:a})=>{const e=a.querySelector(".hs-track");if(await r(e).not.toBeNull(),!e)return;e.scrollLeft=40;let t=null;await l(async()=>{t=a.querySelector(".hs-arrow.prev"),await r(t).not.toBeNull()}),t.click(),await l(async()=>{await r(e.scrollLeft).toBe(0)}),e.scrollLeft=10,e.focus(),await g.keyboard("{ArrowLeft}"),await l(async()=>{await r(e.scrollLeft).toBe(0)})},children:(a,e)=>{var t=nt(),o=u(t);y(o,{get content(){return _},contentWidth:k,ariaLabel:"Arrow click clamp demo (start)"}),d(a,t)},$$slots:{default:!0},parameters:{docs:{description:{story:"Symmetric left-arrow coverage — the clamp computes `remaining` differently per\n    direction (scrollLeft itself vs. scrollWidth - clientWidth - scrollLeft), so a\n    one-sided fix to only the right/next branch wouldn't be caught without this."}},__svelteCsf:{rawCode:`<div style="max-width:420px;">
	<HScroller
		content={chips}
		contentWidth={CONTENT_WIDTH}
		ariaLabel="Arrow click clamp demo (start)"
	/>
</div>`}}});var Y=p(P,2);v(Y,{name:"Wheel forwarding",asChild:!0,play:async({canvasElement:a})=>{const e=a.querySelector(".hs-track");if(await r(e).not.toBeNull(),!e)return;const t=e.scrollLeft;e.dispatchEvent(new WheelEvent("wheel",{deltaY:120,deltaX:0,bubbles:!0,cancelable:!0})),await l(async()=>{await r(e.scrollLeft).toBeGreaterThan(t)}),e.focus();const o=e.scrollLeft;await g.keyboard("{ArrowRight}"),await l(async()=>{await r(e.scrollLeft).toBeGreaterThan(o)})},children:(a,e)=>{var t=st(),o=u(t);y(o,{get content(){return _},contentWidth:k,ariaLabel:"Wheel forwarding demo"}),d(a,t)},$$slots:{default:!0},parameters:{docs:{description:{story:`Wheel forwarding: a vertical-only wheel over the track redirects to horizontal
    scroll (onTrackWheel) — the path a plain (non-trackpad) wheel mouse relies on.`}},__svelteCsf:{rawCode:`<div style="max-width:420px;">
	<HScroller content={chips} contentWidth={CONTENT_WIDTH} ariaLabel="Wheel forwarding demo" />
</div>`}}});var z=p(Y,2);v(z,{name:"Wheel at content end falls through to the page (no capture)",asChild:!0,play:async({canvasElement:a})=>{const e=a.querySelector(".hs-track");if(await r(e).not.toBeNull(),!e)return;e.scrollLeft=e.scrollWidth-e.clientWidth,await l(async()=>{await r(a.querySelector(".hs-arrow.next")).toBeNull()});const t=new WheelEvent("wheel",{deltaY:120,deltaX:0,bubbles:!0,cancelable:!0});e.dispatchEvent(t),await r(t.defaultPrevented).toBe(!1);const o=e.scrollLeft;e.focus(),await g.keyboard("{ArrowRight}"),await l(async()=>{await r(e.scrollLeft).toBe(o)})},children:(a,e)=>{var t=it(),o=u(t);y(o,{get content(){return _},contentWidth:k,ariaLabel:"Wheel exhausted-end demo"}),d(a,t)},$$slots:{default:!0},parameters:{docs:{description:{story:`Regression test: a vertical wheel over an EXHAUSTED track (nothing left to scroll
    that way) must NOT be captured — without this, a track embedded inline in a
    normally page-scrolling document (the Wikipedia gallery block's real case) blocks
    the page underneath from scrolling at all once the cursor sits over a
    fully-scrolled strip. Asserts the event's default was left alone (not
    preventDefault()'d), not just that scrollLeft stayed put — that alone would pass
    even with the bug, since the browser already clamps scrollLeft on its own.`}},__svelteCsf:{rawCode:`<div style="max-width:420px;">
	<HScroller
		content={chips}
		contentWidth={CONTENT_WIDTH}
		ariaLabel="Wheel exhausted-end demo"
	/>
</div>`}}});var $=p(z,2);v($,{name:"Wheel at content start falls through to the page (no capture)",asChild:!0,play:async({canvasElement:a})=>{const e=a.querySelector(".hs-track");if(await r(e).not.toBeNull(),!e)return;await r(a.querySelector(".hs-arrow.prev")).toBeNull();const t=new WheelEvent("wheel",{deltaY:-120,deltaX:0,bubbles:!0,cancelable:!0});e.dispatchEvent(t),await r(t.defaultPrevented).toBe(!1),e.focus(),await g.keyboard("{ArrowLeft}"),await l(async()=>{await r(e.scrollLeft).toBe(0)})},children:(a,e)=>{var t=lt(),o=u(t);y(o,{get content(){return _},contentWidth:k,ariaLabel:"Wheel exhausted-start demo"}),d(a,t)},$$slots:{default:!0},parameters:{docs:{description:{story:"Symmetric start/left coverage — `onTrackWheel` checks `canLeft`/`canRight`\n    independently per direction, so a one-sided fix wouldn't be caught without this."}},__svelteCsf:{rawCode:`<div style="max-width:420px;">
	<HScroller
		content={chips}
		contentWidth={CONTENT_WIDTH}
		ariaLabel="Wheel exhausted-start demo"
	/>
</div>`}}});var D=p($,2);v(D,{name:"Measured width fallback (no contentWidth)",asChild:!0,play:async({canvasElement:a})=>{await l(async()=>{await r(a.querySelector(".hs-arrow.next")).not.toBeNull()});const e=a.querySelector(".hs-track");if(await r(e).not.toBeNull(),!e)return;e.focus();const t=e.scrollLeft;await g.keyboard("{ArrowRight}"),await l(async()=>{await r(e.scrollLeft).toBeGreaterThan(t)})},children:(a,e)=>{var t=ct(),o=u(t);y(o,{get content(){return _},ariaLabel:"No contentWidth demo"}),d(a,t)},$$slots:{default:!0},parameters:{docs:{description:{story:`contentWidth omitted: HScroller must fall back to measuring trackEl.scrollWidth
    itself — proven here by canRight (and therefore the right arrow) still coming
    out correctly without the prop.`}},__svelteCsf:{rawCode:`<div style="max-width:420px;">
	<HScroller content={chips} ariaLabel="No contentWidth demo" />
</div>`}}});var M=p(D,2);v(M,{name:"Empty content",asChild:!0,play:async({canvasElement:a})=>{await r(a.querySelector(".hs-arrow")).toBeNull(),await r(a.querySelector(".hs-fade.show")).toBeNull();const e=a.querySelector(".hs-track");await r(e).not.toBeNull(),e&&(e.focus(),await g.keyboard("{ArrowRight}"),await r(e.scrollLeft).toBe(0))},children:(a,e)=>{var t=dt(),o=u(t);y(o,{get content(){return qe},contentWidth:0,ariaLabel:"Empty demo"}),d(a,t)},$$slots:{default:!0},parameters:{docs:{description:{story:`Empty content: canLeft/canRight must both come out false (0-width content),
    so no arrows/fades render — this is the actual shape the "recent searches"
    backlog consumer starts from before any history exists.`}},__svelteCsf:{rawCode:`<div style="max-width:420px;">
	<HScroller content={emptyContent} contentWidth={0} ariaLabel="Empty demo" />
</div>`}}});var X=p(M,2);v(X,{name:"scrollKey persistence",asChild:!0,play:async({canvasElement:a})=>{let e=a.querySelector(".hs-track");if(await r(e).not.toBeNull(),!e)return;e.scrollLeft=200,e.dispatchEvent(new Event("scroll")),await r(e.scrollLeft).toBeGreaterThan(150);const t=a.querySelector('[data-testid="scrollkey-toggle"]');if(await r(t).not.toBeNull(),!t)return;t.click(),await l(async()=>{await r(a.querySelector(".hs-track")).toBeNull()}),t.click(),await l(async()=>{e=a.querySelector(".hs-track"),await r(e).not.toBeNull(),await r(e.scrollLeft).toBeGreaterThan(150)}),e.focus();const o=e.scrollLeft;await g.keyboard("{ArrowRight}"),await l(async()=>{await r(e.scrollLeft).toBeGreaterThan(o)})},children:(a,e)=>{var t=ht(),o=u(t);o.__click=()=>L(x,!s(x));var S=p(o,2);{var H=A=>{y(A,{get content(){return _},contentWidth:k,scrollKey:"hscroller-story:demo",ariaLabel:"scrollKey demo"})};re(S,A=>{s(x)&&A(H)})}d(a,t)},$$slots:{default:!0},parameters:{docs:{description:{story:`scrollKey persistence: scroll, unmount, remount — scrollLeft must be restored
    from the shared scrollMemory store, not reset to 0.`}},__svelteCsf:{rawCode:`<div style="max-width:420px;">
	<button
		type="button"
		data-testid="scrollkey-toggle"
		onclick={() => (scrollKeyMounted = !scrollKeyMounted)}
	>
		toggle mount
	</button>
	{#if scrollKeyMounted}
		<HScroller
			content={chips}
			contentWidth={CONTENT_WIDTH}
			scrollKey="hscroller-story:demo"
			ariaLabel="scrollKey demo"
		/>
	{/if}
</div>`}}});var V=p(X,2);v(V,{name:"Focus preserved at scroll end",asChild:!0,play:async({canvasElement:a})=>{const e=a.querySelector(".hs-track");if(await r(e).not.toBeNull(),!e)return;e.scrollLeft=e.scrollWidth-e.clientWidth-40;let t=null;await l(async()=>{t=a.querySelector(".hs-arrow.next"),await r(t).not.toBeNull()}),t.focus(),await r(document.activeElement).toBe(t),await g.keyboard("{Enter}"),await l(async()=>{await r(document.activeElement).toBe(t)}),await l(async()=>{await r(t.classList.contains("kit-nav-arrow-inactive")).toBe(!0)}),await r(getComputedStyle(t).opacity).not.toBe("0"),await r(getComputedStyle(t).outlineStyle).toBe("solid"),e.focus(),await l(async()=>{await r(a.querySelector(".hs-arrow.next")).toBeNull()})},children:(a,e)=>{var t=ut(),o=u(t);y(o,{get content(){return _},contentWidth:k,ariaLabel:"Focus regression demo"}),d(a,t)},$$slots:{default:!0},parameters:{docs:{description:{story:`Regression test for two real bugs an independent review panel caught, both in
default (non-ariaHidden) mode:
1. A keyboard-focused paging arrow used to unmount ITSELF once scrolling
   reached the end (canRight flips false), which per the HTML spec drops
   focus to <body> — losing the keyboard user's place, and inside a
   focus-trapped dialog, potentially letting native Tab escape the trap.
   Fixed by keeping a focused arrow mounted until it naturally loses focus.
2. The first fix's own CSS (\`opacity:0\` on the now-inactive arrow) ALSO hid
   its :focus-visible outline — DOM focus was preserved but became
   INVISIBLE, itself a WCAG 2.4.7 failure. Fixed by restoring visibility +
   interactivity specifically on :focus-visible.
This test asserts focus lands on (not merely "not <body>") AND is visibly
indicated on the specific arrow — either regressing fails it.`}},__svelteCsf:{rawCode:`<div style="max-width:420px;">
	<HScroller content={chips} contentWidth={CONTENT_WIDTH} ariaLabel="Focus regression demo" />
</div>`}}});var ee=p(V,2);v(ee,{name:"Focus preserved at scroll start (left arrow)",asChild:!0,play:async({canvasElement:a})=>{const e=a.querySelector(".hs-track");if(await r(e).not.toBeNull(),!e)return;e.scrollLeft=40,e.dispatchEvent(new Event("scroll"));let t=null;await l(async()=>{t=a.querySelector(".hs-arrow.prev"),await r(t).not.toBeNull()}),t.focus(),await r(document.activeElement).toBe(t),await g.keyboard("{Enter}"),await l(async()=>{await r(document.activeElement).toBe(t)}),await l(async()=>{await r(t.classList.contains("kit-nav-arrow-inactive")).toBe(!0)}),await r(getComputedStyle(t).opacity).not.toBe("0"),await r(getComputedStyle(t).outlineStyle).toBe("solid")},children:(a,e)=>{var t=pt(),o=u(t);y(o,{get content(){return _},contentWidth:k,ariaLabel:"Left focus regression demo"}),d(a,t)},$$slots:{default:!0},parameters:{docs:{description:{story:`Symmetric left-arrow/ArrowLeft coverage — same code paths as the two
    stories above (Keyboard paging, Focus preserved at scroll end) but
    structurally distinct branches (leftFocused vs rightFocused, canLeft vs
    canRight), so a one-sided fix to only the right side wouldn't be caught
    without this.`}},__svelteCsf:{rawCode:`<div style="max-width:420px;">
	<HScroller
		content={chips}
		contentWidth={CONTENT_WIDTH}
		ariaLabel="Left focus regression demo"
	/>
</div>`}}});var F=p(ee,2);v(F,{name:"Wheel over arrow forwards to track",asChild:!0,play:async({canvasElement:a})=>{const e=a.querySelector(".hs-track"),t=a.querySelector(".hs-arrow.next");if(await r(e).not.toBeNull(),await r(t).not.toBeNull(),!e||!t)return;const o=e.scrollLeft;t.dispatchEvent(new WheelEvent("wheel",{deltaY:60,deltaX:0,bubbles:!0,cancelable:!0})),await l(async()=>{await r(e.scrollLeft).toBeGreaterThan(o)}),t.focus();const S=e.scrollLeft;await g.keyboard("{Enter}"),await l(async()=>{await r(e.scrollLeft).toBeGreaterThan(S)})},children:(a,e)=>{var t=ft(),o=u(t);y(o,{get content(){return _},contentWidth:k,ariaLabel:"Wheel-over-arrow demo"}),d(a,t)},$$slots:{default:!0},parameters:{docs:{description:{story:`Wheel-over-arrow forwarding (fwdWheel) — distinct code path from
    "Wheel forwarding" above, which dispatches on the track itself
    (onTrackWheel). The overlaid arrow is a wheel dead zone without this.`}},__svelteCsf:{rawCode:`<div style="max-width:420px;">
	<HScroller content={chips} contentWidth={CONTENT_WIDTH} ariaLabel="Wheel-over-arrow demo" />
</div>`}}});var te=p(F,2);v(te,{name:"ariaHidden contract",asChild:!0,play:async({canvasElement:a})=>{const e=a.querySelector(".hs-wrap");await r(e).not.toBeNull(),await r(e.getAttribute("aria-hidden")).toBe("true");const t=a.querySelector(".hs-track");await r(t).not.toBeNull(),await r(t.getAttribute("tabindex")).toBe("-1");const o=a.querySelector(".hs-arrow.next");await r(o).not.toBeNull(),await r(o.getAttribute("tabindex")).toBe("-1");const S=t.scrollLeft;o.click(),await l(async()=>{await r(t.scrollLeft).toBeGreaterThan(S)}),await r(document.activeElement).not.toBe(o),await r(document.activeElement).not.toBe(t),t.focus();const H=t.scrollLeft;await g.keyboard("{ArrowRight}"),await r(t.scrollLeft).toBe(H)},children:(a,e)=>{var t=yt(),o=u(t);y(o,{get content(){return ke},contentWidth:k,ariaHidden:!0}),d(a,t)},$$slots:{default:!0},parameters:{docs:{description:{story:`ariaHidden contract (rule 9 deviation, documented in hscroller.md): root is
    aria-hidden, arrows are non-focusable and don't move focus on click, and
    no keyboard handler is attached — this is the filmstrip's actual mode in
    production, and was the only story with zero play() coverage.`}},__svelteCsf:{rawCode:`<div style="max-width:420px;">
	<HScroller content={chipsNonFocusable} contentWidth={CONTENT_WIDTH} ariaHidden />
</div>`}}}),d(T,W),xe()}Ce(["mousedown","click"]);Te.__docgen={data:[],name:"HScroller.stories.svelte"};const w=Ee(Te,Ge),Nt=["Default","NoArrowsNoFade","PointerOnlyAriaHidden","KeyboardPaging","ArrowKeysInsideANestedInputAreNotHijacked","ArrowClickPaging","ArrowClickPagingClampsAtContentEndNoOverscroll","ArrowClickPagingClampsAtContentStartNoOverscroll","WheelForwarding","WheelAtContentEndFallsThroughToThePageNoCapture","WheelAtContentStartFallsThroughToThePageNoCapture","MeasuredWidthFallbackNoContentWidth","EmptyContent","ScrollKeyPersistence","FocusPreservedAtScrollEnd","FocusPreservedAtScrollStartLeftArrow","WheelOverArrowForwardsToTrack","AriaHiddenContract"],Lt={...w.Default,tags:["svelte-csf-v5"]},Ht={...w.NoArrowsNoFade,tags:["svelte-csf-v5"]},Bt={...w.PointerOnlyAriaHidden,tags:["svelte-csf-v5"]},Et={...w.KeyboardPaging,tags:["svelte-csf-v5"]},Pt={...w.ArrowKeysInsideANestedInputAreNotHijacked,tags:["svelte-csf-v5"]},Ft={...w.ArrowClickPaging,tags:["svelte-csf-v5"]},Ot={...w.ArrowClickPagingClampsAtContentEndNoOverscroll,tags:["svelte-csf-v5"]},$t={...w.ArrowClickPagingClampsAtContentStartNoOverscroll,tags:["svelte-csf-v5"]},Dt={...w.WheelForwarding,tags:["svelte-csf-v5"]},Kt={...w.WheelAtContentEndFallsThroughToThePageNoCapture,tags:["svelte-csf-v5"]},qt={...w.WheelAtContentStartFallsThroughToThePageNoCapture,tags:["svelte-csf-v5"]},It={...w.MeasuredWidthFallbackNoContentWidth,tags:["svelte-csf-v5"]},Rt={...w.EmptyContent,tags:["svelte-csf-v5"]},Mt={...w.ScrollKeyPersistence,tags:["svelte-csf-v5"]},Gt={...w.FocusPreservedAtScrollEnd,tags:["svelte-csf-v5"]},jt={...w.FocusPreservedAtScrollStartLeftArrow,tags:["svelte-csf-v5"]},Yt={...w.WheelOverArrowForwardsToTrack,tags:["svelte-csf-v5"]},zt={...w.AriaHiddenContract,tags:["svelte-csf-v5"]};export{zt as AriaHiddenContract,Ft as ArrowClickPaging,Ot as ArrowClickPagingClampsAtContentEndNoOverscroll,$t as ArrowClickPagingClampsAtContentStartNoOverscroll,Pt as ArrowKeysInsideANestedInputAreNotHijacked,Lt as Default,Rt as EmptyContent,Gt as FocusPreservedAtScrollEnd,jt as FocusPreservedAtScrollStartLeftArrow,Et as KeyboardPaging,It as MeasuredWidthFallbackNoContentWidth,Ht as NoArrowsNoFade,Bt as PointerOnlyAriaHidden,Mt as ScrollKeyPersistence,Kt as WheelAtContentEndFallsThroughToThePageNoCapture,qt as WheelAtContentStartFallsThroughToThePageNoCapture,Dt as WheelForwarding,Yt as WheelOverArrowForwardsToTrack,Nt as __namedExportsOrder,Ge as default};
