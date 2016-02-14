var React = require("react");
var ReactDOM = require("react-dom");
var Relay = require('react-relay');
import Main from './Main.js';

ReactDOM.render(<Main limit={4} />, document.getElementById('react'));

console.log(Relay.QL` query Test {links{title}}`);