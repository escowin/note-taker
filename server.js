const fs = require('fs');
const path = require('path');
const express = require('express');
const notes = require('./db/db.json');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// port set up for staging, and server instantiation
const PORT = process.env.PORT || 3001;

// instantiates server
const app = express();

// middleware | converts raw data sent over http into a json object.
// - takes & converts incoming POST data into key-value pairs. the pairs are accessed via req.body. true informs server of possible sub-array data nested within
app.use(express.urlencoded({ extended: true }));
// - takes incoming POST json-formatted data & parses it into js req.body object
app.use(express.json());
// - allows frontend html scripts to run by making directory files readily available
app.use(express.static('public'));


// ::middleware routing::
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// logic
// - cli greeting
function noteTaker() {
    let date = new Date().getFullYear();
    console.log(`    note-taker \u00A9 ${date} Edwin M. Escobar
    https://github.com/escowin/note-taker
    `);
};

function findById(id, notesArray) {
    console.log(`js:51, checking paramters | ${id}, ${notesArray}`);
    const result = notesArray.filter(note => note.id === id)[0];
    console.log(`js:53 filter methods returns ${result}`);
};

function createNewPost(body, notesArray) {

}

// server routes
app.listen(PORT, () => {
    noteTaker();
    console.log(`    server now on port ${PORT}
    http://localhost:${PORT}/api/notes`);
});

// html routes
// - GET /notes returns notes.html
// - GET * returns index.html



// deploy application


// configure an express back end to serve static html files
// configure an express back end to create an api to handle get & post requests
// parse parameters in server-side routes
// submit form data to a server
// implement seperate of concerns for routing
// deploy a server side application to the heroku platform


// Configure an Express.js app to handle GET and POST requests.

// Configure an Express.js app to serve static files.

// Identify how client-side requests relate to server-side responses.

// Parse optional and required parameters when creating server-side routes.

// Implement client-side POST requests to submit form data to a server.

// Implement separation of concerns for routing.

// Deploy a server-side application to the Heroku platform.

// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');