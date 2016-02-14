import express from 'express';

import {MongoClient} from 'mongodb';

let app = express();

app.use(express.static('public'));

let db;
MongoClient.connect('mongodb://admin:admin@ds061385.mongolab.com:61385/rgrjs', (err, database) => {
	if (err) {
		console.log(err);
		throw err;
	}

	db = database;
	app.listen(3000, () => console.log('Listening on port 3000...'));
});

app.get("/data/links", (req, res) => {
	db.collection("links").find({}).toArray((err, links) => {
		if(err) {
			console.log(err);
			throw err;
		}

		console.log(links);
		res.json(links);
	});
});