webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reducer = __webpack_require__(11);

	var _Navbar = __webpack_require__(16);

	var _Home = __webpack_require__(19);

	var _Animations = __webpack_require__(20);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(3);
	__webpack_require__(21);

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
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.$$reducer = undefined;

	var _user = __webpack_require__(12);

	var _shoppingCart = __webpack_require__(14);

	var _notice = __webpack_require__(15);

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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.user = undefined;

	var _common = __webpack_require__(13);

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
/* 13 */
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.shoppingCart = undefined;

	var _common = __webpack_require__(13);

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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.notice = undefined;

	var _common = __webpack_require__(13);

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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(17);

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
					"MadSoap",
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
						),
						React.createElement(
							"div",
							{ className: "tab" },
							React.createElement(
								"a",
								{ href: "./_mobile/main/blog.html" },
								"Blog"
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(18);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".NAVBAR {\n  box-sizing: border-box;\n  position: relative;\n  height: 44px;\n  line-height: 44px;\n  text-align: center;\n  font-size: 24px;\n  color: #333;\n  border-bottom: 1px solid #dddddd;\n}\n.NAVBAR .navicon {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 44px;\n  height: 44px;\n  font-size: 20px;\n  line-height: 44px;\n  text-align: center;\n}\n.NAVBAR .box {\n  position: absolute;\n  left: 0;\n  top: 100%;\n  width: 100%;\n  border-top: 1px solid #dddddd;\n  border-bottom: 1px solid #dddddd;\n  background: white;\n  font-size: 15px;\n  text-align: left;\n  display: none;\n  box-shadow: inset 0 1px 0 #fff, 0 8px 10px rgba(0, 0, 0, 0.15);\n}\n.NAVBAR .box .tab {\n  padding: 8px 15px;\n  line-height: normal;\n}\n", ""]);

	// exports


/***/ },
/* 19 */
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
/* 20 */
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
					hrefs: ['./_mobile/h5/star_wars/index.html', './_mobile/h5/olympics/index.html', './_mobile/h5/olympics/result.html', './_mobile/h5/carnival/index.html', './_mobile/h5/school/index.html', './_mobile/h5/feast/feast.html', './_mobile/h5/live/live.html', './_mobile/h5/project/index.html']
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(22);
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".ANIMATIONS {\n  width: 100%;\n  padding-top: 15px;\n}\n@-webkit-keyframes fuck {\n  100% {\n    background: red;\n  }\n}\n@keyframes fuck {\n  100% {\n    background: red;\n  }\n}\n", ""]);

	// exports


/***/ }
]);