import mongoose from 'mongoose';
const { Schema, model } = mongoose;
import imageSchema from './Image.js';
import addressSchema from './Address.js';
const hotelSchema = new Schema(
	{
		hotelName: { type: String, required: true },
		hotelImage: { type: imageSchema, required: true },
		hotelAddress: { type: addressSchema, required: true },
		hotelCost: { type: Number, required: true },
	},
	{ timestamps: true }
);
export default hotelSchema;
