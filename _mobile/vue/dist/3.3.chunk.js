webpackJsonp([3],[
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
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(13);
	__vue_script__ = __webpack_require__(14);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\lib\\CardsTwo.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(15);
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
	    var id = "_v-8f483492/CardsTwo.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 13 */
1,
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: ['act'],
		data: function data() {
			return {
				papers: [{
					status: ''
				}, {
					status: ''
				}],

				moveCount: 0,
				canScroll: true,

				X0: null,
				X1: null,
				Y0: null,
				Y1: null
			};
		},
		mounted: function mounted() {
			var self = this;
			self.papers[0].status = 'next';
			self.papers[1].status = 'first';
		},
		methods: {
			touchstart: function touchstart(e) {
				this.moveCount = 0;
				this.canScroll = true;
				this.X0 = e.changedTouches[0].pageX;
				this.Y0 = e.changedTouches[0].pageY;
				console.log(this.X0);
			},
			touchmove: function touchmove(e) {
				this.moveCount++;
				if (this.moveCount === 1) {
					this.X1 = e.changedTouches[0].pageX;
					this.Y1 = e.changedTouches[0].pageY;
					var dY = this.Y1 - this.Y0;
					var dX = this.X1 - this.X0;
					if (Math.abs(dY) > Math.abs(dX)) {
						this.canScroll = true;
					} else {
						this.canScroll = false;
					}
				};
				if (!this.canScroll) {
					e.preventDefault();
				}
			},
			touchend: function touchend(e) {
				if (!this.canScroll) {
					this.X1 = e.changedTouches[0].pageX;
					var dX = this.X1 - this.X0;
					if (dX < 0) {
						this.switch__();
					}
				}
			},
			switch__: function switch__() {
				if (this.papers[0].status === 'enter') {
					this.papers[0].status = 'leave';
					this.papers[1].status = 'enter';
				} else {
					this.papers[0].status = 'enter';
					this.papers[1].status = 'leave';
				}
			}
		}
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"CardsTwo\" @touchstart=\"touchstart($event)\" @touchmove=\"touchmove($event)\" @touchend=\"touchend($event)\" @touchcancel=\"touchend($event)\" _v-8f483492=\"\">\n\t<div class=\"paper__\" :class=\"a.status\" v-for=\"(a,i) in papers\" _v-8f483492=\"\">\n\t\t\n\t</div>\n</div>\n";

/***/ },
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(25);
	__vue_script__ = __webpack_require__(26);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\lib\\3dCube.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(27);
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
	    var id = "_v-2e4af9d8/3dCube.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 25 */
1,
/* 26 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {
				rotationRate: {
					alpha: '111'
				},
				rotateX: 0,
				rotateY: 0,
				recalibrating: false
			};
		},
		created: function created() {
			var self = this;
			if (window.DeviceMotionEvent) {
				window.addEventListener('devicemotion', self.handler.bind(self), false);
			} else {
				console.log('Sorry, your browser doesn\'t support DeviceMotionEvent.');
			}
		},
		methods: {
			recalibrate: function recalibrate(e) {
				var _this = this;

				this.recalibrating = true;
				this.rotateX = 0;
				this.rotateY = 0;
				setTimeout(function () {
					_this.recalibrating = false;
				}, 1000);
			},
			handler: function handler(e) {
				if (!this.recalibrating) {
					this.rotationRate.alpha = e.rotationRate.alpha;

					var nextX = this.rotateX - e.rotationRate.alpha * 3;

					this.rotateX = nextX;

					var nextY = this.rotateY + e.rotationRate.beta * 3;

					this.rotateY = nextY;
				}
			}
		}
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"CubeWhite\" _v-2e4af9d8=\"\">\n\t<div class=\"space3d\" _v-2e4af9d8=\"\">\n\t\t<div class=\"cube\" :class=\" recalibrating?'recalibrating':'' \" @click=\"recalibrate\" :style=\" 'transform: rotateX('+rotateX+'deg) rotateY('+rotateY+'deg);-webkit-transform:rotateX('+rotateX+'deg) rotateY('+rotateY+'deg);'  \" _v-2e4af9d8=\"\">\n\t\t\t<div class=\"face face-front\" _v-2e4af9d8=\"\"></div>\n\t\t\t<div class=\"face face-top\" _v-2e4af9d8=\"\"></div>\n\t\t\t<div class=\"face face-bottom\" _v-2e4af9d8=\"\"></div>\n\t\t\t<div class=\"face face-left\" _v-2e4af9d8=\"\"></div>\n\t\t\t<div class=\"face face-right\" _v-2e4af9d8=\"\"></div>\n\t\t\t<div class=\"face face-back\" _v-2e4af9d8=\"\"></div>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ }
]);