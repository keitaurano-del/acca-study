// Offline cache for ACCA FA 入門.
// The block between BUILD:START and BUILD:END is rewritten by build-manifest.js
// (cache name = hash of the cached files, file list = app files + content units).
// BUILD:START
var CACHE = "acca-study-eaada53f713d";
var FILES = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./icon.svg",
  "./icon-512.png",
  "./apple-touch-icon.png",
  "./content/index.js",
  "./content/u01.js",
  "./content/u02.js",
  "./content/u03.js",
  "./content/u04.js",
  "./content/u05.js",
  "./content/u06.js",
  "./content/u07.js",
  "./content/u08.js",
  "./content/u09.js",
  "./content/u10.js",
  "./content/u11.js",
  "./content/u12.js",
  "./content/u13.js",
  "./content/u14.js",
  "./content/u15.js",
  "./content/u16.js",
  "./content/u17.js",
  "./content/u18.js",
  "./content/u19.js",
  "./content/u20.js",
  "./content/u21.js",
  "./content/u22.js",
  "./content/u23.js",
  "./content/u24.js",
  "./content/u25.js",
  "./content/u26.js",
  "./content/u27.js",
  "./content/u28.js",
  "./content/u29.js",
  "./content/u30.js",
  "./content/u31.js",
  "./content/u32.js",
  "./content/u33.js",
  "./content/u34.js",
  "./content/u35.js",
  "./content/u101.js",
  "./content/u102.js",
  "./content/u103.js",
  "./content/u104.js",
  "./content/u105.js",
  "./content/u106.js",
  "./content/u107.js",
  "./content/u108.js",
  "./content/u109.js",
  "./content/u110.js",
  "./content/u111.js",
  "./content/u112.js",
  "./content/u113.js",
  "./content/u114.js",
  "./content/u115.js",
  "./content/u116.js",
  "./content/u117.js",
  "./content/u118.js",
  "./content/u119.js",
  "./content/u120.js",
  "./content/u121.js",
  "./content/u122.js",
  "./content/u123.js",
  "./content/u124.js",
  "./content/u125.js",
  "./content/u126.js",
  "./content/u127.js",
  "./content/u128.js",
  "./content/u129.js",
  "./content/u130.js",
  "./content/u131.js",
  "./content/u132.js",
  "./content/u133.js",
  "./content/u134.js",
  "./content/u135.js",
  "./content/u136.js",
  "./content/u137.js",
  "./content/u138.js",
  "./content/u139.js",
  "./content/u140.js",
  "./content/u141.js",
  "./content/u201.js",
  "./content/u202.js",
  "./content/u203.js",
  "./content/u204.js",
  "./content/u205.js",
  "./content/u206.js",
  "./content/u207.js",
  "./content/u208.js",
  "./content/u209.js",
  "./content/u210.js",
  "./content/u211.js",
  "./content/u212.js",
  "./content/u213.js",
  "./content/u214.js",
  "./content/u215.js",
  "./content/u216.js",
  "./content/u217.js",
  "./content/u218.js",
  "./content/u219.js",
  "./content/u220.js",
  "./content/u221.js",
  "./content/u222.js",
  "./content/u223.js",
  "./content/u224.js",
  "./content/u225.js",
  "./content/u226.js",
  "./content/u227.js",
  "./content/u228.js"
];
// BUILD:END

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
