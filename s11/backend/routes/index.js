const router = require('express').Router();
const employeeRouter = require("./employee");
const companyRouter = require("./company");

router.use("/employees", employeeRouter);
router.use("/companies", companyRouter);

module.exports = router;