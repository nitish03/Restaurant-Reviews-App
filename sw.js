const expectCaches = ['restaurant-v1'];

// array of cache files
const cacheFolder = [
  './',
  './index.html',
  './restaurant.html',
  './css/styles.css',
  './js/main.js',
  './js/restaurant_info.js',
  './js/dbhelper.js',
  './data/restaurants.json',
  './img/1.jpg',
  './img/2.jpg',
  './img/3.jpg',
  './img/4.jpg',
  './img/5.jpg',
  './img/6.jpg',
  './img/7.jpg',
  './img/8.jpg',
  './img/9.jpg',
  './img/10.jpg'
];

// install event listener and caching the application shell
self.addEventListener('install', event => {
  // console.log('installing!');

  event.waitUntil(
    caches.open(expectCaches).then(cache => {
      // console.log(cacheFolder);

      return cache.addAll(cacheFolder);
    })
  );
});

// fetch event listener making application offline
self.addEventListener('fetch', event => {
// console.log('ready for fetching offline');

  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
