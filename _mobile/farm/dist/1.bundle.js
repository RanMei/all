webpackJsonp([1],{

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.ShoppingCartContainer = undefined;

	var _index = __webpack_require__(2);

	var _ShoppingCart = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../components/ShoppingCart.jsx\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

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

/***/ }

});