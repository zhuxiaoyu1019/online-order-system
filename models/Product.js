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
        larger: DataTypes.INTEGER,
        x_large: DataTypes.INTEGER,
        smallsquare: DataTypes.INTEGER,
        largesqaure: DataTypes.INTEGER
    });

    Product.associate = function (models) {
        Product.belongsTo(models.Category, {
            foreignKey: {
                allowNull: false
            }
        });
        Product.belongsTo(models.Image, {
            foreignKey: {
                allowNull: false
            }
        });
        Product.hasMany(models.Price);
    };

    // Product.associate = function (models) {
    //     // Product.belongsTo(models.Image, {
    //     //     foreignKey: {
    //     //         allowNull: false
    //     //     }
    //     // });
    // };

    // Product.associate = function (models) {
    //     Product.hasMany(models.Price);
    // };

    return Product;
};
