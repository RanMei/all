webpackJsonp([9],{

/***/ 49:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(50);
	__vue_script__ = __webpack_require__(51);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\components\\Carousel.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(52);
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
	    var id = "_v-9e680ac2/Carousel.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 50:
77,

/***/ 51:
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

/***/ 52:
/***/ function(module, exports) {

	module.exports = "\n<!-- CSS 3D Carousel -->\n<div class=\"container\" _v-9e680ac2=\"\">\n\t<div class=\"carousel\" :style=\" 'transform: rotateY('+rotateY+'deg);-webkit-transform: rotateY('+rotateY+'deg);' \" _v-9e680ac2=\"\">\n\t\t<div class=\"item a\" _v-9e680ac2=\"\">A</div>\n\t\t<div class=\"item b\" _v-9e680ac2=\"\">B</div>\n\t\t<div class=\"item c\" _v-9e680ac2=\"\">C</div>\n\t\t<div class=\"item d\" _v-9e680ac2=\"\">D</div>\n\t\t<div class=\"item e\" _v-9e680ac2=\"\">E</div>\n\t\t<div class=\"item f\" _v-9e680ac2=\"\">F</div>\n\t</div>\n\t<div class=\"next\" @click=\"next\" _v-9e680ac2=\"\">Next</div>\n\t<div class=\"prev\" @click=\"prev\" _v-9e680ac2=\"\">Prev</div>\n</div>\n";

/***/ },

/***/ 53:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(54);
	__vue_script__ = __webpack_require__(55);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\components\\Panoramic.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(56);
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
	    var id = "_v-67fa3152/Panoramic.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 54:
77,

/***/ 55:
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

/***/ 56:
/***/ function(module, exports) {

	module.exports = "\n<!-- Panoramic (pure CSS) -->\n<div class=\"space\" _v-67fa3152=\"\">\n\t<div class=\"roller\" _v-67fa3152=\"\">\n\t  <div class=\"slice\" v-for=\"n in 32\" _v-67fa3152=\"\"></div>\n\t</div>\n</div>\n";

/***/ }

});