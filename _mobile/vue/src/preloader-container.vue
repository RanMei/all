<template>
	<div class="con">
		<preloader></preloader>
	</div>
</template>

<style lang="less" scoped>
.con {
	width: 100%; height: 100vh; overflow: hidden;
	background: 
		linear-gradient(45deg, rgba(255, 255, 255, 0) 48%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0) 52%), 
		linear-gradient(-45deg, rgba(255, 255, 255, 0) 48%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0) 52%);
	background-size: 30px 30px;
	background-color: #000;
}
</style>

<script>
module.exports = {
	components: {
		preloader: require('./components/preloader.vue')
	}
}
</script>