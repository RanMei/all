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

	var _router = __webpack_require__(2);

	new Vue({
		template: '\n\t\t<div id="root">\n\t\t\t<router-view></router-view>\n\t\t</div>\n\t',
		router: _router.router
	}).$mount('#root');

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.router = undefined;

	var _list = __webpack_require__(3);

	Vue.use(VueRouter);

	var routes = [{
		path: '/',
		component: __webpack_require__(42)
	}, {
		path: '/item',
		component: __webpack_require__(62),
		children: _list.list
	}];

	var router = new VueRouter({
		routes: routes
	});

	exports.router = router;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var list = [{
		path: 'preloader',
		component: __webpack_require__(4)
	}, {
		path: 'card',
		component: __webpack_require__(8)
	}, {
		path: 'gooeymenu',
		component: __webpack_require__(12)
	}, {
		path: '3dcube',
		component: __webpack_require__(16)
	}, {
		path: 'svgpenguin',
		component: __webpack_require__(20)
	}, {
		path: 'carousel',
		component: __webpack_require__(24)
	}, {
		path: 'heart',
		component: __webpack_require__(28)
	}, {
		path: 'strokecircle',
		component: __webpack_require__(32)
	}, {
		path: 'scope',
		component: __webpack_require__(36)
	}];
	exports.list = list;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(5);
	__vue_script__ = __webpack_require__(6);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\components\\Preloader.vue: named exports in *.vue files are ignored.");
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
	    var id = "_v-d1fa3b72/Preloader.vue";
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

	module.exports = "\n<div class=\"PreloaderContainer\" _v-d1fa3b72=\"\">\n\t<svg class=\"Preloader\" viewBox=\"0 0 120 120\" _v-d1fa3b72=\"\">\n\t\t<symbol id=\"s-circle\" _v-d1fa3b72=\"\">\n\t\t\t<circle r=\"10\" cx=\"20\" cy=\"20\" _v-d1fa3b72=\"\"></circle>\n\t\t</symbol>\n\t\t<g class=\"g-circles\" _v-d1fa3b72=\"\">\n\t\t\t<g class=\"g-circle\" v-for=\"a in 12\" _v-d1fa3b72=\"\">\n\t\t\t\t<use xlink:href=\"#s-circle\" _v-d1fa3b72=\"\"></use>\n\t\t\t</g>\n\t\t</g>\n\t</svg>\n</div>\n";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(9);
	__vue_script__ = __webpack_require__(10);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\components\\Card.vue: named exports in *.vue files are ignored.");
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
	    var id = "_v-6515b062/Card.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 9 */
