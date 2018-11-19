import express from "express";
import bodyParse from "body-parser";
import cors from "cors";

import rootRoute from "./routes/root";

const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParse.urlencoded({ extended: false }));
app.use(cors());

app.use("*", rootRoute);

app.listen(PORT, () => console.log("Up and Running n.n"));
