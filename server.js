import fs from 'fs';
import express from 'express';
import Schema from './data/schema.js';
import GraphQLHTTP from 'express-graphql';
import {graphql} from 'graphql';
import {introspectionQuery, printSchema} from 'graphql/utilities';

import {MongoClient} from 'mongodb';

let app = express();

app.use(express.static('public'));

(async () => {
	try {
		let db = await MongoClient.connect('mongodb://admin:admin@ds061385.mongolab.com:61385/rgrjs');
		var schema = Schema(db);

		app.use('/graphql', GraphQLHTTP({
			schema,
			graphiql: true,
			pretty: true
		}));

		app.listen(3000, () => console.log('Listening on port 3000...'));

		console.log('Generating schema.json...');
		let json = await graphql(schema, introspectionQuery);
		fs.writeFileSync(
			'./data/schema.json',
			JSON.stringify(json, null, 2)
		);

		console.log('and human readable schema...');
		// Save user readable type system shorthand of schema
		fs.writeFileSync(
			'./data/schema.graphql',
			printSchema(schema)
		);

		console.log('schema.json created successfully!');
	} catch(err){
		console.log(err);
	}
})();
