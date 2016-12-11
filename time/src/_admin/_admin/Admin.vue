<template>
	<div class="Admin">
		<navbar-red></navbar-red>
		<navbar></navbar>
		<router-view></router-view>
	</div>
</template>

<script type="text/javascript">
	export default {
		components: {
			NavbarRed: require('../components/NavbarRed.vue'),
			Navbar: require('../components/Navbar.vue')
		}
	}
</script>