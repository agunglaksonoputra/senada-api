const usersModel = require('../models/userModel');


const getAllUsers = async (req, res) => {
    try {
      const results = await usersModel.getUsers();
      res.status(200).json(results);
    } catch (err) {
      console.error('Error:', err);
      res.status(500).json({ message: 'Error fetching users', error: err.message });
    }
};

const getUser = async (req, res) => {
    const userUid = req.params.userUid;
    console.log('Received userUid:', userUid);
  
    try {
      const result = await usersModel.getUserByUid(userUid);
  
      if (result.length === 0) {
        // console.warn('User not found for email:', userUid);
        return res.status(404).json({ message: 'User not found' });
      }
  
    //   console.log('Sending user data:', result[0]);
      res.status(200).json(result[0]);
    } catch (err) {
    //   console.error('Error fetching user:', err);
      res.status(500).json({ message: 'Error fetching user', error: err.message });
    }
};  

const createUser = async (req, res) => {
  const userData = req.body;
  try {
    const result = await usersModel.createUser(userData);
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error creating user', error: err });
  }
};

module.exports = { getAllUsers, getUser, createUser };
