const express = require("express");

// port set up for staging, and server instantiation
const PORT = process.env.PORT || 3001;
const app = express();

// middleware | converts raw data sent over http into a json object.
// - takes & converts incoming POST data into key-value pairs. the pairs are accessed via req.body. true informs server of possible sub-array data nested within
app.use(express.urlencoded({ extended: false }));
// - takes incoming POST json-formatted data & parses it into js req.body object
app.use(express.json());
// - allows frontend html scripts to run by making directory files readily available
app.use(express.static("public"));
app.use(require("./routes"));

// server
app.listen(PORT, () => {
  let date = new Date().getFullYear();
  console.log(`    note-taker \u00A9 ${date} Edwin M. Escobar
    https://github.com/escowin/note-taker
    server now on port ${PORT}
    http://localhost:${PORT}/`);
});
