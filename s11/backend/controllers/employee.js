const Employee = require("../models/employee");
const Company = require("../models/company");

const getAlllEmployees = async (req, res) => {
	try {
		const employees = await Employee.findAll();
		res.status(200).json(employees);
	}
	catch (err) {
		res.status(500).json(err);
	}
}


const updateEmployee = async (req, res) => {
	try {
		const { id } = req.params;

		const employee = await Employee.findOne({ where: { id } });

		if (employee) {

			// employee.firstName = req.body.firstName;
			// employee.lastName = req.body.lastName;
			employee.email = req.body.email;
			// employee.birthYear = req.body.birthYear;

			await employee.save();

			res.status(201).send({ message: "Employee updated", employee: employee });
		}
	} catch (e) {
		console.error(e);
		res.status(500).send({ message: "server error" })
	}
}

// const updateEmployee = async (req, res) => {
// 	try {
// 	  const { id } = req.params;
// 	  let email = req.body.email;

// 	  const foundEmployee = await Employee.findOne({
// 		 where: {
// 			id
// 		 }
// 	  });
// 	  if (!foundEmployee) {
// 		 res.status(400).send({ message: "employee does not exist" });
// 	  }
// 	  else {
		//  const updatedEmployee = await foundEmployee.update({
		// 	...foundEmployee,
		// 	email
		//  });
		//  res.status(200).send({ updatedEmployee, message: "employee has been updated" });

// 	  }
// 	} catch (e) {
// 	  console.error(e);
// 	  res.status(500).send({ message: "server error" })
// 	}
//  }

const getEmployee = async (req, res) => {
	const employeeId = req.params.id;
	try {
		const employee = await Employee.findOne({ where: { id: employeeId } });
		res.status(200).send(employee);
	} catch (e) {
		res.status(500).send({ message: "Server error",e });
	}
};

const createEmployee = async (req, res) => {
	try {
		const newEmployee = await Employee.create(req.body);
		res.status(200).send(newEmployee);
	}
	catch (err) {
		res.status(500).send(err);
	}
};




module.exports = {
	createEmployee,
	getEmployee,
	updateEmployee,
	getAlllEmployees
};