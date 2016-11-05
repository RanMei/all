import {DIR} from '../config.js';

import '../common.less';
import './cart.less';
import * as MyHeader from '../components/MyHeader.vue';
import * as Focus from '../components/Focus.vue';
import * as BackToTop from '../components/BackToTop.vue';
import * as MyFooter from '../components/MyFooter.vue';

Vue.component('my-header',MyHeader)
Vue.component('focus',Focus)
Vue.component('back-to-top',BackToTop)
Vue.component('my-footer',MyFooter)

import {store} from '../store/store.js';

new Vue({
	el: '#root',
	store,
	data: {
		DIR: DIR
	},
	methods: {
		pick: function(n){
			this.current = n;
		}
	}
})