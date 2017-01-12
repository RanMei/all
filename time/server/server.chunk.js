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

	var _App = __webpack_require__(2);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // server-entry.js 


	var app = new (Function.prototype.bind.apply(_vue2.default, [null].concat(_toConsumableArray(_App2.default))))();

	// the default export should be a function 
	// which will receive the context of the render call 

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
	__vue_template__ = __webpack_require__(16);
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
	    var id = "_v-4f1c7b3c/App.vue";
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
			MyHeader: __webpack_require__(4),
			MyFooter: __webpack_require__(8),
			BackToTop: __webpack_require__(12)
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
	  console.warn("[vue-loader] time\\src\\components\\MyHeader.vue: named exports in *.vue files are ignored.");
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
	    var id = "_v-341844b6/MyHeader.vue";
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

	'use strict';

	module.exports = {
		props: ['dir'],
		computed: {}
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"MY-HEADER\" _v-341844b6=\"\">\n\t<!-- searchbar -->\n\t<div class=\"searchbar wrapper\" _v-341844b6=\"\">\n\t\t<div class=\"container\" _v-341844b6=\"\">\n\t\t\t<div class=\"search_box\" _v-341844b6=\"\">\n\t\t\t\t<form _v-341844b6=\"\">\n\t\t\t\t\t<input type=\"text\" placeholder=\"请输入您想搜索的商品名称\" _v-341844b6=\"\">\n\t\t\t\t\t<a :href=\" dir.search \" class=\"a-search search_btn\" _v-341844b6=\"\"><i class=\"fa fa-search\" _v-341844b6=\"\"></i></a>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"LINE wrapper\" _v-341844b6=\"\"></div>\n\t<!-- topbar -->\n\t<div class=\"topbar wrapper\" _v-341844b6=\"\">\n\t\t<div class=\"container\" _v-341844b6=\"\">\n\t\t\t<p _v-341844b6=\"\"><a class=\"a_home\" :href=\"dir.index\" _v-341844b6=\"\">欢迎来到飞越太平洋海淘网站</a></p>\n\t\t\t<ul _v-341844b6=\"\">\n\t\t\t\t<li _v-341844b6=\"\"><a href=\"register.html\" class=\"a-signin login\" _v-341844b6=\"\">登录</a></li><span class=\"separator\" _v-341844b6=\"\">|</span>\n\t\t\t\t<li _v-341844b6=\"\"><a href=\"register.html\" class=\"a-signup register\" _v-341844b6=\"\">注册</a></li><span class=\"separator\" _v-341844b6=\"\">|</span>\n\t\t\t\t<li _v-341844b6=\"\"><i class=\"fa fa-file\" _v-341844b6=\"\"></i> <a class=\"a_my_orders\" href=\"./orders.html\" _v-341844b6=\"\">我的订单</a></li><span class=\"separator\" _v-341844b6=\"\">|</span>\n\t\t\t\t<li class=\"my_cart\" _v-341844b6=\"\">\n\t\t\t\t\t<i class=\"fa fa-shopping-cart\" _v-341844b6=\"\"></i> <a class=\"a-cart\" :href=\" dir.cart \" _v-341844b6=\"\">我的购物车(<span class=\"quantityIn\" _v-341844b6=\"\">0</span>)</a>\n\t\t\t\t\t<div class=\"cart_panel\" _v-341844b6=\"\">\n\t\t\t\t\t\t我的购物车\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<div class=\"clear\" _v-341844b6=\"\"></div>\n\t\t</div>\n\t\t<!--\n\t\t<div class=\"banner container\">\n\t\t\t<ul>\n\t\t\t\t<a href=\"\" style=\"background:url(images/165404.24885127.jpg)\">\n\t\t\t\t\t<div class=\"label\">新品</div>\n\t\t\t\t\t<div>星球大战入耳式耳机</div>\n\t\t\t\t</a>\n\t\t\t</ul>\n\t\t</div>\n\t\t-->\n\t</div>\n</div>\n";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(9);
	__vue_script__ = __webpack_require__(10);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\components\\MyFooter.vue: named exports in *.vue files are ignored.");
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
	    var id = "_v-767d0c9a/MyFooter.vue";
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

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"MY-FOOTER wrapper\" _v-767d0c9a=\"\">\n\t<!-- footer -->\n\t<div class=\"LINE wrapper\" _v-767d0c9a=\"\"></div>\n\t<div class=\"footer wrapper\" style=\"background:#F2F2F2;\" _v-767d0c9a=\"\">\n\t\t<ul class=\"container\" _v-767d0c9a=\"\">\n\t\t\t<li _v-767d0c9a=\"\">\t\n\t\t\t\t<h4 _v-767d0c9a=\"\">购物指南</h4>\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">新用户注册</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">购物流程</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">常见问题</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">发票制度</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">联系我们</a>\n\t\t\t</li>\n\t\t\t<li _v-767d0c9a=\"\">\t\n\t\t\t\t<h4 _v-767d0c9a=\"\">支付方式</h4>\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">在线付款</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">余额付款</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">优惠券使用说明</a>\n\t\t\t</li>\n\t\t\t<li _v-767d0c9a=\"\">\t\n\t\t\t\t<h4 _v-767d0c9a=\"\">配送方式</h4>\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">邮费说明</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">配送服务范围</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">配送速度查询</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">验货与签收</a>\n\t\t\t</li>\n\t\t\t<li _v-767d0c9a=\"\">\t\n\t\t\t\t<h4 _v-767d0c9a=\"\">售后服务</h4>\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">售后政策</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">退货政策</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">退货流程</a>\n\t\t\t</li>\n\t\t\t<li _v-767d0c9a=\"\">\t\n\t\t\t\t<h4 _v-767d0c9a=\"\">客服电话</h4>\n\t\t\t\t<p class=\"serviceTel\" _v-767d0c9a=\"\">4006-118-118</p>\n\t\t\t\t<p _v-767d0c9a=\"\">周一至周日9:00~22:00</p>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\t<div class=\"copyright wrapper\" _v-767d0c9a=\"\">\n\t\t<div class=\"container\" _v-767d0c9a=\"\">\n\t\t\t<p _v-767d0c9a=\"\">Copyright © 2015.FYTPY All rights reserved.</p>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(13);
	__vue_script__ = __webpack_require__(14);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\components\\BackToTop.vue: named exports in *.vue files are ignored.");
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
	    var id = "_v-8f3a88d2/BackToTop.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var body;
	exports.default = {
		data: function data() {
			return {
				scrolling: false
			};
		},
		mounted: function mounted() {
			body = document.querySelector('body');
		},
		methods: {
			back: function back() {
				var _this = this;

				if (!this.scrolling) {
					this.scrolling = true;
					var duration = 300;
					var distance = body.scrollTop;
					var dy = 10 * distance / duration;
					var interval = setInterval(function () {
						if (body.scrollTop - dy > 0) {
							body.scrollTop -= dy;
						} else {
							body.scrollTop = 0;
							clearInterval(interval);
							_this.scrolling = false;
						}
					}, 10);
				}
			}
		}
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"BACK-TO-TOP\" @click=\"back\" _v-8f3a88d2=\"\"><i class=\"fa fa-angle-up\" _v-8f3a88d2=\"\"></i></div>\n";

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "\n<div id=\"root\">\n\t<!-- <my-header></my-header> -->\n\t<my-footer></my-footer>\n\t<back-to-top></back-to-top>\n</div>\n";

/***/ }
/******/ ]);