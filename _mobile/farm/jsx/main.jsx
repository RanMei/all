//import { Router,Route,IndexRoute,Link,hashHistory } from 'react-router';
//import {createStore,combineReducers} from 'redux';
//import {Provider,connect} from 'react-redux';

import {SearchBar,Topbar,List,SearchBox,Footer,BackToTop} from './components/App.jsx';
import {Item} from './components/Item.jsx';
import {CommentBox} from './components/CommentBox.jsx';
import {ShoppingCart} from './components/ShoppingCart.jsx';

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
console.debug( 'Redux: store created.')
console.debug( 'Redux: state initialized',$$store.getState() )

var SigninConnected = connect(function(state){
	return {
		user:state.user
	}
})( Signin );

import {Navbar} from './components/Navbar.jsx';

class App extends React.Component {
	constructor(){
		super();
		console.log('<App/> constructing');
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

import {Signin} from './components/Signin.jsx';
class SigninContainer extends React.Component {
	render(){
		return (
			<Signin
				act={ (action)=>$$store.dispatch(action) }/>
		)
	}
}

import {Member} from './components/Member.jsx';
class MemberContainer extends React.Component {
	render(){
		return (
			<Member
				act={ (action)=>$$store.dispatch(action) }/>
		)
	}
}

import {Home} from './components/Home.jsx';
// The router.
ReactDOM.render(
	(
		<Provider store={$$store}>		
			<Router history={ hashHistory } >
				<Route path="/" component={App}>
					<Route path="/home" component={Home} />
					<Route path="/item" component={Item} />
					<Route path="/signin" component={SigninContainer} />
					<Route path="/member" component={MemberContainer} />
					<IndexRoute path="/home" component={Home} />
				</Route>
			</Router>
		</Provider>
	),
	document.getElementById('app')
);