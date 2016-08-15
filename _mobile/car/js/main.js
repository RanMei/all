import {_} from './_.js';
import {Canvas} from './Canvas.js';

var App = function(){
	this.y = 0;
	this.dy = 0;
	this.canvas = null;
	this.width = window.innerWidth;
	this.init();
}

App.prototype = {
	init: function(){
		var self = this;
		self.initCanvas();
		self.listen();
	},
	initCanvas: function(){
		this.canvas = new Canvas({
			elem: document.getElementById('canvas'),
			width: 2000,
			height: 6000,
			imgs: {
				road: ['img/road.jpg',1200,451],
				car: ['img/car.png',505,851],
				shape: ['img/shape.png',640,533,-3200],
				bg: ['img/bg.png',640,559],
				title: ['img/seat-1.png',640,540,-2000],
				lamp: ['img/lamp.png',640,357,-2000],
				lamp1: ['img/lamp1.jpg',958,719]
			}
		});
		this.canvas.render(this.y,this.dy);
	},
	listen: function(){
		var self = this;
		document.addEventListener('touchstart',function(e){
			clearInterval(self.interval);
			self.t0 = new Date().getTime();
			self.y0 = self.y1 = e.changedTouches[0].pageY;
		})
		document.addEventListener('touchmove',function(e){
			self.y2 = e.changedTouches[0].pageY;
			self.dy = Math.round( 2*(self.y2 - self.y1)/self.width*2000 );
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
				self.autoScroll();
			}
		})
	},
	autoScroll: function(){
		var self = this;
		self.interval = setInterval(function(){
			self.dy = Math.round( 20/self.width*2000 );
			self.y += self.dy;
			self.canvas.render(self.y,self.dy);
		},33)
	},
	onResize: function(){
		var self = this;
		self.canvas.render(self.y,self.dy)
	}
}

window.onload = function(){
	var app = new App();
}