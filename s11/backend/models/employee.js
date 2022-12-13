const sequelize = require("./database");
const {DataTypes} = require("sequelize");

const Employee =  sequelize.define("employees", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	firstName: DataTypes.STRING,
	lastName: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	email: {
		type: DataTypes.INTEGER,
		validate: {
			isEmail: true
		}
	},
	birthYear: {
		type: DataTypes.INTEGER,
		validate: {
			min: 1900
		}
	},
})

module.exports = Employee;