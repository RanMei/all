//import { Router,Route,IndexRoute,Link,hashHistory } from 'react-router';
//import {createStore,combineReducers} from 'redux';
//import {Provider,connect} from 'react-redux';

import {SearchBar,Topbar,List,SearchBox,Footer,BackToTop} from './components/App.jsx';
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

class App extends React.Component {
	constructor(){
		super();
	}
	render() {
		console.log( '<App/> rendering, State:',$$store.getState() );
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}

class Home extends React.Component {

	submit(){
		var user = JSON.stringify({userID:'15911111111',password:'111111'});
		$.ajax({
			headers:{
				'Content-type': 'application/json'
			},
			type: 'post',
			url: '/login',
			data: user
		}).done(function(data){
			console.log(data);
		});
	}
	render(){
		return (
			<div className="home">
				<div className="papa">
					<input/>
					<input/>
					<button onClick={this.submit.bind(this)}>登录</button>
				</div>
			</div>
		)
	}
}

// The router.
ReactDOM.render(
	(
		<Provider store={$$store}>		
			<Router history={ hashHistory } >
				<Route path="/" component={App}>
					<Route path="/home" component={Home}/>
					<IndexRoute path="/signin" component={Signin} />
				</Route>
			</Router>
		</Provider>
	),
	document.getElementById('app')
);