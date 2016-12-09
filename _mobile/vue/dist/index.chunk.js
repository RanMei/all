/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			var _m = moreModules[moduleId];

/******/ 			// Check if module is deduplicated
/******/ 			switch(typeof _m) {
/******/ 			case "object":
/******/ 				// Module can be created from a template
/******/ 				modules[moduleId] = (function(_m) {
/******/ 					var args = _m.slice(1), templateId = _m[0];
/******/ 					return function (a,b,c) {
/******/ 						modules[templateId].apply(this, [a,b,c].concat(args));
/******/ 					};
/******/ 				}(_m));
/******/ 				break;
/******/ 			case "function":
/******/ 				// Normal module
/******/ 				modules[moduleId] = _m;
/******/ 				break;
/******/ 			default:
/******/ 				// Module is a copy of another module
/******/ 				modules[moduleId] = modules[_m];
/******/ 				break;
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};

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

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({}[chunkId]||chunkId) + ".chunk.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

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
		component: __webpack_require__(63),
		redirect: '/list',
		children: [{
			path: 'home',
			component: __webpack_require__(74)
		}, {
			path: 'list',
			component: __webpack_require__(78)
		}]
	}, {
		path: '/item',
		component: __webpack_require__(83),
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
		component: function component(resolve) {
			__webpack_require__.e/* nsure */(1, function () {
				resolve(__webpack_require__(4));
			});
		}
	}, {
		path: 'card',
		component: function component(resolve) {
			__webpack_require__.e/* nsure */(2, function () {
				resolve(__webpack_require__(8));
			});
		}
	}, {
		path: 'cardstwo',
		component: function component(resolve) {
			__webpack_require__.e/* nsure */(3, function () {
				resolve(__webpack_require__(12));
			});
		}
	}, {
		path: 'gooeymenu',
		component: function component(resolve) {
			__webpack_require__.e/* nsure */(4, function () {
				resolve(__webpack_require__(16));
			});
		}
	}, {
		path: 'wave',
		component: function component(resolve) {
			__webpack_require__.e/* nsure */(1/* limit */, function () {
				resolve(__webpack_require__(20));
			});
		}
	}, {
		path: '3dcube',
		component: function component(resolve) {
			__webpack_require__.e/* nsure */(3/* limit */, function () {
				resolve(__webpack_require__(24));
			});
		}
	}, {
		path: 'buttonripple',
		component: function component(resolve) {
			__webpack_require__.e/* nsure */(1/* limit */, function () {
				resolve(__webpack_require__(28));
			});
		}
	}, {
		path: 'svgpenguin',
		component: function component(resolve) {
			__webpack_require__.e/* nsure */(5, function () {
				resolve(__webpack_require__(32));
			});
		}
	}, {
		path: 'carousel',
		component: function component(resolve) {
			__webpack_require__.e/* nsure */(4/* limit */, function () {
				resolve(__webpack_require__(36));
			});
		}
	}, {
		path: 'strokecircle',
		component: function component(resolve) {
			__webpack_require__.e/* nsure */(4/* limit */, function () {
				resolve(__webpack_require__(40));
			});
		}
	}, {
		path: 'orientation',
		component: function component(resolve) {
			__webpack_require__.e/* nsure */(2/* limit */, function () {
				resolve(__webpack_require__(44));
			});
		}
	}, {
		path: 'morphingphones',
		component: function component(resolve) {
			__webpack_require__.e/* nsure */(6, function () {
				resolve(__webpack_require__(48));
			});
		}
	}, {
		path: 'rain',
		component: function component(resolve) {
			__webpack_require__.e/* nsure */(7, function () {
				resolve(__webpack_require__(52));
			});
		}
	}, {
		path: 'snowfall',
		component: function component(resolve) {
			__webpack_require__.e/* nsure */(8, function () {
				resolve(__webpack_require__(54));
			});
		}
	}, {
		path: 'snow',
		component: function component(resolve) {
			__webpack_require__.e/* nsure */(7/* limit */, function () {
				resolve(__webpack_require__(56));
			});
		}
	}, {
		path: 'heart',
		component: function component(resolve) {
			__webpack_require__.e/* nsure */(2/* limit */, function () {
				resolve(__webpack_require__(57));
			});
		}
	}, {
		path: 'scope',
		component: function component(resolve) {
			__webpack_require__.e/* nsure */(9, function () {
				resolve(__webpack_require__(61));
			});
		}
	}];
	exports.list = list;

/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(64);
	__vue_script__ = __webpack_require__(65);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\router\\Home.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(82);
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
	    var id = "_v-66d00aac/Home.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 64 */
