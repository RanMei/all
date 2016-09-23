require('./common.less');
require('./index.less');

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

// actions
var LOGIN = {type:'LOGIN'};

var INCREMENT = {type:'INCREMENT'};
var DECREMENT = {type:'DECREMENT'};

import {$$reducer} from './reducers/reducer.jsx';
// store
const $$store = createStore( $$reducer/*,enhancer*/ );
console.debug( 'Redux: store created.')
console.debug( 'Redux: state initialized',$$store.getState() )

import {Navbar} from './components/Navbar.jsx';
import {Home} from './components/Home.jsx';
import {Animations} from './components/Animations.jsx';

class App extends React.Component {
	constructor(){
		super();
		console.debug('<App/> constructing');
	}
	render() {
		console.debug( '<App/> rendering, State:',$$store.getState() );
		return (
			<div>
				<Navbar/>
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

// The router.
ReactDOM.render(
	(
		<Provider store={$$store}>		
			<Router history={ hashHistory } >
				<Route path="/" component={AppConnected}>
					<Route path="/home" component={Home} />
					<Route path="/animations" component={Animations} />
					<IndexRoute path="/home" component={Home} />
				</Route>
			</Router>
		</Provider>
	),
	document.getElementById('app')
);