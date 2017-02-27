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
		<navbar></navbar>
		<slider></slider>
		<div class="main">
			<router-view></router-view>
		</div>
		<my-footer></my-footer>
		<!-- <panel-comments></panel-comments> -->
	</div>
</template>

<script type="text/javascript">
	export default {
		components: {
			Navbar: require('../components/Navbar.vue'),
			Slider: require('../components/Slider.vue'),
			MyFooter: require('../components/Footer.vue'),

			PanelComments: require('../components/PanelComments.vue')
		},
		mounted: function(){
			this.$store.dispatch('init');
		}
	}
</script>