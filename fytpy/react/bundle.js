(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.BackToTop = exports.Footer = exports.SearchBox = exports.List = exports.Topbar = exports.SearchBar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _common = require("../common.jsx");

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
			console.log('<Topbar/> updating', newProps, this.state);
		}
	}, {
		key: "render",
		value: function render() {
			console.log('<Topbar/> rendering', this.props, this.state);
			var user = this.props.user;
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
									user.username ? user.shoppingCart.length : 0
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

},{"../common.jsx":1}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ConfirmOrder = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _common = require('../common.jsx');

var _CommentBox = require('./CommentBox.jsx');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConfirmOrder = function (_React$Component) {
	_inherits(ConfirmOrder, _React$Component);

	function ConfirmOrder() {
		_classCallCheck(this, ConfirmOrder);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ConfirmOrder).call(this));

		_this.state = {
			items: JSON.parse(sessionStorage.items)
		};
		console.log('<ConfirmOrder/> creating', _this.props, _this.state);
		return _this;
	}

	_createClass(ConfirmOrder, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(newProps) {
			console.log('<ConfirmOrder/> updating', newProps, this.state);
			this.setState({ DI: newProps.DI });
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			console.log(this.props);
			this.setState({
				user: this.props.user
			});
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			//console.log('<ConfirmOrder/> state'),this.state);
			//console.log('<ConfirmOrder/> props',this.props);
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
		key: 'render',
		value: function render() {
			var items = this.state.items;
			var DI = this.props.user.deliveryInformation;
			//console.log(this.props);
			//console.log(this.state);
			return React.createElement(
				'div',
				{ className: 'CONFIRM_ORDER' },
				React.createElement(
					'div',
					{ className: 'container' },
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
							{ className: 'add' },
							'添加收货信息'
						)
					),
					React.createElement(
						'div',
						{ className: 'deliveryInformation' },
						DI.map(function (elem) {
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
											{ className: 'remove' },
											'删除'
										),
										React.createElement(
											'button',
											{ className: 'edit' },
											'编辑'
										)
									)
								)
							);
						})
					),
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
					}),
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

},{"../common.jsx":1,"./CommentBox.jsx":3}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// @props {number} value
// @props {function} onIncrement
// @props {function} onDecrement

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Counter).call(this, props));

    _this.incrementAsync = _this.incrementAsync.bind(_this);
    _this.incrementIfOdd = _this.incrementIfOdd.bind(_this);
    return _this;
  }

  _createClass(Counter, [{
    key: 'incrementIfOdd',
    value: function incrementIfOdd() {
      if (this.props.value % 2 !== 0) {
        this.props.onIncrement();
      }
    }
  }, {
    key: 'incrementAsync',
    value: function incrementAsync() {
      setTimeout(this.props.onIncrement, 1000);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var value = _props.value;
      var onIncrement = _props.onIncrement;
      var onDecrement = _props.onDecrement;
      // var value = this.props.value;

      return React.createElement(
        'p',
        null,
        'Clicked: ',
        value,
        ' times',
        ' ',
        React.createElement(
          'button',
          { onClick: onIncrement },
          '+'
        ),
        ' ',
        React.createElement(
          'button',
          { onClick: onDecrement },
          '-'
        ),
        ' ',
        React.createElement(
          'button',
          { onClick: this.incrementIfOdd },
          'Increment if odd'
        ),
        ' ',
        React.createElement(
          'button',
          { onClick: this.incrementAsync },
          'Increment async'
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

exports.Counter = Counter;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Home = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _common = require("../common.jsx");

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
				{ id: "home" },
				React.createElement(Showcase, null)
			);
		}
	}]);

	return Home;
}(React.Component);

