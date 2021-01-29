module.exports = function (sequelize, DataTypes) {
    const Image = sequelize.define("Image", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        secure_url: DataTypes.STRING,
        cloundinary_id: DataTypes.STRING
    });

    Image.associate = function (models) {
        Image.hasMany(models.Product);
    };

    return Image;
};
