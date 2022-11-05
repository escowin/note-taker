const fs = require('fs');
const express = require('express');

// html routes
// - GET /notes returns notes.html
// - GET * returns index.html

// api routes
// - GET /api/notes reads db.json, returns all saved notes as json
// - POST /api/notes adds note to db.json, returns new note to client. each note needs a unique id when saved.
// - DELETE /api/notes/:id recieves query paramter, then deletes a note from db.json based on its unique id

// deploy application

function noteTaker() {
    let date = new Date().getFullYear();
    console.log(`
    note-taker \u00A9 ${date} Edwin M. Escobar
    https://github.com/escowin/note-taker
    `);
}

noteTaker();