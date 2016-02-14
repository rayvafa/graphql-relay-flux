var React = require("react");
import API from './API';

class Main extends React.Component {

	componentDidMount() {
		API.fetchLinks();
	}

	render() {
		return (
			<div>
				<h3>Links</h3>
				<ul>
					<li>Link ...</li>
					<li>Link ...</li>
					<li>Link ...</li>
				</ul>
			</div>
		);
	}
}

export default Main;
