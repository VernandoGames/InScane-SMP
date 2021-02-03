// import { register } from 'register-service-worker'

const BASE_URL = window.location.hostname == "localhost" ? "http://localhost:8000/" : 'https://vernandogames.github.io/InScane-SMP/'

navigator.serviceWorker.register(`${BASE_URL}assets/javascripts/service-worker.js`, {
    ready() {
        console.log(
            'App is being served from cache by a service worker.\n' +
            'For more details, visist https://goo.gl/AFskqB'
        );
    },
    registered() {
        console.log(`Service worker has been registered.`);
    },
    cached() {
        console.log(`Content has been cached for offline use.`);
    },
    updateFound() {
        console.log(`New content is downloading.`);
    },
    updated(registration) {
        console.log(`New content is available; please refresh.`);
        document.dispatchEvent(
            new CustomEvent('swUpdated', { detail: registration })
        );
    },
    offline() {
        console.log(`No internet connection found. App is running in offline mode.`);
    },
    error(error) {
        console.error(`Error during service worker registration:`, error)
    }
})