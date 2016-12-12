<template>
	<div class="Test">
		<navbar-red></navbar-red>
		<navbar-weifeng></navbar-weifeng>
		<div style="height:5000px"></div>
		<router-view></router-view>
	</div>	
</template>

<script type="text/javascript">
	export default {
		components: {
			NavbarWeifeng: require('../components/NavbarWeifeng.vue'),
			NavbarRed: require('../components/NavbarRed.vue')
		}
	}
</script>
