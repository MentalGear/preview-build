# preview-build

Static host for preview builds. An upstream build pushes its output here under
`preview-deploy/<branch-slug>/`, and GitHub Pages serves it from
`https://mentalgear.github.io/preview-build/`.

This repo controls two things only: **where** build output lands, and **when** a
preview link is handed to a reviewer. It cannot influence how the deployed app
caches itself — see rule 3.

## Deployment rules

### 0. Release Build

To publish a release build, deploy them directly under `release/` e.g. `release/app-kit`.

### 1. One stable path per branch

Deploy to `preview-deploy/<branch-slug>/`, overwriting in place. Do not append
a per-deploy hash, and do not delete the folder before deploying.

Each branch keeps one durable URL for its whole life, so a link stays valid in a
chat thread or a bookmark across every redeploy. Overwriting in place is a
single Pages build, and the previous preview stays reachable until the moment
the new one replaces it.

### 2. Never share a preview link before it is verified live

This is the rule that matters most. The common failure is a reviewer opening a
preview while the build promised to them is still in flight: they see the
previous version, conclude the fix didn't work, and report a false negative.

**A successful push is not a deploy.** Pages still has to build and propagate,
so "I pushed" is not the signal to share the link. Verify it, don't assume it:

1. Every deploy must write a build marker at the root of its deploy folder —
   `build-id.txt`, containing the source commit SHA it was built from.
2. After pushing, poll that marker until it returns the expected SHA:

   ```bash
   # BUILD_ID is the source commit SHA baked into build-id.txt
   URL="https://mentalgear.github.io/preview-build/preview-deploy/<branch-slug>"
   for i in $(seq 1 40); do
     got=$(curl -fsS "$URL/build-id.txt?cb=$i" 2>/dev/null || true)
     [ "$got" = "$BUILD_ID" ] && echo "live" && exit 0
     sleep 15
   done
   echo "preview did not go live within 10m" >&2; exit 1
   ```

3. Only once the marker matches may the link be shared or the preview described
   as ready. If it never matches, report the deploy as failed — do not hand over
   the link with a caveat attached.

The `?cb=$i` is there because the marker is fetched over plain HTTP by a script,
where a varying query string reliably defeats CDN and proxy caching. That trick
does *not* work against a service worker, which is why it is not a general
answer to stale previews — see rule 3.

### 3. Cache correctness belongs to the app

A static host cannot fix an app that caches itself badly. GitHub Pages exposes
no response-header control — no `_headers`, no `.htaccess`, no per-path cache
config — and nothing pushed here can unregister a service worker already
installed in someone's browser.

The builds deployed here register a Workbox service worker scoped to their own
deploy folder, precache the app shell, and bind a `NavigationRoute` to the
folder's directory URL. Navigations in that scope are answered cache-first from
Cache Storage without consulting the network, so a redeploy to the same path can
still render the previous shell until the service worker updates and the page is
reloaded.

Fixing that is the app build's responsibility. A preview build should either not
register a service worker at all, or use an update strategy that never serves a
stale shell on first load.

**Diagnostic consequence:** if a reviewer sees an old build at a URL whose
`build-id.txt` already reports the new SHA, the deploy succeeded and the
staleness is app-side service worker behavior. Fix it in the app's PWA config.
Do not work around it here by mutating deploy paths — that trades every branch's
stable URL for a symptom patch.
