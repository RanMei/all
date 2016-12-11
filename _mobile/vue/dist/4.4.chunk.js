webpackJsonp([4],[
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
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(17);
	__vue_script__ = __webpack_require__(18);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\lib\\GooeyMenu.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(19);
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
	    var id = "_v-ca5707c8/GooeyMenu.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 17 */
1,
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		mounted: function mounted() {
			function App() {
				this.elem = document.querySelector('#feGB');
				this.init();
			}
			App.prototype = {
				init: function init() {
					this.setStdDeviation();
					window.addEventListener('resize', this.setStdDeviation.bind(this));
				},
				setStdDeviation: function setStdDeviation() {
					var self = this;
					setTimeout(function () {
						self.width = window.innerWidth;
						var deviation = 12 * self.width / 720;
						self.elem.setAttribute('stdDeviation', deviation);
					}, 300);
				}
			};
			new App();
		}
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"GooeyMenuContainer\" _v-ca5707c8=\"\">\n\t<div class=\"GooeyMenu\" _v-ca5707c8=\"\">\n\t\t<!-- CSS Gooey Menu (Version 2) -->\n\t\t<input type=\"checkbox\" href=\"#\" class=\"menu-open\" name=\"menu-open\" id=\"menu-open\" _v-ca5707c8=\"\">\n\t\t<label class=\"menu-open-button\" for=\"menu-open\" _v-ca5707c8=\"\">\n\t\t\t<span class=\"hamburger hamburger-1\" _v-ca5707c8=\"\"></span>\n\t\t\t<span class=\"hamburger hamburger-2\" _v-ca5707c8=\"\"></span>\n\t\t\t<span class=\"hamburger hamburger-3\" _v-ca5707c8=\"\"></span>\n\t\t</label>\n\n\t\t<a class=\"menu-item\" _v-ca5707c8=\"\"> <i class=\"fa fa-bar-chart\" _v-ca5707c8=\"\"></i> </a>\n\t\t<a class=\"menu-item\" _v-ca5707c8=\"\"> <i class=\"fa fa-plus\" _v-ca5707c8=\"\"></i> </a>\n\t\t<a class=\"menu-item\" _v-ca5707c8=\"\"> <i class=\"fa fa-heart\" _v-ca5707c8=\"\"></i> </a>\n\t\t<a class=\"menu-item\" _v-ca5707c8=\"\"> <i class=\"fa fa-envelope\" _v-ca5707c8=\"\"></i> </a>\n\t\t<a class=\"menu-item\" _v-ca5707c8=\"\"> <i class=\"fa fa-cog\" _v-ca5707c8=\"\"></i> </a>\n\t\t<a class=\"menu-item\" _v-ca5707c8=\"\"> <i class=\"fa fa-ellipsis-h\" _v-ca5707c8=\"\"></i> </a>\n\n\t\t<!-- filters -->\n\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 100 100\" _v-ca5707c8=\"\">\n\t\t\t<circle cx=\"50\" cy=\"50\" r=\"20\" fill=\"red\" _v-ca5707c8=\"\"></circle>\n\t\t\t<defs _v-ca5707c8=\"\">\n\t\t\t\t<filter id=\"shadowed-goo\" _v-ca5707c8=\"\">\n\t\t\t\t\t<feGaussianBlur in=\"SourceGraphic\" result=\"blur\" stdDeviation=\"10\" _v-ca5707c8=\"\"></feGaussianBlur>\n\t\t\t\t\t<feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7\" result=\"goo\" _v-ca5707c8=\"\"></feColorMatrix>\n\t\t\t\t\t<feGaussianBlur in=\"goo\" stdDeviation=\"3\" result=\"shadow\" _v-ca5707c8=\"\"></feGaussianBlur>\n\t\t\t\t\t<feColorMatrix in=\"shadow\" mode=\"matrix\" values=\"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2\" result=\"shadow\" _v-ca5707c8=\"\"></feColorMatrix>\n\t\t\t\t\t<feOffset in=\"shadow\" dx=\"1\" dy=\"1\" result=\"shadow\" _v-ca5707c8=\"\"></feOffset>\n\t\t\t\t\t<feComposite in2=\"shadow\" in=\"goo\" result=\"goo\" _v-ca5707c8=\"\"></feComposite>\n\t\t\t\t\t<feComposite in2=\"goo\" in=\"SourceGraphic\" result=\"mix\" _v-ca5707c8=\"\"></feComposite>\n\t\t\t\t</filter>\n\t\t\t\t<filter id=\"goo\" x=\"-300%\" y=\"-300%\" width=\"600%\" height=\"600%\" _v-ca5707c8=\"\">\n\t\t\t\t\t<feGaussianBlur id=\"feGB\" in=\"SourceGraphic\" result=\"blur\" stdDeviation=\"8\" _v-ca5707c8=\"\"></feGaussianBlur>\n\t\t\t\t\t<feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7\" result=\"goo\" _v-ca5707c8=\"\"></feColorMatrix>\n\t\t\t\t\t<feComposite in2=\"goo\" in=\"SourceGraphic\" result=\"mix\" _v-ca5707c8=\"\"></feComposite>\n\t\t\t\t</filter>\n\t\t\t</defs>\n\t\t</svg>\n\t</div>\n</div>\n";

/***/ },
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(37);
	__vue_script__ = __webpack_require__(38);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\lib\\Carousel.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(39);
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
	    var id = "_v-300eafae/Carousel.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 37 */
1,
/* 38 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {
				rotateY: 0
			};
		},
		methods: {
			next: function next() {
				this.rotateY -= 60;
			},
			prev: function prev() {
				this.rotateY += 60;
			}
		}
	};

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Carousel\" _v-300eafae=\"\">\n\t<!-- CSS 3D Carousel -->\n\t<div class=\"cards\" :style=\" 'transform: rotateY('+rotateY+'deg);-webkit-transform: rotateY('+rotateY+'deg);' \" _v-300eafae=\"\">\n\t\t<div class=\"item a\" _v-300eafae=\"\">A</div>\n\t\t<div class=\"item b\" _v-300eafae=\"\">B</div>\n\t\t<div class=\"item c\" _v-300eafae=\"\">C</div>\n\t\t<div class=\"item d\" _v-300eafae=\"\">D</div>\n\t\t<div class=\"item e\" _v-300eafae=\"\">E</div>\n\t\t<div class=\"item f\" _v-300eafae=\"\">F</div>\n\t</div>\n\t<div class=\"next\" @click=\"next\" _v-300eafae=\"\">Next</div>\n\t<div class=\"prev\" @click=\"prev\" _v-300eafae=\"\">Prev</div>\n</div>\n";

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(41);
	__vue_script__ = __webpack_require__(42);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\lib\\StrokeCircle.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(43);
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
	    var id = "_v-36e41714/StrokeCircle.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 41 */
1,
/* 42 */
/***/ function(module, exports) {

	"use strict";

	var strokeCircle = {};
	module.exports = strokeCircle;

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = "\n<svg class=\"test\" viewBox=\"0,0,1000,1000\" pointer-events=\"all\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" _v-36e41714=\"\">\n\t<defs _v-36e41714=\"\">\n\t\t<linearGradient id=\"linearGradient-1\" x1=\"0%\" y1=\"100%\" x2=\"100%\" y2=\"100%\" _v-36e41714=\"\">\n\t\t\t<stop stop-color=\"#2090F8\" offset=\"0%\" _v-36e41714=\"\"></stop>\n\t\t\t<stop stop-color=\"#01FCE4\" offset=\"41.7610013%\" _v-36e41714=\"\"></stop>\n\t\t\t<stop stop-color=\"#0BFF8C\" offset=\"78.6870217%\" _v-36e41714=\"\"></stop>\n\t\t\t<stop stop-color=\"#51FF00\" offset=\"100%\" _v-36e41714=\"\"></stop>\n\t\t</linearGradient>\n\t</defs>\n\n\t<circle class=\"circle-red\" cx=\"500\" cy=\"500\" r=\"200\" stroke=\"url(#linearGradient-1)\" _v-36e41714=\"\"></circle>\n\t<circle class=\"circle-red-1\" cx=\"500\" cy=\"500\" r=\"100\" stroke=\"url(#linearGradient-1)\" _v-36e41714=\"\"></circle>\n\n</svg>\n";

/***/ }
]);