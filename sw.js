importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1806b9fde59a932a4596.js",
    "revision": "6d1cc1bd8f8693a9ea64e726e445ba42"
  },
  {
    "url": "/_nuxt/43f1b6470349deb61728.js",
    "revision": "c94ef934866e961157154cc90f470510"
  },
  {
    "url": "/_nuxt/685df0f29f5449d52e4c.js",
    "revision": "d88d64157ce79ec345fc77414ff4a7c3"
  },
  {
    "url": "/_nuxt/9e14356a607e59a60c1a.js",
    "revision": "6440ac293cddccb0f6b47e52ce7d4f09"
  },
  {
    "url": "/_nuxt/a8bd2a307e0b905fa2d5.js",
    "revision": "ca37a541da987072cd05ff53a05683c2"
  },
  {
    "url": "/_nuxt/f576da107ea13d2a8be5.js",
    "revision": "c8fe5820ddb442369508f8048acce6b7"
  },
  {
    "url": "/_nuxt/fec84b8de0772cdb429a.js",
    "revision": "24ecbcda566a606645a7552236db181d"
  }
], {
  "cacheId": "YouDMNotes",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.precaching.precacheAndRoute(['/index.html'])

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

// offlinePage support
const strategy = workbox.strategies.networkOnly()
workbox.routing.registerRoute(new RegExp('/.*'), ({event}) => {
  return strategy.handle({event})
    .catch(() => caches.match('/index.html'))
})
