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

const express = require('express');
const db = require('./db/db.json');

// port set up for staging, and server instantiation
const PORT = process.env.PORT || 3001;
const app = express();

// logic
function noteTaker() {
    let date = new Date().getFullYear();
    console.log(`    note-taker \u00A9 ${date} Edwin M. Escobar
    https://github.com/escowin/note-taker
    `);
};

// ** pause | can't see db.json in browser nor in insomnia

// routes
// api routes
// - GET /api/notes reads & displays db.json
app.get('/api/notes', (req, res) => {
    let notes = db;
    console.log(notes)
    res.json(notes);
});
// - POST /api/notes adds note to db.json, returns new note to client. each note needs a unique id when saved.
// - DELETE /api/notes/:id recieves query paramter, then deletes a note from db.json based on its unique id

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
