import notesManager from "./notes.js";
import {prependChild} from "../utils.js";

export function openModal(note) {

    const title = document.getElementById('modalTitle');
    const info = document.getElementById('modalInfo');

    title.value = (note != null) ? note.title : '';
    info.value = (note != null) ? note.info : '';

    modal.style.display = 'block';
    title.focus();

}

export function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

export function saveNote(idx) {
    const title = document.getElementById('modalTitle').value.trim();
    const info = document.getElementById('modalInfo').value.trim();

    if (!title) {
        return;
    }

    let idx2 = notesManager.editNote(title, info, idx);

    console.log(idx2);

    document.getElementById('modal').style.display = 'none';

    syncNote(idx2);
    // syncAll();
}

export function syncNote(idx) {
    const note = notesManager.notes[idx];
    let noteDiv = document.getElementById(`note-${idx}`);
    let s = `<h3>${note.title}</h3>`;
    if (note.info.trim() !== '') {
        s += `<p>${note.info}</p>`;
    }
    if (!noteDiv) {
        const notesList = document.getElementById('notesList');
        noteDiv = document.createElement('div');
        noteDiv.id = `note-${idx}`;
        noteDiv.classList.add('note');
        noteDiv.style.backgroundColor = (idx %2) ?  '#ffffff' : '#f9f9f9';
        notesList.appendChild(noteDiv);


    }

    noteDiv.innerHTML = s;
}

export function syncAll() {
    const notesList = document.getElementById('notesList');
    notesList.innerHTML = ``;

    // Loop over notes and create div elements for each note
    notesManager.notes.forEach ((_, idx) => {
        syncNote(idx);
    });
}