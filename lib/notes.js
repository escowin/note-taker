const fs = require('fs');
const path = require('path');

// logic | note related functions

// issue : need to iterate through the array. retrieving by req.params.id returns 404
function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result
};

// function createNewPost(body, notesArray) {
// }

module.exports =  { findById };