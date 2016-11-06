import {user} from './user.js';
import {shoppingCart} from './shoppingCart.js';
import {notice} from './notice.js';
import {mask} from './mask.js';
import {homeSwiper} from './homeSwiper.js';
import {items} from './items.js';
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