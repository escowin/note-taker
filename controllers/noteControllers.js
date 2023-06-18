const fs = require("fs");
const path = require("path");
const { notes } = require("../db/db.json");
const { generateId } = require("../utils/helpers");

// crud functions used in express routes
function getAllNotes(req, res) {
  let result = notes;
  res.json(result)
}

function createNote(body, notes) {
  body.id = generateId();
  const note = body;
  notes.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes }, null, 2)
  );

  return note;
}

function updateNotes(notes) {
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes }, null, 2)
  )
}

module.exports = { getAllNotes, createNote, updateNotes };
