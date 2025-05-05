const db = require('../config/db');

// Get all users
const getUsers = async () => {
  try {
    const [results] = await db.query('SELECT * FROM users');
    return results;
  } catch (err) {
    throw err;
  }
};

// Get user by ID
const getUserByUid = async (uid) => {
    try {
    //   console.log('Running query to fetch user with email:', uid); // Menampilkan email yang dicari
      const [rows] = await db.execute(
        'SELECT * FROM users WHERE uid = ?',
        [uid]
      );
      console.log('Query result:', rows); // Menampilkan hasil query
      return rows;
    } catch (error) {
      console.error('Error fetching user by uid:', error.message);
      throw new Error('Unable to fetch user by email');
    }
};

// Create user
const createUser = async (userData) => {
    const { uid, full_name, email, phone_number } = userData;
    const [result] = await db.execute(
        'INSERT INTO users (uid, full_name, email, phone_number, role, created_at, updated_at) VALUES (?, ?, ?, ?, ?, NOW(), NOW())',
        [uid, full_name, email, phone_number, 'user']
    );
    return result;
};
  

module.exports = { getUsers, getUserByUid, createUser };
