import {combineReducers} from 'redux';

import {user} from './user.jsx';
import {shoppingCart} from './shoppingCart.jsx';

function page(state={},action){
	switch (action.type) {
		case 'JUMP':
			return action.name;				
		default:
			return state;
	}
}

var $$reducer = combineReducers({user,page,shoppingCart});

export {$$reducer};