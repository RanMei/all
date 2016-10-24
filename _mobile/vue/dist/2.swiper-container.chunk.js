webpackJsonp([2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
		components: {
			swiper: __webpack_require__(11)
		},
		template: '\n\t\t<div style="width:100%;height:100vh;background:black;overflow:hidden">\n\t\t\t<swiper :items="items"></swiper>\n\t\t</div>\n\t',
		data: function data() {
			return {
				items: [{
					background: 'red'
				}, {
					background: 'orange'
				}, {
					background: 'yellow'
				}, {
					background: 'green'
				}, {
					background: 'blue'
				}]
			};
		}
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(12);
	__vue_script__ = __webpack_require__(13);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\components\\swiper.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(14);
	module.exports = __vue_script__ || {};
	if (module.exports.__esModule) module.exports = module.exports.default;
	var __vue_options__ = typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports;
	if (__vue_template__) {
	  __vue_options__.template = __vue_template__;
	}
	if (!__vue_options__.computed) __vue_options__.computed = {};
	Object.keys(__vue_styles__).forEach(function (key) {
	  var module = __vue_styles__[key];
	  __vue_options__.computed[key] = function () {
	    return module;
	  };
	});
	if (false) {
	  (function () {
	    module.hot.accept();
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    var id = "_v-01d39757/swiper.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 12 */
74,
/* 13 */
/***/ function(module, exports) {

	'use strict';

	// <template>
	// <div class="swiper"
	// 	:style="style"
	// 	v-on:touchstart="touchstart($event)"
	// 	v-on:touchmove="touchmove($event)"
	// 	v-on:touchend="touchend($event)">
	// 	<ul class="train"
	// 		:style=" 'transform:translate3d('+trainOffsetX+'px,0,0);transition:'+transition+';' ">
	// 		<li :class=" 'item '+(i===currentOne?'active':'') "
	// 			v-for="(item,i) in copy"
	// 			:key="item.background"
	// 			:style=" `background:${item.background}` "></li>
	// 	</ul>
	// </div>
	// </template>
	//
	// <style lang="less" scoped>
	// .swiper {
	// 	position: relative;
	// 	width: 50%; height: 20vw;
	// 	background: grey;
	// 	margin: auto;
	// 	.train {
	// 		width: 1000%;
	// 		height: 100%;
	// 		.item {
	// 			float: left;
	// 			width: 10%; height: 100%;
	// 			transform: scale(0.8);
	// 			opacity: 0.6;
	// 			transition: 0.5s;
	// 		}
	// 		.item.active {
	// 			transform: scale(1);
	// 			opacity: 1;
	// 		}
	// 	}
	// }
	// </style>
	//
	// <script>
	var swiper = {
		props: {
			items: {
				default: function _default() {
					return [];
				}
			},
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

				copy: [],

				switching: false,
				inCycle: false,
				moveCount: 0,
				scrolling: false,
				trainOffsetX: 0,
				X1: 0,
				X2: 0,

				currentOne: 2,
				transition: '0s',
				offset: 0
			};
		},
		computed: {
			transform: function transform() {
				return 'translate3d(' + trainOffsetX + 'px,0,0)';
			}
		},
		watch: {
			items: function items() {
				this.copy = this.items;
			}
		},
		mounted: function mounted() {
			var _this = this;

			this.copy = JSON.parse(JSON.stringify(this.items));
			//window.addEventListener('load',()=>{
			this.setWidth();
			this.trainOffsetX = -this.width * 2;
			//});
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

				if (this.currentOne < this.copy.length - 1) {
					this.currentOne++;
					this.transition = '0.3s';
					this.trainOffsetX = -this.width * 3;
				}
				setTimeout(function () {
					_this2.transition = '0s';
					var first = _this2.copy[0];
					_this2.copy.splice(0, 1);
					_this2.copy.push(first);
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
					var zz = _this3.copy.length - 1;
					var last = _this3.copy[zz];
					_this3.copy.splice(zz, 1);
					_this3.copy.unshift(last);
					_this3.currentOne = 2;
					_this3.trainOffsetX = -_this3.width * 2;
					_this3.switching = false;
				}, this.duration);
			},
			touchstart: function touchstart(e) {
				console.log(this.switching);
				if (this.switching === false) {
					this.inCycle = true;
					// reset states of this touch cycle
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
	// </script>

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"swiper\" :style=\"style\" v-on:touchstart=\"touchstart($event)\" v-on:touchmove=\"touchmove($event)\" v-on:touchend=\"touchend($event)\" _v-01d39757=\"\">\n\t<ul class=\"train\" :style=\" 'transform:translate3d('+trainOffsetX+'px,0,0);transition:'+transition+';' \" _v-01d39757=\"\">\n\t\t<li :class=\" 'item '+(i===currentOne?'active':'') \" v-for=\"(item,i) in copy\" :key=\"item.background\" :style=\" `background:${item.background}` \" _v-01d39757=\"\"></li>\n\t</ul>\n</div>\n";

/***/ }
]);