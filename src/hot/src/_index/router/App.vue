<style lang="less" scoped>
	#root {
		width: 100%;
		.main {
			width: 1000px;
			margin: auto;
		}
	}
	@media (max-width: 1000px) {
		.main {
			width: 100%!important;
		}
	}
</style>

<template>
	<div id="root">
		<Navbar></Navbar>
		<Slider></Slider>
		<div class="main">
			<router-view></router-view>
		</div>
		<Footer></Footer>
	</div>
</template>

<script type="text/javascript">
	export default {
		components: {
			Navbar: require('../components/Navbar.vue'),
			Slider: require('../components/Slider.vue'),
			Footer: require('../components/Footer.vue'),
		},
		mounted: function(){
			this.$store.dispatch('init');
		}
	}
</script>