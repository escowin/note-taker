const notes = require("../db/db.json");
const characters = [];
const charRanges = [
  { min: 65, max: 90 }, // uppercase
  { min: 97, max: 122 }, // lowercase
  { min: 48, max: 57 }, // numeric
];

function generateCharacterRange(min, max) {
  // iterates through the set range to push UTF-16 code units in `characters` array
  for (let i = min; i <= max; i++) {
    characters.push(String.fromCharCode(i));
  }
  return;
}

function generateId(req) {
  let indexValue = req.length;
  charRanges.forEach((set) => generateCharacterRange(set.min, set.max));
  console.log(characters);
}

generateId(notes);
