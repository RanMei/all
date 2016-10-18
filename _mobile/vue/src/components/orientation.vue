<template>
	<div class="space">
		<div class="square" :style=" 'transform: rotateX('+rotateX+'deg) rotateY('+rotateY+'deg);'  ">
			{{rotationRate.alpha}}<br/>
			{{rotateY}}
		</div>
	</div>
</template>

<style lang="less" scoped>
	.space {
		width: 100%;
		perspective: 1000px;
		.square {
			width: 3rem; height: 3rem;
			margin: auto;
			background: orange;
			font-size: 14px;
			transform-style: preserve-3d;
		}
	};
</style>

<script>
export default {
	data: function(){
		return {
			rotationRate: {
				alpha: '111'
			},
			rotateX: 0,
			rotateY: 0
		}
	},
	created: function(){
		var self = this;
		if (window.DeviceMotionEvent) {
			console.log('yeah')
			window.addEventListener('devicemotion',self.handler.bind(self), false); 
		}else{ 
		    console.log('亲，你的浏览器不支持DeviceMotionEvent哦~'); 
		}
	},
	methods: {
		handler: function(e){
			this.rotationRate.alpha = e.rotationRate.alpha;
			this.rotateX += -e.rotationRate.alpha*2;
			this.rotateY += e.rotationRate.beta*2;
		}
	}
} 
</script>