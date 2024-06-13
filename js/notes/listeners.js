
import { modal2editNodeForm } from './notes.js';



document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('addNoteBtn').addEventListener('click', function() {
        modal2editNodeForm();
    });

    // When the modal is clicked
    modal.addEventListener('click', function(event) {
        // Check if the click is outside the modal content
        if (event.target === modal) {
            document.getElementById('modal').style.display = 'none';
        }
    });

    document.getElementById('modalCancelBtn').addEventListener('click', function() {
        document.getElementById('modal').style.display = 'none';
    });
});