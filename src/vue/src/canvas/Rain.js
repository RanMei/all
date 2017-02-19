//import {Canvas} from './Canvas.js';

function Drop(cv){
	var self = this;
	this.cv = cv;
	this.ctx = cv.$ctx;
	this.spawn();
}
Drop.prototype = {
	spawn: function(){
		this.x = Math.random()*this.cv.$width;
		this.y = -Math.random()*800;
		//this.lightness = 50;
		this.a = 0.7 + Math.random()*0.3;
		this.minus = true;
		this.color = 'rgba(0,94,255,'+this.a+')';//'hsl(250,100%,'+this.lightness+'%)';
		this.speed = Canvas.random(4,14);
		this.width = (function(){
			if( self.speed<=5 ){
				return 1;
			// }else if( self.speed<=12 ){
			// 	return 2;
			}else{
				return 2;
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
	},
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

function Splash(x,y,cv){
	this.ctx = cv.$ctx;
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

var Rain = Canvas.extend({
	props: function(){
		return {
			dropCount: 200
		}
	},
	data: function(){
		return {
			drops: [],
			splashes: []
		}
	},
	beforePlay: function(){
		this.createDrops();
	},
	render: function(){
		var self = this;
		var ctx = this.$ctx;
		ctx.globalCompositeOperation = 'source-over';
		ctx.fillStyle = 'rgba(0,0,0,0.5)';
		ctx.fillRect( 0,0,this.$width,this.$height );
		ctx.globalCompositeOperation = 'lighter';

		self.drops.forEach(function(drop,i){
			drop.step();			
			if( drop.y>self.$height ){
				drop.spawn();
				self.splashes.push( new Splash(drop.x,self.$height,self) );
			}
			drop.draw();
		})
		self.splashes.forEach(function(splash,i){
			splash.draw();
			splash.step();
			if( splash.life<=0 ){
				self.splashes.splice(i,1);
			}
		})
	},
	methods: {
		createDrops: function(){
			for(var i=0;i<this.dropCount;i++){
				this.drops[i] = new Drop(this);
			}
		}
	}
})

module.exports = {
	template: `<canvas id="Rain" ref="canvas" style="display:block;"></canvas>`,
	mounted: function(){
		new Rain({
			el: this.$refs.canvas,
			props: {
				dropCount: 500
			},
			responsive: true
		})
	}
};