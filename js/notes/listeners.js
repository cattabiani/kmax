
import { openModal, closeModal, saveNote } from './ui.js';

let modalIdx = -1;



document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('addNoteBtn').addEventListener('click', function() {
        modalIdx = -1;
        openModal();
    });

    // When the modal is clicked
    modal.addEventListener('click', function(event) {
        // Check if the click is outside the modal content
        if (event.target === modal) {
            closeModal();
        }
    });

    document.getElementById('modalCancelBtn').addEventListener('click', function() {
        closeModal();
    });

    document.getElementById('modalSaveBtn').addEventListener('click', function() {
        saveNote(modalIdx);
        closeModal();
    });
});