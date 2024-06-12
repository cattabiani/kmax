
export function addNote() {   
    const notesList = document.getElementById('notesList');
    const newNoteText = `Item`;

    // Create a new list item
    const noteItem = document.createElement('li');
    noteItem.textContent = newNoteText;
    noteItem.classList.add('note-item');

    // Add new item to the top of the list
    notesList.insertBefore(noteItem, notesList.firstChild);

    console.log("AAA");
}