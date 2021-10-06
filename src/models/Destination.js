import mongoose from 'mongoose';
const { Schema, model } = mongoose;
import imageSchema from './Image.js';
import addressSchema from './Address.js';
const destinationSchema = new Schema(
	{
		destName: { type: String, required: true },
		destImage: { type: imageSchema, required: true, default: {} },
		destAddress: { type: addressSchema, required: true },
	},
	{ timestamps: true }
);
export default destinationSchema;
