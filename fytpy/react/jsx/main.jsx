//import { Router,Route,IndexRoute,Link,hashHistory } from 'react-router';
//import {createStore,combineReducers} from 'redux';
//import {Provider,connect} from 'react-redux';

import {SearchBar,Topbar,List,SearchBox,Footer,BackToTop} from './components/App.jsx';
import {Home} from './components/Home.jsx';
import {Item} from './components/Item.jsx';
import {CommentBox} from './components/CommentBox.jsx';
import {ShoppingCart} from './components/ShoppingCart.jsx';
import {Signin} from './components/Signin.jsx';
import {ConfirmOrder} from './components/ConfirmOrder.jsx';
//import {Veil} from './components/Veil.jsx';

import {$$reducer} from './reducers/reducer.jsx';

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

import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
var DevTools = createDevTools(
	<DockMonitor 
		toggleVisibilityKey='ctrl-h'
		changePositionKey='ctrl-q'>
		<LogMonitor />
	</DockMonitor>
);
const enhancer = compose(
	DevTools.instrument()
);


class Sidebar extends React.Component {
	render(){
		return (
			<div className="sidebar">
				<div>购物车</div>
				<ul>
					<li><i className="fa fa-home"></i>1111111111</li>
				</ul>
			</div>
		)
	}
}

// The root component of our app.
class App extends React.Component {
	constructor(){
		super();
	}
	render() {
		console.log( '<App/> rendering, State:',$$store.getState() );
		return (
			<div>
				<SearchBar/>
				<div className="line"></div>
				<_Topbar 
					user={$$store.getState().user}
					/*shoppingCart={$$store.getState().user.shoppingCart}*/
					onLogout={()=>$$store.dispatch({type:'LOGOUT'})}
				/>
				<div>
					{this.props.children}
					<div className="clear"></div>
				</div>
				<div className="line"></div>
				<Footer/>
				<BackToTop/>
			</div>
		);
	}
}

// Counter.propTypes = {
//   value: PropTypes.number.isRequired,
//   onIncrement: PropTypes.func.isRequired,
//   onDecrement: PropTypes.func.isRequired
// }

// actions
var LOGIN = {type:'LOGIN'};

var INCREMENT = {type:'INCREMENT'};
var DECREMENT = {type:'DECREMENT'};

// reducers

// store
const $$store = createStore( $$reducer,enhancer );
console.log( 'state initialized',$$store.getState() )

// Connect the state in $$store with props of a component.
// Create Smart Components.

var _Topbar = connect(function(state){
	return {
		user:state.user
	}
})(Topbar);

var _ShoppingCart = connect(function(state){
	return {
		user:state.user
	}
})(ShoppingCart);

var _ConfirmOrder = connect(function(state){
	return {user:state.user}
})(ConfirmOrder);

class $$Signin extends React.Component {
	render(){
		return (
			<Signin act={ (action)=> $$store.dispatch( action ) }/>
		)
	}
}
class ShoppingCartContainer extends React.Component {
	render(){
		return (
			<_ShoppingCart 
				user={$$store.getState().user}
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
class ConfirmOrderContainer extends React.Component {
	render(){
		return (
			<_ConfirmOrder 
				user={$$store.getState().user}
				act={ (action)=>$$store.dispatch(action) }/>
		)
	}
}

// The router.
ReactDOM.render(
	(
		<Provider store={$$store}>		
			<Router history={ hashHistory } >
				<Route path="/" component={App}>
					<Route path="/signin" component={$$Signin} />
					<Route path="/home" component={Home} />
					<Route path="/comment_box" component={CommentBox} />
					<Route path="/shopping_cart" component={ShoppingCartContainer} />
					<Route path="/item" component={ItemContainer}/>
					<Route path="/confirm_order" component={ConfirmOrderContainer} />
					<IndexRoute path="/home" component={Home} />
				</Route>
			</Router>
		</Provider>
	),
	document.getElementById('app')
);