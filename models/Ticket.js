module.exports = (sequelize, DataTypes) => {
    const Ticket = sequelize.define('Ticket', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    event_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'events',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    session_start_time: DataTypes.TIME,
    session_end_time: DataTypes.TIME,
    session_start_date: DataTypes.DATEONLY,
    session_end_date: DataTypes.DATEONLY,
    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    is_sold: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    }, {
        tableName: 'tickets',
        timestamps: false,
    });

    Ticket.associate = (models) => {
        Ticket.hasMany(models.TicketCategory, {foreignKey: 'ticket_id'});
    };

    return Ticket;
};