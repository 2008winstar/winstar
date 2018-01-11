/**
 * @file file description here.
 * @author winstar
 * @date 2017/12/19
 */
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/',
    '/styles/main.css',
    '/script/main.js'
];

self.addEventListener('install', function (event) {
    console.log(event);
    console.log(caches)
    event.waitUntil(caches.open(CACHE_NAME).then(function (cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
    }));
});

self.addEventListener('fetch', function (event) {
    console.log('fetch');
    console.log(event.request);
    event.respondWith(caches.match(event.request).then(function (response) {
        if (response) {
            console.log(response);
            return response;
        }
        return fetch(event.request);
    }))
});
