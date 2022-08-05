console.log('The notes app is running')

const Api = require('./notesApi');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

const model = new NotesModel();
const api = new Api();
// model.addNote('This is an example note');
// model.addNote('Here is another one');
// console.log(model.getNotes());

const notesView = new NotesView(model, api);
notesView.displayNotesFromApi();