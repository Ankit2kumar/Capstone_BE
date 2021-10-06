import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const addressSchema = new Schema(
	{
		city: { type: String, required: true },
		country: { type: String, required: true },
	},
	{ timestamps: true }
);
export default addressSchema;
