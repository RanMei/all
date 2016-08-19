(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('./rem.js');

var app = new Vue({
	el: 'body',
	data: {
		over: false,
		loggedIn: false,
		myName: '--',
		myCoin: '--',
		myRanking: '--',
		list: [],
		timeleft: {
			days: '--',
			hours: '--',
			minutes: '--'
		}
	},
	methods: {
		init: function init() {
			this.initCountdown(1000000000);
			this.updateList();
		},
		toSignin: function toSignin() {
			this.loggedIn = true;
			this.myName = 'Jon Snow';
			this.myCoin = 1000;
			this.myRanking = 1;
		},
		initCountdown: function initCountdown(time) {
			var self = this;
			self.updateTimeLeft(time);
			setInterval(function () {
				time -= 60000;
				self.updateTimeLeft(time);
			}, 60000);
		},
		updateTimeLeft: function updateTimeLeft(time) {
			var _days = time / 1000 / 3600 / 24;
			var days = Math.floor(_days);
			var _hours = (_days - days) * 24;
			var hours = Math.floor(_hours);
			var minutes = Math.floor((_hours - hours) * 60);
			this.timeleft.days = days < 10 ? '0' + days : days;
			this.timeleft.hours = hours < 10 ? '0' + hours : hours;
			this.timeleft.minutes = minutes < 10 ? '0' + minutes : minutes;
		},
		updateList: function updateList() {
			for (var i = 0; i < 15; i++) {
				this.list.push({
					name: 'Aegon',
					coin: 22222
				});
			}
		}
	}
});
app.init();

var swiper = new Vue({
	el: '.swiper',
	data: {
		switching: false,
		isDown: false,
		moveCount: 0,
		scrolling: false,
		trainOffsetX: 0,

		currentOne: 0,
		offset: 0
	},
	methods: {
		touchstart: function touchstart() {
			if (this.switching === false) {
				this.isDown = true;
				// reset states of this touch cycle
				this.moveCount = 0;
				this.scrolling = false;
				this.trainOffsetX = -this.currentOne * this.width;

				this.T0 = new Date().getTime();

				this.X0 = this.X1 = e.originalEvent ? e.originalEvent.changedTouches[0].pageX : e.changedTouches[0].pageX;
				this.Y1 = e.originalEvent ? e.originalEvent.changedTouches[0].pageY : e.changedTouches[0].pageY;

				if (this.carousel) {
					this.trainOffsetX = 0;
				}
			};
		}
	}
});

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
