module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: DataTypes.STRING,
  }, {
    tableName: 'categories',
    timestamps: false,
  });

  Category.associate = (models) => {
    Category.belongsToMany(models.Event, {
      through: 'event_categories',
      foreignKey: 'category_id',
      otherKey: 'event_id'
    });
  };

  return Category;
};