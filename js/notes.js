
class Note {
    constructor(title = "Untitled", content = "") {
        this.title = title;
        this.content = content;
    }
}

class NoteManager {
    constructor() {
        this.notes = [];
    }

    addNote(title, content) {
        const note = new Note(title, content);
        this.notes.push(note);
    }

    // displayNotes() {
    //     this.notes.forEach(note => {
    //         console.log(`Title: ${note.title}, Content: ${note.content}`);
    //     });
    // }
}

export function modal2editNodeForm(note) {

    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = '';

    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title:';
    const titleInput = document.createElement('input');
    titleInput.classList.add('modal-input'); 

    // Append title label and input to modal body
    modalBody.appendChild(titleLabel);
    modalBody.appendChild(titleInput);

    const infoLabel = document.createElement('label');
    infoLabel.textContent = 'Info:';
    const infoTextarea = document.createElement('textarea');
    infoTextarea.setAttribute('rows', '4'); 
    infoTextarea.classList.add('modal-input');

    modalBody.appendChild(infoLabel);
    modalBody.appendChild(infoTextarea);


    if (note != null) {
        titleInput.value = note.title;
        infoTextarea.value = note.info;
    }

    const modal = document.getElementById('modal');
    modal.style.display = 'block';

    titleInput.focus();

}




// export function addNote() {   
//     // const notesList = document.getElementById('notesList');
//     // const newNoteText = `Item`;

//     // // Create a new list item
//     // const noteItem = document.createElement('li');
//     // noteItem.textContent = newNoteText;
//     // noteItem.classList.add('note-item');

//     // // Add new item to the top of the list
//     // notesList.insertBefore(noteItem, notesList.firstChild);

//     // console.log("AAA");
// }