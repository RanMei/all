<template>
	<items :items="items" :act="act"></items>
</template>


<script type="text/javascript">
import {DIR} from '../config.js';

Vue.component( 'items',require('../components/items.vue') );

export default {
	props: ['items','act'],
	data: function(){
		return {
			//items: []
		}
	},
	mounted: function(){
		console.log(this.items)
		// console.log(this.items)
		// var self = this;
		// fetch( DIR.api+'/items/', {
		// 	method: 'GET',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// 	mode: "cors"
		// }).then(function(res) {
		// 	if (res.status === 200) {
		// 		return res.json()
		// 	} else {
		// 		//return Promise.reject(res.json())
		// 	}
		// }).then(function(data) {
		// 	self.items = data;
		// }).catch(function(err) {
		// 	console.log(err);
		// });
	}
}
</script>