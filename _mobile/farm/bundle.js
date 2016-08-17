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

},{"../common.jsx":1,"./CommentBox.jsx":3}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Home = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _common = require('../common.jsx');

var _Navbar = require('./Navbar.jsx');

var _Swiper = require('./Swiper.jsx');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var swiperItems = ['img/index/slider_0.jpg', 'img/index/slider_1.jpg', 'img/index/slider_2.jpg', 'img/index/slider_3.jpg'];

var Home = function (_React$Component) {
	_inherits(Home, _React$Component);

	function Home(props) {
		_classCallCheck(this, Home);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Home).call(this, props));

		var self = _this;
		self.state = { items: [] };
		self.getItems();
		console.log('<Home/> constructing', self.state);
		return _this;
	}

	_createClass(Home, [{
		key: 'getItems',
		value: function getItems() {
			var self = this;
			fetch('/getItems', {
				method: 'POST',
				headers: {
					// 'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(self.state.user)
			}).then(function (res) {
				return res.json();
			}).then(function (data) {
				self.setState({
					items: data
				});
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
					{ className: 'HOME' },
					React.createElement(
						'div',
						{ className: 'searchbar' },
						React.createElement(
							'div',
							{ className: 'search' },
							React.createElement('img', { src: 'img/search.png' }),
							React.createElement('input', { type: 'text', name: '', placeholder: '请输入产品名称' })
						)
					),
					React.createElement(_Swiper.Swiper, { items: swiperItems }),
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
								var src = 'img/thumbnail/' + item.id + '.jpg';
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
					React.createElement(
						'div',
						{ className: 'panel' },
						React.createElement(
							'div',
							{ className: 'panel-header' },
							React.createElement(
								'p',
								{ className: 'class-name' },
								'水产海鲜'
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
								var src = 'img/thumbnail/' + item.id + '.jpg';
								var style = {
									float: i % 2 === 0 ? 'left' : 'right'
								};
								return React.createElement(
									'div',
									{ className: 'item' },
									React.createElement(
										'a',
										{ href: 'items/item.html', style: style },
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
					React.createElement(
						'div',
						{ className: 'panel' },
						React.createElement(
							'div',
							{ className: 'panel-header' },
							React.createElement(
								'p',
								{ className: 'class-name' },
								'新鲜菜蔬'
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
								var src = 'img/thumbnail/' + item.id + '.jpg';
								var style = {
									float: i % 2 === 0 ? 'left' : 'right'
								};
								return React.createElement(
									'div',
									{ className: 'item' },
									React.createElement(
										'a',
										{ href: 'items/item.html', style: style },
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
			};
		}
	}]);

	return Home;
}(React.Component);

exports.Home = Home;

},{"../common.jsx":1,"./Navbar.jsx":8,"./Swiper.jsx":14}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Item = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _common = require('../common.jsx');

var _CommentBox = require('./CommentBox.jsx');

var _Swiper = require('./Swiper.jsx');

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
		_this.getItem();
		return _this;
	}

	_createClass(Item, [{
		key: 'componentWillMount',
		value: function componentWillMount() {}
	}, {
		key: 'getItem',
		value: function getItem() {
			var self = this;
			var itemID = location.hash.match(/\?id=(\w+)/)[1];
			fetch('/getItem', {
				method: 'POST',
				headers: {
					// 'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ itemID: itemID })
			}).then(function (res) {
				return res.json();
			}).then(function (data) {
				console.log('<Item/> item received');
				data.quantity = 1;
				self.setState({
					item: data
				});
			}).catch(function (e, f, g) {
				console.log(e, f, g);
			});
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
		key: 'render',
		value: function render() {
			console.log('<Item/> rendering', this.props, this.state);
			var item = this.state.item;
			return React.createElement(
				'div',
				{ className: 'ITEM' },
				React.createElement(_Swiper.Swiper, { items: swiperItems }),
				React.createElement(
					'div',
					{ className: 'desc' },
					React.createElement(
						'div',
						{ className: 'upper' },
						React.createElement(
							'h1',
							{ className: 'price' },
							item.price.toFixed(2)
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
						{ className: 'lower' },
						React.createElement(
							'p',
							null,
							item.name
						),
						React.createElement(
							'p',
							null,
							item.desc
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'item_spec' },
					React.createElement(
						'p',
						null,
						'商品规格'
					),
					React.createElement(
						'div',
						{ className: 'spec spec1 selected' },
						'24粒/盒'
					),
					React.createElement(
						'div',
						{ className: 'spec spec2' },
						'8粒/盒'
					)
				),
				React.createElement(
					'div',
					{ className: 'details' },
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
					React.createElement('div', { className: 'line' }),
					React.createElement(
						'div',
						{ className: 'square' },
						React.createElement('img', { src: '0001/d0.jpg' }),
						React.createElement('img', { src: '0001/d1.jpg' }),
						React.createElement('img', { src: '0001/d2.jpg' })
					)
				),
				React.createElement('div', { className: 'item_nav_shadow' }),
				React.createElement(
					'div',
					{ className: 'item_nav' },
					React.createElement(
						'a',
						{ href: '#/home', className: 'home' },
						React.createElement('img', { src: './img/homepage.png' }),
						React.createElement(
							'p',
							null,
							'首页'
						)
					),
					React.createElement(
						'a',
						{ className: 'to_cart', onClick: this.addToCart.bind(this) },
						'加入购物车'
					)
				)
			);
		}
	}]);

	return Item;
}(React.Component);

exports.Item = Item;

},{"../common.jsx":1,"./CommentBox.jsx":3,"./Swiper.jsx":14}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Member = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _common = require('../common.jsx');

var _Navbar = require('./Navbar.jsx');

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
			location.hash = 'signin';
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
					this.props.user.userID ? React.createElement(
						'div',
						null,
						React.createElement(
							'div',
							{ className: 'header' },
							React.createElement(
								'div',
								{ className: 'outerRound' },
								React.createElement('div', { className: 'innerRound' })
							),
							React.createElement(
								'p',
								{ className: 'account' },
								this.props.user.userID
							)
						),
						React.createElement(
							'div',
							{ className: 'box box1' },
							React.createElement(
								'ul',
								null,
								React.createElement(
									'a',
									{ href: 'my_orders.html' },
									React.createElement('img', { className: 'icon', src: 'img/orders.png' }),
									React.createElement(
										'p',
										null,
										'我的订单'
									),
									React.createElement('img', { className: 'arrow', src: 'img/arrow.png' })
								),
								React.createElement(
									'a',
									{ href: '' },
									React.createElement('img', { className: 'icon', src: 'img/crate.png' }),
									React.createElement(
										'p',
										null,
										'我的菜箱'
									),
									React.createElement(
										'span',
										{ className: 'tip' },
										'会员可以选菜了！'
									),
									React.createElement('img', { className: 'arrow', src: 'img/arrow.png' })
								),
								React.createElement(
									'a',
									{ href: '' },
									React.createElement('img', { className: 'icon', src: 'img/combo.png' }),
									React.createElement(
										'p',
										null,
										'绑定套餐'
									),
									React.createElement('img', { className: 'arrow', src: 'img/arrow.png' })
								)
							)
						),
						React.createElement(
							'div',
							{ className: 'box box2' },
							React.createElement(
								'ul',
								null,
								React.createElement(
									'a',
									{ href: 'coupon.html' },
									React.createElement('img', { className: 'icon', src: 'img/coupons.png' }),
									React.createElement(
										'p',
										null,
										'我的抵用券'
									),
									React.createElement('img', { className: 'arrow', src: 'img/arrow.png' })
								),
								React.createElement(
									'a',
									{ href: 'delivery_address.html' },
									React.createElement('img', { className: 'icon', src: 'img/address.png' }),
									React.createElement(
										'p',
										null,
										'收货地址管理'
									),
									React.createElement('img', { className: 'arrow', src: 'img/arrow.png' })
								),
								React.createElement(
									'a',
									{ href: 'favorite.html' },
									React.createElement('img', { className: 'icon', src: 'img/collection.png' }),
									React.createElement(
										'p',
										null,
										'我的收藏'
									),
									React.createElement('img', { className: 'arrow', src: 'img/arrow.png' })
								),
								React.createElement(
									'a',
									{ href: 'favorite.html' },
									React.createElement('img', { className: 'icon', src: 'img/favorite.png' }),
									React.createElement(
										'p',
										null,
										'我的喜好'
									),
									React.createElement('img', { className: 'arrow', src: 'img/arrow.png' })
								)
							)
						),
						React.createElement(
							'a',
							{ className: 'logout', onClick: this.logout.bind(this) },
							'退出登录'
						)
					) : React.createElement(
						'div',
						null,
						React.createElement(
							'a',
							{ className: 'login', href: '#/signin' },
							'去登录'
						)
					),
					React.createElement(_Navbar.Navbar, { name: 'mine' })
				);
			};
		}
	}]);

	return Member;
}(React.Component);

exports.Member = Member;

},{"../common.jsx":1,"./Navbar.jsx":8}],8:[function(require,module,exports){
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
						{ href: "#/home" },
						React.createElement("img", { src: "img/homepage" + (this.props.name === 'home' ? '2' : '') + ".png" }),
						React.createElement(
							"p",
							{ className: this.props.name === 'home' ? 'active' : '' },
							"首页"
						),
						React.createElement("div", { className: "line" })
					),
					React.createElement(
						"a",
						{ href: "" },
						React.createElement("img", { src: "img/classes" + (this.props.name === 'classes' ? '2' : '') + ".png" }),
						React.createElement(
							"p",
							null,
							"分类"
						),
						React.createElement("div", { className: "line" })
					),
					React.createElement(
						"a",
						{ href: "#/shopping_cart" },
						React.createElement("img", { src: "img/cart.png" }),
						React.createElement(
							"p",
							null,
							"购物车"
						),
						React.createElement("div", { className: "line" })
					),
					React.createElement(
						"a",
						{ href: "#/member" },
						React.createElement("img", { src: "img/mine" + (this.props.name === 'mine' ? '2' : '') + ".png" }),
						React.createElement(
							"p",
							{ className: this.props.name === 'mine' ? 'active' : '' },
							"我的多利"
						)
					)
				)
			);
		}
	}]);

	return Navbar;
}(React.Component);

