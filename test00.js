
import "http://fb.me/react-0.13.3.js"

var HelloWorld = React.createClass({
    render: function() {return (<p>Hello React!</p>);}
});
var m = React.render(<HelloWorld />, document.getElementById('app'));