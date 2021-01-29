module.exports = function (sequelize, DataTypes) {
  const ProductAddOn = sequelize.define("ProductAddOn");

  ProductAddOn.associate = function (models) {
    ProductAddOn.belongsTo(models.Topping, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  ProductAddOn.associate = function (models) {
    ProductAddOn.belongsTo(models.Product, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return ProductAddOn;
};