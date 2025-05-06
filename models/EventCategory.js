const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const EventCategory = sequelize.define('EventCategory', {
    event_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'events',
            key: 'id'
        }
    },
    category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'categories',
            key: 'id'
        }
    }
}, {
    tableName: 'event_categories',
     timestamps: false
});

module.exports = EventCategory;