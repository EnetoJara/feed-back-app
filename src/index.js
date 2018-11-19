import express from "express";
import bodyParse from "body-parser";
import cors from "cors";

import "./service/passport";
import rootRoute from "./routes/root";
import authRoute from "./routes/auth";

const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParse.urlencoded({ extended: false }));
app.use(cors());

app.use("/api", rootRoute);
app.use("/api/auth", authRoute);

app.listen(PORT, () => console.log("Up and Running n.n"));
