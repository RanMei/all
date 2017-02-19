import '../common.less';
import Vue from 'vue';

import store from '../store/store.js';

new Vue({
	el: '#root',
	components: {
		App: require('./App.vue')
	},
	template: '<app></app>',
	store,
	methods: {
		pick: function(n){
			this.current = n;
		}
	}
})