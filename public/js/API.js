import ServerActions from './actions/ServerActions.js';
import {post} from 'jquery';
var xhr = require('smallxhr');

let API = {

	fetchLinks() {
		console.log('fetchLinks');

		post('/graphql', {
			query: `{ links {_id, title, url}}`
		}).done(resp => {
			ServerActions.receiveLinks(resp.data.links);
		});
	}

};

export default API;
