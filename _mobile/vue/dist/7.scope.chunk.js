webpackJsonp([7],Array(36).concat([
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(37);
	__vue_script__ = __webpack_require__(38);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\canvas\\Scope.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(41);
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
	    var id = "_v-5cd558e7/Scope.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 37 */
74,
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Scope = __webpack_require__(39);

	exports.default = {
		mounted: function mounted() {
			new _Scope.Scope({
				el: '#scope',
				width: 400,
				height: 400
			});
		}
	};
	// </script>
	// <template>
	// <!-- Abstract Canvas Visualization -->
	// <div class="_space">
	// 	<canvas id="scope" width="400" height="400"></canvas>
	// </div>
	// </template>
	//
	// <style lang="less" scoped>
	// ._space {
	// 	width: 100%; height: 100vh;
	// 	background: black;
	// 	canvas {
	// 		display: block;
	// 		position: absolute; left: 0; top: 0; right: 0; bottom: 0;
	// 		margin: auto;
	// 		width: 60%;
	// 	}
	// }
	// @media (min-width:1000px) {
	// 	._space {
	// 		canvas {
	// 			width: 400px!important;
	// 		}
	// 	}
	// }
	// </style>
	//
	// <script>

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Scope = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Canvas2 = __webpack_require__(40);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Scope = function (_Canvas) {
		_inherits(Scope, _Canvas);

		function Scope(options) {
			_classCallCheck(this, Scope);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Scope).call(this, options));

			_this._init(options);
			return _this;
		}

		_createClass(Scope, [{
			key: 'beforePlay',
			value: function beforePlay() {
				this.c = this.el;
				this.cw = this.width;
				this.ch = this.height;
				this.mx = 0;
				this.my = 0;

				//trail
				this.trail = [];
				this.maxTrail = 200;
				this.mouseDown = false;

				this.ctx.lineWidth = .1;
				this.ctx.lineJoin = 'round';

				this.radius = 1;
				this.speed = 0.4;
				this.angle = 0;
				this.arcx = 0;
				this.arcy = 0;
				this.growRadius = true;
				this.seconds = 0;
				this.milliseconds = 0;
			}
		}, {
			key: 'rand',
			value: function rand(min, max) {
				return ~ ~(Math.random() * (max - min + 1) + min);
			}
		}, {
			key: 'hitTest',
			value: function hitTest(x1, y1, w1, h1, x2, y2, w2, h2) {
				return !(x1 + w1 < x2 || x2 + w2 < x1 || y1 + h1 < y2 || y2 + h2 < y1);
			}
		}, {
			key: 'createPoint',
			value: function createPoint(x, y) {
				this.trail.push({
					x: x,
					y: y
				});
			}
		}, {
			key: 'updateTrail',
			value: function updateTrail() {

				if (this.trail.length < this.maxTrail) {
					this.createPoint(this.arcx, this.arcy);
				}

				if (this.trail.length >= this.maxTrail) {
					this.trail.splice(0, 1);
				}
			}
		}, {
			key: 'updateArc',
			value: function updateArc() {
				this.arcx = this.cw / 2 + Math.sin(this.angle) * this.radius;
				this.arcy = this.ch / 2 + Math.cos(this.angle) * this.radius;
				var d = new Date();
				this.seconds = d.getSeconds();
				this.milliseconds = d.getMilliseconds();
				this.angle += this.speed * (this.seconds + 1 + this.milliseconds / 1000);

				if (this.radius <= 1) {
					this.growRadius = true;
				}
				if (this.radius >= 200) {
					this.growRadius = false;
				}

				if (this.growRadius) {
					this.radius += 1;
				} else {
					this.radius -= 1;
				}
			}
		}, {
			key: 'renderTrail',
			value: function renderTrail() {
				var i = this.trail.length;

				this.ctx.beginPath();
				while (i--) {
					var point = this.trail[i];
					var nextPoint = i == this.trail.length ? this.trail[i + 1] : this.trail[i];

					var c = (point.x + nextPoint.x) / 2;
					var d = (point.y + nextPoint.y) / 2;
					this.ctx.quadraticCurveTo(Math.round(this.arcx), Math.round(this.arcy), c, d);
				};
				this.ctx.strokeStyle = 'hsla(' + this.rand(170, 300) + ', 100%, ' + this.rand(50, 75) + '%, 1)';
				this.ctx.stroke();
				this.ctx.closePath();
			}
		}, {
			key: 'clearCanvas',
			value: function clearCanvas() {
				//this.ctx.globalCompositeOperation = 'source-over';
				//this.ctx.clearRect(0,0,this.cw,this.ch);

				this.ctx.globalCompositeOperation = 'destination-out';
				this.ctx.fillStyle = 'rgba(0,0,0,.1)';
				this.ctx.fillRect(0, 0, this.cw, this.ch);
				this.ctx.globalCompositeOperation = 'lighter';
			}
		}, {
			key: 'render',
			value: function render() {
				this.clearCanvas();
				this.updateArc();
				this.updateTrail();
				this.renderTrail();
			}
		}]);

		return Scope;
	}(_Canvas2.Canvas);

	exports.Scope = Scope;


	var isCanvasSupported = function isCanvasSupported() {
		var elem = document.createElement('canvas');
		return !!(elem.getContext && elem.getContext('2d'));
	};

	/*=============================================================================*/
	/* Setup requestAnimationFrame
	/*=============================================================================*/
	var setupRAF = function setupRAF() {
		var lastTime = 0;
		var vendors = ['ms', 'moz', 'webkit', 'o'];
		for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
			window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
			window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
		};

		if (!window.requestAnimationFrame) {
			window.requestAnimationFrame = function (callback, element) {
				var currTime = new Date().getTime();
				var timeToCall = Math.max(0, 16 - (currTime - lastTime));
				var id = window.setTimeout(function () {
					callback(currTime + timeToCall);
				}, timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};
		};

		if (!window.cancelAnimationFrame) {
			window.cancelAnimationFrame = function (id) {
				clearTimeout(id);
			};
		};
	};

	// if(isCanvasSupported){
	//     // var c = document.createElement('canvas');
	//     // c.width = 400;
	//     // c.height = 400;			
	//     // var cw = c.width;
	//     // var ch = c.height;	
	//     // document.body.appendChild(c);
	//     var c = document.getElementById('scope');
	//     var cw = c.width;
	//     var ch = c.height;
	//     var cl = new SmoothTrail(c, cw, ch);				

	//     //setupRAF();
	//     cl.init();
	// }

/***/ },
/* 40 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Canvas = function () {
		function Canvas(options) {
			_classCallCheck(this, Canvas);
		}

		_createClass(Canvas, [{
			key: '_init',
			value: function _init(options) {
				this._options = options;

				this.el = document.querySelector(options.el);
				this.ctx = this.el.getContext('2d');
				this.width = this.el.width || 1000;
				this.height = this.el.height || 1000;
				this._listen();
				if (options.responsive === true) {
					this._response();
				}

				this._start();
			}
		}, {
			key: '_start',
			value: function _start() {
				this._playing = false;
				this._tick = 0;
				this._time = new Date().getTime();
				this._fps = 0;

				//this._initCache();
				this.beforePlay();

				this._playing = true;
				this._play();
			}
		}, {
			key: '_response',
			value: function _response() {
				var _this = this;

				window.addEventListener('resize', function () {
					_this.width = _this.el.width = window.innerWidth;
					_this.height = _this.el.height = window.innerHeight;
				});
			}
			//onResize(){}

		}, {
			key: '_initCache',
			value: function _initCache() {
				this._cache = document.createElement('canvas');
				this._cache.width = 1000;
				this._cache.height = 1000;
				this.ctx = this._cache.getContext('2d');
			}
		}, {
			key: '_render',
			value: function _render() {
				this._ctx.clearRect(0, 0, this.width, this.height);
				this._ctx.drawImage(this._cache, 0, 0);
			}
		}, {
			key: '_listen',
			value: function _listen() {
				var _this2 = this;

				this.el.addEventListener('click', function () {
					if (_this2._playing) {
						_this2._pause();
					} else {
						_this2._resume();
					}
				});
				// document.addEventListener('keydown',()=>{
				// 	console.log(111)
				// 	this._playing = false;
				// 	setTimeout(()=>{
				// 		this._start();
				// 	},1000)

				// })
			}
		}, {
			key: '_pause',
			value: function _pause() {
				this._playing = false;
			}
		}, {
			key: '_resume',
			value: function _resume() {
				this._playing = true;
				this._play();
			}
		}, {
			key: '_play',
			value: function _play() {
				if (this._playing) {
					requestAnimationFrame(this._play.bind(this));
					this.render();
					this._renderFPS();
					//this._render();
				};
			}
		}]);

		return Canvas;
	}();

	Canvas.prototype._renderFPS = function () {
		this._tick++;
		if (this._tick === 60) {
			var newTime = new Date().getTime();
			this._fps = Math.round(1 / ((newTime - this._time) / 1000 / 60));

			this._time = newTime;
			this._tick = 0;
		}
		this.ctx.fillStyle = 'red';
		this.ctx.font = '14px Microsoft Yahei';
		this.ctx.fillText(this._fps + ' FPS', 10, 20, 100);
	};

	exports.Canvas = Canvas;

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = "\n<!-- Abstract Canvas Visualization -->\n<div class=\"_space\" _v-5cd558e7=\"\">\n\t<canvas id=\"scope\" width=\"400\" height=\"400\" _v-5cd558e7=\"\"></canvas>\n</div>\n";

/***/ },
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(55);
	__vue_script__ = __webpack_require__(56);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\canvas\\Rain.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(58);
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
	    var id = "_v-1e9db6d1/Rain.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 55 */
