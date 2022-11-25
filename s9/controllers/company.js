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


module.exports = {
	createCompany,
	getCompany,
	getAllCompanies,
};