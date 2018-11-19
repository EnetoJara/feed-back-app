import express from "express";
import bodyParse from "body-parser";
import cors from "cors";

import rootRoute from "./routes/root";

const app = express();
app.use(bodyParse.urlencoded({ extended: false }));
app.use(cors());

app.use("/api", rootRoute);

app.listen(5000, () => console.log("http://localhost:5000"));