74,
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Rain = __webpack_require__(57);

	exports.default = {
		mounted: function mounted() {
			new _Rain.Rain({
				el: '#RAIN',
				data: {
					dropCount: 500
				}
			});
		}
	};
	// </script>
	// <template>
	// 	<canvas id="RAIN" width="1000" height="1000"></canvas>
	// </template>
	//
	// <style lang="less" scoped>
	// 	#RAIN {
	// 		display: block;
	// 		margin: auto;
	// 		width: 100%;
	// 	}
	// </style>
	//
	// <script>

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Rain = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Canvas2 = __webpack_require__(40);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function Drop(host) {
		var self = this;
		this.w = host.width;
		this.ctx = host.ctx;
		this.x = Math.random() * this.w;
		this.y = -Math.random() * 800;
		//this.lightness = 50;
		this.a = 0.7 + Math.random() * 0.3;
		this.minus = true;
		this.color = 'rgba(0,94,255,' + this.a + ')'; //'hsl(250,100%,'+this.lightness+'%)';
		this.speed = 4 + Math.random() * 10;
		this.width = function () {
			if (self.speed <= 5) {
				return 1;
			} else if (self.speed <= 12) {
				return 2;
			} else {
				return 3;
			}
		}();
		this.height = function () {
			if (self.speed <= 5) {
				return 2;
			} else if (self.speed <= 12) {
				return 4;
			} else {
				return 6;
			}
		}();
	}
	Drop.prototype = {
		step: function step() {
			this.y += this.speed;
			// this.lightness -= 0.2;
			// this.color = 'hsl(250,100%,'+this.lightness+'%)';
			if (this.a >= 1) {
				this.minus = true;
			} else if (this.a <= 0.7) {
				this.minus = false;
			}
			if (this.minus === true) {
				this.a -= 0.05;
			} else {
				this.a += 0.05;
			}
			this.color = 'rgba(0,94,255,' + this.a + ')';
		},
		draw: function draw() {
			this.ctx.beginPath();
			this.ctx.fillStyle = this.color;
			this.ctx.fillRect(this.x, this.y, this.width, this.height);
		}
	};

	function Splash(x, y, host) {
		this.ctx = host.ctx;
		this.x = x;
		this.y = y;
		this.r = 2;
		this.speedX = Math.random() * 6 - 3;
		this.speedY = -Math.random() * 3;
		this.life = 30;
		this.color = 'rgba(0,94,255,1)';
	}
	Splash.prototype = {
		draw: function draw() {
			this.ctx.beginPath();
			this.ctx.fillStyle = this.color;
			this.ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
			this.ctx.fill();
		},
		step: function step() {
			this.x += this.speedX;
			this.y += this.speedY;
			this.r += -0.05;
			this.life--;
		}
	};

	var Rain = function (_Canvas) {
		_inherits(Rain, _Canvas);

		function Rain(options) {
			_classCallCheck(this, Rain);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Rain).call(this, options));

			_this.drops = [];
			_this.splashes = [];

			for (var key in options.data) {
				_this[key] = options.data[key];
			}

			_this._init(options);
			return _this;
		}

		_createClass(Rain, [{
			key: 'listen',
			value: function listen() {}
		}, {
			key: 'beforePlay',
			value: function beforePlay() {
				this.createDrops();
			}
		}, {
			key: 'createDrops',
			value: function createDrops() {
				for (var i = 0; i < this.dropCount; i++) {
					this.drops[i] = new Drop(this);
				}
			}
		}, {
			key: 'render',
			value: function render() {
				//console.log(111)
				var self = this;
				var ctx = this.ctx;
				ctx.globalCompositeOperation = 'source-over';
				ctx.fillStyle = 'rgba(0,0,0,0.5)';
				ctx.fillRect(0, 0, this.width, this.height);
				ctx.globalCompositeOperation = 'lighter';

				self.drops.forEach(function (drop, i) {
					drop.draw();
					drop.step();
					if (drop.y > self.height) {
						self.drops[i] = new Drop(self);
						self.splashes.push(new Splash(drop.x, self.height, self));
					}
				});
				self.splashes.forEach(function (splash, i) {
					splash.draw();
					splash.step();
					if (splash.life <= 0) {
						self.splashes.splice(i, 1);
					}
				});
			}
		}]);

		return Rain;
	}(_Canvas2.Canvas);

	exports.Rain = Rain;

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = "\n<canvas id=\"RAIN\" width=\"1000\" height=\"1000\" _v-1e9db6d1=\"\"></canvas>\n";

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(60);
	__vue_script__ = __webpack_require__(61);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\canvas\\Circles.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(63);
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
	    var id = "_v-2e8a25f6/Circles.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 60 */
