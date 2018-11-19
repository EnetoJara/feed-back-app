import { Router } from "express";
import { root } from "../controllers/root";

const api = Router();

api.get("/", [], root);

export default api;
