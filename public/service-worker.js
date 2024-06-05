const CACHE_NAME = "cache-v2"; // Erhöhe die Versionsnummer bei jeder neuen Version
const urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/logo192.png",
  "/logo512.png",
  // Add other assets you want to cache
];

self.addEventListener("install", (event) => {
  console.log("[Service Worker] Install Event processing");

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[Service Worker] Pre-caching offline page");
      return cache.addAll(urlsToCache);
    })
  );

  self.skipWaiting(); // Force the waiting service worker to become the active service worker
});

self.addEventListener("fetch", (event) => {
  console.log(`[Service Worker] Fetch event for ${event.request.url}`);

  if (event.request.url.startsWith("http")) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          console.log(`[Service Worker] Found ${event.request.url} in cache`);
          return response;
        }

        console.log(
          `[Service Worker] Network request for ${event.request.url}`
        );
        return fetch(event.request).then((response) => {
          if (
            !response ||
            response.status !== 200 ||
            response.type !== "basic"
          ) {
            return response;
          }

          const responseToCache = response.clone();

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        });
      })
    );
  }
});

self.addEventListener("activate", (event) => {
  console.log("[Service Worker] Activate event");

  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log(`[Service Worker] Deleting cache: ${cacheName}`);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );

  self.clients.claim(); // Take control of all clients immediately
});
