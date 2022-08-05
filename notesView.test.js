/**
 * @jest-environment jsdom
 */

const Api = require('./notesApi')
const NotesView = require('./notesView');
const NotesModel = require('./notesModel')
const fs = require('fs');

require('jest-fetch-mock').enableMocks();
// const RockPaperScissors = require('./rockPaperScissors');
// const RandomGenerator = require('./randomGenerator');

jest.mock('./notesApi');

// describe('notesApi class', () => {
//   beforeEach(() => {
//     // Before each test, reset the mock
//     // This helps starting each test case
//     // with a "fresh" mocked class
//     Api.mockClear();
//   });

//   it('wins the game', () => {
//     // 1. We use the normal constructor - Jest will take care of creating a mock.
//     const mockRandomGenerator = new RandomGenerator();

//     // 2. We mock the method getMove, replacing its normal implementation
//     // with a custom function (which here simply returns 'paper').
//     mockRandomGenerator.getMove.mockImplementation(() => 'paper');

//     // 3. The rest is the same as when using the previous technique.
//     const game = new RockPaperScissors(mockRandomGenerator);

//     expect(game.getResult('scissors')).toBe('win');
//   });
// });
describe('notesView class', () => {
    beforeEach(() => {
        // Before each test, reset the mock
        // This helps starting each test case
        // with a "fresh" mocked class
        Api.mockClear();
    });

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

    xit("shows the added note on the page", () => {
        document.body.innerHTML = fs.readFileSync('./index.html');
        const model = new NotesModel();

        const inputEl = document.querySelector('#note-input')
        inputEl.value = "test"

        const notes = new NotesView(model)

        const buttonEl = document.querySelector('#add-note-button')
        buttonEl.click();
        expect(document.querySelectorAll('div.note')[0].innerText).toEqual("test")

    })

    it("displays note from the API", () => {
        document.body.innerHTML = fs.readFileSync('./index.html');

        const api_double = new Api()
        api_double.loadNotes.mockImplementation((callback) => { callback(["test"]) })

        const model = new NotesModel();
        const view = new NotesView(model, api_double);
        view.displayNotesFromApi()

        const div = document.querySelectorAll('div.note');
        expect(div[0].innerText).toEqual("test");

    })

})