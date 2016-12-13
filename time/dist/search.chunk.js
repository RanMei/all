webpackJsonp([4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _config = __webpack_require__(1);

	__webpack_require__(41);

	__webpack_require__(65);

	var _MyHeader = __webpack_require__(43);

	var MyHeader = _interopRequireWildcard(_MyHeader);

	var _Focus = __webpack_require__(47);

	var Focus = _interopRequireWildcard(_Focus);

	var _BackToTop = __webpack_require__(51);

	var BackToTop = _interopRequireWildcard(_BackToTop);

	var _MyFooter = __webpack_require__(55);

	var MyFooter = _interopRequireWildcard(_MyFooter);

	var _Showcase = __webpack_require__(66);

	var _Showcase2 = _interopRequireDefault(_Showcase);

	var _store = __webpack_require__(32);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	Vue.component('my-header', MyHeader);
	Vue.component('focus', Focus);
	Vue.component('back-to-top', BackToTop);
	Vue.component('my-footer', MyFooter);

	Vue.component('showcase', _Showcase2.default);

	new Vue({
		el: '#root',
		store: _store.store,
		data: {
			DIR: _config.DIR
		},
		mounted: function mounted() {
			var self = this;
			self.$store.dispatch('GET_ITEMS');
		},
		methods: {
			pick: function pick(n) {
				this.current = n;
			}
		}
	});

/***/ },

/***/ 65:
41,

/***/ 66:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(67);
	__vue_script__ = __webpack_require__(68);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\components\\Showcase.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(69);
	module.exports = __vue_script__ || {};
	if (module.exports.__esModule) module.exports = module.exports.default;
	var __vue_options__ = typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports;
	if (__vue_template__) {
	  __vue_options__.template = __vue_template__;
	}
	if (!__vue_options__.computed) __vue_options__.computed = {};
	Object.keys(__vue_styles__).forEach(function (key) {
	  var module = __vue_styles__[key];
	  __vue_options__.computed[key] = function () {
	    return module;
	  };
	});
	if (false) {
	  (function () {
	    module.hot.accept();
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    var id = "_v-1d2a37f9/Showcase.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 67:
41,

/***/ 68:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: ['items'],
		computed: {
			DIR: function DIR() {
				return this.$root.$data.DIR;
			}
		}
	};

/***/ },

/***/ 69:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Showcase\" _v-1d2a37f9=\"\">\n\t<a class=\"item__\" v-for=\"a in items\" :href=\" DIR.root+'/item.html?id='+a.id \" _v-1d2a37f9=\"\">\n\t\t<img class=\"thumb\" _v-1d2a37f9=\"\">\n\t\t<p class=\"price\" _v-1d2a37f9=\"\">￥{{a.price}}</p>\n\t\t<p class=\"name\" _v-1d2a37f9=\"\">{{a.name||'--'}}</p>\n\t</a>\n</div>\n";

/***/ }

});