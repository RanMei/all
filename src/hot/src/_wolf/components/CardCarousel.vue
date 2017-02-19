<style lang="less" scoped>
	.CardCarousel {
		position: relative;
		width: 100%; height: 3.8rem;
		transform: translate3d(0,50%,0);
		opacity: 0;
		@duration: 500ms;
		&.active {
			transition-property: transform,opacity;
			transition-duration: 1s;
			transform: translate3d(0,0,0);
			opacity: 1;
		}
		.prev {
			position: absolute; left: 0.2rem; top: 1.5rem;
			width: 0.3rem;
			cursor: pointer;
		}
		.next {
			position: absolute; right: 0.2rem; top: 1.5rem;
			width: 0.3rem;
			z-index:99; cursor: pointer;
		}
		.cards {
			position: relative;
			width: 2rem; height: 3rem;
			margin: auto;
			perspective: 10rem;
			transform-style: preserve-3d;
			@p0: translate3d(-3.20rem,0,-3.20rem) rotateY(40deg);
			@p1: translate3d(-2.2rem,0,-2.2rem) rotateY(40deg);
			@p2: translate3d(-1.1rem,0,-1.1rem) rotateY(40deg);
			@p3: translate3d(0,0,0);
			@p4: translate3d(1.1rem,0,-1.1rem) rotateY(-40deg);
			@p5: translate3d(2.2rem,0,-2.2rem) rotateY(-40deg);
			@p6: translate3d(3.2rem,0,-3.2rem) rotateY(-40deg);

			.card {
				position: absolute;
				width: 100%; 
				opacity: 0.9; 
				transform-origin: 50% 50%;
				&._0to1 {
					animation: _0to1 @duration forwards;
				}
			}
			.card1 {
				transform: @p0;
			}
			.card2 {
				transform: @p1;
			}
			.card3 {
				transform: @p2;
			}
			.card4 {z-index:4}
			.card5 {
				transform: @p4;
				z-index: 3;
			}
			.card6 {
				transform: @p5;
				z-index: 2;
			}
			.card7 {
				transform: @p6;
				z-index: 1;
			}
			@keyframes _0to1 {
				0% {
					transform: @p0;
				}
				100% {
					transform: @p1;
				}
			} 
			@keyframes _1to2 {
				0% {
					transform: @p1;
				}
				100% {
					transform: @p2;
				}
			}
			@keyframes _2to3 {
				0% {
					transform: @p2;
				}
				100% {
					transform: @p3;
				}
			}
			@keyframes _3to4 {
				0% {
					transform: @p3;
				}
				100% {
					transform: @p4;
				}
			} 
			@keyframes _4to5 {
				0% {
					transform: @p4;
				}
				100% {
					transform: @p5;
				}
			}
			@keyframes _5to6 {
				0% {
					transform: @p5;
				}
				100% {
					transform: @p6;
				}
			}
			@keyframes _6to0 {
				0% {
					transform: @p6;
				}
				100% {
					transform: @p0;
				}
			}
			@keyframes _1to0 {
				0% {
					transform: @p1;
				}
				100% {
					transform: @p0;
				}
			} 
			@keyframes _2to1 {
				0% {
					transform: @p2;
				}
				100% {
					transform: @p1;
				}
			}
			@keyframes _3to2 {
				0% {
					transform: @p3;
				}
				100% {
					transform: @p2;
				}
			}
			@keyframes _4to3 {
				0% {
					transform: @p4;
				}
				100% {
					transform: @p3;
				}
			} 
			@keyframes _5to4 {
				0% {
					transform: @p5;
				}
				100% {
					transform: @p4;
				}
			}
			@keyframes _6to5 {
				0% {
					transform: @p6;
				}
				100% {
					transform: @p5;
				}
			}
			@keyframes _0to6 {
				0% {
					transform: @p0;
				}
				100% {
					transform: @p6;
				}
			}
		}
	}
</style>

<template>
	<div class="CardCarousel"
	:class=" carousel?'active':'' ">
		<img class="prev" :src=" img+'/left.png' "
		@click="prev"/>
		<img class="next" :src=" img+'/right.png' "
		@click="next"/>
		<div class="cards">
			<img v-for="(a,i) in cards"
			class="card"
			:class=" 'card'+(i+1) " 
			:src=" img+'/cont4_demo'+(i+1)+'.png' "
			:style=" a.style ">
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: {
			img: {},
			active: {},
			autoplay: {},
			duration: {
				default: 500
			}
		},
		data: function(){
			return {
				state: [
					'transform: translate3d(-360px,0,-360px) rotateY(40deg);'
				],

				carousel: false,
				cards: [{
					style: '',
					p: 0
				},{
					style: '',
					p: 1
				},{
					style: '',
					p: 2
				},{
					style: '',
					p: 3
				},{
					style: '',
					p: 4
				},{
					style: '',
					p: 5
				},{
					style: '',
					p: 6
				}],
				switching: false,
				current: 0
			}
		},
		watch: {
			active: function(b){
				if(b){
					this.carousel = true;
				}else{
					this.carousel = false;
				}
			}
		},
		mounted: function(){
			//this.go();
		},
		methods: {
			update: function(){
				var self = this;
				self.cards.forEach(a=>{
					var target = a.p + 1;
					if( target>6 ){
						target = 0;
					};
					a.style = 'animation: '+self.duration+'ms _'+a.p+'to'+target+' forwards';
					a.p = target;
				})
			},
			next: function(){
				var self = this;
				if( !this.switching ){
					this.switching = true;

					self.cards.forEach(a=>{
						var target = a.p + 1;
						if( target>6 ){
							target = 0;
						};
						a.style = 
							'animation: '+self.duration+'ms _'+a.p+'to'+target+' forwards;'+
							'-webkit-animation: '+self.duration+'ms _'+a.p+'to'+target+' forwards;';
						a.p = target;
					})

					if( self.current<6 ){
						self.current++;
					}else{
						self.current = 0;
					}
					//this.nextDate();
					setTimeout(function(){
						self.switching = false;
					},self.duration);
				};
			},
			prev: function(){
				var self = this;
				if( !this.switching ){
					this.switching = true;

					self.cards.forEach(a=>{
						var target = a.p - 1;
						if( target<0 ){
							target = 6;
						};
						a.style = 
							'animation: '+self.duration+'ms _'+a.p+'to'+target+' forwards;'+
							'-webkit-animation: '+self.duration+'ms _'+a.p+'to'+target+' forwards;';
						a.p = target;
					})

					if( self.current>0 ){
						self.current--;
					}else{
						self.current = 6;
					}
					//this.nextDate();
					setTimeout(function(){
						self.switching = false;
					},self.duration);
				};
			}
		}
	}
</script>