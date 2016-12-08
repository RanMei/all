webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(5);
	__vue_script__ = __webpack_require__(6);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\lib\\Preloader.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(7);
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
	    var id = "_v-0016cf18/Preloader.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 5 */
1,
/* 6 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		data: function data() {
			return {};
		}
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"PreloaderContainer\" _v-0016cf18=\"\">\n\t<svg class=\"Preloader\" viewBox=\"0 0 120 120\" _v-0016cf18=\"\">\n\t\t<symbol id=\"s-circle\" _v-0016cf18=\"\">\n\t\t\t<circle r=\"10\" cx=\"20\" cy=\"20\" _v-0016cf18=\"\"></circle>\n\t\t</symbol>\n\t\t<g class=\"g-circles\" _v-0016cf18=\"\">\n\t\t\t<g class=\"g-circle\" v-for=\"a in 12\" _v-0016cf18=\"\">\n\t\t\t\t<use xlink:href=\"#s-circle\" _v-0016cf18=\"\"></use>\n\t\t\t</g>\n\t\t</g>\n\t</svg>\n</div>\n";

/***/ },
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
	  console.warn("[vue-loader] _mobile\\vue\\src\\lib\\GooeyMenu.vue: named exports in *.vue files are ignored.");
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
	    var id = "_v-ca5707c8/GooeyMenu.vue";
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
/* 15 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"GooeyMenuContainer\" _v-ca5707c8=\"\">\n\t<div class=\"GooeyMenu\" _v-ca5707c8=\"\">\n\t\t<!-- CSS Gooey Menu (Version 2) -->\n\t\t<input type=\"checkbox\" href=\"#\" class=\"menu-open\" name=\"menu-open\" id=\"menu-open\" _v-ca5707c8=\"\">\n\t\t<label class=\"menu-open-button\" for=\"menu-open\" _v-ca5707c8=\"\">\n\t\t\t<span class=\"hamburger hamburger-1\" _v-ca5707c8=\"\"></span>\n\t\t\t<span class=\"hamburger hamburger-2\" _v-ca5707c8=\"\"></span>\n\t\t\t<span class=\"hamburger hamburger-3\" _v-ca5707c8=\"\"></span>\n\t\t</label>\n\n\t\t<a class=\"menu-item\" _v-ca5707c8=\"\"> <i class=\"fa fa-bar-chart\" _v-ca5707c8=\"\"></i> </a>\n\t\t<a class=\"menu-item\" _v-ca5707c8=\"\"> <i class=\"fa fa-plus\" _v-ca5707c8=\"\"></i> </a>\n\t\t<a class=\"menu-item\" _v-ca5707c8=\"\"> <i class=\"fa fa-heart\" _v-ca5707c8=\"\"></i> </a>\n\t\t<a class=\"menu-item\" _v-ca5707c8=\"\"> <i class=\"fa fa-envelope\" _v-ca5707c8=\"\"></i> </a>\n\t\t<a class=\"menu-item\" _v-ca5707c8=\"\"> <i class=\"fa fa-cog\" _v-ca5707c8=\"\"></i> </a>\n\t\t<a class=\"menu-item\" _v-ca5707c8=\"\"> <i class=\"fa fa-ellipsis-h\" _v-ca5707c8=\"\"></i> </a>\n\n\t\t<!-- filters -->\n\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 100 100\" _v-ca5707c8=\"\">\n\t\t\t<circle cx=\"50\" cy=\"50\" r=\"20\" fill=\"red\" _v-ca5707c8=\"\"></circle>\n\t\t\t<defs _v-ca5707c8=\"\">\n\t\t\t\t<filter id=\"shadowed-goo\" _v-ca5707c8=\"\">\n\t\t\t\t\t<feGaussianBlur in=\"SourceGraphic\" result=\"blur\" stdDeviation=\"10\" _v-ca5707c8=\"\"></feGaussianBlur>\n\t\t\t\t\t<feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7\" result=\"goo\" _v-ca5707c8=\"\"></feColorMatrix>\n\t\t\t\t\t<feGaussianBlur in=\"goo\" stdDeviation=\"3\" result=\"shadow\" _v-ca5707c8=\"\"></feGaussianBlur>\n\t\t\t\t\t<feColorMatrix in=\"shadow\" mode=\"matrix\" values=\"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2\" result=\"shadow\" _v-ca5707c8=\"\"></feColorMatrix>\n\t\t\t\t\t<feOffset in=\"shadow\" dx=\"1\" dy=\"1\" result=\"shadow\" _v-ca5707c8=\"\"></feOffset>\n\t\t\t\t\t<feComposite in2=\"shadow\" in=\"goo\" result=\"goo\" _v-ca5707c8=\"\"></feComposite>\n\t\t\t\t\t<feComposite in2=\"goo\" in=\"SourceGraphic\" result=\"mix\" _v-ca5707c8=\"\"></feComposite>\n\t\t\t\t</filter>\n\t\t\t\t<filter id=\"goo\" x=\"-300%\" y=\"-300%\" width=\"600%\" height=\"600%\" _v-ca5707c8=\"\">\n\t\t\t\t\t<feGaussianBlur id=\"feGB\" in=\"SourceGraphic\" result=\"blur\" stdDeviation=\"8\" _v-ca5707c8=\"\"></feGaussianBlur>\n\t\t\t\t\t<feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7\" result=\"goo\" _v-ca5707c8=\"\"></feColorMatrix>\n\t\t\t\t\t<feComposite in2=\"goo\" in=\"SourceGraphic\" result=\"mix\" _v-ca5707c8=\"\"></feComposite>\n\t\t\t\t</filter>\n\t\t\t</defs>\n\t\t</svg>\n\t</div>\n</div>\n";

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
	  console.warn("[vue-loader] _mobile\\vue\\src\\lib\\ButtonRipple.vue: named exports in *.vue files are ignored.");
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
	    var id = "_v-3b117e50/ButtonRipple.vue";
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

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"ButtonRipple\" _v-3b117e50=\"\">\n\t<div class=\"button\" _v-3b117e50=\"\">\n\t\t<div class=\"ripple\" _v-3b117e50=\"\"></div>\n\t\t<span _v-3b117e50=\"\">Stark</span>\n\t</div>\n\n\t<div class=\"button raised\" _v-3b117e50=\"\">\n\t\t<div class=\"ripple\" _v-3b117e50=\"\"></div>\n\t\t<span _v-3b117e50=\"\">Lannister</span>\n\t</div>\n</div>\n";

/***/ }
]);