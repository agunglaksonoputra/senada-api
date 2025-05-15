const { Op } = require('sequelize');
const { Event, Category, Ticket } = require('../models');

exports.getAllEvents = async (req, res) => {
  try {
    console.log("Entering getAllEvents");
    const results = await Event.findAll();
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getEventById = async (req, res) => {
    const { eventId } = req.params;
    try {
        console.log("Entering getEventById");
        const result = await Event.findByPk(eventId);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getEventsByCategory = async (req, res) => {
  const { categoryId } = req.params;
  try {
    console.log("Entering getEventsByCategory");
    const results = await Event.findAll({
      include: [
        {
          model: Category,
          where: {
            [Op.or]: [{ id: categoryId }],
          },
          through: { attributes: [] },
        },
        {
          model: Ticket,
          attributes: ['id', 'name', 'session_start_time'],
          where: {
            is_active: true,
          },
          required: false,
        },
      ],
    });
    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};