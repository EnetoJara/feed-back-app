import mongoose from "mongoose";
import findOrCreate from "mongoose-findorcreate";

const user = new mongoose.Schema({
	googleId: { type: String, required: true }
});
user.plugin(findOrCreate);
mongoose.model("users", user);
