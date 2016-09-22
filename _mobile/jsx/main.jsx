//import { Router,Route,IndexRoute,Link,hashHistory } from 'react-router';
//import {createStore,combineReducers} from 'redux';
//import {Provider,connect} from 'react-redux';


//import {Veil} from './components/Veil.jsx';



var PropTypes = React.PropTypes;

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var createStore = Redux.createStore;
var compose = Redux.compose;
var combineReducers =  Redux.combineReducers;

var Provider = ReactRedux.Provider;
var connect = ReactRedux.connect;

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

// actions
var LOGIN = {type:'LOGIN'};

var INCREMENT = {type:'INCREMENT'};
var DECREMENT = {type:'DECREMENT'};

import {$$reducer} from './reducers/reducer.jsx';
// store
const $$store = createStore( $$reducer/*,enhancer*/ );
console.debug( 'Redux: store created.')
console.debug( 'Redux: state initialized',$$store.getState() )


import {SearchBar,Topbar,List,SearchBox,Footer,BackToTop} from './components/App.jsx';
import {Item} from './components/Item.jsx';
import {CommentBox} from './components/CommentBox.jsx';
import {ConfirmOrder} from './components/ConfirmOrder.jsx';
import {Navbar} from './components/Navbar.jsx';
import {Notice} from './components/Notice.jsx';
import {NoticePretty} from './components/NoticePretty.jsx';
import {Signin} from './components/Signin.jsx';
import {Signup} from './components/Signup.jsx';
import {Member} from './components/Member.jsx';
import {Home} from './components/Home.jsx';
import {ShoppingCart} from './components/ShoppingCart.jsx';

class App extends React.Component {
	constructor(){
		super();
		console.debug('<App/> constructing');
	}
	render() {
		console.debug( '<App/> rendering, State:',$$store.getState() );
		return (
			<div>
				<div className="NAVBAR">
					MyHome
				</div>
				{this.props.children}
			</div>
		);
	}
}

var AppConnected = connect(function(state){
	return {
		notice: state.notice
	}
})( App );
var MemberConnected = connect(function(state){
	return {
		user: state.user,
		act: (action)=>$$store.dispatch(action)
	}
})( Member );

class SigninContainer extends React.Component {
	render(){
		return (
			<Signin
				act={ (action)=>$$store.dispatch(action) }/>
		)
	}
}
class ShoppingCartContainer extends React.Component {
	render(){
		return (
			<ShoppingCart
				act={ (action)=>$$store.dispatch(action) }/>
		)
	}
}
class ItemContainer extends React.Component {
	render(){
		return (
			<Item
				act={ (action)=>$$store.dispatch(action) }/>
		)
	}
}

// The router.
ReactDOM.render(
	(
		<Provider store={$$store}>		
			<Router history={ hashHistory } >
				<Route path="/" component={AppConnected}>
					<Route path="/home" component={Home} />
					<IndexRoute path="/home" component={Home} />
				</Route>
			</Router>
		</Provider>
	),
	document.getElementById('app')
);