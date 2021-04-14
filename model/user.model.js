const DataTypes = require("sequelize/lib/data-types");

module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define(
        "Users",
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            Name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Phone: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Address: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Gender: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            timestamps: false,
            freezeTableName: true,
        }
    );

    return Users;
};
