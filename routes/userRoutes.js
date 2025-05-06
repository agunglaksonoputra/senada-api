const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/all', userController.getAllUser);
router.post('/add-user', userController.createUser);
router.get('/:userUid', userController.getUserById);

module.exports = router;
