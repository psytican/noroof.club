const CACHE_NAME = 'noroof-club--cache-version--3';

const urlsToCache = [
    '/',
    '/index.html',
    '/radio-ambient.html',
    '/radio-drumnbass.html',
    '/radio-gettotech.html',
    '/radio-indie-dance.html',
    '/radio-psydub.html',
    '/radio-psytrance.html',
    '/radio-techno.html',
    '/css/0.css',
    '/css/480.css',
    '/css/768.css',
    '/css/960.css',
    '/css/1220.css',
    '/css/colors.css',
    '/css/default.css',
    '/css/footer.css',
    '/css/header.css',
    '/css/index.css',
    '/css/main-clean.css',
    '/css/main-map.css',
    '/css/main-player.css',
    '/css/main-radio.css',
    '/js/main.js',
    '/js/radio.js',
    '/js/service-worker.js',
    '/images/button-play.svg',
    '/images/button-stop.svg',
    '/images/icon-192x192.png',
    '/images/icon-512x512.png',
    '/images/loading.gif',
    '/images/logo.svg',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('activate', function(event) {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
