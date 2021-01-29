module.exports = function (sequelize, DataTypes) {
    const Size = sequelize.define("Size", {
        size: DataTypes.STRING
    });

    Size.associate = function (models) {
        Size.hasMany(models.Price, {
            onDelete: "cascade"
        });
    };

    return Size;
};
