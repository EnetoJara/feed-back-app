import { Router } from "express";
import passport from "passport";
import { auth } from "../controllers/auth";

const api = Router();

api.get("/", auth);

api.get(
	"/google",
	passport.authenticate("google", {
		scope: ["https://www.googleapis.com/auth/plus.login"]
	})
);

api.get(
	"/google/callback",
	passport.authenticate("google", { failureRedirect: "/login" }),
	function(req, res) {
		res.redirect("/api/");
	}
);

export default api;