var Showcase = function (_React$Component2) {
	_inherits(Showcase, _React$Component2);

	function Showcase() {
		_classCallCheck(this, Showcase);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Showcase).apply(this, arguments));
	}

	_createClass(Showcase, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "container" },
				React.createElement(
					"div",
					{ className: "box2" },
					React.createElement(
						"ul",
						{ className: "col1" },
						React.createElement(
							"li",
							null,
							React.createElement(
								"div",
								{ className: "upper" },
								React.createElement(
									"div",
									{ className: "icon" },
									React.createElement(
										"a",
										{ href: "" },
										React.createElement("img", { src: _common.$$imgDir + "084337.png" })
									)
								),
								React.createElement(
									"a",
									{ href: "", className: "title" },
									"玩具模型"
								)
							),
							React.createElement(
								"div",
								{ className: "lower" },
								React.createElement(
									"a",
									{ href: "" },
									"模型公仔"
								),
								" ",
								React.createElement(
									"a",
									{ href: "" },
									"仿真收藏"
								),
								" ",
								React.createElement(
									"a",
									{ href: "" },
									"更多>"
								)
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"div",
								{ className: "upper" },
								React.createElement(
									"div",
									{ className: "icon" },
									React.createElement(
										"a",
										{ href: "" },
										React.createElement("img", { src: _common.$$imgDir + "153449.png" })
									)
								),
								React.createElement(
									"a",
									{ href: "", className: "title" },
									"数码配件"
								)
							),
							React.createElement(
								"div",
								{ className: "lower" },
								React.createElement(
									"a",
									{ href: "" },
									"手机配件"
								),
								" ",
								React.createElement(
									"a",
									{ href: "" },
									"充电装备"
								),
								" ",
								React.createElement(
									"a",
									{ href: "" },
									"更多>"
								)
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"div",
								{ className: "upper" },
								React.createElement(
									"div",
									{ className: "icon" },
									React.createElement(
										"a",
										{ href: "" },
										React.createElement("img", { src: _common.$$imgDir + "160245.png" })
									)
								),
								React.createElement(
									"a",
									{ href: "", className: "title" },
									"服装服饰"
								)
							),
							React.createElement(
								"div",
								{ className: "lower" },
								React.createElement(
									"a",
									{ href: "" },
									"男装"
								),
								" ",
								React.createElement(
									"a",
									{ href: "" },
									"女装"
								),
								" ",
								React.createElement(
									"a",
									{ href: "" },
									"更多>"
								)
							)
						),
						React.createElement(
							"li",
							null,
							React.createElement(
								"div",
								{ className: "upper" },
								React.createElement(
									"div",
									{ className: "icon" },
									React.createElement(
										"a",
										{ href: "" },
										React.createElement("img", { src: _common.$$imgDir + "161113.png" })
									)
								),
								React.createElement(
									"a",
									{ href: "", className: "title" },
									"居家日用"
								)
							),
							React.createElement(
								"div",
								{ className: "lower" },
								React.createElement(
									"a",
									{ href: "" },
									"创意文具"
								),
								" ",
								React.createElement(
									"a",
									{ href: "" },
									"抱枕靠垫"
								),
								" ",
								React.createElement(
									"a",
									{ href: "" },
									"更多>"
								)
							)
						)
					),
					React.createElement(
						"div",
						{ className: "col2" },
						React.createElement(
							"dl",
							null,
							React.createElement(
								"dt",
								null,
								React.createElement(
									"a",
									{ href: "#/item?id=1602091546" },
									React.createElement("img", { src: _common.$$imgDir + "index/1602091546.jpg" })
								)
							),
							React.createElement(
								"dt",
								null,
								React.createElement(
									"a",
									{ href: "#/item?id=1602091458" },
									React.createElement("img", { src: _common.$$imgDir + "144118.jpg" })
								)
							),
							React.createElement(
								"dd",
								null,
								React.createElement(
									"a",
									{ href: "" },
									React.createElement("img", { src: _common.$$imgDir + "144233.jpg" })
								)
							),
							React.createElement(
								"dd",
								null,
								React.createElement(
									"a",
									{ href: "" },
									React.createElement("img", { src: _common.$$imgDir + "144245.jpg" })
								)
							),
							React.createElement(
								"dd",
								null,
								React.createElement(
									"a",
									{ href: "" },
									React.createElement("img", { src: _common.$$imgDir + "144256.jpg" })
								)
							),
							React.createElement(
								"dd",
								null,
								React.createElement(
									"a",
									{ href: "" },
									React.createElement("img", { src: _common.$$imgDir + "144311.jpg" })
								)
							)
						)
					)
				)
			);
		}
	}]);

	return Showcase;
}(React.Component);

exports.Home = Home;

},{"../common.jsx":1}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Item = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _common = require('../common.jsx');

var _CommentBox = require('./CommentBox.jsx');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getItem() {
	var itemID = location.hash.match(/\?id=(\w+)/)[1];
	var item;
	//console.log( 'itemID',itemID );
	$.ajax({
		type: 'post',
		url: _common.$$phpDir + 'item.php',
		data: { itemID: itemID },
		async: false
	}).done(function (data) {
		//console.log('typeof data---',typeof data);
		console.log('item received');
		item = eval('(' + data + ')');
	}).error(function (e) {
		console.log(e);
	});
	return item;
}

