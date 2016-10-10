require('./common.less');
require('./index.less');

var PropTypes = React.PropTypes;

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

import {Navbar} from './components/Navbar.jsx';
import {Home} from './components/Home.jsx';
import {Animations} from './components/Animations.jsx';

class App extends React.Component {
	constructor(){
		super();
		console.debug('<App/> constructing');
	}
	render() {
		return (
			<div className="container">
				<Navbar/>
				{this.props.children}
			</div>
		);
	}
}

// The router.
ReactDOM.render(
	(	
		<Router history={ hashHistory } >
			<Route path="/" component={App}>
				<Route path="/home" component={Home} />
				<Route path="/animations" component={Animations} />
				<IndexRoute path="/home" component={Home} />
			</Route>
		</Router>
	),
	document.getElementById('app')
);