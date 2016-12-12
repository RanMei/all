webpackJsonp([2],{

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(9);
	__vue_script__ = __webpack_require__(10);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\lib\\Card.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(11);
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
	    var id = "_v-0dc2bc5e/Card.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 9:
1,

/***/ 10:
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

/***/ 11:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"space\" _v-0dc2bc5e=\"\">\n\t<div class=\"flipper\" :class=\"state\" @click=\"handleClick\" _v-0dc2bc5e=\"\">\n\t\t<div class=\"face front\" _v-0dc2bc5e=\"\">\n\t\t\t<p _v-0dc2bc5e=\"\">front</p>\n\t\t\t<img :src=\" '../../img/icons/iron_man.png' \" _v-0dc2bc5e=\"\">\n\t\t</div>\n\t\t<div class=\"face back\" _v-0dc2bc5e=\"\">\n\t\t\t<p _v-0dc2bc5e=\"\">back</p>\n\t\t\t<img :src=\" '../../img/icons/storm-trooper.png' \" _v-0dc2bc5e=\"\">\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },

/***/ 44:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(45);
	__vue_script__ = __webpack_require__(46);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\lib\\Orientation.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(47);
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
	    var id = "_v-0fac5e1c/Orientation.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 45:
1,

/***/ 46:
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
				console.log('');
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

					var nextX = this.rotateX + e.rotationRate.alpha * 3;
					if (nextX >= 45) {
						nextX = 45;
					} else if (nextX <= -45) {
						nextX = -45;
					}
					this.rotateX = nextX;

					var nextY = this.rotateY + e.rotationRate.beta * 3;
					if (nextY >= 45) {
						nextY = 45;
					} else if (nextY <= -45) {
						nextY = -45;
					}
					this.rotateY = nextY;
				}
			}
		}
	};

/***/ },

/***/ 47:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"space\" _v-0fac5e1c=\"\">\n\t<div class=\"square\" :class=\" recalibrating?'recalibrating':'' \" @click=\"recalibrate\" :style=\" 'transform: rotateX('+rotateX+'deg) rotateY('+rotateY+'deg);-webkit-transform:rotateX('+rotateX+'deg) rotateY('+rotateY+'deg);'  \" _v-0fac5e1c=\"\">\n\t\t{{rotationRate.alpha}}<br _v-0fac5e1c=\"\">\n\t\t{{rotateY}}\n\t</div>\n</div>\n";

/***/ }

});