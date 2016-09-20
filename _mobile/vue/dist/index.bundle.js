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

	var technology = __webpack_require__(1);
	var css3Transitions = __webpack_require__(8);
	var css3Animations = __webpack_require__(12);
	var svgSection = __webpack_require__(17);

	var swiper = __webpack_require__(22);

	var strokeCircle = __webpack_require__(27);

	Vue.component('css3Transitions', css3Transitions);
	Vue.component('css3Animations', css3Animations);
	Vue.component('svgSection', svgSection);
	Vue.component('technology', technology);
	Vue.component('swiper', swiper);
	Vue.component('stroke-circle', strokeCircle);

	new Vue({
		el: 'body',
		components: {},
		data: {
			nav: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],

			current: 0,
			Y1: null,
			Y2: null,
			pages: ['home', 'box']
		},
		computed: {
			length: function length() {
				return this.nav.length;
			}
		},
		methods: {
			toPage: function toPage(i) {
				this.current = i;
			},
			mousedown: function mousedown(e) {
				this.Y1 = e.pageY;
			},
			mouseup: function mouseup(e) {
				this.Y2 = e.pageY;
				var distance = this.Y2 - this.Y1;
				console.log(distance);
				if (distance < 0) {
					if (this.current < this.length - 1) {
						this.current++;
					}
				} else if (distance > 0) {
					if (this.current > 0) {
						this.current--;
					}
				}
			}
		}
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(2)
	__vue_script__ = __webpack_require__(6)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\lib\\components\\technology.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(7)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./technology.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-141d3d26&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./technology.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-141d3d26&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./technology.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".three[_v-141d3d26] {\n  overflow: hidden;\n}\n.three li[_v-141d3d26] {\n  width: 33.333333%;\n  float: left;\n}\n.three li img[_v-141d3d26] {\n  height: 20vw;\n  margin: auto;\n  margin-top: 10vw;\n}\n", ""]);

	// exports


