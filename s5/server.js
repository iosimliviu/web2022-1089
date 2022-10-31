

const express = require("express");
const cors = require("cors");
const app = express();
let port = 8080;

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

app.listen(port, () => {
    console.log("Server listens on " + port);
});

app.get("/api/users", getAllUsers = async (req, res) => {
		try {
			const users = {first_name:"bob",last_name:"marley"};
			res.status(200).send(users);
		} catch (e) {
			console.error(e);
			res.status(500).send({ message: "Server error" })
		}
	}
);