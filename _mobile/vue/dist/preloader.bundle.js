webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	Vue.component( 'preloader',__webpack_require__(2) );

	new Vue({
		el: 'body'
	})



/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(3)
	__vue_script__ = __webpack_require__(7)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\preloader.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(8)
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
	  var id = "_v-49a31ccf/preloader.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		data: function data() {
			return {
				circles: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
			};
		}
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "\n<svg viewBox=\"0 0 120 120\">\n\t<symbol id=\"s-circle\">\n\t\t<circle r=\"10\" cx=\"20\" cy=\"20\"></circle>\n\t</symbol>\n\t<g class=\"g-circles\">\n\t\t<g class=\"g-circle\" v-for=\"a in circles\">\n\t\t\t<use xlink:href=\"#s-circle\"/>\n\t\t</g>\n\t</g>\n</svg>\n";

/***/ }
]);