var Item = function (_React$Component) {
	_inherits(Item, _React$Component);

	function Item() {
		_classCallCheck(this, Item);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Item).call(this));

		_this.state = {
			item: getItem(),
			tabPanel: 0,
			thumbnail: 0
		};
		console.log('<Item/> creating', _this.props, _this.state);
		return _this;
	}

	_createClass(Item, [{
		key: 'componentWillMount',
		value: function componentWillMount() {}
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
		key: 'toCart',
		value: function toCart() {
			// Perform an action.
			this.props.act({
				type: 'ADD_TO_CART',
				itemID: this.state.item.itemID,
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
		key: 'render',
		value: function render() {
			var item = this.state.item;
			var self = this;
			var thumbnail = this.state.thumbnail;
			return React.createElement(
				'div',
				{ id: 'ITEM' },
				React.createElement(
					'div',
					{ className: 'item container' },
					React.createElement(
						'div',
						{ className: 'header' },
						React.createElement(
							'p',
							null,
							React.createElement(
								'a',
								{ href: '#/home' },
								'主页'
							),
							' > ',
							React.createElement(
								'a',
								{ href: '', className: 'item_class' },
								item.class_
							),
							' > ',
							React.createElement(
								'a',
								{ href: '', className: 'sub_class' },
								item.sub_class
							)
						)
					),
					React.createElement(
						'div',
						{ className: 'images' },
						React.createElement(
							'div',
							{ className: 'thumbnail' },
							React.createElement('img', { src: _common.$$itemDir + item.itemID + '/' + thumbnail + '.jpg' })
						),
						React.createElement(
							'ul',
							{ className: 'tabs' },
							[0, 1, 2, 3].map(function (i) {
								return React.createElement(
									'li',
									null,
									React.createElement('img', { src: _common.$$itemDir + item.itemID + '/' + i + '.jpg', onMouseOver: self.toImg.bind(self, i) })
								);
							})
						)
					),
					React.createElement(
						'div',
						{ className: 'information' },
						React.createElement(
							'p',
							{ className: 'name' },
							item.name
						),
						React.createElement(
							'p',
							{ className: 'description' },
							item.description
						),
						React.createElement(
							'p',
							{ className: 'priceWrapper' },
							React.createElement(
								'b',
								null,
								'￥',
								React.createElement(
									'span',
									{ className: 'price' },
									Number(item.price).toFixed(2)
								)
							)
						),
						React.createElement(
							'div',
							{ className: 'shuliang' },
							React.createElement(
								'p',
								null,
								'数量：'
							),
							React.createElement(
								'div',
								{ className: 'counter' },
								React.createElement(
									'div',
									{ className: 'minus', onClick: this.decrease.bind(this) },
									'-'
								),
								React.createElement(
									'div',
									{ className: 'quantity' },
									item.quantity
								),
								React.createElement(
									'div',
									{ className: 'plus', onClick: this.increase.bind(this) },
									'+'
								)
							)
						),
						React.createElement(
							'div',
							{ className: 'buy', onClick: this.buyNow.bind(this) },
							'立即购买'
						),
						React.createElement(
							'div',
							{ className: 'toCart', onClick: this.toCart.bind(this) },
							'放入购物车'
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'box container' },
					React.createElement(
						'div',
						{ className: 'box-header' },
						React.createElement(
							'ul',
							{ className: 'tab' },
							[0, 1, 2].map(function (i) {
								return React.createElement(
									'li',
									{
										className: self.state.tabPanel === i ? 'active' : '',
										onClick: self.toTab.bind(self, i) },
									'商品详情'
								);
							})
						)
					),
					React.createElement(
						'ul',
						{ className: 'content' },
						this.state.tabPanel === 0 ? React.createElement(
							'li',
							{ className: 'imgs_detailed' },
							React.createElement('img', { src: _common.$$itemDir + item.itemID + '/d0.jpg' }),
							React.createElement('img', { src: _common.$$itemDir + item.itemID + '/d1.jpg' }),
							React.createElement('img', { src: _common.$$itemDir + item.itemID + '/d2.jpg' })
						) : '',
						this.state.tabPanel === 1 ? React.createElement(
							'li',
							null,
							'尚无评价晒单',
							React.createElement(_CommentBox.CommentBox, null)
						) : '',
						this.state.tabPanel === 2 ? React.createElement(
							'li',
							null,
							React.createElement(
								'h3',
								null,
								'退货政策'
							),
							React.createElement(
								'p',
								null,
								'自实际收到商品之日起15日内可以退货。',
								React.createElement('br', null),
								'3C类商品：此类所退换商品要求不影响二次销售，配件完整，包装齐全（不带有店铺或商品商标logo的非密封性包装除外），商品外观无磨损，无使用痕迹，整体无磕碰。如有赠品，需如数退回。'
							),
							React.createElement(
								'h3',
								null,
								'配送速度查询'
							),
							React.createElement(
								'p',
								null,
								'1.下单成功之后，订单会随时更新您的订单状态。',
								React.createElement('br', null),
								'2.您可以登录到您的时光网账户中，实时查看您订单的生产及配送情况。',
								React.createElement('br', null),
								'3.订单显示已发货状态，即可看到物流信息更新显示。',
								React.createElement('br', null),
								' 4.当您的包裹发货时，我们将会以短信的方式附上运单号码告知您，您可以到时光网账户跟踪物流信息或者根据快递单号直接进行查询。'
							),
							React.createElement(
								'h3',
								null,
								'服务承诺'
							),
							React.createElement(
								'p',
								null,
								'1.时光网所售的产品都是官方授权，100%正品保证，您可以放心购买。',
								React.createElement('br', null),
								'2.如您的商品自签收之日起15天内出现质量问题、商品破损等问题可申请退货(特殊商品除外)。',
								React.createElement('br', null),
								'3.订单取消成功后，退款大约3-7个工作日内退至原支付账户。'
							),
							React.createElement(
								'h3',
								null,
								'权利声明'
							),
							React.createElement(
								'p',
								null,
								'              时光网上的所有商品信息、客户评价、商品咨询、网友讨论等内容，是时光网重要的经营资源，未经许可，禁止非法转载使用。',
								React.createElement('br', null),
								'    注：因部分品牌会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与网站图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本网站没有及时更新，请大家谅解！'
							)
						) : ''
					)
				)
			);
		}
	}]);

	return Item;
}(React.Component);

exports.Item = Item;

},{"../common.jsx":1,"./CommentBox.jsx":3}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ShoppingCart = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _common = require("../common.jsx");

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
								React.createElement("img", { src: _common.$$itemDir + x.itemID + '/0.jpg' })
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
			items: _this2.props.user.shoppingCart || []
		};
		console.log('<ShoppingCart/> creating', _this2.props, _this2.state);
		return _this2;
	}

	_createClass(ShoppingCart, [{
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps(newProps) {
			this.setState({
				items: {}
			});
			this.setState({
				items: _typeof(newProps.user.shoppingCart) === 'object' ? newProps.user.shoppingCart : []
			});
		}
	}, {
		key: "componentDidUpdate",
		value: function componentDidUpdate() {
			console.log('<ShoppingCart/> updated', this.props, this.state);
		}
		//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

	}, {
		key: "allChecked",
		value: function allChecked() {
			for (var i = 0; i < this.state.items.length; i++) {
				if (!this.state.items[i].checked) {
					return false;
				};
			};
			return true;
		}
		// @return {}

	}, {
		key: "getTotalPrice",
		value: function getTotalPrice() {
			var totalPrice = 0;
			for (var i = 0; i < this.state.items.length; i++) {
				if (this.state.items[i].checked === true) {
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
				if (this.state.items[i].checked === true) {
					totalQuantity++;
				};
			}
			return totalQuantity;
		}
		//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

	}, {
		key: "checkAll",
		value: function checkAll() {
			if (this.allChecked()) {
				for (var i = 0; i < this.state.items.length; i++) {
					this.state.items[i].checked = false;
				};
			} else {
				for (var i = 0; i < this.state.items.length; i++) {
					this.state.items[i].checked = true;
				};
			};
			this.setState({
				items: this.state.items
			});
		}
	}, {
		key: "checkThis",
		value: function checkThis(i) {
			this.state.items[i].checked = this.state.items[i].checked ? false : true;
			this.setState({ items: this.state.items });
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
			this.props.act({
				type: 'REMOVE_ITEM',
				itemID: this.state.items[i].itemID
			});
		}
	}, {
		key: "render",
		value: function render() {
			//console.log(React);
			//console.log(Function);
			return React.createElement(
				"div",
				{ className: "shopping-cart wrapper" },
				React.createElement(
					"div",
					{ className: "container" },
					React.createElement(
						"div",
						{ className: "shopping-cart-header1" },
						"我的购物车"
					),
					React.createElement(
						"div",
						{ className: "shopping-cart-header2" },
						React.createElement("input", { className: "check", type: "checkbox", checked: this.allChecked(), onChange: this.checkAll.bind(this) }),
						React.createElement(
							"div",
							{ className: "thumbnail" },
							"全选"
						),
						React.createElement(
							"p",
							{ className: "name" },
							"商品"
						),
						React.createElement(
							"p",
							{ className: "spec" },
							"规格"
						),
						React.createElement(
							"p",
							{ className: "price" },
							"单价(元)"
						),
						React.createElement(
							"div",
							{ className: "counter" },
							"数量"
						),
						React.createElement(
							"div",
							{ className: "subtotal" },
							"小计(元)"
						),
						React.createElement(
							"p",
							{ className: "manipulation" },
							"操作"
						)
					),
					React.createElement(ItemList, {
						items: this.state.items,
						checkThis: this.checkThis.bind(this),
						plusOne: this.plusOne.bind(this),
						minusOne: this.minusOne.bind(this),
						remove: this.removeItem.bind(this) }),
					React.createElement(
						"div",
						{ style: { overflow: "hidden", background: "white" } },
						React.createElement(
							"ul",
							{ className: "summary" },
							React.createElement(
								"li",
								null,
								"已选择",
								React.createElement(
									"span",
									{ className: "totalQuantity" },
									this.getTotalQuantity()
								),
								"件商品"
							),
							React.createElement(
								"li",
								null,
								"总价（不含运费）：",
								React.createElement(
									"span",
									{ className: "note" },
									"￥"
								),
								React.createElement(
									"span",
									{ className: "totalPrice" },
									this.getTotalPrice()
								)
							),
							React.createElement(
								"li",
								{ className: "checkout" },
								"去结算"
							)
						)
					)
				)
			);
		}
	}]);

	return ShoppingCart;
}(React.Component);

