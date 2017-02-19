<style lang="less" scoped>
	#root {
		width: 100%;
		overflow: hidden;
		.main {
			position: relative; overflow: hidden;
			width: 100%;
			.bg {
				width: 100%;
			}
			.main-content {
				position: absolute; left: 0; top: 0;
				width: 100%; height: 100%;
				.panel {
					width: 6.58rem;
					margin: auto; margin-top: 0.44rem;
				}
			}
		}
	}
</style>

<template>
	<div id="root">
		<div class="main">
			<img class="bg" :src=" img+'/bg1.png' "/>
			<div class="main-content">
				<chips :img="img"></chips>
				<button-orange :img="img"></button-orange>
				<img class="panel" :src=" img+'/panel.png' "/>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		data: function(){
			return {
				img: '../img/h5_carnival'
			}
		},
		components: {
			Chips: require('../components/Chips.vue'),
			ButtonOrange: require('../components/ButtonOrange.vue')
		}
	}
</script>