module.exports = (sequelize, DataTypes) => {
const User = sequelize.define('User', {
    uid: {
        type: DataTypes.STRING(28),
        primaryKey: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    full_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    phone_number: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('user', 'admin_app', 'admin_event'),
        allowNull: false,
        defaultValue: 'user',
    },
    }, {
        tableName: 'users',
        timestamps: true,
    });

    return User;
};