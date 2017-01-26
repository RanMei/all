webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(82);


/***/ },

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(3);

	var _vue2 = _interopRequireDefault(_vue);

	var _store = __webpack_require__(28);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(2);


	new _vue2.default({
		el: '#root',
		store: _store.store,
		components: {
			App: __webpack_require__(83)
		},
		template: '<app></app>'
	});

/***/ },

/***/ 83:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};

	/* script */
	__vue_exports__ = __webpack_require__(84);

	/* template */
	var __vue_template__ = __webpack_require__(85);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}

	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;

	module.exports = __vue_exports__;

/***/ },

/***/ 84:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
		components: {
			TopbarBlack: __webpack_require__(43),
			MyHeader: __webpack_require__(56),
			MyFooter: __webpack_require__(60),
			BackToTop: __webpack_require__(52),
			Home: __webpack_require__(73)
		},
		computed: {
			dir: function dir() {
				return this.$store.state.base.DIR;
			},
			items: function items() {
				return this.$store.state.items;
			}
		}
	};

/***/ },

/***/ 85:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "id": "root"
	    }
	  }, [_c('back-to-top'), _vm._v(" "), _c('topbar-black'), _vm._v(" "), _c('my-header', {
	    attrs: {
	      "dir": _vm.dir
	    }
	  }), _vm._v(" "), _c('home', {
	    attrs: {
	      "dir": _vm.dir
	    }
	  }), _vm._v(" "), _c('my-footer')], 1)
	},staticRenderFns: []}

/***/ }

});