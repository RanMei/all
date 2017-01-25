/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);

	new Vue({
		el: '#root',
		components: {
			Chips: __webpack_require__(4),
			ButtonOrange: __webpack_require__(8)
		},
		data: {
			img: '../../../img/h5_carnival'
		}
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
1,
/* 3 */
1,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};

	/* styles */
	__webpack_require__(5);

	/* script */
	__vue_exports__ = __webpack_require__(6);

	/* template */
	var __vue_template__ = __webpack_require__(7);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "D:\\git\\all\\_mobile\\h5\\carnival\\src\\components\\Chips.vue";
	if (typeof __vue_options__.name === "undefined") {
	  __vue_options__.name = "Chips";
	}__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	__vue_options__._scopeId = "data-v-290be0bc";

	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-290be0bc", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-290be0bc", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional && typeof __vue_template__ !== "undefined") {
	  console.error("[vue-loader] Chips.vue: functional components are not supported with templates, they should use render functions.");
	}

	module.exports = __vue_exports__;

/***/ },
/* 5 */
1,
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
		props: {
			img: {}
		},
		data: function data() {
			return {};
		}
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "Chips"
	  }, _vm._l((7), function(n) {
	    return _c('img', {
	      class: 'chip' + (n - 1),
	      attrs: {
	        "src": _vm.img + '/chip' + (n - 1) + '.png'
	      }
	    })
	  }))
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-290be0bc", module.exports)
	  }
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};

	/* styles */
	__webpack_require__(9);

	/* script */
	__vue_exports__ = __webpack_require__(10);

	/* template */
	var __vue_template__ = __webpack_require__(11);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  if (Object.keys(__vue_exports__).some(function (key) {
	    return key !== "default" && key !== "__esModule";
	  })) {
	    console.error("named exports are not supported in *.vue files.");
	  }
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}
	__vue_options__.__file = "D:\\git\\all\\_mobile\\h5\\carnival\\src\\components\\ButtonOrange.vue";
	if (typeof __vue_options__.name === "undefined") {
	  __vue_options__.name = "ButtonOrange";
	}__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	__vue_options__._scopeId = "data-v-0995d3fb";

	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-0995d3fb", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-0995d3fb", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional && typeof __vue_template__ !== "undefined") {
	  console.error("[vue-loader] ButtonOrange.vue: functional components are not supported with templates, they should use render functions.");
	}

	module.exports = __vue_exports__;

/***/ },
/* 9 */
1,
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
		props: {
			img: {}
		},
		data: function data() {
			return {
				pressed: false
			};
		},
		methods: {
			touchstart: function touchstart() {
				this.pressed = true;
			},
			touchmove: function touchmove() {
				this.pressed = false;
			},
			touchend: function touchend() {
				this.pressed = false;
			}
		}
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "ButtonOrange",
	    on: {
	      "touchstart": _vm.touchstart,
	      "touchmove": _vm.touchmove,
	      "touchend": _vm.touchend,
	      "touchcancel": _vm.touchend
	    }
	  }, [_c('img', {
	    staticClass: "btn-img",
	    attrs: {
	      "src": _vm.pressed ? _vm.img + '/btn_active.png' : _vm.img + '/btn.png'
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "btn-content"
	  }, [_c('img', {
	    staticClass: "logo",
	    attrs: {
	      "src": _vm.img + '/logo.png'
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "arrows"
	  }, [_c('img', {
	    staticClass: "arrow arrow1",
	    attrs: {
	      "src": _vm.img + '/arrow.png'
	    }
	  }), _vm._v(" "), _c('img', {
	    staticClass: "arrow arrow2",
	    attrs: {
	      "src": _vm.img + '/arrow.png'
	    }
	  }), _vm._v(" "), _c('img', {
	    staticClass: "arrow arrow3",
	    attrs: {
	      "src": _vm.img + '/arrow.png'
	    }
	  })])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-0995d3fb", module.exports)
	  }
	}

/***/ }
/******/ ])));