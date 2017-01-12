<template>
	<div id="root">
		<!-- <my-header></my-header> -->
		<my-footer></my-footer>
		<back-to-top></back-to-top>
	</div>
</template>

<script type="text/javascript">
	export default {
		components: {
			MyHeader: require('../components/MyHeader.vue'),
			MyFooter: require('../components/MyFooter.vue'),
			BackToTop: require('../components/BackToTop.vue')
		}
	}
</script>