const notes = require("../db/db.json");

const characterSet = (array) => {
  // the characters array is made alphanumeric string objects by iterating through the specified ranges of UTF-16 code units
  //  A - Z
  for (let i = 65; i <= 90; i++) {
    array.push(String.fromCharCode(i));
  }
  //  a - z
  for (let i = 97; i < 122; i++) {
    array.push(String.fromCharCode(i));
  }
  //  0 - 9
  for (let i = 48; i <= 57; i++) {
    array.push(String.fromCharCode(i));
  }
};

function generateId(req) {
  let indexValue = req.length;
  const characters = [];
  const regex = /[A-Za-z0-0]/g;
  const unicodeRange = "\u0000-\u007F";
  characterSet(characters);
  console.log(characters);
}

generateId(notes);
