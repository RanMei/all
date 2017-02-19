import {Mask} from '../components/Mask.jsx';
import {Notice} from '../components/Notice.jsx';
//import {NoticePretty} from '../components/NoticePretty.jsx';

import store from 'store/store.js';
import acs from 'store/actions/index.js';

class App extends React.Component {
	constructor(){
		super();
		console.debug('<App/> constructing');
	}
	componentDidMount(){
		store.dispatch( acs.init() );
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