
import { registerServiceWorker } from './service-worker.js';
import { addNote } from './notes.js';

document.addEventListener('DOMContentLoaded', function() {
    const addNoteBtn = document.getElementById('addNoteBtn');
    addNoteBtn.addEventListener('click', function() {
        addNote(); // Call addNote function defined in notes.js
        console.log('Note added'); // Log message to console
    });

    registerServiceWorker();
});