exports.Navbar = Navbar;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Notice = function (_React$Component) {
	_inherits(Notice, _React$Component);

	function Notice() {
		_classCallCheck(this, Notice);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Notice).call(this));

		_this.style = {
			notice: {
				position: 'fixed',
				left: 0,
				top: 0,
				bottom: 0,
				right: 0,
				margin: 'auto',
				width: '3rem',
				height: '1rem',
				borderRadius: '0.1rem',
				background: 'black',
				opacity: '0.5',
				color: 'white',
				textAlign: 'center',
				fontSize: '0.14rem',
				lineHeight: '1rem',
				zIndex: '1000',
				display: 'none'
			}
		};
		return _this;
	}

	_createClass(Notice, [{
		key: 'render',
		value: function render() {
			var self = this;
			return React.createElement(
				'p',
				{ className: this.props.shown === true ? 'shown' : '', style: this.style.notice },
				self.props.text
			);
		}
	}]);

	return Notice;
}(React.Component);

exports.Notice = Notice;

},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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
			items: []
		};
		_this2.getItems();
		return _this2;
	}

	_createClass(ShoppingCart, [{
		key: "getItems",
		value: function getItems() {
			var self = this;
			fetch('/getShoppingCart', {
				method: 'POST',
				headers: {
					// 'Accept': 'application/json',
					//'Content-Type': 'application/json'
				}
			}).then(function (res) {
				return res.json();
			}).then(function (data) {
				console.log('<ShoppingCart/> item received', data);
				self.setState({
					items: data
				});
			}).catch(function (e, f, g) {
				console.log(e, f, g);
			});
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
		//console.log('<ShoppingCart/> updated',this.props,this.state);

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
			console.log('<ShoppingCart/> rendering', this.props, this.state);
			return React.createElement(
				"div",
				{ className: "SHOPPING_CART" },
				React.createElement(
					"div",
					{ className: "header" },
					React.createElement(
						"p",
						null,
						"购物车总共有： ",
						React.createElement(
							"span",
							null,
							"1"
						),
						" 件商品"
					),
					React.createElement(
						"div",
						{ className: "delete" },
						React.createElement(
							"a",
							{ href: "" },
							React.createElement("img", { src: "img/delete.png" }),
							React.createElement(
								"p",
								null,
								"删除"
							)
						)
					)
				),
				this.state.items.map(function (item) {
					return React.createElement(
						"div",
						{ className: "item" },
						React.createElement("img", { className: "thumbnail", src: "img/thumbnail/" + item.id + ".jpg" }),
						React.createElement(
							"p",
							{ className: "name" },
							item.name
						),
						React.createElement(
							"p",
							{ className: "price" },
							"￥",
							item.price.toFixed(2)
						),
						React.createElement(
							"div",
							{ className: "counter" },
							React.createElement(
								"p",
								{ className: "counter1" },
								"-"
							),
							React.createElement(
								"p",
								{ className: "counter2" },
								"1"
							),
							React.createElement(
								"p",
								{ className: "counter3" },
								"+"
							)
						)
					);
				}),
				React.createElement("div", { className: "footerShadow" }),
				React.createElement(
					"div",
					{ className: "footer" },
					React.createElement(
						"a",
						{ href: "javascript:history.go(-1);", className: "back" },
						React.createElement("img", { src: "img/back.png" })
					),
					React.createElement(
						"p",
						{ className: "discount" },
						"已优惠：￥0.00"
					),
					React.createElement(
						"p",
						{ className: "sum" },
						"总计：￥178.00"
					),
					React.createElement(
						"a",
						{ className: "pay", href: "" },
						"去结算"
					)
				)
			);
		}
	}]);

	return ShoppingCart;
}(React.Component);

