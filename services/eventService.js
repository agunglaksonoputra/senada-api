const { Op } = require('sequelize');
const Categories = require('../models/Category');
const Event = require('../models/Event');

const getAllEvents = async () => {
  return await Event.findAll({
    include: {
      model: Categories,
      through: { attributes: [] }
    }
  });
};

const getEventById = async (eventId) => {
  return await Event.findByPk(eventId, {
    include: {
      model: Categories,
      through: { attributes: [] }
    }
  });
};

const getEventsByCategory = async (categoryId) => {
  return await Event.findAll({
    include: {
      model: Categories,
      where: {
        [Op.or]: [
          { id: categoryId },
        ]
      },
      through: { attributes: [] }
    }
  });
};

const getPopularEvents = async () => {
    // Misalnya menggunakan query yang benar
    return await Event.findAll({
      limit: 5,   // Contoh untuk mendapatkan event terbaru
      order: [['createdAt', 'DESC']],  // Mengurutkan berdasarkan tanggal
    });
};

module.exports = { 
  getAllEvents, 
  getEventById, 
  getEventsByCategory, 
  getPopularEvents 
};
