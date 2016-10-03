require('./common.less');
require('./blog.less');

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

import {$$reducer} from './reducers_blog/reducer.jsx';
// store
const $$store = createStore( $$reducer/*,enhancer*/ );
console.debug( 'Redux: store created.')
console.debug( 'Redux: state initialized',$$store.getState() )

class App extends React.Component {
	constructor(){
		super();
		console.debug('<App/> constructing');
	}
	render() {
		console.debug( '<App/> rendering, State:',$$store.getState() );
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}

class Index extends React.Component {
	constructor(){
		super();
		$$store.dispatch({
			type: 'GET_LIST'
		})
		console.log( $$store.getState() )
	}
	componentDidMount(){
	}
	toPost(a){

		location.hash = 'post?time='+a.time;
	}
	render(){
		return (
			<div className="INDEX">
				<div>index</div>
				{this.props.list.map(a=>{
					return (
						<a className="block" onClick={this.toPost.bind(this,a)}>
							{a.title}
						</a>
					)
				})}
			</div>
		)
	}
}

class Post extends React.Component {
	constructor(){
		super()
		$$store.dispatch({
			type: 'GET_POST',
			time: location.hash.match(/time=[\d|-]+/)[0].replace(/time=/,'')
		})
		console.log( $$store.getState() )
	}
	render(){
		return (
			<div className="POST">
				<div className="post-title">{this.props.post.title}</div>
				<div className="post-body">
				
				</div>
			</div>
		)
	}
}
Post.defaultProps = {
	post: {}
}

var AppConnected = connect(function(state){
	return {
	}
})( App );
var IndexConnected = connect(function(state){
	return {
		list: state.list
	}
})( Index )
var PostConnected = connect(function(state){
	return {
		post: state.post
	}
})( Post )

// The router.
ReactDOM.render(
	(
		<Provider store={$$store}>		
			<Router history={ hashHistory } >
				<Route path="/" component={AppConnected}>
					<Route path="/home" component={IndexConnected} />
					<Route path="/post" component={PostConnected} />
					<IndexRoute path="/home" component={IndexConnected} />
				</Route>
			</Router>
		</Provider>
	),
	document.getElementById('app')
);