1,
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {
				state: '',
				img: {
					iron_man: 'img/iron_man.png',
					storm_trooper: 'img/storm-trooper.png'
				}
			};
		},
		mounted: function mounted() {
			var _this = this;

			document.addEventListener('keydown', function (e) {
				if (e.keyCode === 39) {
					_this.state = 'two';
				} else if (e.keyCode === 37) {
					_this.state = '';
				}
			});
		},
		methods: {
			handleClick: function handleClick() {
				this.state = this.state === '' ? 'two' : '';
			}
		}
	};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"space\" _v-6515b062=\"\">\n\t<div class=\"flipper\" :class=\"state\" @click=\"handleClick\" _v-6515b062=\"\">\n\t\t<div class=\"face front\" _v-6515b062=\"\">\n\t\t\t<p _v-6515b062=\"\">front</p>\n\t\t\t<img :src=\"img.iron_man\" _v-6515b062=\"\">\n\t\t</div>\n\t\t<div class=\"face back\" _v-6515b062=\"\">\n\t\t\t<p _v-6515b062=\"\">back</p>\n\t\t\t<img :src=\"img.storm_trooper\" _v-6515b062=\"\">\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(17);
	__vue_script__ = __webpack_require__(18);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\components\\3dCube.vue: named exports in *.vue files are ignored.");
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
	    var id = "_v-f4c05376/3dCube.vue";
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
		data: function data() {
			return {
				rotationRate: {
					alpha: '111'
				},
				rotateX: 0,
				rotateY: 0,
				recalibrating: false
			};
		},
		created: function created() {
			var self = this;
			if (window.DeviceMotionEvent) {
				window.addEventListener('devicemotion', self.handler.bind(self), false);
			} else {
				console.log('Sorry, your browser doesn\'t support DeviceMotionEvent.');
			}
		},
		methods: {
			recalibrate: function recalibrate(e) {
				var _this = this;

				this.recalibrating = true;
				this.rotateX = 0;
				this.rotateY = 0;
				setTimeout(function () {
					_this.recalibrating = false;
				}, 1000);
			},
			handler: function handler(e) {
				if (!this.recalibrating) {
					this.rotationRate.alpha = e.rotationRate.alpha;

					var nextX = this.rotateX - e.rotationRate.alpha * 3;

					this.rotateX = nextX;

					var nextY = this.rotateY + e.rotationRate.beta * 3;

					this.rotateY = nextY;
				}
			}
		}
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"space3d\" _v-f4c05376=\"\">\n\t<div class=\"cube\" :class=\" recalibrating?'recalibrating':'' \" @click=\"recalibrate\" :style=\" 'transform: rotateX('+rotateX+'deg) rotateY('+rotateY+'deg);-webkit-transform:rotateX('+rotateX+'deg) rotateY('+rotateY+'deg);'  \" _v-f4c05376=\"\">\n\t\t<div class=\"face face-front\" _v-f4c05376=\"\"></div>\n\t\t<div class=\"face face-top\" _v-f4c05376=\"\"></div>\n\t\t<div class=\"face face-bottom\" _v-f4c05376=\"\"></div>\n\t\t<div class=\"face face-left\" _v-f4c05376=\"\"></div>\n\t\t<div class=\"face face-right\" _v-f4c05376=\"\"></div>\n\t\t<div class=\"face face-back\" _v-f4c05376=\"\"></div>\n\t</div>\n</div>\n";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(21);
	__vue_script__ = __webpack_require__(22);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\components\\SvgPenguin.vue: named exports in *.vue files are ignored.");
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
	    var id = "_v-33eac8b2/SvgPenguin.vue";
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

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			active: {}
		},
		data: function data() {
			return {
				coversC: '',
				backbone: '',

				coversA: '',
				coversB: '',
				pages: '',

				markA: '',
				markB: '',

				second: ''
			};
		},
		watch: {
			active: function active(neo) {
				if (neo) {
					this.go();
				} else {
					this.reset();
				}
			}
		},
		mounted: function mounted() {
			this.go();
		},
		methods: {
			go: function go() {
				var self = this;
				self.coversC = 'active';
				self.backbone = 'active';
				if (!self.active) return;
				setTimeout(function () {
					if (!self.active) return;
					self.coversA = 'active';
					self.coversB = 'active';
					self.pages = 'active';
					setTimeout(function () {
						if (!self.active) return;
						self.markA = 'active';
						self.markB = 'active';
						setTimeout(function () {
							if (!self.active) return;
							self.second = 'active';
						}, 2000);
					}, 2000);
				}, 2000);
			},
			reset: function reset() {
				this.coversA = '';
				this.coversB = '';
				this.pages = '';
				this.markA = '';
				this.markB = '';
				this.second = '';
			}
		}
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "\n<svg viewBox=\"0 0 189 217\" xmlns=\"http://www.w3.org/2000/svg\" class=\"SvgPenguin\" _v-33eac8b2=\"\">\n\t<g fill=\"none\" fill-rule=\"evenodd\" _v-33eac8b2=\"\">\n\t\t<path class=\"second\" id=\"face\" :class=\"second\" fill=\"#000\" d=\"M159.015 67.85c-1.022 35.733-10.915 44.3-64.69 44.3-53.785 0-64.94-8.553-64.94-44.3C29.384 28.83 58.4.732 94.192.732c35.805 0 65.82 32.11 64.822 67.116z\" _v-33eac8b2=\"\"></path>\n\t\t<path class=\"second\" id=\"beak\" :class=\"second\" d=\"M122.093 87.704C108.323 95.15 104.495 99.1 93.67 99.486c-10.83.385-14.652-4.335-28.425-11.78-21.67-11.715-12.01-12.7 1.77-16.97 8.177-2.53 19.414-3.77 26.655-3.77 7.235 0 18.476 1.24 26.65 3.77 13.786 4.27 23.44 5.255 1.773 16.968z\" fill=\"#FA0\" _v-33eac8b2=\"\"></path>\n\t\t<path class=\"second\" id=\"mouth\" :class=\"second\" d=\"M126.5 77.197s-4.202 6.393-15.634 10.912c-5.988 2.365-8.466 7.798-17.196 7.798-8.728 0-11.222-5.4-17.2-7.8C65.198 83.59 60.84 77.2 60.84 77.2c2.536 2.023 12.508 11.788 32.674 11.788 20.173 0 30.45-9.765 32.986-11.79z\" fill=\"#AB2C29\" _v-33eac8b2=\"\"></path>\n\t\t<path class=\"second\" id=\"eyes\" :class=\"second\" d=\"M63.88 48.69C63.514 39 68.636 30.902 75.323 30.6c6.68-.298 12.388 7.315 12.75 17 .366 9.69-4.756 17.786-11.438 18.086-6.685.302-12.4-7.314-12.757-16.997zM98.342 48.507c0-9.67 5.41-17.51 12.082-17.51 6.67 0 12.085 7.84 12.085 17.51 0 9.665-5.415 17.502-12.086 17.502-6.67-.002-12.082-7.838-12.082-17.503z\" fill=\"#FFF\" _v-33eac8b2=\"\"></path>\n\t\t<path class=\"second\" id=\"pupils\" :class=\"second\" d=\"M113.76 53.12c-.865 0-1.564-.705-1.564-1.57v-.364c0-4.075-1.55-7.266-3.524-7.266-1.978 0-3.528 3.19-3.528 7.266v.363c0 .865-.697 1.57-1.563 1.57-.862 0-1.566-.705-1.566-1.57v-.364c0-6.123 2.743-10.4 6.658-10.4 3.912 0 6.654 4.277 6.654 10.4v.363c0 .864-.705 1.57-1.567 1.57zM84.866 47.06c.32 4.498-1.866 8.493-4.872 8.93-3.01.436-5.707-2.856-6.028-7.355-.314-4.5 1.866-8.494 4.868-8.927 3.016-.437 5.716 2.856 6.032 7.353z\" fill=\"#000\" _v-33eac8b2=\"\"></path>\n\t\t<path class=\"second\" id=\"hole\" :class=\"second\" d=\"M82.672 46.803c.05 1.503-.788 2.79-1.87 2.87-1.073.086-1.982-1.062-2.032-2.57-.044-1.5.793-2.792 1.867-2.873 1.08-.08 1.987 1.07 2.035 2.573z\" fill=\"#FFF\" _v-33eac8b2=\"\"></path>\n\n\t\t<path class=\"second\" id=\"arms\" d=\"M6.78 110.387c2.692 4.73 8.25 3.438 9.727 10.577 1.478 7.14.135 13.657-4.376 14.558-4.51.9-9.1-.283-11.147-7.28-3.124-10.678 3.105-22.586 5.797-17.855zM181.866 110.387c-2.692 4.73-8.25 3.438-9.727 10.577-1.48 7.14-.136 13.657 4.375 14.558 4.51.9 9.1-.283 11.148-7.28 3.124-10.678-3.105-22.586-5.797-17.855z\" fill=\"#000\" _v-33eac8b2=\"\"></path>\n\t\t\n\t\t<path id=\"pages\" :class=\"pages\" d=\"M98.283 104.618c5.574-2.742 36.5-18.417 70.34-24.037l9.494 9.83-1.022 2.37s-73.875 22.713-82.355 23.723l-.007.027v.01c-.048.002-.106.002-.17 0h-.12c-.038 0-.075.002-.12 0-.063.002-.122.002-.17 0v-.01l-.007-.027c-8.48-1.01-82.355-23.724-82.355-23.724l-1.02-2.37 9.253-8.872c35.306 5.865 67.637 21.884 71.153 23.385l1.045.5c.95.47 1.61.538 2.02.543h.405c.414-.005 1.08-.073 2.043-.555l1.595-.792z\" fill=\"#F5F5F5\" _v-33eac8b2=\"\"></path>\n\n\t\t<path id=\"covers-a\" :class=\"coversA\" d=\"M10.567 85.83c.93-.014 5.878.64 24.383 5.634 19.46 5.25 49.595 17.37 49.595 17.37s4.187 1.87 4.187 4.174l.76 94.953c0 2.306-.068 4.8-2.38 4.8l-69.467-21.495c-2.217-.62-4.187-1.87-4.187-4.174l-9.27-94.05c0-2.306 4.473-7.183 6.38-7.21zM178.41 85.49c-.98.014-8.715.546-26.64 5.288-19.946 5.277-47.337 18.055-47.337 18.055s-4.187 2.427-4.187 4.174l-1.52 94.953c0 2.305.828 4.8 3.14 4.8l69.466-21.495c2.265-.668 4.187-1.87 4.187-4.174l8.89-94.53c-.228-2.305-3.924-7.097-6-7.07z\" fill=\"#76D5FF\" _v-33eac8b2=\"\"></path>\n\t\t<path id=\"covers-b\" :class=\"coversB\" d=\"M94.298 110.92c5.64.135 9.07-1.563 9.353-1.585l-1.783 102.8c0 3.06-6.662 3.547-7.43 3.547-.628 0-7.325-.487-7.325-3.548l-1.52-102.704c.448.158 3.066 1.357 8.706 1.49z\" fill=\"#76D5FF\" _v-33eac8b2=\"\"></path>\n\t\t<path id=\"covers-c\" :class=\"coversC\" d=\"M6.626 91.633s6.334 1.902 25.945 7.048c20.15 5.288 51.975 17.854 51.975 17.854s4.187 1.87 4.187 4.174l1.52 88.787c0 2.305-.828 4.8-3.14 4.8 0 0-23.985-8.886-43.295-14.894-14.552-4.527-27.3-7.72-27.3-7.72-2.217-.62-4.187-1.87-4.187-4.175L4.188 95.018c0-2.305-.122-3.93 2.438-3.385zM181.763 91.633s-9.96 1.628-28.915 6.626c-20.558 5.42-48.624 18.274-48.624 18.274s-4.187 2.427-4.187 4.174l-1.52 88.787c0 2.305.828 4.8 3.14 4.8 0 0 21.985-8.264 40.638-14.068 15.62-4.86 29.956-8.548 29.956-8.548 2.266-.67 4.188-1.87 4.188-4.175l8.143-92.487c0-2.305-.11-3.93-2.817-3.385z\" fill=\"#00ADFC\" _v-33eac8b2=\"\"></path>\n\t\t<path id=\"backbone\" :class=\"backbone\" d=\"M94.14 118.6c5.65.133 9.448-2.125 9.42-1.57l-1.836 96.637c-.06 1.94-6.676 2.41-7.447 2.41-.628 0-7.37-.468-7.34-2.41l-1.835-96.636c0-.555 3.388 1.435 9.038 1.57z\" fill=\"#19B6FF\" _v-33eac8b2=\"\"></path>\n\t\t\n\t\t<path id=\"mark-a\" :class=\"markA\" d=\"M133.43 96.282c-.03-.02-.2.01-.478.083l-15.495 5.793c-.41.39-.55 1.18-.55 1.18l.734-.315s5.646 4.608 6.073 5.28l16.533-6.232c-1.247-1.275-6.743-5.743-6.815-5.788z\" fill=\"#F2556F\" _v-33eac8b2=\"\"></path>\n\t\t<path id=\"mark-b\" :class=\"markB\" d=\"M116.908 103.337s.146-.83.587-1.217c1.006-.88 15.603-6.05 15.936-5.838.08.05 7.038 5.708 7.078 6.112.395 4.035-1.77 19.837-.34 28.43.976 5.86 1.74 6.548 1.057 6.704-.683.156-5.61-1.94-7.657-1.707-2.045.233-6.336 7.107-7.235 7.106-.952 0-2.135-3.97-2.346-4.94-2.652-12.185-.576-26.21-.233-29.608.034-.338-6.113-5.354-6.113-5.354l-.732.313z\" fill=\"#F23051\" _v-33eac8b2=\"\"></path>\n\n\t\t<path class=\"second\" id=\"hands\" :class=\"second\" d=\"M182.584 114.216c-2.306 4.93-8.25 4.156-9.727 11.296-1.478 7.14-.135 13.657 4.376 14.558 4.51.9 9.518-4.127 10.844-11.296 2.41-13.022-3.184-19.494-5.493-14.558zM6.062 114.216c2.143 5.003 8.25 4.156 9.727 11.296 1.476 7.14.134 13.657-4.377 14.558-4.51.9-9.518-4.127-10.844-11.296-2.41-13.022 3.39-19.465 5.492-14.558z\" fill=\"#000\" _v-33eac8b2=\"\"></path>\n\n\t</g>\n</svg>\n";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(25);
	__vue_script__ = __webpack_require__(26);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\components\\Carousel.vue: named exports in *.vue files are ignored.");
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
	    var id = "_v-9e680ac2/Carousel.vue";
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
/* 27 */
/***/ function(module, exports) {

	module.exports = "\n<!-- CSS 3D Carousel -->\n<div class=\"container\" _v-9e680ac2=\"\">\n\t<div class=\"carousel\" :style=\" 'transform: rotateY('+rotateY+'deg);-webkit-transform: rotateY('+rotateY+'deg);' \" _v-9e680ac2=\"\">\n\t\t<div class=\"item a\" _v-9e680ac2=\"\">A</div>\n\t\t<div class=\"item b\" _v-9e680ac2=\"\">B</div>\n\t\t<div class=\"item c\" _v-9e680ac2=\"\">C</div>\n\t\t<div class=\"item d\" _v-9e680ac2=\"\">D</div>\n\t\t<div class=\"item e\" _v-9e680ac2=\"\">E</div>\n\t\t<div class=\"item f\" _v-9e680ac2=\"\">F</div>\n\t</div>\n\t<div class=\"next\" @click=\"next\" _v-9e680ac2=\"\">Next</div>\n\t<div class=\"prev\" @click=\"prev\" _v-9e680ac2=\"\">Prev</div>\n</div>\n";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(29);
	__vue_script__ = __webpack_require__(30);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\components\\Heart.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(31);
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
	    var id = "_v-03435ad2/Heart.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 29 */
1,
/* 30 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	exports.default = {
			data: function data() {
					return {};
			},
			mounted: function mounted() {
					window.requestAnimationFrame = window.__requestAnimationFrame || window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function () {
							return function (callback, element) {
									var lastTime = element.__lastTime;
									if (lastTime === undefined) {
											lastTime = 0;
									}
									var currTime = Date.now();
									var timeToCall = Math.max(1, 33 - (currTime - lastTime));
									window.setTimeout(callback, timeToCall);
									element.__lastTime = currTime + timeToCall;
							};
					}();
					window.isDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test((navigator.userAgent || navigator.vendor || window.opera).toLowerCase());
					var loaded = false;
					var init = function init() {
							if (loaded) return;
							loaded = true;
							var mobile = window.isDevice;
							var koef = 1;
							var canvas = document.getElementById('heart');
							var ctx = canvas.getContext('2d');
							var width = canvas.width = koef * innerWidth;
							var height = canvas.height = koef * innerHeight;
							var rand = Math.random;
							ctx.fillStyle = "rgba(0,0,0,1)";
							ctx.fillRect(0, 0, width, height);

							var heartPosition = function heartPosition(rad) {
									return [Math.pow(Math.sin(rad), 3), -(15 * Math.cos(rad) - 5 * Math.cos(2 * rad) - 2 * Math.cos(3 * rad) - Math.cos(4 * rad))];
							};
							var scaleAndTranslate = function scaleAndTranslate(pos, sx, sy, dx, dy) {
									return [dx + pos[0] * sx, dy + pos[1] * sy];
							};

							window.addEventListener('resize', function () {
									width = canvas.width = koef * innerWidth;
									height = canvas.height = koef * innerHeight;
									ctx.fillStyle = "rgba(0,0,0,1)";
									ctx.fillRect(0, 0, width, height);
							});

							var traceCount = mobile ? 20 : 50;
							var pointsOrigin = [];
							var i;
							var dr = mobile ? 0.3 : 0.1;
							for (i = 0; i < Math.PI * 2; i += dr) {
									pointsOrigin.push(scaleAndTranslate(heartPosition(i), 210, 13, 0, 0));
							}for (i = 0; i < Math.PI * 2; i += dr) {
									pointsOrigin.push(scaleAndTranslate(heartPosition(i), 150, 9, 0, 0));
							}for (i = 0; i < Math.PI * 2; i += dr) {
									pointsOrigin.push(scaleAndTranslate(heartPosition(i), 90, 5, 0, 0));
							}var heartPointsCount = pointsOrigin.length;

							var targetPoints = [];
							var pulse = function pulse(kx, ky) {
									for (i = 0; i < pointsOrigin.length; i++) {
											targetPoints[i] = [];
											targetPoints[i][0] = kx * pointsOrigin[i][0] + width / 2;
											targetPoints[i][1] = ky * pointsOrigin[i][1] + height / 2;
									}
							};

							function createPoints() {}

							var e = [];
							for (i = 0; i < heartPointsCount; i++) {
									var x = rand() * width;
									var y = rand() * height;
									e[i] = {
											vx: 0,
											vy: 0,
											R: 2,
											speed: rand() + 5,
											q: ~ ~(rand() * heartPointsCount),
											D: 2 * (i % 2) - 1,
											force: 0.2 * rand() + 0.7,
											f: "hsla(0," + ~ ~(40 * rand() + 60) + "%," + ~ ~(60 * rand() + 20) + "%,.3)",
											trace: []
									};
									for (var k = 0; k < traceCount; k++) {
											e[i].trace[k] = { x: x, y: y };
									}
							}

							var config = {
									traceK: 0.4,
									timeDelta: 0.01
							};

							var time = 0;
							var loop = function loop() {
									var n = -Math.cos(time);
									pulse((1 + n) * .5, (1 + n) * .5);
									time += (Math.sin(time) < 0 ? 9 : n > 0.8 ? .2 : 1) * config.timeDelta;
									ctx.fillStyle = "rgba(0,0,0,.1)";
									ctx.fillRect(0, 0, width, height);
									for (i = e.length; i--;) {
											var u = e[i];
											var q = targetPoints[u.q];
											var dx = u.trace[0].x - q[0];
											var dy = u.trace[0].y - q[1];
											var length = Math.sqrt(dx * dx + dy * dy);
											if (10 > length) {
													if (0.95 < rand()) {
															u.q = ~ ~(rand() * heartPointsCount);
													} else {
															if (0.99 < rand()) {
																	u.D *= -1;
															}
															u.q += u.D;
															u.q %= heartPointsCount;
															if (0 > u.q) {
																	u.q += heartPointsCount;
															}
													}
											}
											u.vx += -dx / length * u.speed;
											u.vy += -dy / length * u.speed;
											u.trace[0].x += u.vx;
											u.trace[0].y += u.vy;
											u.vx *= u.force;
											u.vy *= u.force;
											for (k = 0; k < u.trace.length - 1;) {
													var T = u.trace[k];
													var N = u.trace[++k];
													N.x -= config.traceK * (N.x - T.x);
													N.y -= config.traceK * (N.y - T.y);
											}
											ctx.fillStyle = u.f;
											for (k = 0; k < u.trace.length; k++) {
													ctx.fillRect(u.trace[k].x, u.trace[k].y, 1, 1);
											}
									}


									window.requestAnimationFrame(loop, canvas);
							};
							loop();
					};

					var s = document.readyState;
					if (s === 'complete' || s === 'loaded' || s === 'interactive') init();else document.addEventListener('DOMContentLoaded', init, false);
			}
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "\n<canvas id=\"heart\" _v-03435ad2=\"\"></canvas>\n";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(33);
	__vue_script__ = __webpack_require__(34);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\components\\StrokeCircle.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(35);
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
/* 33 */
1,
/* 34 */
/***/ function(module, exports) {

	"use strict";

	var strokeCircle = {};
	module.exports = strokeCircle;

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "\n<svg class=\"test\" viewBox=\"0,0,1000,1000\" pointer-events=\"all\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" _v-424b4232=\"\">\n\t<defs _v-424b4232=\"\">\n\t\t<linearGradient id=\"linearGradient-1\" x1=\"0%\" y1=\"100%\" x2=\"100%\" y2=\"100%\" _v-424b4232=\"\">\n\t\t\t<stop stop-color=\"#2090F8\" offset=\"0%\" _v-424b4232=\"\"></stop>\n\t\t\t<stop stop-color=\"#01FCE4\" offset=\"41.7610013%\" _v-424b4232=\"\"></stop>\n\t\t\t<stop stop-color=\"#0BFF8C\" offset=\"78.6870217%\" _v-424b4232=\"\"></stop>\n\t\t\t<stop stop-color=\"#51FF00\" offset=\"100%\" _v-424b4232=\"\"></stop>\n\t\t</linearGradient>\n\t</defs>\n\n\t<circle class=\"circle-red\" cx=\"500\" cy=\"500\" r=\"200\" stroke=\"url(#linearGradient-1)\" _v-424b4232=\"\"></circle>\n\t<circle class=\"circle-red-1\" cx=\"500\" cy=\"500\" r=\"100\" stroke=\"url(#linearGradient-1)\" _v-424b4232=\"\"></circle>\n\n</svg>\n";

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(37);
	__vue_script__ = __webpack_require__(38);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\Canvas\\Scope.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(41);
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
	    var id = "_v-2a999d07/Scope.vue";
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Scope = __webpack_require__(39);

	exports.default = {
		mounted: function mounted() {
			new _Scope.Scope({
				el: '#scope',
				width: 400,
				height: 400
			});
		}
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Scope = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Canvas2 = __webpack_require__(40);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Scope = function (_Canvas) {
		_inherits(Scope, _Canvas);

		function Scope(options) {
			_classCallCheck(this, Scope);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Scope).call(this, options));

			_this._init(options);
			return _this;
		}

		_createClass(Scope, [{
			key: 'beforePlay',
			value: function beforePlay() {
				this.c = this.el;
				this.cw = this.width;
				this.ch = this.height;
				this.mx = 0;
				this.my = 0;

				//trail
				this.trail = [];
				this.maxTrail = 200;
				this.mouseDown = false;

				this.ctx.lineWidth = .1;
				this.ctx.lineJoin = 'round';

				this.radius = 1;
				this.speed = 0.4;
				this.angle = 0;
				this.arcx = 0;
				this.arcy = 0;
				this.growRadius = true;
				this.seconds = 0;
				this.milliseconds = 0;
			}
		}, {
			key: 'rand',
			value: function rand(min, max) {
				return ~ ~(Math.random() * (max - min + 1) + min);
			}
		}, {
			key: 'hitTest',
			value: function hitTest(x1, y1, w1, h1, x2, y2, w2, h2) {
				return !(x1 + w1 < x2 || x2 + w2 < x1 || y1 + h1 < y2 || y2 + h2 < y1);
			}
		}, {
			key: 'createPoint',
			value: function createPoint(x, y) {
				this.trail.push({
					x: x,
					y: y
				});
			}
		}, {
			key: 'updateTrail',
			value: function updateTrail() {

				if (this.trail.length < this.maxTrail) {
					this.createPoint(this.arcx, this.arcy);
				}

				if (this.trail.length >= this.maxTrail) {
					this.trail.splice(0, 1);
				}
			}
		}, {
			key: 'updateArc',
			value: function updateArc() {
				this.arcx = this.cw / 2 + Math.sin(this.angle) * this.radius;
				this.arcy = this.ch / 2 + Math.cos(this.angle) * this.radius;
				var d = new Date();
				this.seconds = d.getSeconds();
				this.milliseconds = d.getMilliseconds();
				this.angle += this.speed * (this.seconds + 1 + this.milliseconds / 1000);

				if (this.radius <= 1) {
					this.growRadius = true;
				}
				if (this.radius >= 200) {
					this.growRadius = false;
				}

				if (this.growRadius) {
					this.radius += 1;
				} else {
					this.radius -= 1;
				}
			}
		}, {
			key: 'renderTrail',
			value: function renderTrail() {
				var i = this.trail.length;

				this.ctx.beginPath();
				while (i--) {
					var point = this.trail[i];
					var nextPoint = i == this.trail.length ? this.trail[i + 1] : this.trail[i];

					var c = (point.x + nextPoint.x) / 2;
					var d = (point.y + nextPoint.y) / 2;
					this.ctx.quadraticCurveTo(Math.round(this.arcx), Math.round(this.arcy), c, d);
				};
				this.ctx.strokeStyle = 'hsla(' + this.rand(170, 300) + ', 100%, ' + this.rand(50, 75) + '%, 1)';
				this.ctx.stroke();
				this.ctx.closePath();
			}
		}, {
			key: 'clearCanvas',
			value: function clearCanvas() {
				//this.ctx.globalCompositeOperation = 'source-over';
				//this.ctx.clearRect(0,0,this.cw,this.ch);

				this.ctx.globalCompositeOperation = 'destination-out';
				this.ctx.fillStyle = 'rgba(0,0,0,.1)';
				this.ctx.fillRect(0, 0, this.cw, this.ch);
				this.ctx.globalCompositeOperation = 'lighter';
			}
		}, {
			key: 'render',
			value: function render() {
				this.clearCanvas();
				this.updateArc();
				this.updateTrail();
				this.renderTrail();
			}
		}]);

		return Scope;
	}(_Canvas2.Canvas);

	exports.Scope = Scope;


	var isCanvasSupported = function isCanvasSupported() {
		var elem = document.createElement('canvas');
		return !!(elem.getContext && elem.getContext('2d'));
	};

	/*=============================================================================*/
	/* Setup requestAnimationFrame
	/*=============================================================================*/
	var setupRAF = function setupRAF() {
		var lastTime = 0;
		var vendors = ['ms', 'moz', 'webkit', 'o'];
		for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
			window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
			window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
		};

		if (!window.requestAnimationFrame) {
			window.requestAnimationFrame = function (callback, element) {
				var currTime = new Date().getTime();
				var timeToCall = Math.max(0, 16 - (currTime - lastTime));
				var id = window.setTimeout(function () {
					callback(currTime + timeToCall);
				}, timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};
		};

		if (!window.cancelAnimationFrame) {
			window.cancelAnimationFrame = function (id) {
				clearTimeout(id);
			};
		};
	};

	// if(isCanvasSupported){
	//     // var c = document.createElement('canvas');
	//     // c.width = 400;
	//     // c.height = 400;			
	//     // var cw = c.width;
	//     // var ch = c.height;	
	//     // document.body.appendChild(c);
	//     var c = document.getElementById('scope');
	//     var cw = c.width;
	//     var ch = c.height;
	//     var cl = new SmoothTrail(c, cw, ch);				

	//     //setupRAF();
	//     cl.init();
	// }

/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Canvas = function () {
		function Canvas(options) {
			_classCallCheck(this, Canvas);
		}

		_createClass(Canvas, [{
			key: '_init',
			value: function _init(options) {
				this._options = options;

				this.el = document.querySelector(options.el);
				this.ctx = this.el.getContext('2d');
				this.width = this.el.width || 1000;
				this.height = this.el.height || 1000;
				this._listen();
				if (options.responsive === true) {
					this._response();
				}

				this._start();
			}
		}, {
			key: '_start',
			value: function _start() {
				this._playing = false;
				this._tick = 0;
				this._time = new Date().getTime();
				this._fps = 0;

				//this._initCache();
				this.beforePlay();

				this._playing = true;
				this._play();
			}
		}, {
			key: '_response',
			value: function _response() {
				var _this = this;

				window.addEventListener('resize', function () {
					_this.width = _this.el.width = window.innerWidth;
					_this.height = _this.el.height = window.innerHeight;
				});
			}
			//onResize(){}

		}, {
			key: '_initCache',
			value: function _initCache() {
				this._cache = document.createElement('canvas');
				this._cache.width = 1000;
				this._cache.height = 1000;
				this.ctx = this._cache.getContext('2d');
			}
		}, {
			key: '_render',
			value: function _render() {
				this._ctx.clearRect(0, 0, this.width, this.height);
				this._ctx.drawImage(this._cache, 0, 0);
			}
		}, {
			key: '_listen',
			value: function _listen() {
				var _this2 = this;

				this.el.addEventListener('click', function () {
					if (_this2._playing) {
						_this2._pause();
					} else {
						_this2._resume();
					}
				});
				// document.addEventListener('keydown',()=>{
				// 	console.log(111)
				// 	this._playing = false;
				// 	setTimeout(()=>{
				// 		this._start();
				// 	},1000)

				// })
			}
		}, {
			key: '_pause',
			value: function _pause() {
				this._playing = false;
			}
		}, {
			key: '_resume',
			value: function _resume() {
				this._playing = true;
				this._play();
			}
		}, {
			key: '_play',
			value: function _play() {
				if (this._playing) {
					requestAnimationFrame(this._play.bind(this));
					this.render();
					this._renderFPS();
					//this._render();
				};
			}
		}]);

		return Canvas;
	}();

	Canvas.prototype._renderFPS = function () {
		this._tick++;
		if (this._tick === 60) {
			var newTime = new Date().getTime();
			this._fps = Math.round(1 / ((newTime - this._time) / 1000 / 60));

			this._time = newTime;
			this._tick = 0;
		}
		this.ctx.fillStyle = 'red';
		this.ctx.font = '14px Microsoft Yahei';
		this.ctx.fillText(this._fps + ' FPS', 10, 20, 100);
	};

	exports.Canvas = Canvas;

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = "\n<!-- Abstract Canvas Visualization -->\n<div class=\"_space\" _v-2a999d07=\"\">\n\t<canvas id=\"scope\" width=\"400\" height=\"400\" _v-2a999d07=\"\"></canvas>\n</div>\n";

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(43);
	__vue_script__ = __webpack_require__(44);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\router\\Home.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(61);
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
	    var id = "_v-6e353fcb/Home.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 43 */
1,
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _stringify = __webpack_require__(45);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _items = __webpack_require__(48);

	var _items2 = _interopRequireDefault(_items);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		components: {
			Navbar: __webpack_require__(49),
			Showcase: __webpack_require__(53),
			List: __webpack_require__(57)
		},
		data: function data() {
			return {
				items: _items2.default,
				list: []
			};
		},
		mounted: function mounted() {
			this.list = JSON.parse((0, _stringify2.default)(this.$root.$options.router.options.routes[1].children));
		}
	};

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(46), __esModule: true };

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(47)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 47 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 48 */
/***/ function(module, exports) {

	'use strict';

	module.exports = [{
		name: 'Preloader',
		component: 'Preloader',
		path: '../components/Preloader.vue'
	}, {
		name: 'Card',
		component: 'Card',
		path: '../components/Card.vue'
	}, {
		name: 'GooeyMenu',
		component: 'GooeyMenu',
		path: '../lib/GooeyMenu.vue'
	}, {
		name: '3dCube',
		component: '3dCube',
		path: '../components/3dCube.vue'
	}, {
		name: 'SvgPenguin',
		component: 'SvgPenguin',
		path: '../components/SvgPenguin.vue'
	}, {
		name: 'Carousel',
		component: 'Carousel',
		path: '../components/Carousel.vue'
	}, {
		name: 'Heart',
		component: 'Heart',
		path: '../components/Heart.vue'
	}, {
		name: 'StrokeCircle',
		component: 'StrokeCircle',
		path: '../components/StrokeCircle.vue'

	}, {
		name: 'Scope',
		tags: ['canvas'],
		component: 'Scope',
		path: '../Canvas/Scope.vue'
	}];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(50);
	__vue_script__ = __webpack_require__(51);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\components\\Navbar.vue: named exports in *.vue files are ignored.");
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
	    var id = "_v-50595b0f/Navbar.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 50 */
1,
/* 51 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {};

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"Navbar\" _v-50595b0f=\"\">\n\t<ul _v-50595b0f=\"\">\n\t\t<li _v-50595b0f=\"\">\n\t\t\tHome\n\t\t</li>\n\t\t<li _v-50595b0f=\"\">\n\t\t\tList\n\t\t</li>\n\t</ul>\n</div>\n";

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(54);
	__vue_script__ = __webpack_require__(55);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\components\\Showcase.vue: named exports in *.vue files are ignored.");
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
	    var id = "_v-14ea3a6c/Showcase.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 54 */
1,
/* 55 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			items: {}
		}
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"Showcase\">\n\t<a class=\"item__\"\n\tv-for=\"a in items\"\n\t:href=\" '#/item/'+a.name.toLowerCase() \">\n\t\t{{a.name}}\n\t</a>\n</div>\n";

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(58);
	__vue_script__ = __webpack_require__(59);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\components\\List.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(60);
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
	    var id = "_v-1e27e65d/List.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 58 */
1,
/* 59 */
55,
/* 60 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"List\" _v-1e27e65d=\"\">\n\t<div class=\"item__\" v-for=\"a in items\" _v-1e27e65d=\"\">\n\t\t{{a.name}}\n\t</div>\n</div>\n";

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n<div class=\"Home\" _v-6e353fcb=\"\">\n\t<showcase :items=\"items\" _v-6e353fcb=\"\"></showcase>\n\t<list :items=\"items\" _v-6e353fcb=\"\"></list>\n\n\t<navbar _v-6e353fcb=\"\"></navbar>\n</div>\n";

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(63);
	__vue_script__ = __webpack_require__(64);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\router\\RouteItem.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(65);
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
	    var id = "_v-8efa6380/RouteItem.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 63 */
1,
/* 64 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		methods: {
			back: function back() {
				history.go(-1);
			}
		}
	};

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"RouteItem\" _v-8efa6380=\"\">\n\t<div class=\"TOPBAR\" _v-8efa6380=\"\">\n\t\t<span @click=\"back\" _v-8efa6380=\"\">返回</span>\n\t</div>\n\t<router-view _v-8efa6380=\"\"></router-view>\n</div>\n";

/***/ }
/******/ ])));