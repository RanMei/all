webpackJsonp([4],{

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(17);
	__vue_script__ = __webpack_require__(18);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\components\\3d.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(19);
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
	    var id = "_v-52530720/3d.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 17:
1,

/***/ 18:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {
				state: '',
				img: {
					iron_man: 'img/iron_man.png',
					storm_trooper: 'img/storm-trooper.png'
				}
			};
		},
		mounted: function mounted() {
			var _this = this;

			document.addEventListener('keydown', function (e) {
				if (e.keyCode === 39) {
					_this.state = 'two';
				} else if (e.keyCode === 37) {
					_this.state = '';
				}
			});
		},
		methods: {
			handleClick: function handleClick() {
				this.state = this.state === '' ? 'two' : '';
			}
		}
	};

/***/ },

/***/ 19:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"space\" _v-52530720=\"\">\n\t<div class=\"flipper\" :class=\"state\" @click=\"handleClick\" _v-52530720=\"\">\n\t\t<div class=\"face front\" _v-52530720=\"\">\n\t\t\t<p _v-52530720=\"\">front</p>\n\t\t\t<img :src=\"img.iron_man\" _v-52530720=\"\">\n\t\t</div>\n\t\t<div class=\"face back\" _v-52530720=\"\">\n\t\t\t<p _v-52530720=\"\">back</p>\n\t\t\t<img :src=\"img.storm_trooper\" _v-52530720=\"\">\n\t\t</div>\n\t</div>\n</div>\n";

/***/ }

});