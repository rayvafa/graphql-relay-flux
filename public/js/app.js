var React = require("react");
var ReactDOM = require("react-dom");
var Relay = require('react-relay');
import Main from './Main.js';

class HomeRoute extends Relay.Route {
	static routeName = 'Home';
	static queries = {
		store: (Component) => Relay.QL`
		query MainQuery {
			store { ${Component.getFragment('store')} }
		}
		`
	}
}

ReactDOM.render(
	<Relay.RootContainer
		Component={Main}
		route={new HomeRoute()}
	/>,
	document.getElementById('react')
);
