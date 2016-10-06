import {$$store} from '../store/index.jsx';
import {ShoppingCart} from '../components/ShoppingCart.jsx';

function act(action){
	$$store.dispatch(action);
}

var ShoppingCartContainer = ReactRedux.connect(function(state){
	return {
		items: state.shoppingCart,
		act: act
	}
})( ShoppingCart );

export {ShoppingCartContainer};