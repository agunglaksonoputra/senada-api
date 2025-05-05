const eventService = require('../services/eventService');

const getAllEvents = async (req, res) => {
  try {
    // Memanggil service untuk mendapatkan semua events
    const events = await eventService.getAllEvents();
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ message: 'Terjadi kesalahan saat mengambil data events', error: err.message });
  }
};

const getTop5Events = async (req, res) => {
  try {
    const events = await eventService.getTop5Events();
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ message: 'Terjadi kesalahan', error: err.message });
  }
};

const getEventsByCategory = async (req, res) => {
  const { categoryId } = req.params;
  try {
    const events = await eventService.getEventsByCategory(categoryId);
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ message: 'Terjadi kesalahan', error: err.message });
  }
};

module.exports = { getAllEvents, getTop5Events, getEventsByCategory };
