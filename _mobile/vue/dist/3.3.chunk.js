webpackJsonp([3],{

/***/ 12:
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
	    var id = "_v-35753e9d/GooeyMenu.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 13:
1,

/***/ 14:
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

/***/ 15:
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"GooeyMenuContainer\" _v-35753e9d=\"\">\n\t<div class=\"GooeyMenu\" _v-35753e9d=\"\">\n\t\t<!-- CSS Gooey Menu (Version 2) -->\n\t\t<input type=\"checkbox\" href=\"#\" class=\"menu-open\" name=\"menu-open\" id=\"menu-open\" _v-35753e9d=\"\">\n\t\t<label class=\"menu-open-button\" for=\"menu-open\" _v-35753e9d=\"\">\n\t\t\t<span class=\"hamburger hamburger-1\" _v-35753e9d=\"\"></span>\n\t\t\t<span class=\"hamburger hamburger-2\" _v-35753e9d=\"\"></span>\n\t\t\t<span class=\"hamburger hamburger-3\" _v-35753e9d=\"\"></span>\n\t\t</label>\n\n\t\t<a class=\"menu-item\" _v-35753e9d=\"\"> <i class=\"fa fa-bar-chart\" _v-35753e9d=\"\"></i> </a>\n\t\t<a class=\"menu-item\" _v-35753e9d=\"\"> <i class=\"fa fa-plus\" _v-35753e9d=\"\"></i> </a>\n\t\t<a class=\"menu-item\" _v-35753e9d=\"\"> <i class=\"fa fa-heart\" _v-35753e9d=\"\"></i> </a>\n\t\t<a class=\"menu-item\" _v-35753e9d=\"\"> <i class=\"fa fa-envelope\" _v-35753e9d=\"\"></i> </a>\n\t\t<a class=\"menu-item\" _v-35753e9d=\"\"> <i class=\"fa fa-cog\" _v-35753e9d=\"\"></i> </a>\n\t\t<a class=\"menu-item\" _v-35753e9d=\"\"> <i class=\"fa fa-ellipsis-h\" _v-35753e9d=\"\"></i> </a>\n\n\t\t<!-- filters -->\n\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 100 100\" _v-35753e9d=\"\">\n\t\t\t<circle cx=\"50\" cy=\"50\" r=\"20\" fill=\"red\" _v-35753e9d=\"\"></circle>\n\t\t\t<defs _v-35753e9d=\"\">\n\t\t\t\t<filter id=\"shadowed-goo\" _v-35753e9d=\"\">\n\t\t\t\t\t<feGaussianBlur in=\"SourceGraphic\" result=\"blur\" stdDeviation=\"10\" _v-35753e9d=\"\"></feGaussianBlur>\n\t\t\t\t\t<feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7\" result=\"goo\" _v-35753e9d=\"\"></feColorMatrix>\n\t\t\t\t\t<feGaussianBlur in=\"goo\" stdDeviation=\"3\" result=\"shadow\" _v-35753e9d=\"\"></feGaussianBlur>\n\t\t\t\t\t<feColorMatrix in=\"shadow\" mode=\"matrix\" values=\"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2\" result=\"shadow\" _v-35753e9d=\"\"></feColorMatrix>\n\t\t\t\t\t<feOffset in=\"shadow\" dx=\"1\" dy=\"1\" result=\"shadow\" _v-35753e9d=\"\"></feOffset>\n\t\t\t\t\t<feComposite in2=\"shadow\" in=\"goo\" result=\"goo\" _v-35753e9d=\"\"></feComposite>\n\t\t\t\t\t<feComposite in2=\"goo\" in=\"SourceGraphic\" result=\"mix\" _v-35753e9d=\"\"></feComposite>\n\t\t\t\t</filter>\n\t\t\t\t<filter id=\"goo\" x=\"-300%\" y=\"-300%\" width=\"600%\" height=\"600%\" _v-35753e9d=\"\">\n\t\t\t\t\t<feGaussianBlur id=\"feGB\" in=\"SourceGraphic\" result=\"blur\" stdDeviation=\"8\" _v-35753e9d=\"\"></feGaussianBlur>\n\t\t\t\t\t<feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7\" result=\"goo\" _v-35753e9d=\"\"></feColorMatrix>\n\t\t\t\t\t<feComposite in2=\"goo\" in=\"SourceGraphic\" result=\"mix\" _v-35753e9d=\"\"></feComposite>\n\t\t\t\t</filter>\n\t\t\t</defs>\n\t\t</svg>\n\t</div>\n</div>\n";

/***/ }

});