<template>
	<div class="Farm">
		<confetti></confetti>
		<smoky-text></smoky-text>
	</div>
</template>

<style lang="less" scoped>
	.Farm {
		position: relative;
	}
</style>

<script type="text/javascript">
	export default {
		components: {
			Confetti: require('./SnowConfetti.js'),
			SmokyText: require('./SmokyText.vue')
		}
	}
</script>