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

	__webpack_require__(12);

	Vue.use(VueRouter);

	Vue.component('slider', __webpack_require__(13));
	//Vue.component( 'home',require('./containers/home.vue') );

	var router = new VueRouter({
		routes: [{
			path: '/',
			component: __webpack_require__(17)
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
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};

	/* styles */
	__webpack_require__(14);

	/* script */
	__vue_exports__ = __webpack_require__(15);

	/* template */
	var __vue_template__ = __webpack_require__(16);
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
	__vue_options__.__file = "D:\\git\\all\\_mobile\\h5\\project\\src\\components\\Slider.vue";
	if (typeof __vue_options__.name === "undefined") {
	  __vue_options__.name = "Slider";
	}__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	__vue_options__._scopeId = "data-v-1a080ab6";

	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-1a080ab6", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-1a080ab6", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional && typeof __vue_template__ !== "undefined") {
	  console.error("[vue-loader] Slider.vue: functional components are not supported with templates, they should use render functions.");
	}

	module.exports = __vue_exports__;

/***/ },
/* 14 */
12,
/* 15 */
/***/ function(module, exports) {

	'use strict';

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
				//console.log(distance)
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    staticClass: "container",
	    on: {
	      "touchstart": function($event) {
	        _vm.touchstart($event)
	      },
	      "touchend": function($event) {
	        _vm.touchend($event)
	      },
	      "keypress": function($event) {
	        _vm.keydown($event)
	      }
	    }
	  }, [_c('ul', {
	    staticClass: "train",
	    style: ('transform: translate3d(0,' + (-_vm.current * 10) + '%,0)')
	  }, _vm._l((_vm.items), function(item, i) {
	    return _c('li', {
	      staticClass: "item",
	      style: ('background:' + item)
	    }, [_vm._v(_vm._s(i) + "\r\n\t\t")])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1a080ab6", module.exports)
	  }
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};

	/* script */
	__vue_exports__ = __webpack_require__(18);

	/* template */
	var __vue_template__ = __webpack_require__(19);
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
	__vue_options__.__file = "D:\\git\\all\\_mobile\\h5\\project\\src\\routes\\home.vue";
	if (typeof __vue_options__.name === "undefined") {
	  __vue_options__.name = "home";
	}__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;

	/* hot reload */
	if (false) {
	  (function () {
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    module.hot.accept();
	    if (!module.hot.data) {
	      hotAPI.createRecord("data-v-3cf91062", __vue_options__);
	    } else {
	      hotAPI.reload("data-v-3cf91062", __vue_options__);
	    }
	  })();
	}
	if (__vue_options__.functional && typeof __vue_template__ !== "undefined") {
	  console.error("[vue-loader] home.vue: functional components are not supported with templates, they should use render functions.");
	}

	module.exports = __vue_exports__;

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//

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
					// mode: 'no-cors',
					headers: {
						//'Access-Control-Allow-Origin': 'http://madsoap.net/',
						// 'Accept': 'application/json',
						// 'Content-Type': 'application/json'
						//'Content-Type':'application/x-www-form-urlencoded'
					},
					body: JSON.stringify(this.user)
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('slider', {
	    attrs: {
	      "show": _vm.state === 'container'
	    }
	  })
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-3cf91062", module.exports)
	  }
	}

/***/ }
/******/ ])));