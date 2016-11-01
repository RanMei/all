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
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		5:0
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

/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({"0":"admin","1":"cart","2":"index","3":"item","4":"search"}[chunkId]||chunkId) + ".chunk.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	console.log(location);

	var _DOMAIN;
	if (/^http/.test(location.href)) {
		_DOMAIN = location.origin + '/time';
	} else {
		_DOMAIN = 'file:///D:/git/all/time';
	}

	console.log(_DOMAIN);

	var DIR = {
		root: _DOMAIN,
		img: _DOMAIN + '/../fytpy/images',
		//api: _DOMAIN+'/../api/time',
		api: 'http://localhost:80/api',
		index: _DOMAIN + '/index.html',
		cart: _DOMAIN + '/cart.html',
		item: _DOMAIN + '/item.html',
		search: _DOMAIN + '/search.html'
	};

	var IMG = '/fytpy/images/';
	var ITEM = '';

	exports.DIR = DIR;
	exports.IMG = IMG;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./../../node_modules/postcss-loader/index.js!./common.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./../../node_modules/postcss-loader/index.js!./common.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "a:link {\n  text-decoration: none;\n}\n* {\n  margin: 0;\n  padding: 0;\n}\nul,\nli {\n  list-style: none;\n}\nbutton {\n  display: block;\n  border: none;\n  cursor: pointer;\n}\nbody {\n  font-family: '\\5FAE\\8F6F\\96C5\\9ED1';\n}\n[v-cloak] {\n  display: none;\n}\n/**/\n.wrapper {\n  width: 100%;\n  min-width: 1000px;\n}\n.container {\n  width: 1000px;\n  margin: auto;\n}\n.row {\n  width: 1000px;\n  margin: auto;\n}\n.clear {\n  clear: both;\n}\n/**/\n#main {\n  z-index: -1;\n}\n.banner {\n  height: 150px;\n  overflow: hidden;\n}\n.banner > ul > a {\n  width: 180px;\n  height: 95px;\n  display: block;\n  border: 1px solid lightgrey;\n}\n.banner a:visited {\n  color: black;\n}\n.banner .label {\n  width: 42px;\n  height: 20px;\n  font-size: 14px;\n  line-height: 20px;\n  text-align: center;\n  color: white;\n  background: #FF5A44;\n}\n.banner p {\n  color: black;\n}\n.LINE {\n  height: 4px;\n  background: -webkit-linear-gradient(left, #D2AB1A, #337FAB);\n  background: linear-gradient(to right, #D2AB1A, #337FAB);\n}\n", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	__webpack_require__(16);
	__vue_script__ = __webpack_require__(18);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\components\\MyHeader.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(19);
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
	    var id = "./MyHeader.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-341844b6&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./MyHeader.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-341844b6&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./MyHeader.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "/* searchbar */\n.searchbar[_v-341844b6] {\n  height: 120px;\n  background: -webkit-linear-gradient(white, #E5E5E5);\n  background: linear-gradient(white, #E5E5E5);\n  overflow: hidden;\n}\n.searchbar .search_box[_v-341844b6] {\n  width: 600px;\n  height: 40px;\n  margin: 40px auto 0 auto;\n  border-radius: 20px;\n  border: 1px solid lightgrey;\n  background: white;\n  box-shadow: inset 0 2px 5px lightgrey;\n}\n.searchbar .search_box input[_v-341844b6] {\n  float: left;\n  width: 400px;\n  height: 20px;\n  font-size: 17px;\n  line-height: 20px;\n  margin: 10px 0 0 40px;\n  color: grey;\n  border: none;\n}\n.searchbar .search_box .search_btn[_v-341844b6] {\n  float: right;\n  width: 50px;\n  height: 32px;\n  margin: 4px 20px 0 0;\n  border-radius: 16px;\n  font-size: 20px;\n  line-height: 32px;\n  text-align: center;\n  color: #B2B2B2;\n}\n.searchbar .search_box .search_btn[_v-341844b6]:visited {\n  color: #B2B2B2;\n}\n.searchbar .search_box .search_btn[_v-341844b6]:hover {\n  background: #ECE9D8;\n}\n/**/\n.shade[_v-341844b6] {\n  width: 100%;\n  min-width: 1000px;\n  box-shadow: 0 0 40px 35px grey;\n}\n/**/\n.topbar[_v-341844b6] {\n  position: relative;\n  background: #2378BA;\n}\n.topbar .container[_v-341844b6] {\n  padding: 20px 0 20px 0;\n  background: #2378BA;\n  color: white;\n  font-size: 15px;\n}\n.topbar .container a[_v-341844b6]:link {\n  color: white;\n}\n.topbar .container a[_v-341844b6]:visited {\n  color: white;\n}\n.topbar .container > p[_v-341844b6] {\n  float: left;\n  margin: 0 0 0 20px;\n}\n.topbar .container > ul[_v-341844b6] {\n  float: right;\n  margin: 0 20px 0 0;\n}\n.topbar .container > ul > li[_v-341844b6] {\n  float: left;\n  cursor: pointer;\n}\n.topbar .container > ul .separator[_v-341844b6] {\n  float: left;\n  margin: 0 10px 0 10px;\n}\n.topbar .quantityIn[_v-341844b6] {\n  color: #D2291E;\n}\n.topbar .my_cart[_v-341844b6] {\n  position: relative;\n}\n.topbar .my_cart:hover .cart_panel[_v-341844b6] {\n  display: block;\n}\n.topbar .cart_panel[_v-341844b6] {\n  position: absolute;\n  right: 0;\n  top: 30px;\n  width: 100px;\n  padding: 15px;\n  color: black;\n  background: white;\n  border-radius: 4px;\n  display: none;\n  z-index: 99;\n}\n", ""]);

	// exports


/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
		props: ['dir']
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"MY-HEADER\" _v-341844b6=\"\">\n\t<!-- searchbar -->\n\t<div class=\"searchbar wrapper\" _v-341844b6=\"\">\n\t\t<div class=\"container\" _v-341844b6=\"\">\n\t\t\t<div class=\"search_box\" _v-341844b6=\"\">\n\t\t\t\t<form _v-341844b6=\"\">\n\t\t\t\t\t<input type=\"text\" placeholder=\"请输入您想搜索的商品名称\" _v-341844b6=\"\">\n\t\t\t\t\t<a :href=\" dir.search \" class=\"a-search search_btn\" _v-341844b6=\"\"><i class=\"fa fa-search\" _v-341844b6=\"\"></i></a>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"LINE wrapper\" _v-341844b6=\"\"></div>\n\t<!-- topbar -->\n\t<div class=\"topbar wrapper\" _v-341844b6=\"\">\n\t\t<div class=\"container\" _v-341844b6=\"\">\n\t\t\t<p _v-341844b6=\"\"><a class=\"a_home\" :href=\"dir.index\" _v-341844b6=\"\">欢迎来到飞越太平洋海淘网站</a></p>\n\t\t\t<ul _v-341844b6=\"\">\n\t\t\t\t<li _v-341844b6=\"\"><a href=\"register.html\" class=\"a-signin login\" _v-341844b6=\"\">登录</a></li><span class=\"separator\" _v-341844b6=\"\">|</span>\n\t\t\t\t<li _v-341844b6=\"\"><a href=\"register.html\" class=\"a-signup register\" _v-341844b6=\"\">注册</a></li><span class=\"separator\" _v-341844b6=\"\">|</span>\n\t\t\t\t<li _v-341844b6=\"\"><i class=\"fa fa-file\" _v-341844b6=\"\"></i> <a class=\"a_my_orders\" href=\"./orders.html\" _v-341844b6=\"\">我的订单</a></li><span class=\"separator\" _v-341844b6=\"\">|</span>\n\t\t\t\t<li class=\"my_cart\" _v-341844b6=\"\">\n\t\t\t\t\t<i class=\"fa fa-shopping-cart\" _v-341844b6=\"\"></i> <a class=\"a-cart\" :href=\" dir.cart \" _v-341844b6=\"\">我的购物车(<span class=\"quantityIn\" _v-341844b6=\"\">0</span>)</a>\n\t\t\t\t\t<div class=\"cart_panel\" _v-341844b6=\"\">\n\t\t\t\t\t\t我的购物车\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<div class=\"clear\" _v-341844b6=\"\"></div>\n\t\t</div>\n\t\t<!--\n\t\t<div class=\"banner container\">\n\t\t\t<ul>\n\t\t\t\t<a href=\"\" style=\"background:url(images/165404.24885127.jpg)\">\n\t\t\t\t\t<div class=\"label\">新品</div>\n\t\t\t\t\t<div>星球大战入耳式耳机</div>\n\t\t\t\t</a>\n\t\t\t</ul>\n\t\t</div>\n\t\t-->\n\t</div>\n</div>\n";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	__webpack_require__(21);
	__vue_script__ = __webpack_require__(23);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\components\\Focus.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(24);
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
	    var id = "./Focus.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(22);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-6988d3bc&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Focus.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-6988d3bc&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Focus.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "/* focus */\n.focus[_v-6988d3bc] {\n  position: relative;\n  width: 100%;\n  height: 500px;\n  margin: auto;\n  background: white;\n  overflow: hidden;\n}\n.focus > a[_v-6988d3bc] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: none;\n}\n.focus > a.active[_v-6988d3bc] {\n  display: block;\n}\n.focus > a li[_v-6988d3bc] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n.focus > a img[_v-6988d3bc] {\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n  height: 100%;\n}\n.focus-tabs[_v-6988d3bc] {\n  display: table;\n  margin: auto;\n  margin-top: 400px;\n  overflow: hidden;\n}\n.focus-tabs .dot[_v-6988d3bc] {\n  float: left;\n  width: 15px;\n  height: 15px;\n  margin: 0 5px;\n  border-radius: 50%;\n  border: 1px solid black;\n  background: white;\n  cursor: pointer;\n  opacity: 0.5;\n}\n.focus-tabs .dot.active[_v-6988d3bc] {\n  background: red;\n}\n.focus-last[_v-6988d3bc] {\n  position: absolute;\n  left: 10px;\n  top: 200px;\n  width: 49px;\n  height: 104px;\n  background: black;\n  line-height: 104px;\n  text-align: center;\n  bottom: 0px;\n  cursor: pointer;\n  font-size: 300%;\n  color: white;\n  z-index: 1;\n  opacity: 0.5;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.focus-last[_v-6988d3bc]:hover {\n  opacity: 0.7;\n}\n.focus-next[_v-6988d3bc] {\n  position: absolute;\n  right: 10px;\n  top: 200px;\n  width: 49px;\n  height: 104px;\n  background: black;\n  line-height: 104px;\n  text-align: center;\n  bottom: 0px;\n  cursor: pointer;\n  font-size: 300%;\n  color: white;\n  z-index: 1;\n  opacity: 0.5;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n.focus-next[_v-6988d3bc]:hover {\n  opacity: 0.7;\n}\n", ""]);

	// exports


/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: ['dir'],
		data: function data() {
			return {
				items: [0, 1, 2, 3],
				current: 0
			};
		},
		methods: {
			next: function next() {
				if (this.current < 3) {
					this.current++;
				} else {
					this.current = 0;
				}
			}
		}
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "\n<ul class=\"focus wrapper\" _v-6988d3bc=\"\">\n\t<a href=\"\" v-for=\"(a,i) in items\" :class=\" i===current?'active':'' \" _v-6988d3bc=\"\">\n\t\t<li :style=\" 'background:url('+dir+(i+1)+'.jpg) no-repeat center;' \" _v-6988d3bc=\"\">\n\t\t</li>\n\t</a>\n\t<ul class=\"focus-tabs\" _v-6988d3bc=\"\">\n\t\t<li key=\"i\" class=\"dot\" v-for=\"(a,i) in items\" :class=\" i===current?'active':'' \" _v-6988d3bc=\"\"></li>\n\t</ul>\n\t<div class=\"focus-last\" _v-6988d3bc=\"\"><i class=\"fa fa-angle-left\" _v-6988d3bc=\"\"></i></div>\n\t<div class=\"focus-next\" @click=\"next\" _v-6988d3bc=\"\"><i class=\"fa fa-angle-right\" _v-6988d3bc=\"\"></i></div>\t\t\n</ul>\n";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	__webpack_require__(26);
	__vue_script__ = __webpack_require__(28);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\components\\BackToTop.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(29);
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
	    var id = "./BackToTop.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(27);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-8f3a88d2&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./BackToTop.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-8f3a88d2&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./BackToTop.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "/* back_to_top button */\n.BACK-TO-TOP[_v-8f3a88d2] {\n  position: fixed;\n  right: 10px;\n  bottom: 10px;\n  width: 50px;\n  height: 50px;\n  background: lightgrey;\n  z-index: 100;\n  font-size: 30px;\n  line-height: 50px;\n  text-align: center;\n  cursor: pointer;\n}\n", ""]);

	// exports


/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		methods: {
			back: function back() {
				window.scroll(0, 0);
			}
		}
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"BACK-TO-TOP\" @click=\"back\" _v-8f3a88d2=\"\"><i class=\"fa fa-angle-up\" _v-8f3a88d2=\"\"></i></div>\n";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	__webpack_require__(31);
	__vue_script__ = __webpack_require__(33);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\components\\MyFooter.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(34);
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
	    var id = "./MyFooter.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(32);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-767d0c9a&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./MyFooter.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-767d0c9a&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./MyFooter.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".footer .container[_v-767d0c9a] {\n  padding: 50px 0 50px 0;\n  background: #F2F2F2;\n  overflow: hidden;\n}\n.footer .container a[_v-767d0c9a] {\n  margin: 0 0 0 40px;\n  font-size: 14px;\n  color: #999999;\n}\n.footer .container a[_v-767d0c9a]:link {\n  color: #999999;\n  text-decoration: none;\n}\n.footer .container a[_v-767d0c9a]:visited {\n  color: #999999;\n}\n.footer .container a[_v-767d0c9a]:hover {\n  color: #0081BC;\n}\n.footer .container a[_v-767d0c9a]:active {\n  color: #0081BC;\n}\n.footer .container > li[_v-767d0c9a] {\n  float: left;\n  width: 200px;\n}\n.footer .container > li > h4[_v-767d0c9a] {\n  margin: 0 0 20px 40px;\n  font-size: 14px;\n  color: black;\n  font-weight: normal;\n}\n.footer .container > li p[_v-767d0c9a] {\n  font-size: 14px;\n  color: #999999;\n}\n.footer .container > li:last-child h4[_v-767d0c9a] {\n  margin: 0 0 20px 0;\n}\n.footer .container .serviceTel[_v-767d0c9a] {\n  font-size: 20px;\n  color: black;\n}\n.copyright[_v-767d0c9a] {\n  background: #F2F2F2;\n  color: grey;\n  font-size: 14px;\n}\n.copyright .container[_v-767d0c9a] {\n  padding: 20px 0 20px 0;\n  border-top: 1px solid lightgrey;\n}\n.copyright p[_v-767d0c9a] {\n  width: 100%;\n  text-align: center;\n}\n", ""]);

	// exports


/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {};

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"MY-FOOTER wrapper\" _v-767d0c9a=\"\">\n\t<!-- footer -->\n\t<div class=\"LINE wrapper\" _v-767d0c9a=\"\"></div>\n\t<div class=\"footer wrapper\" style=\"background:#F2F2F2;\" _v-767d0c9a=\"\">\n\t\t<ul class=\"container\" _v-767d0c9a=\"\">\n\t\t\t<li _v-767d0c9a=\"\">\t\n\t\t\t\t<h4 _v-767d0c9a=\"\">购物指南</h4>\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">新用户注册</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">购物流程</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">常见问题</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">发票制度</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">联系我们</a>\n\t\t\t</li>\n\t\t\t<li _v-767d0c9a=\"\">\t\n\t\t\t\t<h4 _v-767d0c9a=\"\">支付方式</h4>\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">在线付款</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">余额付款</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">优惠券使用说明</a>\n\t\t\t</li>\n\t\t\t<li _v-767d0c9a=\"\">\t\n\t\t\t\t<h4 _v-767d0c9a=\"\">配送方式</h4>\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">邮费说明</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">配送服务范围</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">配送速度查询</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">验货与签收</a>\n\t\t\t</li>\n\t\t\t<li _v-767d0c9a=\"\">\t\n\t\t\t\t<h4 _v-767d0c9a=\"\">售后服务</h4>\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">售后政策</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">退货政策</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">退货流程</a>\n\t\t\t</li>\n\t\t\t<li _v-767d0c9a=\"\">\t\n\t\t\t\t<h4 _v-767d0c9a=\"\">客服电话</h4>\n\t\t\t\t<p class=\"serviceTel\" _v-767d0c9a=\"\">4006-118-118</p>\n\t\t\t\t<p _v-767d0c9a=\"\">周一至周日9:00~22:00</p>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\t<div class=\"copyright wrapper\" _v-767d0c9a=\"\">\n\t\t<div class=\"container\" _v-767d0c9a=\"\">\n\t\t\t<p _v-767d0c9a=\"\">Copyright © 2015.FYTPY All rights reserved.</p>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ }
/******/ ]);