<template>
	<div id="root">
		<back-to-top></back-to-top>
		<topbar-black></topbar-black>

		<my-footer></my-footer>
	</div>
</template>

<style lang="less" scoped>
	#root {
	}
</style>

<script type="text/javascript">
	export default {
		components: {
			TopbarBlack: require('../components/TopbarBlack.vue'),
			MyHeader: require('../components/MyHeader.vue'),
			MyFooter: require('../components/MyFooter.vue'),
			BackToTop: require('../components/BackToTop.vue'),
			Home: require('../components/Home.vue')
		},
		computed: {
			dir: function(){

			},
			items: function(){

			}
		},
		mounted: function(){

		}
	}
</script>