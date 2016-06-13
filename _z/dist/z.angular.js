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
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _2 = __webpack_require__(1);

	var $ = window.jQuery || window.$;

	var forEach = _2._.forEach;
	var angularModule;

	// function setupModuleLoader(window){

	// 	var modules = {};
	// 	function createModule( name,requires ){
	// 		var moduleInstance = {
	// 			name:name,
	// 			requires:requires
	// 		}
	// 		modules[name] = moduleInstance;
	// 		return moduleInstance;
	// 	}
	// 	function getModule( name ){
	// 		return modules[name];
	// 	}
	// }

	var jqLite = $;

	function angularInit() {
		var appElement, module;
		if (!appElement) {
			appElement = document.querySelector('[ng-app]');
			module = appElement.getAttribute('ng-app');
		}
		console.log(appElement, module);
	}

	// function bootstrap(){

	// }

	// function publishExternalAPI(){
	// 	angularModule = setupModuleLoader(window);
	// }

	// function createInjector(){

	// }

	function Scope() {
		this.$$watchers = [];
	}

	Scope.prototype = {
		$watch: function $watch() {
			var watcher = {};
			this.$$watcher.push(watcher);
		},
		$digest: function $digest() {
			var self = this;
			var oldValue, newValue;
			forEach(self.$$watchers, function (watcher) {});
		}
	};

	jqLite(document).ready(function () {
		angularInit();
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _ = {
		bubbleSort: bubbleSort,
		camelCase: camelCase,
		copy: copy,
		//each
		extend: extend,
		forEach: forEach
		//map
	};

	// Functions to process strings.
	function camelCase(string) {
		string = string.replace(/(-[a-z]?)|(_[a-z]?)/ig, function (match) {
			return match.replace(/-|_/, '').toUpperCase();
		});
		return string;
	}

	// Functions to process arrays.
	function forEach(arr, callback) {
		for (var i = 0; i < arr.length; i++) {
			callback(arr[i], i);
		}
	}
	function bubbleSort(arr) {
		var i = 0;
		while (i < arr.length - 1) {
			for (var j = i + 1; j < arr.length - 1; j++) {
				if (arr[i] > arr[j]) {
					var x = arr[i];
					arr[i] = arr[j];
					arr[j] = x;
				};
			};
			i++;
		}
		return arr;
	}

	// Functions to process objects.
	function extend(obj) {
		var target = this;
		for (var p in obj) {
			target[p] = obj[p];
		}
		return target;
	}

	function copy(src, deep) {
		var __copy;
		if ((typeof src === "undefined" ? "undefined" : _typeof(src)) === "object") {
			if (src.length) {
				__copy = [];
			} else {
				__copy = {};
			};
			for (var x in src) {
				if (deep && _typeof(src[x]) === "object") {
					__copy[x] = Zeal.copy(src[x], true);
				} else {
					__copy[x] = src[x];
				};
			};
			return __copy;
		};
	};

	window._ = _;

	exports._ = _;

/***/ }
/******/ ]);