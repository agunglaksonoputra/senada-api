const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.get('/', eventController.getAllEvents);
router.get('/:eventId', eventController.getEventById);
router.get('/category/:categoryId', eventController.getEventsByCategory);

module.exports = router;
