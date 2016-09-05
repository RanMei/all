(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert(".box[_v-0dd49fe6] {\n  width: 4rem;\n  height: 2rem;\n  overflow: hidden;\n}\n.box .item[_v-0dd49fe6] {\n  float: left;\n}\n")
'use strict';

var box = {
	data: function data() {
		return {
			color: 'red',
			items: [0, 1, 2]
		};
	},
	ready: function ready() {},
	methods: {
		change: function change() {
			this.color = 'orange';
		}
	}
};
module.exports = box;
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"box\" style=\"background:{{color}}\" v-on:click=\"change\" _v-0dd49fe6=\"\">\n\t<div class=\"item\" v-for=\"item in items\" _v-0dd49fe6=\"\">{{item}}</div>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache[".box[_v-0dd49fe6] {\n  width: 4rem;\n  height: 2rem;\n  overflow: hidden;\n}\n.box .item[_v-0dd49fe6] {\n  float: left;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-0dd49fe6", module.exports)
  } else {
    hotAPI.update("_v-0dd49fe6", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":7,"vue-hot-reload-api":6,"vueify/lib/insert-css":8}],2:[function(require,module,exports){
// import './rem.js';
// import {swiper} from './swiper.vue';

require('./rem.js');
var swiper = require('./swiper.vue');
var box = require('./box.vue');

new Vue({
  el: 'body',
  components: {
  	swiper: swiper,
    box: box
  }
})
},{"./box.vue":1,"./rem.js":3,"./swiper.vue":4}],3:[function(require,module,exports){
document.addEventListener('DOMContentLoaded',function(){
	
	var $html = document.querySelector('html');
	var $body = document.querySelector('body');
	var $screen = document.createElement('div');
	
	$screen.style.cssText += 'position:fixed; width:100%; height:100%; display:none;';
	$body.insertBefore($screen,$body.firstChild);
	
	function setRem(){
		$screen.style.display = 'block';
		var w = Number( document.defaultView.getComputedStyle( $screen ).width.replace(/px/,'') );
		var h = Number( document.defaultView.getComputedStyle( $screen ).height.replace(/px/,'') );
		$screen.style.display = 'none';
		$html.style.fontSize = 100*w/720+'px';
		//document.getElementsByClassName('container')[0].style.height = h+'px';
		console.log( 'rem: Size of the viewport is '+w+'*'+h+'.' );
	}
	setRem();
	window.addEventListener('resize',setRem);

})
},{}],4:[function(require,module,exports){
var __vueify_insert__ = require("vueify/lib/insert-css")
var __vueify_style__ = __vueify_insert__.insert(".swiper[_v-757561a6] {\n  position: relative;\n  margin: auto;\n}\n.swiper .train[_v-757561a6] {\n  width: 1000%;\n  height: 100%;\n}\n.swiper .train .item[_v-757561a6] {\n  float: left;\n  width: 10%;\n  height: 100%;\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8);\n  opacity: 0.6;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n.swiper .train .item.active[_v-757561a6] {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  opacity: 1;\n}\n")
'use strict';

var swiper = {
	props: ['bg'],
	data: function data() {
		return {
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
		};
	},
	ready: function ready() {
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
	methods: {
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
};
module.exports = swiper;
if (module.exports.__esModule) module.exports = module.exports.default
;(typeof module.exports === "function"? module.exports.options: module.exports).template = "\n<div class=\"swiper\" style=\"width:3rem;height:2rem;background:{{bg}};\" v-on:touchstart=\"touchstart($event)\" v-on:touchmove=\"touchmove($event)\" v-on:touchend=\"touchend($event)\" _v-757561a6=\"\">\n\t<ul class=\"train\" style=\"transform:translate3d({{trainOffsetX}}px,0,0);{{transition===true?'transition:0.5s':''}};}}\" _v-757561a6=\"\">\n\t\t<li class=\"item {{i===currentOne?'active':''}}\" v-for=\"(i,item) in items\" style=\"background:{{item}};\" _v-757561a6=\"\"></li>\n\t</ul>\n</div>\n"
if (module.hot) {(function () {  module.hot.accept()
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), true)
  if (!hotAPI.compatible) return
  module.hot.dispose(function () {
    __vueify_insert__.cache[".swiper[_v-757561a6] {\n  position: relative;\n  margin: auto;\n}\n.swiper .train[_v-757561a6] {\n  width: 1000%;\n  height: 100%;\n}\n.swiper .train .item[_v-757561a6] {\n  float: left;\n  width: 10%;\n  height: 100%;\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8);\n  opacity: 0.6;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n.swiper .train .item.active[_v-757561a6] {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  opacity: 1;\n}\n"] = false
    document.head.removeChild(__vueify_style__)
  })
  if (!module.hot.data) {
    hotAPI.createRecord("_v-757561a6", module.exports)
  } else {
    hotAPI.update("_v-757561a6", module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
  }
})()}
},{"vue":7,"vue-hot-reload-api":6,"vueify/lib/insert-css":8}],5:[function(require,module,exports){

},{}],6:[function(require,module,exports){


},{}],7:[function(require,module,exports){


},{"_process":5}],8:[function(require,module,exports){
var inserted = exports.cache = {}

exports.insert = function (css) {
  if (inserted[css]) return
  inserted[css] = true

  var elem = document.createElement('style')
  elem.setAttribute('type', 'text/css')

  if ('textContent' in elem) {
    elem.textContent = css
  } else {
    elem.styleSheet.cssText = css
  }

  document.getElementsByTagName('head')[0].appendChild(elem)
  return elem
}

},{}]},{},[2]);
