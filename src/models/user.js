import mongoose from "mongoose";
import findOrCreate from "mongoose-findorcreate";

const { Schema } = mongoose;

const user = new Schema({
	googleId: { type: String, required: true }
});
user.plugin(findOrCreate);
console.log(user.findOrCreate);
mongoose.model("users", user);
