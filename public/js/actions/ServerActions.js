import AppDispatcher from '../AppDispatcher.js';
import {ActionTypes} from '../Constants.js';

let ServerActions = {

	receiveLinks(links) {
		console.log('receiveLinks');
		AppDispatcher.dispatch({
			actionType: ActionTypes.RECEIVE_LINKS,
			links
		});
	}

};

export default ServerActions;
