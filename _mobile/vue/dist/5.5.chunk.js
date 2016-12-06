webpackJsonp([5],{

/***/ 20:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(21);
	__vue_script__ = __webpack_require__(22);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\components\\3dCube.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(23);
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
	    var id = "_v-f5ad1f74/3dCube.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 21:
1,

/***/ 22:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {
				rotationRate: {
					alpha: '111'
				},
				rotateX: 0,
				rotateY: 0,
				recalibrating: false
			};
		},
		created: function created() {
			var self = this;
			if (window.DeviceMotionEvent) {
				window.addEventListener('devicemotion', self.handler.bind(self), false);
			} else {
				console.log('Sorry, your browser doesn\'t support DeviceMotionEvent.');
			}
		},
		methods: {
			recalibrate: function recalibrate(e) {
				var _this = this;

				this.recalibrating = true;
				this.rotateX = 0;
				this.rotateY = 0;
				setTimeout(function () {
					_this.recalibrating = false;
				}, 1000);
			},
			handler: function handler(e) {
				if (!this.recalibrating) {
					this.rotationRate.alpha = e.rotationRate.alpha;

					var nextX = this.rotateX - e.rotationRate.alpha * 3;

					this.rotateX = nextX;

					var nextY = this.rotateY + e.rotationRate.beta * 3;

					this.rotateY = nextY;
				}
			}
		}
	};

/***/ },

/***/ 23:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"space3d\" _v-f5ad1f74=\"\">\n\t<div class=\"cube\" :class=\" recalibrating?'recalibrating':'' \" @click=\"recalibrate\" :style=\" 'transform: rotateX('+rotateX+'deg) rotateY('+rotateY+'deg);-webkit-transform:rotateX('+rotateX+'deg) rotateY('+rotateY+'deg);'  \" _v-f5ad1f74=\"\">\n\t\t<div class=\"face face-front\" _v-f5ad1f74=\"\"></div>\n\t\t<div class=\"face face-top\" _v-f5ad1f74=\"\"></div>\n\t\t<div class=\"face face-bottom\" _v-f5ad1f74=\"\"></div>\n\t\t<div class=\"face face-left\" _v-f5ad1f74=\"\"></div>\n\t\t<div class=\"face face-right\" _v-f5ad1f74=\"\"></div>\n\t\t<div class=\"face face-back\" _v-f5ad1f74=\"\"></div>\n\t</div>\n</div>\n";

/***/ }

});