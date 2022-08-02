const NotesModel = require('./notesModel')

describe("model class", () => {
    it("returns an empty list", () => {
        const model = new NotesModel();
        expect(model.getNotes()).toEqual([]);
    })

    it("returns notes that were added to the list", () => {
        const model = new NotesModel();
        model.addNote('Buy milk');
        model.addNote('Go to the gym');
        expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
    })

    it("removes all notes if reset was called", () => {
        const model = new NotesModel();
        model.addNote('Buy milk');
        model.addNote('Go to the gym');
        model.reset();
        expect(model.getNotes()).toEqual([]);
    })
})