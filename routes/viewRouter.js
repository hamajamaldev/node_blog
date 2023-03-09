const viewController = require('../controllers/viewController');
const express = require('express');
const router = express.Router();

router.get('/', viewController.renderIndex);
router.get('/about', viewController.renderAbout);


module.exports = router;