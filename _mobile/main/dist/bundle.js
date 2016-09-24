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

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reducer = __webpack_require__(2);

	var _Navbar = __webpack_require__(7);

	var _Home = __webpack_require__(12);

	var _Animations = __webpack_require__(13);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(14);
	__webpack_require__(16);

	var PropTypes = React.PropTypes;

	var Router = ReactRouter.Router;
	var Route = ReactRouter.Route;
	var Link = ReactRouter.Link;
	var hashHistory = ReactRouter.hashHistory;
	var IndexRoute = ReactRouter.IndexRoute;

	var createStore = Redux.createStore;
	var compose = Redux.compose;
	var combineReducers = Redux.combineReducers;

	var Provider = ReactRedux.Provider;
	var connect = ReactRedux.connect;

	// actions
	var LOGIN = { type: 'LOGIN' };

	var INCREMENT = { type: 'INCREMENT' };
	var DECREMENT = { type: 'DECREMENT' };

	// store
	var $$store = createStore(_reducer.$$reducer /*,enhancer*/);
	console.debug('Redux: store created.');
	console.debug('Redux: state initialized', $$store.getState());

	var App = function (_React$Component) {
		_inherits(App, _React$Component);

		function App() {
			_classCallCheck(this, App);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this));

			console.debug('<App/> constructing');
			return _this;
		}

		_createClass(App, [{
			key: 'render',
			value: function render() {
				console.debug('<App/> rendering, State:', $$store.getState());
				return React.createElement(
					'div',
					null,
					React.createElement(_Navbar.Navbar, null),
					this.props.children
				);
			}
		}]);

		return App;
	}(React.Component);

	var AppConnected = connect(function (state) {
		return {
			notice: state.notice
		};
	})(App);

	// The router.
	ReactDOM.render(React.createElement(
		Provider,
		{ store: $$store },
		React.createElement(
			Router,
			{ history: hashHistory },
			React.createElement(
				Route,
				{ path: '/', component: AppConnected },
				React.createElement(Route, { path: '/home', component: _Home.Home }),
				React.createElement(Route, { path: '/animations', component: _Animations.Animations }),
				React.createElement(IndexRoute, { path: '/home', component: _Home.Home })
			)
		)
	), document.getElementById('app'));

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.$$reducer = undefined;

	var _user = __webpack_require__(3);

	var _shoppingCart = __webpack_require__(5);

	var _notice = __webpack_require__(6);

	function page() {
		var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		var action = arguments[1];

		switch (action.type) {
			case 'JUMP':
				return action.name;
			default:
				return state;
		}
	}

	var $$reducer = Redux.combineReducers({ user: _user.user, shoppingCart: _shoppingCart.shoppingCart, notice: _notice.notice });

	exports.$$reducer = $$reducer;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.user = undefined;

	var _common = __webpack_require__(4);

	function user() {
		var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		var action = arguments[1];

		switch (action.type) {
			case 'LOGIN':
				sessionStorage.userID = action.user.userID;
				location.hash = 'home';
				return { userID: action.user.userID };
			case 'LOGOUT':
				delete sessionStorage.userID;
				return { userID: undefined };
			default:
				return state;
		}
	}

	exports.user = user;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var $$rootDir = "http://localhost/fytpy/react/";
	var $$phpDir = "http://localhost/fytpy/php/";
	var $$itemDir = "http://localhost/fytpy/items/";
	var $$imgDir = "http://localhost/fytpy/images/";

	exports.$$rootDir = $$rootDir;
	exports.$$phpDir = $$phpDir;
	exports.$$itemDir = $$itemDir;
	exports.$$imgDir = $$imgDir;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.shoppingCart = undefined;

	var _common = __webpack_require__(4);

	function shoppingCart() {
		var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
		var action = arguments[1];


		switch (action.type) {
			case 'ADD_TO_CART':
				console.log(action);
				fetch('/addToCart', {
					method: 'POST',
					headers: {
						// 'Accept': 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ itemID: action.itemID })
				}).then(function (res) {
					return res.json();
				}).then(function (data) {
					console.log('fuck');
				}).catch(function (e, f, g) {
					console.log(e, f, g);
				});
				return state;
			default:
				return state;
		}
	}

	exports.shoppingCart = shoppingCart;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.notice = undefined;

	var _common = __webpack_require__(4);

	function notice() {
		var state = arguments.length <= 0 || arguments[0] === undefined ? { tick: 0, text: '' } : arguments[0];
		var action = arguments[1];

		switch (action.type) {
			case 'ALERT':
				var newState = {
					tick: state.tick + 1,
					text: action.text
				};
				return newState;
			default:
				return state;
		}
	}

	exports.notice = notice;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(8);

	var Navbar = function (_React$Component) {
		_inherits(Navbar, _React$Component);

		function Navbar() {
			_classCallCheck(this, Navbar);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Navbar).call(this));

			_this.state = {
				show: false
			};
			return _this;
		}

		_createClass(Navbar, [{
			key: "toggle",
			value: function toggle() {
				if (this.state.show) {
					this.setState({
						show: false
					});
				} else {
					this.setState({
						show: true
					});
				}
			}
		}, {
			key: "render",
			value: function render() {
				return React.createElement(
					"div",
					{ className: "NAVBAR" },
					React.createElement(
						"div",
						{ className: "navicon", onClick: this.toggle.bind(this) },
						React.createElement("i", { className: "fa fa-navicon" })
					),
					"MyHome",
					React.createElement(
						"div",
						{ className: this.state.show ? 'box _show' : 'box' },
						React.createElement(
							"div",
							{ className: "tab" },
							React.createElement(
								"a",
								{ href: "#/home" },
								"Home"
							)
						),
						React.createElement(
							"div",
							{ className: "tab" },
							React.createElement(
								"a",
								{ href: "#/animations" },
								"Animations"
							)
						),
						React.createElement(
							"div",
							{ className: "tab" },
							React.createElement(
								"a",
								{ href: "./_mobile/farm/index.html" },
								"Farm"
							)
						)
					)
				);
			}
		}]);

		return Navbar;
	}(React.Component);

	exports.Navbar = Navbar;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./Navbar.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./Navbar.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, ".NAVBAR {\n  box-sizing: border-box;\n  position: relative;\n  height: 44px;\n  line-height: 44px;\n  text-align: center;\n  font-size: 24px;\n  color: #333;\n  border-bottom: 1px solid #dddddd;\n}\n.NAVBAR .navicon {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 44px;\n  height: 44px;\n  font-size: 20px;\n  line-height: 44px;\n  text-align: center;\n}\n.NAVBAR .box {\n  position: absolute;\n  left: 0;\n  top: 100%;\n  width: 100%;\n  border-top: 1px solid #dddddd;\n  border-bottom: 1px solid #dddddd;\n  background: white;\n  font-size: 15px;\n  text-align: left;\n  display: none;\n  box-shadow: inset 0 1px 0 #fff, 0 8px 10px rgba(0, 0, 0, 0.15);\n}\n.NAVBAR .box .tab {\n  padding: 8px 15px;\n  line-height: normal;\n}\n", ""]);

	// exports


