import {Mask} from '../components/Mask.jsx';
import {Notice} from '../components/Notice.jsx';
//import {NoticePretty} from '../components/NoticePretty.jsx';

import {$$store} from '../store/index.jsx';
import {API} from '../store/API/API.js';
import initHome from '../store/actions/initHome.js';

class App extends React.Component {
	constructor(){
		super();
		console.debug('<App/> constructing');
	}
	componentDidMount(){
		API.INIT();
		//$$store.dispatch(initHome());
	}
	render() {
		console.debug( '<App/> rendering.' );
		return (
			<div>
				<Mask mask={this.props.mask}/>
				<Notice notice={this.props.notice}/>
				{this.props.children}
			</div>
		);
	}
}

App = ReactRedux.connect(function(state){
	return {
		mask: state.mask,
		notice: state.notice
	}
})( App );

export {App};