exports.ShoppingCart = ShoppingCart;

},{"../common.jsx":1}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Signin = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Notice = require('./Notice.jsx');

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
			fetch('/login', {
				method: 'POST',
				headers: {
					// 'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(self.state.user)
			}).then(function (res) {
				return res.text();
			}).then(function (data) {
				if (data === 'true') {
					self.props.act({
						type: 'ALERT',
						text: '登录成功！'
					});
					self.props.act({
						type: 'LOGIN',
						user: self.state.user
					});
				} else {
					self.props.act({
						type: 'ALERT',
						text: '您输入的用户名或密码有误！'
					});
				}
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
					React.createElement('img', { className: 'grass', src: 'img/grass1.png' }),
					React.createElement(
						'div',
						{ className: 'outer-round' },
						React.createElement(
							'div',
							{ className: 'logo' },
							React.createElement('img', { src: 'img/kiwifruit.png' })
						),
						React.createElement(
							'div',
							{ className: 'word' },
							'多利农庄'
						)
					)
				),
				React.createElement(
					'form',
					null,
					React.createElement('input', { type: 'text', name: 'user_id', placeholder: '手机号/邮箱', onChange: this.setUserID.bind(this) }),
					React.createElement('br', null),
					React.createElement('input', { type: 'password', name: 'password', placeholder: '密码', onChange: this.setPassword.bind(this) }),
					React.createElement('br', null)
				),
				React.createElement(
					'a',
					{ className: 'login', onClick: this.login.bind(this) },
					'登录'
				),
				React.createElement(
					'div',
					{ className: 'options' },
					React.createElement(
						'p',
						null,
						React.createElement(
							'a',
							{ href: '#/signup' },
							'注册账号'
						),
						React.createElement(
							'span',
							null,
							'|'
						),
						React.createElement(
							'a',
							{ href: 'retrive_password.html' },
							'忘记密码'
						)
					)
				)
			);
		}
	}]);

	return Signin;
}(React.Component);

