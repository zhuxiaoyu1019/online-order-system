module.exports = function (sequelize, DataTypes) {
    const Price = sequelize.define("Price", {
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    Price.associate = function (models) {
        Price.belongsTo(models.Size, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    Price.associate = function (models) {
        Price.belongsTo(models.Product, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Price;
};