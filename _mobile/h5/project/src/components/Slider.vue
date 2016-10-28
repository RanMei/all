<template>
<div class="container"
	v-show="show"
	v-on:touchstart="touchstart($event)"
	v-on:touchend="touchend($event)"
	@keypress="keydown($event)"
	>
	<ul class="train" :style=" 'transform: translate3d(0,'+(-current*10)+'%,0)' ">
		<li class="item" 
			v-for="(item,i) in items"
			:style=" 'background:'+item ">{{i}}
		</li>
	</ul>
</div>
</template>

<style lang="less" scoped>
.container {
	position: relative;
	width: 100%; height: 100vh;
	background: orange;
	overflow: hidden;
	.train {
		width: 100%; height: 1000%;
		transition: transform 0.5s;
		.item {
			width: 100%; height: 10%;
			.square {
				width: 2rem; height: 1rem;
			}
		}
	}
}
</style>

<script>
var container = {
	props: ['show'],
	data: function(){
		return {
			color: 'black',
			items: ['red','orange','yellow','green','blue','purple'],
			current: 0,
			Y1: null,
			Y2: null
		}
	},
	ready: function(){

	},
	methods: {
		hover: function(){
			this.color = 'white';
		},
		keydown: function(e){
			console.log(e);
		},
		touchstart: function(e){
			this.Y1 = e.changedTouches[0].pageY;
		},
		touchend: function(e){
			this.Y2 = e.changedTouches[0].pageY;
			var distance = this.Y2 - this.Y1;
			//console.log(distance)
			if( distance<0 ){
				this.toNext();
			}else if( distance>0 ){
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
};
module.exports = container;
</script>