exports.Signin = Signin;

},{"./Notice.jsx":9}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Swiper = function (_React$Component) {
	_inherits(Swiper, _React$Component);

	function Swiper(props) {
		_classCallCheck(this, Swiper);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Swiper).call(this, props));

		var self = _this;
		_this.$trainOffset = 0;
		_this.$currentOne = 0;
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
			var self = this;
			var _Swiper = React.findDOMNode(self.refs.Swiper);

			this.$width = Number(document.defaultView.getComputedStyle(_Swiper).width.replace(/px/, ''));
			window.addEventListener('resize', function () {
				self.$width = Number(document.defaultView.getComputedStyle(React.findDOMNode(self.refs.Swiper)).width.replace(/px/, ''));
			});
			setInterval(function () {
				if (self.$currentOne < self.props.items.length - 1) {
					self.$currentOne++;
				} else {
					self.$currentOne = 0;
				};
				self.toItem(self.$currentOne);
			}, 3000);
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
					onTouchStart: this.handleTouchStart.bind(this),
					onTouchMove: this.handleTouchMove.bind(this),
					onTouchEnd: this.handleTouchEnd.bind(this) },
				React.createElement(
					'ul',
					{ className: 'train', style: this.state.trainStyle },
					this.props.items.map(function (elem) {
						return React.createElement(
							'li',
							{ className: 'item', style: self.state.itemStyle },
							React.createElement('img', { src: elem })
						);
					})
				),
				React.createElement(
					'ul',
					{ className: 'pagination', ref: 'pagination' },
					this.props.items.map(function (elem, i) {
						return React.createElement('li', { className: i === self.state.currentOne ? 'dot active' : 'dot' });
					})
				),
				'}'
			);
		}
	}]);

	return Swiper;
}(React.Component);

