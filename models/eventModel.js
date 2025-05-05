const db = require('../config/db');

// Fungsi untuk mengambil semua events
const getAllEvents = async () => {
  try {
    const [rows] = await db.query('SELECT * FROM events');
    return rows;
  } catch (err) {
    throw err;
  }
};

// Fungsi untuk mengambil top 5 events
const getTop5Events = async () => {
  try {
    const [rows] = await db.query('SELECT * FROM events ORDER BY created_at DESC LIMIT 5');
    return rows;
  } catch (err) {
    throw err;
  }
};

// Fungsi untuk mengambil events berdasarkan kategori
const getEventsByCategory = async (categoryId) => {
  try {
    const [rows] = await db.query(
      'SELECT events.* FROM events INNER JOIN event_categories ON events.id = event_categories.event_id WHERE event_categories.category_id = ?',
      [categoryId]
    );
    return rows;
  } catch (err) {
    throw err;
  }
};

module.exports = { getAllEvents, getTop5Events, getEventsByCategory };