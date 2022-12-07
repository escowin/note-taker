// ::route:: displays frontend html in browser
const path = require("path");
const router = require("express").Router();

// loads frontend index.html
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

// loads frontend notes.html
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

// wild cards load index.html
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router;
