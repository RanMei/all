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
console.debug( 'Redux: store created.',$$store.getState() )
function act(action){
	switch (action.type) {
		case 'LOGIN':
			if( action.user.id==='15911111111'&&action.user.password==='111111' ){
				action.user.shoppingCart = [];
				$$store.dispatch(action);
				$$store.dispatch({
					type: 'ALERT',
					text: '登录成功！'
				})
			}else{
				$$store.dispatch({
					type: 'ALERT',
					text: '您输入的用户名或密码有误！'
				})
			}
			break;
		case 'LOGIN_AS_GUEST':
			var user = {
				id: 'guest',
				shoppingCart: []
			}
			sessionStorage.user = '{"id":"guest"}';
			sessionStorage.shoppingCart = '[]';
			$$store.dispatch({
				type: 'LOGIN',
				user: user
			})
			$$store.dispatch({
				type: 'ALERT',
				text: '登录成功！'
			})
			break;
		case 'LOGOUT':
			delete sessionStorage.user;
			setTimeout(()=>{
				$$store.dispatch(action);
			},10);
			break;
		default :
			$$store.dispatch(action);
			break;
	}
}


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
import {DIManagement} from './components/DIManagement.jsx';

class App extends React.Component {
	constructor(){
		super();
		console.debug('<App/> constructing');
	}
	render() {
		console.debug( '<App/> rendering.' );
		return (
			<div>
				<Mask mask={this.props.mask} act={act}/>
				<Notice notice={this.props.notice}/>
				{this.props.children}
			</div>
		);
	}
}

var Provider = ReactRedux.Provider;
var connect = ReactRedux.connect;

var AppConnected = connect(function(state){
	return {
		mask: state.mask,
		notice: state.notice
	}
})( App );
var HomeConnected = connect(function(state){
	return {
		items: state.items
	}
})( Home );

var MemberConnected = connect(function(state){
	return {
		user: state.user,
		act: act
	}
})( Member );
var ShoppingCartConnected = connect(function(state){
	return {
		items: state.shoppingCart,
		act: act
	}
})( ShoppingCart );
var ItemConnected = connect(function(state){
	return {
		inCart: state.shoppingCart.length,
		act: act
	}
})( Item );
var SigninConnected = connect(function(state){
	return {
		act: act
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
					<Route path="/di_management" component={DIManagement} />

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