exports.ShoppingCart = ShoppingCart;

},{"../common.jsx":1}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
		return _this;
	}

	_createClass(Signin, [{
		key: 'getID',
		value: function getID(e) {
			this.setState({ userID: e.target.value });
			// console.log(this.state);
		}
	}, {
		key: 'getPwd',
		value: function getPwd(e) {
			this.setState({ password: e.target.value });
		}
	}, {
		key: 'login',
		value: function login() {
			if (this.state.userID && this.state.password) {
				this.props.act({
					type: 'LOGIN',
					data: {
						userID: this.state.userID,
						password: this.state.password
					}
				});
			} else {
				alert('Invalid username or password.');
			}
		}
	}, {
		key: 'setUserID',
		value: function setUserID(e) {
			var user = this.state.user;
			this.state.user.userID = e.target.value;
			this.setState({
				user: user
			});
		}
	}, {
		key: 'setPassword',
		value: function setPassword(e) {
			var user = this.state.user;
			this.state.user.password = e.target.value;
			this.setState({
				user: user
			});
		}
	}, {
		key: 'checkPassword',
		value: function checkPassword() {
			if (!this.state.user.password) {
				return '';
			} else {
				return (/^\w{6,20}$/.test(this.state.user.password) ? 'success' : 'error'
				);
			};
		}
	}, {
		key: 'checkUserID',
		value: function checkUserID() {
			if (!this.state.user.userID) {
				return '';
			} else {
				return (/^\d{11}$/.test(this.state.user.userID) ? 'success' : 'error'
				);
			};
		}
	}, {
		key: 'register',
		value: function register() {
			if (this.checkUserID() === 'success' && this.checkPassword() === 'success') {
				this.props.act({
					type: 'REGISTER',
					user: this.state.user
				});
			} else {
				alert("您输入的信息有误！");
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ className: 'SIGN_IN wrapper' },
				React.createElement(
					'div',
					{ className: 'shade1' },
					React.createElement('div', null)
				),
				React.createElement(
					'div',
					{ className: 'panel container' },
					React.createElement(
						'div',
						{ className: 'register' },
						React.createElement(
							'div',
							{ className: 'register-center' },
							React.createElement(
								'div',
								{ className: 'register-header' },
								React.createElement(
									'h1',
									null,
									'新会员注册'
								)
							),
							React.createElement(
								'form',
								{ className: 'register-form' },
								React.createElement('input', {
									type: 'text',
									name: 'username',
									placeholder: '请输入11位手机号',
									onChange: this.setUserID.bind(this),
									className: this.checkUserID() }),
								React.createElement('p', { className: 'info' }),
								React.createElement('input', {
									type: 'password',
									name: 'password',
									placeholder: '密码（6-20位字母、数字与符号的组合）',
									onChange: this.setPassword.bind(this),
									className: this.checkPassword() }),
								React.createElement('p', { className: 'info' }),
								React.createElement('input', {
									type: 'password',
									name: 'password2',
									placeholder: '确认密码'
								}),
								React.createElement('p', { className: 'info' }),
								React.createElement('input', { type: 'text', name: 'verif', placeholder: '请输入验证码' }),
								React.createElement('p', { className: 'info' }),
								React.createElement('input', { type: 'checkbox', name: 'agree' }),
								React.createElement(
									'span',
									null,
									'已同意《飞越太平洋服务条款》'
								),
								React.createElement(
									'div',
									{ className: 'register-button', onClick: this.register.bind(this) },
									'注 册'
								)
							)
						)
					),
					React.createElement('div', { className: 'middle-line' }),
					React.createElement(
						'div',
						{ className: 'login' },
						React.createElement(
							'div',
							{ className: 'login-center' },
							React.createElement(
								'div',
								{ className: 'login-header' },
								React.createElement(
									'h1',
									{ className: 'hydl' },
									'会员登录'
								)
							),
							React.createElement(
								'form',
								{ className: 'login-form' },
								React.createElement('input', {
									type: 'text',
									name: 'username',
									placeholder: '请输入您的用户名',
									onChange: this.getID.bind(this)
								}),
								React.createElement('p', null),
								React.createElement('input', {
									type: 'password',
									name: 'password',
									placeholder: '请输入您的密码',
									onChange: this.getPwd.bind(this)
								}),
								React.createElement('p', null),
								React.createElement('input', { type: 'checkbox', name: 'login-automatically' }),
								React.createElement(
									'span',
									null,
									'下次自动登录'
								),
								React.createElement(
									'div',
									{
										className: 'login-button',
										onClick: this.login.bind(this)
									},
									'登 录'
								)
							)
						)
					)
				)
			);
		}
	}]);

	return Signin;
}(React.Component);

