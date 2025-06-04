const sequelize = require("../config/db");
const Product = require("./Product");

const db = {
  sequelize,
  Product,
};

module.exports = db;
