import {user} from './user.jsx';
import {shoppingCart} from './shoppingCart.jsx';
import {notice} from './notice.jsx';
import {mask} from './mask.jsx';

var $$reducer = Redux.combineReducers({user,shoppingCart,notice,mask});

export {$$reducer};