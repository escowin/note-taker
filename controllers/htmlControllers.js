const path = require("path");

// controller object holds methods to render frontend html with corresponding htmlRoutes endpoints
const htmlController = {
  homeView(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  },
  notesView(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  },
};

module.exports = htmlController;