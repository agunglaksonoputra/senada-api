const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.get('/events', eventController.getAllEvents);
router.get('/events/top5', eventController.getTop5Events);
router.get('/events/category/:categoryId', eventController.getEventsByCategory);

module.exports = router;
