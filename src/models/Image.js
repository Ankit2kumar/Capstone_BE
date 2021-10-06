import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const imageSchema = new Schema(
	{
		imageLink: { type: String, required: true },
	},
	{ timestamps: true }
);
export default imageSchema;
