self.addEventListener('install', event => {
    console.log('Service worker installing...');
    // Add a call to skipWaiting here if you want to skip waiting.
});

self.addEventListener('activate', event => {
    console.log('Service worker activating...');
});

self.addEventListener('fetch', event => {
    console.log('Fetching:', event.request.url);
    // Add custom fetch event handling here if desired.
});