import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import mongoose from "mongoose";

import { clientID, clientSecret } from "../config/keys";

const User = mongoose.model("users");

passport.use(
	new GoogleStrategy(
		{
			clientID,
			clientSecret,
			callbackURL: "/api/auth/google/callback"
		},
		async (accessToken, refreshToken, profile, done) => {
			const exists = await User.find({ googleId: profile.id });
			if (exists) {
				return done(null, exists);
			} else {
				const saved = await new User({ googleId: profile.id }).save();
				return done(null, saved);
			}
		}
	)
);
