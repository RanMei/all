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

	var _Mask = __webpack_require__(7);

	var _Notice = __webpack_require__(12);

	var _NoticePretty = __webpack_require__(15);

	var _App = __webpack_require__(16);

	var _Item = __webpack_require__(17);

	var _ConfirmOrder = __webpack_require__(23);

	var _Navbar = __webpack_require__(24);

	var _Signin = __webpack_require__(25);

	var _Signup = __webpack_require__(26);

	var _Member = __webpack_require__(27);

	var _Home = __webpack_require__(28);

	var _ShoppingCart = __webpack_require__(29);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	//import { Router,Route,IndexRoute,Link,hashHistory } from 'react-router';
	//import {createStore,combineReducers} from 'redux';
	//import {Provider,connect} from 'react-redux';

	//import {Veil} from './components/Veil.jsx';

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

	// import { createDevTools } from 'redux-devtools';
	// import LogMonitor from 'redux-devtools-log-monitor';
	// import DockMonitor from 'redux-devtools-dock-monitor';
	// var DevTools = createDevTools(
	// 	<DockMonitor
	// 		toggleVisibilityKey='ctrl-h'
	// 		changePositionKey='ctrl-q'>
	// 		<LogMonitor />
	// 	</DockMonitor>
	// );
	// const enhancer = compose(
	// 	DevTools.instrument()
	// );

	// Counter.propTypes = {
	//   value: PropTypes.number.isRequired,
	//   onIncrement: PropTypes.func.isRequired,
	//   onDecrement: PropTypes.func.isRequired
	// }

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
					React.createElement(_Mask.Mask, null),
					React.createElement(_Notice.Notice, { notice: this.props.notice }),
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
	var MemberConnected = connect(function (state) {
		return {
			user: state.user,
			act: function act(action) {
				return $$store.dispatch(action);
			}
		};
	})(_Member.Member);

	var SigninContainer = function (_React$Component2) {
		_inherits(SigninContainer, _React$Component2);

		function SigninContainer() {
			_classCallCheck(this, SigninContainer);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(SigninContainer).apply(this, arguments));
		}

		_createClass(SigninContainer, [{
			key: 'render',
			value: function render() {
				return React.createElement(_Signin.Signin, {
					act: function act(action) {
						return $$store.dispatch(action);
					} });
			}
		}]);

		return SigninContainer;
	}(React.Component);

	var ShoppingCartContainer = function (_React$Component3) {
		_inherits(ShoppingCartContainer, _React$Component3);

		function ShoppingCartContainer() {
			_classCallCheck(this, ShoppingCartContainer);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(ShoppingCartContainer).apply(this, arguments));
		}

		_createClass(ShoppingCartContainer, [{
			key: 'render',
			value: function render() {
				return React.createElement(_ShoppingCart.ShoppingCart, {
					act: function act(action) {
						return $$store.dispatch(action);
					} });
			}
		}]);

		return ShoppingCartContainer;
	}(React.Component);

	var ItemContainer = function (_React$Component4) {
		_inherits(ItemContainer, _React$Component4);

		function ItemContainer() {
			_classCallCheck(this, ItemContainer);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(ItemContainer).apply(this, arguments));
		}

		_createClass(ItemContainer, [{
			key: 'render',
			value: function render() {
				return React.createElement(_Item.Item, {
					act: function act(action) {
						return $$store.dispatch(action);
					} });
			}
		}]);

		return ItemContainer;
	}(React.Component);

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
				React.createElement(Route, { path: '/signin', component: SigninContainer }),
				React.createElement(Route, { path: '/signup', component: _Signup.Signup }),
				React.createElement(Route, { path: '/member', component: MemberConnected }),
				React.createElement(Route, { path: '/shopping_cart', component: ShoppingCartContainer }),
				React.createElement(Route, { path: '/item', component: ItemContainer }),
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

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(8);

	var Mask = function (_React$Component) {
		_inherits(Mask, _React$Component);

		function Mask(props) {
			_classCallCheck(this, Mask);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Mask).call(this, props));

			_this.state = {
				show: false
			};
			return _this;
		}

		_createClass(Mask, [{
			key: 'componentDidMount',
			value: function componentDidMount() {}
		}, {
			key: 'render',
			value: function render() {
				var self = this;
				return React.createElement(
					'div',
					{ className: 'MASK', style: { display: this.state.show ? 'block' : 'none' } },
					React.createElement(
						'div',
						{ className: '_panel' },
						React.createElement(
							'div',
							{ className: '_header' },
							'确认删除'
						)
					)
				);
			}
		}]);

		return Mask;
	}(React.Component);

	Mask.defaultProps = {};

	exports.Mask = Mask;

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
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./Mask.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./Mask.less");
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
	exports.push([module.id, ".MASK {\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 9999;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.8);\n}\n.MASK ._panel {\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n  width: 6rem;\n  height: 3rem;\n  border-radius: 0.05rem;\n  background: white;\n}\n.MASK ._panel ._header {\n  box-sizing: border-box;\n  padding: 0.2rem 0;\n  margin: 0 0.2rem;\n  border-bottom: 1px solid #dfdfdf;\n  font-size: 0.26rem;\n  text-align: center;\n}\n", ""]);

	// exports


/***/ },
/* 10 */
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(13);

	var Notice = function (_React$Component) {
		_inherits(Notice, _React$Component);

		function Notice() {
			_classCallCheck(this, Notice);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Notice).call(this));

			_this.state = {
				show: false
			};
			return _this;
		}

		_createClass(Notice, [{
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(newProps) {
				console.debug('<NoticePretty/> newProps');
				if (newProps.notice.tick !== this.props.notice.tick) {
					this.showOnce();
				}
			}
		}, {
			key: 'showOnce',
			value: function showOnce() {
				var _this2 = this;

				var self = this;
				this.setState({
					show: true
				});
				setTimeout(function () {
					_this2.setState({
						show: false
					});
				}, 1200);
			}
		}, {
			key: 'render',
			value: function render() {
				var self = this;
				return React.createElement(
					'p',
					{ className: 'NOTICE', style: { display: this.state.show === true ? 'block' : 'none' } },
					self.props.notice.text
				);
			}
		}]);

		return Notice;
	}(React.Component);

	Notice.defaultProps = {
		notice: {}
	};

	exports.Notice = Notice;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./Notice.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./Notice.less");
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

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, ".NOTICE {\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n  width: 3rem;\n  height: 1rem;\n  border-radius: 0.1rem;\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  text-align: center;\n  font-size: 0.14rem;\n  line-height: 1rem;\n  z-index: 1000;\n}\n", ""]);

	// exports


