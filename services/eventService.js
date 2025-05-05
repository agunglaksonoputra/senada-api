const eventModel = require('../models/eventModel');

const getAllEvents = () => {
  return eventModel.getAllEvents();
};

const getTop5Events = () => {
  return eventModel.getTop5Events();
};

const getEventsByCategory = (categoryId) => {
  return eventModel.getEventsByCategory(categoryId);
};

module.exports = { getAllEvents, getTop5Events, getEventsByCategory };
