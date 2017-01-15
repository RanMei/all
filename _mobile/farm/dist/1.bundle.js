webpackJsonp([1],{

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.ShoppingCartContainer = undefined;

	var _index = __webpack_require__(4);

	var _ShoppingCart = __webpack_require__(73);

	function act(action) {
		_index.$$store.dispatch(action);
	}

	var ShoppingCartContainer = ReactRedux.connect(function (state) {
		return {
			items: state.shoppingCart,
			act: act
		};
	})(_ShoppingCart.ShoppingCart);

	exports.ShoppingCartContainer = ShoppingCartContainer;

/***/ },

/***/ 73:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.ShoppingCart = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Navbar = __webpack_require__(14);

	var _API = __webpack_require__(23);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(74);

	var ShoppingCart = function (_React$Component) {
		_inherits(ShoppingCart, _React$Component);

		function ShoppingCart(props) {
			_classCallCheck(this, ShoppingCart);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ShoppingCart).call(this, props));

			console.log('<ShoppingCart/> constructing');
			return _this;
		}

		_createClass(ShoppingCart, [{
			key: 'componentWillMount',
			value: function componentWillMount() {}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(newProps) {}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate() {}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				sessionStorage.shoppingCart = JSON.stringify(this.props.items);
			}
			// computed

		}, {
			key: 'allChecked',
			value: function allChecked() {
				for (var i = 0; i < this.props.items.length; i++) {
					if (!this.props.items[i].selected) {
						return false;
					};
				};
				return true;
			}
		}, {
			key: 'getTotalPrice',
			value: function getTotalPrice() {
				var totalPrice = 0;
				for (var i = 0; i < this.props.items.length; i++) {
					if (this.props.items[i].selected === true) {
						totalPrice += this.props.items[i].price * this.props.items[i].quantity;
					};
				}
				return totalPrice;
			}
		}, {
			key: 'totalQuantity',
			value: function totalQuantity(items) {
				var totalQuantity = 0;
				for (var i = 0; i < items.length; i++) {
					if (items[i].selected === true) {
						totalQuantity++;
					};
				}
				return totalQuantity;
			}
			// methods

		}, {
			key: 'checkAll',
			value: function checkAll() {
				if (this.allChecked()) {
					_API.API.UNCHECK_ALL();
				} else {
					_API.API.CHECK_ALL();
				};
			}
		}, {
			key: 'checkThis',
			value: function checkThis(i) {
				_API.API.CHECK_THIS(i);
			}
		}, {
			key: 'minusOne',
			value: function minusOne(i) {
				if (this.props.items[i].quantity > 1) {
					this.props.act({
						type: 'MINUS',
						i: i
					});
				};
			}
		}, {
			key: 'plusOne',
			value: function plusOne(i) {
				this.props.act({
					type: 'PLUS',
					i: i
				});
			}
		}, {
			key: 'remove',
			value: function remove(i) {
				if (this.props.items.length === 0) {
					_API.API.ALERT('您的购物车是空的！');
				} else {
					_API.API.CONFIRM('确认删除选中的商品吗？');
				}
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;

				//console.log(React);
				//console.log(Function);
				console.debug('<ShoppingCart/> rendering');
				return React.createElement(
					'div',
					{ className: 'SHOPPING_CART' },
					React.createElement(
						'div',
						{ className: 'header c-topbar' },
						'购物车',
						React.createElement(
							'span',
							{ className: 'remove', onClick: this.remove.bind(this) },
							'删除'
						)
					),
					this.props.items.length === 0 ? React.createElement(
						'p',
						{ className: '_info' },
						'您的购物车是空的'
					) : null,
					this.props.items.map(function (item, i) {
						return React.createElement(
							'div',
							{ className: 'item' },
							React.createElement(
								'div',
								{ className: 'part part-left' },
								React.createElement(
									'div',
									{ className: item.selected ? 'circle active' : 'circle', onClick: _this2.checkThis.bind(_this2, i) },
									React.createElement('i', { className: 'fa fa-check' })
								)
							),
							React.createElement('img', { className: 'part thumbnail', src: "img/items/" + item.id + "/t.jpg" }),
							React.createElement(
								'div',
								{ className: 'part part-3' },
								React.createElement(
									'p',
									{ className: 'name' },
									item.name
								),
								React.createElement(
									'p',
									{ className: 'spec' },
									item.spec
								),
								React.createElement(
									'div',
									{ className: 'counter' },
									React.createElement(
										'p',
										{ className: 'counter1', onClick: _this2.minusOne.bind(_this2, i) },
										'-'
									),
									React.createElement(
										'p',
										{ className: 'counter2' },
										item.quantity
									),
									React.createElement(
										'p',
										{ className: 'counter3', onClick: _this2.plusOne.bind(_this2, i) },
										'+'
									)
								)
							),
							React.createElement(
								'div',
								{ className: 'part part-4' },
								React.createElement(
									'p',
									{ className: 'price' },
									'￥',
									item.price.toFixed(2)
								),
								React.createElement(
									'p',
									{ className: 'quantity' },
									'x',
									item.quantity
								)
							)
						);
					}),
					React.createElement(
						'div',
						{ className: 'footer' },
						React.createElement(
							'div',
							{ className: 'content__' },
							React.createElement(
								'div',
								{ className: this.allChecked() ? 'circle active' : 'circle', onClick: this.checkAll.bind(this) },
								React.createElement('i', { className: 'fa fa-check' })
							),
							React.createElement(
								'p',
								{ className: 'text-all' },
								'全选'
							),
							React.createElement(
								'a',
								{ className: this.totalQuantity(this.props.items) > 0 ? 'pay' : 'pay disabled', href: '' },
								'去结算(',
								this.totalQuantity(this.props.items),
								')'
							),
							React.createElement(
								'p',
								{ className: 'sum' },
								'总计：',
								React.createElement(
									'span',
									{ className: 'money' },
									'￥',
									this.getTotalPrice().toFixed(2)
								)
							)
						)
					),
					React.createElement(_Navbar.Navbar, { name: 'shoppingCart' })
				);
			}
		}]);

		return ShoppingCart;
	}(React.Component);

	ShoppingCart.defaultProps = {
		items: []
	};

	exports.ShoppingCart = ShoppingCart;

