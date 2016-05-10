//import { Router,Route,IndexRoute,Link,hashHistory } from 'react-router';
//import {createStore,combineReducers} from 'redux';
//import {Provider,connect} from 'react-redux';

import {SearchBar,Topbar,List,SearchBox,Footer,BackToTop} from './components/App.jsx';
import {Home} from './components/Home.jsx';
import {Item} from './components/Item.jsx';
import {CommentBox} from './components/CommentBox.jsx';
import {ShoppingCart} from './components/ShoppingCart.jsx';
import {Counter} from './components/Counter.jsx';
import {Signin} from './components/Signin.jsx';
import {ConfirmOrder} from './components/ConfirmOrder.jsx';

import {$$reducer} from './reducers/reducer.jsx';

var PropTypes = React.PropTypes;

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var hashHistory = ReactRouter.hashHistory;

var createStore = Redux.createStore;
var combineReducers =  Redux.combineReducers;

var Provider = ReactRedux.Provider;
var connect = ReactRedux.connect;

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
		return (
			<div>
				<SearchBar/>
				<div className="line"></div>
				<_Topbar 
					user={$$store.getState().user}
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
const $$store = createStore( $$reducer );
console.log( 'state initialized',$$store.getState() )

// Connect the state in $$store with props of a component.
// Create Smart Components.
var _Counter = connect(function(state){
	return {value:state.counter.num}
})(Counter);

var _Topbar = connect(function(state){
	return {user:state.user}
})(Topbar);

var _ShoppingCart = connect(function(state){
	return {user:state.user}
})(ShoppingCart);

var _ConfirmOrder = connect(function(state){
	return {user:state.user}
})(ConfirmOrder);

class $$Counter extends React.Component {
	render(){
		return (
			<_Counter value={ $$store.getState().counter.num }
				onIncrement={ function(){$$store.dispatch( INCREMENT )} }
				onDecrement={ () => $$store.dispatch( DECREMENT ) }/>
		)
	}
}
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
			<_ConfirmOrder user={$$store.getState().user}/>
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
					<Route path="/counter" component={$$Counter}/>
					<Route path="/item" component={ItemContainer}/>
					<Route path="/confirm_order" component={ConfirmOrderContainer} />
				</Route>
			</Router>
		</Provider>
	),
	document.getElementById('app')
);