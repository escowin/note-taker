// ::route:: /api/
const router = require('express').Router();
const noteRoutes = require('./noteRoutes');

router.use(noteRoutes); // ::route:: /api/notes

module.exports = router;