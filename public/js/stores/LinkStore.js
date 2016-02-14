import AppDispatcher from '../AppDispatcher.js';
import {ActionTypes} from '../Constants.js';
import {EventEmitter} from 'events';

let _links = [];

class LinkStore extends EventEmitter {

	constructor(props){
		super(props);

		AppDispatcher.register(action => {
			switch(action.actionType) {
				case ActionTypes.RECEIVE_LINKS:
					console.log('Link Store received RECEIVE_LINKS action type');
					_links = action.links;
					this.emit("change");
					break;
				default:
					// do nothing
			}
		});
	}

	getAll() {
		return _links;
	}

}

export default new LinkStore();
