/**
 * Touch Talk's service worker — enables offline use and is part of what
 * makes the app installable ("Add to Home Screen") on mobile browsers.
 *
 * Deliberately a plain static file (not SvelteKit's `src/service-worker.ts`
 * + its `$service-worker` virtual module, which precomputes an asset list
 * at *build* time): this app is deployed under a subpath that varies per
 * target (a Claude Artifact, the GitHub Pages preview, ...) and isn't known
 * at build time (see vite.config.ts's `paths: { relative: true }`), so a
 * build-time asset list keyed by absolute pathname would silently mismatch
 * wherever it actually ends up deployed. Caching whatever's actually
 * fetched at *runtime* instead sidesteps needing to know that prefix in
 * advance — the same reason every other asset reference in this app is
 * relative rather than root-absolute.
 */

const CACHE_NAME = 'touch-talk-v1';

/**
 * Precaches the app shell on install, so the app can open offline from the
 * *second* visit onward (not just once something happens to already be in
 * the runtime cache from earlier browsing). The shell's own HTML is a
 * stable, always-known URL (`self.registration.scope`), but its JS/CSS
 * bundles are content-hashed per build and genuinely can't be listed here
 * ahead of time — so this fetches the shell HTML once and scrapes its own
 * `href`/`src` script and stylesheet references out of it, resolves them
 * against `scope`, and precaches those too. Best-effort: if parsing fails
 * for any reason, the app still works online, just without full first-load
 * offline coverage (the runtime cache in the `fetch` handler below still
 * fills in from ordinary browsing either way).
 */
async function precacheShell() {
	const cache = await caches.open(CACHE_NAME);
	const scope = self.registration.scope;
	await cache.addAll([scope, `${scope}manifest.webmanifest`]);
	try {
		const html = await (await fetch(scope)).text();
		const urls = new Set();
		for (const match of html.matchAll(/(?:href|src)="([^"]+\.(?:js|css))"/g)) {
			urls.add(new URL(match[1], scope).href);
		}
		await Promise.all(
			[...urls].map(async (url) => {
				const res = await fetch(url);
				if (res.ok) await cache.put(url, res);
			})
		);
	} catch {
		// Best-effort — see doc comment above.
	}
}

self.addEventListener('install', (event) => {
	event.waitUntil(precacheShell());
	self.skipWaiting();
});

self.addEventListener('activate', (event) => {
	event.waitUntil(
		(async () => {
			const keys = await caches.keys();
			await Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)));
			await self.clients.claim();
		})()
	);
});

/**
 * Cache-first for same-origin GET requests (the app shell, JS/CSS bundles,
 * dictionaries), falling back to network and caching a successful result —
 * so a repeat visit (including fully offline) can still load the app and
 * its dictionaries. Cross-origin requests (the TTS API, the CORS proxy in
 * front of it) are deliberately left untouched, straight to network: those
 * responses are session-specific and shouldn't be served stale.
 */
self.addEventListener('fetch', (event) => {
	const request = event.request;
	if (request.method !== 'GET') return;
	if (new URL(request.url).origin !== self.location.origin) return;

	event.respondWith(
		(async () => {
			const cache = await caches.open(CACHE_NAME);
			const cached = await cache.match(request);
			try {
				const response = await fetch(request);
				if (response.ok) cache.put(request, response.clone());
				return response;
			} catch (err) {
				if (cached) return cached;
				throw err;
			}
		})()
	);
});
