const router = require('express').Router(); 
const dbNotes = require('../api/dbRoutes');

router.use(dbNotes);

module.exports = router; 