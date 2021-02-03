module.exports = function (sequelize, DataTypes) {
    const Product = sequelize.define("Product", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        description: DataTypes.TEXT,
        in_stock: {
            type: DataTypes.BOOLEAN,
            defaultValue: "1"
        },
        image_id: DataTypes.STRING
    });

    Product.associate = function (models) {
        Product.belongsTo(models.Category, {
            foreignKey: {
                allowNutll: false
            }
        });
        Product.hasMany(models.Size, {
            onDelete: "cascade"
        });
    };

    return Product;
};