/***/ },

/***/ 74:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(75);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(18)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./ShoppingCart.less", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/less-loader/index.js!./../../../../node_modules/postcss-loader/index.js!./ShoppingCart.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 75:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(17)();
	// imports


	// module
	exports.push([module.id, ".SHOPPING_CART {\n  background: #ECEBEB;\n}\n.SHOPPING_CART .header {\n  margin-bottom: .20rem;\n}\n.SHOPPING_CART .header .remove {\n  float: right;\n}\n.SHOPPING_CART ._info {\n  font-size: 0.28rem;\n  color: #999999;\n  text-align: center;\n}\n.SHOPPING_CART .item {\n  box-sizing: border-box;\n  position: relative;\n  width: 100%;\n  padding: 0.15rem;\n  margin-bottom: .20rem;\n  background: white;\n  overflow: hidden;\n}\n.SHOPPING_CART .item .part {\n  float: left;\n}\n.SHOPPING_CART .item .part .circle {\n  width: 0.3rem;\n  height: 0.3rem;\n  margin-top: 0.7rem;\n  border-radius: 1rem;\n  border: 1px solid #dfdfdf;\n  font-size: 0.1rem;\n  text-align: center;\n  line-height: 0.3rem;\n  color: white;\n}\n.SHOPPING_CART .item .part .circle.active {\n  background: #0f88eb;\n  border-color: #0f88eb;\n}\n.SHOPPING_CART .item .part-left {\n  margin-right: 0.15rem;\n}\n.SHOPPING_CART .item .thumbnail {\n  width: 1.90rem;\n  height: 1.90rem;\n  margin-right: 0.15rem;\n}\n.SHOPPING_CART .item .thumbnail img {\n  width: 100%;\n}\n.SHOPPING_CART .item .part-3 {\n  position: relative;\n  width: 2.2rem;\n  height: 1.9rem;\n}\n.SHOPPING_CART .item .part-3 .name {\n  width: 100%;\n  height: 0.6rem;\n  font-size: 0.22rem;\n  line-height: 0.3rem;\n  overflow: hidden;\n}\n.SHOPPING_CART .item .part-3 .spec {\n  font-size: 0.22rem;\n  color: #999999;\n}\n.SHOPPING_CART .item .part-3 .counter {\n  position: absolute;\n  left: 0;\n  bottom: 0.3rem;\n}\n.SHOPPING_CART .item .part-3 .counter1 {\n  width: .30rem;\n  height: .30rem;\n  border: 1px solid #dfdfdf;\n  font-size: 0.3rem;\n  line-height: .30rem;\n  text-align: center;\n  float: left;\n  color: grey;\n}\n.SHOPPING_CART .item .part-3 .counter2 {\n  width: 1rem;\n  height: .30rem;\n  border-top: 1px solid #dfdfdf;\n  border-bottom: 1px solid #dfdfdf;\n  font-size: 0.2rem;\n  line-height: .30rem;\n  text-align: center;\n  float: left;\n}\n.SHOPPING_CART .item .part-3 .counter3 {\n  width: .30rem;\n  height: .30rem;\n  border: 1px solid #dfdfdf;\n  font-size: 0.3rem;\n  line-height: .30rem;\n  text-align: center;\n  float: left;\n}\n.SHOPPING_CART .item .part-4 {\n  width: 2rem;\n  float: right;\n  text-align: right;\n}\n.SHOPPING_CART .item .part-4 .price {\n  color: #0f88eb;\n  font-size: 0.3rem;\n}\n.SHOPPING_CART .item .part-4 .quantity {\n  color: #999999;\n  font-size: 0.3rem;\n}\n.SHOPPING_CART .footer {\n  position: relative;\n  width: 100%;\n  height: 1rem;\n}\n.SHOPPING_CART .footer .content__ {\n  box-sizing: border-box;\n  position: fixed;\n  left: 0;\n  bottom: 1rem;\n  width: 100%;\n  height: 1rem;\n  border-top: 1px solid #dfdfdf;\n  border-bottom: 1px solid #dfdfdf;\n  background: white;\n}\n.SHOPPING_CART .footer .content__ .circle {\n  float: left;\n  width: 0.3rem;\n  height: 0.3rem;\n  margin-left: 0.15rem;\n  margin-top: 0.3rem;\n  margin-right: 0.2rem;\n  border-radius: 1rem;\n  border: 1px solid #dfdfdf;\n  font-size: 0.1rem;\n  text-align: center;\n  line-height: 0.3rem;\n  color: white;\n}\n.SHOPPING_CART .footer .content__ .circle.active {\n  background: #0f88eb;\n  border-color: #0f88eb;\n}\n.SHOPPING_CART .footer .content__ .text-all {\n  float: left;\n  line-height: 1rem;\n  font-size: 0.3rem;\n}\n.SHOPPING_CART .footer .content__ .back {\n  position: absolute;\n  width: 1rem;\n  height: 1rem;\n  border-right: 1px solid black;\n  overflow: hidden;\n  display: block;\n}\n.SHOPPING_CART .footer .content__ .back img {\n  width: 0.19rem;\n  height: 0.37rem;\n  margin: auto;\n  margin-top: .30rem;\n  display: block;\n}\n.SHOPPING_CART .footer .content__ .discount {\n  position: absolute;\n  left: 1.25rem;\n  top: .15rem;\n  color: grey;\n  font-size: 0.2rem;\n}\n.SHOPPING_CART .footer .content__ .sum {\n  float: right;\n  padding-right: 0.15rem;\n  font-size: 0.3rem;\n  line-height: 1rem;\n}\n.SHOPPING_CART .footer .content__ .sum .money {\n  color: #0f88eb;\n}\n.SHOPPING_CART .footer .content__ .pay {\n  float: right;\n  height: 100%;\n  padding: 0 0.2rem;\n  background: #0f88eb;\n  color: white;\n  text-align: center;\n  font-size: 0.32rem;\n  line-height: 1rem;\n}\n.SHOPPING_CART .footer .content__ .pay.disabled {\n  background: #999999 !important;\n}\n", ""]);

	// exports


/***/ }

});