<template>
	<div id="root">
		<Navbar></Navbar>
		<Slider></Slider>
		<router-view></router-view>
		<Footer></Footer>
	</div>
</template>

<script type="text/javascript">
	export default {
		components: {
			Navbar: require('../components/Navbar.vue'),
			Slider: require('../components/Slider.vue'),
			Footer: require('../components/Footer.vue'),
		}
	}
</script>