import {combineReducers} from 'redux';

import {user} from './user.jsx';
import {shoppingCart} from './shoppingCart.jsx';
import {notice} from './notice.jsx';

function page(state={},action){
	switch (action.type) {
		case 'JUMP':
			return action.name;				
		default:
			return state;
	}
}

var $$reducer = combineReducers({user,shoppingCart,notice});

export {$$reducer};