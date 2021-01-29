module.exports = function (sequelize, DataTypes) {
    const Category = sequelize.define("Category", {
        name: DataTypes.STRING
    });

    Category.associate = function (models) {
        Category.hasMany(models.Product, {
            onDelete: "cascade"
        });
    };

    return Category;
};