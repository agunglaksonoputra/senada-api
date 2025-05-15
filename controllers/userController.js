const { User } = require('../models');

exports.getAllUsers = async (req, res) => {
    try {
        console.log('Entering getAllUsers');
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
 
};

exports.createUser = async (req, res) => {
    const userData = req.body;
    try {
        const user = await User.create(userData);
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getUserById = async (req, res) => {
    const { userId } = req.params;
    try {
        console.log('Entering getUserById');
        const user = await User.findByPk(userId);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
