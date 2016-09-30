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

	__webpack_require__(1);

	Vue.component( 'imgBlured',__webpack_require__(5) );
	Vue.component( 'stackBoth',__webpack_require__(11) );
	Vue.component( 'buttonAlarm',__webpack_require__(19) );

	new Vue({
		el: 'body'
	})

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./index.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n}\nhtml {\n  font-family: 'Microsoft Yahei';\n}\nbody {\n  background: white;\n  overflow-x: hidden;\n}\nul,\nli {\n  list-style: none;\n}\n.app {\n  width: 100%;\n  overflow: hidden;\n}\n.app .focus {\n  position: relative;\n  width: 100%;\n  height: 7.24rem;\n  background: #9bdbca;\n}\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(6)
	__vue_script__ = __webpack_require__(9)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\h5\\live\\src\\img-blured.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(10)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./img-blured.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2be74851&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./img-blured.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2be74851&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./img-blured.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".img-blurred[_v-2be74851] {\n  position: relative;\n  width: 50%;\n  height: 3.5rem;\n  margin: auto;\n}\n.img-blurred .img-1[_v-2be74851] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: block;\n  width: 100%;\n  z-index: 2;\n}\n.img-blurred .img-2[_v-2be74851] {\n  display: block;\n  width: 90%;\n  height: 3rem;\n  margin: auto;\n  -webkit-filter: blur(0.4rem);\n          filter: blur(0.4rem);\n}\n", ""]);

	// exports


