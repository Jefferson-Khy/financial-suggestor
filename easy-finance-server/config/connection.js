require("dotenv").config();

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("easy-financeDB", "root", "Thirteen13!", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
