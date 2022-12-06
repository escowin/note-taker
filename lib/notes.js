const fs = require('fs');
const path = require('path');

// logic | note related functions

function findById(id, notesArray) {
    console.log(`js:51, checking paramters | ${id}, ${notesArray}`);
    const result = notesArray.filter(note => note.id === id)[0];
    console.log(`js:53 filter methods returns ${result}`);
};

// function createNewPost(body, notesArray) {

// }

// module.exports =  { export an object containing each function };