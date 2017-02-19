import store from '../store.js';
import {user} from './user.js';
import {cart} from './cart.js';

var API = {};

user( API,store );
cart( API,store );

API.INIT = function(){
	var user = {};
	var shoppingCart = [];
	if( sessionStorage.user ){
		user = JSON.parse( sessionStorage.user );
	};
	if( sessionStorage.shoppingCart ){
		shoppingCart = JSON.parse( sessionStorage.shoppingCart );
	};
	var items = require('../../api/items.js').dataItems;
	var homeSwiper = require('../../api/homeSwiper.js').default;
	// console.log(sessionStorage)
	$$store.dispatch({
		type: 'INIT',
		user: user,
		shoppingCart: shoppingCart,
		items: items,
		homeSwiper: homeSwiper
	})
}

API.ITEM_ADD_TO_CART = function(item){
	if( sessionStorage.shoppingCart ){
		var shoppingCart = JSON.parse( sessionStorage.shoppingCart );
		shoppingCart.push( item )
		sessionStorage.shoppingCart = JSON.stringify( shoppingCart );
	}else{
		sessionStorage.shoppingCart = '[]';
	}
	$$store.dispatch({
		type: 'ADD_TO_CART',
		item: item
	});
	$$store.dispatch({
		type: 'ALERT',
		text: '成功加入购物车'
	});
}

API.ITEM_GET = function(id){
	var item = {};
	var items = require('../../api/items.js').dataItems;
	items.forEach((a)=>{
		if( id===a.id ){
			item = a;
			item.quantity = 1;
		}
	})
	$$store.dispatch({
		type: 'SET_ITEM',
		item
	})
}

API.ALERT = function(text){
	$$store.dispatch({
		type: 'ALERT',
		text
	})
}

API.CONFIRM = function(text){
	$$store.dispatch({
		type: 'CONFIRM',
		text
	})
}

export {API};