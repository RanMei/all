import {user} from './user.jsx';
import {shoppingCart} from './shoppingCart.jsx';
import {notice} from './notice.jsx';
import {mask} from './mask.jsx';
import {homeSwiper} from './homeSwiper.jsx';
import {items} from './items.jsx';
import {item} from './item.js';

var createStore = Redux.createStore;
var compose = Redux.compose;
var combineReducers =  Redux.combineReducers;

var $$reducer = Redux.combineReducers({
	user,
	shoppingCart,
	notice,
	mask,
	homeSwiper,
	items,
	item
});

// actions
var LOGIN = {type:'LOGIN'};
var INCREMENT = {type:'INCREMENT'};
var DECREMENT = {type:'DECREMENT'};

// store
const $$store = createStore( $$reducer/*,enhancer*/ );
console.debug( 'Redux: store created.',$$store.getState() )

export {$$store};