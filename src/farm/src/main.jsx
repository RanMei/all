//import { Router,Route,IndexRoute,Link,hashHistory } from 'react-router';
//import {createStore,combineReducers} from 'redux';
//import {Provider,connect} from 'react-redux';

if( !Object.assign ){
	Object.assign = function(dest,src){
		for(var key in src){
			dest[key] = src[key];
		}
		return dest;
	}
};

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

// import {Signup} from './components/Signup.jsx';

// import {ConfirmOrder} from './components/ConfirmOrder.jsx';
// import ReactDOM from 'react-dom';
import './common/common.js';
import App from './App.js';

if(process.env.NODE_ENV==='production'){
	ReactDOM.render(
		(
			<App/>
		),
		document.getElementById('app')
	);
}else{
	const AppContainer = require('react-hot-loader').AppContainer;

	const render = App=>{
		ReactDOM.render(
			(
			<AppContainer>
				<App/>
			</AppContainer>
			),
			document.getElementById('app')
		);
	}

	render(App);

	if (module.hot) {
	  module.hot.accept('./App.js', () => {
	    render( require('./App.js').default )
	  });
	}
}