const sequelize = require("./database");
const {DataTypes} = require("sequelize");

const Company =  sequelize.define("companies", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	}
})

module.exports = Company;