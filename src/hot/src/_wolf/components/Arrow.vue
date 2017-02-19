<template>
	<img class="Arrow" :src=" img+'/arrow.png' "/>
</template>

<style lang="less" scoped>
	.Arrow {
		position: absolute; left: 3.45rem; bottom: 0.5rem;
		width: 0.6rem;
	}
</style>

<script type="text/javascript">
	export default {
		props: {
			img: {}
		}
	}
</script>