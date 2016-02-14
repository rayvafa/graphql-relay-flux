import ServerActions from './actions/ServerActions.js';
var xhr = require('smallxhr');

let API = {

	fetchLinks() {
		console.log('fetchLinks');

		xhr('/data/links', null, function(error, data, xhrResponse) {
			if (error) {
				throw error;
			}
			console.log('status: ' + xhrResponse.status);
			console.log(data);
			ServerActions.receiveLinks(data);
		}, 'GET', 'application/json', 30000);
	}

};

export default API;
