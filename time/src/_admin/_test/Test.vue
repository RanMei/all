<template>
	<div class="Test">
		<navbar-red></navbar-red>
		<div style="height:5000px"></div>
		<router-view></router-view>
	</div>	
</template>

<script type="text/javascript">
	export default {
		components: {
			NavbarRed: require('../components/NavbarRed.vue')
		}
	}
</script>
