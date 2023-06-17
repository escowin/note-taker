const fs = require("fs");
const path = require("path");

// logic | note related functions
function createNote(body, notes) {
  const note = body;
  notes.push(note);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes }, null, 2)
  );

  return note;
}

function updateNote(notes) {
  console.log(notes)
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes }, null, 2)
  )
}

module.exports = { createNote, updateNote };
