// Offline cache for ACCA FA 入門. Bump CACHE when files change to force a clean refresh.
var CACHE = 'acca-study-v1';
var FILES = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './content.js',
  './manifest.webmanifest',
  './icon.svg',
  './icon-512.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

// Stale-while-revalidate: answer from cache instantly, refresh the cache in the background.
self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  e.respondWith(
    caches.open(CACHE).then(function (cache) {
      return cache.match(req, { ignoreSearch: true }).then(function (hit) {
        var net = fetch(req).then(function (res) {
          if (res && res.ok && res.type === 'basic') cache.put(req, res.clone());
          return res;
        }).catch(function () {
          if (hit) return hit;
          if (req.mode === 'navigate') return cache.match('./index.html');
          return Response.error();
        });
        if (hit) { e.waitUntil(net.catch(function () {})); return hit; }
        return net;
      });
    })
  );
});
