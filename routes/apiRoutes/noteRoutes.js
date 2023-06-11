// ::route:: /api/noteRoutes
const router = require('express').Router();
const { createNote } = require('../../lib/notes');
const notes = require("../../db/db.json");

// CRUD
// - get all notes
router.get('/notes', (req, res) => {
    let result = notes
    res.json(result);
});

// - post a note. note will have an id
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const note = createNote(req.body, notes);
    res.json(note);
});

router.get("/notes/:id", (req, res) => {
    let id = req.params.id
    let result = notes[id];
    console.log(result);
    res.json(result)
})

// - edit a note | will require note.id 
router.put("/notes/:id", (req, res) => {
    const id = req.params.id;
    const update = req.body;
    notes[id] = {...update, id};
    // updated note is sent back
    res.json(notes[id])
});

// - delete a note based on its id
router.delete("/notes/:id", (req, res) => {
    const id = req.params.id;
    const note = notes[id];
    if (!note) {
        return res.status(404).json({ error: "note note found"})
    }

    // delete is a javascript keyword. this removes the specified note object from the notes array
    delete notes[id];
    res.json({ message: "note deleted"})

    // note: deleting object leaves a null value. need to rewrite db.json to remove null values & trailing commas
});

module.exports = router;