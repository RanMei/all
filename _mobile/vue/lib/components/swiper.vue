<template>
<div class="swiper" 
	style="{{style}}"
	v-on:touchstart="touchstart($event)"
	v-on:touchmove="touchmove($event)"
	v-on:touchend="touchend($event)">
	<ul class="train" 
		style="transform:translate3d({{trainOffsetX}}px,0,0);transition:{{transition}};">
		<li class="item {{i===currentOne?'active':''}}" 
			v-for="(i,item) in items" 
			style="background:{{item}};"></li>
	</ul>
</div>
</template>

<style lang="less" scoped>
.swiper {
	position: relative;
	width: 50%; height: 20vw;
	background: grey;
	margin: auto;
	.train {
		width: 1000%;
		height: 100%;
		.item {
			float: left;
			width: 10%; height: 100%;
			transform: scale(0.8);
			opacity: 0.6;
			transition: 0.5s;
		}
		.item.active {
			transform: scale(1);
			opacity: 1;
		}
	}
}
</style>

<script>
var swiper = {
	props: ['style'],
	data: function(){
		return {
			width: 0,

			sticky: false,
			autoplay: false,

			duration: 300,
			interval: 500,

			switching: false,
			inCycle: false,
			moveCount: 0,
			scrolling: false,
			trainOffsetX: 0,
			X1: 0,
			X2: 0,

			currentOne: 2,
			transition: '0s',
			offset: 0,
			items: ['red','orange','yellow','green','blue']
		}
	},
	ready: function(){
		window.addEventListener('load',()=>{
			this.setWidth();
			this.trainOffsetX = -this.width*2;
		});
		window.addEventListener('resize',()=>{
			setTimeout(()=>{
				this.setWidth();
				this.trainOffsetX = -this.width*2;
			},50)
		})
		if( this.autoplay ){
			setInterval(()=>{
				this.toNext();
			},this.interval);
		}
	},
	methods: {
		setWidth: function(){
			this.transition = false;
			var elem = this.$el;
			var width = document.defaultView.getComputedStyle( elem ).width.replace(/px/,'');
			this.width = width;		
		},
		toNext: function(){
			if( this.currentOne<this.items.length-1 ){
				this.currentOne++;
				this.transition = '0.3s';
				this.trainOffsetX = -this.width*3;
			}
			setTimeout(()=>{
				this.transition = '0s';
				var first = this.items[0];
				this.items.splice(0,1);
				this.items.push(first);
				this.currentOne = 2;
				this.trainOffsetX = -this.width*2;
				this.switching = false;
			},this.duration);
		},
		toPrev: function(){
			if( this.currentOne>0 ){
				this.currentOne--;
				this.transition = '0.3s';
				this.trainOffsetX = -this.width;
			};
			setTimeout(()=>{
				this.transition = false;
				var zz = this.items.length-1;
				var last = this.items[zz];
				this.items.splice(zz,1);
				this.items.unshift(last);
				this.currentOne = 2;
				this.trainOffsetX = -this.width*2;
				this.switching = false;
			},this.interval)
		},
		touchstart: function(e){
			if( this.switching===false ){
				this.inCycle = true;
				// reset states of this touch cycle
				this.moveCount = 0;
				this.scrolling = false;
				this.transition = '0s';
				
				this.X0 = this.X1 = e.changedTouches[0].pageX;
				this.Y1 = e.changedTouches[0].pageY;
			};
		},
		touchmove: function(e){
			if( this.inCycle&&!this.scrolling ){
				this.moveCount++;
				if( this.moveCount===1 ){
					this.X2 = e.changedTouches[0].pageX;
					this.Y2 = e.changedTouches[0].pageY;
					var distanceY = this.Y2 - this.Y1;
					var distanceX = this.X2 - this.X1;
					if( Math.abs(distanceY)>Math.abs(distanceX) ){
						this.scrolling = true;
					}
				}

				if( this.sticky ){
					this.X2 = e.changedTouches[0].pageX;
					var distance = this.X2-this.X1;
					this.X1 = this.X2;
					this.trainOffsetX += distance;
				}
			}
		},
		touchend: function(e){
			if( this.inCycle&&!this.scrolling ){
				this.X2 = e.changedTouches[0].pageX;
				var distance = this.X2-this.X0;
				this.switching = true;
				if( distance<0 ){
					this.toNext();
				}else if( distance>0 ){
					this.toPrev();
				};
				this.inCycle = false;
			};
		}
	}
}
module.exports = swiper;
</script>