/***/ },
/* 8 */
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
/* 9 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
		data: function data() {
			return {
				img: {
					pic: 'img/pic.jpg'
				}
			};
		}
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"img-blurred\" _v-2be74851=\"\">\n\t<img class=\"img-1\" :src=\"img.pic\" _v-2be74851=\"\">\n\t<img class=\"img-2\" :src=\"img.pic\" _v-2be74851=\"\">\n</div>\n";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(12)
	__vue_script__ = __webpack_require__(14)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\h5\\live\\src\\stack-both.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(18)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./stack-both.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-c5404732&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./stack-both.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-c5404732&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./stack-both.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".space[_v-c5404732] {\n  width: 100%;\n  padding: 60vw 0 1.4rem 0;\n  overflow-x: hidden;\n}\n.stack[_v-c5404732] {\n  box-sizing: border-box;\n  position: relative;\n  width: 6.56rem;\n  height: 5.32rem;\n  margin: auto;\n  -webkit-perspective: 4rem;\n          perspective: 4rem;\n}\n.stack .card[_v-c5404732] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-transform: translate3d(7rem, 0, 0);\n          transform: translate3d(7rem, 0, 0);\n  border-radius: 0.05rem;\n  border: 1px solid #d5d5d5;\n  background: white!important;\n  box-shadow: 0 0.1rem 0.5rem #cbcbcb;\n}\n.stack .card .part-top[_v-c5404732] {\n  box-sizing: border-box;\n  width: 100%;\n  height: 0.94rem;\n  margin-top: 0.58rem;\n  margin-bottom: 0.6rem;\n  padding-left: 0.36rem;\n  border-left: 0.08rem solid black;\n}\n.stack .card .part-top .right[_v-c5404732] {\n  position: relative;\n  height: 100%;\n}\n.stack .card .part-top .right .title__[_v-c5404732] {\n  line-height: 0.36rem;\n  font-size: 0.36rem;\n}\n.stack .card .part-top .right .stars[_v-c5404732] {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 1.64rem;\n  height: 0.23rem;\n  background: #cccccc;\n}\n.stack .card .part-top .right .stars .bg[_v-c5404732] {\n  width: 0;\n  height: 100%;\n  background: #ffbf00;\n}\n.stack .card .part-top .right .stars .starsImg[_v-c5404732] {\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n}\n.stack .card .part-top .right .score[_v-c5404732] {\n  position: absolute;\n  left: 1.78rem;\n  bottom: 0;\n  font-size: 0.24rem;\n  line-height: 0.24rem;\n  color: #9d9d9d;\n}\n.stack .card .intro[_v-c5404732] {\n  padding: 0 0.44rem;\n  font-size: 0.24rem;\n  line-height: 0.36rem;\n  color: #9b9b9b;\n}\n.stack .card .cover[_v-c5404732] {\n  position: absolute;\n  right: 0.32rem;\n  top: -1.5rem;\n  width: 2.8rem;\n}\n.stack .card.card0[_v-c5404732] {\n  background: #91C794;\n}\n.stack .card.card1[_v-c5404732] {\n  background: #9993C1;\n}\n.stack .card.card2[_v-c5404732] {\n  background: #B2DFDB;\n}\n.stack .card.card3[_v-c5404732] {\n  background: #FBCBBD;\n}\n.stack .card.card4[_v-c5404732] {\n  background: #FFF59D;\n}\n.stack .card.leave[_v-c5404732] {\n  -webkit-animation: leave 0.6s forwards;\n          animation: leave 0.6s forwards;\n}\n.stack .card.toFirst[_v-c5404732] {\n  -webkit-animation: toFirst 0.6s forwards;\n          animation: toFirst 0.6s forwards;\n}\n.stack .card.toSecond[_v-c5404732] {\n  -webkit-animation: toSecond 0.6s forwards;\n          animation: toSecond 0.6s forwards;\n}\n.stack .card.toThird[_v-c5404732] {\n  -webkit-animation: toThird 0.6s forwards;\n          animation: toThird 0.6s forwards;\n}\n.stack .card.wira-right[_v-c5404732] {\n  -webkit-transform-origin: 250% 50%;\n          transform-origin: 250% 50%;\n  -webkit-animation-timing-function: cubic-bezier(0.3, 1, 0.3, 1);\n          animation-timing-function: cubic-bezier(0.3, 1, 0.3, 1);\n  -webkit-animation: wira-right 1s forwards;\n          animation: wira-right 1s forwards;\n}\n.stack .card.wira-left[_v-c5404732] {\n  -webkit-transform-origin: -150% 50%;\n          transform-origin: -150% 50%;\n  -webkit-animation-timing-function: cubic-bezier(0.3, 1, 0.3, 1);\n          animation-timing-function: cubic-bezier(0.3, 1, 0.3, 1);\n  -webkit-animation: wira-left 1s forwards;\n          animation: wira-left 1s forwards;\n}\n@-webkit-keyframes toThird {\n  0% {\n    -webkit-transform: translate3d(0, 1.8rem, -1.5rem);\n            transform: translate3d(0, 1.8rem, -1.5rem);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 1.2rem, -1rem);\n            transform: translate3d(0, 1.2rem, -1rem);\n  }\n}\n@keyframes toThird {\n  0% {\n    -webkit-transform: translate3d(0, 1.8rem, -1.5rem);\n            transform: translate3d(0, 1.8rem, -1.5rem);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 1.2rem, -1rem);\n            transform: translate3d(0, 1.2rem, -1rem);\n  }\n}\n@-webkit-keyframes toSecond {\n  0% {\n    -webkit-transform: translate3d(0, 1.2rem, -1rem);\n            transform: translate3d(0, 1.2rem, -1rem);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0.6rem, -0.5rem);\n            transform: translate3d(0, 0.6rem, -0.5rem);\n  }\n}\n@keyframes toSecond {\n  0% {\n    -webkit-transform: translate3d(0, 1.2rem, -1rem);\n            transform: translate3d(0, 1.2rem, -1rem);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0.6rem, -0.5rem);\n            transform: translate3d(0, 0.6rem, -0.5rem);\n  }\n}\n@-webkit-keyframes toFirst {\n  0% {\n    -webkit-transform: translate3d(0, 0.6rem, -0.5rem);\n            transform: translate3d(0, 0.6rem, -0.5rem);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes toFirst {\n  0% {\n    -webkit-transform: translate3d(0, 0.6rem, -0.5rem);\n            transform: translate3d(0, 0.6rem, -0.5rem);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes leave {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(3rem, 0, 0) rotate3d(0, 0, 1, 20deg);\n            transform: translate3d(3rem, 0, 0) rotate3d(0, 0, 1, 20deg);\n  }\n}\n@keyframes leave {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(3rem, 0, 0) rotate3d(0, 0, 1, 20deg);\n            transform: translate3d(3rem, 0, 0) rotate3d(0, 0, 1, 20deg);\n  }\n}\n@-webkit-keyframes eka-right {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(150%, -50%, 0) rotate3d(0, 0, 1, -20deg);\n            transform: translate3d(150%, -50%, 0) rotate3d(0, 0, 1, -20deg);\n  }\n}\n@keyframes eka-right {\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: translate3d(150%, -50%, 0) rotate3d(0, 0, 1, -20deg);\n            transform: translate3d(150%, -50%, 0) rotate3d(0, 0, 1, -20deg);\n  }\n}\n@-webkit-keyframes wira-right {\n  0%,\n  100% {\n    -webkit-transform-origin: 250% 50%;\n            transform-origin: 250% 50%;\n    -webkit-animation-timing-function: cubic-bezier(0.3, 1, 0.3, 1);\n            animation-timing-function: cubic-bezier(0.3, 1, 0.3, 1);\n  }\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: rotate3d(0, 0, 1, 60deg);\n            transform: rotate3d(0, 0, 1, 60deg);\n  }\n}\n@keyframes wira-right {\n  0%,\n  100% {\n    -webkit-transform-origin: 250% 50%;\n            transform-origin: 250% 50%;\n    -webkit-animation-timing-function: cubic-bezier(0.3, 1, 0.3, 1);\n            animation-timing-function: cubic-bezier(0.3, 1, 0.3, 1);\n  }\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: rotate3d(0, 0, 1, 60deg);\n            transform: rotate3d(0, 0, 1, 60deg);\n  }\n}\n@-webkit-keyframes wira-left {\n  0%,\n  100% {\n    -webkit-transform-origin: -150% 50%;\n            transform-origin: -150% 50%;\n    -webkit-animation-timing-function: cubic-bezier(0.3, 1, 0.3, 1);\n            animation-timing-function: cubic-bezier(0.3, 1, 0.3, 1);\n  }\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: rotate3d(0, 0, 1, -60deg);\n            transform: rotate3d(0, 0, 1, -60deg);\n  }\n}\n@keyframes wira-left {\n  0%,\n  100% {\n    -webkit-transform-origin: -150% 50%;\n            transform-origin: -150% 50%;\n    -webkit-animation-timing-function: cubic-bezier(0.3, 1, 0.3, 1);\n            animation-timing-function: cubic-bezier(0.3, 1, 0.3, 1);\n  }\n  0% {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: rotate3d(0, 0, 1, -60deg);\n            transform: rotate3d(0, 0, 1, -60deg);\n  }\n}\n.nav[_v-c5404732] {\n  display: table;\n  margin: auto;\n}\n.nav li[_v-c5404732] {\n  float: left;\n  width: 0.22rem;\n  height: 0.22rem;\n  margin: 0 0.04rem;\n  border-radius: 1000px;\n  border: 1px solid black;\n}\n.nav li.active[_v-c5404732] {\n  background: black;\n}\n", ""]);

	// exports


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _stringify = __webpack_require__(15);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
		data: function data() {
			return {
				img: {
					cover: './img/cover.png',
					stars: './img/stars.png'
				},

				cards: [],

				nav: [],
				dot: 0,

				switching: false,
				scrolling: false,
				X1: null,
				X2: null,
				Y1: null,
				Y2: null,
				moveCount: 0
			};
		},
		created: function created() {
			this.getData();
		},
		ready: function ready() {},
		methods: {
			getData: function getData() {
				var self = this;
				var cards = [{
					id: 2,
					title: '美国队长',
					score: 6.7,
					intro: 'Cocain business controlls America!',
					_class: ''
				}, {
					id: 1,
					title: '超人',
					score: 2.5,
					intro: 'Freedom, justice and American way!',
					_class: ''
				}, {
					id: 0,
					title: '纨绔大小姐',
					score: 9.4,
					intro: '云落枫，华夏医学天才，意外身亡，魂附于龙啸大陆将军府废物大小姐。这废物不但文不成武不就，更是胸大无脑，骄横任性，有了太子这样完美的未婚夫还不够，居然当众强抢美男，导致太子一怒之下解除婚约。 可废物受不了这个刺激，竟是上吊了结此生。再睁眼，她已非昔日废物大小姐。 契约神典，怀揣灵药空间，妙手回春，医绝天下！',
					_class: ''
				}];
				if (cards.length === 1) {
					cards[1] = JSON.parse((0, _stringify2.default)(cards[0]));
					cards[2] = JSON.parse((0, _stringify2.default)(cards[0]));
					cards[3] = JSON.parse((0, _stringify2.default)(cards[0]));
					this.cards = cards;
					this.nav = [0];
					this.navLength = 1;
				} else if (cards.length === 2) {
					cards[2] = JSON.parse((0, _stringify2.default)(cards[0]));
					cards[3] = JSON.parse((0, _stringify2.default)(cards[1]));
					this.cards = cards;
					this.nav = [0, 1];
					this.navLength = 2;
				} else if (cards.length === 3) {
					cards[3] = JSON.parse((0, _stringify2.default)(cards[0]));
					cards[4] = JSON.parse((0, _stringify2.default)(cards[1]));
					cards[5] = JSON.parse((0, _stringify2.default)(cards[2]));
					this.cards = cards;
					this.nav = [0, 1, 2];
					this.navLength = 3;
				} else {
					var nav = [];
					for (var i = 0; i < this.cards.length; i++) {
						nav[i] = i;
					}
					this.nav = nav;
				}

				this.length = this.cards.length;
				this.current = this.length - 1;
				window.addEventListener('load', function () {
					if (self.cards.length >= 4) {
						self.cards[self.current]._class = 'toFirst';
						self.cards[self.current - 1]._class = 'toSecond';
						self.cards[self.current - 2]._class = 'toThird';
					}
				});
			},
			play: function play(direction) {
				var self = this;
				if (!self.switching) {
					self.switching = true;
					if (self.dot < self.navLength - 1) {
						self.dot++;
					} else {
						self.dot = 0;
					}
					console.log('true');
					this.cards[this.current]._class = 'wira-' + direction;
					this.cards[this.current - 1]._class = 'toFirst';
					this.cards[this.current - 2]._class = 'toSecond';
					this.cards[this.current - 3]._class = 'toThird';
					setTimeout(function () {
						self.cards.unshift(self.cards.splice(-1, 1)[0]);
						self.cards[0]._class = '';
						self.switching = false;
					}, 600);
				};
			},
			touchstart: function touchstart(e) {
				this.moveCount = 0;
				this.scrolling = false;
				this.X1 = e.changedTouches[0].pageX;
				this.Y1 = e.changedTouches[0].pageY;
			},
			touchmove: function touchmove(e) {
				this.moveCount++;

				if (this.moveCount === 1) {
					this.X2 = e.changedTouches[0].pageX;
					this.Y2 = e.changedTouches[0].pageY;
					if (Math.abs(this.Y2 - this.Y1) > Math.abs(this.X2 - this.X1)) {
						this.scrolling = true;
					} else {
						e.preventDefault();
					}
				}
			},
			touchend: function touchend(e) {
				if (this.scrolling === false) {
					this.X2 = e.changedTouches[0].pageX;
					var distance = this.X2 - this.X1;
					if (distance > 0) {
						this.play('right');
					} else if (distance < 0) {
						this.play('left');
					}
				};
			}
		}
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(16), __esModule: true };

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(17)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "\n\t<div class=\"space\" _v-c5404732=\"\">\n\t\t<ul class=\"stack\" @touchstart=\"touchstart($event)\" @touchmove=\"touchmove($event)\" @touchend=\"touchend($event)\" _v-c5404732=\"\">\n\t\t<li v-for=\"a in cards\" class=\"card card{{a.id}} {{a._class}}\" style=\"\" _v-c5404732=\"\">\n\t\t<div class=\"part-top\" _v-c5404732=\"\">\n\t\t\t<div class=\"right\" _v-c5404732=\"\">\n\t\t\t\t<p class=\"title__\" _v-c5404732=\"\">\n\t\t\t\t\t{{a.title}}\n\t\t\t\t</p>\n\t\t\t\t<div class=\"stars\" _v-c5404732=\"\">\n\t\t\t\t\t<div class=\"bg\" style=\"width:{{a.score*10}}%;\" _v-c5404732=\"\"></div>\n\t\t\t\t\t<img class=\"starsImg\" :src=\"img.stars\" _v-c5404732=\"\">\n\t\t\t\t</div>\n\t\t\t\t<p class=\"score\" _v-c5404732=\"\">{{a.score}}分</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<p class=\"intro\" _v-c5404732=\"\">\n\t\t\t{{a.intro}}\n\t\t</p>\n\t\t<img class=\"cover\" :src=\"img.cover\" _v-c5404732=\"\">\n\t</li>\n</ul>\n</div>\n<div class=\"nav\" _v-c5404732=\"\">\n\t<li v-for=\"(a,i) in nav\" class=\"{{i===dot?'active':''}}\" _v-c5404732=\"\"></li>\n</div>\n";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(20)
	__vue_script__ = __webpack_require__(22)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\h5\\live\\src\\button-alarm.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(23)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./button-alarm.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-83aab312&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./button-alarm.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-83aab312&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./button-alarm.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, ".button[_v-83aab312] {\n  position: absolute;\n  left: 0.96rem;\n  top: 2.46rem;\n  width: 2.06rem;\n  height: 0.54rem;\n  border-radius: 0.18rem;\n  background: #f8f8f8;\n  z-index: 1;\n  overflow: hidden;\n}\n.button.noted[_v-83aab312] {\n  -webkit-animation: rubberBand 1s forwards;\n          animation: rubberBand 1s forwards;\n}\n@-webkit-keyframes rubberBand {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n  30% {\n    -webkit-transform: scale3d(1, 0.75, 1);\n            transform: scale3d(1, 0.75, 1);\n  }\n  40% {\n    -webkit-transform: scale3d(0.9, 1.25, 1);\n            transform: scale3d(0.9, 1.25, 1);\n  }\n  50% {\n    -webkit-transform: scale3d(1, 0.85, 1);\n            transform: scale3d(1, 0.85, 1);\n  }\n  65% {\n    -webkit-transform: scale3d(0.95, 1.05, 1);\n            transform: scale3d(0.95, 1.05, 1);\n  }\n  75% {\n    -webkit-transform: scale3d(1, 0.95, 1);\n            transform: scale3d(1, 0.95, 1);\n  }\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n}\n@keyframes rubberBand {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n  30% {\n    -webkit-transform: scale3d(1, 0.75, 1);\n            transform: scale3d(1, 0.75, 1);\n  }\n  40% {\n    -webkit-transform: scale3d(0.9, 1.25, 1);\n            transform: scale3d(0.9, 1.25, 1);\n  }\n  50% {\n    -webkit-transform: scale3d(1, 0.85, 1);\n            transform: scale3d(1, 0.85, 1);\n  }\n  65% {\n    -webkit-transform: scale3d(0.95, 1.05, 1);\n            transform: scale3d(0.95, 1.05, 1);\n  }\n  75% {\n    -webkit-transform: scale3d(1, 0.95, 1);\n            transform: scale3d(1, 0.95, 1);\n  }\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n}\n.button .ripple[_v-83aab312] {\n  position: absolute;\n  left: -0.47rem;\n  top: -1.23rem;\n  width: 3rem;\n  height: 3rem;\n  border-radius: 1000px;\n  background: #464646;\n  -webkit-transform: scale3d(0, 0, 1);\n          transform: scale3d(0, 0, 1);\n  opacity: 0;\n  z-index: 0;\n}\n.button .ripple.noted[_v-83aab312] {\n  -webkit-transition: 1s ease-out;\n  transition: 1s ease-out;\n  -webkit-transform: scale3d(1, 1, 1);\n          transform: scale3d(1, 1, 1);\n  opacity: 1;\n}\n.button p[_v-83aab312] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  font-size: 0.24rem;\n  line-height: 0.54rem;\n  text-align: center;\n}\n.button p img[_v-83aab312] {\n  display: inline-block;\n  vertical-align: middle;\n  height: 0.24rem;\n}\n.button .p-before[_v-83aab312] {\n  color: #464646;\n}\n.button .p-before.noted[_v-83aab312] {\n  -webkit-transition: 1s ease-out;\n  transition: 1s ease-out;\n  opacity: 0;\n}\n.button .p-after[_v-83aab312] {\n  color: white;\n  opacity: 0;\n}\n.button .p-after.noted[_v-83aab312] {\n  -webkit-transition: 1s ease-out;\n  transition: 1s ease-out;\n  opacity: 1;\n}\n", ""]);

	// exports


/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
		data: function data() {
			return {
				img: {
					bell: 'img/bell.png',
					check: 'img/check.png'
				},
				noted: false
			};
		},
		methods: {
			note: function note() {
				this.noted = true;
			}
		}

	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"button {{noted?'noted':''}}\" @click=\"note\" _v-83aab312=\"\">\n\t<div class=\"ripple {{noted?'noted':''}}\" _v-83aab312=\"\"></div>\n\t<p class=\"p-before {{noted?'noted':''}}\" _v-83aab312=\"\">\n\t\t<img :src=\"img.bell\" _v-83aab312=\"\"> 预约提醒\n\t</p>\n\t<p class=\"p-after {{noted?'noted':''}}\" _v-83aab312=\"\">\n\t\t<img :src=\"img.check\" _v-83aab312=\"\"> 预约成功\n\t</p>\n</div>\n";

/***/ }
/******/ ]);