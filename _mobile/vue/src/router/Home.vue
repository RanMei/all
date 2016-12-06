<style lang="less" scoped>
	.Home {
		font-size: 16px;
	}
</style>

<template>
	<div class="Home">
		<router-view :items="items"></router-view>
		<navbar></navbar>
	</div>
</template>

<script type="text/javascript">
	import items from '../api/items.js';

	export default {
		components: {
			Navbar: require('../components/Navbar.vue'),
			Showcase: require('../components/Showcase.vue'),
			List: require('../components/List.vue')
		},
		data: function(){
			return {
				items: items.sort(),
				list: []
			}
		},
		mounted: function(){
			this.list = JSON.parse( JSON.stringify(this.$root.$options.router.options.routes[1].children) );
			//console.log(this.list);
		}
	}
</script>