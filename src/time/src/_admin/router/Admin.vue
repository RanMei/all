<template>
	<div class="Admin">
		<nav-left></nav-left>
		<router-view></router-view>
	</div>
</template>

<style lang="less" scoped>
	.Admin {
    width: 100%;
		overflow: hidden;
	}
</style>

<script type="text/javascript">
	export default {
		components: {
			NavLeft: require('../components/NavLeft.vue'),
			Navbar: require('../components/Navbar.vue')
		}
	}
</script>