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


new Vue({
	el: '#root',
	data: {
		DIR: DIR,
		id: '',
		item: {
			name: '--',
			price: 0
		},
		current: 0,
		quantity: 1
	},
	mounted: function(){
		this.get_id();
		this.get_item();
	},
	methods: {
		get_id: function(){
			var id = location.href.match(/id=.+/)[0].split(/&/)[0].replace(/id=/,'');
			this.id = id;
		},
		get_item: function(){
			var self = this;
			fetch( DIR.php+'item.php', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				mode: "cors",
				body: JSON.stringify({
					id: this.id
				})
			}).then(function(res) {
				if (res.status === 200) {
					return res.json()
				} else {
					//return Promise.reject(res.json())
				}
			}).then(function(data) {
				data.price = Number(data.price)
				console.log(data);
				self.item = data;
			}).catch(function(err) {
				console.log(err);
			});
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