exports.Signin = Signin;

},{}],10:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _App = require('./components/App.jsx');

var _Home = require('./components/Home.jsx');

var _Item = require('./components/Item.jsx');

var _CommentBox = require('./components/CommentBox.jsx');

var _ShoppingCart2 = require('./components/ShoppingCart.jsx');

var _Counter2 = require('./components/Counter.jsx');

var _Signin = require('./components/Signin.jsx');

var _ConfirmOrder2 = require('./components/ConfirmOrder.jsx');

var _reducer = require('./reducers/reducer.jsx');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //import { Router,Route,IndexRoute,Link,hashHistory } from 'react-router';
//import {createStore,combineReducers} from 'redux';
//import {Provider,connect} from 'react-redux';

var PropTypes = React.PropTypes;

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var hashHistory = ReactRouter.hashHistory;

var createStore = Redux.createStore;
var combineReducers = Redux.combineReducers;

var Provider = ReactRedux.Provider;
var connect = ReactRedux.connect;

var Sidebar = function (_React$Component) {
	_inherits(Sidebar, _React$Component);

	function Sidebar() {
		_classCallCheck(this, Sidebar);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Sidebar).apply(this, arguments));
	}

	_createClass(Sidebar, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ className: 'sidebar' },
				React.createElement(
					'div',
					null,
					'购物车'
				),
				React.createElement(
					'ul',
					null,
					React.createElement(
						'li',
						null,
						React.createElement('i', { className: 'fa fa-home' }),
						'1111111111'
					)
				)
			);
		}
	}]);

	return Sidebar;
}(React.Component);

