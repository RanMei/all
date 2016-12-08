<template>
	<div class="Test">
		<navbar-weifeng></navbar-weifeng>
		<router-view></router-view>
	</div>	
</template>

<script type="text/javascript">
	export default {
		components: {
			NavbarWeifeng: require('../components/NavbarWeifeng.vue')
		}
	}
</script>
