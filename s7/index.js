const express = require('express')
const app = express();

const sequelize = require("./sequelize");
require("./models/employee")

app.use(express.json());

app.use("/api", require("./routes/employees"))

app.listen(8080, async () => {
	console.log("Server started on http://localhost:8080");
	try{
		await sequelize.authenticate();
		console.log("Connection has been established succesfully");

	}
	catch(err){
		console.error("Unable to connect ", err)
	}

} );


//https://www.sqlite.org/download.html
//.open test.db