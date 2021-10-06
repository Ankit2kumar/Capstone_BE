import mongoose from 'mongoose';
const { Schema, model } = mongoose;
import imageSchema from './Image.js';
import addressSchema from './Address.js';
const restaurantSchema = new Schema(
	{
		restaurantName: { type: String, required: true },
		restaurantImage: { type: imageSchema, required: true },
		restaurantAddress: { type: addressSchema, required: true },
		restaurantCost: { type: Number, required: true },
		restaurantCategory: { type: [String], required: true },
	},
	{ timestamps: true }
);
export default restaurantSchema;
