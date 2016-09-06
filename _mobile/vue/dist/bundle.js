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

	// import './rem.js';
	// import {swiper} from './swiper.vue';

	__webpack_require__(1);
	var home = __webpack_require__(2);
	var mask = __webpack_require__(9);
	var swiper = __webpack_require__(14);
	var box = __webpack_require__(19);

	Vue.component('home', home);
	Vue.component('mask', mask);
	Vue.component('box', box);
	Vue.component('swiper', swiper);

	new Vue({
		el: 'body',
		components: {
			mask: mask,
			swiper: swiper,
			box: box
		},
		data: {
			current: 0,
			pages: ['home', 'box']
		},
		computed: {
			currentPage: function currentPage() {
				return this.pages[this.current];
			}
		},
		methods: {
			next: function next() {
				this.current++;
			}
		}
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	document.addEventListener('DOMContentLoaded', function () {

		var $html = document.querySelector('html');
		var $body = document.querySelector('body');
		var $screen = document.createElement('div');

		$screen.style.cssText += 'position:fixed; width:100%; height:100%; display:none;';
		$body.insertBefore($screen, $body.firstChild);

		function setRem() {
			$screen.style.display = 'block';
			var w = Number(document.defaultView.getComputedStyle($screen).width.replace(/px/, ''));
			var h = Number(document.defaultView.getComputedStyle($screen).height.replace(/px/, ''));
			$screen.style.display = 'none';
			$html.style.fontSize = 100 * w / 720 + 'px';
			//document.getElementsByClassName('container')[0].style.height = h+'px';
			console.log('rem: Size of the viewport is ' + w + '*' + h + '.');
		}
		setRem();
		window.addEventListener('resize', setRem);
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(3)
	__vue_script__ = __webpack_require__(7)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\lib\\components\\home.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(8)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./home.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

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
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-24fe7a80&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./home.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-24fe7a80&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./home.vue");
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
	exports.push([module.id, ".home[_v-24fe7a80] {\n  width: 100%;\n  height: 100%;\n  font-size: 0.5rem;\n  text-align: center;\n}\n", ""]);

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
/* 7 */
/***/ function(module, exports) {

	'use strict';

	var home = {
		data: function data() {
			return {
				color: 'red',
				items: [0, 1, 2]
			};
		},
		ready: function ready() {},
		methods: {
			change: function change() {
				this.color = 'orange';
			}
		}
	};
	module.exports = home;

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"home\" _v-24fe7a80=\"\">\n\t前端是如何做动画的\n</div>\n";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(10)
	__vue_script__ = __webpack_require__(12)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\lib\\components\\mask.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(13)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./mask.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-525ebe0d&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./mask.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-525ebe0d&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./mask.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".mask[_v-525ebe0d] {\n  z-index: 10;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n.mask .mask-panel[_v-525ebe0d] {\n  overflow: hidden;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 5.5rem;\n  height: 3.6rem;\n  margin: auto;\n  border-radius: 0.1rem;\n  background: white;\n}\n.mask .mask-panel .top[_v-525ebe0d] {\n  box-sizing: border-box;\n  height: 0.9rem;\n  border-bottom: 1px solid #d8d8d8;\n  font-size: 0.28rem;\n  line-height: 0.9rem;\n  font-weight: bold;\n  text-align: center;\n}\n.mask .mask-panel .middle[_v-525ebe0d] {\n  box-sizing: border-box;\n  height: 1.8rem;\n  border-bottom: 1px solid #d8d8d8;\n  font-size: 0.28rem;\n  line-height: 1.8rem;\n  text-align: center;\n}\n.mask .mask-panel .bottom[_v-525ebe0d] {\n  overflow: hidden;\n}\n.mask .mask-panel .bottom li[_v-525ebe0d] {\n  float: left;\n  width: 50%;\n  height: 0.9rem;\n  line-height: 0.9rem;\n  font-size: 0.28rem;\n  text-align: center;\n}\n.mask .mask-panel .bottom .confirm[_v-525ebe0d] {\n  background: #3d8dcf;\n  color: white;\n}\n", ""]);

	// exports


/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	var mask = {
		data: function data() {
			return {
				shown: true
			};
		},
		methods: {
			hide: function hide() {
				this.shown = false;
			}
		}
	};
	module.exports = mask;

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mask\" v-show=\"shown\" _v-525ebe0d=\"\">\n\t<div class=\"mask-panel\" _v-525ebe0d=\"\">\n\t\t<p class=\"top\" _v-525ebe0d=\"\">下载QQ阅读，畅读海量小说</p>\n\t\t<p class=\"middle\" _v-525ebe0d=\"\">如果还未安装QQ阅读，你可以：</p>\n\t\t<ul class=\"bottom\" _v-525ebe0d=\"\">\n\t\t\t<li class=\"confirm\" _v-525ebe0d=\"\">下载QQ阅读</li>\n\t\t\t<li class=\"cancel\" v-on:click=\"hide\" _v-525ebe0d=\"\">取消</li>\n\t\t</ul>\n\t</div>\n</div>\n";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(15)
	__vue_script__ = __webpack_require__(17)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\lib\\components\\swiper.vue: named exports in *.vue files are ignored.")}
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
	  var id = "./swiper.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(16);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".swiper[_v-04773b59] {\n  position: relative;\n  margin: auto;\n}\n.swiper .train[_v-04773b59] {\n  width: 1000%;\n  height: 100%;\n}\n.swiper .train .item[_v-04773b59] {\n  float: left;\n  width: 10%;\n  height: 100%;\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8);\n  opacity: 0.6;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n.swiper .train .item.active[_v-04773b59] {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  opacity: 1;\n}\n", ""]);

	// exports


/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	var swiper = {
		props: ['bg'],
		data: function data() {
			return {
				width: 0,

				switching: false,
				inCycle: false,
				moveCount: 0,
				scrolling: false,
				trainOffsetX: 0,
				X1: 0,
				X2: 0,

				currentOne: 2,
				transition: false,
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
		},
		methods: {
			setWidth: function setWidth() {
				this.transition = false;
				var elem = document.querySelectorAll('.swiper')[0];
				var width = document.defaultView.getComputedStyle(elem).width.replace(/px/, '');
				this.width = width;
			},
			touchstart: function touchstart(e) {
				if (this.switching === false) {
					this.inCycle = true;

					this.moveCount = 0;
					this.scrolling = false;
					this.transition = false;

					this.X0 = this.X1 = e.changedTouches[0].pageX;
					this.Y1 = e.changedTouches[0].pageY;
				};
			},
			touchmove: function touchmove(e) {
				if (this.inCycle) {
					this.X2 = e.changedTouches[0].pageX;
					var distance = this.X2 - this.X1;
					this.X1 = this.X2;
					this.trainOffsetX += distance;
				}
			},
			touchend: function touchend(e) {
				var _this2 = this;

				if (this.inCycle) {
					this.X2 = e.changedTouches[0].pageX;
					var distance = this.X2 - this.X0;
					this.switching = true;
					if (distance < 0) {
						if (this.currentOne < this.items.length - 1) {
							this.currentOne++;
							this.transition = true;
							this.trainOffsetX = -this.width * 3;
						}
						setTimeout(function () {
							_this2.transition = false;
							var first = _this2.items[0];
							_this2.items.splice(0, 1);
							_this2.items.push(first);
							_this2.currentOne = 2;
							_this2.trainOffsetX = -_this2.width * 2;
							_this2.switching = false;
						}, 500);
					} else if (distance > 0) {
						if (this.currentOne > 0) {
							this.currentOne--;
							this.transition = true;
							this.trainOffsetX = -this.width;
						};
						setTimeout(function () {
							_this2.transition = false;
							var zz = _this2.items.length - 1;
							var last = _this2.items[zz];
							_this2.items.splice(zz, 1);
							_this2.items.unshift(last);
							_this2.currentOne = 2;
							_this2.trainOffsetX = -_this2.width * 2;
							_this2.switching = false;
						}, 500);
					};
					this.inCycle = false;
				};
			}
		}
	};
	module.exports = swiper;

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"swiper\" style=\"width:50%;height:2rem;background:{{bg}};\" v-on:touchstart=\"touchstart($event)\" v-on:touchmove=\"touchmove($event)\" v-on:touchend=\"touchend($event)\" _v-04773b59=\"\">\n\t<ul class=\"train\" style=\"transform:translate3d({{trainOffsetX}}px,0,0);{{transition===true?'transition:0.5s':''}};}}\" _v-04773b59=\"\">\n\t\t<li class=\"item {{i===currentOne?'active':''}}\" v-for=\"(i,item) in items\" style=\"background:{{item}};\" _v-04773b59=\"\"></li>\n\t</ul>\n</div>\n";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(20)
	__vue_script__ = __webpack_require__(22)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\lib\\components\\box.vue: named exports in *.vue files are ignored.")}
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
	  var id = "./box.vue"
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
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2faa033a&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./box.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-2faa033a&scoped=true!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./box.vue");
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

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".box[_v-2faa033a] {\n  width: 4rem;\n  height: 2rem;\n  overflow: hidden;\n}\n.box .item[_v-2faa033a] {\n  float: left;\n}\n", ""]);

	// exports


/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	var box = {
		data: function data() {
			return {
				color: 'red',
				items: [0, 1, 2]
			};
		},
		ready: function ready() {},
		methods: {
			change: function change() {
				this.color = 'orange';
			}
		}
	};
	module.exports = box;

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"box\" style=\"background:{{color}}\" v-on:click=\"change\" _v-2faa033a=\"\">\n\t<div class=\"item\" v-for=\"item in items\" _v-2faa033a=\"\">{{item}}</div>\n</div>\n";

/***/ }
/******/ ]);