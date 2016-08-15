(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Canvas = undefined;

var _2 = require('./_.js');

function Canvas(config) {
	this.canvas = config.elem;
	this.canvas.width = config.width;
	this.canvas.height = config.height;
	this.ctx = this.canvas.getContext('2d');
	this.img = {};
	for (var key in config.imgs) {
		this.img[key] = this.getImage(config.imgs[key][0], config.imgs[key][1], config.imgs[key][2]);
	};
	this.lineX = -250;
	this.carScale = 1;
	this.init();
}

Canvas.prototype = {
	init: function init() {
		// window.addEventListener('resize',this.onResize.bind(this));
		// this.onResize();
	},
	onResize: function onResize() {
		this.canvas.width = _2._.getWidth(this.canvas);
		this.canvas.height = _2._.getHeight(this.canvas);
		//console.log(this.canvas.width,this.canvas.height)
		//this.render();
	},
	getImage: function getImage(src, w, h) {
		var img = new Image();
		img.src = src;
		img.r = h / w;
		return img;
	},
	drawStrip: function drawStrip(x, y) {
		var ctx = this.ctx;
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(x + this.canvas.width, y - 300);
		ctx.lineTo(x + this.canvas.width, y - 300 - 150);
		ctx.lineTo(x, y - 150);
		ctx.closePath();
		ctx.fillStyle = 'silver';
		ctx.fill();
	},
	clip: function clip(x, y, h) {
		var ctx = this.ctx;
		ctx.save();
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(this.canvas.width, y - 350);
		ctx.lineTo(this.canvas.width, y - 350 - h);
		ctx.lineTo(x, y - h);
		// ctx.fillStyle = 'red';
		// ctx.fill();
		ctx.clip();
	},
	render: function render(y, dy) {
		//console.log(y,dy)
		// console.log(this.img.car)
		var ctx = this.ctx;
		var width = this.canvas.width;
		var shape = this.img.shape;
		var bg = this.img.bg;
		var title = this.img.title;
		var lamp = this.img.lamp;
		var lamp1 = this.img.lamp1;
		var road = this.img.road;

		ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		// ctx.fillStyle = 'red';
		// ctx.rect(0,0,100,100);
		// ctx.fill();

		var cy = y % (this.canvas.width * road.r);
		//console.log(cy)
		for (var i = -3; i < 5; i++) {
			ctx.drawImage(this.img.road, 0, cy + i * this.canvas.width * road.r, this.canvas.width, this.canvas.width * this.img.road.r);
		}

		// if( y>10000 ){
		// 	this.carScale-=0.01;
		// 	ctx.scale(this.carScale,this.carScale);
		// }
		ctx.drawImage(this.img.car, width / 2.7, 800, width / 2, width / 2 * this.img.car.r);
		// if( y>10000 ){
		// 	ctx.scale(1/this.carScale,1/this.carScale)
		// }

		if (y >= 0 && y < 12000) {

			var cy = y - 0 - width * shape.r;

			if (y > 3200 && y <= 7000) {
				cy = 3200 - width * shape.r;
			} else if (y > 7000) {
				cy = y - 3200 - width * shape.r;
			}

			if (y > 2200) {}
			ctx.drawImage(bg, 0, cy - 300, width, width * bg.r);
			ctx.drawImage(shape, 0, cy, width, width * shape.r);
		};

		if (y > 8000) {
			var cy = y - 8000 - width * lamp.r;
			ctx.drawImage(lamp, 0, cy, width, width * lamp.r);
			this.clip(0, cy + 350, 1000);
			ctx.drawImage(lamp1, 0, cy - 1000, width, width * lamp1.r);
			ctx.restore();

			var cy = cy + 335;
			this.lineX += dy / 6;

			this.drawStrip(this.lineX, cy);
		}

		ctx.fillStyle = 'red';
		ctx.font = '100px Arial';
		ctx.fillText(y, 100, 100, 100);
		ctx.fillText(dy, 300, 100, 100);
	}
};

exports.Canvas = Canvas;

},{"./_.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
function getWidth(elem) {
	return Number(document.defaultView.getComputedStyle(elem).width.replace(/px/, ''));
}

function getHeight(elem) {
	return Number(document.defaultView.getComputedStyle(elem).height.replace(/px/, ''));
}

var _ = {
	getWidth: getWidth,
	getHeight: getHeight
};

exports._ = _;

},{}],3:[function(require,module,exports){
'use strict';

var _2 = require('./_.js');

var _Canvas = require('./Canvas.js');

var App = function App() {
	this.y = 0;
	this.dy = 0;
	this.canvas = null;
	this.width = window.innerWidth;
	this.init();
};

App.prototype = {
	init: function init() {
		var self = this;
		self.initCanvas();
		self.listen();
	},
	initCanvas: function initCanvas() {
		this.canvas = new _Canvas.Canvas({
			elem: document.getElementById('canvas'),
			width: 2000,
			height: 6000,
			imgs: {
				road: ['img/road.jpg', 1200, 451],
				car: ['img/car.png', 505, 851],
				shape: ['img/shape.png', 640, 533, -3200],
				bg: ['img/bg.png', 640, 559],
				title: ['img/seat-1.png', 640, 540, -2000],
				lamp: ['img/lamp.png', 640, 357, -2000],
				lamp1: ['img/lamp1.jpg', 958, 719]
			}
		});
		this.canvas.render(this.y, this.dy);
	},
	listen: function listen() {
		var self = this;
		document.addEventListener('touchstart', function (e) {
			clearInterval(self.interval);
			self.t0 = new Date().getTime();
			self.y0 = self.y1 = e.changedTouches[0].pageY;
		});
		document.addEventListener('touchmove', function (e) {
			self.y2 = e.changedTouches[0].pageY;
			self.dy = Math.round(2 * (self.y2 - self.y1) / self.width * 2000);
			self.y += self.dy;
			if (self.y <= 0) {
				self.y = 0;
			}
			self.y1 = self.y2;
			//console.log(self.dy,self.y);
			self.canvas.render(self.y, self.dy);
		});
		document.addEventListener('touchend', function (e) {
			self.t1 = new Date().getTime();
			self.y2 = self.y2 = e.changedTouches[0].pageY;
			if (self.y2 - self.y0 > 20 && self.t1 - self.t0 < 200) {
				self.autoScroll();
			}
		});
	},
	autoScroll: function autoScroll() {
		var self = this;
		self.interval = setInterval(function () {
			self.dy = Math.round(20 / self.width * 2000);
			self.y += self.dy;
			self.canvas.render(self.y, self.dy);
		}, 33);
	},
	onResize: function onResize() {
		var self = this;
		self.canvas.render(self.y, self.dy);
	}
};

window.onload = function () {
	var app = new App();
};

},{"./Canvas.js":1,"./_.js":2}]},{},[3]);
