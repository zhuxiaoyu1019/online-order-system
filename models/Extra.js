module.exports = function (sequelize, DataTypes) {
    const Extra = sequelize.define("Extra", {
        name: DataTypes.STRING,
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });

    Extra.associate = function (models) {
        Extra.belongsTo(models.Catgegory, {
            foreignKey: {
                allowNull: false
            }
        });
        Extra.hasMany(models.ProductAddOn, {
            onDelete: "cascade"
        });
    };

    return Extra;
};
