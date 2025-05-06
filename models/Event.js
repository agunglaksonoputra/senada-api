const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
const Category = require('./Category');

const Event = sequelize.define('Event', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: DataTypes.TEXT,
    phone_number: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    location: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    experience: DataTypes.TEXT,
    thumbnail: DataTypes.TEXT,
}, {
    tableName: 'events',
    timestamps: true,
});

Event.belongsToMany(Category, {
    through: 'event_categories',
    foreignKey: 'event_id',
    otherKey: 'category_id'
});

module.exports = Event;
