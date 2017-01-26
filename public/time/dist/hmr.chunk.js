webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(69);


/***/ },

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _store = __webpack_require__(28);

	__webpack_require__(2);

	new Vue({
		el: '#root',
		store: _store.store,
		components: {
			App: __webpack_require__(70)
		},
		template: '<app></app>'
	});

/***/ },

/***/ 70:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};

	/* styles */
	__webpack_require__(71);

	/* script */
	__vue_exports__ = __webpack_require__(72);

	/* template */
	var __vue_template__ = __webpack_require__(81);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}

	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	__vue_options__._scopeId = "data-v-c682b5c8";

	module.exports = __vue_exports__;

/***/ },

/***/ 71:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 72:
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
			dir: function dir() {},
			items: function items() {}
		},
		mounted: function mounted() {}
	};

/***/ },

/***/ 81:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "id": "root"
	    }
	  }, [_c('back-to-top'), _vm._v(" "), _c('topbar-black'), _vm._v(" "), _c('my-footer')], 1)
	},staticRenderFns: []}

/***/ }

});