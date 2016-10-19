import {Canvas} from './Canvas.js';

function Drop(host){
	var self = this;
	this.w = host.width;
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

class Rain extends Canvas {
	constructor(options){
		super(options);
		this.drops = [];
		this.splashes = [];

		for(var key in options.data){
			this[key] = options.data[key];
		}

		this._init(options);
	}
	listen(){
		
	}
	beforePlay(){
		this.createDrops();
	}
	createDrops(){
		for(var i=0;i<this.dropCount;i++){
			this.drops[i] = new Drop(this);
		}
	}
	render(){
		//console.log(111)
		var self = this;
		var ctx = this.ctx;
		ctx.globalCompositeOperation = 'source-over';
		ctx.fillStyle = 'rgba(0,0,0,0.5)';
		ctx.fillRect( 0,0,this.width,this.height );
		ctx.globalCompositeOperation = 'lighter';

		self.drops.forEach(function(drop,i){
			drop.draw();
			drop.step();			
			if( drop.y>self.height ){
				self.drops[i] = new Drop(self);
				self.splashes.push( new Splash(drop.x,self.height,self) );
			}
		})
		self.splashes.forEach(function(splash,i){
			splash.draw();
			splash.step();
			if( splash.life<=0 ){
				self.splashes.splice(i,1);
			}
		})
	}
}

export {Rain};