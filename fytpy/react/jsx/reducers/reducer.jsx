import {combineReducers} from 'redux';

import {counter} from './counter.jsx';
import {user} from './user.jsx';
import {shoppingCart} from './shoppingCart.jsx';

var $$reducer = combineReducers({user});

export {$$reducer};