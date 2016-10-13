import {$$store} from '../store/index.jsx';
import {$$production} from '../config.js';

import {Mask} from '../components/Mask.jsx';
import {Notice} from '../components/Notice.jsx';
import {NoticePretty} from '../components/NoticePretty.jsx';

function act(action){
	switch(action.type){
		case 'GET_DATA':
			var user = {};
			var shoppingCart = [];
			if( sessionStorage.user ){
				user = JSON.parse( sessionStorage.user );
			};
			if( sessionStorage.shoppingCart ){
				shoppingCart = JSON.parse( sessionStorage.shoppingCart );
			};
			var items = require('../data/items.js').dataItems;
			var homeSwiper = [{
				background: 'img/index/banner_0.jpg',
				href: '#/shopping_cart'
			},{
				background: 'img/index/banner_1.jpg'
			},{
				background: 'img/index/banner_2.jpg'
			},{
				background: 'img/index/banner_3.jpg'
			}];
			console.log(sessionStorage)
			$$store.dispatch({
				type: 'INIT',
				user: user,
				shoppingCart: shoppingCart,
				items: items,
				homeSwiper: homeSwiper
			})
			break;
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
		act({type:'GET_DATA'})
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