1,
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _stringify = __webpack_require__(66);

	var _stringify2 = _interopRequireDefault(_stringify);

	var _items = __webpack_require__(69);

	var _items2 = _interopRequireDefault(_items);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_items2.default.sort(function (a, b) {
		if (a.name < b.name) {
			return -1;
		}
		if (a.name > b.name) {
			return 1;
		}
		return 0;
	});

	exports.default = {
		components: {
			Navbar: __webpack_require__(70),
			Showcase: __webpack_require__(74),
			List: __webpack_require__(78)
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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(67), __esModule: true };

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(68)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 68 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 69 */
/***/ function(module, exports) {

	'use strict';

	module.exports = [{
		name: 'Preloader',
		component: 'Preloader',
		path: '../lib/Preloader.vue'
	}, {
		name: 'Card',
		component: 'Card',
		path: '../lib/Card.vue'
	}, {
		name: 'CardsTwo',
		component: 'CardsTwo',
		path: '../lib/CardsTwo.vue'
	}, {
		name: 'GooeyMenu',
		component: 'GooeyMenu',
		path: '../lib/GooeyMenu.vue'
	}, {
		name: 'Wave',
		component: 'Wave',
		path: '../lib/Wave.vue'
	}, {
		name: '3dCube',
		component: '3dCube',
		path: '../lib/3dCube.vue'
	}, {
		name: 'ButtonRipple',
		component: 'ButtonRipple',
		path: '../lib/ButtonRipple.vue'
	}, {
		name: 'SvgPenguin',
		component: 'SvgPenguin',
		path: '../lib/SvgPenguin.vue'
	}, {
		name: 'Carousel',
		component: 'Carousel',
		path: '../lib/Carousel.vue'
	}, {
		name: 'StrokeCircle',
		component: 'StrokeCircle',
		path: '../lib/StrokeCircle.vue'
	}, {
		name: 'Orientation',
		component: 'Orientation',
		path: '../lib/Orientation.vue'
	}, {
		name: 'MorphingPhones',
		component: 'MorphingPhones',
		path: '../lib/MorphingPhones.vue'

	}, {
		name: 'Rain',
		component: 'Rain',
		path: '../canvas/Rain.js'
	}, {
		name: 'Snowfall',
		component: 'Snowfall',
		path: '../canvas/Snowfall.js'
	}, {
		name: 'Snow',
		component: 'Snow',
		path: '../canvas/Snow.js'
	}, {
		name: 'Heart',
		component: 'Heart',
		path: '../canvas/Heart.vue'
	}, {
		name: 'Scope',
		tags: ['canvas'],
		component: 'Scope',
		path: '../Canvas/Scope.js'
	}];

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(71);
	__vue_script__ = __webpack_require__(72);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\components\\Navbar.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(73);
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
	    var id = "_v-168eb930/Navbar.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 71 */
1,
/* 72 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {};

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"Navbar\" _v-168eb930=\"\">\n\t<ul _v-168eb930=\"\">\n\t\t<a href=\"#/home\" _v-168eb930=\"\">Home</a>\n\t\t<a href=\"#/list\" _v-168eb930=\"\">List</a>\n\t</ul>\n</div>\n";

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(75);
	__vue_script__ = __webpack_require__(76);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\components\\Showcase.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(77);
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
	    var id = "_v-2340944d/Showcase.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 75 */
1,
/* 76 */
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
/* 77 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"Showcase\">\n\t<a class=\"item__\"\n\tv-for=\"a in items\"\n\t:href=\" '#/item/'+a.name.toLowerCase() \">\n\t\t<img :src=\" '../../img/vue/GooeyMenu.png' \"/>\n\t\t{{a.name}}\n\t</a>\n</div>\n";

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(79);
	__vue_script__ = __webpack_require__(80);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\components\\List.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(81);
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
	    var id = "_v-64b058be/List.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 79 */
1,
/* 80 */
76,
/* 81 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"List\" _v-64b058be=\"\">\n\t<div class=\"item__\" v-for=\"a in items\" _v-64b058be=\"\">\n\t\t<a :href=\" '#/item/'+a.name.toLowerCase() \" _v-64b058be=\"\">{{a.name}}</a>\n\t</div>\n</div>\n";

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n<div class=\"Home\" _v-66d00aac=\"\">\n\t<router-view :items=\"items\" _v-66d00aac=\"\"></router-view>\n\t<navbar _v-66d00aac=\"\"></navbar>\n</div>\n";

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(84);
	__vue_script__ = __webpack_require__(85);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\router\\RouteItem.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(86);
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
	    var id = "_v-4308a7ff/RouteItem.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 84 */
1,
/* 85 */
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
/* 86 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"RouteItem\" _v-4308a7ff=\"\">\n\t<div class=\"TOPBAR\" _v-4308a7ff=\"\">\n\t\t<span @click=\"back\" _v-4308a7ff=\"\">返回</span>\n\t</div>\n\t<router-view _v-4308a7ff=\"\"></router-view>\n</div>\n";

/***/ }
/******/ ])));