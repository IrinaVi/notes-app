/**
 * @jest-environment jsdom
 */

const NotesView = require('./notesView');
const NotesModel = require('./notesModel')
const fs = require('fs');

describe('notesView class', () => {
    xit("appends a note element", () => {
        document.body.innerHTML = fs.readFileSync('./index.html');
        const fakeModel = {
            getNotes: () => ['Hoover']
        }

        const notesView = new NotesView(fakeModel);

        notesView.displayNotes()
        expect(document.querySelectorAll('div.note').length).toBe(1)
    })

    xit("appends a note element", () => {
        document.body.innerHTML = fs.readFileSync('./index.html');
        const fakeModel = {
            getNotes: () => ['Hoover', 'Clean']
        }

        const notesView = new NotesView(fakeModel);

        notesView.displayNotes()
        expect(document.querySelectorAll('div.note').length).toBe(2)
    })

    it("shows the added note on the page", () => {
        document.body.innerHTML = fs.readFileSync('./index.html');
        const model = new NotesModel();

        const inputEl = document.querySelector('#note-input')
        inputEl.value = "test"

        const notes = new NotesView(model)

        const buttonEl = document.querySelector('#add-note-button')
        buttonEl.click();
        expect(document.querySelectorAll('div.note')[0].innerText).toEqual("test")

    })


})