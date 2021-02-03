// Check compatibility for the browser we're running this in
if ("serviceWorker" in navigator) {
    if (navigator.serviceWorker.controller) {
      console.log("[PWA Builder] active service worker found, no need to register");
    } else {
      // Register the service worker
      console.log("[PWA Builder] Attempting to register new Service worker..");
      navigator.serviceWorker
        .register(`${process.env.BASE_URL}pwabuilder-sw.js`, {
          scope: `${process.env.BASE_URL}`
        })
        .then(function (reg) {
          console.log("[PWA Builder] Service worker has been registered for scope: " + reg.scope);
        });
    }
  }