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

	__webpack_require__(4);

	Vue.use(VueRouter);

	Vue.component('slider', __webpack_require__(5));
	//Vue.component( 'home',require('./containers/home.vue') );

	var router = new VueRouter({
		routes: [{
			path: '/',
			component: __webpack_require__(9)
		}]
	});

	new Vue({
		el: '#root',
		router: router,
		template: '\n\t\t<div id="root">\n\t\t\t<router-view></router-view>\n\t\t</div>\n\t'
	});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	__webpack_require__(6);
	__vue_script__ = __webpack_require__(7);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\h5\\project\\src\\components\\Slider.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(8);
	module.exports = __vue_script__ || {};
	if (module.exports.__esModule) module.exports = module.exports.default;
	if (__vue_template__) {
	  (typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
	}
	if (false) {
	  (function () {
	    module.hot.accept();
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    var id = "./Slider.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 6 */
4,
/* 7 */
/***/ function(module, exports) {

	'use strict';

	var container = {
		props: ['show'],
		data: function data() {
			return {
				color: 'black',
				items: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
				current: 0,
				Y1: null,
				Y2: null
			};
		},
		ready: function ready() {},
		methods: {
			hover: function hover() {
				this.color = 'white';
			},
			keydown: function keydown(e) {
				console.log(e);
			},
			touchstart: function touchstart(e) {
				this.Y1 = e.changedTouches[0].pageY;
			},
			touchend: function touchend(e) {
				this.Y2 = e.changedTouches[0].pageY;
				var distance = this.Y2 - this.Y1;

				if (distance < 0) {
					this.toNext();
				} else if (distance > 0) {
					if (this.current > 0) {
						this.current--;
					}
				}
			},
			toNext: function toNext() {
				if (this.current < this.items.length - 1) {
					this.current++;
				}
			}
		}
	};
	module.exports = container;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"container\" v-show=\"show\" v-on:touchstart=\"touchstart($event)\" v-on:touchend=\"touchend($event)\" @keypress=\"keydown($event)\" _v-1a080ab6=\"\">\n\t<ul class=\"train\" :style=\" 'transform: translate3d(0,'+(-current*10)+'%,0)' \" _v-1a080ab6=\"\">\n\t\t<li class=\"item\" v-for=\"(item,i) in items\" :style=\" 'background:'+item \" _v-1a080ab6=\"\">{{i}}\n\t\t</li>\n\t</ul>\n</div>\n";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	__vue_script__ = __webpack_require__(10);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\h5\\project\\src\\routes\\home.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(14);
	module.exports = __vue_script__ || {};
	if (module.exports.__esModule) module.exports = module.exports.default;
	if (__vue_template__) {
	  (typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
	}
	if (false) {
	  (function () {
	    module.hot.accept();
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    var id = "./home.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _stringify = __webpack_require__(11);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		data: function data() {
			return {
				state: 'container',
				maskOpacity: 1,
				user: {
					name: '',
					phone: ''
				}
			};
		},
		computed: {
			currentPage: function currentPage() {
				return this.pages[this.current];
			}
		},
		ready: function ready() {},
		methods: {
			act: function act(str) {
				var _this = this;

				switch (str) {
					case 'SHOW_CONTAINER':
						this.maskOpacity = 0;
						setTimeout(function () {
							_this.state = 'container';
						}, 1000);
						break;
				}
			},
			submit: function submit() {
				fetch('./php/register.php', {
					method: 'POST',

					headers: {},
					body: (0, _stringify2.default)(this.user)
				}).then(function (res) {
					return res.json();
				}).then(function (data) {
					console.log(data);
				}).catch(function (e, f, g) {
					console.log(e, f, g);
				});
			}
		}
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(12), __esModule: true };

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(13)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "\n<slider \n:show=\"state==='container'\"></slider>\n";

/***/ }
/******/ ])));