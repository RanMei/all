<template>
<div class="space">
	<div class="flipper" :class="state"
	@click="handleClick">
		<div class="face front">
			<p>front</p>
			<img :src="img.iron_man"/>
		</div>
		<div class="face back">
			<p>back</p>
			<img :src="img.storm_trooper"/>
		</div>
	</div>
</div>
</template>

<style lang="less" scoped>
	.space {
		position: relative;
		width: 5rem; height: 8rem;
		margin: auto;
		perspective: 1000px;
		.flipper {
			position: relative;
			width: 100%; height: 100%;
			transition: transform 1s ease-in-out;
			transform-style: preserve-3d;
			&.two {
				transform: rotateY(180deg);
			}
		}
		.front, .back {
			backface-visibility: hidden;
			position: absolute; left: 0; top: 0;
			width: 100%; height: 100%;
			border-radius: 0.1rem;
			transform-style: preserve-3d;
			p {
				width: 3rem;
				margin: auto;
				text-align: center;
				background: red;
				font-size: 0.5rem;
				transform: translate3d(0,1rem,1rem);
				//box-shadow: 0 0 1rem red;
			}
			img {
				width: 2rem;
				margin: auto;
				transform: translate3d(0,2rem,4rem);
			}
		}
		.front {
			background: orange;
			z-index: 2;
			//perspective: 1000px;
			transform-style: preserve-3d;
			&.two {
				//transform: rotateY(180deg);
			}
		}
		.back {
			background: blue;
			transform: rotateY(180deg);
			&.two {
			}
		}
	}
</style>

<script>
export default {
	data: function(){
		return {
			state: '',
			img: {
				iron_man: 'img/iron_man.png',
				storm_trooper: 'img/storm-trooper.png'
			}
		}
	},
	mounted: function(){
		document.addEventListener('keydown',(e)=>{
			if(e.keyCode===39){
				this.state = 'two'
			}else if(e.keyCode===37){
				this.state = ''
			}
			//console.log(e)
		})
	},
	methods: {
		handleClick: function(){
			this.state = this.state === ''?'two':'';
		}
	}
}

</script>