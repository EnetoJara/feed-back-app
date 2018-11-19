import { Router } from "express";
import passport from "passport";
import { auth } from "../controllers/auth";

const api = Router();

api.get("/", auth);

api.get(
	"/google",
	passport.authenticate("google", {
		scope: ["profile", "email"]
	})
);

api.get("/google/callback", passport.authenticate("google"));

export default api;
