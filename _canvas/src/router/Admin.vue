<template>
	<div class="Admin">
		<navbar></navbar>
		<router-view></router-view>
	</div>
</template>

<script type="text/javascript">
	export default {
		components: {
			Navbar: require('../components/Navbar.vue')
		}
	}
</script>