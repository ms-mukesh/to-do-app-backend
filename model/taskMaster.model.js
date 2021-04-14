const DataTypes = require("sequelize/lib/data-types");


module.exports = (sequelize, Sequelize) => {
    const TaskMaster = sequelize.define(
        "TaskMaster",
        {
            TaskId: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            TaskName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            CreationDate: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            TaskDecription: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            IsCompleted: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            timestamps: false,
            freezeTableName: true,
        }
    );
    const User = require("./user.model")(sequelize, Sequelize);
    TaskMaster.belongsTo(User, {
        foreignKey: "TaskCreator",
        as: "TaskCreatorData",
    });
    return TaskMaster;
};
