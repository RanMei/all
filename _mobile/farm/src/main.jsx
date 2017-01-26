//import { Router,Route,IndexRoute,Link,hashHistory } from 'react-router';
//import {createStore,combineReducers} from 'redux';
//import {Provider,connect} from 'react-redux';

if( !Object.assign ){
	Object.assign = function(dest,src){
		for(var key in src){
			dest[key] = src[key];
		}
		return dest;
	}
};
import './rem.720.js';
import './config.js';

var PropTypes = React.PropTypes;

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;


// import { createDevTools } from 'redux-devtools';
// import LogMonitor from 'redux-devtools-log-monitor';
// import DockMonitor from 'redux-devtools-dock-monitor';
// var DevTools = createDevTools(
// 	<DockMonitor 
// 		toggleVisibilityKey='ctrl-h'
// 		changePositionKey='ctrl-q'>
// 		<LogMonitor />
// 	</DockMonitor>
// );
// const enhancer = compose(
// 	DevTools.instrument()
// );

// Counter.propTypes = {
//   value: PropTypes.number.isRequired,
//   onIncrement: PropTypes.func.isRequired,
//   onDecrement: PropTypes.func.isRequired
// }

// import {Signup} from './components/Signup.jsx';

// import {ConfirmOrder} from './components/ConfirmOrder.jsx';

import {App} from './containers/App.jsx';
import {Home} from './containers/Home.jsx';
import {Item} from './containers/Item.jsx';
import {Member} from './containers/Member.jsx';
import {Signin} from './containers/Signin.jsx';
import {ShoppingCart} from './containers/ShoppingCart.jsx';
import {Category} from './containers/Category.jsx';
import {DIManagement} from './containers/DIManagement.jsx';


var Provider = ReactRedux.Provider;
var connect = ReactRedux.connect;

import {$$store} from './store/index.jsx';
// The router.
ReactDOM.render(
	(
		<Provider store={$$store}>		
			<Router history={ hashHistory } >
				<Route path="/" component={App}>
					<IndexRoute path="/home" component={Home} />
					<Route path="/home" component={Home} />
					<Route path="/category" component={Category} />
					<Route path="/item" component={Item} />
					<Route path="/shopping_cart" getComponent={function(nextState, cb) {
						require.ensure([], (require) => {
							cb( null, require('./containers/ShoppingCart.jsx').ShoppingCart )
						})
					}} />

					<Route path="/member" component={Member} />
					<Route path="/signin" component={Signin} />
					<Route path="/di_management" component={DIManagement} />
				</Route>
			</Router>
		</Provider>
	),
	document.getElementById('app')
);