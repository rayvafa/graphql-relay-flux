var React = require("react");
var ReactDOM = require("react-dom");

class Hello extends React.Component {
	render() {
		return (<h3>Hello JSX</h3>);
	}
}

ReactDOM.render(<Hello />, document.getElementById('react'));
