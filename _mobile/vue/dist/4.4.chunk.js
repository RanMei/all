webpackJsonp([4],{

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(25);
	__vue_script__ = __webpack_require__(26);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\lib\\3dCube.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(27);
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
	    var id = "_v-5c3a5813/3dCube.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 25:
1,

/***/ 26:
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

/***/ 27:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"CubeWhite\" _v-5c3a5813=\"\">\n\t<div class=\"space3d\" _v-5c3a5813=\"\">\n\t\t<div class=\"cube\" :class=\" recalibrating?'recalibrating':'' \" @click=\"recalibrate\" :style=\" 'transform: rotateX('+rotateX+'deg) rotateY('+rotateY+'deg);-webkit-transform:rotateX('+rotateX+'deg) rotateY('+rotateY+'deg);'  \" _v-5c3a5813=\"\">\n\t\t\t<div class=\"face face-front\" _v-5c3a5813=\"\"></div>\n\t\t\t<div class=\"face face-top\" _v-5c3a5813=\"\"></div>\n\t\t\t<div class=\"face face-bottom\" _v-5c3a5813=\"\"></div>\n\t\t\t<div class=\"face face-left\" _v-5c3a5813=\"\"></div>\n\t\t\t<div class=\"face face-right\" _v-5c3a5813=\"\"></div>\n\t\t\t<div class=\"face face-back\" _v-5c3a5813=\"\"></div>\n\t\t</div>\n\t</div>\n</div>\n";

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
	    var id = "_v-3eb24353/Orientation.vue";
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

	module.exports = "\n<div class=\"space\" _v-3eb24353=\"\">\n\t<div class=\"square\" :class=\" recalibrating?'recalibrating':'' \" @click=\"recalibrate\" :style=\" 'transform: rotateX('+rotateX+'deg) rotateY('+rotateY+'deg);-webkit-transform:rotateX('+rotateX+'deg) rotateY('+rotateY+'deg);'  \" _v-3eb24353=\"\">\n\t\t{{rotationRate.alpha}}<br _v-3eb24353=\"\">\n\t\t{{rotateY}}\n\t</div>\n</div>\n";

/***/ },

/***/ 71:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(72);
	__vue_script__ = __webpack_require__(73);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\canvas\\Heart.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(74);
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
	    var id = "_v-080b5318/Heart.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 72:
1,

/***/ 73:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
			value: true
	});
	exports.default = {
			data: function data() {
					return {};
			},
			mounted: function mounted() {
					window.requestAnimationFrame = window.__requestAnimationFrame || window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function () {
							return function (callback, element) {
									var lastTime = element.__lastTime;
									if (lastTime === undefined) {
											lastTime = 0;
									}
									var currTime = Date.now();
									var timeToCall = Math.max(1, 33 - (currTime - lastTime));
									window.setTimeout(callback, timeToCall);
									element.__lastTime = currTime + timeToCall;
							};
					}();
					window.isDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test((navigator.userAgent || navigator.vendor || window.opera).toLowerCase());
					var loaded = false;
					var init = function init() {
							if (loaded) return;
							loaded = true;
							var mobile = window.isDevice;
							var koef = 1;
							var canvas = document.getElementById('heart');
							var ctx = canvas.getContext('2d');
							var width = canvas.width = koef * innerWidth;
							var height = canvas.height = koef * innerHeight;
							var rand = Math.random;
							ctx.fillStyle = "rgba(0,0,0,1)";
							ctx.fillRect(0, 0, width, height);

							var heartPosition = function heartPosition(rad) {
									return [Math.pow(Math.sin(rad), 3), -(15 * Math.cos(rad) - 5 * Math.cos(2 * rad) - 2 * Math.cos(3 * rad) - Math.cos(4 * rad))];
							};
							var scaleAndTranslate = function scaleAndTranslate(pos, sx, sy, dx, dy) {
									return [dx + pos[0] * sx, dy + pos[1] * sy];
							};

							window.addEventListener('resize', function () {
									width = canvas.width = koef * innerWidth;
									height = canvas.height = koef * innerHeight;
									ctx.fillStyle = "rgba(0,0,0,1)";
									ctx.fillRect(0, 0, width, height);
							});

							var traceCount = mobile ? 20 : 50;
							var pointsOrigin = [];
							var i;
							var dr = mobile ? 0.3 : 0.1;
							for (i = 0; i < Math.PI * 2; i += dr) {
									pointsOrigin.push(scaleAndTranslate(heartPosition(i), 210, 13, 0, 0));
							}for (i = 0; i < Math.PI * 2; i += dr) {
									pointsOrigin.push(scaleAndTranslate(heartPosition(i), 150, 9, 0, 0));
							}for (i = 0; i < Math.PI * 2; i += dr) {
									pointsOrigin.push(scaleAndTranslate(heartPosition(i), 90, 5, 0, 0));
							}var heartPointsCount = pointsOrigin.length;

							var targetPoints = [];
							var pulse = function pulse(kx, ky) {
									for (i = 0; i < pointsOrigin.length; i++) {
											targetPoints[i] = [];
											targetPoints[i][0] = kx * pointsOrigin[i][0] + width / 2;
											targetPoints[i][1] = ky * pointsOrigin[i][1] + height / 2;
									}
							};

							function createPoints() {}

							var e = [];
							for (i = 0; i < heartPointsCount; i++) {
									var x = rand() * width;
									var y = rand() * height;
									e[i] = {
											vx: 0,
											vy: 0,
											R: 2,
											speed: rand() + 5,
											q: ~~(rand() * heartPointsCount),
											D: 2 * (i % 2) - 1,
											force: 0.2 * rand() + 0.7,
											f: "hsla(0," + ~~(40 * rand() + 60) + "%," + ~~(60 * rand() + 20) + "%,.3)",
											trace: []
									};
									for (var k = 0; k < traceCount; k++) {
											e[i].trace[k] = { x: x, y: y };
									}
							}

							var config = {
									traceK: 0.4,
									timeDelta: 0.01
							};

							var time = 0;
							var loop = function loop() {
									var n = -Math.cos(time);
									pulse((1 + n) * .5, (1 + n) * .5);
									time += (Math.sin(time) < 0 ? 9 : n > 0.8 ? .2 : 1) * config.timeDelta;
									ctx.fillStyle = "rgba(0,0,0,.1)";
									ctx.fillRect(0, 0, width, height);
									for (i = e.length; i--;) {
											var u = e[i];
											var q = targetPoints[u.q];
											var dx = u.trace[0].x - q[0];
											var dy = u.trace[0].y - q[1];
											var length = Math.sqrt(dx * dx + dy * dy);
											if (10 > length) {
													if (0.95 < rand()) {
															u.q = ~~(rand() * heartPointsCount);
													} else {
															if (0.99 < rand()) {
																	u.D *= -1;
															}
															u.q += u.D;
															u.q %= heartPointsCount;
															if (0 > u.q) {
																	u.q += heartPointsCount;
															}
													}
											}
											u.vx += -dx / length * u.speed;
											u.vy += -dy / length * u.speed;
											u.trace[0].x += u.vx;
											u.trace[0].y += u.vy;
											u.vx *= u.force;
											u.vy *= u.force;
											for (k = 0; k < u.trace.length - 1;) {
													var T = u.trace[k];
													var N = u.trace[++k];
													N.x -= config.traceK * (N.x - T.x);
													N.y -= config.traceK * (N.y - T.y);
											}
											ctx.fillStyle = u.f;
											for (k = 0; k < u.trace.length; k++) {
													ctx.fillRect(u.trace[k].x, u.trace[k].y, 1, 1);
											}
									}


									window.requestAnimationFrame(loop, canvas);
							};
							loop();
					};

					var s = document.readyState;
					if (s === 'complete' || s === 'loaded' || s === 'interactive') init();else document.addEventListener('DOMContentLoaded', init, false);
			}
	};

/***/ },

/***/ 74:
/***/ function(module, exports) {

	module.exports = "\n<canvas id=\"heart\" _v-080b5318=\"\"></canvas>\n";

/***/ }

});