/***/ },
/* 10 */
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
/* 11 */
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
/* 12 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Home = function (_React$Component) {
		_inherits(Home, _React$Component);

		function Home() {
			_classCallCheck(this, Home);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Home).apply(this, arguments));
		}

		_createClass(Home, [{
			key: "render",
			value: function render() {
				return React.createElement(
					"div",
					{ className: "Home" },
					"home"
				);
			}
		}]);

		return Home;
	}(React.Component);

	exports.Home = Home;

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Animations = function (_React$Component) {
		_inherits(Animations, _React$Component);

		function Animations(props) {
			_classCallCheck(this, Animations);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Animations).call(this, props));

			_this.state = {
				list: [{
					title: 'CSS3 animation',
					hrefs: ['./_mobile/svg/3d-cube.html']
				}, {
					title: 'interactive',
					hrefs: ['./_mobile/svg/gooey_menu.html', './_mobile/svg/stack.html', './_mobile/svg/stack-both.html']
				}, {
					title: 'SVG',
					hrefs: ['./_mobile/svg/wave.html', './_mobile/svg/sunset.html', './_mobile/svg/countdown.html']
				}, {
					title: 'parallax animation',
					hrefs: ['./_mobile/svg/parallax-clouds.html', './_mobile/svg/parallax.html']
				}, {
					title: 'button animation',
					hrefs: ['./_mobile/svg/button-blobs.html', './_mobile/svg/button-red.html', './_mobile/svg/button-ripple.html']
				}, {
					title: 'stroke animation',
					hrefs: ['./_mobile/svg/stroke-arsenal.html', './_mobile/svg/stroke-square.html', './_mobile/svg/stroke-circle.html', './_mobile/svg/stroke-gameboy.html', './_mobile/svg/stroke-jar.html', './_mobile/svg/stroke-qq.html']
				}, {
					title: 'morphing',
					hrefs: ['./_mobile/svg/morphing-phones.html']
				}, {
					title: 'canvas',
					hrefs: ['./_mobile/canvas/rain.html', './_mobile/canvas/snowfall.html', './_mobile/canvas/fire.html']
				}, {
					title: 'h5',
					hrefs: ['./_mobile/h5/star_wars/index.html', './_mobile/h5/olympics/index.html', './_mobile/h5/olympics/result.html', './_mobile/h5/carnival/index.html', './_mobile/h5/school/index.html', './_mobile/h5/feast/feast.html', './_mobile/h5/project/index.html']
				}]
			};
			return _this;
		}

		_createClass(Animations, [{
			key: 'render',
			value: function render() {
				var _this2 = this;

				return React.createElement(
					'div',
					{ className: 'ANIMATIONS' },
					React.createElement(
						'div',
						{ className: 'panel' },
						this.state.list.map(function (a, i) {
							return React.createElement(
								'div',
								null,
								React.createElement(
									'div',
									{ className: 'panel-header' },
									a.title
								),
								React.createElement(
									'div',
									{ className: i === _this2.state.list.length - 1 ? 'panel-body last' : 'panel-body' },
									a.hrefs.map(function (b) {
										return React.createElement(
											'span',
											null,
											React.createElement(
												'a',
												{ href: b },
												b
											),
											React.createElement('br', null)
										);
									})
								)
							);
						})
					)
				);
			}
		}]);

		return Animations;
	}(React.Component);

	exports.Animations = Animations;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./common.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./common.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nhtml {\n  font-size: 100px;\n  font-family: 'Microsoft Yahei';\n}\nul,\nli {\n  list-style: none;\n}\nbutton,\ninput {\n  -webkit-appearance: none;\n}\nimg {\n  display: block;\n}\n.mask {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.7);\n}\n.block {\n  position: relative;\n  width: 100%;\n}\n._show {\n  display: block!important;\n}\n.container {\n  position: relative;\n  width: 100%;\n  height: 1vh;\n  overflow: hidden;\n}\n.panel {\n  margin: 0 15px 15px 15px;\n  border: 1px solid #dddddd;\n  border-radius: 3px;\n  font-size: 14px;\n}\n.panel .panel-header {\n  padding: 10px 15px;\n  border-bottom: 1px solid #dddddd;\n  font-weight: bold;\n}\n.panel .item {\n  padding: 10px 15px;\n}\n.panel .panel-body {\n  padding: 10px 15px;\n  border-bottom: 1px solid #dddddd;\n}\n.panel .panel-body.last {\n  border-bottom: none!important;\n}\n.clearfix {\n  clear: both;\n}\n/* Media Queries */\n@media (-webkit-min-device-pixel-ratio: 2) {\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\na {\n  text-decoration: none;\n}\na:link {\n  color: #e91e63;\n}\na:visited {\n  color: #e91e63;\n}\na:hover {\n  color: #e91e63;\n}\na:active {\n  color: #e91e63;\n}\nhtml {\n  font-family: 'Microsoft Yahei';\n}\n@media screen and (max-width: 750px) {\n  body {\n    font-size: 4vw!important;\n  }\n}\n.container {\n  width: 100%;\n  padding-top: 4vw;\n  padding-left: 4vw;\n  padding-right: 4vw;\n}\n.section {\n  padding-top: 2vw;\n  padding-bottom: 2vw;\n  border-bottom: 1px solid lightgrey;\n}\n", ""]);

	// exports


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./index.less");
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

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, ".ANIMATIONS {\n  width: 100%;\n  padding-top: 15px;\n}\n@keyframes fuck {\n  100% {\n    background: red;\n  }\n}\n", ""]);

	// exports


/***/ }
/******/ ]);