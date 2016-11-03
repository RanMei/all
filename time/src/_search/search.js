import {DIR} from '../config.js';

import '../common.less';
import './search.less';
import * as MyHeader from '../components/MyHeader.vue';
import * as Focus from '../components/Focus.vue';
import * as BackToTop from '../components/BackToTop.vue';
import * as MyFooter from '../components/MyFooter.vue';
import Showcase from '../components/Showcase.vue';

Vue.component('my-header',MyHeader)
Vue.component('focus',Focus)
Vue.component('back-to-top',BackToTop)
Vue.component('my-footer',MyFooter)

Vue.component('showcase',Showcase);

import {store} from '../store/store_index.js';

new Vue({
	el: '#root',
	store,
	data: {
		DIR: DIR
	},
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