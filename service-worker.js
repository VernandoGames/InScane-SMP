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
    "revision": "8824f88e8f20fa042dd1af417265a1bd"
  },
  {
    "url": "App.html",
    "revision": "fc1949114404602c6e7be0b2c598f76d"
  },
  {
    "url": "assets/css/0.styles.b8695aaf.css",
    "revision": "1b7656265363f58b4e2573111c8d6592"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5c2d4fd7.js",
    "revision": "934b841acea34a523794e483c576d54d"
  },
  {
    "url": "assets/js/11.fe35c4da.js",
    "revision": "a93d0115683a257efa137631ba2d3368"
  },
  {
    "url": "assets/js/12.87029004.js",
    "revision": "b02ca797e2b696d8bdc6c52d8378f0f9"
  },
  {
    "url": "assets/js/13.e8c12024.js",
    "revision": "09512cfb319091d769cd6eb371b64ead"
  },
  {
    "url": "assets/js/14.7d586fb8.js",
    "revision": "8dc8e1ac52780fb94630b282f0d57305"
  },
  {
    "url": "assets/js/15.58d3526e.js",
    "revision": "af9390fdc1efa3cfcfe11373a733fc21"
  },
  {
    "url": "assets/js/16.de1fcee5.js",
    "revision": "d3692e93713f8b27724283b91061e629"
  },
  {
    "url": "assets/js/17.4ab82d19.js",
    "revision": "f564ef8750f87460957213a61a259727"
  },
  {
    "url": "assets/js/18.5bf5e022.js",
    "revision": "ace6294eb3193fe53984a320687f659d"
  },
  {
    "url": "assets/js/19.15a4dc81.js",
    "revision": "6d7d527d7e87ae3f24ecf229808f6881"
  },
  {
    "url": "assets/js/2.36b535e7.js",
    "revision": "cadde1a558799b8db7f00ab289beaf4b"
  },
  {
    "url": "assets/js/20.c53c8c91.js",
    "revision": "204abc5982e7c40e5d48f33856dc8a9c"
  },
  {
    "url": "assets/js/3.b4acc100.js",
    "revision": "120b0622ff789dcd72aa6ad45ab1e4bb"
  },
  {
    "url": "assets/js/4.459dfda6.js",
    "revision": "63b06a4747ddce9674a09ba177c927e6"
  },
  {
    "url": "assets/js/5.a99254a8.js",
    "revision": "5253c0a733cc0938dd61a3f914583d6b"
  },
  {
    "url": "assets/js/6.0b23e920.js",
    "revision": "ab4c9cb81add7fdbafa3648fc328eca0"
  },
  {
    "url": "assets/js/7.e35ea36d.js",
    "revision": "c4bc408eedba5161cf2eb2416b6569b2"
  },
  {
    "url": "assets/js/8.93019163.js",
    "revision": "2ab69da9d4d5d4efeaf72128e8ae493b"
  },
  {
    "url": "assets/js/9.43100331.js",
    "revision": "f26a01b5abe8830bffaa0d8b878ff74c"
  },
  {
    "url": "assets/js/app.2b19e912.js",
    "revision": "26519f86cafccc32e1c5fba2a8cc6eb9"
  },
  {
    "url": "commands/index.html",
    "revision": "546504958d9949597eeece531e8d2340"
  },
  {
    "url": "commands/LandOwnership.html",
    "revision": "fb53d956e11ed7f205548cccc658465c"
  },
  {
    "url": "commands/WorldTravel.html",
    "revision": "bdced9da9e695ce0753fe43d2b87698a"
  },
  {
    "url": "config/index.html",
    "revision": "294300f13d07d9e3c91b137713cf2c92"
  },
  {
    "url": "guide/index.html",
    "revision": "39226802bfaa8f830a7e83678eeacbd0"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "93064c0ff3135cbb95c282f87b3bf736"
  },
  {
    "url": "images/icon.png",
    "revision": "876b06cc2802dcb3104432ffbc310e6e"
  },
  {
    "url": "index.html",
    "revision": "8dbedf75358a82c6e07b8352c5c41a70"
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
