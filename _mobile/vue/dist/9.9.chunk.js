webpackJsonp([9],{

/***/ 52:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(53);
	__vue_script__ = __webpack_require__(54);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\Canvas\\Scope.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(57);
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
	    var id = "_v-45582e46/Scope.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 53:
1,

/***/ 54:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Scope = __webpack_require__(55);

	exports.default = {
		mounted: function mounted() {
			new _Scope.Scope({
				el: '#scope',
				width: 400,
				height: 400
			});
		}
	};

/***/ },

/***/ 55:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Scope = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Canvas2 = __webpack_require__(56);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Scope = function (_Canvas) {
		_inherits(Scope, _Canvas);

		function Scope(options) {
			_classCallCheck(this, Scope);

			var _this = _possibleConstructorReturn(this, (Scope.__proto__ || Object.getPrototypeOf(Scope)).call(this, options));

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
				return ~~(Math.random() * (max - min + 1) + min);
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

/***/ 56:
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

/***/ 57:
/***/ function(module, exports) {

	module.exports = "\n<!-- Abstract Canvas Visualization -->\n<div class=\"_space\" _v-45582e46=\"\">\n\t<canvas id=\"scope\" width=\"400\" height=\"400\" _v-45582e46=\"\"></canvas>\n</div>\n";

/***/ }

});