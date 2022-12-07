// ::route:: /api/noteRoutes
const router = require('express').Router();
// const { findById } = require('../../lib/notes');
const notes = require("../../db/db.json");

// CRUD
// - get all notes
router.get('/notes', (req, res) => {
    let result = notes
    // console.log("js:59 " + res.json(result));
    res.json(result);
});

// - post a note. note will have an id
// router.post('/notes', (req, res) => {
//     req.body.id = notes.length.toString()
//     if(!validated(req.body) {
//         res.status(400).send("note improperly formatted")
//     })
// });

// - delete a note based on its id

// **previous unmodularized code**
// router.get('/api/notes/:id', (req, res) => {
//     const result = findById(req.params.id, notes)
//     if (result) {
//         res.json(result);
//     } else {
//         res.send(404);
//     }

//     // console.log("js:65, getting note by id | " + result);
// });

// - POST /api/notes adds note to db.json, returns new note to client. each note needs a unique id when saved.
// router.post('/api/notes', (req, res) => {
//     console.log("js:70 " + (req.body.id = notes.length.toString()));
// });
// - DELETE /api/notes/:id recieves query paramter, then deletes a note from db.json based on its unique id


module.exports = router;