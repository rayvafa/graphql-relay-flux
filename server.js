import express from 'express';
import schema from './data/schema.js';
import GraphQLHTTP from 'express-graphql';

import {MongoClient} from 'mongodb';

let app = express();

app.use(express.static('public'));

app.use('/graphql', GraphQLHTTP({
	schema,
	graphiql: true
}));

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