export default function (){
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
	return dispatch=>{
		dispatch({
			type: 'INIT',
			user: user,
			shoppingCart: shoppingCart,
			items: items,
			homeSwiper: homeSwiper
		})
	}
}