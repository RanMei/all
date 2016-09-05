(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('./rem.js');

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
		items: ['red', 'orange', 'yellow', 'green', 'blue']
	},
	methods: {
		init: function init() {
			var _this = this;

			window.addEventListener('load', function () {
				_this.setWidth();
				_this.trainOffsetX = -_this.width * 2;
			});
			window.addEventListener('resize', function () {
				setTimeout(function () {
					_this.setWidth();
					_this.trainOffsetX = -_this.width * 2;
				}, 50);
			});
		},
		setWidth: function setWidth() {
			this.transition = false;
			var elem = document.querySelectorAll('.swiper')[0];
			var width = document.defaultView.getComputedStyle(elem).width.replace(/px/, '');
			this.width = width;
		},
		touchstart: function touchstart(e) {
			if (this.switching === false) {
				this.inCycle = true;
				// reset states of this touch cycle
				this.moveCount = 0;
				this.scrolling = false;
				this.transition = false;

				this.X0 = this.X1 = e.changedTouches[0].pageX;
				this.Y1 = e.changedTouches[0].pageY;
			};
		},
		touchmove: function touchmove(e) {
			if (this.inCycle) {
				this.X2 = e.changedTouches[0].pageX;
				var distance = this.X2 - this.X1;
				this.X1 = this.X2;
				this.trainOffsetX += distance;
			}
		},
		touchend: function touchend(e) {
			var _this2 = this;

			if (this.inCycle) {
				this.X2 = e.changedTouches[0].pageX;
				var distance = this.X2 - this.X0;
				this.switching = true;
				if (distance < 0) {
					if (this.currentOne < this.items.length - 1) {
						this.currentOne++;
						this.transition = true;
						this.trainOffsetX = -this.width * 3;
					}
					setTimeout(function () {
						_this2.transition = false;
						var first = _this2.items[0];
						_this2.items.splice(0, 1);
						_this2.items.push(first);
						_this2.currentOne = 2;
						_this2.trainOffsetX = -_this2.width * 2;
						_this2.switching = false;
					}, 500);
				} else if (distance > 0) {
					if (this.currentOne > 0) {
						this.currentOne--;
						this.transition = true;
						this.trainOffsetX = -this.width;
					};
					setTimeout(function () {
						_this2.transition = false;
						var zz = _this2.items.length - 1;
						var last = _this2.items[zz];
						_this2.items.splice(zz, 1);
						_this2.items.unshift(last);
						_this2.currentOne = 2;
						_this2.trainOffsetX = -_this2.width * 2;
						_this2.switching = false;
					}, 500);
				};
				this.inCycle = false;
			};
		}
	}
});

swiper.init();

},{"./rem.js":2}],2:[function(require,module,exports){
'use strict';

document.addEventListener('DOMContentLoaded', function () {

	var $html = document.querySelector('html');
	var $body = document.querySelector('body');
	var $screen = document.createElement('div');

	$screen.style.cssText += 'position:fixed; width:100%; height:100%; display:none;';
	$body.insertBefore($screen, $body.firstChild);

	function setRem() {
		$screen.style.display = 'block';
		var w = Number(document.defaultView.getComputedStyle($screen).width.replace(/px/, ''));
		var h = Number(document.defaultView.getComputedStyle($screen).height.replace(/px/, ''));
		$screen.style.display = 'none';
		$html.style.fontSize = 100 * w / 720 + 'px';
		//document.getElementsByClassName('container')[0].style.height = h+'px';
		console.log('rem: Size of the viewport is ' + w + '*' + h + '.');
	}
	setRem();
	window.addEventListener('resize', setRem);
});

},{}]},{},[1]);
