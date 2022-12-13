const companyController = require("../controllers/company");
const router = require('express').Router();

router.get("/", companyController.getAllCompanies)
router.get("/:id", companyController.getCompany);
router.post("/", companyController.createCompany);
router.post("/:companyId/employees", companyController.addNewEmployeeToCompany);
router.get("/:companyId/employees", companyController.getEmployeesFromCompany);
router.put("/:companyId/employees/:employeeId", companyController.updateEmployeeInCompany);

module.exports = router;