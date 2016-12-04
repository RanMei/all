<style lang="less" scoped>
	.Item4 {
		box-sizing: border-box;
		position: relative;
		width: 100%; height: 10%;
		overflow: hidden;
		background: #8BC34A;
		.text {
			margin-bottom: 0.1rem;
			font-size: 0.4rem; color: white;
			text-align: center;
			opacity: 0;
			transform: scaleX(2);
		}
		.text_0,.text_1 {
			margin-top: 0.3rem;
			&.active {
				transition-property: opacity,transform;
				transition-duration: 1000ms;
				opacity: 1;
				transform: scaleX(1);
			}
		}
	}
</style>

<template>
	<div class="Item4">
		<div style="height:0.5rem"></div>
		<svg-penguin :active="svg_penguin"></svg-penguin>
		<p class="text text_0"
		:class="text_0">海量原著</p>
		<p class="text text_1"
		:class="text_1">想读就读</p>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: {
			img: {},
			active: {}
		},
		data: function(){
			return {
				svg_penguin: false,
				text_0: '',
				text_1: ''
			}
		},
		components: {
			SvgPenguin: require('./SvgPenguin.vue')
		},
		watch: {
			active: function(neo){
				//console.log(neo)
				if(neo){
					this.go();
				}else{
					this.reset();
				}
			}
		},
		methods: {
			go: function(){
				this.svg_penguin = true;
				setTimeout(()=>{
					this.text_0 = 'active';
					setTimeout(()=>{
						this.text_1 = 'active';
					},500);
				},7000);
			},
			reset: function(){
				this.svg_penguin = false;
				this.text_0 = '';
				this.text_1 = '';
			}
		}
	}
</script>