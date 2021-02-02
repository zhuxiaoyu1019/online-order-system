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
        piccino: DataTypes.INTEGER,
        small: DataTypes.INTEGER,
        medium: DataTypes.INTEGER,
        large: DataTypes.INTEGER,
        x_large: DataTypes.INTEGER,
        smallsquare: DataTypes.INTEGER,
        largesqaure: DataTypes.INTEGER,
        family: DataTypes.INTEGER,
        full: DataTypes.INTEGER,
        regular: DataTypes.INTEGER,
        deluxe: DataTypes.INTEGER
    });

    Product.associate = function (models) {
        Product.belongsTo(models.Category, {
            foreignKey: {
                allowNutll: false
            }
        });
        Product.belongsTo(models.Image, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Product;
};