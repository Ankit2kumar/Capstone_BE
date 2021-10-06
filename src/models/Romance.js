import mongoose from 'mongoose';
const { Schema, model } = mongoose;
import imageSchema from './Image.js';
import addressSchema from './Address.js';
const romanceSchema = new Schema(
	{
		romanceName: { type: String, required: true },
		romanceImage: { type: imageSchema, required: true },
		romanceAddress: { type: addressSchema, required: true },
		romanceCost: { type: Number, required: true },
	},
	{ timestamps: true }
);
export default romanceSchema;
