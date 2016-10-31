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


new Vue({
	el: '#root',
	data: {
		DIR: DIR,
		item: {},
		current: 0
	},
	methods: {
		pick: function(n){
			this.current = n;
		}
	}
})