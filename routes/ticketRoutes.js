const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

router.get('/:eventId', ticketController.getTicketEvent);

module.exports = router;
