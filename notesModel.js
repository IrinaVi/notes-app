class NotesModel {
    constructor() {
        this.all_notes = [];

    }

    getNotes() {
        return this.all_notes;
    }

    addNote(note) {
        this.all_notes.push(note);
    }

    reset() {
        this.all_notes = [];
    }
}

module.exports = NotesModel;
