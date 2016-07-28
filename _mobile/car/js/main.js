import {_} from './_.js';
import {Canvas} from './Canvas.js';

var App = function(canvas){
	this.y = 0;
	this.dy = 0;
	this.canvas = canvas;
	this.width = window.innerWidth;
}

App.prototype = {
	init: function(){
		var self = this;
		document.addEventListener('touchstart',function(e){
			clearInterval(self.interval);
			self.t0 = new Date().getTime();
			self.y0 = self.y1 = e.changedTouches[0].pageY;
		})
		document.addEventListener('touchmove',function(e){
			self.y2 = e.changedTouches[0].pageY;
			self.dy = Math.round( (self.y2 - self.y1)/self.width*2000 );
			self.y += self.dy;
			if( self.y<=0 ){self.y = 0}
			self.y1 = self.y2;
			//console.log(self.dy,self.y);
			self.canvas.render(self.y,self.dy);
		})
		document.addEventListener('touchend',function(e){
			self.t1 = new Date().getTime();
			self.y2 = self.y2 = e.changedTouches[0].pageY;
			if( (self.y2-self.y0>20)&&(self.t1-self.t0<200) ){
				self.scroll();
			}
		})
		//window.addEventListener('resize',self.onResize.bind(self));
		self.onResize();
	},
	scroll: function(){
		var self = this;
		self.interval = setInterval(function(){
			self.dy = Math.round( 8/self.width*2000 );
			self.y += self.dy;
			self.canvas.render(self.y,self.dy);
		},33)
	},
	onResize: function(){
		var self = this;
		self.canvas.render(self.y,self.dy)
	}
}




var canvas = new Canvas({
	elem: document.getElementById('canvas'),
	width: 2000,
	height: 6000,
	imgs: {
		road: ['img/road.jpg',1200,451],
		car: ['img/car.png',505,851],
		shape: ['img/shape.png',640,988,-3200],
		title: ['img/seat-1.png',640,540,-2000],
		lamp: ['img/lamp.png',640,357,-2000]
	}
});


canvas.lineX = -250;
//canvas.pattern = canvas.ctx.createPattern(canvas.img.road);

canvas.render = function(y,dy){
	console.log(y,dy)
	// console.log(this.img.car)
	var ctx = this.ctx;
	var width = this.canvas.width;
	var shape = this.img.shape;
	var title = this.img.title;
	var lamp = this.img.lamp;
	
	ctx.clearRect( 0, 0, this.canvas.width, this.canvas.height )

	// ctx.fillStyle = 'red';
	// ctx.rect(0,0,100,100);
	// ctx.fill();

	for( var i=-5;i<15;i++ ){
		ctx.drawImage(
			this.img.road, 0, y-i*this.canvas.width*this.img.road.r, this.canvas.width, this.canvas.width*this.img.road.r
		)
	}

	ctx.drawImage(
		this.img.car, this.canvas.width/2.7, 800, this.canvas.width/2, this.canvas.width/2*this.img.car.r
	)

	if( y>0&&y<10000 ){

		if( y>3400&&y<=7000 ){
			shape.cy = 200;
		}else{
			shape.cy += dy;
		}
		
		console.log(shape.cy)

		ctx.drawImage(
			shape, 0, shape.cy, this.canvas.width, this.canvas.width*shape.r
		)

	};
	
	if( y>8000 ){
		var cy = -10000 + y;
		ctx.drawImage(
			lamp, 0, cy, width, width*lamp.r
		)

		var cy = cy + 335;
		this.lineX += dy/6;

		ctx.beginPath();
		ctx.moveTo(this.lineX,cy);
		ctx.lineTo(this.lineX+this.canvas.width,cy-300);
		ctx.lineTo(this.lineX+this.canvas.width,cy-300-150);
		ctx.lineTo(this.lineX,cy-150);
		ctx.closePath();
		ctx.fillStyle = 'silver';
		ctx.fill();
	}
}

canvas.init();

var app = new App(canvas);
app.init();