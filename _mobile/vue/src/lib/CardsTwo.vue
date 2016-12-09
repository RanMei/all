<template>
	<div class="CardsTwo"
	@touchstart="touchstart($event)"
	@touchmove="touchmove($event)"
	@touchend="touchend($event)"
	@touchcancel="touchend($event)">
		<div class="paper__"
		:class="a.status"
		v-for="(a,i) in papers">
			
		</div>
	</div>
</template>

<style lang="less" scoped>
	.CardsTwo {
		position: relative;
		width: 100%; height: 9rem;
		margin-top: 1rem;
		perspective: 10rem;
		overflow: hidden;
		.first {
			animation: first 0.2s forwards;
		}
		.next {
			animation: next 0.2s forwards;
		}
		@keyframes first {
			0% {
				opacity: 1;
				z-index: 10;
			}
			100% {
				opacity: 1;
				z-index: 10;
			}
		}
		@keyframes next {
			0% {
				transform: translate3d(1rem,0.1rem,-1rem);
				opacity: 0.5;
				z-index: 5;
			}
			100% {
				transform: translate3d(1rem,0.1rem,-1rem);
				opacity: 0.5;
				z-index: 5;
			}
		}

		@keyframes leave {
			0% {
				opacity: 1;
				z-index: 10;
			}
			30% {
				transform: translate3d(-10rem,0,0);
				opacity: 1;
				z-index: 10;
			}
			60% {
				transform: translate3d(-10rem,0,-1rem);
				opacity: 0.5;
				z-index: 5;
			}
			100% {
				transform: translate3d(1rem,0.1rem,-1rem);
				opacity: 0.5;
				z-index: 5;
			}
		}
		.leave {
			animation: leave 0.7s ease-out forwards;
		}

		@keyframes enter {
			0% {
				transform: translate3d(1rem,0.1rem,-1rem);
				opacity: 0.5;
				z-index: 5;
			}

			100% {
				transform: translate3d(0,0,0);
				opacity: 1;
				z-index: 10;
			}
		}
		.enter {
			animation: enter ease-in-out 0.5s forwards;
		}

		.paper__ {
			position: absolute; left: 0.3rem;
			width: 5.5rem; height: 7rem;
			background: orange;
			border-radius: 0.1rem;
		}
	}
</style>

<script type="text/javascript">
	export default {
		props: ['act'],
		data: function(){
			return {
				papers: [{
					status: ''
				},{
					status: ''
				}],

				moveCount: 0,
				canScroll: true,

				X0: null,
				X1: null,
				Y0: null,
				Y1: null
			}
		},
		mounted: function(){
			var self = this;
			self.papers[0].status = 'next';
			self.papers[1].status = 'first';
		},
		methods: {
			touchstart: function(e){
				this.moveCount = 0;
				this.canScroll = true;
				this.X0 = e.changedTouches[0].pageX;
				this.Y0 = e.changedTouches[0].pageY;
				console.log(this.X0)
			},
			touchmove: function(e){
				this.moveCount++;
				if( this.moveCount===1 ){
					this.X1 = e.changedTouches[0].pageX;
					this.Y1 = e.changedTouches[0].pageY;
					var dY = this.Y1 - this.Y0;
					var dX = this.X1 - this.X0;
					if( Math.abs(dY)>Math.abs(dX) ){
						this.canScroll = true;
					}else{
						this.canScroll = false;
					}
				};
				if( !this.canScroll ){
					e.preventDefault();
				}
			},
			touchend: function(e){
				if( !this.canScroll ){
					this.X1 = e.changedTouches[0].pageX;
					var dX = this.X1 - this.X0;
					if( dX<0 ){
						this.switch__();
					}
				}
			},
			switch__: function(){
				if( this.papers[0].status === 'enter' ){
					this.papers[0].status = 'leave';
					this.papers[1].status = 'enter';
				}else{
					this.papers[0].status = 'enter';
					this.papers[1].status = 'leave';
				}
			}
		}
	}
</script>