<style lang="less" scoped>
	.ButtonOrange {
		position: relative;
		width: 5.75rem;
		margin: auto; margin-top: 7.6rem;
		.btn-img {
			width: 100%;
		}
		.btn-content {
			position: absolute; left: 0; top: 0;
			width: 100%; height: 100%;
			.logo {
				position: absolute; left: 0.88rem; top: 0.16rem;
				width: 3.56rem;
			}
			.arrows {
				position: absolute; left: 4.6rem; top: 0.36rem;
				overflow: hidden;
			}
			.arrow {
				float: left;
				width: 0.15rem;
			}
		}
	}
</style>

<template>
	<div class="ButtonOrange"
	@touchstart="touchstart"
	@touchmove="touchmove"
	@touchend="touchend"
	@touchcancel="touchend">
		<img class="btn-img" :src=" pressed? img+'/btn_active.png':img+'/btn.png' "/>
		<div class="btn-content">
			<img class="logo" :src=" img+'/logo.png' "/>
			<div class="arrows">
				<img class="arrow arrow1" :src=" img+'/arrow.png' "/>
				<img class="arrow arrow2" :src=" img+'/arrow.png' "/>
				<img class="arrow arrow3" :src=" img+'/arrow.png' "/>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: {
			img: {}
		},
		data: function(){
			return {
				pressed: false
			}
		},
		methods: {
			touchstart: function(){
				this.pressed = true;
			},
			touchmove: function(){
				this.pressed = false;
			},
			touchend: function(){
				this.pressed = false;
			}
		}
	}
</script>