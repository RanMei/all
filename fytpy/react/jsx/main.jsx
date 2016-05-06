//import { Router,Route,IndexRoute,Link,hashHistory } from 'react-router';
import {createStore,combineReducers} from 'redux';
import {Provider,connect} from 'react-redux';

import {SearchBar,Topbar,Navbar,List,SearchBox,Footer} from './components/App.jsx';
import {Home} from './components/Home.jsx';
import {CommentBox} from './components/CommentBox.jsx';
import {ShoppingCart} from './components/ShoppingCart.jsx';
import {Counter} from './components/Counter.jsx';
import {Signin} from './components/Signin.jsx';

import {$$reducer} from './reducers/reducer.jsx';

var PropTypes = React.PropTypes;

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var hashHistory = ReactRouter.hashHistory;

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
				<Sidebar/>
				<_Topbar userID={$$store.getState().app.userID}/>
				<Navbar/>
				<div>
					{this.props.children}
					<div className="clear"></div>
				</div>
				<div className="line"></div>
				<Footer/>
			</div>
		);
	}
}

class Item extends React.Component {
	componentWillMount(){
		var itemID = location.hash.match(/\?id=(\w+)/)[1];
		console.log( itemID );
	}
	render(){
		return (
			<div className="item">
				ladjgladjgljdl
			</div>
		)
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
console.log( 'state---',$$store.getState() )

// Connect the state in $$store with props of a component.

var _Counter = connect(function(state){
	return {value:state.counter.num}
})(Counter);

var _Topbar = connect(function(state){
	return {userID:state.app.userID}
})(Topbar);

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
			<Signin onLogin={ (action)=> $$store.dispatch( action ) }/>
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
					<Route path="/shopping_cart" component={ShoppingCart} />
					<Route path="/counter" component={$$Counter}/>
					<Route path="/item" component={Item}/>
				</Route>
			</Router>
		</Provider>
	),
	document.getElementById('app')
);