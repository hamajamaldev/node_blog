const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// .../api/users
router.route('/').get(userController.getAllUsers)
router.route('/:id').get(userController.getSingleUser)

module.exports = router;