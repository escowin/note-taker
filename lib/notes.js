const fs = require('fs');
const path = require('path');

// logic | note related functions

// issue : need to iterate through the array. retrieving by req.params.id returns 404
function findById(id, notesArray) {
    console.log(`   js:8 id | ${id}
    js:9 notesArray | ${notesArray}`)
    const result = notesArray.filter(note => note.id === id)[0]; // investigate [0]
    console.log(`findById test : ${result}`)
    return result
};

// function createNewPost(body, notesArray) {
// }

module.exports =  { findById };