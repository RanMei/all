
function Swiper(config){
	this.elem = config.elem;
	this.obj = $(this.elem);

	this.carousel = config.carousel || false;
	this.duration = config.duration || 300;

	this.currentOne = 0;
	this.trainOffsetX = 0;

	this.init();
}

Swiper.prototype = {
	init: function(){
		var obj = this.obj;
		obj.html(
			'<ul class="train">'+
				'<li class="item active"><img src="images/slider/1.jpg"/></li>'+
				'<li class="item"><img src="images/slider/2.jpg"/></li>'+
				'<li class="item"><img src="images/slider/3.jpg"/></li>'+
				'<li class="item"><img src="images/slider/4.jpg"/></li>'+
				'<li class="item"><img src="images/slider/5.jpg"/></li>'+
			'</ul>'+
			'<ul class="pagination">'+
				'<li class="dot">'+
				'<li class="dot">'+
				'<li class="dot">'+
				'<li class="dot">'+
				'<li class="dot">'+
			'</ul>'
		)
		this.train = obj.find('.train');
		this.items = obj.find('.item');
		this.imgs = obj.find('img');
		this.dots = obj.find('.dot');

		this.switching = false;
		this.isDown = false;
		
		this.sticky = true;
		this.length = this.items.length;
		this.last = this.length - 1;

		this.width = obj.width();
		this.height = obj.height();

		this.renderTabs();
		this.css();
		this.listen();
	},
	resize: function(){
		var self = this;
		self.width = self.obj.width();
		self.height = self.obj.height();
		self.items.css({
			width: self.width+'px'
		})
		self.toItem( self.currentOne )
	},
	listen: function(){
		$(window).on('resize',this.resize.bind(this));
		this.obj.on('touchstart',this.ontouchstart.bind(this));
		this.obj.on('touchmove',this.ontouchmove.bind(this));
		this.obj.on('touchend',this.ontouchend.bind(this));
	},
	css: function(){
		this.obj.css({
			width: '80%',
			margin: '50px auto'
		}),
		this.train.css({

		}),
		this.items.css({
			width: this.width+'px'
		}),
		this.imgs.css({
			width: '100%'
		})
	},
	renderTabs: function(){
		this.dots.removeClass('active');
		this.dots.eq( this.currentOne ).addClass('active');
	},
	toItem: function( i ){
		this.train.css({
			transition: '0.3s',
			transform: 'translate3d('+  (-i*this.width)  +'px,0,0)'
		});
		this.items.removeClass('active');
		this.items.eq(this.currentOne).addClass('active');
		this.renderTabs();
		setTimeout(function(){
			this.currentItemScale = 1;
			this.otherItemScale = 0.8;				
			this.switching = false;
		},this.duration);
	},
	ontouchstart: function(e){
		if( !this.switching ){
			this.moveCount = 0;
			this.scrolling = false;
			this.trainOffsetX = -this.currentOne*this.width;
			this.isDown = true;
			this.touchStartTime = new Date().getTime();
			
			this.X0 = this.X1 = e.originalEvent? e.originalEvent.changedTouches[0].pageX : e.changedTouches[0].pageX;
			this.Y1 = e.originalEvent? e.originalEvent.changedTouches[0].pageY : e.changedTouches[0].pageY;
			
			if( this.carousel===true ){
				if( this.currentOne===0 ){
					this.items.eq( this.last ).prependTo( this.train );
					this.trainOffsetX = -this.width;
					this.train.css({
						transition: '0s',
						transform: 'translate3d('+this.trainOffsetX+'px,0,0)'
					})
				}else if( this.currentOne===this.last ){
					this.items.eq(0).appendTo(this.train);
					this.train.css({
						transition: '0s',
						'padding-left': this.width+'px'
					})
				}
			}
		};
	},
	ontouchmove: function(e){
		if( this.isDown ){
			this.X2 = e.originalEvent? e.originalEvent.changedTouches[0].pageX : e.changedTouches[0].pageX;
			this.Y2 = e.originalEvent? e.originalEvent.changedTouches[0].pageY : e.changedTouches[0].pageY;
			var distanceY = this.Y2 - this.Y1;
			var distance = this.X2 - this.X1;
			this.X1 = this.X2;

			this.moveCount++;
			if( this.moveCount===1 ){
				if( Math.abs(distance)<Math.abs(distanceY) ){
					this.scrolling = true;
				}
			}

			this.trainOffsetX += distance;
			this.itemOffsetX += distance;
			this.currentItemScale += 0.2*distance/this.width;
			this.otherItemScale = (this.otherItemScale!==1)?(0.8+( 0.2*Math.abs(this.itemOffsetX)/this.width )):1;


			if( this.scrolling ){
				
			}else{
				//e.preventDefault();
				this.scrollPrevented = true;
				if( this.sticky ){
					//The train will move.
					this.train.css({
						transition: '0s',
						transform: 'translate3d('+this.trainOffsetX+'px,0,0)'
					})
				};
			}
		};
	},
	ontouchend: function(e){
		var self = this;
		if( this.isDown ){
			if(!this.switching&&!this.scrolling){
				this.switching = true;
				this.touchEndTime = new Date().getTime();
				var timeSpan = this.touchEndTime - this.touchStartTime;
				//console.log( timeSpan );
				this.X2 = e.originalEvent? e.originalEvent.changedTouches[0].pageX : e.changedTouches[0].pageX;
				var distance = this.X2 - this.X0;
				
				if( this.carousel===false ){
					if( distance<0 ){
						this.currentOne = this.currentOne===this.last? this.last:this.currentOne+1 ;
					}else if( distance>0 ){
						this.currentOne = this.currentOne===0? 0:this.currentOne-1;
					}
					this.toItem( this.currentOne );
					this.isDown = false;
				}else{
					if( true||( timeSpan<200||distance<-0.25*this.width||distance>0.25*this.width ) ){
						if( distance<0 ){
							//$$target = $$currentOne===$$length-1? 0:$$currentOne++ ;
							this.currentOne++;
							if( this.currentOne===this.length ){
								this.currentOne = 0;
							}
							this.state = 'toNext';
						}else if( distance>0 ){
							//$$target = $$currentOne===0? $$length-1:$$currentOne--;
							this.currentOne--;
							if( this.currentOne===-1 ){
								this.currentOne = this.length-1;
							}
							this.state = 'toPrev';
						}
					}
					this.renderTabs();
					//console.log($$currentOne)
					if( this.carousel===true&&this.currentOne===0&&distance<0 ){
						this.trainOffsetX = -this.length*this.width;
						this.train.css({
							transition: '0.3s',
							transform: 'translate3d('+this.trainOffsetX+'px,0,0)'
						})
						setTimeout(function(){
							self.items.eq(0).prependTo( self.train );
							self.trainOffsetX = 0;
							self.train.css({
								transition: '0s',
								transform: 'translate3d('+self.trainOffsetX+'px,0,0)',
								'padding-left': '0px'
							})
						},300);
					}else if( self.carousel===true&&self.currentOne===self.length-2&&distance>0 ){
						self.trainOffsetX = -(self.length-2)*self.width;
						self.train.css({
							transition: '0.3s',
							transform: 'translate3d('+self.trainOffsetX+'px,0,0)'
						})
						setTimeout(function(){
							self.items.eq(0).prependTo( self.train );
							self.train.css({
								transition: '0s',
								'padding-left': '0px'
							})
						},300);				
					}else if( self.carousel===true&&self.currentOne===self.last&&distance>0 ){
						self.trainOffsetX = 0;
						self.train.css({
							transition: '0.3s',
							transform: 'translate3d('+self.trainOffsetX+'px,0,0)'
						})
						setTimeout(function(){
							self.items.eq( self.last ).appendTo( self.train );
							self.trainOffsetX = -(self.length-1)*self.width;
							self.train.css({
								transition: '0s',
								transform: 'translate3d('+self.trainOffsetX+'px,0,0)'
							})
						},300);
					}else if( self.carousel===true&&self.currentOne===1&&self.state==='toNext' ){
						self.trainOffsetX = -2*self.width;
						self.train.css({
							transition: '0.3s',
							transform: 'translate3d('+self.trainOffsetX+'px,0,0)'
						})
						setTimeout(function(){
							self.items.eq( self.last ).appendTo( self.train );
							self.trainOffsetX = -self.width;
							self.train.css({
								transition: '0s',
								transform: 'translate3d('+self.trainOffsetX+'px,0,0)'
							})
						},300);
					}else{
						self.toItem( self.currentOne );
						self.isDown = false;
					}
				}
				setTimeout(function(){
					self.switching = false;
				},300)
			}	
		};
	}
}