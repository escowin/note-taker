const fs = require("fs");
const path = require("path");
const { notes } = require("../db/db.json");
const { generateId } = require("../utils/helpers");

// crud functions used in express routes
function getAllNotes(req, res) {
  let result = notes;
  res.json(result);
}

function getNote(req, res) {
  const id = req.params.id;
  const note = notes.find((note) => note.id === id);
  if (!note) {
    return res.status(404).json({ error: "note not found" });
  }
  res.json(note);
}

function createNote({ body }, res) {
  body.id = generateId();
  const note = body;
  notes.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes }, null, 2)
  );
  res.json(note);
}

function updateNote(req, res) {
  const id = req.params.id;
  const update = req.body;
  let noteIndex = notes.findIndex((note) => note.id === id);
  if (!noteIndex) {
    return res.status(404).json({ error: "note not found" });
  }
  notes[noteIndex] = { ...update, id };

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes }, null, 2)
  );
  res.json(notes[noteIndex]);
}

function deleteNote(req, res) {
  const id = req.params.id;
  const note = notes.findIndex((note) => note.id === id);
  if (!note) {
    return res.status(404).json({ error: "note not found" });
  }

  // db.json file is rewritten by using a notes array with the specified note object removed via .splice()
  notes.splice(note, 1);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes }, null, 2)
  );
  res.json({ message: "note deleted" });
}

module.exports = { getAllNotes, getNote, createNote, updateNote, deleteNote };
