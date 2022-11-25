const sequelize = require("./database.js");
const Employee = require("./employee");
const Company = require("./company")

Company.hasMany(Employee);

module.exports = {
  sequelize,
  Employee,
  Company,
};