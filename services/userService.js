const User = require("../models/User");

const createUser = async (userData) => {
    return await User.create(userData);
};

const getAllUser = async () => {
    return await User.findAll({
        where: { role: 'user' }
    });
};

const getUserById = async (uid) => {
    return await User.findByPk(uid);
}

module.exports = {
    createUser,
    getAllUser,
    getUserById
};