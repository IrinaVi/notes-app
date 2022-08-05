(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesApi.js
  var require_notesApi = __commonJS({
    "notesApi.js"(exports, module) {
      var NotesApi = class {
        loadNotes(callback) {
          fetch("http://localhost:3000/notes").then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
      };
      module.exports = NotesApi;
    }
  });

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
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
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model2, api2) {
          this.model = model2;
          this.api = api2;
          this.doc = document.querySelector("#main-container");
          this.buttonEl = document.querySelector("#add-note-button");
          this.buttonEl.addEventListener("click", () => {
            const newNote = document.querySelector("#note-input");
            this.addNewNote(newNote.value);
            newNote.value = "";
          });
        }
        addNewNote(newNote) {
          this.model.addNote(newNote);
          this.displayNotes();
        }
        displayNotesFromApi() {
          this.api.loadNotes((data) => {
            data.forEach((note) => this.model.addNote(note));
            this.displayNotes();
          });
        }
        displayNotes() {
          const all_notes = this.model.getNotes();
          console.log(all_notes);
          all_notes.forEach((note) => {
            const div = document.createElement("div");
            div.innerText = note;
            div.className = "note";
            this.doc.append(div);
          });
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  console.log("The notes app is running");
  var Api = require_notesApi();
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var model = new NotesModel();
  var api = new Api();
  var notesView = new NotesView(model, api);
  notesView.displayNotesFromApi();
})();
