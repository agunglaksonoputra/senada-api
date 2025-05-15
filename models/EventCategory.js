module.exports = (sequelize, DataTypes) => {
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
            key: 'id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }
    }
    }, {
        tableName: 'event_categories',
        timestamps: false
    });

    return EventCategory;
};