exports.Swiper = Swiper;

},{}],15:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reducer = require('./reducers/reducer.jsx');

var _App = require('./components/App.jsx');

var _Item = require('./components/Item.jsx');

var _CommentBox = require('./components/CommentBox.jsx');

var _ConfirmOrder = require('./components/ConfirmOrder.jsx');

var _Navbar = require('./components/Navbar.jsx');

var _Notice = require('./components/Notice.jsx');

var _NoticePretty = require('./components/NoticePretty.jsx');

var _Signin = require('./components/Signin.jsx');

var _Signup = require('./components/Signup.jsx');

var _Member = require('./components/Member.jsx');

var _Home = require('./components/Home.jsx');

var _ShoppingCart = require('./components/ShoppingCart.jsx');

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
				React.createElement(_NoticePretty.NoticePretty, { notice: this.props.notice }),
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

},{"./components/App.jsx":2,"./components/CommentBox.jsx":3,"./components/ConfirmOrder.jsx":4,"./components/Home.jsx":5,"./components/Item.jsx":6,"./components/Member.jsx":7,"./components/Navbar.jsx":8,"./components/Notice.jsx":9,"./components/NoticePretty.jsx":10,"./components/ShoppingCart.jsx":11,"./components/Signin.jsx":12,"./components/Signup.jsx":13,"./reducers/reducer.jsx":17}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.notice = undefined;

var _common = require('../common.jsx');

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

},{"../common.jsx":1}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.$$reducer = undefined;

var _redux = require('redux');

var _user = require('./user.jsx');

var _shoppingCart = require('./shoppingCart.jsx');

var _notice = require('./notice.jsx');

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

var $$reducer = (0, _redux.combineReducers)({ user: _user.user, shoppingCart: _shoppingCart.shoppingCart, notice: _notice.notice });

exports.$$reducer = $$reducer;

},{"./notice.jsx":16,"./shoppingCart.jsx":18,"./user.jsx":19,"redux":26}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.shoppingCart = undefined;

var _common = require('../common.jsx');

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

},{"../common.jsx":1}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.user = undefined;

var _common = require('../common.jsx');

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

},{"../common.jsx":1}],20:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
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

},{}],21:[function(require,module,exports){
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
},{"./compose":24}],22:[function(require,module,exports){
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
},{}],23:[function(require,module,exports){
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
},{"./createStore":25,"./utils/warning":27,"_process":20,"lodash/isPlainObject":31}],24:[function(require,module,exports){
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
},{}],25:[function(require,module,exports){
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
},{"lodash/isPlainObject":31,"symbol-observable":32}],26:[function(require,module,exports){
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
},{"./applyMiddleware":21,"./bindActionCreators":22,"./combineReducers":23,"./compose":24,"./createStore":25,"./utils/warning":27,"_process":20}],27:[function(require,module,exports){
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
},{}],28:[function(require,module,exports){
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

},{}],29:[function(require,module,exports){
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

},{}],30:[function(require,module,exports){
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

},{}],31:[function(require,module,exports){
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

},{"./_getPrototype":28,"./_isHostObject":29,"./isObjectLike":30}],32:[function(require,module,exports){
(function (global){
/* global window */
'use strict';

module.exports = require('./ponyfill')(global || window || this);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./ponyfill":33}],33:[function(require,module,exports){
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

},{}]},{},[15]);
