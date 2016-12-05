<style lang="less" scoped>
.Slider {
	position: relative;
	width: 100%; //height: 7rem;
	background: orange;
	overflow: hidden;
	.train {
		width: 100%; height: 1000%;
		transition: transform 0.3s;
		.item {
			box-sizing: border-box;
			position: relative;
			width: 100%; height: 10%;
			overflow: hidden;
			//perspective: 1000px;
			.warrior {
				width: 6rem;
				margin: auto;
			}
			.square {
				width: 2rem; height: 1rem;
			}
			.arrow {
				position: absolute; left: 3.44rem; bottom: 0.5rem;
				width: 0.62rem;
			}
		}
	}
}
</style>

<template>
<div class="Slider"
	@touchstart="touchstart($event)"
	@touchmove="touchmove($event)"
	@touchend="touchend($event)"
	@keypress="keydown($event)"
	ref="slider"
	:style=" 'height:'+viewportHeight+'px' "
	>
	<ul class="train" :style=" 'transform: translate3d(0,'+(-current*10)+'%,0)' ">
		<item0 :img="img" :active="active[0]"></item0>
		<item1 :img="img" :active="active[1]"></item1>
		<item2 :img="img" :active="active[2]"></item2>
		<item3 :img="img" :active="active[3]"></item3>
		<item4 :img="img" :active="active[4]"></item4>
	</ul>
</div>
</template>

<script>
export default {
	props: {
		img: {},
		items: {
			default: function(){
				return ['#6dace2','#af9180','yellow','','']
			}
		},
		duration: {
			default: 200
		}
	},
	components: {
		Item0: require('./Item0.vue'),
		Item1: require('./Item1.vue'),
		Item2: require('./Item2.vue'),
		Item3: require('./Item3.vue'),
		Item4: require('./Item4.vue')
	},
	data: function(){
		return {
			viewportHeight: 0,
			color: 'black',
			current: 0,
			Y1: null,
			Y2: null,

			active: {
				0: false,
				1: false,
				2: false,
				3: false,
				4: false
			}
		}
	},
	watch: {
		current: function(neo,old){
			this.active[neo] = true;
			setTimeout(()=>{
				this.active[old] = false;
			},this.duration);
			// switch(neo){
			// 	case 0:
			// 		this.active[1] = false;
			// 		setTimeout(()=>{
			// 			this.active[0] = true;
			// 		},300);
			// 		break;
			// 	case 1:
			// 		this.active[0] = false;
			// 		this.active[2] = false;
			// 		this.active[1] = true;
			// 		break;
			// 	case 2:
			// 		this.active[1] = false;
			// 		this.active[2] = true;
			// 		break;
			// 	case 3:
			// 		this.active[2] = false;
			// 		break;

			// }
		}
	},
	mounted: function(){
		this.viewportHeight = window.innerHeight;
		window.addEventListener('resize',()=>{
			this.viewportHeight = window.innerHeight;
		},50);

		this.active[this.current] = true;
	},
	methods: {
		keydown: function(e){
			console.log(e);
		},
		touchstart: function(e){
			//e.preventDefault();
			this.Y1 = e.changedTouches[0].pageY;
		},
		touchmove: function(e){
			e.preventDefault();
		},
		touchend: function(e){
			this.Y2 = e.changedTouches[0].pageY;
			var distance = this.Y2 - this.Y1;
			//console.log(distance)
			if( distance<-10 ){
				this.toNext();
			}else if( distance>10 ){
				if( this.current>0 ){
					this.current--;
				}
			}
		},
		toNext: function(){
			if( this.current<this.items.length-1 ){
				this.current++;
			}
		}
	}
}
</script>