/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NoticePretty = function (_React$Component) {
		_inherits(NoticePretty, _React$Component);

		function NoticePretty() {
			_classCallCheck(this, NoticePretty);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NoticePretty).call(this));

			_this.style = {
				position: 'fixed',
				left: 0,
				top: 0,
				width: '100%',
				height: '1.5rem',
				background: 'blue',
				opacity: '0.8',
				color: 'white',
				textAlign: 'center',
				fontSize: '0.4rem',
				lineHeight: '1.5rem',
				transition: 'transform 0.5s',
				zIndex: '1000',
				transform: 'translate3d(0,-100%,0)'
			};
			return _this;
		}

		_createClass(NoticePretty, [{
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(newProps) {
				console.debug('<NoticePretty/> newProps');
				if (newProps.notice.text === '您输入的用户名或密码有误！') {
					this.refs.p.style.background = 'red';
				} else {
					this.refs.p.style.background = 'blue';
				}
				if (newProps.notice.tick !== this.props.notice.tick) {
					this.showOnce();
				}
			}
		}, {
			key: 'showOnce',
			value: function showOnce() {
				var _this2 = this;

				this.refs.p.style.transform = 'translate3d(0,0,0)';
				setTimeout(function () {
					_this2.refs.p.style.transform = 'translate3d(0,-100%,0)';
				}, 800);
			}
		}, {
			key: 'render',
			value: function render() {
				var self = this;
				return React.createElement(
					'p',
					{ style: this.style, ref: 'p' },
					self.props.notice.text
				);
			}
		}]);

		return NoticePretty;
	}(React.Component);

	exports.NoticePretty = NoticePretty;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.BackToTop = exports.Footer = exports.SearchBox = exports.List = exports.Topbar = exports.SearchBar = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _common = __webpack_require__(4);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Router = ReactRouter.Router;
	var Route = ReactRouter.Route;
	var Link = ReactRouter.Link;
	var hashHistory = ReactRouter.hashHistory;

	var SearchBar = function (_React$Component) {
		_inherits(SearchBar, _React$Component);

		function SearchBar() {
			_classCallCheck(this, SearchBar);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(SearchBar).apply(this, arguments));
		}

		_createClass(SearchBar, [{
			key: "render",
			value: function render() {
				return React.createElement(
					"div",
					{ className: "searchbar wrapper" },
					React.createElement(
						"div",
						{ className: "container" },
						React.createElement(
							"div",
							{ className: "search_box" },
							React.createElement(
								"form",
								null,
								React.createElement("input", { type: "text", placeholder: "请输入您想搜索的商品名称" }),
								React.createElement(
									"a",
									{ href: "search.html", className: "a-search search_btn" },
									React.createElement("i", { className: "fa fa-search" })
								)
							)
						)
					)
				);
			}
		}]);

		return SearchBar;
	}(React.Component);

	var Topbar = function (_React$Component2) {
		_inherits(Topbar, _React$Component2);

		function Topbar() {
			_classCallCheck(this, Topbar);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Topbar).apply(this, arguments));
		}

		_createClass(Topbar, [{
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps(newProps) {
				//console.log('<Topbar/> newProps',this.props,this.state);
			}
		}, {
			key: "componentDidUpdate",
			value: function componentDidUpdate() {
				//console.log('<Topbar/> updated',this.props,this.state);
			}
		}, {
			key: "render",
			value: function render() {
				console.log('<Topbar/> rendering', this.props, this.state);
				var user = this.props.user;
				var shoppingCart = this.props.user.shoppingCart;
				return React.createElement(
					"div",
					{ className: "topbar wrapper" },
					React.createElement(
						"div",
						{ className: "container" },
						React.createElement(
							"p",
							null,
							React.createElement(
								Link,
								{ to: "/home", className: "a_home" },
								"欢迎来到飞越太平洋海淘网站"
							)
						),
						React.createElement(
							"ul",
							null,
							React.createElement(
								"li",
								null,
								user.username || React.createElement(
									Link,
									{ to: "/signin", className: "a-signin login" },
									"登录"
								)
							),
							React.createElement(
								"span",
								{ className: "separator" },
								"|"
							),
							React.createElement(
								"li",
								null,
								user.username ? React.createElement(
									"a",
									{ onClick: this.props.onLogout.bind(this) },
									"注销"
								) : React.createElement(
									"a",
									{ href: "#/signin", className: "a-signup register" },
									"注册"
								)
							),
							React.createElement(
								"span",
								{ className: "separator" },
								"|"
							),
							React.createElement(
								"li",
								null,
								React.createElement("i", { className: "fa fa-file" }),
								" ",
								React.createElement(
									"a",
									{ className: "a_my_orders", href: "./orders.html" },
									"我的订单"
								)
							),
							React.createElement(
								"span",
								{ className: "separator" },
								"|"
							),
							React.createElement(
								"li",
								{ className: "my_cart" },
								React.createElement("i", { className: "fa fa-shopping-cart" }),
								React.createElement(
									"span",
									null,
									" "
								),
								React.createElement(
									Link,
									{ to: "/shopping_cart", className: "a-cart" },
									"我的购物车(",
									React.createElement(
										"span",
										{ className: "quantityIn" },
										user.username ? shoppingCart.length : 0
									),
									")"
								),
								React.createElement(
									"div",
									{ className: "cart_panel" },
									"我的购物车"
								)
							)
						),
						React.createElement("div", { className: "clear" })
					)
				);
			}
		}]);

		return Topbar;
	}(React.Component);

	var List = function (_React$Component3) {
		_inherits(List, _React$Component3);

		function List() {
			_classCallCheck(this, List);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(List).apply(this, arguments));
		}

		_createClass(List, [{
			key: "render",
			value: function render() {
				return React.createElement(
					"ul",
					null,
					this.props.list.map(function (item) {
						return React.createElement(
							"li",
							null,
							item
						);
					})
				);
			}
		}]);

		return List;
	}(React.Component);

	var SearchBox = function (_React$Component4) {
		_inherits(SearchBox, _React$Component4);

		function SearchBox() {
			_classCallCheck(this, SearchBox);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(SearchBox).apply(this, arguments));
		}

		_createClass(SearchBox, [{
			key: "render",
			value: function render() {
				return React.createElement(
					"div",
					{ className: "searchbox" },
					React.createElement("input", { type: "text" }),
					React.createElement(
						"a",
						null,
						"search"
					)
				);
			}
		}]);

		return SearchBox;
	}(React.Component);

	var Footer = function (_React$Component5) {
		_inherits(Footer, _React$Component5);

		function Footer() {
			_classCallCheck(this, Footer);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).apply(this, arguments));
		}

		_createClass(Footer, [{
			key: "render",
			value: function render() {
				return React.createElement(
					"div",
					{ className: "footer wrapper", style: { background: "#F2F2F2" } },
					React.createElement(
						"ul",
						{ className: "container" },
						React.createElement(
							"li",
							null,
							React.createElement(
								"h4",
								null,
								"购物指南"
							),
							React.createElement(
								"a",
								{ href: "" },
								"新用户注册"
							),
							React.createElement("br", null),
							React.createElement(
								"a",
								{ href: "" },
								"购物流程"
							),
							React.createElement("br", null),
							React.createElement(
								"a",
								{ href: "" },
								"常见问题"
							),
							React.createElement("br", null),
							React.createElement(
								"a",
								{ href: "" },
								"发票制度"
							),
							React.createElement("br", null),
							React.createElement(
								"a",
								{ href: "" },
								"联系我们"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"h4",
								null,
								"支付方式"
							),
							React.createElement(
								"a",
								{ href: "" },
								"在线付款"
							),
							React.createElement("br", null),
							React.createElement(
								"a",
								{ href: "" },
								"余额付款"
							),
							React.createElement("br", null),
							React.createElement(
								"a",
								{ href: "" },
								"优惠券使用说明"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"h4",
								null,
								"配送方式"
							),
							React.createElement(
								"a",
								{ href: "" },
								"邮费说明"
							),
							React.createElement("br", null),
							React.createElement(
								"a",
								{ href: "" },
								"配送服务范围"
							),
							React.createElement("br", null),
							React.createElement(
								"a",
								{ href: "" },
								"配送速度查询"
							),
							React.createElement("br", null),
							React.createElement(
								"a",
								{ href: "" },
								"验货与签收"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"h4",
								null,
								"售后服务"
							),
							React.createElement(
								"a",
								{ href: "" },
								"售后政策"
							),
							React.createElement("br", null),
							React.createElement(
								"a",
								{ href: "" },
								"退货政策"
							),
							React.createElement("br", null),
							React.createElement(
								"a",
								{ href: "" },
								"退货流程"
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"h4",
								null,
								"客服电话"
							),
							React.createElement(
								"p",
								{ className: "serviceTel" },
								"4006-118-118"
							),
							React.createElement(
								"p",
								null,
								"周一至周日9:00~22:00"
							)
						)
					)
				);
			}
		}]);

		return Footer;
	}(React.Component);

	var BackToTop = function (_React$Component6) {
		_inherits(BackToTop, _React$Component6);

		function BackToTop() {
			_classCallCheck(this, BackToTop);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(BackToTop).apply(this, arguments));
		}

		_createClass(BackToTop, [{
			key: "toTop",
			value: function toTop() {
				$(document).ready(function () {
					$("html,body").animate({ "scrollTop": "0" }, 500);
				});
				console.log(this);
			}
		}, {
			key: "render",
			value: function render() {
				return React.createElement(
					"div",
					{ className: "back_to_top", onClick: this.toTop.bind(this) },
					React.createElement("i", { className: "fa fa-angle-up" })
				);
			}
		}]);

		return BackToTop;
	}(React.Component);

	exports.SearchBar = SearchBar;
	exports.Topbar = Topbar;
	exports.List = List;
	exports.SearchBox = SearchBox;
	exports.Footer = Footer;
	exports.BackToTop = BackToTop;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Item = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _common = __webpack_require__(4);

	var _CommentBox = __webpack_require__(18);

	var _Swiper = __webpack_require__(19);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var swiperItems = ['img/index/slider_0.jpg', 'img/index/slider_1.jpg', 'img/index/slider_2.jpg', 'img/index/slider_3.jpg'];

	var Item = function (_React$Component) {
		_inherits(Item, _React$Component);

		function Item() {
			_classCallCheck(this, Item);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Item).call(this));

			_this.state = {
				item: {
					name: '--',
					price: 0,
					desc: '',
					quantity: 1
				},
				tabPanel: 0,
				thumbnail: 0
			};
			window.scroll(0, 0);
			console.log('<Item/> constructing', _this.props, _this.state);
			return _this;
		}

		_createClass(Item, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				this.getItem();
			}
		}, {
			key: 'getItem',
			value: function getItem() {
				var self = this;
				var id = location.hash.match(/\?id=(\w+)/)[1];
				var item;
				var items = __webpack_require__(22).dataItems;
				items.forEach(function (a) {
					if (id === a.id) {
						item = a;
						item.quantity = 1;
					}
				});
				self.setState({
					item: item
				});

				// fetch('/getItem', {
				// 	method: 'POST',
				// 	headers: {
				// 		// 'Accept': 'application/json',
				// 		'Content-Type': 'application/json'
				// 	},
				// 	body: JSON.stringify({itemID:itemID})
				// }).then(function(res){
				// 	return res.json();
				// }).then(function(data){
				// 	console.log('<Item/> item received');
				// 	data.quantity = 1;
				// 	self.setState({
				// 		item: data
				// 	})	
				// }).catch(function(e,f,g){
				// 	console.log(e,f,g);
				// })
			}
		}, {
			key: 'increase',
			value: function increase() {
				this.state.item.quantity++;
				this.setState({
					item: this.state.item
				});
			}
		}, {
			key: 'decrease',
			value: function decrease() {
				this.state.item.quantity > 1 ? this.state.item.quantity-- : '';
				this.setState({
					item: this.state.item
				});
			}
		}, {
			key: 'toImg',
			value: function toImg(index) {
				this.setState({
					thumbnail: index
				});
			}
		}, {
			key: 'toTab',
			value: function toTab(index) {
				this.setState({
					tabPanel: index
				});
			}
		}, {
			key: 'addToCart',
			value: function addToCart() {
				var cart = typeof sessionStorage.shoppingCart === 'string' ? JSON.parse(sessionStorage.shoppingCart) : [];
				cart.push(this.state.item);
				sessionStorage.shoppingCart = JSON.stringify(cart);
				console.log(sessionStorage);
				this.props.act({
					type: 'ALERT',
					text: '成功加入购物车'
				});
				// Perform an action.
				this.props.act({
					type: 'ADD_TO_CART',
					itemID: this.state.item.id,
					quantity: this.state.item.quantity
				});
			}
		}, {
			key: 'buyNow',
			value: function buyNow() {
				console.log(JSON.stringify([this.state.item]));
				sessionStorage.items = JSON.stringify([this.state.item]);
				location.hash = 'confirm_order';
			}
		}, {
			key: 'back',
			value: function back() {
				console.log(111);
				history.go(-1);
			}
		}, {
			key: 'render',
			value: function render() {
				console.log('<Item/> rendering', this.props, this.state);
				var item = this.state.item;
				return React.createElement(
					'div',
					{ className: 'ITEM' },
					React.createElement(
						'div',
						{ className: 'topbar' },
						React.createElement('i', { className: 'fa fa-angle-left', onClick: this.back.bind(this) }),
						' ',
						React.createElement(
							'span',
							{ className: '_text' },
							'商品详情'
						)
					),
					React.createElement(_Swiper.Swiper, { items: swiperItems }),
					React.createElement(
						'div',
						{ className: 'info' },
						React.createElement(
							'p',
							{ className: 'name' },
							item.name
						),
						React.createElement(
							'p',
							{ className: 'price' },
							'￥',
							item.price.toFixed(2)
						)
					),
					React.createElement(
						'div',
						{ className: 'block-quantity' },
						React.createElement(
							'p',
							null,
							'购买数量'
						),
						React.createElement(
							'div',
							{ className: 'counter' },
							React.createElement(
								'p',
								{ className: 'minus', onClick: this.decrease.bind(this) },
								'-'
							),
							React.createElement(
								'p',
								{ className: 'quantity' },
								item.quantity
							),
							React.createElement(
								'p',
								{ className: 'plus', onClick: this.increase.bind(this) },
								'+'
							)
						)
					),
					React.createElement(
						'div',
						{ className: 'details' },
						React.createElement('img', { src: './img/items/' + item.id + '/d0.jpg' })
					),
					React.createElement(
						'ul',
						null,
						React.createElement(
							'li',
							{ className: 'selected' },
							'商品介绍'
						),
						React.createElement(
							'li',
							null,
							'商品参数'
						),
						React.createElement(
							'li',
							null,
							'用户评价'
						)
					),
					React.createElement('div', { className: 'item_nav_shadow' }),
					React.createElement(
						'div',
						{ className: 'item_nav' },
						React.createElement(
							'div',
							{ className: 'favor' },
							React.createElement(
								'p',
								{ className: 'icon-star' },
								React.createElement('i', { className: 'fa fa-star-o' })
							),
							React.createElement(
								'p',
								{ className: 'text-favor' },
								'收藏'
							)
						),
						React.createElement(
							'a',
							{ className: 'to_cart', onClick: this.addToCart.bind(this) },
							'加入购物车'
						),
						React.createElement(
							'a',
							{ className: 'to-buy', onClick: this.buyNow.bind(this) },
							'立即购买'
						)
					)
				);
			}
		}]);

		return Item;
	}(React.Component);

	exports.Item = Item;

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var title = 'I am read-only.';

	var CommentBoxStyle = {
		width: "300px",
		padding: "15px",
		border: "1px solid black",
		background: "lightblue",
		color: "red"
	};

	var CommentStyle = {
		marginBottom: "5px",
		background: "white"
	};

	var CommentList = function (_React$Component) {
		_inherits(CommentList, _React$Component);

		function CommentList() {
			_classCallCheck(this, CommentList);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(CommentList).apply(this, arguments));
		}

		_createClass(CommentList, [{
			key: "render",
			value: function render() {
				function renderComment(comment) {
					return React.createElement(
						"li",
						{ key: comment.id, style: CommentStyle },
						comment.id,
						React.createElement(
							"span",
							{ style: { color: "blue" } },
							comment.author
						),
						comment.time,
						React.createElement("br", null),
						comment.text
					);
				};
				return React.createElement(
					"ul",
					null,
					this.props.comments.map(renderComment)
				);
			}
		}]);

		return CommentList;
	}(React.Component);

	var CommentBox = function (_React$Component2) {
		_inherits(CommentBox, _React$Component2);

		function CommentBox(props) {
			_classCallCheck(this, CommentBox);

			var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(CommentBox).call(this, props));

			_this2.state = { //MODEL //this.state={}
				comments: [{
					author: "Ned",
					time: "2016-03-01 10:11:33",
					text: "Good!",
					id: 1
				}, {
					author: "Rob",
					time: "2016-03-01 13:11:33",
					text: "Nice!",
					id: 2
				}],
				text: ""
			};
			return _this2;
		}

		_createClass(CommentBox, [{
			key: "handleChange",
			value: function handleChange(e) {
				this.setState({
					text: e.target.value
				});
			}
		}, {
			key: "submitComment",
			value: function submitComment(e) {
				e.preventDefault();
				var updatedComments = this.state.comments.concat([{
					author: "Jon",
					time: "",
					text: this.state.text,
					id: this.state.comments.length + 1
				}]);
				this.setState({ //MODEL
					comments: updatedComments,
					text: ""
				});
			}
		}, {
			key: "render",
			value: function render() {
				return (//VIEW virtual DOM
					React.createElement(
						"div",
						{ className: "container" },
						React.createElement(
							"div",
							{ style: CommentBoxStyle },
							React.createElement(
								"h3",
								null,
								"CommentBox"
							),
							React.createElement(CommentList, { comments: this.state.comments }),
							React.createElement(
								"form",
								{ onSubmit: this.submitComment.bind(this) },
								React.createElement("input", { value: this.state.text, onChange: this.handleChange.bind(this), placeholder: "Your comment here..." }),
								React.createElement(
									"button",
									null,
									"comment"
								)
							)
						)
					)
				);
			}
		}]);

		return CommentBox;
	}(React.Component);

	exports.CommentBox = CommentBox;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(20);

	var Swiper = function (_React$Component) {
		_inherits(Swiper, _React$Component);

		function Swiper(props) {
			_classCallCheck(this, Swiper);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Swiper).call(this, props));

			var self = _this;
			_this.$trainOffset = 0;
			_this.$currentOne = 0;

			_this.X0 = null;
			_this.X1 = null;

			_this.state = {
				trainStyle: {
					width: _this.props.items.length + '00%'
				},
				itemStyle: {
					width: 100 / _this.props.items.length + '%'
				},
				currentOne: 0
			};
			return _this;
		}

		_createClass(Swiper, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				console.log(this.props);
				var self = this;
				var _Swiper = React.findDOMNode(self.refs.Swiper);

				this.$width = Number(document.defaultView.getComputedStyle(_Swiper).width.replace(/px/, ''));
				window.addEventListener('resize', function () {
					self.$width = Number(document.defaultView.getComputedStyle(React.findDOMNode(self.refs.Swiper)).width.replace(/px/, ''));
				});
				if (this.props.autoplay === true) {
					setInterval(this.toNext.bind(this), 3000);
				};
			}
		}, {
			key: 'toNext',
			value: function toNext() {
				var self = this;
				if (self.$currentOne < self.props.items.length - 1) {
					self.$currentOne++;
				} else {
					self.$currentOne = 0;
				};
				self.toItem(self.$currentOne);
			}
		}, {
			key: 'handleTouchStart',
			value: function handleTouchStart(e) {
				this.X0 = this.X1 = e.changedTouches[0].pageX;
				console.log(this.X1);
			}
		}, {
			key: 'handleTouchMove',
			value: function handleTouchMove(e) {
				this.X2 = e.changedTouches[0].pageX;
				var distance = this.X2 - this.X1;
				this.$trainOffset += distance;
				this.X1 = this.X2;
				var trainStyle = {
					width: this.props.items.length + '00%',
					transition: '0s',
					transform: 'translate3d(' + this.$trainOffset + 'px,0,0)'
				};
				this.setState({
					trainStyle: trainStyle
				});
			}
		}, {
			key: 'handleTouchEnd',
			value: function handleTouchEnd(e) {
				this.X2 = e.changedTouches[0].pageX;
				var distance = this.X2 - this.X0;
				if (distance > 0 && this.$currentOne > 0) {
					this.$currentOne--;
				} else if (distance < 0 && this.$currentOne < this.props.items.length - 1) {
					this.$currentOne++;
				}
				this.toItem(this.$currentOne);
			}
		}, {
			key: 'toItem',
			value: function toItem(i) {
				this.$trainOffset = -i * this.$width;
				this.setState({
					trainStyle: {
						width: this.props.items.length + '00%',
						transition: '0.3s',
						transform: 'translate3d(' + this.$trainOffset + 'px,0,0)'
					},
					currentOne: i
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var self = this;
				return React.createElement(
					'div',
					{ className: 'Swiper', ref: 'Swiper',
						style: this.props.style,
						onTouchStart: this.handleTouchStart.bind(this),
						onTouchMove: this.handleTouchMove.bind(this),
						onTouchEnd: this.handleTouchEnd.bind(this) },
					React.createElement(
						'ul',
						{ className: 'train', style: this.state.trainStyle },
						this.props.items.map(function (elem) {
							return React.createElement(
								'a',
								{ className: 'item', style: self.state.itemStyle },
								React.createElement('img', { src: elem })
							);
						})
					),
					React.createElement(
						'div',
						{ className: 'pagi' },
						React.createElement(
							'ul',
							{ className: 'pagination', ref: 'pagination' },
							this.props.items.map(function (elem, i) {
								return React.createElement('li', { className: i === self.state.currentOne ? 'dot active' : 'dot' });
							})
						)
					)
				);
			}
		}]);

		return Swiper;
	}(React.Component);

	Swiper.defaultProps = {
		autoplay: true
	};

	exports.Swiper = Swiper;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./Swiper.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./Swiper.less");
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

	exports = module.exports = __webpack_require__(10)();
	// imports


	// module
	exports.push([module.id, ".Swiper {\n  position: relative;\n  width: 100%;\n  height: 4.9rem;\n  overflow: hidden;\n}\n.Swiper .train {\n  height: 100%;\n}\n.Swiper .train .item {\n  display: block;\n  float: left;\n  height: 100%;\n  overflow: hidden;\n}\n.Swiper .train .item:nth-child(1) {\n  background: #118EED;\n}\n.Swiper .train .item:nth-child(2) {\n  background: #2ACB49;\n}\n.Swiper .train .item:nth-child(3) {\n  background: #F6E60C;\n}\n.Swiper .train .item:nth-child(4) {\n  background: #F9A34C;\n}\n.Swiper .train .item img {\n  width: 3rem;\n  margin: auto;\n  margin-top: 1rem;\n  display: block;\n}\n.Swiper .pagi {\n  position: absolute;\n  left: 0;\n  top: 90%;\n  width: 100%;\n}\n.Swiper .pagination {\n  display: table;\n  margin: auto;\n}\n.Swiper .pagination .dot {\n  float: left;\n  width: 0.2rem;\n  height: 0.2rem;\n  margin: 0 0.1rem 0 0.1rem;\n  border-radius: 1000px;\n  background: #999999;\n}\n.Swiper .pagination .dot.active {\n  background: #DD2727;\n}\n", ""]);

	// exports


