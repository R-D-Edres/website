const staticCachName = 'site-static';
const assets = [
    '/',
    '/index.html',
    '/js/app.js',
    '/css/style.css'
]

self.addEventListener('install', event => {
    //console.log('service worker has been installed');
    event.waitUntil(
        caches.open(staticCachName).then(cache => {
            console.log('caching shell assets');
            cache.addAll(assets)
        }))
});

self.addEventListener('activate', event => {
  console.log('service worker has been activated');
});

self.addEventListener('fetch', event => {
    //event.respondWith(
    //    caches.match(event.request).then(cacheRes => {
    //        return cacheRes || fetch(event.request);
    //    })
    //);
})
