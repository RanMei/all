import {DIR} from '../config.js';

import '../common.less';
import './item.less';
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
		DIR: DIR,
		id: '',
		query: '',
		current: 0,
		quantity: 1
	},
	mounted: function(){
		//this.get_id();
		this.get_query();
		this.$store.dispatch( 'GET_ITEM',this.get_id() );
	},
	computed: {
		item: function(){
			return this.$store.state.item;
		}
	},
	methods: {
		get_id: function(){
			var id = location.href.match(/id=.+/)[0].split(/&/)[0].replace(/id=/,'');
			return id;
		},
		get_query: function(){
			this.query = location.href.match(/\?.+/)[0];
		},
		get_item: function(){
			var self = this;
		},
		plus: function(){
			this.quantity++;
		},
		minus: function(){
			if(this.quantity>1){
				this.quantity--;
			}
		},
		pick: function(n){
			this.current = n;
		}
	}
})