/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var dataItems = [{
		"id": "1609291750",
		"className": "watch",
		"name": "Issey Miyake/三宅一生 W系列三眼计时中性石英手表",
		"desc": "--",
		"price": 4233
	}, {
		"id": "1609291813",
		"className": "bag",
		"name": "HERMES/爱马仕 Birkin 30 CCQ5 草莓红 EPSOM皮 金扣 X刻",
		"desc": "--",
		price: 139768
	}, {
		"id": "1606291034",
		"className": "fruit",
		"name": "美国恐龙蛋5个/盒（约130g/个）",
		"desc": "水润多汁，甜嫩爽口", "price": 49
	}, {
		"id": "1606291039",
		"className": "fruit",
		"name": "新西兰佳沛阳光金果6个/盒（约130g/个）",
		"desc": "皮薄肉多，口感爽滑。",
		"price": 69
	}, {
		"id": "1606291040",
		"className": "fruit",
		"name": "精选国产蓝莓125g/盒*2",
		"desc": "果肉细腻，风味独特",
		"price": 29
	}, {
		"id": "1606291040",
		"className": "fruit",
		"name": "精选国产蓝莓125g/盒*2",
		"desc": "果肉细腻，风味独特",
		"price": 29
	}];

	exports.dataItems = dataItems;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.ConfirmOrder = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _common = __webpack_require__(4);

	var _CommentBox = __webpack_require__(18);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ConfirmOrder = function (_React$Component) {
		_inherits(ConfirmOrder, _React$Component);

		function ConfirmOrder() {
			_classCallCheck(this, ConfirmOrder);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ConfirmOrder).call(this));

			_this.state = {
				items: JSON.parse(sessionStorage.items),
				veilVisible: false,
				targetDI: {},
				deliveryInformation: []
			};
			//console.log('<ConfirmOrder/> creating',this.props,this.state);
			return _this;
		}

		_createClass(ConfirmOrder, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				this.setState({
					user: this.props.user
				});
				//console.log('<ConfirmOrder/> will mount',this.props,this.state);
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(newProps) {
				this.setState({
					deliveryInformation: newProps.DI
				});
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate() {
				//console.log('<ConfirmOrder/> updated',this.props,this.state);
			}
		}, {
			key: 'getTotal',
			value: function getTotal() {
				var total = 0;
				var items = this.state.items;
				for (var i = 0; i < items.length; i++) {
					total += Number(items[i].price) * Number(items[i].quantity);
				}
				return total.toFixed(2);
			}
		}, {
			key: 'setConsignee',
			value: function setConsignee(e) {
				var targetDI = this.state.targetDI || {};
				targetDI.consignee = e.target.value;
				this.setState({
					targetDI: targetDI
				});
			}
		}, {
			key: 'setPhoneNumber',
			value: function setPhoneNumber(e) {
				var targetDI = this.state.targetDI || {};
				targetDI.phoneNumber = e.target.value;
				this.setState({
					targetDI: targetDI
				});
			}
		}, {
			key: 'setDeliveryAddress',
			value: function setDeliveryAddress(e) {
				var targetDI = this.state.targetDI || {};
				targetDI.deliveryAddress = e.target.value;
				this.setState({
					targetDI: targetDI
				});
			}
		}, {
			key: 'addDI',
			value: function addDI() {
				this.setState({
					veilVisible: true
				});
			}
		}, {
			key: 'editDI',
			value: function editDI(i) {
				this.setState({
					veilVisible: true,
					targetDI: this.props.user.deliveryInformation[i]
				});
			}
		}, {
			key: 'deleteDI',
			value: function deleteDI(i) {
				this.props.act({
					type: 'DELETE_DI',
					date: this.props.user.deliveryInformation[i].date
				});
			}
		}, {
			key: 'savetargetDI',
			value: function savetargetDI() {
				if (!this.state.targetDI.consignee || !this.state.targetDI.phoneNumber || !this.state.targetDI.deliveryAddress) {
					alert('您输入的信息不完整！');
				} else {
					this.props.act({
						type: 'SAVE_NEW_DI',
						consignee: this.state.targetDI.consignee,
						phoneNumber: this.state.targetDI.phoneNumber,
						deliveryAddress: this.state.targetDI.deliveryAddress,
						date: new Date()
					});
					this.hideVeil();
				};
			}
		}, {
			key: 'hideVeil',
			value: function hideVeil() {
				this.setState({
					veilVisible: false,
					targetDI: {}
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var self = this;
				var items = this.state.items;
				var deliveryInformation = this.props.user.deliveryInformation || [];
				console.log('<ConfirmOrder/> rendering', this.props, this.state);
				return React.createElement(
					'div',
					{ className: 'CONFIRM_ORDER ka-slideDown' },
					this.state.veilVisible ? React.createElement(
						'div',
						{ className: 'veil' },
						React.createElement('div', { className: 'bg' }),
						React.createElement(
							'div',
							{ className: 'panel' },
							React.createElement(
								'div',
								{ className: 'close', onClick: this.hideVeil.bind(this) },
								React.createElement('i', { className: 'fa fa-remove' })
							),
							React.createElement('input', {
								type: 'text',
								name: 'consignee',
								placeholder: '收货人姓名',
								value: this.state.targetDI.consignee || '',
								onChange: this.setConsignee.bind(this) }),
							React.createElement('input', {
								type: 'text',
								name: 'phoneNumber',
								placeholder: '请输入11位手机号码',
								value: this.state.targetDI.phoneNumber || '',
								onChange: this.setPhoneNumber.bind(this) }),
							React.createElement('textarea', {
								placeholder: '请输入详细收货地址',
								value: this.state.targetDI.deliveryAddress || '',
								onChange: this.setDeliveryAddress.bind(this) }),
							React.createElement('div', { className: 'date' }),
							React.createElement(
								'button',
								{ className: 'save', onClick: this.savetargetDI.bind(this) },
								'保存收货信息'
							)
						)
					) : '',
					React.createElement(
						'div',
						{ className: 'container' },
						React.createElement(
							'div',
							{ className: 'deliveryInformation' },
							React.createElement(
								'div',
								{ className: 'page-header' },
								React.createElement(
									'p',
									{ className: 'title' },
									'收货信息'
								),
								React.createElement(
									'button',
									{ className: 'add', onClick: this.addDI.bind(this) },
									'添加收货信息'
								)
							),
							React.createElement(
								'div',
								{ className: 'di-content' },
								deliveryInformation.map(function (elem, i) {
									return React.createElement(
										'div',
										{ className: 'di' },
										React.createElement(
											'div',
											{ className: 'content' },
											React.createElement(
												'p',
												null,
												'收货人：',
												React.createElement(
													'span',
													{ className: 'consignee' },
													elem.consignee
												)
											),
											React.createElement(
												'p',
												null,
												'联系电话：',
												React.createElement(
													'span',
													{ className: 'phoneNumber' },
													elem.phoneNumber
												)
											),
											React.createElement(
												'p',
												null,
												'收货地址：',
												React.createElement(
													'span',
													{ className: 'deliveryAddress' },
													elem.deliveryAddress
												)
											),
											React.createElement(
												'div',
												{ className: 'operation' },
												React.createElement(
													'button',
													{ className: 'remove', onClick: self.deleteDI.bind(self, i) },
													'删除'
												),
												React.createElement(
													'button',
													{ className: 'edit', onClick: self.editDI.bind(self, i) },
													'编辑'
												)
											)
										)
									);
								})
							)
						),
						React.createElement(
							'div',
							{ className: 'itemsInfo' },
							React.createElement(
								'div',
								{ className: 'page-header' },
								React.createElement(
									'p',
									{ className: 'title' },
									'确认商品'
								)
							),
							React.createElement(
								'ul',
								{ className: 'items-header' },
								React.createElement(
									'li',
									null,
									'商品信息'
								),
								React.createElement(
									'li',
									null,
									'单价'
								),
								React.createElement(
									'li',
									null,
									'数量'
								),
								React.createElement(
									'li',
									null,
									'小计'
								)
							),
							items.map(function (item) {
								return React.createElement(
									'ul',
									{ className: 'item' },
									React.createElement(
										'li',
										null,
										React.createElement('div', { className: 'thumbnail' }),
										React.createElement(
											'p',
											{ className: 'information' },
											React.createElement(
												'span',
												{ className: 'name' },
												item.name
											),
											React.createElement('span', { className: 'spec' })
										)
									),
									React.createElement(
										'li',
										null,
										React.createElement(
											'p',
											{ className: 'price' },
											'￥',
											item.price
										)
									),
									React.createElement(
										'li',
										null,
										React.createElement(
											'p',
											{ className: 'quantity' },
											item.quantity
										)
									),
									React.createElement(
										'li',
										null,
										React.createElement(
											'p',
											{ className: 'subtotal' },
											item.subtotal
										)
									)
								);
							})
						),
						React.createElement(
							'div',
							{ className: 'summary' },
							React.createElement(
								'div',
								{ className: 'right_' },
								React.createElement(
									'p',
									null,
									'共',
									React.createElement(
										'span',
										{ className: 'totalQuantity' },
										items.length
									),
									'件商品，总价',
									React.createElement(
										'span',
										{ className: 'totalPrice' },
										'￥',
										this.getTotal()
									)
								),
								React.createElement(
									'div',
									{ className: 'submit' },
									'提交订单'
								)
							)
						)
					)
				);
			}
		}]);

		return ConfirmOrder;
	}(React.Component);

	exports.ConfirmOrder = ConfirmOrder;

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Navbar = function (_React$Component) {
		_inherits(Navbar, _React$Component);

		function Navbar() {
			_classCallCheck(this, Navbar);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Navbar).call(this));

			_this.state = {};
			return _this;
		}

		_createClass(Navbar, [{
			key: "render",
			value: function render() {
				return React.createElement(
					"div",
					{ className: "NAVBAR" },
					React.createElement(
						"ul",
						{ className: "nav" },
						React.createElement(
							"a",
							{ href: "#/home", className: this.props.name === 'home' ? 'active' : '' },
							React.createElement(
								"div",
								{ className: "icon" },
								React.createElement("i", { className: "fa fa-home" })
							),
							React.createElement(
								"p",
								null,
								"首页"
							)
						),
						React.createElement(
							"a",
							{ href: "" },
							React.createElement(
								"div",
								{ className: "icon" },
								React.createElement("i", { className: "fa fa-th" })
							),
							React.createElement(
								"p",
								null,
								"分类"
							)
						),
						React.createElement(
							"a",
							{ href: "#/shopping_cart", className: this.props.name === 'shoppingCart' ? 'active' : '' },
							React.createElement(
								"div",
								{ className: "icon" },
								React.createElement("i", { className: "fa fa-shopping-cart" })
							),
							React.createElement(
								"p",
								null,
								"购物车"
							)
						),
						React.createElement(
							"a",
							{ href: "#/member", className: this.props.name === 'mine' ? 'active' : '' },
							React.createElement(
								"div",
								{ className: "icon" },
								React.createElement("i", { className: "fa fa-user" })
							),
							React.createElement(
								"p",
								null,
								"我"
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Signin = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Notice = __webpack_require__(12);

	var _Navbar = __webpack_require__(24);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import 'babel-polyfill';


	var Signin = function (_React$Component) {
		_inherits(Signin, _React$Component);

		function Signin() {
			_classCallCheck(this, Signin);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Signin).call(this));

			_this.state = {
				user: {
					userID: '',
					password: ''
				}
			};
			window.scroll(0, 0);
			console.log('<Signin/> constructing');
			return _this;
		}

		_createClass(Signin, [{
			key: 'setUserID',
			value: function setUserID(e) {
				var user = Object.assign({}, this.state.user);
				user.userID = e.target.value;
				this.setState({
					user: user
				});
			}
		}, {
			key: 'setPassword',
			value: function setPassword(e) {
				var user = Object.assign({}, this.state.user);
				user.password = e.target.value;
				this.setState({
					user: user
				});
			}
		}, {
			key: 'login',
			value: function login() {
				var self = this;
				if (this.state.user.userID === '15911111111' && this.state.user.password === '111111') {
					self.props.act({
						type: 'ALERT',
						text: '登录成功！'
					});
					self.props.act({
						type: 'LOGIN',
						user: self.state.user
					});
				}

				// fetch('/login', {
				// 	method: 'POST',
				// 	headers: {
				// 		// 'Accept': 'application/json',
				// 		'Content-Type': 'application/json'
				// 	},
				// 	body: JSON.stringify( self.state.user )
				// }).then(function(res){
				// 	return res.text();
				// }).then(function(data){
				// 	if( data==='true' ){
				// 		self.props.act({
				// 			type: 'ALERT',
				// 			text: '登录成功！'
				// 		})
				// 		self.props.act({
				// 			type: 'LOGIN',
				// 			user: self.state.user
				// 		})
				// 	}else{
				// 		self.props.act({
				// 			type: 'ALERT',
				// 			text: '您输入的用户名或密码有误！'
				// 		})
				// 	}				
				// })
			}
		}, {
			key: 'loginAsGuest',
			value: function loginAsGuest() {

				this.props.act({
					type: 'LOGIN',
					user: {
						userID: '游客'
					}
				});
				this.props.act({
					type: 'ALERT',
					text: '登录成功！'
				});
			}
		}, {
			key: 'render',
			value: function render() {
				return React.createElement(
					'div',
					{ className: 'SIGN_IN' },
					React.createElement(
						'div',
						{ className: 'header' },
						'登录',
						React.createElement(
							'span',
							{ className: 'a-guest', onClick: this.loginAsGuest.bind(this) },
							'游客登录 >'
						)
					),
					React.createElement('input', { type: 'text', name: 'user_id', placeholder: '手机号/邮箱',
						onChange: this.setUserID.bind(this) }),
					React.createElement('input', { type: 'password', name: 'password', placeholder: '密码', onChange: this.setPassword.bind(this) }),
					React.createElement(
						'a',
						{ className: 'login', onClick: this.login.bind(this) },
						'登录'
					),
					React.createElement(
						'div',
						{ className: 'options' },
						React.createElement(
							'a',
							{ className: 'a-signup', href: '#/signup' },
							'注册账号'
						),
						React.createElement(
							'a',
							{ className: 'a-retrive', href: 'retrive_password.html' },
							'忘记密码'
						)
					),
					React.createElement(_Navbar.Navbar, { name: 'mine' })
				);
			}
		}]);

		return Signin;
	}(React.Component);

	exports.Signin = Signin;

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Signup = function (_React$Component) {
		_inherits(Signup, _React$Component);

		function Signup() {
			_classCallCheck(this, Signup);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Signup).call(this));

			_this.state = {};
			return _this;
		}

		_createClass(Signup, [{
			key: 'getID',
			value: function getID(e) {
				this.setState({ userID: e.target.value });
				console.log(this.state);
			}
		}, {
			key: 'getPwd',
			value: function getPwd(e) {
				this.setState({ password: e.target.value });
			}
		}, {
			key: 'login',
			value: function login() {
				if (this.state.userID === '111' && this.state.password === '111111') {
					this.props.onLogin({
						type: 'LOGIN',
						data: this.state
					});
				} else {
					alert('Invalid username or password.');
				}
			}
		}, {
			key: 'render',
			value: function render() {
				return React.createElement(
					'div',
					{ className: 'SIGNUP' },
					React.createElement('img', { className: 'grass', src: 'img/grass1.png' }),
					React.createElement('div', { className: 'spacer' }),
					React.createElement(
						'div',
						{ className: 'outer-circle' },
						React.createElement('div', { className: 'circle' }),
						React.createElement(
							'div',
							{ className: 'word' },
							'多利农庄'
						)
					),
					React.createElement(
						'p',
						{ className: 'words' },
						'切换到 ',
						React.createElement(
							'a',
							{ href: '' },
							'邮箱注册'
						),
						React.createElement(
							'span',
							null,
							' | '
						),
						'已经有账号了？点此 ',
						React.createElement(
							'a',
							{ href: '#/signin' },
							'登录'
						)
					),
					React.createElement(
						'form',
						null,
						React.createElement('input', { className: 'input1', type: 'text', name: 'phonenumber', placeholder: '请输入手机号码' }),
						React.createElement('br', null),
						React.createElement('input', { className: 'input1', type: 'text', name: 'verif', placeholder: '请输入短信验证码' }),
						React.createElement(
							'a',
							{ href: '', className: 'get-verif' },
							'获取验证码(60)'
						),
						React.createElement('br', null),
						React.createElement('input', { className: 'input1', type: 'password', name: 'password', placeholder: '设置新密码（6-18位数字或字母）' }),
						React.createElement('br', null),
						React.createElement('input', { className: 'input1', type: 'password', name: 'password2', placeholder: '再次输入密码' }),
						React.createElement('br', null),
						React.createElement(
							'div',
							{ className: 'cb' },
							React.createElement('input', { id: 'agree', type: 'checkbox', name: 'agree' }),
							React.createElement(
								'label',
								{ htmlFor: 'agree' },
								React.createElement('img', { className: 'check', src: 'img/checkmark.png' })
							),
							React.createElement(
								'p',
								null,
								'同意多利庄园使用协议'
							)
						)
					),
					React.createElement(
						'a',
						{ className: 'register', href: '' },
						'注 册'
					)
				);
			}
		}]);

		return Signup;
	}(React.Component);

	exports.Signup = Signup;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Member = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _common = __webpack_require__(4);

	var _Navbar = __webpack_require__(24);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Member = function (_React$Component) {
		_inherits(Member, _React$Component);

		function Member() {
			_classCallCheck(this, Member);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Member).call(this));

			console.log('<Member/> constructing');
			return _this;
		}

		_createClass(Member, [{
			key: 'logout',
			value: function logout() {
				this.props.act({
					type: 'LOGOUT'
				});
			}
		}, {
			key: 'render',
			value: function render() {
				window.scroll(0, 0);
				if (!sessionStorage.userID) {
					location.hash = 'signin';
					return React.createElement('div', null);
				} else {
					return React.createElement(
						'div',
						{ className: 'MEMBER' },
						React.createElement(
							'div',
							null,
							React.createElement(
								'div',
								{ className: 'header' },
								React.createElement(
									'div',
									{ className: 'outerRound' },
									React.createElement(
										'div',
										{ className: 'innerRound' },
										React.createElement('img', { src: 'img/avatar.png' })
									)
								),
								React.createElement(
									'p',
									{ className: 'account' },
									this.props.user.userID
								)
							),
							React.createElement(
								'div',
								{ className: 'block' },
								React.createElement(
									'div',
									{ className: 'row' },
									'全部订单',
									React.createElement('i', { className: 'fa fa-angle-right' })
								)
							),
							React.createElement(
								'div',
								{ className: 'block' },
								React.createElement(
									'div',
									{ className: 'row' },
									'修改密码',
									React.createElement('i', { className: 'fa fa-angle-right' })
								),
								React.createElement(
									'div',
									{ className: 'row' },
									'收货地址管理',
									React.createElement('i', { className: 'fa fa-angle-right' })
								)
							),
							React.createElement(
								'a',
								{ className: 'logout', onClick: this.logout.bind(this) },
								'退出登录'
							)
						),
						React.createElement(_Navbar.Navbar, { name: 'mine' })
					);
				}
			}
		}]);

		return Member;
	}(React.Component);

	exports.Member = Member;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Home = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _common = __webpack_require__(4);

	var _Navbar = __webpack_require__(24);

	var _Swiper = __webpack_require__(19);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var swiperItems = ['img/index/slider_0.png', 'img/index/slider_1.png', 'img/index/slider_2.png', 'img/index/slider_3.png'];

	var Home = function (_React$Component) {
		_inherits(Home, _React$Component);

		function Home(props) {
			_classCallCheck(this, Home);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Home).call(this, props));

			var self = _this;
			self.state = {
				items: []
			};
			self.getItems();
			console.log('<Home/> constructing', self.state);
			return _this;
		}

		_createClass(Home, [{
			key: 'getItems',
			value: function getItems() {
				var self = this;
				this.state.items = __webpack_require__(22).dataItems;
				// fetch('/getItems', {
				// 	method: 'POST',
				// 	headers: {
				// 		// 'Accept': 'application/json',
				// 		'Content-Type': 'application/json'
				// 	},
				// 	body: JSON.stringify( self.state.user )
				// }).then(function(res){
				// 	return res.json();
				// }).then(function(data){
				// 	self.setState({
				// 		items: data
				// 	})
				// })
			}
		}, {
			key: 'back',
			value: function back() {
				console.log(111);
				history.go(-1);
			}
		}, {
			key: 'render',
			value: function render() {
				window.scroll(0, 0);
				return React.createElement(
					'div',
					{ className: 'HOME' },
					React.createElement(
						'div',
						{ className: 'searchbar' },
						React.createElement(
							'div',
							{ className: 'search' },
							React.createElement(
								'div',
								{ className: 'icon' },
								React.createElement('i', { className: 'fa fa-search' })
							),
							React.createElement('input', { type: 'text', name: '', placeholder: '请输入产品名称' })
						)
					),
					React.createElement(_Swiper.Swiper, { items: swiperItems,
						style: { height: '4rem' } }),
					React.createElement(
						'div',
						{ className: 'block-2' },
						this.state.items.map(function (a) {
							return React.createElement(
								'a',
								{ className: 'item-2', href: '#/item?id=' + a.id },
								React.createElement('img', { src: 'img/items/' + a.id + '/t.jpg' }),
								React.createElement(
									'div',
									{ className: 'tag' },
									React.createElement(
										'p',
										{ className: 'name' },
										a.name
									),
									React.createElement(
										'p',
										{ className: 'price' },
										'￥',
										a.price.toFixed(2)
									)
								)
							);
						})
					),
					React.createElement(
						'div',
						{ className: 'panel' },
						React.createElement(
							'div',
							{ className: 'panel-header' },
							React.createElement(
								'p',
								{ className: 'class-name' },
								'时令果蔬'
							),
							React.createElement(
								'p',
								{ className: 'more' },
								React.createElement(
									'a',
									{ href: '' },
									'更多'
								)
							)
						),
						React.createElement(
							'ul',
							{ className: 'panel-body' },
							this.state.items.map(function (item, i) {
								var href = '#/item?id=' + item.id;
								var src = 'img/items/' + item.id + '/t.jpg';
								var style = {
									float: i % 2 === 0 ? 'left' : 'right'
								};
								return React.createElement(
									'div',
									{ className: 'item' },
									React.createElement(
										'a',
										{ href: href, style: style },
										React.createElement('img', { className: 'thumbnail', src: src }),
										React.createElement(
											'p',
											{ className: 'name' },
											item.name
										),
										React.createElement(
											'p',
											{ className: 'description' },
											item.desc
										),
										React.createElement(
											'p',
											{ className: 'price' },
											'￥',
											item.price.toFixed(2)
										)
									)
								);
							})
						)
					),
					React.createElement('div', { className: 'nav_shadow' }),
					React.createElement(_Navbar.Navbar, { name: 'home' })
				);
			}
		}]);

		return Home;
	}(React.Component);

	exports.Home = Home;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.ShoppingCart = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Navbar = __webpack_require__(24);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NavbarS = { width: "1000px", height: "60px", background: "red" };

	var ItemStyle = { borderBottom: '1px solid grey' };
	var LiStyle = { float: 'left', width: '20%' };

	var ItemList = function (_React$Component) {
		_inherits(ItemList, _React$Component);

		function ItemList() {
			_classCallCheck(this, ItemList);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(ItemList).apply(this, arguments));
		}

		_createClass(ItemList, [{
			key: "render",
			value: function render() {
				var that = this;
				return React.createElement(
					"div",
					null,
					React.createElement(
						"ul",
						null,
						that.props.items.map(function (x, i) {
							return React.createElement(
								"li",
								{ className: "item", key: x.name },
								React.createElement("input", { className: "check", type: "checkbox", checked: that.props.items[i].checked, onChange: that.props.checkThis.bind(that, i) }),
								React.createElement(
									"div",
									{ className: "thumbnail" },
									React.createElement("img", { src: $$itemDir + x.itemID + '/0.jpg' })
								),
								React.createElement(
									"p",
									{ className: "name" },
									x.name
								),
								React.createElement(
									"p",
									{ className: "spec" },
									x.description
								),
								React.createElement(
									"p",
									{ className: "price" },
									"￥",
									x.price
								),
								React.createElement(
									"div",
									{ className: "counter" },
									React.createElement(
										"div",
										{ className: "minus", onClick: that.props.minusOne.bind(that, i) },
										"-"
									),
									React.createElement(
										"div",
										{ className: "quantity" },
										x.quantity
									),
									React.createElement(
										"div",
										{ className: "plus", onClick: that.props.plusOne.bind(that, i) },
										"+"
									)
								),
								React.createElement(
									"div",
									{ className: "subtotal" },
									"￥",
									x.price * x.quantity
								),
								React.createElement(
									"p",
									{ className: "manipulation" },
									React.createElement(
										"span",
										{ className: "delete", onClick: that.props.remove.bind(that, i) },
										"删除"
									),
									React.createElement("br", null),
									React.createElement(
										"span",
										{ className: "concern" },
										"移到我的关注"
									)
								)
							);
						})
					)
				);
			}
		}]);

		return ItemList;
	}(React.Component);

	// <ShoppingCart items={} />


	var ShoppingCart = function (_React$Component2) {
		_inherits(ShoppingCart, _React$Component2);

		function ShoppingCart(props) {
			_classCallCheck(this, ShoppingCart);

			var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(ShoppingCart).call(this, props));

			_this2.state = {
				items: []
			};
			_this2.getItems();
			return _this2;
		}

		_createClass(ShoppingCart, [{
			key: "getItems",
			value: function getItems() {
				var self = this;

				var items = JSON.parse(sessionStorage.shoppingCart);

				items.forEach(function (a) {
					a.selected = false;
				});

				this.state.items = items;

				// fetch('/getShoppingCart', {
				// 	method: 'POST',
				// 	headers: {
				// 		// 'Accept': 'application/json',
				// 		//'Content-Type': 'application/json'
				// 	}
				// }).then(function(res){
				// 	return res.json();
				// }).then(function(data){
				// 	console.log('<ShoppingCart/> item received',data);
				// 	self.setState({
				// 		items: data
				// 	})	
				// }).catch(function(e,f,g){
				// 	console.log(e,f,g);
				// })
			}
		}, {
			key: "getInitialState",
			value: function getInitialState() {}
		}, {
			key: "componentWillMount",
			value: function componentWillMount() {
				// this.setState({
				// 	items: this.props.user.shoppingCart||[]
				// })
			}
		}, {
			key: "componentDidMount",
			value: function componentDidMount() {
				//console.log('<ShoppingCart/> mount',this.props,this.state)
			}
		}, {
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps(newProps) {
				this.setState({
					items: _typeof(newProps.user.shoppingCart) === 'object' ? newProps.user.shoppingCart : []
				});
			}
		}, {
			key: "componentDidUpdate",
			value: function componentDidUpdate() {}

			// computed

		}, {
			key: "allChecked",
			value: function allChecked() {
				for (var i = 0; i < this.state.items.length; i++) {
					if (!this.state.items[i].selected) {
						return false;
					};
				};
				return true;
			}
		}, {
			key: "getTotalPrice",
			value: function getTotalPrice() {
				var totalPrice = 0;
				for (var i = 0; i < this.state.items.length; i++) {
					if (this.state.items[i].selected === true) {
						totalPrice += this.state.items[i].price * this.state.items[i].quantity;
					};
				}
				return totalPrice;
			}
		}, {
			key: "getTotalQuantity",
			value: function getTotalQuantity() {
				var totalQuantity = 0;
				for (var i = 0; i < this.state.items.length; i++) {
					if (this.state.items[i].selected === true) {
						totalQuantity++;
					};
				}
				return totalQuantity;
			}
			// methods

		}, {
			key: "checkAll",
			value: function checkAll() {
				if (this.allChecked()) {
					for (var i = 0; i < this.state.items.length; i++) {
						this.state.items[i].selected = false;
					};
					// this.state.allChecked = false;
				} else {
						for (var i = 0; i < this.state.items.length; i++) {
							this.state.items[i].selected = true;
						};
						// this.state.allChecked = true;
					};
				this.setState({
					// allChecked: this.state.allChecked,
					items: this.state.items
				});
			}
		}, {
			key: "checkThis",
			value: function checkThis(i) {
				this.state.items[i].selected = this.state.items[i].selected ? false : true;
				// if( this.state.items[i].selected===false ){
				// 	this.state.allChecked = false;
				// }
				this.setState({
					// allChecked: this.state.allChecked,
					items: this.state.items
				});
			}
		}, {
			key: "minusOne",
			value: function minusOne(i) {
				if (this.state.items[i].quantity > 1) {
					this.state.items[i].quantity--;
					this.setState({
						items: this.state.items
					});
				};
			}
		}, {
			key: "plusOne",
			value: function plusOne(i) {
				this.state.items[i].quantity++;
				this.setState({
					items: this.state.items
				});
			}
		}, {
			key: "removeItem",
			value: function removeItem(i) {
				var items = JSON.parse(JSON.stringify(this.state.items));
				var newItems = [];
				items.forEach(function (a) {
					if (!a.selected) {
						newItems.push(a);
					}
				});
				this.setState({
					items: newItems
				});
				sessionStorage.shoppingCart = JSON.stringify(newItems);
				this.props.act({
					type: 'REMOVE_ITEM',
					itemID: this.state.items[i].itemID
				});
			}
		}, {
			key: "render",
			value: function render() {
				var _this3 = this;

				//console.log(React);
				//console.log(Function);
				console.log('<ShoppingCart/> rendering', this.props, this.state);
				return React.createElement(
					"div",
					{ className: "SHOPPING_CART" },
					React.createElement(
						"div",
						{ className: "header" },
						"购物车",
						React.createElement(
							"span",
							{ className: "remove", onClick: this.removeItem.bind(this) },
							"删除"
						)
					),
					this.state.items.map(function (item, i) {
						return React.createElement(
							"div",
							{ className: "item" },
							React.createElement(
								"div",
								{ className: "part part-left" },
								React.createElement(
									"div",
									{ className: item.selected ? 'circle active' : 'circle', onClick: _this3.checkThis.bind(_this3, i) },
									React.createElement("i", { className: "fa fa-check" })
								)
							),
							React.createElement("img", { className: "part thumbnail", src: "img/items/" + item.id + "/t.jpg" }),
							React.createElement(
								"div",
								{ className: "part part-3" },
								React.createElement(
									"p",
									{ className: "name" },
									item.name
								),
								React.createElement(
									"p",
									{ className: "spec" },
									item.spec
								),
								React.createElement(
									"div",
									{ className: "counter" },
									React.createElement(
										"p",
										{ className: "counter1", onClick: _this3.minusOne.bind(_this3, i) },
										"-"
									),
									React.createElement(
										"p",
										{ className: "counter2" },
										item.quantity
									),
									React.createElement(
										"p",
										{ className: "counter3", onClick: _this3.plusOne.bind(_this3, i) },
										"+"
									)
								)
							),
							React.createElement(
								"div",
								{ className: "part part-4" },
								React.createElement(
									"p",
									{ className: "price" },
									"￥",
									item.price.toFixed(2)
								),
								React.createElement(
									"p",
									{ className: "quantity" },
									"x",
									item.quantity
								)
							)
						);
					}),
					React.createElement(
						"div",
						{ className: "footer" },
						React.createElement(
							"div",
							{ className: this.allChecked() ? 'circle active' : 'circle', onClick: this.checkAll.bind(this) },
							React.createElement("i", { className: "fa fa-check" })
						),
						React.createElement(
							"p",
							{ className: "text-all" },
							"全选"
						),
						React.createElement(
							"a",
							{ className: "pay", href: "" },
							"去结算(",
							this.getTotalQuantity(),
							")"
						),
						React.createElement(
							"p",
							{ className: "sum" },
							"总计：",
							React.createElement(
								"span",
								{ className: "money" },
								"￥",
								this.getTotalPrice().toFixed(2)
							)
						)
					),
					React.createElement("div", { className: "navbarShadow" }),
					React.createElement(_Navbar.Navbar, { name: "shoppingCart" })
				);
			}
		}]);

		return ShoppingCart;
	}(React.Component);

	exports.ShoppingCart = ShoppingCart;

/***/ }
/******/ ]);