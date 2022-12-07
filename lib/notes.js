const fs = require('fs');
const path = require('path');

// logic | note related functions

// issue : need to iterate through the array. retrieving by req.params.id returns 404
function createNote(body, notesArray) {
    const note = body;
    console.log(`js:9 ${note}`)
};

// function createNewPost(body, notesArray) {
// }

module.exports =  { createNote };