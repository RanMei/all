// server-entry.js 
import Vue from 'vue'

import './common.less';

import {store} from './store/store.js';

new Vue({
	store,
	components: {
		App: require('./_search/App.vue')
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
 
// the default export should be a function 
// which will receive the context of the render call 
export default context => {
  // data pre-fetching 
	return app
}