<template>
	<items :items="items" :act="act"></items>
</template>


<script type="text/javascript">
import {DIR} from '../../config.js';

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
	}
}
</script>