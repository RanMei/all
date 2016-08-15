(function(){

	function Drop(host){
		var self = this;
		this.w = host.w;
		this.ctx = host.ctx;
		this.x = Math.random()*this.w;
		this.y = -Math.random()*800;
		//this.lightness = 50;
		this.a = 0.7 + Math.random()*0.3;
		this.minus = true;
		this.color = 'rgba(0,94,255,'+this.a+')';//'hsl(250,100%,'+this.lightness+'%)';
		this.speed = 4 + Math.random()*10;
		this.width = (function(){
			if( self.speed<=5 ){
				return 1;
			}else if( self.speed<=12 ){
				return 2;
			}else{
				return 3;
			}
		})();
		this.height = (function(){
			if( self.speed<=5 ){
				return 2;
			}else if( self.speed<=12 ){
				return 4;
			}else{
				return 6;
			}
		})();
	}
	Drop.prototype = {
		step: function(){
			this.y += this.speed;
			// this.lightness -= 0.2;
			// this.color = 'hsl(250,100%,'+this.lightness+'%)';
			if( this.a>=1 ){
				this.minus = true;
			}else if(this.a<=0.7 ){
				this.minus = false;
			}
			if( this.minus===true ){
				this.a -= 0.05;
			}else{
				this.a += 0.05;
			}
			this.color = 'rgba(0,94,255,'+this.a+')';
		},
		draw: function(){
			this.ctx.beginPath();
			this.ctx.fillStyle = this.color;
			this.ctx.fillRect(this.x,this.y,this.width,this.height);
		}
	}

	function Splash(x,y,host){
		this.ctx = host.ctx;
		this.x = x;
		this.y = y;
		this.r = 2;
		this.speedX = Math.random()*6 - 3;
		this.speedY = -Math.random()*3;
		this.life = 30;
		this.color = 'rgba(0,94,255,1)';
	}
	Splash.prototype = {
		draw: function(){
			this.ctx.beginPath();
			this.ctx.fillStyle = this.color;
			this.ctx.arc(this.x, this.y, this.r, Math.PI*2, false);
			this.ctx.fill();
		},
		step: function(){
			this.x += this.speedX;
			this.y += this.speedY;
			this.r += -0.05;
			this.life--;
		}
	}

	function Rain(config){
		this.canvas = config.elem;
		this.ctx = this.canvas.getContext('2d');
		this.w = this.canvas.width = 1000;
		this.h = this.canvas.height = 1000;

		this.drops = [];
		this.dropCount = 500;
		this.splashes = [];

		this.paused = false;

		this.init();
	}
	Rain.prototype = {
		init: function(){
			this.createDrops();
			this.listen();
			this.render();
		},
		createDrops: function(){
			for(var i=0;i<this.dropCount;i++){
				this.drops[i] = new Drop(this);
			}
		},
		reset: function(){
			this.drops = [];
			this.splashes = [];
			this.createDrops();
		},
		play: function(){
			this.paused = false;
			this.render();
		},
		pause: function(){
			this.paused = true;
		},
		listen: function(){
			var self = this;
			self.canvas.addEventListener('click',function(){
				if( self.paused ){
					self.play();
				}else{
					self.pause();
				}
			})
			// self.canvas.addEventListener('click',function(){
			// 	self.reset();
			// })
		},
		render: function(){
			var self = this;

			var ctx = this.ctx;
			ctx.globalCompositeOperation = 'source-over';
			ctx.fillStyle = 'rgba(0,0,0,0.5)';
			ctx.fillRect( 0,0,this.w,this.h );
			ctx.globalCompositeOperation = 'lighter';

			self.drops.forEach(function(drop,i){
				drop.draw();
				drop.step();			
				if( drop.y>self.h ){
					self.drops[i] = new Drop(self);
					self.splashes.push( new Splash(drop.x,self.h,self) );
				}
			})
			self.splashes.forEach(function(splash,i){
				splash.draw();
				splash.step();
				if( splash.life<=0 ){
					self.splashes.splice(i,1);
				}
			})

			if( !self.paused ){
				window.requestAnimationFrame( self.render.bind(self) );
			};
		}
	}

	new Rain({
		elem: document.getElementById('canvas')
	})
	new Rain({
		elem: document.getElementById('canvas2')
	})
	new Rain({
		elem: document.getElementById('canvas3')
	})

})();