//import { Router,Route,IndexRoute,Link,hashHistory } from 'react-router';

import {CommentBox} from './CommentBox.jsx';
import {ShoppingCart} from './ShoppingCart.jsx';

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var hashHistory = ReactRouter.hashHistory;

// The root component of our app.
class App extends React.Component {
	render() {
		return (
			<div>
				<div className="navbar">
					<ul className="container">
						<li><Link to="/home">Home</Link></li>
						<li><Link to="/comment_box">CommentBox</Link></li>
						<li><Link to="/shopping_cart">ShoppingCart</Link></li>
					</ul>
				</div>
				<div className="container">{this.props.children}</div>
			</div>
		);
	}
}

class Home extends React.Component {
	render() {
		return <div>Home</div>;
	}
}

// The router.
ReactDOM.render(
	(
		<Router history={ hashHistory } >
			<Route path="/" component={App}>
				<Route path="/home" component={Home} />
				<Route path="/comment_box" component={CommentBox} />
				<Route path="/shopping_cart" component={ShoppingCart} />
			</Route>
		</Router>
	),
	document.getElementById('app')
);