// The root component of our app.


var App = function (_React$Component2) {
	_inherits(App, _React$Component2);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this));
	}

	_createClass(App, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(_App.SearchBar, null),
				React.createElement('div', { className: 'line' }),
				React.createElement(_Topbar, {
					user: $$store.getState().user,
					onLogout: function onLogout() {
						return $$store.dispatch({ type: 'LOGOUT' });
					}
				}),
				React.createElement(
					'div',
					null,
					this.props.children,
					React.createElement('div', { className: 'clear' })
				),
				React.createElement('div', { className: 'line' }),
				React.createElement(_App.Footer, null),
				React.createElement(_App.BackToTop, null)
			);
		}
	}]);

	return App;
}(React.Component);

// Counter.propTypes = {
//   value: PropTypes.number.isRequired,
//   onIncrement: PropTypes.func.isRequired,
//   onDecrement: PropTypes.func.isRequired
// }

// actions


var LOGIN = { type: 'LOGIN' };

var INCREMENT = { type: 'INCREMENT' };
var DECREMENT = { type: 'DECREMENT' };

// reducers

// store
var $$store = createStore(_reducer.$$reducer);
console.log('state initialized', $$store.getState());

// Connect the state in $$store with props of a component.
// Create Smart Components.
var _Counter = connect(function (state) {
	return { value: state.counter.num };
})(_Counter2.Counter);

var _Topbar = connect(function (state) {
	return { user: state.user };
})(_App.Topbar);

var _ShoppingCart = connect(function (state) {
	return { user: state.user };
})(_ShoppingCart2.ShoppingCart);

var _ConfirmOrder = connect(function (state) {
	return { user: state.user };
})(_ConfirmOrder2.ConfirmOrder);

var $$Counter = function (_React$Component3) {
	_inherits($$Counter, _React$Component3);

	function $$Counter() {
		_classCallCheck(this, $$Counter);

		return _possibleConstructorReturn(this, Object.getPrototypeOf($$Counter).apply(this, arguments));
	}

	_createClass($$Counter, [{
		key: 'render',
		value: function render() {
			return React.createElement(_Counter, { value: $$store.getState().counter.num,
				onIncrement: function onIncrement() {
					$$store.dispatch(INCREMENT);
				},
				onDecrement: function onDecrement() {
					return $$store.dispatch(DECREMENT);
				} });
		}
	}]);

	return $$Counter;
}(React.Component);

var $$Signin = function (_React$Component4) {
	_inherits($$Signin, _React$Component4);

	function $$Signin() {
		_classCallCheck(this, $$Signin);

		return _possibleConstructorReturn(this, Object.getPrototypeOf($$Signin).apply(this, arguments));
	}

	_createClass($$Signin, [{
		key: 'render',
		value: function render() {
			return React.createElement(_Signin.Signin, { act: function act(action) {
					return $$store.dispatch(action);
				} });
		}
	}]);

	return $$Signin;
}(React.Component);

