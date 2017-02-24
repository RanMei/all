<style lang="less" scoped>
	.Home {
		font-size: 16px;
	}
</style>

<template>
	<div class="Home">
		<topbar :tabs="tabs"></topbar>
		<router-view></router-view>
		<navbar></navbar>
	</div>
</template>

<script type="text/javascript">
	export default {
		components: {
			Topbar: require('../components/Topbar.vue'),
			Navbar: require('../components/Navbar.vue'),
			Showcase: require('../components/Showcase.vue'),
		},
		data: function(){
			return {
			}
		},
		computed: {
			tabs(){
				return this.$store.state.topbar.tabs[this.$store.state.navbar.current];
			}
		},
		mounted: function(){

		}
	}
</script>