const notes = require("../db/db.json");
const characters = [];
const charRanges = [
  { min: 65, max: 90 }, // uppercase
  { min: 97, max: 122 }, // lowercase
  { min: 48, max: 57 }, // numeric
];
const idLength = 6;

function generateCharacterRange(min, max) {
  // iterates through the set range to push UTF-16 code units in `characters` array
  for (let i = min; i <= max; i++) {
    characters.push(String.fromCharCode(i));
  }
  return;
}

function generateId(req) {
  const idArray = [];
  let indexValue = req.length;
  charRanges.forEach((set) => generateCharacterRange(set.min, set.max));
  //   id is 6 characters long
  for (let i = 0; i < idLength; i++) {
    const charIndex = Math.floor(Math.random() * characters.length);
    const charValue = characters[charIndex];
    idArray.push(charValue);
  }

  //   concatenates the array of characters that make up the id
  const id = idArray.join("");
  console.log(id)
  console.log(req)
}

generateId(notes);
