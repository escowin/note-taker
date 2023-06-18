const { notes } = require("../db/db.json");
const { generateId, writeDbFile } = require("../utils/helpers");

// api endpoint crud methods used within express methods
const noteController = {
  getAllNotes(req, res) {
    let result = notes;
    res.json(result);
  },
  getNote(req, res) {
    const id = req.params.id;
    const note = notes.find((note) => note.id === id);
    if (!note) {
      return res.status(404).json({ error: "note not found" });
    }
    res.json(note);
  },
  createNote({ body }, res) {
    body.id = generateId(notes);
    const note = body;
    notes.push(note);

    writeDbFile(notes)
    res.json(note);
  },
  updateNote(req, res) {
    const id = req.params.id;
    const update = req.body;
    let noteIndex = notes.findIndex((note) => note.id === id);
    if (!noteIndex) {
      return res.status(404).json({ error: "note not found" });
    }
    notes[noteIndex] = { ...update, id };

    writeDbFile(notes)
    res.json(notes[noteIndex]);
  },
  deleteNote(req, res) {
    const id = req.params.id;
    const note = notes.findIndex((note) => note.id === id);
    // bug : last note object is deleted regardless of id
    if (!note) {
      return res.status(404).json({ error: "note not found" });
    }

    // db.json file is rewritten by using a notes array with the specified note object removed via .splice()
    notes.splice(note, 1);
    writeDbFile(notes)
    res.json({ message: "note deleted" });
  },
};

module.exports = noteController;
