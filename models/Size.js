module.exports = function (sequelize, DataTypes) {
    const Size = sequelize.define("Size", {
        name: DataTypes.STRING,
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            min: 0
        }
    });

    Size.associate = function (models) {
        Size.belongsTo(models.Product, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Size;
};
