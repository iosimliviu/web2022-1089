const employeeController = require("../controllers/employee");
const router = require('express').Router();

router.get("/", employeeController.getAlllEmployees)
router.get("/:id", employeeController.getEmployee);
router.put("/:id", employeeController.updateEmployee);
router.post("/", employeeController.createEmployee);

module.exports = router;