import mongoose from "mongoose";

const { Schema } = mongoose;

const user = new Schema({
	googleId: { type: String, required: true }
});

mongoose.model("users", user);
