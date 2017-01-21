const state = {
	items: [{
		name: 'iPhone7',
		price: 6000,
		quantity: 1
	},{
		name: 'iPad mini',
		price: 2000,
		quantity: 1
	}]
};

const mutations = {
	'CART.REMOVE': function(state,i){
		state.items.splice(i,1);
	},
	'CART.PLUS': function(state,i){
		state.items[i].quantity++;
	}
}

export default {state,mutations};