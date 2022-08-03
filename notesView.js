class NotesView {
    constructor(model) {
        this.model = model;
        this.doc = document.querySelector('#main-container');

        this.buttonEl = document.querySelector('#add-note-button')

        this.buttonEl.addEventListener('click', () => {
            const newNote = document.querySelector('#note-input');
            this.addNewNote(newNote.value);
            newNote.value = '';
        })
    }

    addNewNote(newNote) {
        this.model.addNote(newNote);
        this.displayNotes();
    }

    displayNotes() {
        const all_notes = this.model.getNotes()
        console.log(all_notes)
        const last_note = all_notes[all_notes.length - 1];
        const div = document.createElement('div');
        div.innerText = last_note;
        div.className = 'note'
        this.doc.append(div)
        // all_notes.forEach(note => {
        //     const div = document.createElement('div');
        //     div.innerHTML = note;
        //     div.className = 'note'
        //     this.doc.append(div)
        // })
    }
}

module.exports = NotesView;