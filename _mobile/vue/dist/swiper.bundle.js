webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(9);
	var swiper = __webpack_require__(40);

	Vue.component( 'swiper',swiper );

	new Vue({
		el: '#root',
		data: {
			items: [{
				background: 'red'
			},{
				background: 'orange'
			},{
				background: 'yellow'
			},{ 
				background: 'green'
			},{
				background: 'blue'
			}]
		},
		computed: {
		},
		methods: {
		}
	})

/***/ },

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
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

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n* :focus {\n  outline: none;\n}\nhtml {\n  font-size: 100px;\n  font-family: 'Microsoft Yahei';\n}\nul {\n  list-style: none;\n}\nimg {\n  display: block;\n}\n.clearfix {\n  clear: both;\n}\n/* Media Queries */\n@media (max-width: 350px) {\n  .desc {\n    font-size: 0.18rem!important;\n  }\n  .rules p {\n    font-size: 0.16rem!important;\n  }\n}\n", ""]);

	// exports


/***/ },

/***/ 11:
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

/***/ 40:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(41)
	__vue_script__ = __webpack_require__(43)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\swiper.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(47)
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

/***/ 41:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(42);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-5ca2b26e&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./swiper.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-5ca2b26e&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./swiper.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 42:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".swiper[_v-5ca2b26e] {\n  position: relative;\n  width: 50%;\n  height: 20vw;\n  background: grey;\n  margin: auto;\n}\n.swiper .train[_v-5ca2b26e] {\n  width: 1000%;\n  height: 100%;\n}\n.swiper .train .item[_v-5ca2b26e] {\n  float: left;\n  width: 10%;\n  height: 100%;\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8);\n  opacity: 0.6;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n.swiper .train .item.active[_v-5ca2b26e] {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  opacity: 1;\n}\n", ""]);

	// exports


/***/ },

/***/ 43:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _stringify = __webpack_require__(44);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var swiper = {
		props: {
			items: {
				default: function _default() {
					return [];
				}
			},
			style: {},
			sticky: {
				default: true
			},
			autoplay: {
				default: false
			},
			duration: {
				default: 300
			},
			interval: {
				default: 500
			}
		},
		data: function data() {
			return {
				width: 0,

				copy: [],

				switching: false,
				inCycle: false,
				moveCount: 0,
				scrolling: false,
				trainOffsetX: 0,
				X1: 0,
				X2: 0,

				currentOne: 2,
				transition: '0s',
				offset: 0
			};
		},
		computed: {
			transform: function transform() {
				return 'translate3d(' + trainOffsetX + 'px,0,0)';
			}
		},
		watch: {
			items: function items() {
				this.copy = this.items;
			}
		},
		mounted: function mounted() {
			var _this = this;

			this.copy = JSON.parse((0, _stringify2.default)(this.items));
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

				if (this.currentOne < this.copy.length - 1) {
					this.currentOne++;
					this.transition = '0.3s';
					this.trainOffsetX = -this.width * 3;
				}
				setTimeout(function () {
					_this2.transition = '0s';
					var first = _this2.copy[0];
					_this2.copy.splice(0, 1);
					_this2.copy.push(first);
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
					_this3.transition = '0s';
					var zz = _this3.copy.length - 1;
					var last = _this3.copy[zz];
					_this3.copy.splice(zz, 1);
					_this3.copy.unshift(last);
					_this3.currentOne = 2;
					_this3.trainOffsetX = -_this3.width * 2;
					_this3.switching = false;
				}, this.duration);
			},
			touchstart: function touchstart(e) {
				console.log(this.switching);
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
					if (distance < 0) {
						this.switching = true;
						this.toNext();
					} else if (distance > 0) {
						this.switching = true;
						this.toPrev();
					};
					this.inCycle = false;
				};
			}
		}
	};
	module.exports = swiper;

/***/ },

/***/ 44:
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(45), __esModule: true };

/***/ },

/***/ 45:
/***/ function(module, exports, __webpack_require__) {

	var core  = __webpack_require__(46)
	  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
	module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },

/***/ 46:
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },

/***/ 47:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"swiper\" :style=\"style\" v-on:touchstart=\"touchstart($event)\" v-on:touchmove=\"touchmove($event)\" v-on:touchend=\"touchend($event)\" _v-5ca2b26e=\"\">\n\t<ul class=\"train\" :style=\" 'transform:translate3d('+trainOffsetX+'px,0,0);transition:'+transition+';' \" _v-5ca2b26e=\"\">\n\t\t<li :class=\" 'item '+(i===currentOne?'active':'') \" v-for=\"(item,i) in copy\" :key=\"item.background\" :style=\" `background:${item.background}` \" _v-5ca2b26e=\"\"></li>\n\t</ul>\n</div>\n";

/***/ }

});