74,
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Circles = __webpack_require__(62);

	exports.default = {
		mounted: function mounted() {
			new _Circles.Circles({
				el: '#CIRCLES'
			});
		}
	};
	// </script>
	// <template>
	// 	<canvas id="CIRCLES"></canvas>
	// </template>
	//
	// <style lang="less" scoped>
	// 	#CIRCLES {
	// 		display: block;
	// 		width: 100%;
	// 	}
	// 	@media (min-width:1000px){
	// 		#CIRCLES {
	// 			width: 500px;
	// 			margin: auto;
	// 		}
	// 	}
	// </style>
	//
	// <script>

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Circles = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Canvas2 = __webpack_require__(40);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Circle = function () {
		function Circle(x, y, canvas) {
			_classCallCheck(this, Circle);

			this.x = x;
			this.y = y;
			this.r = Math.round(canvas.circleMaxRadius * Math.random());
			this.alpha = 1;
			this.color = 'rgba(200,30,200,1)';
			this.tick = 0;
		}

		_createClass(Circle, [{
			key: 'step',
			value: function step(canvas) {
				this.x += Math.random() * 6 - 3;
				this.y += Math.random() * 6 - 3;
				this.alpha -= canvas.circleFadingRate;
				this.color = 'rgba(10,30,200,' + this.alpha + ')';
				this.tick++;
				this.draw(canvas);
			}
		}, {
			key: 'draw',
			value: function draw(canvas) {
				var ctx = canvas.ctx;
				ctx.beginPath();
				ctx.strokeStyle = this.color;
				ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
				ctx.stroke();
			}
		}]);

		return Circle;
	}();

	var Circles = function (_Canvas) {
		_inherits(Circles, _Canvas);

		function Circles(options) {
			_classCallCheck(this, Circles);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Circles).call(this));

			_this._init(options);
			return _this;
		}

		_createClass(Circles, [{
			key: 'beforePlay',
			value: function beforePlay() {
				this.circles = [];
				this.circleCount = this._options.circleCount || 50;
				this.circleMaxRadius = 400;
				this.circleFadingRate = 0.008;
				this.ctx.lineWidth = this._options.lineWidth || 5;
				this.ctx.lineCap = "round";
				this.ctx.lineJoin = "round";
				this.create();
				this.listen();
			}
		}, {
			key: 'create',
			value: function create() {}
		}, {
			key: 'listen',
			value: function listen() {
				var self = this;
				self.el.addEventListener("mousedown", function (e) {
					console.log(e);
					var x = e.offsetX * 1000 / Number(document.defaultView.getComputedStyle(self.el).width.replace(/px/, ''));
					var y = e.offsetY * 1000 / Number(document.defaultView.getComputedStyle(self.el).height.replace(/px/, ''));
					self.circles.push(new Circle(x, y, self));
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var self = this;
				var ctx = this.ctx;
				if (this.circles.length < this.circleCount) {
					this.circles.push(new Circle(this.width / 2, this.height / 2, this /*Math.random()*$w,Math.random()*$h*/));
				};
				ctx.globalCompositeOperation = 'source-over';
				ctx.fillStyle = 'rgba(0,0,0,0.5)';
				ctx.fillRect(0, 0, this.width, this.height);
				ctx.globalCompositeOperation = 'lighter';

				this.circles.map(function (elem, i) {
					elem.step(self);
					if (elem.alpha <= 0) {
						self.circles.splice(i, 1);
					}
				});
				this.tick++;
			}
		}]);

		return Circles;
	}(_Canvas2.Canvas);

	exports.Circles = Circles;

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports = "\n<canvas id=\"CIRCLES\" _v-2e8a25f6=\"\"></canvas>\n";

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(65);
	__vue_script__ = __webpack_require__(66);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\canvas\\Snowfall.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(68);
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
	    var id = "_v-733fdb3b/Snowfall.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 65 */
74,
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Snowfall = __webpack_require__(67);

	exports.default = {
		mounted: function mounted() {
			new _Snowfall.Snowfall({
				el: '#SNOWFALL'
			});
		}
	};
	// </script>
	// <template>
	// 	<canvas id="SNOWFALL" width="1000" height="1000"></canvas>
	// </template>
	//
	// <style lang="less" scoped>
	// 	#SNOWFALL {
	// 		display: block;
	// 		margin: auto;
	// 		width: 100%;
	// 		background: #0BA2FF;
	// 	}
	// </style>
	//
	// <script>

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Snowfall = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Canvas2 = __webpack_require__(40);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function getRandomInt(min, max) {
	    return Math.floor(Math.random() * (max - min)) + min;
	}
	function extend(target) {
	    target = arguments[0];

	    var objects = Array.prototype.splice.call(arguments, 1);

	    objects.forEach(function (obj) {
	        for (var prop in obj) {
	            target[prop] = obj[prop];
	        }
	    });

	    return target;
	}

	function Particle(opts) {
	    this.opts = opts;

	    this.color = this.opts.color;
	    this.x = this.opts.x;
	    this.y = this.opts.y;
	    this.d = this.opts.d;

	    this.radius = this.opts.radius;
	};
	Particle.prototype = {
	    update: function update() {
	        var width = this.opts.host.width;
	        var height = this.opts.host.height;
	        var x, y;

	        x = this.x + Math.cos(0) * this.d * 2;
	        y = this.y + Math.sin(0) + 1 + this.radius / 3 * this.d * 2;

	        if (x > width) {
	            x = 0;
	        };
	        if (x < 0) {
	            x = width;
	        };
	        if (y > height) {
	            y = 0;
	            x = getRandomInt(0, width);
	        };

	        this.x = x;
	        this.y = y;
	    },
	    draw: function draw(ctx) {
	        ctx.beginPath();
	        ctx.moveTo(this.x, this.y);
	        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
	        ctx.fillStyle = this.color;
	        ctx.fill();
	    }
	};

	var Snowfall = function (_Canvas) {
	    _inherits(Snowfall, _Canvas);

	    function Snowfall(opts) {
	        _classCallCheck(this, Snowfall);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Snowfall).call(this, opts));

	        _this._init(opts);
	        return _this;
	    }

	    _createClass(Snowfall, [{
	        key: 'beforePlay',
	        value: function beforePlay() {
	            this.config = {
	                color: 'white',
	                speed: 2,
	                count: 100,
	                maxRadius: 5
	            };
	            this.particles = [];
	            this.angle = 0;

	            this.createParticles();
	        }
	    }, {
	        key: 'createParticles',
	        value: function createParticles() {
	            var self = this;
	            for (var i = 0; i < this.config.count; i++) {
	                self.particles.push(new Particle({
	                    color: 'white',
	                    x: Math.round(Math.random() * self.width),
	                    y: Math.round(Math.random() * self.height),
	                    d: Math.random(),
	                    radius: getRandomInt(2, self.config.maxRadius),
	                    host: self,
	                    ctx: self.ctx
	                }));
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var self = this;
	            this.angle = this.angle - 0.0001;

	            this.ctx.clearRect(0, 0, this.width, this.height);
	            this.particles.forEach(function (p) {
	                p.update();
	                p.draw(self.ctx);
	            });
	        }
	    }]);

	    return Snowfall;
	}(_Canvas2.Canvas);

	exports.Snowfall = Snowfall;

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = "\n<canvas id=\"SNOWFALL\" width=\"1000\" height=\"1000\" _v-733fdb3b=\"\"></canvas>\n";

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(70);
	__vue_script__ = __webpack_require__(71);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\canvas\\NeonHexagons.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(73);
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
	    var id = "_v-021c4bf4/NeonHexagons.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 70 */