var ShoppingCartContainer = function (_React$Component5) {
	_inherits(ShoppingCartContainer, _React$Component5);

	function ShoppingCartContainer() {
		_classCallCheck(this, ShoppingCartContainer);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(ShoppingCartContainer).apply(this, arguments));
	}

	_createClass(ShoppingCartContainer, [{
		key: 'render',
		value: function render() {
			return React.createElement(_ShoppingCart, {
				user: $$store.getState().user,
				act: function act(action) {
					return $$store.dispatch(action);
				} });
		}
	}]);

	return ShoppingCartContainer;
}(React.Component);

var ItemContainer = function (_React$Component6) {
	_inherits(ItemContainer, _React$Component6);

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

var ConfirmOrderContainer = function (_React$Component7) {
	_inherits(ConfirmOrderContainer, _React$Component7);

	function ConfirmOrderContainer() {
		_classCallCheck(this, ConfirmOrderContainer);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(ConfirmOrderContainer).apply(this, arguments));
	}

	_createClass(ConfirmOrderContainer, [{
		key: 'render',
		value: function render() {
			return React.createElement(_ConfirmOrder, { user: $$store.getState().user });
		}
	}]);

	return ConfirmOrderContainer;
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
			{ path: '/', component: App },
			React.createElement(Route, { path: '/signin', component: $$Signin }),
			React.createElement(Route, { path: '/home', component: _Home.Home }),
			React.createElement(Route, { path: '/comment_box', component: _CommentBox.CommentBox }),
			React.createElement(Route, { path: '/shopping_cart', component: ShoppingCartContainer }),
			React.createElement(Route, { path: '/counter', component: $$Counter }),
			React.createElement(Route, { path: '/item', component: ItemContainer }),
			React.createElement(Route, { path: '/confirm_order', component: ConfirmOrderContainer })
		)
	)
), document.getElementById('app'));

},{"./components/App.jsx":2,"./components/CommentBox.jsx":3,"./components/ConfirmOrder.jsx":4,"./components/Counter.jsx":5,"./components/Home.jsx":6,"./components/Item.jsx":7,"./components/ShoppingCart.jsx":8,"./components/Signin.jsx":9,"./reducers/reducer.jsx":13}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.user = undefined;

var _common = require('../common.jsx');

function getUser() {
	var user;
	$.ajax({
		type: 'POST',
		url: 'http://localhost/fytpy/php/session.php',
		async: false
	}).done(function (data) {
		user = eval('(' + data + ')');
		//console.log(user);
		sessionStorage.userID = user.username;
	});
	return user;
}

function user() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	var action = arguments[1];

	switch (action.type) {
		case 'LOGIN':
			var user;
			var dataSent = {
				username: action.data.userID,
				password: action.data.password
			};
			dataSent = JSON.stringify(dataSent);
			var ok = false;
			//console.log($$phpDir,dataSent);
			$.ajax({
				type: 'POST',
				url: 'http://localhost/fytpy/php/login.php',
				data: { data: dataSent },
				async: false
			}).done(function (data) {
				//console.log(data);
				ok = data ? true : false;
			});
			if (ok) {
				alert("登录成功！");
				location = "#/home";
				console.log('state updated by LOGIN');
				return getUser();
			} else {
				alert("您输入的用户名或密码有误！");
				return {};
			}
		case 'LOGOUT':
			location = "#/home";
			$.ajax({
				url: _common.$$phpDir + '/logout.php',
				type: 'post',
				async: false
			});
			delete sessionStorage.userID;
			return {};
		case 'ADD_TO_CART':
			action.to_cart = true;
			$.ajax({
				type: 'post',
				url: _common.$$phpDir + '/insert.php',
				data: { data: JSON.stringify(action) },
				async: false
			}).done(function () {
				alert('成功加入购物车');
			});
			return getUser();
		case 'REMOVE_ITEM':
			$.ajax({
				type: 'post',
				url: _common.$$phpDir + '/remove.php',
				data: { data: JSON.stringify(action) },
				async: false
			}).done(function () {});
			return getUser();
		default:
			if (sessionStorage.userID) {
				return getUser();
			} else {
				return state;
			}
	}
}

exports.user = user;

},{"../common.jsx":1}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
function counter() {
	var state = arguments.length <= 0 || arguments[0] === undefined ? { num: 0 } : arguments[0];
	var action = arguments[1];

	var _state = { num: state.num };
	switch (action.type) {
		case 'INCREMENT':
			_state.num += 1;
			break;
		case 'DECREMENT':
			_state.num--;
			break;
		default:
			break;
	}
	//console.log(_state);
	return _state;
}

exports.counter = counter;

},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.$$reducer = undefined;

var _redux = require('redux');

var _counter = require('./counter.jsx');

