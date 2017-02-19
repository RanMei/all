<template>
	<div id="root">
		<topbar-black></topbar-black>
		<navbar-weifeng></navbar-weifeng>
	</div>
</template>

<script type="text/javascript">
	export default {
		components: {
			TopbarBlack: require('../components/TopbarBlack.vue'),
			NavbarWeifeng: require('../components/NavbarWeifeng.vue')
		}
	}
</script>