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
        // piccino: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true
        // },
        // small: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true
        // },
        // medium: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true
        // },
        // large: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true
        // },
        // x_large: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true
        // },
        // smallsquare: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true
        // },
        // largesqaure: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true
        // },
        // family: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true
        // },
        // full: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true
        // },
        // regular: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true
        // },
        // deluxe: {
        //     type: DataTypes.INTEGER,
        //     allowNull: true
        // }
    });

    Product.associate = function (models) {
        Product.belongsTo(models.Category, {
            foreignKey: {
                allowNutll: false
            }
        });
        Product.hasMany(models.Size);
    };

    return Product;
};