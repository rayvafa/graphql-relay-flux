import express from 'express';
import schema from './data/schema.js';
import GraphQLHTTP from 'express-graphql';

import {MongoClient} from 'mongodb';

let app = express();

app.use(express.static('public'));

(async () => {
	let db = await MongoClient.connect('mongodb://admin:admin@ds061385.mongolab.com:61385/rgrjs');

	app.use('/graphql', GraphQLHTTP({
		schema: schema(db)
	}));

	app.listen(3000, () => console.log('Listening on port 3000...'));
})();
