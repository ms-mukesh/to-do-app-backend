const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./model")
db.sequelize.sync();
app.use(cors());
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
const userAuth = require("./route/userAuth");
const taskManager = require("./route/taskManager");

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/userAuth", userAuth);
app.use("/taskManager", taskManager);
app.get("/", (req, res) => res.send("Hello World!"));

app.listen(4001, () => console.log(`To Do app listening on port ${4001}!`));
