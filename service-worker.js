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
    "revision": "2a7eed57401ecf5dbb41bef6ddeb4c64"
  },
  {
    "url": "App.html",
    "revision": "852a38520623ebbc814bcc11a9fc17cf"
  },
  {
    "url": "articles/BenefitsOfClaimingLand.html",
    "revision": "eadf6dc4de3517c7bfa23028326055a0"
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
    "url": "assets/js/14.26112ebc.js",
    "revision": "36c9808c26165b42374c570807f1fe23"
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
    "url": "assets/js/24.a127c899.js",
    "revision": "6152554e4cf360e50fe1af9d6c44ec1e"
  },
  {
    "url": "assets/js/25.610e0647.js",
    "revision": "95b99fc80572add43e5fe3c9e9fb3762"
  },
  {
    "url": "assets/js/26.b3a115b3.js",
    "revision": "632ef531e81c9f4204eb850c51002199"
  },
  {
    "url": "assets/js/27.5087c68f.js",
    "revision": "4a2c6a7561903ac74b5f6d9f7d46aa6c"
  },
  {
    "url": "assets/js/28.e78fe69b.js",
    "revision": "327503df1b0750597fa18aa82cd5d189"
  },
  {
    "url": "assets/js/29.249383d0.js",
    "revision": "17219cad9b6995c3d256f350b99e24a1"
  },
  {
    "url": "assets/js/3.cfd6e9e1.js",
    "revision": "67d3f95373657e5c0d08c5eb303e1536"
  },
  {
    "url": "assets/js/30.e4a05ea9.js",
    "revision": "625f5ace1e8392d66ca79aab8900c86f"
  },
  {
    "url": "assets/js/31.a75690a5.js",
    "revision": "9e6c3f0e3be8c907c02a9cafd8e22487"
  },
  {
    "url": "assets/js/4.804c03e3.js",
    "revision": "42c617be9e3b5290c05065db77bad1f5"
  },
  {
    "url": "assets/js/5.48c30035.js",
    "revision": "668a3270c3820d3c83b94e62fccd1ab0"
  },
  {
    "url": "assets/js/6.d53a7637.js",
    "revision": "54e04fe24bf01985195830c88c68a65c"
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
    "url": "assets/js/app.de206d95.js",
    "revision": "f78abfb1255560c9a26bd61155e99ad3"
  },
  {
    "url": "commands/index.html",
    "revision": "0d62f743f6811262344253a8fe5f0ee3"
  },
  {
    "url": "commands/LandOwnership.html",
    "revision": "1b0dc33909e79a2938b52365c60beb74"
  },
  {
    "url": "commands/WorldTravel.html",
    "revision": "3c0ce1585c8c28fc20f14a1572903494"
  },
  {
    "url": "config/index.html",
    "revision": "5bdc87e5ca94e4a4f6d4d9d20668960e"
  },
  {
    "url": "guide/index.html",
    "revision": "90d208d318bd135db37feaf0e95579e9"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "a032e727fda580bc60eac0f779fc72ca"
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
    "revision": "807c9138374fb96429f2e29e915fcbdf"
  },
  {
    "url": "Plugins/GriefPrevention/Commands.html",
    "revision": "867c9fe9de500fc6813ce047377a5cdd"
  },
  {
    "url": "Plugins/GriefPrevention/index.html",
    "revision": "39a13ae07d9c9d6c9f4bcafb8510628a"
  },
  {
    "url": "Rules/index.html",
    "revision": "3cfbef66c806c76f6cd48196010553d1"
  },
  {
    "url": "UpdateLog/index.html",
    "revision": "e963a922abb084267ca853a437759809"
  },
  {
    "url": "UpdateLog/V1.1.0.html",
    "revision": "e0db4d813428e11491b495236dfa5d7d"
  },
  {
    "url": "UpdateLog/V1.1.1.html",
    "revision": "c5dcc2368dbedaa49469299275b0d460"
  },
  {
    "url": "UpdateLog/V1.1.2.html",
    "revision": "1b0df4490be781da647bc2fb4ede224d"
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
