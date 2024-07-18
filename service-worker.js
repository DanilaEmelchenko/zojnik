self.addEventListener('install', event => {
	event.waitUntil(
		caches.open('v1').then(cache => {
			return cache.addAll([
				'/',
				'/index.html',
				'/icons8-green-apple-96_192x192.png',
				'/icons8-green-apple-96_1_512x512.png',
				'/manifest.webmanifest',
			]);
		}),
	);
});

self.addEventListener('fetch', event => {
	event.respondWith(
		caches.match(event.request).then(response => {
			return response || fetch(event.request);
		}),
	);
});
