require('./common.less')
//import {store} from './store/index.js';
import {DIR} from './config.js';

Vue.component('navbar',require('./components/Navbar.vue'));

Vue.use(VueRouter);

var router = new VueRouter({
	routes: [{
		path: '/',
		component: require('./routes/items.vue')
	}]
});

// function items (state=[],action){
// 	switch(action.type){
// 		case 'PUSH':
// 			var next = JSON.parse(JSON.stringify(state));
// 			next.push(action.item);
// 			console.log(next)
// 			return next;
// 		default:
// 			return state;
// 	}
// }

// var state = {
// 	items: []
// };

// var reducer = Redux.combineReducers({items});

// var store = Redux.createStore(reducer,state);

//import {store,act} from './store/store.js';

import {store} from './store/store.js';

new Vue({
	el: '#root',
	store,
	router,
	template: `
	<div id="ROOT" class="container">
		<navbar></navbar>
		<router-view></router-view>
	</div>`,
	mounted: function(){
		console.log(this.$store)
		this.$store.dispatch('PLUS');
	},
	computed: {
		items: function(){
			return this.$store.state.items;
		},
		num: function(){
			return this.$store.state.num.num;
		}
	},
	methods: {
		act: function(){}
	}
})