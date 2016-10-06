import {$$store} from '../store/index.jsx';
import {Item} from '../components/Item.jsx';

function act(action){
	switch(action.type){
		case 'ADD_TO_CART':
			if( sessionStorage.shoppingCart ){
				var shoppingCart = JSON.parse( sessionStorage.shoppingCart );
				shoppingCart.push(action.item)
				console.log(shoppingCart)
				sessionStorage.shoppingCart = JSON.stringify( shoppingCart );
			}else{
				sessionStorage.shoppingCart = '[]';
			}
			$$store.dispatch(action);
			break;
		default :
			$$store.dispatch(action);
	}
}

var ItemContainer = ReactRedux.connect(function(state){
	return {
		inCart: state.shoppingCart.length,
		act: act
	}
})( Item );

export {ItemContainer};