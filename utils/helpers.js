const fs = require("fs");
const path = require("path");
const db = require("../db/db.json");
const characters = [];
const charRanges = [
  { min: 65, max: 90 }, // uppercase
  { min: 97, max: 122 }, // lowercase
  { min: 48, max: 57 }, // numeric
];
const idLength = 8;

function generateCharacterRange(min, max) {
  // iterates through the set range to push UTF-16 code units in `characters` array
  for (let i = min; i <= max; i++) {
    characters.push(String.fromCharCode(i));
  }
}

function generateId() {
  const idArray = [];
  charRanges.forEach((set) => generateCharacterRange(set.min, set.max));
  for (let i = 0; i < idLength; i++) {
    const charIndex = Math.floor(Math.random() * characters.length);
    const charValue = characters[charIndex];
    idArray.push(charValue);
  }

  //   id is made by contatenating concatenates the array of characters that make up the id
  const id = idArray.join("");
  const duplicateId = db.notes.some((note) => note.id === id);
  if (duplicateId) {
    return generateId();
  }

  return id;
}

// create, update, and delete controllers write & rewrite db.json
function writeDbFile(notes) {
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes }, null, 2)
  );
}

module.exports = { generateId, writeDbFile };
