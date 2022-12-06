// ::route:: /api/noteRoutes
const router = require('express').Router();
// const { } = require('../../lib/notes');
const notes = require("../../db/db.json")

// CRUD
// - get all notes

// - post a note. note will have an id
// - delete a note based on its id

router.get('/notes', (req, res) => {
    // let x = notes
    console.log("js:59 " + notes)
    res.json(x);
});

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