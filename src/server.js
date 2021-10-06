import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import listEndPoints from 'express-list-endpoints';

import countryDetailRoute from './route/index.js';

dotenv.config();

const server = express();
const { PORT, MONGO_DB } = process.env;

server.use(express.json());
// server.use('/travel', travelRoutes);
server.use('/country-details', countryDetailRoute);

console.table(listEndPoints(server));

server.listen(PORT, async () => {
	try {
		console.log('Server is listening at', PORT);
		await mongoose.connect(MONGO_DB, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('Server is running and connected to the DB: ', PORT);
	} catch (error) {
		console.log('DB connection is failed ', error);
	}
});