/***/ },
/* 4 */
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
/* 5 */
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
/* 6 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
		data: function data() {
			return {
				css3: 'img/css3.svg',
				svg: 'img/svg.png',
				html5: 'img/html5.svg'
			};
		}
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "\n<li class=\"item\" _v-141d3d26=\"\">\n\t<h2 _v-141d3d26=\"\">\n\t\t制作网页动画的技术\n\t</h2>\n\t<ul class=\"three\" _v-141d3d26=\"\">\n\t\t<li _v-141d3d26=\"\">\n\t\t\t<img :src=\"css3\" _v-141d3d26=\"\">\n\t\t\t<h3 _v-141d3d26=\"\">CSS3</h3>\n\t\t</li>\n\t\t<li _v-141d3d26=\"\">\n\t\t\t<img :src=\"svg\" _v-141d3d26=\"\">\n\t\t\t<h3 _v-141d3d26=\"\">SVG</h3>\n\t\t</li>\n\t\t<li _v-141d3d26=\"\">\n\t\t\t<img :src=\"html5\" _v-141d3d26=\"\">\n\t\t\t<h3 _v-141d3d26=\"\">Canvas</h3>\n\t\t</li>\n\t</ul>\n</li>\n";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(9)
	__vue_script__ = __webpack_require__(11)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\lib\\components\\css3Transitions.vue: named exports in *.vue files are ignored.")}
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./css3Transitions.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4ec06306&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./css3Transitions.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4ec06306&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./css3Transitions.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		template: "\n\t\t<li class=\"item\">\n\t\t\t<h2>\n\t\t\t\tCSS3 Transitions\n\t\t\t</h2>\n\t\t\t<div class=\"strip\">\n\t\t\t\t<div class=\"left\">\n\t\t\t\t\t<table><tr><th>\n\t\t\t\t\t\ttransform: translate3d(20vw,5vw,0);\n\t\t\t\t\t</th></tr></table>\n\t\t\t\t</div>\n\t\t\t\t<img class=\"r2d2 translate\" src=\"img/r2d2.png\"/>\n\t\t\t</div>\n\t\t\t<div class=\"strip\">\n\t\t\t\t<div class=\"left\">\n\t\t\t\t\t<table><tr><th>\n\t\t\t\t\ttransform: scale3d(1.2,1.2,1);\n\t\t\t\t\t</th></tr></table>\n\t\t\t\t</div>\n\t\t\t\t<img class=\"r2d2 scale3d\" src=\"img/r2d2.png\"/>\n\t\t\t</div>\n\t\t\t<div class=\"strip\">\n\t\t\t\t<div class=\"left\">\n\t\t\t\t\t<table><tr><th>\n\t\t\t\t\ttransform: skew(30deg,30deg);\n\t\t\t\t\t</th></tr></table>\n\t\t\t\t</div>\n\t\t\t\t<img class=\"r2d2 skew\" src=\"img/r2d2.png\"/>\n\t\t\t</div>\n\t\t</li>\n\t\t<li class=\"item\">\n\t\t\t<h2>\n\t\t\t\tCSS3 Transitions\n\t\t\t</h2>\n\t\t\t<div class=\"strip\">\n\t\t\t\t<div class=\"left\">\n\t\t\t\t\t<table><tr><th>\n\t\t\t\t\ttransform: rotateY(360deg);\n\t\t\t\t\t</th></tr></table>\n\t\t\t\t</div>\n\t\t\t\t<img class=\"r2d2 rotateY\" src=\"img/r2d2.png\"/>\n\t\t\t</div>\n\t\t\t<div class=\"strip\">\n\t\t\t\t<div class=\"left\">\n\t\t\t\t\t<table><tr><th>\n\t\t\t\t\ttransform: rotateX(60deg);\n\t\t\t\t\t</th></tr></table>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"square0 rotateX\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"strip\">\n\t\t\t\t<div class=\"left\">\n\t\t\t\t\t<table><tr><th>\n\t\t\t\t\tperspective: 1000px;<br/>\n\t\t\t\t\ttransform: rotateX(60deg);\n\t\t\t\t\t</th></tr></table>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"space\">\n\t\t\t\t\t<div class=\"square rotate\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t\t<li class=\"item\">\n\t\t\t<h2>\n\t\t\t\tCSS3 Transitions\n\t\t\t</h2>\n\t\t\t<div class=\"strip\">\n\t\t\t\t<div class=\"left\">\n\t\t\t\t\t<table><tr><th>\n\t\t\t\t\topacity: 0;\n\t\t\t\t\t</th></tr></table>\n\t\t\t\t</div>\n\t\t\t\t<img class=\"r2d2 opacity\" src=\"img/r2d2.png\"/>\n\t\t\t</div>\n\t\t\t<div class=\"strip\">\n\t\t\t\t<div class=\"left\">\n\t\t\t\t\t<table><tr><th>\n\t\t\t\t\tbackground: red;\n\t\t\t\t\t</th></tr></table>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"space\">\n\t\t\t\t\t<div class=\"square background\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"strip\">\n\t\t\t\t<div class=\"left\">\n\t\t\t\t\t<table><tr><th>\n\t\t\t\t\tbox-shadow: 0 0 10vw 1vw green;\n\t\t\t\t\t</th></tr></table>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"space\">\n\t\t\t\t\t<div class=\"square box-shadow\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t"
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(13)
	__vue_script__ = __webpack_require__(15)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\lib\\components\\css3Animations.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(16)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./css3Animations.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-8489eb00&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./css3Animations.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-8489eb00&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./css3Animations.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".yoda[_v-8489eb00] {\n  width: 50%;\n  margin: auto;\n  margin-top: 10vw;\n}\n.yoda[_v-8489eb00]:hover {\n  -webkit-animation: 2s rubberBand forwards;\n          animation: 2s rubberBand forwards;\n}\n@-webkit-keyframes rubberBand {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n            transform: scale3d(1.25, 0.75, 1);\n  }\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n            transform: scale3d(0.75, 1.25, 1);\n  }\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n            transform: scale3d(1.15, 0.85, 1);\n  }\n  65% {\n    -webkit-transform: scale3d(0.95, 1.05, 1);\n            transform: scale3d(0.95, 1.05, 1);\n  }\n  75% {\n    -webkit-transform: scale3d(1.05, 0.95, 1);\n            transform: scale3d(1.05, 0.95, 1);\n  }\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n}\n@keyframes rubberBand {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n            transform: scale3d(1.25, 0.75, 1);\n  }\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n            transform: scale3d(0.75, 1.25, 1);\n  }\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n            transform: scale3d(1.15, 0.85, 1);\n  }\n  65% {\n    -webkit-transform: scale3d(0.95, 1.05, 1);\n            transform: scale3d(0.95, 1.05, 1);\n  }\n  75% {\n    -webkit-transform: scale3d(1.05, 0.95, 1);\n            transform: scale3d(1.05, 0.95, 1);\n  }\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n}\n", ""]);

	// exports


/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
		data: function data() {
			return {
				img: {
					yoda: 'img/yoda.png'
				}
			};
		}
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "\n<li class=\"item\" _v-8489eb00=\"\">\n\t<h2 _v-8489eb00=\"\">\n\t\tCSS3 Animations\n\t</h2>\n\t<div class=\"two\" _v-8489eb00=\"\">\n\t\t<div class=\"col small\" _v-8489eb00=\"\">\n\t\t\t@keyframes rubberBand {<br _v-8489eb00=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;0% {<br _v-8489eb00=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: scale3d(1, 1, 1);<br _v-8489eb00=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;}<br _v-8489eb00=\"\">\n\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;30% {<br _v-8489eb00=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: scale3d(1.25, 0.75, 1);<br _v-8489eb00=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;}<br _v-8489eb00=\"\">\n\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;40% {<br _v-8489eb00=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: scale3d(0.75, 1.25, 1);<br _v-8489eb00=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;}<br _v-8489eb00=\"\">\n\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;50% {<br _v-8489eb00=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: scale3d(1.15, 0.85, 1);<br _v-8489eb00=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;}<br _v-8489eb00=\"\">\n\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;65% {<br _v-8489eb00=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: scale3d(.95, 1.05, 1);<br _v-8489eb00=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;}<br _v-8489eb00=\"\">\n\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;75% {<br _v-8489eb00=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: scale3d(1.05, .95, 1);<br _v-8489eb00=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;}<br _v-8489eb00=\"\">\n\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;100% {<br _v-8489eb00=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: scale3d(1, 1, 1);<br _v-8489eb00=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;}<br _v-8489eb00=\"\">\n\t\t\t}\n\t\t</div>\n\t\t<div class=\"col\" _v-8489eb00=\"\">\n\t\t\t<img class=\"yoda\" :src=\"img.yoda\" _v-8489eb00=\"\">\n\t\t</div>\n\t</div>\n</li>\t\n";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(18)
	__vue_script__ = __webpack_require__(20)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\lib\\components\\svg-section.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(21)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./svg-section.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-26260b2a&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./svg-section.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-26260b2a&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./svg-section.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".svg-essence[_v-26260b2a] {\n  width: 50%;\n  margin: auto;\n}\n.pen[_v-26260b2a] {\n  width: 90%;\n  margin: auto;\n}\n", ""]);

	// exports


/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
		data: function data() {
			return {
				img: {
					svg_essence: 'img/svg_essence.jpg',
					pen: 'img/pen.jpg',
					orange: 'img/orange.png',
					transformer: 'img/transformer.jpeg'
				}
			};
		}
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "\n<li class=\"item\" _v-26260b2a=\"\">\n\t<h2 _v-26260b2a=\"\">SVG的本质</h2>\n\t<p _v-26260b2a=\"\">\n\t\t一张SVG图片本质上是由一些路径围成的色块组成的。<br _v-26260b2a=\"\">\n\t</p>\n\t<img class=\"svg-essence\" :src=\"img.svg_essence\" _v-26260b2a=\"\">\n</li>\n<li class=\"item\" _v-26260b2a=\"\">\n\t<h2 _v-26260b2a=\"\">Color-changing Animation</h2>\n\t<div class=\"two\" _v-26260b2a=\"\">\n\t\t<div class=\"col normal\" _v-26260b2a=\"\">\n\t\t\tExample:<br _v-26260b2a=\"\">\n\t\t\t sunset<br _v-26260b2a=\"\">\n\t\t</div>\n\t\t<div class=\"col\" _v-26260b2a=\"\">\n\t\t\t<img class=\"pen\" :src=\"img.orange\" _v-26260b2a=\"\">\n\t\t</div>\n\t</div>\n</li>\n<li class=\"item\" _v-26260b2a=\"\">\n\t<h2 _v-26260b2a=\"\">SVG Stroke Animation</h2>\n\t<div class=\"two\" _v-26260b2a=\"\">\n\t\t<div class=\"col normal\" _v-26260b2a=\"\">\n\t\t\tExamples:<br _v-26260b2a=\"\">\n\t\t\t stroke-arsenal<br _v-26260b2a=\"\">\n\t\t\t stroke-square<br _v-26260b2a=\"\">\n\t\t\t stroke-circle<br _v-26260b2a=\"\">\n\t\t\t stroke-gameboy<br _v-26260b2a=\"\">\n\t\t\t stroke-qq<br _v-26260b2a=\"\">\n\t\t</div>\n\t\t<div class=\"col\" _v-26260b2a=\"\">\n\t\t\t<img class=\"pen\" :src=\"img.pen\" _v-26260b2a=\"\">\n\t\t</div>\n\t</div>\n</li>\n<li class=\"item\" _v-26260b2a=\"\">\n\t<h2 _v-26260b2a=\"\">Shape-morphing Animation</h2>\n\t<div class=\"two\" _v-26260b2a=\"\">\n\t\t<div class=\"col normal\" _v-26260b2a=\"\">\n\t\t\tExamples:<br _v-26260b2a=\"\">\n\t\t\t morphing-phones<br _v-26260b2a=\"\">\n\t\t</div>\n\t\t<div class=\"col\" _v-26260b2a=\"\">\n\t\t\t<img class=\"pen\" :src=\"img.transformer\" _v-26260b2a=\"\">\n\t\t</div>\n\t</div>\n</li>\t\n";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(23)
	__vue_script__ = __webpack_require__(25)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\lib\\components\\swiper.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(26)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./swiper.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(24);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-04773b59&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./swiper.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-04773b59&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./swiper.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".swiper[_v-04773b59] {\n  position: relative;\n  width: 50%;\n  height: 20vw;\n  background: grey;\n  margin: auto;\n}\n.swiper .train[_v-04773b59] {\n  width: 1000%;\n  height: 100%;\n}\n.swiper .train .item[_v-04773b59] {\n  float: left;\n  width: 10%;\n  height: 100%;\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8);\n  opacity: 0.6;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n.swiper .train .item.active[_v-04773b59] {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  opacity: 1;\n}\n", ""]);

	// exports


/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';

	var swiper = {
		props: ['style'],
		data: function data() {
			return {
				width: 0,

				sticky: false,
				autoplay: false,

				duration: 300,
				interval: 500,

				switching: false,
				inCycle: false,
				moveCount: 0,
				scrolling: false,
				trainOffsetX: 0,
				X1: 0,
				X2: 0,

				currentOne: 2,
				transition: '0s',
				offset: 0,
				items: ['red', 'orange', 'yellow', 'green', 'blue']
			};
		},
		ready: function ready() {
			var _this = this;

			window.addEventListener('load', function () {
				_this.setWidth();
				_this.trainOffsetX = -_this.width * 2;
			});
			window.addEventListener('resize', function () {
				setTimeout(function () {
					_this.setWidth();
					_this.trainOffsetX = -_this.width * 2;
				}, 50);
			});
			if (this.autoplay) {
				setInterval(function () {
					_this.toNext();
				}, this.interval);
			}
		},
		methods: {
			setWidth: function setWidth() {
				this.transition = false;
				var elem = this.$el;
				var width = document.defaultView.getComputedStyle(elem).width.replace(/px/, '');
				this.width = width;
			},
			toNext: function toNext() {
				var _this2 = this;

				if (this.currentOne < this.items.length - 1) {
					this.currentOne++;
					this.transition = '0.3s';
					this.trainOffsetX = -this.width * 3;
				}
				setTimeout(function () {
					_this2.transition = '0s';
					var first = _this2.items[0];
					_this2.items.splice(0, 1);
					_this2.items.push(first);
					_this2.currentOne = 2;
					_this2.trainOffsetX = -_this2.width * 2;
					_this2.switching = false;
				}, this.duration);
			},
			toPrev: function toPrev() {
				var _this3 = this;

				if (this.currentOne > 0) {
					this.currentOne--;
					this.transition = '0.3s';
					this.trainOffsetX = -this.width;
				};
				setTimeout(function () {
					_this3.transition = false;
					var zz = _this3.items.length - 1;
					var last = _this3.items[zz];
					_this3.items.splice(zz, 1);
					_this3.items.unshift(last);
					_this3.currentOne = 2;
					_this3.trainOffsetX = -_this3.width * 2;
					_this3.switching = false;
				}, this.interval);
			},
			touchstart: function touchstart(e) {
				if (this.switching === false) {
					this.inCycle = true;

					this.moveCount = 0;
					this.scrolling = false;
					this.transition = '0s';

					this.X0 = this.X1 = e.changedTouches[0].pageX;
					this.Y1 = e.changedTouches[0].pageY;
				};
			},
			touchmove: function touchmove(e) {
				if (this.inCycle && !this.scrolling) {
					this.moveCount++;
					if (this.moveCount === 1) {
						this.X2 = e.changedTouches[0].pageX;
						this.Y2 = e.changedTouches[0].pageY;
						var distanceY = this.Y2 - this.Y1;
						var distanceX = this.X2 - this.X1;
						if (Math.abs(distanceY) > Math.abs(distanceX)) {
							this.scrolling = true;
						}
					}

					if (this.sticky) {
						this.X2 = e.changedTouches[0].pageX;
						var distance = this.X2 - this.X1;
						this.X1 = this.X2;
						this.trainOffsetX += distance;
					}
				}
			},
			touchend: function touchend(e) {
				if (this.inCycle && !this.scrolling) {
					this.X2 = e.changedTouches[0].pageX;
					var distance = this.X2 - this.X0;
					this.switching = true;
					if (distance < 0) {
						this.toNext();
					} else if (distance > 0) {
						this.toPrev();
					};
					this.inCycle = false;
				};
			}
		}
	};
	module.exports = swiper;

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"swiper\" style=\"{{style}}\" v-on:touchstart=\"touchstart($event)\" v-on:touchmove=\"touchmove($event)\" v-on:touchend=\"touchend($event)\" _v-04773b59=\"\">\n\t<ul class=\"train\" style=\"transform:translate3d({{trainOffsetX}}px,0,0);transition:{{transition}};\" _v-04773b59=\"\">\n\t\t<li class=\"item {{i===currentOne?'active':''}}\" v-for=\"(i,item) in items\" style=\"background:{{item}};\" _v-04773b59=\"\"></li>\n\t</ul>\n</div>\n";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(28)
	__vue_script__ = __webpack_require__(30)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\lib\\components\\stroke-circle.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(31)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./stroke-circle.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(29);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-01554c98&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./stroke-circle.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-01554c98&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./stroke-circle.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "*[_v-01554c98] {\n  margin: 0;\n  padding: 0;\n}\n.test[_v-01554c98] {\n  width: 100%;\n  background: black;\n}\n.test .circle-red[_v-01554c98] {\n  cx: 500;\n  cy: 500;\n  r: 200;\n  stroke: url(#linearGradient-1);\n  stroke-width: 15;\n  stroke-linecap: round;\n  stroke-dasharray: 1256;\n  -webkit-animation: dashing 2s ease-in-out 0s infinite;\n          animation: dashing 2s ease-in-out 0s infinite;\n}\n@-webkit-keyframes dashing {\n  0% {\n    stroke-dashoffset: -1256;\n    opacity: 0;\n  }\n  50% {\n    stroke-dashoffset: 0;\n    opacity: 1;\n  }\n  100% {\n    stroke-dashoffset: 1256;\n    opacity: 0;\n  }\n}\n@keyframes dashing {\n  0% {\n    stroke-dashoffset: -1256;\n    opacity: 0;\n  }\n  50% {\n    stroke-dashoffset: 0;\n    opacity: 1;\n  }\n  100% {\n    stroke-dashoffset: 1256;\n    opacity: 0;\n  }\n}\n.test .circle-red-1[_v-01554c98] {\n  cx: 500;\n  cy: 500;\n  r: 100;\n  stroke-width: 15;\n  stroke-linecap: round;\n  stroke-dasharray: 314;\n  -webkit-animation: dashing1 2s linear 0s infinite;\n          animation: dashing1 2s linear 0s infinite;\n}\n@-webkit-keyframes dashing1 {\n  0% {\n    stroke-dashoffset: -314;\n  }\n  50% {\n    stroke-dashoffset: 0;\n  }\n  100% {\n    stroke-dashoffset: 314;\n  }\n}\n@keyframes dashing1 {\n  0% {\n    stroke-dashoffset: -314;\n  }\n  50% {\n    stroke-dashoffset: 0;\n  }\n  100% {\n    stroke-dashoffset: 314;\n  }\n}\n", ""]);

	// exports


/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";

	var strokeCircle = {};
	module.exports = strokeCircle;

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "\n<svg class=\"test\" viewBox=\"0,0,1000,1000\" pointer-events=\"all\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" _v-01554c98=\"\">\n\t<defs _v-01554c98=\"\">\n\t\t<linearGradient id=\"linearGradient-1\" x1=\"0%\" y1=\"100%\" x2=\"100%\" y2=\"100%\" _v-01554c98=\"\">\n\t\t\t<stop stop-color=\"#2090F8\" offset=\"0%\" _v-01554c98=\"\"></stop>\n\t\t\t<stop stop-color=\"#01FCE4\" offset=\"41.7610013%\" _v-01554c98=\"\"></stop>\n\t\t\t<stop stop-color=\"#0BFF8C\" offset=\"78.6870217%\" _v-01554c98=\"\"></stop>\n\t\t\t<stop stop-color=\"#51FF00\" offset=\"100%\" _v-01554c98=\"\"></stop>\n\t\t</linearGradient>\n\t</defs>\n\n\t<circle class=\"circle-red\" cx=\"500\" cy=\"500\" r=\"200\" stroke=\"url(#linearGradient-1)\" _v-01554c98=\"\"></circle>\n\t<circle class=\"circle-red-1\" cx=\"500\" cy=\"500\" r=\"100\" stroke=\"url(#linearGradient-1)\" _v-01554c98=\"\"></circle>\n\n</svg>\n";

/***/ }
/******/ ]);