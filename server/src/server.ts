import dotenv from "dotenv";
dotenv.config();
import app from "./api/app";

import initDB from "./db/init";

const port = process.env.PORT || 8080;

const start = async () => {
	await initDB();
	app.listen(port, () => {
		console.log(`Listening on port: ${port}`);
	});
};

start();
