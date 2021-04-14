const { Sequelize, sequelize } = require("../config/sequelize");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require("./user.model")(sequelize, Sequelize);
db.taskMaster = require("./taskMaster.model")(sequelize, Sequelize);
module.exports = db;
