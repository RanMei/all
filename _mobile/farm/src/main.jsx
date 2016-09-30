//import { Router,Route,IndexRoute,Link,hashHistory } from 'react-router';
//import {createStore,combineReducers} from 'redux';
//import {Provider,connect} from 'react-redux';

var PropTypes = React.PropTypes;

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;

var createStore = Redux.createStore;
var compose = Redux.compose;
var combineReducers =  Redux.combineReducers;

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


import {Mask} from './components/Mask.jsx';
import {Notice} from './components/Notice.jsx';
import {NoticePretty} from './components/NoticePretty.jsx';

import {SearchBar,Topbar,List,SearchBox,Footer,BackToTop} from './components/App.jsx';
import {Navbar} from './components/Navbar.jsx';

import {Signin} from './components/Signin.jsx';
import {Signup} from './components/Signup.jsx';

import {Home} from './components/Home.jsx';
import {Category} from './components/Category.jsx';
import {ShoppingCart} from './components/ShoppingCart.jsx';
import {Member} from './components/Member.jsx';

import {Item} from './components/Item.jsx';
import {ConfirmOrder} from './components/ConfirmOrder.jsx';

class App extends React.Component {
	constructor(){
		super();
		console.debug('<App/> constructing');
	}
	render() {
		console.debug( '<App/> rendering, State:',$$store.getState() );
		return (
			<div>
				<Mask/>
				<Notice notice={this.props.notice}/>
				{this.props.children}
			</div>
		);
	}
}

var Provider = ReactRedux.Provider;
var connect = ReactRedux.connect;

function act(action){
	switch (action.type) {
		case 'LOGOUT':
			setTimeout(()=>{
				$$store.dispatch(action);
			},1000);
			break;
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
		act: act
	}
})( Member );
var ShoppingCartConnected = connect(function(state){
	return {
		items: state.shoppingCart,
		act: (action)=>$$store.dispatch(action)
	}
})( ShoppingCart );
var ItemConnected = connect(function(state){
	return {
		shoppingCart: state.shoppingCart,
		act: (action)=>$$store.dispatch(action)
	}
})( Item );
var SigninConnected = connect(function(state){
	return {
		act: (action)=>$$store.dispatch(action)
	}
})( Signin );

// The router.
ReactDOM.render(
	(
		<Provider store={$$store}>		
			<Router history={ hashHistory } >
				<Route path="/" component={AppConnected}>
					<Route path="/home" component={Home} />
					<Route path="/category" component={Category} />
					<Route path="/shopping_cart" component={ShoppingCartConnected} />
					<Route path="/member" component={MemberConnected} />

					<Route path="/signin" component={SigninConnected} />
					<Route path="/signup" component={Signup} />
					
					<Route path="/item" component={ItemConnected} />
					<IndexRoute path="/home" component={Home} />
				</Route>
			</Router>
		</Provider>
	),
	document.getElementById('app')
);