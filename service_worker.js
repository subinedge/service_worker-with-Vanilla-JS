//cache files

const cacheName = 'v1';
const cacheAssets = [
  'index.html',
  '/images/hero_image.jpg',
  'styles.css',
  'main.js'
];

// install service worker

self.addEventListener('install', e => {
  console.log('Service Worker : Installed');

  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log('Service Worker : Caching files');
        cache.addAll(cacheAssets);
      })

      .then(() => {
        self.skipWaiting();
      })
  );
});

// activate

self.addEventListener('activate', e => {
  console.log('Service Worker : Activated');
  // Remove Unwanted cache version files.. previously stored
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('Service Worker : Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
