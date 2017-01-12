import {DIR} from '../config.js';

import '../common.less';

import {store} from '../store/store.js';

new Vue({
	el: '#root',
	store,
	components: {
		App: require('./App.vue')
	},
	template: '<app></app>',
	mounted: function(){
		var self = this;
		self.$store.dispatch('GET_ITEMS');
	},
	methods: {
		pick: function(n){
			this.current = n;
		}
	}
})