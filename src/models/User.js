import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema(
	{
		firstName: { type: String, required: true },

		lastName: { type: String, required: true },
		password: { type: String, required: true },
		email: { type: String, required: true },

		picture: { type: String },
	},
	{ timestamps: true }
);
export default model('user', userSchema);
