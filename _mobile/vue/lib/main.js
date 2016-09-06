// import './rem.js';
// import {swiper} from './swiper.vue';

require('./rem.js');
var home = require('./components/home.vue');
var mask = require('./components/mask.vue');
var swiper = require('./components/swiper.vue');
var box = require('./components/box.vue');

Vue.component( 'home',home );
Vue.component( 'mask',mask );
Vue.component( 'box',box );
Vue.component( 'swiper',swiper );

new Vue({
	el: 'body',
	components: {
		mask: mask,
		swiper: swiper,
		box: box
	},
	data: {
		current: 0,
		pages: [
			'home',
			'box'
		]
	},
	computed: {
		currentPage: function(){
			return this.pages[this.current];
		}
	},
	methods: {
		next: function(){
			this.current++;
		}
	}
})