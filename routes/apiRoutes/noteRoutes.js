const router = require("express").Router();
const {
  getAllNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
} = require("../../controllers/noteControllers");

// crud endpoints
router.route("/").get(getAllNotes).post(createNote);
router.route("/:id").get(getNote).put(updateNote).delete(deleteNote);

module.exports = router;
