import './rem.js';

var swiper = new Vue({
	el: '.swiper',
	data: {
		width: 0,

		switching: false,
		inCycle: false,
		moveCount: 0,
		scrolling: false,
		trainOffsetX: 0,
		X1: 0,
		X2: 0,

		currentOne: 2,
		transition: false,
		offset: 0,
		items: ['red','orange','yellow','green','blue']
	},
	methods: {
		init: function(){
			window.addEventListener('load',()=>{
				this.setWidth();
				this.trainOffsetX = -this.width*2;
			});
			window.addEventListener('resize',()=>{
				this.setWidth();
			})
		},
		setWidth: function(){
			this.transition = false;
			var elem = document.querySelectorAll('.swiper')[0];
			var width = document.defaultView.getComputedStyle( elem ).width.replace(/px/,'');
			this.width = width;		
		},
		touchstart: function(e){
			if( this.switching===false ){
				this.inCycle = true;
				// reset states of this touch cycle
				this.moveCount = 0;
				this.scrolling = false;
				this.transition = false;
				
				this.X0 = this.X1 = e.changedTouches[0].pageX;
				this.Y1 = e.changedTouches[0].pageY;
			};
		},
		touchmove: function(e){
			if( this.inCycle ){
				this.X2 = e.changedTouches[0].pageX;
				var distance = this.X2-this.X1;
				this.X1 = this.X2;
				this.trainOffsetX += distance;
			}

		},
		touchend: function(e){
			if( this.inCycle ){
				this.X2 = e.changedTouches[0].pageX;
				var distance = this.X2-this.X0;
				this.switching = true;
				if( distance<0 ){
					if( this.currentOne<this.items.length-1 ){
						this.currentOne++;
						this.transition = true;
						this.trainOffsetX = -this.width*3;
					}
					setTimeout(()=>{
						this.transition = false;
						var first = this.items[0];
						this.items.splice(0,1);
						this.items.push(first);
						this.currentOne = 2;
						this.trainOffsetX = -this.width*2;
						this.switching = false;
					},500)
				}else if( distance>0 ){
					if( this.currentOne>0 ){
						this.currentOne--;
						this.transition = true;
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
					},500)
				};
				this.inCycle = false;
			};
			

		}
	}
})

swiper.init();