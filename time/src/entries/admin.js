require('../common.less')
import {DIR} from '../config.js';

Vue.component( 'items',require('../components/Items.vue') );

new Vue({
	el: '#root',
	data: {
		items: []
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
		}).then(function(data) {
			self.items = data;
		}).catch(function(err) {
			console.log(err);
		});
	},
	template: `<items :items="items"></items>`
})