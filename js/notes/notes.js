
class Note {
    constructor(title, info) {
        this.title = title;
        this.info = info;
        //   this.timestamp = new Date();
    }
}



class NotesManager {
    constructor() {
        this.notes = [];
    }


    editNote(title, info, index) {
        if (index < 0 || index >= this.notes.length) {
            this.addNote(title, info);
            return this.length-1;
        } else {
            this.notes[index].title = title;
            this.notes[index].info = info;
            return index;
        }
    }

    addNote(title, info) {
        const note = new Note(title, info);
        this.notes.push(note);

        return note;
    }

    removeNote(index) {
        if (index >= 0 && index < this.notes.length) {
            this.notes.splice(index, 1);
        }
    }

    get length() {
        return this.notes.length;
    }
}

const notesManager = new NotesManager();
export default notesManager;



