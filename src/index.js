import express from "express";
import bodyParse from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import passport from "passport";
import cookieSession from "cookie-session";

import { dbLocalHost, cookieKey } from "./config/keys";
import rootRoute from "./routes/root";
import authRoute from "./routes/auth";

require("./models/user");
require("./service/passport");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParse.urlencoded({ extended: false }));
app.use(cors());
app.use("/api", rootRoute);
app.use("/api/auth", authRoute);

mongoose.connect(
	dbLocalHost,
	{ useNewUrlParser: true }
);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
	console.log("mongoDB Up and Runnig");
	app.listen(PORT, () => console.log("Up and Running n.n"));
});
