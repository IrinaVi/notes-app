(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

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

  // index.js
  console.log("The notes app is running");
  var NotesModel = require_notesModel();
  var model = new NotesModel();
  console.log(model.getNotes());
})();
