const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/all', userController.getAllUsers);
router.get('/:userUid', userController.getUser);
router.post('/add-user', userController.createUser);

module.exports = router;
