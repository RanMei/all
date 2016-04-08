(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
			);
		}
	}]);

	return CommentBox;
}(React.Component);

exports.CommentBox = CommentBox;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
			function renderItem(x, i) {
				return React.createElement(
					"li",
					{ className: "item", key: i, style: ItemStyle },
					React.createElement(
						"ul",
						{ style: { overflow: 'hidden' } },
						React.createElement(
							"li",
							{ style: LiStyle },
							i,
							React.createElement("input", { type: "checkbox" })
						),
						React.createElement(
							"li",
							{ className: "name", style: LiStyle },
							x.name
						),
						React.createElement(
							"li",
							{ className: "price", style: LiStyle },
							"￥",
							x.price
						),
						React.createElement(
							"li",
							{ className: "counter", style: LiStyle },
							React.createElement(
								"button",
								{ onClick: that.props.minusOne.bind(that, i) },
								"-"
							),
							React.createElement(
								"span",
								{ className: "quantity" },
								x.quantity
							),
							React.createElement(
								"button",
								{ onClick: that.props.plusOne.bind(that, i) },
								"+"
							)
						),
						React.createElement(
							"li",
							{ className: "subtotal", style: LiStyle },
							"￥",
							x.price * x.quantity
						),
						React.createElement(
							"li",
							{ className: "operations" },
							React.createElement(
								"button",
								{ onClick: that.props.remove.bind(that, i) },
								"删除"
							)
						)
					)
				);
			};
			return React.createElement(
				"div",
				null,
				React.createElement(
					"ul",
					null,
					that.props.items.map(renderItem)
				)
			);
		}
	}]);

	return ItemList;
}(React.Component);

var ShoppingCart = function (_React$Component2) {
	_inherits(ShoppingCart, _React$Component2);

	function ShoppingCart(props) {
		_classCallCheck(this, ShoppingCart);

		var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(ShoppingCart).call(this, props));

		_this2.state = {
			items: [{
				name: "猕猴桃",
				price: 100,
				quantity: 1
			}, {
				name: "草莓",
				price: 200,
				quantity: 1
			}]
		};
		return _this2;
	}

	_createClass(ShoppingCart, [{
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
		key: "remove",
		value: function remove(i) {
			this.state.items.splice(i, 1);
			this.setState({
				items: this.state.items
			});
		}
	}, {
		key: "getTotalPrice",
		value: function getTotalPrice() {
			var totalPrice = 0;
			for (var i = 0; i < this.state.items.length; i++) {
				totalPrice += this.state.items[i].price * this.state.items[i].quantity;
			}
			return totalPrice;
		}
	}, {
		key: "render",
		value: function render() {
			//console.log(React);
			//console.log(Function);
			return React.createElement(
				"div",
				{ className: "shoppingCart container" },
				React.createElement(ItemList, {
					items: this.state.items,
					plusOne: this.plusOne.bind(this),
					minusOne: this.minusOne.bind(this),
					remove: this.remove.bind(this) }),
				React.createElement(
					"p",
					null,
					"￥",
					this.getTotalPrice()
				),
				React.createElement(
					"button",
					{ onClick: this.plusOne.bind(this, 1) },
					"plus"
				)
			);
		}
	}]);

	return ShoppingCart;
}(React.Component);

exports.ShoppingCart = ShoppingCart;

},{}],3:[function(require,module,exports){
'use strict';

var _CommentBox = require('./CommentBox.jsx');

var _ShoppingCart = require('./ShoppingCart.jsx');

ReactDOM.render(React.createElement(_CommentBox.CommentBox, null), document.getElementById('CommentBox'));

ReactDOM.render(React.createElement(_ShoppingCart.ShoppingCart, null), document.getElementById('ShoppingCart'));

},{"./CommentBox.jsx":1,"./ShoppingCart.jsx":2}]},{},[3]);
