<style lang="less" scoped>
.RouteAll {
	
}
</style>

<template>
	<div class="RouteAll">
		<topbar></topbar>
		<showcase></showcase>
	</div>
</template>

<script type="text/javascript">
	export default {
		components: {
			Topbar: require('../components/Topbar.vue'),
			Showcase: require('../components/Showcase.vue')
		},
		computed: {
		},
		methods: {
		},
		created: function(){
		},
		mounted: function(){
			this.$store.dispatch('fetchItems')
			window.scroll(0,0);
		}
	}
</script>