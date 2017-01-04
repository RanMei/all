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
	    var id = "_v-59cb1214/CardsTwo.vue";
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

	module.exports = "\n<div class=\"CardsTwo\" @touchstart=\"touchstart($event)\" @touchmove=\"touchmove($event)\" @touchend=\"touchend($event)\" @touchcancel=\"touchend($event)\" _v-59cb1214=\"\">\n\t<div class=\"paper__\" :class=\"a.status\" v-for=\"(a,i) in papers\" _v-59cb1214=\"\">\n\t\t\n\t</div>\n</div>\n";

/***/ },
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(21);
	__vue_script__ = __webpack_require__(22);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\lib\\Wave.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(23);
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
	    var id = "_v-693ac086/Wave.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 21 */
1,
/* 22 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {};
		}
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"Wave\" _v-693ac086=\"\">\n\t<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" style=\"display: none;\" _v-693ac086=\"\">\n\t\t<symbol id=\"wave\" _v-693ac086=\"\">\n\t\t\t<path d=\"M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z\" _v-693ac086=\"\"></path>\n\t\t\t<path d=\"M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z\" _v-693ac086=\"\"></path>\n\t\t\t<path d=\"M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z\" _v-693ac086=\"\"></path>\n\t\t\t<path d=\"M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z\" _v-693ac086=\"\"></path>\n\t\t</symbol>\n\t</svg>\n\n\t<svg class=\"WATER\" viewBox=\"0 0 560 20\" _v-693ac086=\"\">\n\t\t<use xlink:href=\"#wave\" _v-693ac086=\"\"></use>\n\t</svg>\n\t\n\t<div class=\"box\" _v-693ac086=\"\">\n\t\t<!-- <div class=\"percent\">\n\t\t\t<div class=\"percentNum\" id=\"count\">0</div>\n\t\t\t<div class=\"percentB\">%</div>\n\t\t</div> -->\n\t\t<div id=\"water\" class=\"water\" _v-693ac086=\"\">\n\t\t\t<svg class=\"wave wave_back\" viewBox=\"0 0 560 20\" _v-693ac086=\"\">\n\t\t\t\t<use xlink:href=\"#wave\" _v-693ac086=\"\"></use>\n\t\t\t</svg>\n\t\t\t<svg class=\"wave wave_front\" viewBox=\"0 0 560 20\" _v-693ac086=\"\">\n\t\t\t\t<use xlink:href=\"#wave\" _v-693ac086=\"\"></use>\n\t\t\t</svg>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ }
]);