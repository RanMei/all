<style lang="less" scoped>
	.Others {
		width: 100%; height: 100vh;
	}
</style>

<template>
	<div class="Others">
		<iframe :src="url" width="100%" height="100%" seamless frameborder="0"></iframe>
	</div>
</template>

<script type="text/javascript">
	export default {
		computed: {
			url(){
				return this.$store.state.items[this.$store.state.current].url;
			}
		}
	}
</script>