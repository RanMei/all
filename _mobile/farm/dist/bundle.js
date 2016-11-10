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

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
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

/******/ 			script.src = __webpack_require__.p + "" + chunkId + ".bundle.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _index = __webpack_require__(2);

	var _App = __webpack_require__(11);

	var _Navbar = __webpack_require__(12);

	var _Signin = __webpack_require__(17);

	var _Signup = __webpack_require__(27);

	var _Category = __webpack_require__(30);

	var _ConfirmOrder = __webpack_require__(33);

	var _DIManagement = __webpack_require__(35);

	var _AppContainer = __webpack_require__(38);

	var _HomeContainer = __webpack_require__(44);

	var _ItemContainer = __webpack_require__(51);

	var _MemberContainer = __webpack_require__(55);

	var _SigninContainer = __webpack_require__(59);

	//import { Router,Route,IndexRoute,Link,hashHistory } from 'react-router';
	//import {createStore,combineReducers} from 'redux';
	//import {Provider,connect} from 'react-redux';

	if (!Object.assign) {
		Object.assign = function (dest, src) {
			for (var key in src) {
				dest[key] = src[key];
			}
			return dest;
		};
	};

	var PropTypes = React.PropTypes;

	var Router = ReactRouter.Router;
	var Route = ReactRouter.Route;
	var Link = ReactRouter.Link;
	var hashHistory = ReactRouter.hashHistory;
	var IndexRoute = ReactRouter.IndexRoute;

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

	//import {ShoppingCartContainer} from './containers/ShoppingCartContainer.jsx';

	var Provider = ReactRedux.Provider;
	var connect = ReactRedux.connect;

	// The router.
	ReactDOM.render(React.createElement(
		Provider,
		{ store: _index.$$store },
		React.createElement(
			Router,
			{ history: hashHistory },
			React.createElement(
				Route,
				{ path: '/', component: _AppContainer.AppContainer },
				React.createElement(Route, { path: '/home', component: _HomeContainer.HomeContainer }),
				React.createElement(Route, { path: '/category', component: _Category.Category }),
				React.createElement(Route, { path: '/shopping_cart', getComponent: function getComponent(nextState, cb) {
						__webpack_require__.e/* nsure */(1, function (require) {
							cb(null, __webpack_require__(60).ShoppingCartContainer);
						});
					} }),
				React.createElement(Route, { path: '/member', component: _MemberContainer.MemberContainer }),
				React.createElement(Route, { path: '/di_management', component: _DIManagement.DIManagement }),
				React.createElement(Route, { path: '/signin', component: _SigninContainer.SigninContainer }),
				React.createElement(Route, { path: '/signup', component: _Signup.Signup }),
				React.createElement(Route, { path: '/item', component: _ItemContainer.ItemContainer }),
				React.createElement(IndexRoute, { path: '/home', component: _HomeContainer.HomeContainer })
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
	exports.$$store = undefined;

	var _user = __webpack_require__(3);

	var _shoppingCart = __webpack_require__(4);

	var _notice = __webpack_require__(5);

	var _mask = __webpack_require__(6);

	var _homeSwiper = __webpack_require__(8);

	var _items = __webpack_require__(9);

	var _item = __webpack_require__(10);

	var createStore = Redux.createStore;
	var compose = Redux.compose;
	var combineReducers = Redux.combineReducers;

	var $$reducer = Redux.combineReducers({
		user: _user.user,
		shoppingCart: _shoppingCart.shoppingCart,
		notice: _notice.notice,
		mask: _mask.mask,
		homeSwiper: _homeSwiper.homeSwiper,
		items: _items.items,
		item: _item.item
	});

	// actions
	var LOGIN = { type: 'LOGIN' };
	var INCREMENT = { type: 'INCREMENT' };
	var DECREMENT = { type: 'DECREMENT' };

	// store
	var $$store = createStore($$reducer /*,enhancer*/);
	console.debug('Redux: store created.', $$store.getState());

	exports.$$store = $$store;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function user() {
		var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		var action = arguments[1];


		switch (action.type) {
			case 'INIT':
				return action.user;
			case 'LOGIN':
				return action.user;
			case 'LOGOUT':
				return {};
			default:
				return state;
		}
	}

	exports.user = user;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function shoppingCart() {
		var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
		var action = arguments[1];


		var newState = [].concat(_toConsumableArray(state));

		switch (action.type) {
			case 'INIT':
				return action.shoppingCart;
			case 'LOGIN':
				return action.shoppingCart;
			case 'PLUS':
				newState[action.i].quantity++;
				return newState;
			case 'MINUS':
				newState[action.i].quantity--;
				return newState;
			case 'CHECK_THIS':
				return state.map(function (a, i) {
					if (i === action.i) {
						var new_item = {};
						for (var key in a) {
							new_item[key] = a[key];
							new_item.selected = a.selected ? false : true;
						}
						return new_item;
					} else {
						return a;
					}
				});
			case 'CHECK_ALL':
				newState.forEach(function (a) {
					a.selected = true;
				});
				return newState;
			case 'UNCHECK_ALL':
				newState.forEach(function (a) {
					a.selected = false;
				});
				return newState;
			case 'REMOVE':
				var _newState = [];
				newState.forEach(function (a) {
					if (!a.selected) {
						_newState.push(a);
					};
				});
				return _newState;
			case 'ADD_TO_CART':
				return [].concat(_toConsumableArray(state), [action.item]);
			case 'LOGOUT':
				return [];
			default:
				return state;
		}
	}

	exports.shoppingCart = shoppingCart;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.mask = undefined;

	var _common = __webpack_require__(7);

	function mask() {
		var state = arguments.length <= 0 || arguments[0] === undefined ? {
			text: ''
		} : arguments[0];
		var action = arguments[1];

		switch (action.type) {
			case 'CONFIRM':
				var newState = {
					text: action.text
				};
				return newState;
			case 'CLOSE_MASK':
				return {
					text: ''
				};
			default:
				return state;
		}
	}

	exports.mask = mask;

/***/ },
/* 7 */
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
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function homeSwiper() {
		var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
		var action = arguments[1];


		switch (action.type) {
			case 'INIT':
				return action.homeSwiper;
			default:
				return state;
		}
	}

	exports.homeSwiper = homeSwiper;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function items() {
		var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
		var action = arguments[1];


		switch (action.type) {
			case 'INIT':
				return action.items;
			default:
				return state;
		}
	}

	exports.items = items;

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function item() {
		var state = arguments.length <= 0 || arguments[0] === undefined ? {
			id: '',
			name: '--',
			specs: {},
			price: 0
		} : arguments[0];
		var action = arguments[1];

		switch (action.type) {
			case 'SET_ITEM':
				var new_state = JSON.parse(JSON.stringify(state));
				for (var key in action.item) {
					new_state[key] = action.item[key];
				}
				return new_state;
			default:
				return state;
		}
	}

	exports.item = item;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.BackToTop = exports.Footer = exports.SearchBox = exports.List = exports.Topbar = exports.SearchBar = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _common = __webpack_require__(7);

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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(13);

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
							{ href: "#/category", className: this.props.name === 'category' ? 'active' : '' },
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(16)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./Navbar.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./Navbar.less");
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

	exports = module.exports = __webpack_require__(15)();
	// imports


	// module
	exports.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n* :focus {\n  outline: none;\n}\nhtml {\n  font-size: 100px;\n  font-family: 'Microsoft Yahei';\n}\nul {\n  list-style: none;\n}\nimg {\n  display: block;\n}\na:link {\n  color: ;\n  text-decoration: none;\n}\n.c-topbar {\n  box-sizing: border-box;\n  position: relative;\n  width: 100%;\n  height: 1rem;\n  padding: 0 0.2rem;\n  background: white;\n  border-bottom: 1px solid #dfdfdf;\n  overflow: hidden;\n  font-size: 0.3rem;\n  line-height: 1rem;\n  box-shadow: inset 0 1px 0 #fff, 0 1px 10px rgba(0, 0, 0, 0.15);\n}\n.c-topbar .c-icon {\n  float: left;\n  margin-right: 0.2rem;\n}\n.c-topbar .c-icon i {\n  font-size: 0.5rem;\n  line-height: 1rem;\n}\n.c-topbar .c-text {\n  float: left;\n  font-size: 0.3rem;\n  line-height: 1rem;\n}\n.container {\n  background: orange;\n  overflow: hidden;\n  display: none;\n}\n.clearfix {\n  clear: both;\n}\nbody {\n  background: #ECEBEB;\n}\n/* Media Queries */\n@media (-webkit-min-device-pixel-ratio: 2) {\n}\n.wrapper {\n  width: 7.2rem;\n}\n.shown {\n  display: block!important;\n}\n.NAVBAR {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 1rem;\n  border-top: 1px solid #dfdfdf;\n  background: white;\n  overflow: hidden;\n}\n.NAVBAR .nav a {\n  position: relative;\n  width: 25%;\n  height: 1rem;\n  float: left;\n  color: black;\n  display: block;\n  color: #999999;\n}\n.NAVBAR .nav a .icon {\n  width: 100%;\n  font-size: 0.4rem;\n  line-height: 0.6rem;\n  text-align: center;\n}\n.NAVBAR .nav a p {\n  line-height: 0.4rem;\n  font-size: 0.2rem;\n  text-align: center;\n}\n.NAVBAR .nav a .line {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 1px;\n  height: 100%;\n  background: lightgrey;\n}\n.NAVBAR .nav a:link {\n  color: #999999;\n}\n.NAVBAR .nav a:visited {\n  color: #999999;\n}\n.NAVBAR .nav a.active {\n  color: #0f88eb !important;\n}\n", ""]);

	// exports


/***/ },
/* 15 */
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
/* 16 */
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Signin = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Notice = __webpack_require__(18);

	var _Navbar = __webpack_require__(12);

	var _API = __webpack_require__(21);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(25);

	// import 'babel-polyfill';

	var Signin = function (_React$Component) {
		_inherits(Signin, _React$Component);

		function Signin() {
			_classCallCheck(this, Signin);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Signin).call(this));

			_this.state = {
				user: {
					id: '',
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
				var newUser = JSON.parse(JSON.stringify(this.state.user));
				//Object.assign( {},this.state.user );
				newUser.id = e.target.value;
				this.setState({
					user: newUser
				});
			}
		}, {
			key: 'setPassword',
			value: function setPassword(e) {
				var new_user = JSON.parse(JSON.stringify(this.state.user));
				new_user.password = e.target.value;
				this.setState({
					user: new_user
				});
			}
		}, {
			key: 'login',
			value: function login() {
				var self = this;
				_API.API.LOGIN(self.state.user);
			}
		}, {
			key: 'loginAsGuest',
			value: function loginAsGuest() {
				_API.API.LOGIN_AS_GUEST();
			}
		}, {
			key: 'render',
			value: function render() {
				return React.createElement(
					'div',
					{ className: 'SIGN_IN' },
					React.createElement(
						'div',
						{ className: 'header c-topbar' },
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(19);

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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(16)(content, {});
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(15)();
	// imports


	// module
	exports.push([module.id, ".NOTICE {\n  position: fixed;\n  left: 2.1rem;\n  top: 40%;\n  margin: auto;\n  box-sizing: border-box;\n  width: 3rem;\n  padding: 0.3rem;\n  line-height: 0.4rem;\n  border-radius: 0.1rem;\n  background: rgba(0, 0, 0, 0.8);\n  color: white;\n  text-align: center;\n  font-size: 0.24rem;\n  z-index: 1000;\n}\n", ""]);

	// exports


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.API = undefined;

	var _index = __webpack_require__(2);

	var _user = __webpack_require__(22);

	var _cart = __webpack_require__(23);

	var API = {};

	(0, _user.user)(API, _index.$$store);
	(0, _cart.cart)(API, _index.$$store);

	API.INIT_HOME = function () {
		var user = {};
		var shoppingCart = [];
		if (sessionStorage.user) {
			user = JSON.parse(sessionStorage.user);
		};
		if (sessionStorage.shoppingCart) {
			shoppingCart = JSON.parse(sessionStorage.shoppingCart);
		};
		var items = __webpack_require__(24).dataItems;
		var homeSwiper = [{
			background: 'img/index/banner_0.jpg',
			href: '#/shopping_cart'
		}, {
			background: 'img/index/banner_1.jpg'
		}, {
			background: 'img/index/banner_2.jpg'
		}, {
			background: 'img/index/banner_3.jpg'
		}];
		// console.log(sessionStorage)
		_index.$$store.dispatch({
			type: 'INIT',
			user: user,
			shoppingCart: shoppingCart,
			items: items,
			homeSwiper: homeSwiper
		});
	};

	API.ADD_TO_CART = function (item) {
		if (sessionStorage.shoppingCart) {
			var shoppingCart = JSON.parse(sessionStorage.shoppingCart);
			shoppingCart.push(item);
			sessionStorage.shoppingCart = JSON.stringify(shoppingCart);
		} else {
			sessionStorage.shoppingCart = '[]';
		}
		_index.$$store.dispatch({
			type: 'ADD_TO_CART',
			item: item
		});
		_index.$$store.dispatch({
			type: 'ALERT',
			text: '成功加入购物车'
		});
	};

	API.GET_ITEM = function (id) {
		var item = {};
		var items = __webpack_require__(24).dataItems;
		items.forEach(function (a) {
			if (id === a.id) {
				item = a;
				item.quantity = 1;
			}
		});
		_index.$$store.dispatch({
			type: 'SET_ITEM',
			item: item
		});
	};

	API.ALERT = function (text) {
		_index.$$store.dispatch({
			type: 'ALERT',
			text: text
		});
	};

	API.CONFIRM = function (text) {
		_index.$$store.dispatch({
			type: 'CONFIRM',
			text: text
		});
	};

	exports.API = API;

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.user = user;
	function user(API, $$store) {
		API.LOGIN = function (user) {
			if (user.id === '15911111111' && user.password === '111111') {
				sessionStorage.user = '{"id":"15911111111"}';
				sessionStorage.shoppingCart = '[]';
				$$store.dispatch({
					type: 'LOGIN',
					user: {
						id: '15911111111'
					},
					shoppingCart: []
				});
				location.hash = 'member';
				$$store.dispatch({
					type: 'ALERT',
					text: '登录成功！'
				});
			} else {
				$$store.dispatch({
					type: 'ALERT',
					text: '您输入的用户名或密码有误！'
				});
			}
		};

		API.LOGIN_AS_GUEST = function () {
			sessionStorage.user = '{"id":"guest"}';
			sessionStorage.shoppingCart = '[]';
			$$store.dispatch({
				type: 'LOGIN',
				user: {
					id: 'guest'
				},
				shoppingCart: []
			});
			location.hash = 'member';
			$$store.dispatch({
				type: 'ALERT',
				text: '登录成功！'
			});
		};

		API.LOGOUT = function () {
			delete sessionStorage.user;
			setTimeout(function () {
				$$store.dispatch({
					type: 'LOGOUT'
				});
				$$store.dispatch({
					type: 'ALERT',
					text: '注销成功！'
				});
				location.hash = 'signin';
			}, 10);
		};
	}

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.cart = cart;
	function cart(API, store) {
		API.CHECK_ALL = function () {
			store.dispatch({
				type: 'CHECK_ALL'
			});
		};

		API.UNCHECK_ALL = function () {
			store.dispatch({
				type: 'UNCHECK_ALL'
			});
		};

		API.CHECK_THIS = function (i) {
			store.dispatch({
				type: 'CHECK_THIS',
				i: i
			});
		};
	}

/***/ },
/* 24 */
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
		"id": "1609301428",
		"className": "clothes",
		"name": "By Creations Lite/By Creations Lite 桑蚕丝真丝领带 男士斜条纹时尚窄领带",
		"desc": "--",
		"price": 320
	}, {
		"id": "1609301441",
		"className": "jewelry",
		"name": "GZUAN/古钻珠宝 初见 2.5克拉紫晶女戒指彩宝首饰古钻品牌商品订单满2000赠送精美品",
		"desc": "--",
		"price": 599
	}, {
		"id": "1609301449",
		"className": "shoes",
		"name": "AJ ARMANI JEANS/阿玛尼牛仔酒红色牛皮材质镂空元素男士休闲鞋,B6562 NG LACED ",
		"desc": "--",
		"specs": {
			"尺码": ["41", "42", "43", "44"]
		},
		"price": 1805
	}, {
		"id": "1609301450",
		"className": "clothes",
		"name": "ARMANI JEANS/阿玛尼牛仔 男士经典时尚圆领套头T恤",
		"desc": "--",
		"specs": {
			"尺码": ["M", "L", "XL"],
			"颜色": ["黑色", "白色", "红色"]
		},
		"price": 789
	}];

	exports.dataItems = dataItems;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(16)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./Signin.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./Signin.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(15)();
	// imports


	// module
	exports.push([module.id, ".SIGN_IN {\n  background: #ECEBEB;\n}\n.SIGN_IN .header {\n  margin-bottom: .20rem;\n}\n.SIGN_IN .header .a-guest {\n  float: right;\n  font-size: 0.24rem;\n  color: #999999;\n}\n.SIGN_IN input {\n  display: block;\n  width: 6.6rem;\n  height: 0.8rem;\n  margin: auto;\n  margin-bottom: 0.15rem;\n  border-radius: 0.03rem;\n  border: 1px solid #dfdfdf;\n  font-size: 0.32rem;\n  text-indent: 0.20rem;\n}\n.SIGN_IN input:focus {\n  border: 1px solid #999999;\n}\n.SIGN_IN .login {\n  width: 6.60rem;\n  height: 0.80rem;\n  border-radius: 0.10rem;\n  background: #0f88eb;\n  text-align: center;\n  line-height: 0.80rem;\n  color: white;\n  font-size: 0.32rem;\n  margin: 0 auto 0.3rem auto;\n  display: block;\n}\n.SIGN_IN .options {\n  padding: 0 0.3rem;\n  font-size: 0.24rem;\n  color: #999999;\n}\n.SIGN_IN .options .a-signup {\n  float: left;\n}\n.SIGN_IN .options .a-retrive {\n  float: right;\n}\n.SIGN_IN .options a:link {\n  color: #999999;\n}\n.SIGN_IN .options a:visited {\n  color: #999999;\n}\n", ""]);

	// exports


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(28);

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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(29);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(16)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./Signup.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./Signup.less");
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

	exports = module.exports = __webpack_require__(15)();
	// imports


	// module
	exports.push([module.id, ".SIGNUP {\n  height: 15rem;\n  background: lightgrey;\n}\n.SIGNUP .grass {\n  width: 100%;\n}\n.SIGNUP .spacer {\n  position: relative;\n  width: 100%;\n  height: 3.62rem;\n  background: lightgrey;\n}\n.SIGNUP .outer-circle {\n  position: absolute;\n  left: 1.625rem;\n  top: 0.8rem;\n  width: 3.95rem;\n  height: 3.95rem;\n  background: lightgrey;\n  border-radius: 1.975rem;\n}\n.SIGNUP .circle {\n  position: absolute;\n  left: 0.645rem;\n  top: 0.4rem;\n  width: 2.66rem;\n  height: 2.66rem;\n  background: #5EA626;\n  border-radius: 1.33rem;\n}\n.SIGNUP .word {\n  position: absolute;\n  top: 3.2rem;\n  width: 3.95rem;\n  text-align: center;\n  font-size: 0.48rem;\n}\n.SIGNUP .words {\n  font-size: 0.32rem;\n  margin: 0 0 0.2rem 0.3rem;\n}\n.SIGNUP .words a {\n  color: #FF6600;\n  text-decoration: none;\n}\n.SIGNUP .words span {\n  color: grey;\n  margin: 0 0.1rem 0 0.1rem;\n}\n.SIGNUP form {\n  position: relative;\n}\n.SIGNUP .input1 {\n  width: 7.2rem;\n  height: 1.15rem;\n  font-size: 0.32rem;\n  border: none;\n  text-indent: 0.3rem;\n  font-family: ΢���ź�;\n  margin-bottom: 0.02rem;\n}\n.SIGNUP .get-verif {\n  position: absolute;\n  top: 2.05rem;\n  right: 0.3rem;\n  width: 2.3rem;\n  height: 0.8rem;\n  border-radius: 0.1rem;\n  background: #5EA626;\n  text-align: center;\n  line-height: 0.8rem;\n  color: white;\n  font-size: 0.32rem;\n}\n.SIGNUP .cb {\n  position: relative;\n  width: 5rem;\n  height: 0.34rem;\n  margin: 0.2rem 0 0.2rem 2rem;\n}\n.SIGNUP label {\n  display: block;\n  width: 0.34rem;\n  height: 0.34rem;\n  background-size: 100%;\n  float: left;\n  margin-right: 0.1rem;\n}\n.SIGNUP label img {\n  position: relative;\n  width: 80%;\n  left: 0.03rem;\n  top: 0.03rem;\n  display: none;\n}\n.SIGNUP #agree {\n  position: absolute;\n  left: 0.05rem;\n  top: 0.05rem;\n  z-index: -1;\n}\n.SIGNUP #agree:checked + label img {\n  display: block;\n}\n.SIGNUP .cb p {\n  height: 0.34rem;\n  line-height: 0.34rem;\n  font-size: 0.32rem;\n  float: left;\n  color: #663399;\n}\n.SIGNUP .register:link {\n  width: 6.8rem;\n  height: 0.8rem;\n  border-radius: 0.1rem;\n  background: #5EA626;\n  text-align: center;\n  line-height: 0.8rem;\n  color: white;\n  font-size: 0.32rem;\n  margin: 0 0.2rem 2rem 0.2rem;\n  display: block;\n}\n.SIGNUP .register:visited {\n  color: white;\n}\n", ""]);

	// exports


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Category = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Navbar = __webpack_require__(12);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(31);

	var Category = function (_React$Component) {
		_inherits(Category, _React$Component);

		function Category(props) {
			_classCallCheck(this, Category);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Category).call(this, props));

			var self = _this;
			self.state = {
				items: []
			};
			self.getItems();
			console.log('<Home/> constructing', self.state);
			return _this;
		}

		_createClass(Category, [{
			key: 'getItems',
			value: function getItems() {
				var self = this;
				this.state.items = __webpack_require__(24).dataItems;
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
					{ className: 'CATEGORY' },
					React.createElement(_Navbar.Navbar, { name: 'category' })
				);
			}
		}]);

		return Category;
	}(React.Component);

	exports.Category = Category;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(32);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(16)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./Category.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./Category.less");
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

	exports = module.exports = __webpack_require__(15)();
	// imports


	// module
	exports.push([module.id, ".HOME {\n  background: #ECEBEB;\n}\n.HOME .searchbar {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 0.8rem;\n  background: rgba(255, 255, 255, 0.6);\n  overflow: hidden;\n  z-index: 10;\n}\n.HOME .searchbar .search {\n  position: relative;\n  width: 6.20rem;\n  height: .60rem;\n  border-radius: .30rem;\n  background: white;\n  margin: auto;\n  margin-top: 0.1rem;\n}\n.HOME .searchbar .search .icon {\n  float: left;\n  width: 1rem;\n  text-align: center;\n  color: #999999;\n  font-size: 0.3rem;\n  line-height: 0.6rem;\n}\n.HOME .searchbar .search img {\n  width: 0.35rem;\n  margin: .10rem .40rem 0 .20rem;\n  float: left;\n}\n.HOME .searchbar .search input {\n  font-family: 'Microsoft Yahei';\n  display: block;\n  -webkit-appearance: none;\n  font-size: 0.26rem;\n  line-height: 0.6rem;\n  border: none;\n}\n.HOME .slider {\n  position: relative;\n  width: 7.20rem;\n  height: 4.90rem;\n  margin-bottom: .20rem;\n  overflow: hidden;\n}\n.HOME .slider-imgs {\n  width: 36rem;\n  overflow: hidden;\n}\n.HOME .slider li {\n  float: left;\n  width: 7.2rem;\n}\n.HOME .slider img {\n  width: 100%;\n}\n.HOME .slider-tabs {\n  position: absolute;\n  width: 1.29rem;\n  height: .22rem;\n  border-radius: .11rem;\n  background: white;\n  padding: 0 .10rem 0 .10rem;\n  left: 2.8rem;\n  top: 4.50rem;\n}\n.HOME .slider-tabs li {\n  width: .12rem;\n  height: .12rem;\n  border-radius: .06rem;\n  background: grey;\n  float: left;\n  margin: .05rem .10rem .05rem .10rem;\n}\n.HOME .slider-tabs .selected {\n  background: #66CC66;\n}\n.HOME .block-2 {\n  overflow: hidden;\n}\n.HOME .block-2 .item-2 {\n  display: block;\n  float: left;\n  box-sizing: border-box;\n  width: 50%;\n  border-bottom: 1px solid #dfdfdf;\n}\n.HOME .block-2 .item-2:nth-child(odd) {\n  border-right: 1px solid #dfdfdf;\n}\n.HOME .block-2 .item-2:nth-child(even) {\n  border-right: 1px solid white;\n}\n.HOME .block-2 .item-2 img {\n  width: 100%;\n}\n.HOME .block-2 .item-2 .tag {\n  padding: 0.2rem;\n  background: white;\n}\n.HOME .block-2 .item-2 .tag .name {\n  height: 0.72rem;\n  font-size: 0.24rem;\n  line-height: 0.36rem;\n  overflow: hidden;\n  color: #999999;\n}\n.HOME .block-2 .item-2 .tag .price {\n  font-size: 0.24rem;\n  color: #0f88eb;\n}\n.HOME .panel {\n  position: relative;\n  background: white;\n  margin: 0 0 .20rem 0;\n  overflow: hidden;\n}\n.HOME .panel .panel-header {\n  position: relative;\n  width: 100%;\n  padding: 0.1rem 0 0.15rem 0;\n  overflow: hidden;\n}\n.HOME .panel .panel-header .class-name {\n  position: relative;\n  font-size: .32rem;\n  margin: 0 0 0 .40rem;\n  float: left;\n  color: #66CC66;\n}\n.HOME .panel .panel-header .more a:link {\n  font-size: .32rem;\n  margin: 0 .40rem 0 0;\n  float: right;\n  color: #66CC66;\n}\n.HOME .panel .panel-header .more a:visited {\n  color: #FF9900;\n}\n.HOME .panel .panel-body {\n  position: relative;\n  padding: 0 .40rem 0.1rem 0.4rem;\n  overflow: hidden;\n}\n.HOME .panel .panel-body .item {\n  float: left;\n  width: 50%;\n  height: 4.4rem;\n  overflow: hidden;\n}\n.HOME .panel .panel-body .item a {\n  width: 2.60rem;\n  float: left;\n}\n.HOME .panel .panel-body .item a .name {\n  height: 0.6rem;\n  font-size: 0.2rem;\n  line-height: 0.3rem;\n  color: black;\n  overflow: hidden;\n}\n.HOME .panel .panel-body .item a .thumbnail {\n  width: 2.60rem;\n  height: 2.60rem;\n  display: block;\n}\n.HOME .panel .panel-body .item a p {\n  width: 2.40rem;\n  margin: .05rem 0 .05rem 0;\n  font-size: .2rem;\n}\n.HOME .panel .panel-body .item a .description {\n  color: grey;\n}\n.HOME .panel .panel-body .item a .price {\n  color: #0f88eb;\n}\n.HOME .nav_shadow {\n  height: 0.8rem;\n}\n", ""]);

	// exports


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.ConfirmOrder = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _common = __webpack_require__(7);

	var _CommentBox = __webpack_require__(34);

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
/* 34 */
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(36);

	var DIManagement = function (_React$Component) {
		_inherits(DIManagement, _React$Component);

		function DIManagement() {
			_classCallCheck(this, DIManagement);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DIManagement).call(this));

			_this.state = {};
			//console.log('<ConfirmOrder/> creating',this.props,this.state);
			return _this;
		}

		_createClass(DIManagement, [{
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
			key: 'back',
			value: function back() {
				history.go(-1);
			}
		}, {
			key: 'render',
			value: function render() {
				var self = this;
				console.log('<DIManagement/> rendering');
				return React.createElement(
					'div',
					{ className: 'DIMANAGEMENT' },
					React.createElement(
						'div',
						{ className: 'c-topbar topbar' },
						React.createElement(
							'div',
							{ className: 'c-icon' },
							React.createElement('i', { className: 'fa fa-angle-left', onClick: this.back.bind(this) })
						),
						React.createElement(
							'div',
							{ className: 'c-text' },
							'收货地址管理'
						)
					),
					React.createElement(
						'div',
						{ className: 'add' },
						'新增收货地址'
					)
				);
			}
		}]);

		return DIManagement;
	}(React.Component);

	exports.DIManagement = DIManagement;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(37);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(16)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./DIManagement.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./DIManagement.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(15)();
	// imports


	// module
	exports.push([module.id, ".DIMANAGEMENT .add {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 0.9rem;\n  background: #0f88eb;\n  color: white;\n  text-align: center;\n  font-size: 0.3rem;\n  line-height: 0.9rem;\n}\n", ""]);

	// exports


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.AppContainer = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _index = __webpack_require__(2);

	var _config = __webpack_require__(39);

	var _Mask = __webpack_require__(40);

	var _Notice = __webpack_require__(18);

	var _NoticePretty = __webpack_require__(43);

	var _API = __webpack_require__(21);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function act(action) {
		switch (action.type) {
			default:
				_index.$$store.dispatch(action);
		}
	}

	var App = function (_React$Component) {
		_inherits(App, _React$Component);

		function App() {
			_classCallCheck(this, App);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this));

			console.debug('<App/> constructing');
			return _this;
		}

		_createClass(App, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				_API.API.INIT_HOME();
			}
		}, {
			key: 'render',
			value: function render() {
				console.debug('<App/> rendering.');
				return React.createElement(
					'div',
					null,
					React.createElement(_Mask.Mask, { mask: this.props.mask, act: act }),
					React.createElement(_Notice.Notice, { notice: this.props.notice }),
					this.props.children
				);
			}
		}]);

		return App;
	}(React.Component);

	var AppContainer = ReactRedux.connect(function (state) {
		return {
			mask: state.mask,
			notice: state.notice
		};
	})(App);

	exports.AppContainer = AppContainer;

