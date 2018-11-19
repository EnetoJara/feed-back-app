import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

import { clientID, clientSecret } from "../config/keys";

passport.use(
	new GoogleStrategy(
		{
			clientID,
			clientSecret,
			callbackURL: "/api/auth/google/callback"
		},
		(accessToken, refreshToken, profile, cb) => {
			console.log("accessToken: ", accessToken);
			console.log("refreshToken: ", refreshToken);
			console.log("profile: ", profile);
			console.log("cb: ", cb);
		}
	)
);
