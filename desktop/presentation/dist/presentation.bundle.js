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

	var _config = __webpack_require__(2);

	__webpack_require__(3);
	__webpack_require__(7);
	__webpack_require__(9);

	var technology = __webpack_require__(11);
	var css3Transitions = __webpack_require__(17);
	var css3Animations = __webpack_require__(21);
	var svgSection = __webpack_require__(26);

	//var swiper = require('./components/swiper.vue');

	//var strokeCircle = require('./components/stroke-circle.vue');


	Vue.component('css3Transitions', css3Transitions);
	Vue.component('css3Animations', css3Animations);
	Vue.component('svgSection', svgSection);
	Vue.component('technology', technology);
	//Vue.component( 'swiper',swiper );
	//Vue.component( 'stroke-circle',strokeCircle );

	new Vue({
		el: 'body',
		components: {},
		data: {
			path: _config.path,
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
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var path = 'http://madsoap.net/_img/presentation/';
	exports.path = path = '../../img/presentation/';

	exports.path = path;

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
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./../../../node_modules/postcss-loader/index.js!./common.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./../../../node_modules/postcss-loader/index.js!./common.less");
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
	exports.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n* :focus {\n  outline: none;\n}\nhtml {\n  font-size: 100px;\n  font-family: 'Microsoft Yahei';\n}\nul {\n  list-style: none;\n}\nimg {\n  display: block;\n}\n.clearfix {\n  clear: both;\n}\n/* Media Queries */\n@media (max-width: 350px) {\n  .desc {\n    font-size: 0.18rem!important;\n  }\n  .rules p {\n    font-size: 0.16rem!important;\n  }\n}\n", ""]);

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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./../../../node_modules/postcss-loader/index.js!./index.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./../../../node_modules/postcss-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "#app {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: lightgrey;\n}\n.trans-transition {\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  opacity: 1;\n}\n.trans-enter {\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n.trans-leave {\n  -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 1, 0, -90deg);\n  transform: translate3d(-100%, 0, 0) rotate3d(0, 1, 0, -90deg);\n  opacity: 0;\n}\nhtml {\n  font-size: 2vw!important;\n}\nh1 {\n  font-size: 6vw;\n  text-align: center;\n}\nh2 {\n  width: 80%;\n  margin: auto;\n  font-size: 5vw;\n  text-align: center;\n  padding-top: 2vw;\n  padding-bottom: 2vw;\n  text-decoration: underline;\n}\nh3 {\n  font-size: 4vw;\n  text-align: center;\n}\np {\n  width: 80%;\n  margin: auto;\n  font-size: 3vw;\n  margin-bottom: 1vw;\n}\n.small {\n  font-size: 1vw!important;\n}\n.normal {\n  font-size: 3vw!important;\n}\n.nav {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 5vw;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 99;\n}\n.nav li {\n  text-align: center;\n  cursor: pointer;\n}\n.nav li:hover {\n  background: white;\n}\n.nav li.active {\n  background: white;\n}\n.two {\n  width: 80%;\n  margin: auto;\n  overflow: hidden;\n}\n.two .col {\n  float: left;\n  width: 50%;\n}\n.two .col img {\n  width: 90%;\n  margin: auto;\n}\n.panel {\n  width: 40%;\n  margin: auto;\n}\n.strip {\n  width: 100%;\n  height: 13vw;\n  padding-bottom: 2vw;\n}\n.strip .left {\n  box-sizing: border-box;\n  display: tabel-cell;\n  vertical-align: middle;\n  float: left;\n  width: 50%;\n  height: 100%;\n  padding-left: 10vw;\n}\n.strip .left table {\n  width: 100%;\n  height: 100%;\n}\n.strip .r2d2 {\n  height: 100%;\n  -webkit-transition: 1s;\n  transition: 1s;\n}\n.strip .square0 {\n  width: 13vw;\n  height: 13vw;\n  float: left;\n  background: green;\n  -webkit-transition: 1s;\n  transition: 1s;\n}\n.strip .space {\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n  width: 13vw;\n  height: 13vw;\n  float: left;\n}\n.strip .space .square {\n  width: 100%;\n  height: 100%;\n  background: green;\n  -webkit-transition: 1s;\n  transition: 1s;\n}\n.strip .r2d2.translate:hover {\n  -webkit-transform: translate3d(20vw, 5vw, 0);\n  transform: translate3d(20vw, 5vw, 0);\n}\n.strip .r2d2.scale3d:hover {\n  -webkit-transform: scale3d(1.2, 1.2, 2);\n  transform: scale3d(1.2, 1.2, 2);\n}\n.strip .r2d2.skew:hover {\n  -webkit-transform: skew(30deg, 30deg);\n  transform: skew(30deg, 30deg);\n}\n.strip .r2d2.rotateY:hover {\n  -webkit-transform: rotateY(360deg);\n  transform: rotateY(360deg);\n}\n.strip .square0.rotateX:hover {\n  -webkit-transform: rotateX(60deg);\n  transform: rotateX(60deg);\n}\n.strip .square.rotate:hover {\n  -webkit-transform: rotateX(60deg);\n  transform: rotateX(60deg);\n}\n.strip .r2d2.opacity:hover {\n  opacity: 0;\n}\n.strip .square.background:hover {\n  background: red;\n}\n.strip .square.box-shadow:hover {\n  box-shadow: 0 0 10vw 1vw green;\n}\n.swiper {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: orange;\n}\n.swiper .train {\n  width: 100%;\n  height: 2000%;\n  -webkit-transition: 1s;\n  transition: 1s;\n}\n.swiper .train .item {\n  width: 100%;\n  height: 5%;\n  overflow: hidden;\n}\n.title {\n  margin-top: 20vw;\n}\n", ""]);

	// exports


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./../../../node_modules/postcss-loader/index.js!./keyframes.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./../../../node_modules/postcss-loader/index.js!./keyframes.less");
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

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "@-webkit-keyframes up {\n  100% {\n    -webkit-transform: translate3d(0, 0, 0) rotate3d(1, 0, 0, -180deg);\n    transform: translate3d(0, 0, 0) rotate3d(1, 0, 0, -180deg);\n  }\n}\n@keyframes up {\n  100% {\n    -webkit-transform: translate3d(0, 0, 0) rotate3d(1, 0, 0, -180deg);\n    transform: translate3d(0, 0, 0) rotate3d(1, 0, 0, -180deg);\n  }\n}\n.ka-up {\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n  -webkit-animation: 1s up forwards ease-in;\n  animation: 1s up forwards ease-in;\n}\n@-webkit-keyframes down {\n  100% {\n    -webkit-transform: translate3d(0, 0, 0) rotate3d(1, 0, 0, 190deg);\n    transform: translate3d(0, 0, 0) rotate3d(1, 0, 0, 190deg);\n  }\n}\n@keyframes down {\n  100% {\n    -webkit-transform: translate3d(0, 0, 0) rotate3d(1, 0, 0, 190deg);\n    transform: translate3d(0, 0, 0) rotate3d(1, 0, 0, 190deg);\n  }\n}\n.ka-down {\n  -webkit-transform-origin: 0 100%;\n  transform-origin: 0 100%;\n  -webkit-animation: 1s down forwards ease-in;\n  animation: 1s down forwards ease-in;\n}\n", ""]);

	// exports


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(12);
	__vue_script__ = __webpack_require__(15);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] desktop\\presentation\\src\\components\\technology.vue: named exports in *.vue files are ignored.");
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
	    var id = "_v-3f7283f6/technology.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-3f7283f6&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./technology.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-3f7283f6&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./technology.vue");
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

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".three[_v-3f7283f6] {\n  overflow: hidden;\n}\n.three li[_v-3f7283f6] {\n  width: 33.333333%;\n  float: left;\n}\n.three li img[_v-3f7283f6] {\n  height: 20vw;\n  margin: auto;\n  margin-top: 10vw;\n}\n", ""]);

	// exports


