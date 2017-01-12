webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _config = __webpack_require__(1);

	var _MyHeader = __webpack_require__(44);

	var MyHeader = _interopRequireWildcard(_MyHeader);

	var _Focus = __webpack_require__(48);

	var Focus = _interopRequireWildcard(_Focus);

	var _BackToTop = __webpack_require__(52);

	var BackToTop = _interopRequireWildcard(_BackToTop);

	var _MyFooter = __webpack_require__(56);

	var MyFooter = _interopRequireWildcard(_MyFooter);

	var _store = __webpack_require__(32);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	__webpack_require__(42);
	__webpack_require__(60);


	Vue.component('my-header', MyHeader);
	Vue.component('focus', Focus);
	Vue.component('back-to-top', BackToTop);
	Vue.component('my-footer', MyFooter);

	new Vue({
		el: '#root',
		store: _store.store,
		components: {
			MyHeader: __webpack_require__(44).default
		},
		data: {
			DIR: _config.DIR,
			IMG: '../' + _config.IMG,
			col2: [_config.DIR.item + '?id=1602091546']
		},
		mounted: function mounted() {
			this.$store.dispatch('GET_ITEMS');
			console.log(this);
		}
	});

/***/ },

/***/ 48:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(49);
	__vue_script__ = __webpack_require__(50);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\components\\Focus.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(51);
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
	    var id = "_v-6988d3bc/Focus.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 49:
42,

/***/ 50:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			dir: {},
			items: {
				default: [0, 1, 2, 3]
			}
		},
		data: function data() {
			return {
				current: 0
			};
		},
		watch: {
			curernt: function curernt(val, prev_val) {}
		},
		methods: {
			prev: function prev() {
				if (this.current > 0) {
					this.current--;
				} else {
					this.current = 3;
				}
			},
			next: function next() {
				if (this.current < 3) {
					this.current++;
				} else {
					this.current = 0;
				}
			},
			jump: function jump(i) {
				this.current = i;
			}
		}
	};

/***/ },

/***/ 51:
/***/ function(module, exports) {

	module.exports = "\n<ul class=\"Focus wrapper\" _v-6988d3bc=\"\">\n\t<a :href=\" dir.item \" class=\"item\" v-for=\"(a,i) in items\" :class=\" i===current?'active':'' \" _v-6988d3bc=\"\">\n\t\t<li :style=\" 'background:url('+dir.img+'/focus/'+(i)+'.jpg) no-repeat center;' \" _v-6988d3bc=\"\">\n\t\t</li>\n\t</a>\n\t<ul class=\"pagination\" _v-6988d3bc=\"\">\n\t\t<div class=\"dot\" v-for=\"(b,index) in items\" :class=\" index===current?'active':'' \" @click=\"jump(index)\" _v-6988d3bc=\"\"></div>\n\t</ul>\n\t<div class=\"focus-last\" @click=\"prev\" _v-6988d3bc=\"\"><i class=\"fa fa-angle-left\" _v-6988d3bc=\"\"></i></div>\n\t<div class=\"focus-next\" @click=\"next\" _v-6988d3bc=\"\"><i class=\"fa fa-angle-right\" _v-6988d3bc=\"\"></i></div>\t\t\n</ul>\n";

/***/ },

/***/ 60:
42

});