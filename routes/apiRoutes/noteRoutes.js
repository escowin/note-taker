// ::route:: /api/noteRoutes
const router = require("express").Router();
const { createNote, updateNote } = require("../../lib/notes");
const { notes } = require("../../db/db.json");
const { generateId } = require("../../utils/helpers");

// CRUD
// - get all notes
router.get("/notes", (req, res) => {
  let result = notes;
  res.json(result);
});

// - post a note. note will have an id
router.post("/notes", (req, res) => {
  req.body.id = generateId();
  const note = createNote(req.body, notes);
  res.json(note);
});

router.get("/notes/:id", (req, res) => {
  const id = req.params.id;
  const note = notes.find((note) => note.id === id);
  if (!note) {
    return res.status(404).json({ error: "note not found" });
  }
  res.json(note);
});

// - edit a note | will require note.id
router.put("/notes/:id", (req, res) => {
  const id = req.params.id;
  const update = req.body;
  let noteIndex = notes.findIndex(note => note.id === id);
  if (!noteIndex) {
    return res.status(404).json({ error: "note not found" });
  }

  notes[noteIndex] = { ...update, id };
  // updated note variable is sent back as a response. to do: re-write db.json
  updateNote(notes)
  res.json(notes[noteIndex]);
});

// - delete a note based on its id
router.delete("/notes/:id", (req, res) => {
  const id = req.params.id;
  const note = notes.find(note => note.id === id);
  if (!note) {
    return res.status(404).json({ error: "note note found" });
  }

  // delete is a javascript keyword. note object is deleted from db.json
  delete note;
  res.json({ message: "note deleted" });

  // note: deleting object leaves a null value. need to rewrite db.json to remove null values & trailing commas
});

module.exports = router;
