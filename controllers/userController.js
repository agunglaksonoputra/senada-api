const userService = require('../services/userService');

const getAllUser = async (req, res) => {
  try {
    const user = await userService.getAllUser();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const user = await userService.createUser(userData);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { userUid } = req.params;
    const user = await userService.getUserById(userUid);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { 
  getAllUser, 
  createUser,
  getUserById
};
