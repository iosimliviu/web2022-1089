const express = require('express')
const app = express();
const indexRouter = require("./routes/index");
const sequelize = require("./models/index").sequelize;
const cors = require("cors");

let port = 8081;

const corsOptions = {
	origin: true,
	allowedHeaders: [
		 "Content-Type",
		 "Authorization",
		 "Access-Control-Allow-Methods",
		 "Access-Control-Request-Headers",
	],
	credentials: true,
	enablePreflight: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api", indexRouter)

app.listen( port, async () => {
	console.log(`Server started on http://localhost:${port}`);
	try{
		await sequelize.authenticate();
	}
	catch(err){
		console.error("Unable to connect ", err)
	}

});


//https://www.sqlite.org/download.html
//.open test.db