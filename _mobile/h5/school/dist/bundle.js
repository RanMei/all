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

	__webpack_require__(1);

	Vue.component('mask-loading', __webpack_require__(2));
	Vue.component('mask', __webpack_require__(9));
	Vue.component('focus', __webpack_require__(14));
	Vue.component('lottery-box', __webpack_require__(19));

	var app = new Vue({
		el: 'body',
		data: {
			isLogin: false,
			over: false,
			gifts: {
				1: {
					acquired: false,
					timeleft: 0
				},
				2: {
					acquired: false,
					timeleft: 0,
					left: 0
				},
				3: {
					acquired: false,
					timeleft: 0,
					left: 0
				},
				4: {
					acquired: false,
					timeleft: 0,
					left: 0
				}
			},
			chance: 0,
			myavor: 'img/default.jpg',

			ios: /ios/.test(document.title) ? true : false,
			testMode: false,

			maskState: 'pending',

			trophies: [0, 1, 2, 3, 4, 5, 6, 7],
			result: -1,

			ver_ok: true,

			prizes: ['iphone6', '10成长值', '金士顿U盘', '5书券', '小米手环', '小米耳机', '100元沪江网校学习卡', '50元沪江网校学习卡'],
			prizes_ios: ['iphone6', '未中奖', '乐扣乐扣保温杯', '5阅券', '小米移动电源', '小米路由器', '100元沪江网校学习卡', '50元沪江网校学习卡']

		},
		watch: {},
		computed: {
			text: function text() {
				if (!this.isLogin) {
					return '今日还需阅读：<br/>未登录';
				} else if (this.gifts[1].timeleft <= 0) {
					return '今日阅读时长已达45分钟，可领取';
				} else {
					return '今日还需阅读：<br/>' + Math.ceil(this.gifts[1].timeleft / 1000 / 60) + '分钟';
				}
			},
			hours2: function hours2() {
				return Math.floor(this.gifts[2].timeleft / 1000 / 3600);
			},
			minutes2: function minutes2() {
				var hours = Math.floor(this.gifts[2].timeleft / 1000 / 3600);
				var minutes = Math.floor(this.gifts[2].timeleft / 1000 / 60 - hours * 60);
				return minutes;
			},
			hours3: function hours3() {
				return Math.floor(this.gifts[3].timeleft / 1000 / 3600);
			},
			minutes3: function minutes3() {
				var hours = Math.floor(this.gifts[3].timeleft / 1000 / 3600);
				var minutes = Math.floor(this.gifts[3].timeleft / 1000 / 60 - hours * 60);
				return minutes;
			},
			hours4: function hours4() {
				return Math.floor(this.gifts[4].timeleft / 1000 / 3600);
			},
			minutes4: function minutes4() {
				var hours = Math.floor(this.gifts[4].timeleft / 1000 / 3600);
				var minutes = Math.floor(this.gifts[4].timeleft / 1000 / 60 - hours * 60);
				return minutes;
			}
		},
		created: function created() {
			var _this = this;

			this.$on('DRAW', function () {
				setTimeout(function () {
					_this.result = Math.round(Math.random() * 7);
				}, 50);
			});
			this.$on('SHOW_MASK', function (i) {
				_this.maskState = i;
			});
			this.$on('CLOSE_MASK', function () {
				_this.maskState = 'pending';
			});
			this.$on('MINUS_CHANCE', function () {
				_this.chance--;
				_this.result = -1;
			});
		},
		ready: function ready() {
			this.getData();
		},
		methods: {
			getData: function getData() {
				var self = this;

				self.isLogin = false;

				self.chance = 0;
				self.gifts[2].left = 1000;
				self.gifts[3].left = 100;
				self.gifts[4].left = 10;
			},
			getAndroidOSVersion: function getAndroidOSVersion() {
				console.log(navigator);
				//变量v的值为用户手机的安卓操作系统的版本号首位。
				var v = Number(navigator.userAgent.match(/Android \d/)[0].replace(/Android /, ''));
				console.log(v);
			},
			toUpgrade: function toUpgrade() {
				location.href = 'http://misc.wcd.qq.com/app?packageName=com.qq.reader&channelId=10000382';
			},
			cancle: function cancle() {
				this.ver_ok = true;
			},
			fake: function fake() {
				var self = this;
				self.isLogin = false;
				self.gifts[1].timeleft = 0;
				self.gifts[2].timeleft = 0;
				self.gifts[3].timeleft = 0;
				self.gifts[4].timeleft = 0;
			},
			signin: function signin() {
				this.isLogin = true;
				this.myavor = 'img/avatar.png';
			},
			get: function get(i) {
				var self = this;
				self.gifts[i].acquired = true;
				self.chance += i;
				self.$dispatch('SHOW_MASK', i);
			},
			toContact: function toContact() {
				if (this.isLogin) {
					if (this.ios) {
						Local.openInside(location.href.replace('index.html', 'contact.html'));
					} else {
						location.href = './contact.html';
					}
				} else {
					this.signin();
				}
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
	var __vue_styles__ = {}
	__webpack_require__(3)
	__vue_script__ = __webpack_require__(7)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\h5\\school\\src\\components\\mask-loading.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(8)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-808c2fd2/mask-loading.vue"
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
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-808c2fd2&scoped=true!./../../../../../node_modules/less-loader/index.js!./../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./mask-loading.vue", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-808c2fd2&scoped=true!./../../../../../node_modules/less-loader/index.js!./../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./mask-loading.vue");
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
	exports.push([module.id, ".mask-loading[_v-808c2fd2] {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: white;\n  z-index: 9999;\n  overflow: hidden;\n  font-size: 20px;\n  text-align: center;\n  color: grey;\n}\n", ""]);

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

	module.exports = {
		data: function data() {
			return {
				show: true
			};
		},
		created: function created() {
			var _this = this;

			var body = document.querySelector('body');
			body.style.overflow = 'hidden';
			window.addEventListener('load', function () {
				_this.show = false;
				body.style.overflow = 'visible';
			});
		}
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"mask-loading\" v-show=\"show\" _v-808c2fd2=\"\">\n\t加载中...\n</div>\n";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(10)
	__vue_script__ = __webpack_require__(12)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\h5\\school\\src\\components\\mask.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(13)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-66cb8328/mask.vue"
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
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../../node_modules/less-loader/index.js!./../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./mask.vue", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../../node_modules/less-loader/index.js!./../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./mask.vue");
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
	exports.push([module.id, ".mask {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  z-index: 99;\n  overflow: hidden;\n}\n.mask .panel {\n  position: relative;\n  box-sizing: border-box;\n  width: 4.76rem;\n  margin: auto;\n  margin-top: 2rem;\n  padding-left: 0.2rem;\n  padding-right: 0.2rem;\n  padding-bottom: 0.44rem;\n  border-radius: 0.1rem;\n  background: white;\n}\n.mask .panel .square {\n  overflow: hidden;\n}\n.mask .panel .square img {\n  width: 2.08rem;\n  margin: auto;\n  margin-top: 0.5rem;\n}\n.mask .panel .info {\n  width: 100%;\n  padding-top: 0.3rem;\n  padding-bottom: 0.3rem;\n  margin-bottom: 0.22rem;\n  text-align: center;\n  color: #333333;\n  font-weight: bold;\n  line-height: 0.48rem;\n  font-size: 0.32rem;\n  border-bottom: 1px dashed grey;\n}\n.mask .panel .info span {\n  color: #ff7c66;\n}\n.mask .panel .desc {\n  font-size: 0.28rem;\n  color: #666666;\n  line-height: 171%;\n  overflow: hidden;\n}\n.mask .panel .desc .span {\n  font-size: 0.28rem;\n  color: #666666;\n  line-height: 171%;\n}\n.mask .panel .desc .link {\n  color: #5474ff;\n  text-decoration: underline;\n}\n.mask .panel .pinkBtn {\n  height: 0.88rem;\n  margin: 0.44rem auto 0 auto;\n  background: #ff7c66;\n  font-size: 0.3rem;\n  line-height: 0.88rem;\n  color: white;\n  text-align: center;\n  border-radius: 999px;\n}\n.mask .panel .gotIt {\n  width: 2.94rem;\n}\n.mask .panel .help {\n  width: 4.04rem;\n}\n.mask .panel .help .query {\n  display: inline-block;\n  vertical-align: middle;\n  width: 0.42rem;\n}\n.mask .panel .write {\n  width: 3.24rem;\n}\n.mask .panel .write .pen {\n  display: inline-block;\n  vertical-align: middle;\n  height: 0.3rem;\n}\n.mask .panel .close {\n  position: absolute;\n  right: -0.2rem;\n  top: -0.2rem;\n  width: 0.52rem;\n}\n", ""]);

	// exports


/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
		props: ['state'],
		data: function data() {
			return {
				inProcessing: false,
				closeShown: false,
				infoShown: true,
				square: '',
				info: '--',
				desc: '--',
				pinkBtn: '',
				help: '',
				centered: false,

				img: {
					pen: './img/pen.png',
					query: './img/query.png',
					close: './img/close.png'
				}
			};
		},
		created: function created() {
			var _this = this;

			this.$watch('state', function () {
				if (_this.state !== 'pending') {
					_this.showMask(_this.state);
				};
			});
		},
		methods: {
			showMask: function showMask(i) {
				var self = this;
				if (!self.inProcessing) {
					self.inProcessing = true;

					var name = self.ios ? '阅券' : '书券';
					self.square = '';
					self.centered = false;
					self.closeShown = false;
					self.infoShown = true;
					switch (i) {
						case 'none':
							self.info = '无抽奖机会';
							self.desc = '参与每日任务和累计阅读时长可获得抽奖机会';
							self.pinkBtn = 'gotIt';
							self.closeShown = false;
							break;
						case 'out':
							self.info = '礼包被抢光';
							self.desc = '来晚一步，去看看其他的礼包';
							self.centered = true;
							self.pinkBtn = 'gotIt';
							self.closeShown = false;
							break;
						case 1:
							this.info = '恭喜你获得<span>1次</span>抽奖机会';
							this.desc = '赶紧去抽奖，iPhone6，小米手环等奖品等着你';
							this.text = '今日阅读时长已达45分钟，可领取';
							this.closeShown = false;
							this.pinkBtn = 'gotIt';
							break;
						case 2:
							self.closeShown = false;
							self.info = '恭喜你获得<br/><span>2次</span>抽奖机会、<span>50</span>' + name;
							self.desc = '50' + name + '已及时到账，15天到期，到期将不能使用';
							self.pinkBtn = 'gotIt';
							break;
						case 3:
							self.info = '恭喜你获得<br/><span>3次</span>抽奖机会、<span>100</span>' + name;
							self.desc = '100' + name + '已及时到账，15天到期，到期将不能使用';
							self.pinkBtn = 'gotIt';
							break;
						case 4:
							self.info = '恭喜你获得<span>4次</span>抽奖机会、<span>200</span>' + name + '和<span>200元</span>沪江学习卡';
							self.desc = '200' + name + '已及时到账，15天到期，到期将不能使用';
							self.help = '学习卡';
							self.closeShown = true;
							self.pinkBtn = 'help';
							break;
						case 'how':
							self.info = '如何使用学习卡？';
							self.desc = '1、进入优惠券开课页面<br/>\n\t\t\t\t\t\t\t<span class="link">http://class.hujiang.com/<br/>coupon/open</span><br/>\n\t\t\t\t\t\t\t2、输入优惠券代码，选择课程。<br/>\n\t\t\t\t\t\t\t3、确认用户名，开通课程。';
							self.pinkBtn = 'gotIt';
							break;
						case 'get0':
							self.square = '<img src="img/square_0.png">';
							self.info = '恭喜你获得<span>iPhone6</span>';
							self.desc = '务必填写正确的联系方式，方便客服与你联系';
							self.pinkBtn = 'write';
							self.closeShown = true;
							break;
						case 'get1':
							if (self.ios) {
								self.square = '<img src="img/square_1_ios.png">';
								self.info = '';
								self.infoShown = false;
								self.centered = true;
								self.desc = '继续加油，好运即将来临';
								self.pinkBtn = 'gotIt';
							} else {
								self.square = '<img src="img/square_1.png">';
								self.info = '恭喜你获得<span>10成长值</span>';
								self.centered = true;
								self.desc = '10成长值已及时到账';
								self.pinkBtn = 'gotIt';
							}
							break;
						case 'get2':
							if (self.ios) {
								self.square = '<img src="img/square_2_ios.png">';
								self.info = '恭喜你获得<span>乐扣乐扣保温杯</span>';
							} else {
								self.square = '<img src="img/square_2.png">';
								self.info = '恭喜你获得<span>金士顿U盘</span>';
							}
							self.desc = '务必填写正确的联系方式，方便客服与你联系';
							self.pinkBtn = 'write';
							self.closeShown = true;
							break;
						case 'get3':
							self.square = '<img src="img/square_3' + (self.ios ? '_ios' : '') + '.png">';
							self.info = '恭喜你获得<span>5' + name + '</span>';
							self.desc = '5' + name + '已及时到账，15天到期，到期将不能使用';
							self.pinkBtn = 'gotIt';
							break;
						case 'get4':
							self.square = '<img src="img/square_4' + (self.ios ? '_ios' : '') + '.png">';
							self.info = '恭喜你获得<span>小米' + (self.ios ? '移动电源' : '手环') + '</span>';
							self.desc = '务必填写正确的联系方式，方便客服与你联系';
							self.pinkBtn = 'write';
							self.closeShown = true;
							break;
						case 'get5':
							self.square = '<img src="img/square_5' + (self.ios ? '_ios' : '') + '.png">';
							self.info = '恭喜你获得<span>小米' + (self.ios ? '路由器' : '耳机') + '</span>';
							self.desc = '务必填写正确的联系方式，方便客服与你联系';
							self.pinkBtn = 'write';
							self.closeShown = true;
							break;
						case 'get6':
							self.square = '<img src="img/square_6.png">';
							self.info = '恭喜你获得<span>100元沪江学习卡</span>';
							self.desc = '请到“我的奖品”页面查看兑换码';
							self.help = '';
							self.pinkBtn = 'help';
							self.closeShown = true;
							break;
						case 'get7':
							self.square = '<img src="img/square_7.png">';
							self.info = '恭喜你获得<span>50元沪江学习卡</span>';
							self.desc = '请到“我的奖品”页面查看兑换码';
							self.help = '';
							self.pinkBtn = 'help';
							self.closeShown = true;
							break;
					}
					setTimeout(function () {
						self.inProcessing = false;
					}, 300);
				};
			},
			toHow: function toHow() {
				this.$dispatch('SHOW_MASK', 'how');
			},
			closeMask: function closeMask() {
				this.$dispatch('CLOSE_MASK');
			}
		}
	};

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"mask\" v-show=\"state!=='pending'\">\r\n\t<div class=\"panel\">\r\n\t\t<div class=\"square\">{{{square}}}</div>\r\n\t\t<p class=\"info\" v-show=\"infoShown\">{{{info}}}</p>\r\n\t\t<p class=\"desc\" style=\"{{centered?'text-align: center;':''}}\">\r\n\t\t\t<span class=\"span\"></span>{{{desc}}}\r\n\t\t</p>\r\n\t\t<div class=\"pinkBtn gotIt\" v-show=\"pinkBtn==='gotIt'\" v-on:click=\"closeMask\">\r\n\t\t\t我知道了\r\n\t\t</div>\r\n\t\t<div class=\"pinkBtn help\" v-show=\"pinkBtn==='help'\" v-on:click=\"toHow\">\r\n\t\t\t<img class=\"query\" :src=\"img.query\"/> 查看如何使用{{help}}\r\n\t\t</div>\r\n\t\t<div class=\"pinkBtn write\" v-show=\"pinkBtn==='write'\" v-on:click=\"toContact\">\r\n\t\t\t<img class=\"pen\" :src=\"img.pen\"/> 填写联系方式\r\n\t\t</div>\r\n\t\t<img class=\"close\" :src=\"img.close\" v-show=\"closeShown\" v-on:click=\"closeMask\"/>\r\n\t</div>\r\n</div>\r\n";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(15)
	__vue_script__ = __webpack_require__(17)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\h5\\school\\src\\components\\focus.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(18)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-4d229f68/focus.vue"
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
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4d229f68&scoped=true!./../../../../../node_modules/less-loader/index.js!./../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./focus.vue", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-4d229f68&scoped=true!./../../../../../node_modules/less-loader/index.js!./../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./focus.vue");
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
	exports.push([module.id, ".focus[_v-4d229f68] {\n  position: relative;\n  width: 100%;\n}\n.focus .face[_v-4d229f68] {\n  position: relative;\n  width: 100%;\n  height: 5.8rem;\n  overflow: hidden;\n  background: #5acce6;\n}\n.focus .face .cloud_1[_v-4d229f68] {\n  position: absolute;\n  left: 0.32rem;\n  top: 0.75rem;\n  width: 0.52rem;\n  -webkit-animation: cloud_1 15s linear infinite;\n          animation: cloud_1 15s linear infinite;\n}\n@-webkit-keyframes cloud_1 {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(1500%, 0, 0);\n            transform: translate3d(1500%, 0, 0);\n  }\n}\n@keyframes cloud_1 {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(1500%, 0, 0);\n            transform: translate3d(1500%, 0, 0);\n  }\n}\n.focus .face .cloud_2[_v-4d229f68] {\n  position: absolute;\n  left: 0.75rem;\n  top: 2.25rem;\n  width: 0.87rem;\n  -webkit-animation: cloud_2 10s linear infinite;\n          animation: cloud_2 10s linear infinite;\n}\n@-webkit-keyframes cloud_2 {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(900%, 0, 0);\n            transform: translate3d(900%, 0, 0);\n  }\n}\n@keyframes cloud_2 {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(900%, 0, 0);\n            transform: translate3d(900%, 0, 0);\n  }\n}\n.focus .face .cloud_3[_v-4d229f68] {\n  position: absolute;\n  left: 4.6rem;\n  top: -0.1rem;\n  width: 0.9rem;\n  -webkit-animation: cloud_3 12s linear infinite;\n          animation: cloud_3 12s linear infinite;\n}\n@-webkit-keyframes cloud_3 {\n  0% {\n    -webkit-transform: translate3d(-650%, 0, 0);\n            transform: translate3d(-650%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(300%, 0, 0);\n            transform: translate3d(300%, 0, 0);\n  }\n}\n@keyframes cloud_3 {\n  0% {\n    -webkit-transform: translate3d(-650%, 0, 0);\n            transform: translate3d(-650%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(300%, 0, 0);\n            transform: translate3d(300%, 0, 0);\n  }\n}\n.focus .face .cloud_4[_v-4d229f68] {\n  position: absolute;\n  left: 6.25rem;\n  top: 1.32rem;\n  width: 0.48rem;\n  -webkit-animation: cloud_4 20s linear infinite;\n          animation: cloud_4 20s linear infinite;\n}\n@-webkit-keyframes cloud_4 {\n  0% {\n    -webkit-transform: translate3d(-1500%, 0, 0);\n            transform: translate3d(-1500%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(300%, 0, 0);\n            transform: translate3d(300%, 0, 0);\n  }\n}\n@keyframes cloud_4 {\n  0% {\n    -webkit-transform: translate3d(-1500%, 0, 0);\n            transform: translate3d(-1500%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(300%, 0, 0);\n            transform: translate3d(300%, 0, 0);\n  }\n}\n.focus .face .clouds_1[_v-4d229f68] {\n  position: absolute;\n  left: 0rem;\n  top: 2.2rem;\n  width: 7.2rem;\n  -webkit-animation: twinkle 3s linear infinite;\n          animation: twinkle 3s linear infinite;\n}\n@-webkit-keyframes twinkle {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes twinkle {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.focus .face .clouds_2[_v-4d229f68] {\n  position: absolute;\n  left: 0rem;\n  top: 2.9rem;\n  width: 7.2rem;\n  -webkit-animation: twinkle2 3s linear infinite;\n          animation: twinkle2 3s linear infinite;\n}\n@-webkit-keyframes twinkle2 {\n  0% {\n    opacity: 0.2;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.2;\n  }\n}\n@keyframes twinkle2 {\n  0% {\n    opacity: 0.2;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.2;\n  }\n}\n.focus .face .logos[_v-4d229f68] {\n  position: absolute;\n  left: 0.14rem;\n  top: 0.2rem;\n  width: 2.88rem;\n}\n.focus .face .planet[_v-4d229f68] {\n  position: absolute;\n  left: 0.7rem;\n  top: 0.7rem;\n  width: 5.8rem;\n}\n.focus .face .clouds_3[_v-4d229f68] {\n  position: absolute;\n  left: 0;\n  top: 3.2rem;\n  width: 100%;\n}\n.focus .face .grass[_v-4d229f68] {\n  position: absolute;\n  left: 0;\n  top: 5rem;\n  width: 100%;\n}\n.focus .face .trees[_v-4d229f68] {\n  position: absolute;\n  left: 5.88rem;\n  top: 4.24rem;\n  width: 1.35rem;\n}\n.focus .face .car[_v-4d229f68] {\n  position: absolute;\n  left: 0.5rem;\n  top: 4.75rem;\n  width: 0.9rem;\n}\n.focus .avatar[_v-4d229f68] {\n  box-sizing: border-box;\n  position: absolute;\n  left: 2.85rem;\n  top: 3.9rem;\n  width: 1.5rem;\n  height: 1.5rem;\n  border-radius: 5rem;\n  border: 0.08rem solid #eeeeee;\n  overflow: hidden;\n}\n.focus .avatar img[_v-4d229f68] {\n  margin-left: -0.08rem;\n  margin-top: -0.08rem;\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.focus .title[_v-4d229f68] {\n  width: 100%;\n}\n", ""]);

	// exports


/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
		props: ['avatar'],
		data: function data() {
			return {
				img: {
					cloud_1: './img/face/cloud_1.png',
					cloud_2: './img/face/cloud_2.png',
					cloud_3: './img/face/cloud_3.png',
					cloud_4: './img/face/cloud_4.png',
					clouds_1: './img/face/clouds_1.png',
					clouds_2: './img/face/clouds_2.png',
					logos: './img/face/logos.png',
					planet: './img/face/planet.png',
					clouds_3: './img/face/clouds_3.png',
					grass: './img/face/grass.png',
					trees: './img/face/trees.png',
					car: './img/face/car.png'
				}
			};
		}
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"focus\" _v-4d229f68=\"\">\n\t<div class=\"face\" _v-4d229f68=\"\">\n\t\t<img class=\"cloud_1\" :src=\"img.cloud_1\" _v-4d229f68=\"\">\n\t\t<img class=\"cloud_2\" :src=\"img.cloud_2\" _v-4d229f68=\"\">\n\t\t<img class=\"cloud_3\" :src=\"img.cloud_3\" _v-4d229f68=\"\">\n\t\t<img class=\"cloud_4\" :src=\"img.cloud_4\" _v-4d229f68=\"\">\n\t\t<img class=\"clouds_1\" :src=\"img.clouds_1\" _v-4d229f68=\"\">\n\t\t<img class=\"clouds_2\" :src=\"img.clouds_2\" _v-4d229f68=\"\">\n\t\t<img class=\"logos\" :src=\"img.logos\" _v-4d229f68=\"\">\n\t\t<img class=\"planet\" :src=\"img.planet\" _v-4d229f68=\"\">\n\t\t<img class=\"clouds_3\" :src=\"img.clouds_3\" _v-4d229f68=\"\">\n\t\t<img class=\"grass\" :src=\"img.grass\" _v-4d229f68=\"\">\n\t\t<img class=\"trees\" :src=\"img.trees\" _v-4d229f68=\"\">\n\t\t<img class=\"car\" :src=\"img.car\" _v-4d229f68=\"\">\n\t</div>\n\t<div class=\"avatar\" _v-4d229f68=\"\">\n\t\t<img :src=\"avatar\" _v-4d229f68=\"\">\n\t</div>\n</div>\n";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(20)
	__vue_script__ = __webpack_require__(22)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\h5\\school\\src\\components\\lottery-box.vue: named exports in *.vue files are ignored.")}
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-3fe7178a/lottery-box.vue"
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
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../../node_modules/less-loader/index.js!./../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./lottery-box.vue", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../../../node_modules/less-loader/index.js!./../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./lottery-box.vue");
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
	exports.push([module.id, ".lottery {\n  position: relative;\n  width: 6.6rem;\n  margin: auto;\n  margin-bottom: 0.54rem;\n  overflow: hidden;\n}\n.lottery .lottery-bg {\n  width: 100%;\n}\n.lottery .content {\n  box-sizing: border-box;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n.lottery .content .toMine {\n  position: absolute;\n  right: 0.12rem;\n  bottom: 0;\n  width: 1.72rem;\n  height: 0.58rem;\n  display: block;\n}\n.lottery .content .trophy {\n  position: absolute;\n  width: 2.1rem;\n  height: 2.1rem;\n  border-radius: 0.1rem;\n  overflow: hidden;\n}\n.lottery .content .trophy img {\n  width: 1.98rem;\n  height: 1.98rem;\n  margin-top: 0.06rem;\n  margin-left: 0.06rem;\n}\n.lottery .content .trophy.active {\n  background-size: 100%;\n}\n.lottery .content .trophy0 {\n  left: 0.08rem;\n  top: 1.3rem;\n}\n.lottery .content .trophy1 {\n  left: 2.24rem;\n  top: 1.3rem;\n}\n.lottery .content .trophy2 {\n  left: 4.4rem;\n  top: 1.3rem;\n}\n.lottery .content .trophy3 {\n  left: 4.4rem;\n  top: 3.42rem;\n}\n.lottery .content .trophy4 {\n  left: 4.4rem;\n  top: 5.6rem;\n}\n.lottery .content .trophy5 {\n  left: 2.24rem;\n  top: 5.6rem;\n}\n.lottery .content .trophy6 {\n  left: 0.08rem;\n  top: 5.6rem;\n}\n.lottery .content .trophy7 {\n  left: 0.08rem;\n  top: 3.42rem;\n}\n.lottery .content .btn {\n  position: absolute;\n  left: 2.3rem;\n  top: 3.5rem;\n  width: 1.98rem;\n  height: 1.98rem;\n  font-size: 0.52rem;\n}\n.lottery .content .btn p {\n  text-align: center;\n  color: #ee5f47;\n}\n.lottery .content .btn p:nth-child(1) {\n  margin-top: 0.46rem;\n  font-weight: bold;\n}\n.lottery .content .btn p:nth-child(2) {\n  font-size: 0.28rem;\n}\n.lottery .content .btn p:nth-child(2) .span {\n  font-size: 0.28rem;\n}\n", ""]);

	// exports


