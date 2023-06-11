const notes = require("../db/db.json")

function generateId(req) {
    let id = req.length
    console.log(id)
}

generateId(notes)