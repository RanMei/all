module.exports =
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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//import {store} from '../store/store.js';

	var app = new _vue2.default({
		components: {
			App: __webpack_require__(2)
		},
		template: '<app></app>'
	});

	exports.default = function (context) {
		// data pre-fetching
		return app;
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("vue");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__vue_script__ = __webpack_require__(3);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\_test\\App.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(12);
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
	    var id = "_v-66179186/App.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		components: {
			TopbarBlack: __webpack_require__(4),
			NavbarWeifeng: __webpack_require__(8)
		}
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(5);
	__vue_script__ = __webpack_require__(6);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\components\\TopbarBlack.vue: named exports in *.vue files are ignored.");
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
	    var id = "_v-6f4f3b04/TopbarBlack.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			items: {
				default: function _default() {
					return [{}];
				}
			}
		}
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"TopbarBlack\" _v-6f4f3b04=\"\">\n\t<a class=\"li\" href=\"./index.html\" _v-6f4f3b04=\"\">Home</a>\n\t<a class=\"li\" href=\"./test.html\" _v-6f4f3b04=\"\">Test</a>\n\t<a class=\"li\" href=\"./admin.html\" _v-6f4f3b04=\"\">Admin</a>\n</div>\n";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(9);
	__vue_script__ = __webpack_require__(10);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\components\\NavbarWeifeng.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(11);
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
	    var id = "_v-4b00ada6/NavbarWeifeng.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			items: {
				default: function _default() {
					return [{
						name: '首页'
					}, {
						name: '新手'
					}, {
						name: '游戏'
					}, {
						name: '新闻'
					}, {
						name: '锋科技'
					}, {
						name: '锋观点'
					}, {
						name: '评测'
					}, {
						name: '论坛'
					}, {
						name: '威锋源'
					}, {
						name: '威锋游戏'
					}, {
						name: '威锋商城'
					}, {
						name: '兔兔助手'
					}];
				}
			}
		},
		data: function data() {
			return {
				current: 0
			};
		},
		methods: {
			mouseenter: function mouseenter(e, i) {
				this.current = i;
			},
			mouseleave: function mouseleave() {
				this.current = 0;
			},
			haha: function haha(e) {
				console.log(e);
			}
		}
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"NavbarWeifeng\" _v-4b00ada6=\"\">\n\t<div class=\"container__\" _v-4b00ada6=\"\">\n\t\t<ul class=\"tabs\" @mouseleave=\"mouseleave\" _v-4b00ada6=\"\">\n\t\t\t<li v-for=\"(a,i) in items\" @mouseenter=\"mouseenter($event,i)\" _v-4b00ada6=\"\">{{a.name}}</li>\n\t\t</ul>\n\t\t<div class=\"bar-wrapper\" _v-4b00ada6=\"\">\n\t\t\t<div class=\"bar\" :style=\" 'transform:translate3d('+(current*83)+'px,0,0);' \" _v-4b00ada6=\"\"></div>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "\n<div id=\"root\">\n\t<topbar-black></topbar-black>\n\t<navbar-weifeng></navbar-weifeng>\n</div>\n";

/***/ }
/******/ ]);