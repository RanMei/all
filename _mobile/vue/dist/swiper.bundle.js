webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(9);
	var swiper = __webpack_require__(40);

	Vue.component( 'swiper',swiper );

	new Vue({
		el: 'body',
		components: {
		},
		data: {
		},
		computed: {
		},
		methods: {
		}
	})

/***/ },

/***/ 9:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 40:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(41)
	__vue_script__ = __webpack_require__(43)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\swiper.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(44)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-704a85ef/swiper.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 41:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 43:
/***/ function(module, exports) {

	'use strict';

	var swiper = {
		props: {
			style: {},
			sticky: {
				default: true
			},
			autoplay: {
				default: false
			},
			duration: {
				default: 300
			},
			interval: {
				default: 500
			}
		},
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
				transition: '0s',
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
			if (this.autoplay) {
				setInterval(function () {
					_this.toNext();
				}, this.interval);
			}
		},
		methods: {
			setWidth: function setWidth() {
				this.transition = false;
				var elem = this.$el;
				var width = document.defaultView.getComputedStyle(elem).width.replace(/px/, '');
				this.width = width;
			},
			toNext: function toNext() {
				var _this2 = this;

				if (this.currentOne < this.items.length - 1) {
					this.currentOne++;
					this.transition = '0.3s';
					this.trainOffsetX = -this.width * 3;
				}
				setTimeout(function () {
					_this2.transition = '0s';
					var first = _this2.items[0];
					_this2.items.splice(0, 1);
					_this2.items.push(first);
					_this2.currentOne = 2;
					_this2.trainOffsetX = -_this2.width * 2;
					_this2.switching = false;
				}, this.duration);
			},
			toPrev: function toPrev() {
				var _this3 = this;

				if (this.currentOne > 0) {
					this.currentOne--;
					this.transition = '0.3s';
					this.trainOffsetX = -this.width;
				};
				setTimeout(function () {
					_this3.transition = '0s';
					var zz = _this3.items.length - 1;
					var last = _this3.items[zz];
					_this3.items.splice(zz, 1);
					_this3.items.unshift(last);
					_this3.currentOne = 2;
					_this3.trainOffsetX = -_this3.width * 2;
					_this3.switching = false;
				}, this.duration);
			},
			touchstart: function touchstart(e) {
				console.log(this.switching);
				if (this.switching === false) {
					this.inCycle = true;

					this.moveCount = 0;
					this.scrolling = false;
					this.transition = '0s';

					this.X0 = this.X1 = e.changedTouches[0].pageX;
					this.Y1 = e.changedTouches[0].pageY;
				};
			},
			touchmove: function touchmove(e) {
				if (this.inCycle && !this.scrolling) {
					this.moveCount++;
					if (this.moveCount === 1) {
						this.X2 = e.changedTouches[0].pageX;
						this.Y2 = e.changedTouches[0].pageY;
						var distanceY = this.Y2 - this.Y1;
						var distanceX = this.X2 - this.X1;
						if (Math.abs(distanceY) > Math.abs(distanceX)) {
							this.scrolling = true;
						}
					}

					if (this.sticky) {
						this.X2 = e.changedTouches[0].pageX;
						var distance = this.X2 - this.X1;
						this.X1 = this.X2;
						this.trainOffsetX += distance;
					}
				}
			},
			touchend: function touchend(e) {
				if (this.inCycle && !this.scrolling) {
					this.X2 = e.changedTouches[0].pageX;
					var distance = this.X2 - this.X0;
					if (distance < 0) {
						this.switching = true;
						this.toNext();
					} else if (distance > 0) {
						this.switching = true;
						this.toPrev();
					};
					this.inCycle = false;
				};
			}
		}
	};
	module.exports = swiper;

/***/ },

/***/ 44:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"swiper\" style=\"{{style}}\" v-on:touchstart=\"touchstart($event)\" v-on:touchmove=\"touchmove($event)\" v-on:touchend=\"touchend($event)\" _v-704a85ef=\"\">\n\t<ul class=\"train\" style=\"transform:translate3d({{trainOffsetX}}px,0,0);transition:{{transition}};\" _v-704a85ef=\"\">\n\t\t<li class=\"item {{i===currentOne?'active':''}}\" v-for=\"(i,item) in items\" style=\"background:{{item}};\" _v-704a85ef=\"\"></li>\n\t</ul>\n</div>\n";

/***/ }

});