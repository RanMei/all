webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _config = __webpack_require__(1);

	__webpack_require__(41);

	__webpack_require__(42);

	var _MyHeader = __webpack_require__(43);

	var MyHeader = _interopRequireWildcard(_MyHeader);

	var _Focus = __webpack_require__(47);

	var Focus = _interopRequireWildcard(_Focus);

	var _BackToTop = __webpack_require__(51);

	var BackToTop = _interopRequireWildcard(_BackToTop);

	var _MyFooter = __webpack_require__(55);

	var MyFooter = _interopRequireWildcard(_MyFooter);

	var _store = __webpack_require__(32);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	Vue.component('my-header', MyHeader);
	Vue.component('focus', Focus);
	Vue.component('back-to-top', BackToTop);
	Vue.component('my-footer', MyFooter);

	new Vue({
		el: '#root',
		store: _store.store,
		data: {
			DIR: _config.DIR
		},
		methods: {
			pick: function pick(n) {
				this.current = n;
			}
		}
	});

/***/ },

/***/ 42:
41

});