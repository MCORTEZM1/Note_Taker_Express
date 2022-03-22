const router = require('express').Router(); 
const dbRoutes = require('../api/dbRoutes');

router.use(dbRoutes);

module.exports = router; 