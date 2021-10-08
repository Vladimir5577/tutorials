const router = require('express').Router();
const seederController = require('../controllers/seederController');

router.get('/seeders', seederController.runSeeder);

module.exports = router;