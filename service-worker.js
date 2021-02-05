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
    "revision": "7bcc75661b5def448664bb679c5b0f5b"
  },
  {
    "url": "App.html",
    "revision": "ddf89332778c1a44a13831f8a9e02467"
  },
  {
    "url": "assets/css/0.styles.d27508df.css",
    "revision": "648a320bf8ceb0216c8a7c43c540db4d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8e232002.js",
    "revision": "96c47116a9a955b3107a0052c42bfa8d"
  },
  {
    "url": "assets/js/11.dade4f5b.js",
    "revision": "570281f1dbe6f6bd95985a3678f302b6"
  },
  {
    "url": "assets/js/12.5139084e.js",
    "revision": "ffbd0cb3d8777838ee1c3baa9e4a592b"
  },
  {
    "url": "assets/js/13.742eef57.js",
    "revision": "1f85602b11f7e2fbd689066a0ee67c04"
  },
  {
    "url": "assets/js/14.6ed5caad.js",
    "revision": "ffd6c0b4cc0c4b0733fc884e8acca079"
  },
  {
    "url": "assets/js/15.70ec99f8.js",
    "revision": "44209d87e5ef4a5ce147bd321532898c"
  },
  {
    "url": "assets/js/16.a6c2cbe8.js",
    "revision": "6d9f985c4a9f009b043b41d85f7971c1"
  },
  {
    "url": "assets/js/17.dbb0da74.js",
    "revision": "dd5e402916f8ad83b881d6fbde6b15ca"
  },
  {
    "url": "assets/js/18.1b5ef0ff.js",
    "revision": "69a56badcbfb6ecd9e727acaf8cd8df0"
  },
  {
    "url": "assets/js/19.6fb3c4a7.js",
    "revision": "eee183a9f859b0db054ace8951abd9f8"
  },
  {
    "url": "assets/js/2.11cc9ed3.js",
    "revision": "120e9d1f6e98ce268bf24ca8488170ec"
  },
  {
    "url": "assets/js/20.e30f613e.js",
    "revision": "a350a32e9fc03f53ffbed64a3a080d7e"
  },
  {
    "url": "assets/js/21.a049d583.js",
    "revision": "10bf11d801b594a1067c1de9b34e461a"
  },
  {
    "url": "assets/js/22.bcb27370.js",
    "revision": "a7b871ea1db65f68f1b4612b528a1988"
  },
  {
    "url": "assets/js/23.0dece2df.js",
    "revision": "d3ec7989292a4f15ef4e3762400f3175"
  },
  {
    "url": "assets/js/24.681400d3.js",
    "revision": "cfbb7cba6c769ad11123f443978ed53e"
  },
  {
    "url": "assets/js/3.cfd6e9e1.js",
    "revision": "67d3f95373657e5c0d08c5eb303e1536"
  },
  {
    "url": "assets/js/4.b8e6ab69.js",
    "revision": "f8c4e50b8a592fe8f429524f677539d8"
  },
  {
    "url": "assets/js/5.f037120e.js",
    "revision": "cd9562f2ba0d8c55ad473e38da086169"
  },
  {
    "url": "assets/js/6.a50b6be6.js",
    "revision": "086c9fd53101e952dac99b26f9e54102"
  },
  {
    "url": "assets/js/7.cac0dac1.js",
    "revision": "44e65a8b0a0868830e055f5db3929c29"
  },
  {
    "url": "assets/js/8.9480b633.js",
    "revision": "a46f14d65251201c611832a61b9c1b1d"
  },
  {
    "url": "assets/js/9.9abe3a97.js",
    "revision": "e2dccbf49400c82e2b8a67437689f43f"
  },
  {
    "url": "assets/js/app.c7d24d99.js",
    "revision": "087310290ec4196494a6a8335496c0ce"
  },
  {
    "url": "commands/index.html",
    "revision": "93b0672ebcb3f7abfe4c092255760c20"
  },
  {
    "url": "commands/LandOwnership.html",
    "revision": "efd4e59a33c886960d17bb7b8f104e58"
  },
  {
    "url": "commands/WorldTravel.html",
    "revision": "091c4a7c980f53b0f0d86c928b4ca190"
  },
  {
    "url": "config/index.html",
    "revision": "968ce8ab47d80c4f363736c2d9cb466c"
  },
  {
    "url": "guide/index.html",
    "revision": "6b0d494ffec75bb759ec0b8c267d96af"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "947c0cd06c97d4befb937bb4b1fb21aa"
  },
  {
    "url": "images/icon-512.png",
    "revision": "a1d5026f6d143a3f0f7bced9e2973e98"
  },
  {
    "url": "images/icon.png",
    "revision": "876b06cc2802dcb3104432ffbc310e6e"
  },
  {
    "url": "index.html",
    "revision": "1c367b8577ae92a89ae88bf7c5429627"
  },
  {
    "url": "Rules/index.html",
    "revision": "9b30486c766577f16a8bad24b297a5ee"
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
