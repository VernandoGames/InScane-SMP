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
    "revision": "a1fc4e096855ac4f8809f2d10f618a48"
  },
  {
    "url": "App.html",
    "revision": "2c3ffe416b30b5d42d44745214eab3ce"
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
    "url": "assets/js/12.b5ce7636.js",
    "revision": "604faceb0128d1020d3a93966586ad7c"
  },
  {
    "url": "assets/js/13.72dca37f.js",
    "revision": "e86804d0ff9b278f124a5d9b4de6e170"
  },
  {
    "url": "assets/js/14.a6f362d8.js",
    "revision": "7890fc3c23224a0583cad45969d3efac"
  },
  {
    "url": "assets/js/15.beb1d966.js",
    "revision": "eb9340a19c5f92349222f5193a85e493"
  },
  {
    "url": "assets/js/16.abb976e0.js",
    "revision": "beb5931c09ac1431df9d4ce090745dbc"
  },
  {
    "url": "assets/js/17.54832ea7.js",
    "revision": "29aa5c18e9cdc0fbf17b9f6b17fe95c1"
  },
  {
    "url": "assets/js/18.198916a8.js",
    "revision": "310cf0a804aaa259ae56f148f666e5f3"
  },
  {
    "url": "assets/js/19.032c44e4.js",
    "revision": "e3ab5bd547d23c4a06e9b922aaba893b"
  },
  {
    "url": "assets/js/2.d365043a.js",
    "revision": "a6552f56b88d285e9adab871fff03e08"
  },
  {
    "url": "assets/js/20.41705a6b.js",
    "revision": "a7c98c2d6b4358c5969a189d0b8ab005"
  },
  {
    "url": "assets/js/21.0bbda96b.js",
    "revision": "52a935e0fbf09405aa999dae13914908"
  },
  {
    "url": "assets/js/22.406b2335.js",
    "revision": "81bd95012e575259bddf5cc88f62496f"
  },
  {
    "url": "assets/js/23.2df45630.js",
    "revision": "402f23a37d19e794e6b75f8d1f741644"
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
    "url": "assets/js/6.482b6874.js",
    "revision": "12c3492294d1a9b94b703685878e5345"
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
    "url": "assets/js/app.a8a2c34a.js",
    "revision": "bc4c3778930da646fde63fd2501ec256"
  },
  {
    "url": "commands/index.html",
    "revision": "218380fbe64633d59f6ab0eb8a2e10fa"
  },
  {
    "url": "commands/LandOwnership.html",
    "revision": "8006acdabe39bdcb3373b643f3ac9dd4"
  },
  {
    "url": "commands/WorldTravel.html",
    "revision": "14726336c1f3e8f505af159a2d48cd76"
  },
  {
    "url": "config/index.html",
    "revision": "6a56f171c727399aa68ca3ad87a045cf"
  },
  {
    "url": "guide/index.html",
    "revision": "2656c0c2b15d685a159eba04297bc1ff"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "ce69e4653ff97d9070aad1363b1abcc4"
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
    "revision": "f1168cf8f9cf31f03ef0df4d5ac8490b"
  },
  {
    "url": "Rules/index.html",
    "revision": "0c364f46fb0a28b417fbf4bc7ca4ad79"
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
