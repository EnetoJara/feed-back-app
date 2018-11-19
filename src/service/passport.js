import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import mongoose from "mongoose";

import { clientID, clientSecret } from "../config/keys";

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

passport.use(
	new GoogleStrategy(
		{
			clientID,
			clientSecret,
			callbackURL: "/api/auth/google/callback"
		},
		(token, tokenSecret, profile, done) => {
			User.findOrCreate({ googleId: profile.id }, (err, user) => {
				return done(err, user);
			});
		}
	)
);
