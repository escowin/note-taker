// ::route:: /api/noteRoutes
const router = require('express').Router();
const { createNote } = require('../../lib/notes');
const notes = require("../../db/db.json");

// CRUD
// - get all notes
router.get('/notes', (req, res) => {
    let result = notes
    // console.log("js:59 " + res.json(result));
    res.json(result);
});

// - post a note. note will have an id
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const note = createNote(req.body, notes);
    res.json(note);
});

// edit notes
// router.update(){};

// - delete a note based on its id
// router.delete(){};

module.exports = router;