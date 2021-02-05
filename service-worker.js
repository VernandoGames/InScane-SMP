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
    "revision": "7a8c183a62d2582ad63a7c3e3e22b388"
  },
  {
    "url": "App.html",
    "revision": "dd299ed66f55922a53fa62c69841ae76"
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
    "url": "assets/js/14.745f67d0.js",
    "revision": "f363646a09bc04728c76a0c6662c1f6f"
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
    "url": "assets/js/17.3ec6bf6c.js",
    "revision": "881f0c6079e5f51579382ccc1157eae5"
  },
  {
    "url": "assets/js/18.93672019.js",
    "revision": "b8dc2240fe10396f3901a988c8f0a23d"
  },
  {
    "url": "assets/js/19.322c258d.js",
    "revision": "ba47949267e1185608f0709db75020df"
  },
  {
    "url": "assets/js/2.bd3b16fc.js",
    "revision": "86c46e2384edbbc6622baa088fe502be"
  },
  {
    "url": "assets/js/20.198222e6.js",
    "revision": "70d9dd90c06e107e470db4151eda7a75"
  },
  {
    "url": "assets/js/21.11a11a17.js",
    "revision": "6311aa9c8d4ff8716f2c2229380acc62"
  },
  {
    "url": "assets/js/22.1b4fd8f9.js",
    "revision": "670c4dd594fbcb0df2eacbcea0308b15"
  },
  {
    "url": "assets/js/23.5a6ee4fa.js",
    "revision": "d7d29f2b0f3d4b1091dedb6b8b4fb3c2"
  },
  {
    "url": "assets/js/24.5ce8f650.js",
    "revision": "d47f205691ad6d67ba45b2cdbd478089"
  },
  {
    "url": "assets/js/25.e0c7e91e.js",
    "revision": "9d447f674f1fba3099acd1fa5f7b8f64"
  },
  {
    "url": "assets/js/26.be62c41d.js",
    "revision": "e4232ad0ae8aadabaf58fc1ff93db02d"
  },
  {
    "url": "assets/js/27.4451fc88.js",
    "revision": "bdfed74866fe41228a9341b776094e52"
  },
  {
    "url": "assets/js/28.26aac740.js",
    "revision": "b2ace739ee9942215f9a3acad20da703"
  },
  {
    "url": "assets/js/29.6ccc52a0.js",
    "revision": "bd09a08bb11a2f01292eedd076793547"
  },
  {
    "url": "assets/js/3.cfd6e9e1.js",
    "revision": "67d3f95373657e5c0d08c5eb303e1536"
  },
  {
    "url": "assets/js/30.d3641d6d.js",
    "revision": "28412e906be0d3e7c0ced996fa7fb899"
  },
  {
    "url": "assets/js/4.b8e6ab69.js",
    "revision": "f8c4e50b8a592fe8f429524f677539d8"
  },
  {
    "url": "assets/js/5.48c30035.js",
    "revision": "668a3270c3820d3c83b94e62fccd1ab0"
  },
  {
    "url": "assets/js/6.c774f830.js",
    "revision": "a84426a9bc5eeaaba8729d888dd6f224"
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
    "url": "assets/js/app.ff44bbce.js",
    "revision": "894cc740f215af91d61ef8d925aac531"
  },
  {
    "url": "commands/index.html",
    "revision": "76df2ba45bf2b8530ad2608aeeede4b8"
  },
  {
    "url": "commands/LandOwnership.html",
    "revision": "689ccd84808da623171e0438f6459bbf"
  },
  {
    "url": "commands/WorldTravel.html",
    "revision": "99b912543acedb08b98d78a976cd3739"
  },
  {
    "url": "config/index.html",
    "revision": "2e8b04d932076caa9b337802d5b24972"
  },
  {
    "url": "guide/index.html",
    "revision": "024f0e83ef6f3cc8ee47a9b2eb859b0d"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "e3ddae2bbc6fa87b004726284c7227c6"
  },
  {
    "url": "images/icon-512.png",
    "revision": "a1d5026f6d143a3f0f7bced9e2973e98"
  },
  {
    "url": "images/icon-maskable.png",
    "revision": "6bcb3f06a343ef12e1fd24cd8185267c"
  },
  {
    "url": "images/icon.png",
    "revision": "876b06cc2802dcb3104432ffbc310e6e"
  },
  {
    "url": "images/launcher-icon.png",
    "revision": "3a3b755a0580d6a1efc185c560cc891a"
  },
  {
    "url": "index.html",
    "revision": "5a56c349c44fc051a48ebe145a9b136b"
  },
  {
    "url": "Plugins/GriefPrevention/Commands.html",
    "revision": "76587cb4e3c7000ff7f530825224d9f7"
  },
  {
    "url": "Plugins/GriefPrevention/index.html",
    "revision": "7a3ce77db4b81eff23d33ed507612fb0"
  },
  {
    "url": "Rules/index.html",
    "revision": "07b086b0d415e5fcac603a2f9f8c21e5"
  },
  {
    "url": "UpdateLog/index.html",
    "revision": "bcfc695c5d67bdf8cb4a6909b5938826"
  },
  {
    "url": "UpdateLog/V1.1.0.html",
    "revision": "2e19a4a616e66e5c53934df0a31161c2"
  },
  {
    "url": "UpdateLog/V1.1.1.html",
    "revision": "e813982bfc8f8b83b139c5f5507c5ab3"
  },
  {
    "url": "UpdateLog/V1.1.2.html",
    "revision": "5e7dd0d92631120251031cde194d4388"
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
