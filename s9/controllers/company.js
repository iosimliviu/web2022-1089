const { restore } = require("../models/company");
const Company = require("../models/company");
const Employee = require("../models/employee");


const getCompany = async (req, res) => {
	const companyId = req.params.id;
	try {
	  const company = await Company.findOne({ where: { id: companyId } });
	  res.status(200).send(company);
	} catch (e) {
	  res.status(500).send({ message: "Server error" });
	}
 };

 const createCompany = async (req,res) => {
	try {
		const newCompany = await Company.create(req.body);
		return res.status(200).json(newCompany);
	}
	catch(err){
		return res.status(500).json(err);
	}
};

const getAllCompanies = async (req,res) => {
	try{
		const companies = await Company.findAll();
		res.status(200).json(companies);
	}
	catch(err){
		res.status(500).json(err);
	}
}

const addNewEmployeeToCompany = async (req, res) => {
	try {
		const company = await Company.findOne({where: {
			id: req.params.companyId
		}});

		if(company) {
			const newEmployee = new Employee();
			newEmployee.firstName = req.body.firstName;
			newEmployee.lastName = req.body.lastName;
			newEmployee.email = req.body.email;
			newEmployee.birthYear = req.body.birthYear;

			newEmployee.companyId = company.id;

			await newEmployee.save();

			res.status(201).send({message: "Employee created", employee: newEmployee});

		}
	}
	catch(err) {
		res.status(500).json(err);
	}
}

const getEmployeesForCompany = async (req, res) => {
	try {
		const employees =  await Employee.findAll({where: {
			companyId: req.params.companyId
		}}); // include: [Employee]

		if(employees) {
			res.status(200).json(employees)
		}

		else {
			res.status(404).send({message:"Employees not found for company"})
		}


	}
	catch(err) {
		res.status(500).json(err);
	}
}

const updateEmployeeInCompany = async (req, res) => {
	try {
		const company = await Company.findOne({where: {
			id: req.params.companyId
		}});

		if(company) {
			const employee = await Employee.findOne({where: {id: req.params.employeeId}})
			if(employee) {
				employee.firstName = req.body.firstName;
				employee.lastName = req.body.lastName;
				employee.email = req.body.email;
				employee.birthYear = req.body.birthYear;

				await employee.save();

				res.status(200).send({message: "Employee updated", employee: employee})
			}
		}

	}
	catch(err) {
		res.status(500).json(err);
	}
}

module.exports = {
	updateEmployeeInCompany,
	addNewEmployeeToCompany,
	getEmployeesForCompany,
	createCompany,
	getCompany,
	getAllCompanies,
};