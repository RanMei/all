<style lang="less" scoped>
	.Item1 {
		box-sizing: border-box;
		position: relative;
		width: 100%; height: 10%;
		overflow: hidden;
		background: #B35539;
		//perspective: 1000px;
		.title {
			margin-top: 1rem; margin-bottom: 1rem;
			font-size: 0.4rem; color: white;
			text-align: center;
			opacity: 0;
			transform: scaleX(2);
			&.active {
				transition-property: transform,opacity;
				transition-duration: 1s;
				opacity: 1;
				transform: scaleX(1);
			}
		}
		.warrior {
			width: 8rem;
			margin: auto; //margin-top: 2rem;
			transition: 300ms;
			//transform: scale(0);
			&.active {
				animation: warrior-dash 1s forwards;
			}
		}
		@keyframes warrior-dash{
			0% { transform: scale(0.2); }
			50%{ transform: scale(1) rotate(-15deg); }
			60%{ transform: scale(1) rotate(15deg); }
			70%{ transform: scale(1) rotate(-15deg); }
			80%{ transform: scale(1) rotate(15deg); }
			90%{ transform: scale(1) rotate(-15deg); }
			100%{ transform: scale(1) rotate(0); }
		}
	}
</style>

<template>
	<div class="Item1">
		<p class="title"
		:class=" title?'active':'' ">做业内最优秀的游戏开拓者</p>
		<img class="warrior"
		:src=" img+'/cont2_m.png' "
		:class=" warrior?'active':'' "/>
	</div>
</template>

<script>
	export default {
		props: {
			img: {},
			active: {}
		},
		data: function(){
			return {
				title: false,
				warrior: false
			}
		},
		watch: {
			active: function(b){
				if(b){
					this.go();
				}else{
					this.reset();
				}
			}
		},
		methods: {
			go: function(){
				this.warrior = true;
				this.title = true;
			},
			reset: function(){
				this.warrior = false;
				this.title = false;
			}
		}
	}
</script>