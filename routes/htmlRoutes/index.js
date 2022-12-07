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

// redirects to index for wild card routes
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router;