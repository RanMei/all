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


new Vue({
	el: '#root',
	data: {
		DIR: DIR,

		items: [],

		item: {},
		current: 0
	},
	mounted: function(){
		var self = this;
		fetch( DIR.api+'/items/', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			mode: "cors"
		}).then(function(res) {
			if (res.status === 200) {
				return res.json()
			} else {
				//return Promise.reject(res.json())
			}
		}).then(function(items) {
			items.forEach(a=>{
				a.checked = false;
				self.items.push(a);
			})
		}).catch(function(err) {
			console.log(err);
		});
	},
	methods: {
		pick: function(n){
			this.current = n;
		}
	}
})