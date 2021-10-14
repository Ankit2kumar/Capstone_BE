import country from '../models/Country.js';
import express from 'express';

const countryRoute = express.Router();

countryRoute.get('/', async (req, res, next) => {
	try {
		const countries = await country.find({});
		// console.log(countries);
		res.status(200).send(countries);
	} catch (error) {
		res.send(error);
	}
});
countryRoute.post('/', async (req, res, next) => {
	// const image = new imageSchema({imageLink:req.body.image})
	try {
		const newCountry = await new country(req.body).save();
		res.status(201).send(newCountry._id);
	} catch (error) {
		res.send(error);
	}
});
export default countryRoute;
