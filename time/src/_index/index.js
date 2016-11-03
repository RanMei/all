import {DIR,IMG} from '../config.js';

require('../common.less');
require('./index.less');
import * as MyHeader from '../components/MyHeader.vue';
import * as Focus from '../components/Focus.vue';
import * as BackToTop from '../components/BackToTop.vue';
import * as MyFooter from '../components/MyFooter.vue';

Vue.component('my-header',MyHeader)
Vue.component('focus',Focus)
Vue.component('back-to-top',BackToTop)
Vue.component('my-footer',MyFooter)

import {store} from '../store/store_index.js';

new Vue({
	el: '#root',
	store: store,
	data: {
		DIR: DIR,
		IMG: '../'+IMG,
		col2: [
			DIR.item+'?id=1602091546'
		]
	},
	mounted: function(){
		this.$store.dispatch('GET_ITEMS');
	}
})