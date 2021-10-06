import mongoose from 'mongoose';
import destinationSchema from './Destination.js';
import hotelSchema from './Hotel.js';
import imageSchema from './Image.js';
import restaurantSchema from './Restaurant.js';
import romanceSchema from './Romance.js';
const { Schema, model } = mongoose;

const countrySchema = new Schema(
	{
		heroBanner: {
			heroImg: { type: [imageSchema] },
			heroTitle: { type: [String], required: true },
			heroDescription: { type: [String], required: true },
		},
		countryDetails: {
			country_name: { type: String, required: true },
			description: { type: String, required: true },
			destinations: { type: [destinationSchema] },
			hotels: { type: [hotelSchema] },
			restaurants: { type: [restaurantSchema] },
			romance: { type: [romanceSchema] },
		},
	},
	{ timestamps: true }
);
export default model('country', countrySchema);
