webpackJsonp([8],{

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(35);
	__vue_script__ = __webpack_require__(36);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\components\\StrokeCircle.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(37);
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
	    var id = "_v-424b4232/StrokeCircle.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 35:
1,

/***/ 36:
/***/ function(module, exports) {

	"use strict";

	var strokeCircle = {};
	module.exports = strokeCircle;

/***/ },

/***/ 37:
/***/ function(module, exports) {

	module.exports = "\n<svg class=\"test\" viewBox=\"0,0,1000,1000\" pointer-events=\"all\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" _v-424b4232=\"\">\n\t<defs _v-424b4232=\"\">\n\t\t<linearGradient id=\"linearGradient-1\" x1=\"0%\" y1=\"100%\" x2=\"100%\" y2=\"100%\" _v-424b4232=\"\">\n\t\t\t<stop stop-color=\"#2090F8\" offset=\"0%\" _v-424b4232=\"\"></stop>\n\t\t\t<stop stop-color=\"#01FCE4\" offset=\"41.7610013%\" _v-424b4232=\"\"></stop>\n\t\t\t<stop stop-color=\"#0BFF8C\" offset=\"78.6870217%\" _v-424b4232=\"\"></stop>\n\t\t\t<stop stop-color=\"#51FF00\" offset=\"100%\" _v-424b4232=\"\"></stop>\n\t\t</linearGradient>\n\t</defs>\n\n\t<circle class=\"circle-red\" cx=\"500\" cy=\"500\" r=\"200\" stroke=\"url(#linearGradient-1)\" _v-424b4232=\"\"></circle>\n\t<circle class=\"circle-red-1\" cx=\"500\" cy=\"500\" r=\"100\" stroke=\"url(#linearGradient-1)\" _v-424b4232=\"\"></circle>\n\n</svg>\n";

/***/ }

});