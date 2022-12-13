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
		return res.status(200).json(companies);
	}
	catch(err){
		return res.status(500).json(err);
	}
}

const addNewEmployeeToCompany = async (req, res) => {
	try{
		const company = await Company.findOne({ where: { id: req.params.companyId } });
		
		if(company) {
			const employee = new Employee();
			employee.firstName = req.body.firstName;
			employee.lastName = req.body.lastName;
			employee.email = req.body.email;
			employee.birthYear = req.body.birthYear;
			employee.comapanyId = company.id;
			console.log(employee)
			employee.companyId = company.id;
			await employee.save();
			res.status(201).send({ message: "Employee created", employee: employee });

		}
		else {
			res.status(404).send({ message: "Company does not exist" });
		}

		
	}
	catch(err){
		res.status(500).send(err);
	}
};

const getEmployeesFromCompany = async (req, res) => {
	try{
		const employees = await Employee.findAll({
			where: {
				 companyId: req.params.companyId
			}
	  })

	//   const employees = await Company.findByPk(req.params.comapanyId, {
	// 	  include: [Employee]
	//   })
		
		if(employees) {
			res.status(201).json( employees);

		}
		else {
			res.status(404).send({ message: "Company does not exist" });
		}
	}
	catch(err){
		res.status(500).send(err);
	}
};

const updateEmployeeInCompany = async (req, res) => {
	try{
		const company = await Company.findOne({ where: { id: req.params.companyId } });
		
		if(company) {
			const employee = await Employee.findOne({ where: { id: req.params.employeeId } });

			if(employee) {

				employee.firstName = req.body.firstName;
				employee.lastName = req.body.lastName;
				employee.email = req.body.email;
				employee.birthYear = req.body.birthYear;

				await employee.save();

				res.status(201).send({ message: "Employee updated", employee: employee });
			}
		  
		}
		else {
			res.status(404).send({ message: "Company does not exist" });
		}

		
	}
	catch(err){
		res.status(500).send(err);
	}
};


module.exports = {
	addNewEmployeeToCompany,
	createCompany,
	getCompany,
	getAllCompanies,
	getEmployeesFromCompany,
	updateEmployeeInCompany
};