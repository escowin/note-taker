const fs = require("fs");
const path = require("path");
const { generateId } = require("../utils/helpers");

// logic | note related functions
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

module.exports = { createNote, updateNotes };
