import {$$store} from '../store/index.jsx';
import {Item} from '../components/Item.jsx';


var ItemContainer = ReactRedux.connect(function(state){
	return {
		inCart: state.shoppingCart.length,
		item: state.item
	}
})( Item );

export {ItemContainer};