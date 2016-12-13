require('../common.less')
//import {store} from './store/index.js';
import {DIR} from '../config.js';


import {router} from './router/router.js';
import {store} from '../store/store.js';

var vm = new Vue({
	el: '#root',
	store,
	router,
	template: `
	<div id="ROOT">
		<div>{{name}} {{sex}}</div>
		<router-view></router-view>
	</div>`,
	data: {
		name: 'John',
		sex: 'male',
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

console.log(vm)