74,
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _NeonHexagons = __webpack_require__(72);

	exports.default = {
		mounted: function mounted() {
			new _NeonHexagons.NeonHexagons({
				el: '#NEON'
			});
		}
	};
	// </script>
	// <template>
	// 	<canvas id="NEON" width="500" height="500"></canvas>
	// </template>
	//
	// <style lang="less" scoped>
	// 	#NEON {
	// 		display: block;
	// 		margin: auto;
	// 		width: 100%;
	// 	}
	// </style>
	//
	// <script>

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.NeonHexagons = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Canvas2 = __webpack_require__(40);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var baseRad = Math.PI * 2 / 6;

	var NeonHexagons = function (_Canvas) {
		_inherits(NeonHexagons, _Canvas);

		function NeonHexagons(options) {
			_classCallCheck(this, NeonHexagons);

			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NeonHexagons).call(this, options));

			_this._init(options);
			return _this;
		}

		_createClass(NeonHexagons, [{
			key: 'beforePlay',
			value: function beforePlay() {
				this.opts = {

					len: 20,
					count: 50, // Max count of the lines
					baseTime: 10,
					addedTime: 10,
					dieChance: .05,
					spawnChance: 1,
					sparkChance: .1,
					sparkDist: 10,
					sparkSize: 2,

					color: 'hsl(hue,100%,light%)',
					baseLight: 50,
					addedLight: 10, // [50-10,50+10]
					shadowToTimePropMult: 6,
					baseLightInputMultiplier: .01,
					addedLightInputMultiplier: .02,

					cx: this.width / 2,
					cy: this.height / 2,
					repaintAlpha: .04,
					hueChange: .1
				};
				this.tick = 0;
				this.lines = [];
				this.dieX = this.width / 2 / this.opts.len;
				this.dieY = this.height / 2 / this.opts.len;
				this.ctx.fillStyle = 'black';
				this.ctx.fillRect(0, 0, this.width, this.height);
			}
		}, {
			key: 'onResize',
			value: function onResize() {
				this.opts.cx = this.width / 2;
				this.opts.cy = this.height / 2;
			}
		}, {
			key: 'render',
			value: function render() {
				var ctx = this.ctx;
				++this.tick;

				ctx.globalCompositeOperation = 'source-over';
				ctx.shadowBlur = 0;
				// Background color
				ctx.fillStyle = 'rgba(0,0,0,alp)'.replace('alp', this.opts.repaintAlpha);
				ctx.fillRect(0, 0, this.width, this.height);

				ctx.globalCompositeOperation = 'lighter';

				if (this.lines.length < this.opts.count && Math.random() < this.opts.spawnChance) {
					this.lines.push(new Line(this));
				};

				this.lines.map(function (line) {
					line.step();
				});
			}
		}]);

		return NeonHexagons;
	}(_Canvas2.Canvas);

	exports.NeonHexagons = NeonHexagons;

	var Line = function () {
		function Line(canvas) {
			_classCallCheck(this, Line);

			this.canvas = canvas;
			this.reset();
		}

		_createClass(Line, [{
			key: 'reset',
			value: function reset() {
				var opts = this.canvas.opts;
				var tick = this.canvas.tick;
				this.x = 0;
				this.y = 0;
				this.addedX = 0;
				this.addedY = 0;
				// radius
				this.rad = 0;

				this.lightInputMultiplier = opts.baseLightInputMultiplier + opts.addedLightInputMultiplier * Math.random();

				this.color = opts.color.replace('hue', tick * opts.hueChange);
				this.cumulativeTime = 0;

				this.beginPhase();
			}
		}, {
			key: 'beginPhase',
			value: function beginPhase() {
				var opts = this.canvas.opts;
				var dieX = this.canvas.dieX;
				var dieY = this.canvas.dieY;

				this.x += this.addedX;
				this.y += this.addedY;

				this.time = 0;
				this.targetTime = opts.baseTime + opts.addedTime * Math.random() | 0;

				this.rad += baseRad * (Math.random() < .5 ? 1 : -1);
				this.addedX = Math.cos(this.rad);
				this.addedY = Math.sin(this.rad);

				if (Math.random() < opts.dieChance || this.x > dieX || this.x < -dieX || this.y > dieY || this.y < -dieY) {
					this.reset();
				};
			}
		}, {
			key: 'step',
			value: function step() {
				var opts = this.canvas.opts;
				var ctx = this.canvas.ctx;

				++this.time;
				++this.cumulativeTime;

				if (this.time >= this.targetTime) {
					this.beginPhase();
				}

				var prop = this.time / this.targetTime,
				    wave = Math.sin(prop * Math.PI / 2),
				    x = this.addedX * wave,
				    y = this.addedY * wave;

				ctx.shadowBlur = prop * opts.shadowToTimePropMult;
				ctx.fillStyle = ctx.shadowColor = this.color.replace('light', opts.baseLight + opts.addedLight * Math.sin(this.cumulativeTime * this.lightInputMultiplier));
				ctx.fillRect(opts.cx + (this.x + x) * opts.len, opts.cy + (this.y + y) * opts.len, 2, 2);

				if (Math.random() < opts.sparkChance) {
					ctx.fillRect(opts.cx + (this.x + x) * opts.len + Math.random() * opts.sparkDist * (Math.random() < .5 ? 1 : -1) - opts.sparkSize / 2, opts.cy + (this.y + y) * opts.len + Math.random() * opts.sparkDist * (Math.random() < .5 ? 1 : -1) - opts.sparkSize / 2, opts.sparkSize, opts.sparkSize);
				}
			}
		}]);

		return Line;
	}();

	//render();

	// window.addEventListener( 'resize', function(){

	//   w = c.width = window.innerWidth;
	//   h = c.height = window.innerHeight;
	//   ctx.fillStyle = 'black';
	//   ctx.fillRect( 0, 0, w, h );

	//   opts.cx = w / 2;
	//   opts.cy = h / 2;

	//   dieX = w / 2 / opts.len;
	//   dieY = h / 2 / opts.len;
	// });

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = "\n<canvas id=\"NEON\" width=\"500\" height=\"500\" _v-021c4bf4=\"\"></canvas>\n";

/***/ }
]));