
import { registerServiceWorker } from './service-worker.js';

document.addEventListener('DOMContentLoaded', function() {
    registerServiceWorker();
});

window.onload = window.location.replace("./html/notes.html");