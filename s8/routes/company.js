const companyController = require("../controllers/company");
const router = require('express').Router();

router.get("/", companyController.getAllCompanies)
router.get("/:id", companyController.getCompany);
router.post("/", companyController.createCompany);

module.exports = router;