var _app = require('./app.jsx');

var $$reducer = (0, _redux.combineReducers)({ user: _app.user, counter: _counter.counter });

exports.$$reducer = $$reducer;

},{"./app.jsx":11,"./counter.jsx":12,"redux":24}],14:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],15:[function(require,module,exports){
/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetPrototype = Object.getPrototypeOf;

/**
 * Gets the `[[Prototype]]` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {null|Object} Returns the `[[Prototype]]`.
 */
function getPrototype(value) {
  return nativeGetPrototype(Object(value));
}

module.exports = getPrototype;

},{}],16:[function(require,module,exports){
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

module.exports = isHostObject;

},{}],17:[function(require,module,exports){
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = isObjectLike;

},{}],18:[function(require,module,exports){
var getPrototype = require('./_getPrototype'),
    isHostObject = require('./_isHostObject'),
    isObjectLike = require('./isObjectLike');

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = Function.prototype.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object,
 *  else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) ||
      objectToString.call(value) != objectTag || isHostObject(value)) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return (typeof Ctor == 'function' &&
    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
}

module.exports = isPlainObject;

},{"./_getPrototype":15,"./_isHostObject":16,"./isObjectLike":17}],19:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = applyMiddleware;

var _compose = require('./compose');

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, initialState, enhancer) {
      var store = createStore(reducer, initialState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = _compose2["default"].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}
},{"./compose":22}],20:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports["default"] = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}
},{}],21:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;
exports["default"] = combineReducers;

var _createStore = require('./createStore');

var _isPlainObject = require('lodash/isPlainObject');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _warning = require('./utils/warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!(0, _isPlainObject2["default"])(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key);
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerSanity(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];
    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var sanityError;
  try {
    assertReducerSanity(finalReducers);
  } catch (e) {
    sanityError = e;
  }

  return function combination() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var action = arguments[1];

    if (sanityError) {
      throw sanityError;
    }

    if (process.env.NODE_ENV !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action);
      if (warningMessage) {
        (0, _warning2["default"])(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var i = 0; i < finalReducerKeys.length; i++) {
      var key = finalReducerKeys[i];
      var reducer = finalReducers[key];
      var previousStateForKey = state[key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(key, action);
        throw new Error(errorMessage);
      }
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
}).call(this,require('_process'))
},{"./createStore":23,"./utils/warning":25,"_process":14,"lodash/isPlainObject":18}],22:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports["default"] = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  } else {
    var _ret = function () {
      var last = funcs[funcs.length - 1];
      var rest = funcs.slice(0, -1);
      return {
        v: function v() {
          return rest.reduceRight(function (composed, f) {
            return f(composed);
          }, last.apply(undefined, arguments));
        }
      };
    }();

    if (typeof _ret === "object") return _ret.v;
  }
}
},{}],23:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.ActionTypes = undefined;
exports["default"] = createStore;

var _isPlainObject = require('lodash/isPlainObject');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _symbolObservable = require('symbol-observable');

var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = exports.ActionTypes = {
  INIT: '@@redux/INIT'
};

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [initialState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} enhancer The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
function createStore(reducer, initialState, enhancer) {
  var _ref2;

  if (typeof initialState === 'function' && typeof enhancer === 'undefined') {
    enhancer = initialState;
    initialState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, initialState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = initialState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!(0, _isPlainObject2["default"])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      listeners[i]();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/zenparsing/es-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */

      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[_symbolObservable2["default"]] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[_symbolObservable2["default"]] = observable, _ref2;
}
},{"lodash/isPlainObject":18,"symbol-observable":26}],24:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;
exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

var _createStore = require('./createStore');

var _createStore2 = _interopRequireDefault(_createStore);

var _combineReducers = require('./combineReducers');

var _combineReducers2 = _interopRequireDefault(_combineReducers);

var _bindActionCreators = require('./bindActionCreators');

var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

var _applyMiddleware = require('./applyMiddleware');

var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

var _compose = require('./compose');

var _compose2 = _interopRequireDefault(_compose);

var _warning = require('./utils/warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  (0, _warning2["default"])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}

exports.createStore = _createStore2["default"];
exports.combineReducers = _combineReducers2["default"];
exports.bindActionCreators = _bindActionCreators2["default"];
exports.applyMiddleware = _applyMiddleware2["default"];
exports.compose = _compose2["default"];
}).call(this,require('_process'))
},{"./applyMiddleware":19,"./bindActionCreators":20,"./combineReducers":21,"./compose":22,"./createStore":23,"./utils/warning":25,"_process":14}],25:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports["default"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}
},{}],26:[function(require,module,exports){
(function (global){
/* global window */
'use strict';

module.exports = require('./ponyfill')(global || window || this);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./ponyfill":27}],27:[function(require,module,exports){
'use strict';

module.exports = function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

},{}]},{},[10]);
