module.exports = function (sequelize, DataTypes) {
    const Topping = sequelize.define("Topping", {
        name: DataTypes.STRING,
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    Topping.associate = function (models) {
        Topping.hasMany(models.AddOn, {
            onDelete: "cascade"
        });
    };

    return Topping;
};
