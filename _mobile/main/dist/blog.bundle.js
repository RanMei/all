webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _reducer = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(3);
	__webpack_require__(7);

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
					this.props.children
				);
			}
		}]);

		return App;
	}(React.Component);

	var Index = function (_React$Component2) {
		_inherits(Index, _React$Component2);

		function Index() {
			_classCallCheck(this, Index);

			var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Index).call(this));

			$$store.dispatch({
				type: 'GET_LIST'
			});
			console.log($$store.getState());
			return _this2;
		}

		_createClass(Index, [{
			key: 'componentDidMount',
			value: function componentDidMount() {}
		}, {
			key: 'toPost',
			value: function toPost(a) {

				location.hash = 'post?time=' + a.time;
			}
		}, {
			key: 'render',
			value: function render() {
				var _this3 = this;

				return React.createElement(
					'div',
					{ className: 'INDEX' },
					React.createElement(
						'div',
						null,
						'index'
					),
					this.props.list.map(function (a) {
						return React.createElement(
							'a',
							{ className: 'block', onClick: _this3.toPost.bind(_this3, a) },
							a.title
						);
					})
				);
			}
		}]);

		return Index;
	}(React.Component);

	var Post = function (_React$Component3) {
		_inherits(Post, _React$Component3);

		function Post() {
			_classCallCheck(this, Post);

			var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(Post).call(this));

			$$store.dispatch({
				type: 'GET_POST',
				time: location.hash.match(/time=[\d|-]+/)[0].replace(/time=/, '')
			});
			console.log($$store.getState());
			return _this4;
		}

		_createClass(Post, [{
			key: 'render',
			value: function render() {
				return React.createElement(
					'div',
					{ className: 'POST' },
					React.createElement(
						'div',
						{ className: 'post-title' },
						this.props.post.title
					),
					React.createElement('div', { className: 'post-body' })
				);
			}
		}]);

		return Post;
	}(React.Component);

	Post.defaultProps = {
		post: {}
	};

	var AppConnected = connect(function (state) {
		return {};
	})(App);
	var IndexConnected = connect(function (state) {
		return {
			list: state.list
		};
	})(Index);
	var PostConnected = connect(function (state) {
		return {
			post: state.post
		};
	})(Post);

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
				React.createElement(Route, { path: '/home', component: IndexConnected }),
				React.createElement(Route, { path: '/post', component: PostConnected }),
				React.createElement(IndexRoute, { path: '/home', component: IndexConnected })
			)
		)
	), document.getElementById('app'));

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var list1 = [{
		time: '2016-10-3',
		title: 'What is Functional Programming'
	}, {
		time: '2016-10-4',
		title: 'night'
	}];

	var post1 = {
		title: 'one post',
		body: ['huh?', 'what the hell?']
	};

	function list() {
		var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
		var action = arguments[1];

		switch (action.type) {
			case 'GET_LIST':
				return list1;
			default:
				return state;
		}
	}

	function post() {
		var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		var action = arguments[1];

		switch (action.type) {
			case 'GET_POST':
				var newState;
				list1.forEach(function (a) {
					if (a.time === action.time) {
						newState = a;
					}
				});
				return newState;
			default:
				return state;
		}
	}

	var $$reducer = Redux.combineReducers({ post: post, list: list });

	exports.$$reducer = $$reducer;

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
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
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./../../../node_modules/postcss-loader/index.js!./blog.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./../../../node_modules/postcss-loader/index.js!./blog.less");
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
	exports.push([module.id, ".block {\n  display: block;\n  width: 100%;\n  padding: 10px 15px;\n  border-bottom: 1px solid #dddddd;\n  font-size: 14px;\n}\n.POST .post-title {\n  width: 100%;\n  padding: 10px 15px;\n  font-size: 20px;\n}\n.POST .post-body {\n  width: 100%;\n  padding: 0 15px;\n  font-size: 14px;\n}\n", ""]);

	// exports


/***/ }
]);