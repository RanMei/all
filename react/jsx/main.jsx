//import { Router,Route,IndexRoute,Link,hashHistory } from 'react-router';
import {createStore,combineReducers} from 'redux';
import {Provider,connect} from 'react-redux';

import {Topbar,Navbar,List,SearchBox,Footer} from './components/App.jsx';
import {CommentBox} from './components/CommentBox.jsx';
import {ShoppingCart} from './components/ShoppingCart.jsx';
import {Counter} from './components/Counter.jsx';
import {SigninBox} from './components/SigninBox.jsx';

import {$$reducer} from './reducers/reducer.jsx';

var PropTypes = React.PropTypes;

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var hashHistory = ReactRouter.hashHistory;

// The root component of our app.
class App extends React.Component {
	constructor(){
		super();
		this.state = {
			userID: null
		}
		console.log(this);
	}
	login(id,password){
		if( id==='111'&&password==='111111' ){
			this.setState({
				userID: id
			});
		};
	}
	render() {
		return (
			<div>
				<_Topbar/>
				<Navbar/>
				<List list={[0,1,2,3,4]}/>
				<div className="container">
					{this.props.children}
					<div className="clear"></div>
				</div>
				<Footer/>
			</div>
		);
	}
}



class Home extends React.Component {
	render() {
		return <div>Home</div>;
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
var _App = connect(function(state){
	return {userID:state.app.userID}
})(App);

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
class $$SigninBox extends React.Component {
	render(){
		return (
			<SigninBox onLogin={ (action)=> $$store.dispatch( action ) }/>
		)
	}
}
// The router.
ReactDOM.render(
	(
		<Provider store={$$store}>		
			<Router history={ hashHistory } >
				<Route path="/" component={App}>
					<Route path="/signin" component={$$SigninBox} />
					<Route path="/home" component={Home} />
					<Route path="/comment_box" component={CommentBox} />
					<Route path="/shopping_cart" component={ShoppingCart} />
					<Route path="/counter" component={$$Counter}/>
				</Route>
			</Router>
		</Provider>
	),
	document.getElementById('app')
);