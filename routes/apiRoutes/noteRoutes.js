// ::route:: /api/noteRoutes
const router = require("express").Router();
const { getAllNotes, createNote, updateNotes } = require("../../controllers/noteControllers");
const { notes } = require("../../db/db.json");

// CRUD
// - get all notes
router.route("/").get(getAllNotes);

// - post a note. note will have an id
router.post("/notes", (req, res) => {
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
  let noteIndex = notes.findIndex((note) => note.id === id);
  if (!noteIndex) {
    return res.status(404).json({ error: "note not found" });
  }
  notes[noteIndex] = { ...update, id };
  updateNotes(notes);
  res.json(notes[noteIndex]);
});

// - delete a note based on its id
router.delete("/notes/:id", (req, res) => {
  const id = req.params.id;
  const note = notes.findIndex((note) => note.id === id);
  if (!note) {
    return res.status(404).json({ error: "note not found" });
  }

  // notes is updated by removing one note object through .splice(). this new notes array rewrites db.json
  notes.splice(note, 1);
  updateNotes(notes);
  res.json({ message: "note deleted" });
});

module.exports = router;
