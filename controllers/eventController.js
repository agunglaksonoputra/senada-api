const eventService = require('../services/eventService');

const getAllEvents = async (req, res) => {
  try {
    console.log("Entering getEventById");
    const event = await eventService.getAllEvents();
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getEventById = async (req, res) => {
  try {
    console.log("Entering getEventById");
    const { eventId } = req.params;
    const event = await eventService.getEventById(eventId);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getEventsByCategory = async (req, res) => {
  try {
    console.log("Entering getEventsByCategory");
    const { categoryId } = req.params;
    const event = await eventService.getEventsByCategory(categoryId);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPopularEvents = async (req, res) => {
  try {
    console.log("Entering getPopularEvents");
    const event = await eventService.getPopularEvents();
    if (!event || event.length === 0) {
      return res.status(404).json({ message: 'No events found' });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { 
  getAllEvents, 
  getEventById,
  getEventsByCategory,
  getPopularEvents
};
