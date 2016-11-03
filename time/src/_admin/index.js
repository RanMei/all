require('../common.less')
//import {store} from './store/index.js';
import {DIR} from '../config.js';

Vue.component('navbar',require('./components/Navbar.vue'));

Vue.use(VueRouter);

var router = new VueRouter({
	routes: [{
		path: '/',
		component: require('./routes/items.vue')
	},{
		path: '/item',
		component: require('./components/item.vue')
	},{
		path: '/signin',
		component: require('./routes/Signin.vue')
	}]
});

import {store} from '../store/store.js';

new Vue({
	el: '#root',
	store,
	router,
	template: `
	<div id="ROOT" class="container">
		<navbar></navbar>
		<router-view></router-view>
	</div>`,
	data: {
		age: 32
	},
	mounted: function(){
		this.$store.dispatch('GET_ITEMS');
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