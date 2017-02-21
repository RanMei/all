<style lang="less" scoped>
	.Home {
		font-size: 16px;
	}
</style>

<template>
	<div class="Home">
		<topbar></topbar>
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
		mounted: function(){

		}
	}
</script>