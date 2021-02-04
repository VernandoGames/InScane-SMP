/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "003ed69ac208d3ec50cb379d93f32fc8"
  },
  {
    "url": "App.html",
    "revision": "a79d527c4cf6e094bf5ba2f887b92f1e"
  },
  {
    "url": "assets/css/0.styles.05fffb94.css",
    "revision": "1934ab56a07652c695b58c9dfd0b638d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.13f0f968.js",
    "revision": "21e018702f34e8819cef7d0ed982b592"
  },
  {
    "url": "assets/js/11.cc8ada23.js",
    "revision": "b80d350f7ca8b98ddb98e6038d9a98db"
  },
  {
    "url": "assets/js/12.e77a47b8.js",
    "revision": "08869ec706ebed5a0f621e6bebb70e7a"
  },
  {
    "url": "assets/js/13.e8d45d52.js",
    "revision": "b3a65435bc7f68698cf0c98ceba26f38"
  },
  {
    "url": "assets/js/14.948dedfe.js",
    "revision": "d6a1184f45de9cc2182411c7520fecdb"
  },
  {
    "url": "assets/js/15.bdc247b4.js",
    "revision": "c1d880513e5d5fbf5c4f23a364a19ebf"
  },
  {
    "url": "assets/js/16.2b74fb74.js",
    "revision": "54005cd0b2d34f02c7ec5a530c9975c3"
  },
  {
    "url": "assets/js/17.e73964f7.js",
    "revision": "2428454e59eb88557b58815b73ca6a3d"
  },
  {
    "url": "assets/js/18.801727b9.js",
    "revision": "8a89d838dbbe8bf03dba955a8c27b895"
  },
  {
    "url": "assets/js/19.6b4efc5a.js",
    "revision": "b6eebe4b937f5dead3b56ffbd19cebec"
  },
  {
    "url": "assets/js/2.d365043a.js",
    "revision": "a6552f56b88d285e9adab871fff03e08"
  },
  {
    "url": "assets/js/20.b3a8c211.js",
    "revision": "c8aded6ca3bd3f9633e91b4abb82569e"
  },
  {
    "url": "assets/js/21.0f9f1555.js",
    "revision": "19f6225156f515ea082636ad4d4b501a"
  },
  {
    "url": "assets/js/22.6a912f50.js",
    "revision": "424fd6accfdd75d1dd869466c7b7fdf1"
  },
  {
    "url": "assets/js/3.13026ddd.js",
    "revision": "85b3dac9c435dd1eaa7e45666415e622"
  },
  {
    "url": "assets/js/4.29cb9449.js",
    "revision": "f6c2196c543d52518df789a773f8a67c"
  },
  {
    "url": "assets/js/5.93cd9c09.js",
    "revision": "0e09a4593b1c15c0de7483564bae5d92"
  },
  {
    "url": "assets/js/6.5c74b738.js",
    "revision": "28139ce7fbb531e722de47e67621cf17"
  },
  {
    "url": "assets/js/7.111deb95.js",
    "revision": "2ee99874ff33c2f3ac038c4dbc432f39"
  },
  {
    "url": "assets/js/8.51014cd5.js",
    "revision": "6afe7eb3599befb35effd383d2d15146"
  },
  {
    "url": "assets/js/9.0da68915.js",
    "revision": "d0b89a8e86dfc45e9ff2ab0f087a83aa"
  },
  {
    "url": "assets/js/app.1a0c1b5c.js",
    "revision": "1c0439e4342b84c736ce95f5c1fb8f20"
  },
  {
    "url": "commands/index.html",
    "revision": "922dd5be9cd65d30da87b5fea54af73f"
  },
  {
    "url": "commands/LandOwnership.html",
    "revision": "69902254721710328c92892ae0b22b5c"
  },
  {
    "url": "commands/WorldTravel.html",
    "revision": "8c66d015f4fc97d2650ef40fc768f33e"
  },
  {
    "url": "config/index.html",
    "revision": "21ee57c135c6dbeb867d23c2c417e1ba"
  },
  {
    "url": "guide/index.html",
    "revision": "5ddbf8a9670c4d38d675fc8ba2db87af"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "7a3d915adc8a51768a847cb278948cb2"
  },
  {
    "url": "images/icon.png",
    "revision": "876b06cc2802dcb3104432ffbc310e6e"
  },
  {
    "url": "index.html",
    "revision": "b550470618f04c3b57428c2743b319d2"
  },
  {
    "url": "Rules/index.html",
    "revision": "9503de30a91b2e9d90b2989cf8dda5e1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