/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
		template: '\n\t\t<div class="lottery">\n\t\t\t<img class="lottery-bg" src="img/lottery.png"/>\n\t\t\t<div class="content">\n\t\t\t\t<a class="toMine" v-on:click="toMine"></a>\n\t\t\t\t<div class="btn" \n\t\t\t\t\tstyle="{{pressed?\'background:#ffce20;border-radius: 0.1rem;\':\'background: url(img/btn.png) no-repeat;background-size: 100%;\'}}" \n\t\t\t\t\tv-on:touchstart="drawtouchstart"\n\t\t\t\t\tv-on:touchmove="drawtouchmove"\n\t\t\t\t\tv-on:touchend="drawtouchend"\n\t\t\t\t\tv-on:touchcancel="drawtouchcancel">\n\t\t\t\t\t<p>抽奖</p>\n\t\t\t\t\t<p>(<span class="chance">{{chance||0}}</span>)次机会</p>\n\t\t\t\t</div>\n\t\t\t\t<div v-for="(i,item) in trophies" class="trophy trophy{{i}}"\n\t\t\t\tstyle="{{i===current?\'background: url(./img/orange_bg.png) no-repeat;\':\'\'}}">\n\t\t\t\t\t<img src="img/trophy{{i}}{{ios?\'_ios\':\'\'}}.png"/>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t',
		props: ['ios', 'trophies', 'chance', 'result'],
		data: function data() {
			return {
				img: {
					cloud_1: './img/face/cloud_1.png'
				},

				pressed: false,
				inDrawing: false,
				current: 0
			};
		},
		computed: {},
		created: function created() {
			var _this = this;

			var self = this;
			this.$watch('result', function () {
				console.log(_this.result);
				if (_this.result > -1) {
					var result;
					var cycle;
					var duration;

					(function () {
						var move = function move() {
							self.current++;
							if (self.current === 8) {
								self.current = 0;
								cycle++;
							};
							duration += 10;
							if (cycle === 3 && self.current === result) {
								setTimeout(function () {
									self.$dispatch('SHOW_MASK', 'get' + result);
									self.$dispatch('MINUS_CHANCE');
									self.inDrawing = false;
								}, 1000);
							} else {
								setTimeout(move, duration);
							}
						};

						self.inDrawing = true;
						result = self.result;
						cycle = 0;
						duration = 100;

						setTimeout(move, duration);
					})();
				};
			});
		},
		methods: {
			drawtouchstart: function drawtouchstart(e) {
				this.pressed = true;
			},
			drawtouchmove: function drawtouchmove() {
				this.pressed = false;
			},
			drawtouchend: function drawtouchend() {
				if (this.pressed) {
					this.draw();
				};
				this.pressed = false;
			},
			drawtouchcancel: function drawtouchcancel() {
				this.pressed = false;
			},
			draw: function draw() {
				var self = this;
				if (!self.inDrawing) {
					if (self.chance > 0) {
						self.$dispatch('DRAW');
					} else {
						self.$dispatch('SHOW_MASK', 'none');
					}
				};
			},
			toMine: function toMine() {
				if (this.ios) {
					Local.openInside(location.href.replace('index.html', 'mine.html'));
				} else {
					location.href = './mine.html';
				}
			}
		}
	};

/***/ }
/******/ ]);