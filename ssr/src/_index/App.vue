<template>
	<div id="root">
		<navbar></navbar>
	</div>
</template>

<style lang="less" scoped>
	#root {
		color: red;
	}
</style>

<script type="text/javascript">
	export default {
		data: function(){
			return {
			}
		},
		components: {
			Navbar: require('../components/Navbar.vue')
		}
	}
</script>