/***/ },
/* 39 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	console.log(location);

	var $$production = false;

	exports.$$production = $$production;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(41);

	var Mask = function (_React$Component) {
		_inherits(Mask, _React$Component);

		function Mask(props) {
			_classCallCheck(this, Mask);

			return _possibleConstructorReturn(this, Object.getPrototypeOf(Mask).call(this, props));
		}

		_createClass(Mask, [{
			key: 'componentDidMount',
			value: function componentDidMount() {}
		}, {
			key: 'cancel',
			value: function cancel() {
				this.props.act({
					type: 'CLOSE_MASK'
				});
			}
		}, {
			key: 'confirm',
			value: function confirm() {
				this.props.act({
					type: 'REMOVE'
				});
				this.props.act({
					type: 'CLOSE_MASK'
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var self = this;
				return React.createElement(
					'div',
					{ className: 'MASK', style: { display: this.props.mask.text !== '' ? 'table' : 'none' } },
					React.createElement(
						'div',
						{ className: '__container' },
						React.createElement(
							'div',
							{ className: '_panel' },
							React.createElement(
								'div',
								{ className: '_header' },
								'确认删除'
							),
							React.createElement(
								'p',
								{ className: '_text' },
								this.props.mask.text
							),
							React.createElement(
								'div',
								{ className: 'btn cancel', onClick: this.cancel.bind(this) },
								'取消'
							),
							React.createElement(
								'div',
								{ className: 'btn confirm', onClick: this.confirm.bind(this) },
								'确认'
							)
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(42);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(16)(content, {});
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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(15)();
	// imports


	// module
	exports.push([module.id, ".MASK {\n  display: table;\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 9999;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.8);\n}\n.MASK .__container {\n  display: table-cell;\n  vertical-align: middle;\n}\n.MASK .__container ._panel {\n  position: relative;\n  margin: auto;\n  width: 5.4rem;\n  padding: 0 0.3rem 0.2rem 0.3rem;\n  border-radius: 0.05rem;\n  background: white;\n  overflow: hidden;\n}\n.MASK .__container ._panel ._header {\n  box-sizing: border-box;\n  padding: 0.2rem 0;\n  border-bottom: 1px solid #dfdfdf;\n  font-size: 0.26rem;\n  text-align: center;\n}\n.MASK .__container ._panel ._text {\n  padding: 0.2rem 0;\n  font-size: 0.3rem;\n}\n.MASK .__container ._panel .btn {\n  box-sizing: border-box;\n  width: 2.6rem;\n  height: 1rem;\n  line-height: 1rem;\n  border-radius: 0.05rem;\n  font-size: 0.3rem;\n  text-align: center;\n}\n.MASK .__container ._panel .cancel {\n  float: left;\n  border: 1px solid #0f88eb;\n  color: #0f88eb;\n}\n.MASK .__container ._panel .confirm {\n  float: right;\n  background: #0f88eb;\n  color: white;\n}\n", ""]);

	// exports


/***/ },
/* 43 */
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
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.HomeContainer = undefined;

	var _index = __webpack_require__(2);

	var _Home = __webpack_require__(45);

	var HomeContainer = ReactRedux.connect(function (state) {
		return {
			homeSwiper: state.homeSwiper,
			items: state.items
		};
	})(_Home.Home);

	exports.HomeContainer = HomeContainer;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Home = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _common = __webpack_require__(7);

	var _Navbar = __webpack_require__(12);

	var _Swiper = __webpack_require__(46);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(49);

	var Home = function (_React$Component) {
		_inherits(Home, _React$Component);

		function Home(props) {
			_classCallCheck(this, Home);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Home).call(this, props));

			var self = _this;
			console.log('<Home/> constructing');
			return _this;
		}

		_createClass(Home, [{
			key: 'componentWillMount',
			value: function componentWillMount() {}
		}, {
			key: 'back',
			value: function back() {
				//console.log(111)
				history.go(-1);
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;

				//console.log(this.props)
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
					React.createElement(_Swiper.Swiper, {
						sticky: true,
						items: this.props.homeSwiper,
						style: { height: '4rem' } }),
					[0, 1, 2].map(function () {
						return React.createElement(
							'div',
							{ className: 'block' },
							_this2.props.items.map(function (a) {
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
						);
					}),
					React.createElement(
						'div',
						{ className: 'block' },
						React.createElement(
							'div',
							{ className: 'block-header' },
							React.createElement('i', { className: 'fa fa-heart-o' }),
							' 猜你喜欢'
						),
						this.props.items.map(function (item, i) {
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
									{ href: href },
									React.createElement('img', { className: 'thumbnail', src: src }),
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
								)
							);
						})
					),
					React.createElement('div', { className: 'nav_shadow' }),
					React.createElement(_Navbar.Navbar, { name: 'home' })
				);
			}
		}]);

		return Home;
	}(React.Component);

	Home.propTypes = {
		homeSwiper: React.PropTypes.array.isRequired,
		items: React.PropTypes.number.isRequired
	};
	Home.defaultProps = {
		homeSwiper: [],
		items: []
	};

	exports.Home = Home;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(47);

	var Swiper = function (_React$Component) {
		_inherits(Swiper, _React$Component);

		function Swiper(props) {
			_classCallCheck(this, Swiper);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Swiper).call(this, props));

			var self = _this;

			_this.$trainOffset = 0;
			_this.$currentOne = _this.props.items.length;

			_this.X0 = null;
			_this.X1 = null;
			_this.Y0 = null;
			_this.Y1 = null;

			_this.cycle = false;
			_this.switching = false;
			//console.log(this.props)

			_this.state = {
				items: _this.getNewItems(_this.props.items),
				trainStyle: {
					marginLeft: '-' + _this.props.items.length + '00%'
				},
				itemStyle: {},
				currentDot: 0
			};
			return _this;
		}

		_createClass(Swiper, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _this2 = this;

				//console.log(this.props)
				var self = this;
				//self.setWidth();
				window.addEventListener('resize', function () {
					//self.setWidth();
				});
				if (this.props.autoplay === true) {
					setInterval(function () {
						if (_this2.cycle === false && _this2.switching === false) {
							_this2.cycle = true;
							_this2.toNext();
						};
					}, self.props.interval);
				};
				this.$currentOne = this.props.items.length;
				//console.log(this.$currentOne)
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(newProps) {
				this.$trainOffset = 0;
				this.$currentOne = newProps.items.length;
				this.setState({
					items: this.getNewItems(newProps.items),
					trainStyle: {
						marginLeft: '-' + newProps.items.length + '00%'
					}
				});
			}
		}, {
			key: 'getNewItems',
			value: function getNewItems(items) {
				var items1 = JSON.parse(JSON.stringify(items));
				var items2 = JSON.parse(JSON.stringify(items));
				var newItems = items1.concat(items2);
				newItems.forEach(function (a, i) {
					a._id = i;
				});
				return newItems;
			}
		}, {
			key: 'getCurrentDot',
			value: function getCurrentDot(self) {
				if (self.$currentOne > self.props.items.length - 1) {
					return self.$currentOne - self.props.items.length;
				} else {
					return self.$currentOne;
				}
			}
		}, {
			key: 'setWidth',
			value: function setWidth() {
				var self = this;
				var _Swiper = React.findDOMNode(self.refs.Swiper);
				self.$width = Number(document.defaultView.getComputedStyle(_Swiper).width.replace(/px/, ''));
			}
		}, {
			key: 'toNext',
			value: function toNext() {
				var _this3 = this;

				var self = this;
				if (this.switching === false) {
					this.switching = true;
					if (self.$currentOne < self.state.items.length - 1) {
						self.$currentOne++;
					} else {
						self.$currentOne = 0;
					};
					//console.log(self.$currentOne)
					this.setState({
						trainStyle: {
							marginLeft: '-' + this.props.items.length + '00%',
							transition: this.props.duration / 1000 + 's',
							transform: 'translate3d(-5%,0,0)',
							webkitTransform: 'translate3d(-5%,0,0)'
						},
						currentDot: self.getCurrentDot(self)
					});
					setTimeout(function () {
						var newItems = JSON.parse(JSON.stringify(_this3.state.items));
						var a = newItems.splice(0, 1)[0];
						newItems.push(a);
						//console.log(newItems)
						_this3.setState({
							items: newItems,
							trainStyle: {
								marginLeft: '-' + _this3.props.items.length + '00%',
								transition: '0s',
								transform: 'translate3d(0,0,0)',
								webkitTransform: 'translate3d(0,0,0)'
							}
						});
						_this3.switching = false;
						_this3.cycle = false;
					}, self.props.duration);
				};
			}
		}, {
			key: 'toPrev',
			value: function toPrev() {
				var _this4 = this;

				var self = this;
				if (this.switching === false) {
					this.switching = true;
					if (self.$currentOne > 0) {
						self.$currentOne--;
					} else {
						self.$currentOne = self.state.items.length - 1;
					};
					this.setState({
						trainStyle: {
							marginLeft: '-' + this.props.items.length + '00%',
							transition: this.props.duration / 1000 + 's',
							transform: 'translate3d(5%,0,0)',
							webkitTransform: 'translate3d(5%,0,0)'
						},
						currentDot: self.getCurrentDot(self)
					});
					setTimeout(function () {
						var newItems = JSON.parse(JSON.stringify(_this4.state.items));
						var a = newItems.splice(newItems.length - 1, 1)[0];
						newItems.unshift(a);
						//console.log(newItems)
						_this4.setState({
							items: newItems,
							trainStyle: {
								marginLeft: '-' + _this4.props.items.length + '00%',
								transition: '0s',
								transform: 'translate3d(0,0,0)',
								webkitTransform: 'translate3d(0,0,0)'
							}
						});
						_this4.switching = false;
						_this4.cycle = false;
					}, self.props.duration);
				};
			}
		}, {
			key: 'handleTouchStart',
			value: function handleTouchStart(e) {
				if (this.cycle === false && this.switching === false) {
					this.cycle = true;
					this.X0 = this.X1 = e.changedTouches[0].pageX;
				}
			}
		}, {
			key: 'handleTouchMove',
			value: function handleTouchMove(e) {
				if (this.cycle === true && this.switching === false) {
					if (this.props.sticky === true) {
						this.X2 = e.changedTouches[0].pageX;
						var distance = this.X2 - this.X1;
						this.$trainOffset += distance;
						this.X1 = this.X2;
						var trainStyle = {
							marginLeft: '-' + this.props.items.length + '00%',
							transition: '0s',
							transform: 'translate3d(' + this.$trainOffset + 'px,0,0)',
							webkitTransform: 'translate3d(' + this.$trainOffset + 'px,0,0)'
						};
						this.setState({
							trainStyle: trainStyle
						});
					};
				};
			}
		}, {
			key: 'handleTouchEnd',
			value: function handleTouchEnd(e) {
				if (this.cycle === true && this.switching === false) {
					this.X2 = e.changedTouches[0].pageX;
					var distance = this.X2 - this.X0;
					//console.log(distance);
					this.$trainOffset = 0;
					if (distance > 0) {
						this.toPrev();
					} else if (distance < 0) {
						this.toNext();
					} else {}
				};
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
						this.state.items.map(function (a, i) {
							return React.createElement(
								'a',
								{ className: 'item', href: a.href || '#/', key: i, style: {
										backgroundImage: a.background ? 'url(' + a.background + ')' : ''
									} },
								a.img ? React.createElement('img', { src: a.img }) : null
							);
						})
					),
					React.createElement(
						'div',
						{ className: 'pagi' },
						React.createElement(
							'ul',
							{ className: 'pagination', ref: 'pagination' },
							this.props.pagi ? this.props.items.map(function (elem, i) {
								return React.createElement('li', { className: i === self.state.currentDot ? 'dot active' : 'dot' });
							}) : null
						)
					)
				);
			}
		}]);

		return Swiper;
	}(React.Component);

	Swiper.defaultProps = {
		items: [],
		duration: 500,
		interval: 3000,
		sticky: true,
		autoplay: true,
		pagi: true
	};

	exports.Swiper = Swiper;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(48);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(16)(content, {});
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(15)();
	// imports


	// module
	exports.push([module.id, ".Swiper {\n  position: relative;\n  width: 100%;\n  height: 4.9rem;\n  overflow: hidden;\n}\n.Swiper .train {\n  width: 2000%;\n  height: 100%;\n}\n.Swiper .train .item {\n  display: block;\n  float: left;\n  width: 5%;\n  height: 100%;\n  background: white;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: auto 100%;\n  overflow: hidden;\n}\n.Swiper .train .item img {\n  height: 100%;\n  margin: auto;\n  display: block;\n}\n.Swiper .pagi {\n  position: absolute;\n  left: 0;\n  top: 90%;\n  width: 100%;\n}\n.Swiper .pagination {\n  display: table;\n  margin: auto;\n}\n.Swiper .pagination .dot {\n  float: left;\n  width: 0.2rem;\n  height: 0.2rem;\n  margin: 0 0.1rem 0 0.1rem;\n  border-radius: 1000px;\n  background: #999999;\n}\n.Swiper .pagination .dot.active {\n  background: #0f88eb;\n}\n", ""]);

	// exports


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(50);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(16)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./Home.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./Home.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(15)();
	// imports


	// module
	exports.push([module.id, ".HOME {\n  background: #ECEBEB;\n}\n.HOME .searchbar {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 0.8rem;\n  background: rgba(255, 255, 255, 0.6);\n  overflow: hidden;\n  z-index: 10;\n}\n.HOME .searchbar .search {\n  position: relative;\n  width: 6.20rem;\n  height: .60rem;\n  border-radius: .30rem;\n  background: white;\n  margin: auto;\n  margin-top: 0.1rem;\n}\n.HOME .searchbar .search .icon {\n  float: left;\n  width: 1rem;\n  text-align: center;\n  color: #999999;\n  font-size: 0.3rem;\n  line-height: 0.6rem;\n}\n.HOME .searchbar .search img {\n  width: 0.35rem;\n  margin: .10rem .40rem 0 .20rem;\n  float: left;\n}\n.HOME .searchbar .search input {\n  font-family: 'Microsoft Yahei';\n  display: block;\n  -webkit-appearance: none;\n  font-size: 0.26rem;\n  line-height: 0.6rem;\n  border: none;\n}\n.HOME .slider {\n  position: relative;\n  width: 7.20rem;\n  height: 4.90rem;\n  margin-bottom: .20rem;\n  overflow: hidden;\n}\n.HOME .slider-imgs {\n  width: 36rem;\n  overflow: hidden;\n}\n.HOME .slider li {\n  float: left;\n  width: 7.2rem;\n}\n.HOME .slider img {\n  width: 100%;\n}\n.HOME .slider-tabs {\n  position: absolute;\n  width: 1.29rem;\n  height: .22rem;\n  border-radius: .11rem;\n  background: white;\n  padding: 0 .10rem 0 .10rem;\n  left: 2.8rem;\n  top: 4.50rem;\n}\n.HOME .slider-tabs li {\n  width: .12rem;\n  height: .12rem;\n  border-radius: .06rem;\n  background: grey;\n  float: left;\n  margin: .05rem .10rem .05rem .10rem;\n}\n.HOME .slider-tabs .selected {\n  background: #66CC66;\n}\n.HOME .block {\n  overflow: hidden;\n}\n.HOME .block .block-header {\n  padding: 0.15rem 0;\n  font-size: 0.24rem;\n  color: #0f88eb;\n  background: white;\n  border-bottom: 1px solid #dfdfdf;\n  text-align: center;\n}\n.HOME .block .item-2 {\n  display: block;\n  float: left;\n  box-sizing: border-box;\n  width: 50%;\n  padding: 0.2rem;\n  background: white;\n  border-bottom: 1px solid #dfdfdf;\n}\n.HOME .block .item-2:nth-child(odd) {\n  border-right: 1px solid #dfdfdf;\n}\n.HOME .block .item-2:nth-child(even) {\n  border-right: 1px solid white;\n}\n.HOME .block .item-2 img {\n  width: 100%;\n  margin: auto;\n}\n.HOME .block .item-2 .tag {\n  background: white;\n}\n.HOME .block .item-2 .tag .name {\n  height: 0.72rem;\n  font-size: 0.24rem;\n  line-height: 0.36rem;\n  overflow: hidden;\n  color: #3A3A3A;\n}\n.HOME .block .item-2 .tag .price {\n  font-size: 0.22rem;\n  color: #0f88eb;\n}\n.HOME .block .item {\n  float: left;\n  width: 50%;\n  padding-bottom: 0.15rem;\n  background: white;\n  overflow: hidden;\n}\n.HOME .block .item a {\n  display: block;\n  width: 80%;\n  margin: auto;\n}\n.HOME .block .item a .name {\n  height: 0.6rem;\n  font-size: 0.2rem;\n  line-height: 0.3rem;\n  color: black;\n  overflow: hidden;\n}\n.HOME .block .item a .thumbnail {\n  width: 100%;\n  display: block;\n}\n.HOME .block .item a p {\n  width: 100%;\n  font-size: .2rem;\n}\n.HOME .block .item a .description {\n  color: grey;\n}\n.HOME .block .item a .price {\n  color: #0f88eb;\n}\n.HOME .nav_shadow {\n  height: 1rem;\n}\n", ""]);

	// exports


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.ItemContainer = undefined;

	var _index = __webpack_require__(2);

	var _Item = __webpack_require__(52);

	var ItemContainer = ReactRedux.connect(function (state) {
		return {
			inCart: state.shoppingCart.length,
			item: state.item
		};
	})(_Item.Item);

	exports.ItemContainer = ItemContainer;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Item = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _common = __webpack_require__(7);

	var _CommentBox = __webpack_require__(34);

	var _Swiper = __webpack_require__(46);

	var _API = __webpack_require__(21);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(53);

	var Item = function (_React$Component) {
		_inherits(Item, _React$Component);

		function Item() {
			_classCallCheck(this, Item);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Item).call(this));

			_this.state = {
				quantity: 1,
				tabPanel: 0,
				options: {},
				thumbnail: 0
			};
			window.scroll(0, 0);
			console.log('<Item/> constructing', _this.props, _this.state);
			return _this;
		}

		_createClass(Item, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				var self = this;
				var id = location.hash.match(/\?id=(\w+)/)[1];
				_API.API.GET_ITEM(id);
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(new_props) {
				var new_options = JSON.parse(JSON.stringify(this.state.options));
				if (new_props.item.specs) {
					for (var key in new_props.item.specs) {
						new_options[key] = '';
					}
				};
				this.setState({
					options: new_options
				});
			}
		}, {
			key: 'thumbnails',
			value: function thumbnails() {
				var id = this.props.item.id;
				return [{
					img: 'img/items/' + id + '/t.jpg'
				}, {
					img: 'img/items/' + id + '/t.jpg'
				}, {
					img: 'img/items/' + id + '/t.jpg'
				}, {
					img: 'img/items/' + id + '/t.jpg'
				}];
			}
		}, {
			key: 'increase',
			value: function increase() {
				var val = this.state.quantity + 1;
				this.setState({
					quantity: val
				});
			}
		}, {
			key: 'decrease',
			value: function decrease() {
				if (this.state.quantity > 1) {
					this.setState({
						quantity: this.state.quantity - 1
					});
				};
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
			key: 'ADD_TO_CART',
			value: function ADD_TO_CART() {
				for (var key in this.state.options) {
					if (this.state.options[key] === '') {
						_API.API.ALERT('请选择' + key + '!');
						return;
					}
				}
				var newItem = JSON.parse(JSON.stringify(this.props.item));
				newItem.selected = false;
				newItem.spec = this.getSpec(this.state.options);
				// Perform an action.
				_API.API.ADD_TO_CART(newItem);
			}
		}, {
			key: 'getSpec',
			value: function getSpec(options) {
				var spec = '';
				for (var key in options) {
					spec += key + ':' + options[key] + ';';
				}
				return spec;
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
				history.go(-1);
			}
		}, {
			key: 'toCart',
			value: function toCart() {
				location.hash = 'shopping_cart';
			}
		}, {
			key: 'checkOption',
			value: function checkOption(key, value) {
				var newOptions = JSON.parse(JSON.stringify(this.state.options));
				newOptions[key] = value;
				this.setState({
					options: newOptions
				});
			}
		}, {
			key: 'render',
			value: function render() {
				console.debug('<Item/> rendering');
				var self = this;
				var item = this.props.item;
				return React.createElement(
					'div',
					{ className: 'ITEM' },
					React.createElement(
						'div',
						{ className: 'topbar c-topbar' },
						React.createElement(
							'div',
							{ className: 'c-icon' },
							React.createElement('i', { className: 'fa fa-angle-left', onClick: this.back.bind(this) })
						),
						React.createElement(
							'div',
							{ className: 'c-text' },
							'商品详情'
						)
					),
					React.createElement('div', { className: 'topbar-shadow' }),
					React.createElement(_Swiper.Swiper, {
						sticky: false,
						autoplay: false,
						items: this.thumbnails() }),
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
					item.specs ? function () {
						var arr = [];
						for (var key in item.specs) {
							arr.push(React.createElement(
								'ul',
								{ className: 'spec' },
								React.createElement(
									'li',
									{ className: '_key' },
									key
								),
								item.specs[key].map(function (a) {
									return React.createElement(
										'li',
										{ className: a === self.state.options[key] ? '_option active' : '_option',
											onClick: self.checkOption.bind(self, key, a) },
										a
									);
								})
							));
						}
						return arr;
					}() : null,
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
								this.state.quantity
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
						React.createElement('img', { src: './img/items/1609291750/d0.jpg' || './img/grey.svg' })
					),
					React.createElement('div', { className: 'item_nav_shadow' }),
					React.createElement(
						'div',
						{ className: 'item_nav' },
						React.createElement(
							'div',
							{ className: 'part-left' },
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
								'div',
								{ className: 'favor', onClick: this.toCart.bind(this) },
								React.createElement('div', { className: 'redDot', style: { display: this.props.inCart === 0 ? 'none' : 'block' } }),
								React.createElement(
									'p',
									{ className: 'icon-star' },
									React.createElement('i', { className: 'fa fa-shopping-cart' })
								),
								React.createElement(
									'p',
									{ className: 'text-favor' },
									'购物车'
								)
							)
						),
						React.createElement(
							'a',
							{ className: 'to_cart', onClick: this.ADD_TO_CART.bind(this) },
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

	Item.defaultProps = {
		item: {
			id: '',
			name: '',
			specs: [],
			price: 0
		},
		inCart: 0
	};

	exports.Item = Item;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(54);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(16)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./Item.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./Item.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(15)();
	// imports


	// module
	exports.push([module.id, ".ITEM {\n  width: 100%;\n  height: 15rem;\n  background: #ECEBEB;\n}\n.ITEM .topbar {\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 10;\n}\n.ITEM .topbar-shadow {\n  height: 1rem;\n}\n.ITEM .info {\n  padding: 0.1rem 0.15rem;\n  border-bottom: 1px solid #dfdfdf;\n  background: white;\n}\n.ITEM .info .name {\n  width: 5.6rem;\n  font-size: 0.26rem;\n  line-height: 0.4rem;\n  font-weight: normal;\n}\n.ITEM .info .price {\n  font-size: 0.4rem;\n  color: #0f88eb;\n}\n.ITEM .spec {\n  padding: 0.15rem;\n  font-size: 0.28rem;\n  line-height: 0.5rem;\n  background: white;\n  border-bottom: 1px solid #dfdfdf;\n  overflow: hidden;\n}\n.ITEM .spec li {\n  float: left;\n}\n.ITEM .spec li._key {\n  width: 2rem;\n}\n.ITEM .spec li._option {\n  box-sizing: border-box;\n  height: 0.5rem;\n  padding: 0 0.2rem;\n  margin-right: 0.2rem;\n  font-size: 0.28rem;\n  color: #3A3A3A;\n  background: #ECEBEB;\n}\n.ITEM .spec li._option.active {\n  background: #0f88eb;\n  color: white;\n}\n.ITEM .block-quantity {\n  padding: 0.2rem 0.15rem;\n  border-bottom: 1px solid #dfdfdf;\n  margin-bottom: 0.2rem;\n  font-size: 0.28rem;\n  background: white;\n  overflow: hidden;\n}\n.ITEM .block-quantity p {\n  float: left;\n  line-height: 0.5rem;\n}\n.ITEM .block-quantity .counter {\n  float: right;\n}\n.ITEM .block-quantity .counter .minus {\n  float: left;\n  box-sizing: border-box;\n  width: 0.50rem;\n  height: 0.50rem;\n  border: 1px solid #dfdfdf;\n  background: white;\n  font-size: .32rem;\n  line-height: .50rem;\n  text-align: center;\n  cursor: pointer;\n}\n.ITEM .block-quantity .counter .quantity {\n  box-sizing: border-box;\n  float: left;\n  width: 1rem;\n  height: .50rem;\n  border-top: 1px solid #dfdfdf;\n  border-bottom: 1px solid #dfdfdf;\n  font-size: 0.28rem;\n  line-height: .50rem;\n  text-align: center;\n}\n.ITEM .block-quantity .counter .plus {\n  box-sizing: border-box;\n  float: left;\n  width: 0.50rem;\n  height: 0.50rem;\n  border: 1px solid #dfdfdf;\n  font-size: 0.28rem;\n  line-height: 0.50rem;\n  text-align: center;\n  cursor: pointer;\n}\n.ITEM .details img {\n  width: 100%;\n}\n.ITEM .desc {\n  position: relative;\n  width: 100%;\n  height: 2.20rem;\n  background: white;\n  border-top: 1px solid grey;\n  margin: .05rem 0 .20rem 0;\n}\n.ITEM .desc .upper {\n  position: relative;\n  width: 6.60rem;\n  height: 1.00rem;\n  border-bottom: 1px solid grey;\n  margin: 0 0 0 .30rem;\n}\n.ITEM .desc .upper .price {\n  position: absolute;\n  left: .05rem;\n  top: .30rem;\n  color: #FF9900;\n  font-size: .4rem;\n}\n.ITEM .desc .lower {\n  position: relative;\n  width: 6.60rem;\n  height: 1rem;\n  margin-left: .30rem;\n}\n.ITEM .desc .lower p {\n  font-size: .2rem;\n  margin: .10rem 0 .10rem 0;\n}\n.ITEM .desc .lower p:last-child {\n  color: grey;\n}\n.ITEM .item_spec {\n  position: relative;\n  width: 7.20rem;\n  height: 1.80rem;\n  background: white;\n  margin-bottom: .20rem;\n}\n.ITEM .item_spec p {\n  width: 6.60rem;\n  margin-left: .30rem;\n  padding: .20rem 0 .10rem 0;\n  font-size: .2rem;\n  border-bottom: 1px solid grey;\n  color: grey;\n}\n.ITEM .spec1 {\n  margin: .35rem 0 0 .60rem;\n  float: left;\n}\n.ITEM .spec2 {\n  margin: .35rem 0 0 1.20rem;\n}\n.ITEM .details {\n  position: relative;\n  width: 7.20rem;\n  background: white;\n}\n.ITEM .details ul {\n  position: relative;\n  width: 6.63rem;\n  height: .25rem;\n  margin-left: .30rem;\n  padding: .15rem 0 .15rem 0;\n}\n.ITEM .details ul li {\n  width: 2.18rem;\n  height: .25rem;\n  float: left;\n  font-size: .2rem;\n  color: grey;\n  line-height: .20rem;\n  text-align: center;\n  border-right: 1px solid grey;\n  cursor: pointer;\n}\n.ITEM .details ul li:last-child {\n  border: none;\n}\n.ITEM .details ul li.selected {\n  color: #66CC66!important;\n}\n.ITEM .line {\n  position: relative;\n  width: 6.60rem;\n  height: .01rem;\n  background: grey;\n  margin: 0 0 .20rem .30rem;\n}\n.ITEM .square {\n  position: relative;\n  width: 6.90rem;\n  margin: 0 0 0 .15rem;\n}\n.ITEM .square img {\n  width: 100%;\n}\n.ITEM .item_nav_shadow {\n  width: 7.20rem;\n  height: .80rem;\n  background: white;\n}\n.ITEM .item_nav {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 0.80rem;\n  background: white;\n}\n.ITEM .item_nav .part-left {\n  float: left;\n  width: 33.333333%;\n  height: 0.8rem;\n}\n.ITEM .item_nav .favor {\n  position: relative;\n  float: left;\n  box-sizing: border-box;\n  width: 50%;\n  height: 0.8rem;\n  border-right: 1px solid #dfdfdf;\n  font-size: 0.3rem;\n  line-height: 0.3rem;\n  text-align: center;\n}\n.ITEM .item_nav .favor .redDot {\n  position: absolute;\n  right: 0.3rem;\n  top: 0.05rem;\n  width: 0.18rem;\n  height: 0.18rem;\n  border-radius: 1000px;\n  background: #0f88eb;\n}\n.ITEM .item_nav .favor .icon-star {\n  position: relative;\n  padding: 0.1rem 0;\n}\n.ITEM .item_nav .favor .text-favor {\n  font-size: 0.2rem;\n  text-align: center;\n}\n.ITEM .item_nav .to_cart {\n  float: left;\n  display: block;\n  width: 33.333333%;\n  height: 0.80rem;\n  background: orange;\n  color: white;\n  line-height: 0.80rem;\n  text-align: center;\n  font-size: 0.28rem;\n}\n.ITEM .item_nav .to-buy {\n  float: left;\n  display: block;\n  width: 33.333333%;\n  height: 0.8rem;\n  background: #0f88eb;\n  color: white;\n  line-height: 0.8rem;\n  text-align: center;\n  font-size: 0.28rem;\n}\n.ITEM .home:link {\n  float: left;\n  width: 0.42rem;\n  display: block;\n  margin: 0.1rem 1.3rem 0 1.14rem;\n  color: black;\n}\n.ITEM .home:visited {\n  color: black;\n}\n.ITEM .home img {\n  width: 0.4rem;\n  display: block;\n  margin: auto;\n}\n.ITEM .home p {\n  font-size: 0.19rem;\n  text-align: center;\n}\n", ""]);

	// exports


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.MemberContainer = undefined;

	var _index = __webpack_require__(2);

	var _Member = __webpack_require__(56);

	function act(action) {}

	var MemberContainer = ReactRedux.connect(function (state) {
		return {
			user: state.user,
			act: act
		};
	})(_Member.Member);

	exports.MemberContainer = MemberContainer;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Member = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _common = __webpack_require__(7);

	var _Navbar = __webpack_require__(12);

	var _API = __webpack_require__(21);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(57);

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
				_API.API.LOGOUT();
			}
		}, {
			key: 'toDIManagement',
			value: function toDIManagement() {
				location.hash = 'di_management';
			}
		}, {
			key: 'render',
			value: function render() {
				window.scroll(0, 0);
				if (!sessionStorage.user) {
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
									this.props.user.id
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
									{ className: 'row', onClick: this.toDIManagement.bind(this) },
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
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(58);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(16)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./Member.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./Member.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(15)();
	// imports


	// module
	exports.push([module.id, ".MEMBER {\n  width: 100%;\n  background: #ECEBEB;\n}\n.MEMBER .header {\n  position: relative;\n  height: 3.60rem;\n  background: #0f88eb;\n  overflow: hidden;\n}\n.MEMBER .outerRound {\n  position: relative;\n  width: 1.80rem;\n  height: 1.80rem;\n  border-radius: 10rem;\n  margin: auto;\n  margin-top: 0.60rem;\n  background: #EE9393;\n}\n.MEMBER .innerRound {\n  position: absolute;\n  left: 0.20rem;\n  top: 0.20rem;\n  width: 1.40rem;\n  height: 1.40rem;\n  border-radius: 10rem;\n  background: white;\n  opacity: 1;\n  overflow: hidden;\n}\n.MEMBER .innerRound img {\n  width: 100%;\n  height: 100%;\n}\n.MEMBER .account {\n  position: relative;\n  height: 0.30rem;\n  margin: auto;\n  margin-top: 0.20rem;\n  color: white;\n  font-size: 0.3rem;\n  text-align: center;\n}\n.MEMBER .block {\n  margin-bottom: 0.2rem;\n  background: white;\n}\n.MEMBER .block .row {\n  box-sizing: border-box;\n  padding: 0.2rem;\n  border-bottom: 1px solid #dfdfdf;\n  font-size: 0.26rem;\n}\n.MEMBER .block .row i {\n  float: right;\n  font-size: 0.4rem;\n}\n.MEMBER .box1 {\n  position: relative;\n  background: white;\n  overflow: hidden;\n  margin-bottom: 0.20rem;\n}\n.MEMBER .box a:link {\n  position: relative;\n  width: 6.40rem;\n  height: 0.60rem;\n  border-bottom: 0.01rem solid grey;\n  margin-left: 0.30rem;\n  display: block;\n  color: black;\n}\n.MEMBER .box a:visited {\n  color: black;\n}\n.MEMBER .box .icon {\n  width: 0.2rem;\n  float: left;\n  margin: 0.2rem 0.2rem 0 0.2rem;\n}\n.MEMBER .box a p {\n  float: left;\n  margin-top: 0.15rem;\n  font-size: 0.2rem;\n}\n.MEMBER .box .arrow {\n  float: right;\n  width: 0.19rem;\n  margin: 0.1rem 0.2rem 0 0;\n}\n.MEMBER .box .tip {\n  position: absolute;\n  left: 4rem;\n  bottom: 0.18rem;\n  font-size: 0.2rem;\n  color: #FFB340;\n}\n.MEMBER .box2 {\n  position: relative;\n  height: 2.43rem;\n  background: white;\n  overflow: hidden;\n  margin-bottom: 0.20rem;\n}\n.MEMBER .logout {\n  width: 6.80rem;\n  height: 0.80rem;\n  border-radius: 0.10rem;\n  background: #0f88eb;\n  text-align: center;\n  line-height: 0.80rem;\n  color: white;\n  font-size: 0.32rem;\n  margin: 0.20rem 0px 0px 0.20rem;\n  display: block;\n}\n", ""]);

	// exports


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.SigninContainer = undefined;

	var _index = __webpack_require__(2);

	var _Signin = __webpack_require__(17);

	function act(action) {}

	var SigninContainer = ReactRedux.connect(function (state) {
		return {
			act: act
		};
	})(_Signin.Signin);

	exports.SigninContainer = SigninContainer;

/***/ }
/******/ ]);