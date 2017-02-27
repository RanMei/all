import {user} from './reducers/user.js';
import shoppingCart from './reducers/shoppingCart.js';
import {notice} from './reducers/notice.js';
import mask from './reducers/mask.js';
import {homeSwiper} from './reducers/homeSwiper.js';
import {items} from './reducers/items.js';
import {item} from './reducers/item.js';

var createStore = Redux.createStore;
var applyMiddleware = Redux.applyMiddleware;

var compose = Redux.compose;
var combineReducers =  Redux.combineReducers;

var rootReducer = Redux.combineReducers({
	user,
	shoppingCart,
	notice,
	mask,
	homeSwiper,
	items,
	item
});

// store
const store = createStore(
	rootReducer,
	applyMiddleware(ReduxThunk.default)
	/*,enhancer*/
);
console.debug( 'Redux: store created.',store.getState() )

export default store;