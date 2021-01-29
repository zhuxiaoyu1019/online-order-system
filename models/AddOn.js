module.exports = function (sequelize, DataTypes) {
  const AddOn = sequelize.define("AddOn");

  AddOn.associate = function (models) {
    AddOn.belongsTo(models.Topping, {
      foreignKey: {
        allowNull: false
      }
    });

    AddOn.belongsTo(models.Product, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return AddOn;
};