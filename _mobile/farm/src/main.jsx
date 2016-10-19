//import { Router,Route,IndexRoute,Link,hashHistory } from 'react-router';
//import {createStore,combineReducers} from 'redux';
//import {Provider,connect} from 'react-redux';
import {$$store} from './store/index.jsx';


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

import {SearchBar,Topbar,List,SearchBox,Footer,BackToTop} from './components/App.jsx';
import {Navbar} from './components/Navbar.jsx';

import {Signin} from './components/Signin.jsx';
import {Signup} from './components/Signup.jsx';

import {Category} from './components/Category.jsx';

import {ConfirmOrder} from './components/ConfirmOrder.jsx';
import {DIManagement} from './components/DIManagement.jsx';

import {AppContainer} from './containers/AppContainer.jsx';
import {HomeContainer} from './containers/HomeContainer.jsx';
import {ItemContainer} from './containers/ItemContainer.jsx';
import {MemberContainer} from './containers/MemberContainer.jsx';
import {SigninContainer} from './containers/SigninContainer.jsx';
//import {ShoppingCartContainer} from './containers/ShoppingCartContainer.jsx';


var Provider = ReactRedux.Provider;
var connect = ReactRedux.connect;


// The router.
ReactDOM.render(
	(
		<Provider store={$$store}>		
			<Router history={ hashHistory } >
				<Route path="/" component={AppContainer}>
					<Route path="/home" component={HomeContainer} />
					<Route path="/category" component={Category} />
					<Route path="/shopping_cart" getComponent={function(nextState, cb) {
						require.ensure([], (require) => {
							cb( null, require('./containers/ShoppingCartContainer.jsx').ShoppingCartContainer )
						})
					}} />
					<Route path="/member" component={MemberContainer} />
					<Route path="/di_management" component={DIManagement} />

					<Route path="/signin" component={SigninContainer} />
					<Route path="/signup" component={Signup} />
					
					<Route path="/item" component={ItemContainer} />
					<IndexRoute path="/home" component={HomeContainer} />
				</Route>
			</Router>
		</Provider>
	),
	document.getElementById('app')
);