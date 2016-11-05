import {$$store} from '../store/index.jsx';
import {$$production} from '../config.js';

import {Mask} from '../components/Mask.jsx';
import {Notice} from '../components/Notice.jsx';
import {NoticePretty} from '../components/NoticePretty.jsx';

import {API} from '../API/API.js';

function act(action){
	switch(action.type){
		default: 
			$$store.dispatch(action);
	}
}

class App extends React.Component {
	constructor(){
		super();
		console.debug('<App/> constructing');
	}
	componentDidMount(){
		API.INIT_HOME();
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

var AppContainer = ReactRedux.connect(function(state){
	return {
		mask: state.mask,
		notice: state.notice
	}
})( App );

export {AppContainer};