/***/ },
/* 14 */
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _config = __webpack_require__(2);

	module.exports = {
		data: function data() {
			return {
				css3: _config.path + 'css3.svg',
				svg: _config.path + 'svg.png',
				html5: _config.path + 'html5.svg'
			};
		}
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "\n<li class=\"item\" _v-3f7283f6=\"\">\n\t<h2 _v-3f7283f6=\"\">\n\t\t制作网页动画的技术\n\t</h2>\n\t<ul class=\"three\" _v-3f7283f6=\"\">\n\t\t<li _v-3f7283f6=\"\">\n\t\t\t<img :src=\"css3\" _v-3f7283f6=\"\">\n\t\t\t<h3 _v-3f7283f6=\"\">CSS3</h3>\n\t\t</li>\n\t\t<li _v-3f7283f6=\"\">\n\t\t\t<img :src=\"svg\" _v-3f7283f6=\"\">\n\t\t\t<h3 _v-3f7283f6=\"\">SVG</h3>\n\t\t</li>\n\t\t<li _v-3f7283f6=\"\">\n\t\t\t<img :src=\"html5\" _v-3f7283f6=\"\">\n\t\t\t<h3 _v-3f7283f6=\"\">Canvas</h3>\n\t\t</li>\n\t</ul>\n</li>\n";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(18);
	__vue_script__ = __webpack_require__(20);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] desktop\\presentation\\src\\components\\css3Transitions.vue: named exports in *.vue files are ignored.");
	}
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
	    var id = "_v-1ca490e5/css3Transitions.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-1ca490e5&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./css3Transitions.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-1ca490e5&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./css3Transitions.vue");
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

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _config = __webpack_require__(2);

	module.exports = {
		template: '\n\t\t<li class="item">\n\t\t\t<h2>\n\t\t\t\tCSS3 Transitions\n\t\t\t</h2>\n\t\t\t<div class="strip">\n\t\t\t\t<div class="left">\n\t\t\t\t\t<table><tr><th>\n\t\t\t\t\t\ttransform: translate3d(20vw,5vw,0);\n\t\t\t\t\t</th></tr></table>\n\t\t\t\t</div>\n\t\t\t\t<img class="r2d2 translate" src="' + _config.path + 'r2d2.png"/>\n\t\t\t</div>\n\t\t\t<div class="strip">\n\t\t\t\t<div class="left">\n\t\t\t\t\t<table><tr><th>\n\t\t\t\t\ttransform: scale3d(1.2,1.2,1);\n\t\t\t\t\t</th></tr></table>\n\t\t\t\t</div>\n\t\t\t\t<img class="r2d2 scale3d" src="' + _config.path + 'r2d2.png"/>\n\t\t\t</div>\n\t\t\t<div class="strip">\n\t\t\t\t<div class="left">\n\t\t\t\t\t<table><tr><th>\n\t\t\t\t\ttransform: skew(30deg,30deg);\n\t\t\t\t\t</th></tr></table>\n\t\t\t\t</div>\n\t\t\t\t<img class="r2d2 skew" src="' + _config.path + 'r2d2.png"/>\n\t\t\t</div>\n\t\t</li>\n\t\t<li class="item">\n\t\t\t<h2>\n\t\t\t\tCSS3 Transitions\n\t\t\t</h2>\n\t\t\t<div class="strip">\n\t\t\t\t<div class="left">\n\t\t\t\t\t<table><tr><th>\n\t\t\t\t\ttransform: rotateY(360deg);\n\t\t\t\t\t</th></tr></table>\n\t\t\t\t</div>\n\t\t\t\t<img class="r2d2 rotateY" src="' + _config.path + 'r2d2.png"/>\n\t\t\t</div>\n\t\t\t<div class="strip">\n\t\t\t\t<div class="left">\n\t\t\t\t\t<table><tr><th>\n\t\t\t\t\ttransform: rotateX(60deg);\n\t\t\t\t\t</th></tr></table>\n\t\t\t\t</div>\n\t\t\t\t<div class="square0 rotateX"></div>\n\t\t\t</div>\n\t\t\t<div class="strip">\n\t\t\t\t<div class="left">\n\t\t\t\t\t<table><tr><th>\n\t\t\t\t\tperspective: 1000px;<br/>\n\t\t\t\t\ttransform: rotateX(60deg);\n\t\t\t\t\t</th></tr></table>\n\t\t\t\t</div>\n\t\t\t\t<div class="space">\n\t\t\t\t\t<div class="square rotate"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t\t<li class="item">\n\t\t\t<h2>\n\t\t\t\tCSS3 Transitions\n\t\t\t</h2>\n\t\t\t<div class="strip">\n\t\t\t\t<div class="left">\n\t\t\t\t\t<table><tr><th>\n\t\t\t\t\topacity: 0;\n\t\t\t\t\t</th></tr></table>\n\t\t\t\t</div>\n\t\t\t\t<img class="r2d2 opacity" src="' + _config.path + 'r2d2.png"/>\n\t\t\t</div>\n\t\t\t<div class="strip">\n\t\t\t\t<div class="left">\n\t\t\t\t\t<table><tr><th>\n\t\t\t\t\tbackground: red;\n\t\t\t\t\t</th></tr></table>\n\t\t\t\t</div>\n\t\t\t\t<div class="space">\n\t\t\t\t\t<div class="square background"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="strip">\n\t\t\t\t<div class="left">\n\t\t\t\t\t<table><tr><th>\n\t\t\t\t\tbox-shadow: 0 0 10vw 1vw green;\n\t\t\t\t\t</th></tr></table>\n\t\t\t\t</div>\n\t\t\t\t<div class="space">\n\t\t\t\t\t<div class="square box-shadow"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t'
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(22);
	__vue_script__ = __webpack_require__(24);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] desktop\\presentation\\src\\components\\css3Animations.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(25);
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
	    var id = "_v-e33f49d0/css3Animations.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(23);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-e33f49d0&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./css3Animations.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-e33f49d0&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./css3Animations.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".yoda[_v-e33f49d0] {\n  width: 50%;\n  margin: auto;\n  margin-top: 10vw;\n}\n.yoda[_v-e33f49d0]:hover {\n  -webkit-animation: 2s rubberBand forwards;\n          animation: 2s rubberBand forwards;\n}\n@-webkit-keyframes rubberBand {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n            transform: scale3d(1.25, 0.75, 1);\n  }\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n            transform: scale3d(0.75, 1.25, 1);\n  }\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n            transform: scale3d(1.15, 0.85, 1);\n  }\n  65% {\n    -webkit-transform: scale3d(0.95, 1.05, 1);\n            transform: scale3d(0.95, 1.05, 1);\n  }\n  75% {\n    -webkit-transform: scale3d(1.05, 0.95, 1);\n            transform: scale3d(1.05, 0.95, 1);\n  }\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n}\n@keyframes rubberBand {\n  from {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n            transform: scale3d(1.25, 0.75, 1);\n  }\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n            transform: scale3d(0.75, 1.25, 1);\n  }\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n            transform: scale3d(1.15, 0.85, 1);\n  }\n  65% {\n    -webkit-transform: scale3d(0.95, 1.05, 1);\n            transform: scale3d(0.95, 1.05, 1);\n  }\n  75% {\n    -webkit-transform: scale3d(1.05, 0.95, 1);\n            transform: scale3d(1.05, 0.95, 1);\n  }\n  to {\n    -webkit-transform: scale3d(1, 1, 1);\n            transform: scale3d(1, 1, 1);\n  }\n}\n", ""]);

	// exports


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _config = __webpack_require__(2);

	module.exports = {
		data: function data() {
			return {
				img: {
					yoda: _config.path + 'yoda.png'
				}
			};
		}
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "\n<li class=\"item\" _v-e33f49d0=\"\">\n\t<h2 _v-e33f49d0=\"\">\n\t\tCSS3 Animations\n\t</h2>\n\t<div class=\"two\" _v-e33f49d0=\"\">\n\t\t<div class=\"col small\" _v-e33f49d0=\"\">\n\t\t\t@keyframes rubberBand {<br _v-e33f49d0=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;0% {<br _v-e33f49d0=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: scale3d(1, 1, 1);<br _v-e33f49d0=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;}<br _v-e33f49d0=\"\">\n\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;30% {<br _v-e33f49d0=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: scale3d(1.25, 0.75, 1);<br _v-e33f49d0=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;}<br _v-e33f49d0=\"\">\n\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;40% {<br _v-e33f49d0=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: scale3d(0.75, 1.25, 1);<br _v-e33f49d0=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;}<br _v-e33f49d0=\"\">\n\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;50% {<br _v-e33f49d0=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: scale3d(1.15, 0.85, 1);<br _v-e33f49d0=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;}<br _v-e33f49d0=\"\">\n\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;65% {<br _v-e33f49d0=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: scale3d(.95, 1.05, 1);<br _v-e33f49d0=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;}<br _v-e33f49d0=\"\">\n\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;75% {<br _v-e33f49d0=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: scale3d(1.05, .95, 1);<br _v-e33f49d0=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;}<br _v-e33f49d0=\"\">\n\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;100% {<br _v-e33f49d0=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: scale3d(1, 1, 1);<br _v-e33f49d0=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;}<br _v-e33f49d0=\"\">\n\t\t\t}\n\t\t</div>\n\t\t<div class=\"col\" _v-e33f49d0=\"\">\n\t\t\t<img class=\"yoda\" :src=\"img.yoda\" _v-e33f49d0=\"\">\n\t\t</div>\n\t</div>\n</li>\t\n";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(27);
	__vue_script__ = __webpack_require__(29);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] desktop\\presentation\\src\\components\\svg-section.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(30);
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
	    var id = "_v-4d4330d3/svg-section.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4d4330d3&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./svg-section.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4d4330d3&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./svg-section.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".svg-essence[_v-4d4330d3] {\n  width: 50%;\n  margin: auto;\n}\n.pen[_v-4d4330d3] {\n  width: 90%;\n  margin: auto;\n}\n", ""]);

	// exports


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _config = __webpack_require__(2);

	module.exports = {
		data: function data() {
			return {
				img: {
					svg_essence: _config.path + 'svg_essence.jpg',
					pen: _config.path + 'pen.jpg',
					orange: _config.path + '/orange.png',
					transformer: _config.path + 'transformer.jpeg'
				}
			};
		}
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "\n<li class=\"item\" _v-4d4330d3=\"\">\n\t<h2 _v-4d4330d3=\"\">SVG的本质</h2>\n\t<p _v-4d4330d3=\"\">\n\t\t一张SVG图片本质上是由一些路径围成的色块组成的。<br _v-4d4330d3=\"\">\n\t</p>\n\t<img class=\"svg-essence\" :src=\"img.svg_essence\" _v-4d4330d3=\"\">\n</li>\n<li class=\"item\" _v-4d4330d3=\"\">\n\t<h2 _v-4d4330d3=\"\">Color-changing Animation</h2>\n\t<div class=\"two\" _v-4d4330d3=\"\">\n\t\t<div class=\"col normal\" _v-4d4330d3=\"\">\n\t\t\tExample:<br _v-4d4330d3=\"\">\n\t\t\t sunset<br _v-4d4330d3=\"\">\n\t\t</div>\n\t\t<div class=\"col\" _v-4d4330d3=\"\">\n\t\t\t<img class=\"pen\" :src=\"img.orange\" _v-4d4330d3=\"\">\n\t\t</div>\n\t</div>\n</li>\n<li class=\"item\" _v-4d4330d3=\"\">\n\t<h2 _v-4d4330d3=\"\">SVG Stroke Animation</h2>\n\t<div class=\"two\" _v-4d4330d3=\"\">\n\t\t<div class=\"col normal\" _v-4d4330d3=\"\">\n\t\t\tExamples:<br _v-4d4330d3=\"\">\n\t\t\t stroke-arsenal<br _v-4d4330d3=\"\">\n\t\t\t stroke-square<br _v-4d4330d3=\"\">\n\t\t\t stroke-circle<br _v-4d4330d3=\"\">\n\t\t\t stroke-gameboy<br _v-4d4330d3=\"\">\n\t\t\t stroke-qq<br _v-4d4330d3=\"\">\n\t\t\t countdown<br _v-4d4330d3=\"\">\n\t\t</div>\n\t\t<div class=\"col\" _v-4d4330d3=\"\">\n\t\t\t<img class=\"pen\" :src=\"img.pen\" _v-4d4330d3=\"\">\n\t\t</div>\n\t</div>\n</li>\n<li class=\"item\" _v-4d4330d3=\"\">\n\t<h2 _v-4d4330d3=\"\">Shape-morphing Animation</h2>\n\t<div class=\"two\" _v-4d4330d3=\"\">\n\t\t<div class=\"col normal\" _v-4d4330d3=\"\">\n\t\t\tExamples:<br _v-4d4330d3=\"\">\n\t\t\t morphing-phones<br _v-4d4330d3=\"\">\n\t\t</div>\n\t\t<div class=\"col\" _v-4d4330d3=\"\">\n\t\t\t<img class=\"pen\" :src=\"img.transformer\" _v-4d4330d3=\"\">\n\t\t</div>\n\t</div>\n</li>\t\n";

/***/ }
/******/ ]);