webpackJsonp([6],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(110);


/***/ },

/***/ 110:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	var _store = __webpack_require__(28);

	new Vue({
		el: '#root',
		store: _store.store,
		components: {
			App: __webpack_require__(111)
		},
		template: '<app></app>',
		mounted: function mounted() {
			var self = this;
			self.$store.dispatch('GET_ITEMS');
		},
		methods: {}
	});

/***/ },

/***/ 111:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};

	/* script */
	__vue_exports__ = __webpack_require__(112);

	/* template */
	var __vue_template__ = __webpack_require__(113);
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

/***/ 112:
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

	exports.default = {
		components: {
			MyHeader: __webpack_require__(56),
			MyFooter: __webpack_require__(60),
			BackToTop: __webpack_require__(52),
			Signin: __webpack_require__(17)
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

/***/ 113:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "id": "root"
	    }
	  }, [_c('back-to-top'), _vm._v(" "), _c('my-header', {
	    attrs: {
	      "dir": _vm.dir
	    }
	  }), _vm._v(" "), _c('signin'), _vm._v(" "), _c('my-footer')], 1)
	},staticRenderFns: []}

/***/ }

});