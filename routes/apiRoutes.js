const router = require('express').Router();
const fs = require('fs');
const path = require('path');

let notes = [];

// GET  ROUTES
router.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) {
            console.log(err + `this here is an error`)
        }
        res.send(data)
    });
  });
  
// POST ROUTES
router.post('/api/notes', (req, res) => {
    let newNotes = req.body
    notes.push(newNotes);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes))

        fs.readFile('./db/db.json', (err, data) => {
            if (err) {
                console.log(err + `this here is an error`)
            }
            res.send(data)
        });
  });

module.exports = router;
