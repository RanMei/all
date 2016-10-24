import {DIR,IMG} from './config.js';

require('./common.less');
require('./index.less');
import * as MyHeader from './components/MyHeader.vue';
import * as Focus from './components/Focus.vue';
import * as BackToTop from './components/BackToTop.vue';
import * as MyFooter from './components/MyFooter.vue';

Vue.component('my-header',MyHeader)
Vue.component('focus',Focus)
Vue.component('back-to-top',BackToTop)
Vue.component('my-footer',MyFooter)


new Vue({
	el: '#root',
	data: {
		DIR: DIR,
		IMG: '../'+IMG,
		col2: [
			DIR.item+'?id=1602091546'
		]
	}
})