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

/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({"1":"preloader-container","2":"swiper-container","3":"svg-qq-container","4":"orientation","5":"3d","6":"3d-cube","7":"heart","8":"scope","9":"carousel"}[chunkId]||chunkId) + ".chunk.js";
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
}({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _list = __webpack_require__(1);

	__webpack_require__(77);

	Vue.use(VueRouter);

	var routes = [{
		path: '/',
		component: {
			template: '\n\t\t\t<div class="INDEX">\n\t\t\t\t<p v-for="a in list">\n\t\t\t\t\t<a :href=" \'#/item/\'+a.path ">{{a.path}}</a>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t',
			data: function data() {
				return {
					list: []
				};
			},
			mounted: function mounted() {
				this.list = JSON.parse(JSON.stringify(this.$root.$options.router.options.routes[1].children));
				//console.log(this.list);
			}
		}
	}, {
		path: '/item',
		component: {
			template: '\n\t\t\t<div class="ITEM">\n\t\t\t\t<div class="TOPBAR">\n\t\t\t\t\t<span @click="back">返回</span>\n\t\t\t\t</div>\n\t\t\t\t<router-view></router-view>\n\t\t\t</div>\n\t\t',
			methods: {
				back: function back() {
					history.go(-1);
				}
			}
		},
		children: _list.list
	}];

	var router = new VueRouter({
		routes: routes
	});

	new Vue({
		template: '\n\t\t<div class="ROUTER">\n\t\t\t<router-view></router-view>\n\t\t</div>\n\t',
		router: router
	}).$mount('#root');

/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var list = [{
		path: 'preloader-container',
		component: function component(r) {
			__webpack_require__.e/* nsure */(1, function () {
				r(__webpack_require__(2));
			});
		}
	}, {
		path: 'swiper-container',
		component: function component(r) {
			__webpack_require__.e/* nsure */(2, function () {
				r(__webpack_require__(10));
			});
		}
	}, {
		path: 'svg-qq-container',
		component: function component(r) {
			__webpack_require__.e/* nsure */(3, function () {
				r(__webpack_require__(18));
			});
		}
	}, {
		path: 'orientation',
		component: function component(r) {
			__webpack_require__.e/* nsure */(4, function () {
				r(__webpack_require__(23));
			});
		}
	}, {
		path: '3d',
		component: function component(r) {
			__webpack_require__.e/* nsure */(5, function () {
				r(__webpack_require__(27));
			});
		}
	}, {
		path: '3d-cube',
		component: function component(r) {
			__webpack_require__.e/* nsure */(6, function () {
				r(__webpack_require__(31));
			});
		}
	}, {
		path: 'heart',
		component: function component(r) {
			__webpack_require__.e/* nsure */(7, function () {
				r(__webpack_require__(35));
			});
		}
	}, {
		path: 'scope',
		component: function component(r) {
			__webpack_require__.e/* nsure */(8, function () {
				r(__webpack_require__(39));
			});
		}
	}, {
		path: 'strokecircle',
		component: function component(r) {
			__webpack_require__.e/* nsure */(5/* limit */, function () {
				r(__webpack_require__(45));
			});
		}
	}, {
		path: 'carousel',
		component: function component(r) {
			__webpack_require__.e/* nsure */(9, function () {
				r(__webpack_require__(49));
			});
		}
	}, {
		path: 'panoramic',
		component: function component(r) {
			__webpack_require__.e/* nsure */(9/* limit */, function () {
				r(__webpack_require__(53));
			});
		}
	}, {
		path: 'rain',
		component: function component(r) {
			__webpack_require__.e/* nsure */(8/* limit */, function () {
				r(__webpack_require__(57));
			});
		}
	}, {
		path: 'circles',
		component: function component(r) {
			__webpack_require__.e/* nsure */(8/* limit */, function () {
				r(__webpack_require__(62));
			});
		}
	}, {
		path: 'snowfall',
		component: function component(r) {
			__webpack_require__.e/* nsure */(8/* limit */, function () {
				r(__webpack_require__(67));
			});
		}
	}, {
		path: 'neonhexagons',
		component: function component(r) {
			__webpack_require__.e/* nsure */(8/* limit */, function () {
				r(__webpack_require__(72));
			});
		}
	}];exports.list = list;

/***/ },

/***/ 77:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

/******/ })));