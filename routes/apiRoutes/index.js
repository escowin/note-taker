// ::route:: /api/
const router = require('express').Router();
const noteRoutes = require('./noteRoutes');

// api endpoint
router.use('/notes', noteRoutes);

module.exports = router;