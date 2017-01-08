webpackJsonp([9],{

/***/ 66:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Scope = undefined;

	var _Canvas = __webpack_require__(67);

	var Scope = _Canvas.Canvas.extend({
		data: function data() {
			return {
				mx: 0,
				my: 0,
				//trail
				trail: [],
				maxTrail: 200,
				mouseDown: false,

				radius: 1,
				speed: 0.4,
				angle: 0,
				arcx: 0,
				arcy: 0,
				growRadius: true,
				seconds: 0,
				milliseconds: 0
			};
		},
		beforePlay: function beforePlay() {
			this.$ctx.lineWidth = .1;
			this.$ctx.lineJoin = 'round';
		},
		render: function render() {
			this.clearCanvas();
			this.updateArc();
			this.updateTrail();
			this.renderTrail();
		},
		methods: {
			rand: function rand(min, max) {
				return ~ ~(Math.random() * (max - min + 1) + min);
			},
			hitTest: function hitTest(x1, y1, w1, h1, x2, y2, w2, h2) {
				return !(x1 + w1 < x2 || x2 + w2 < x1 || y1 + h1 < y2 || y2 + h2 < y1);
			},
			createPoint: function createPoint(x, y) {
				this.trail.push({
					x: x,
					y: y
				});
			},
			updateArc: function updateArc() {
				this.arcx = this.$width / 2 + Math.sin(this.angle) * this.radius;
				this.arcy = this.$height / 2 + Math.cos(this.angle) * this.radius;
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
			},
			renderTrail: function renderTrail() {
				var i = this.trail.length;

				this.$ctx.beginPath();
				while (i--) {
					var point = this.trail[i];
					var nextPoint = i == this.trail.length ? this.trail[i + 1] : this.trail[i];

					var c = (point.x + nextPoint.x) / 2;
					var d = (point.y + nextPoint.y) / 2;
					this.$ctx.quadraticCurveTo(Math.round(this.arcx), Math.round(this.arcy), c, d);
				};
				this.$ctx.strokeStyle = 'hsla(' + this.rand(170, 300) + ', 100%, ' + this.rand(50, 75) + '%, 1)';
				this.$ctx.stroke();
				this.$ctx.closePath();
			},
			updateTrail: function updateTrail() {
				if (this.trail.length < this.maxTrail) {
					this.createPoint(this.arcx, this.arcy);
				};
				if (this.trail.length >= this.maxTrail) {
					this.trail.splice(0, 1);
				};
			},
			clearCanvas: function clearCanvas() {
				//this.ctx.globalCompositeOperation = 'source-over';
				//this.ctx.clearRect(0,0,this.cw,this.ch);
				this.$ctx.globalCompositeOperation = 'destination-out';
				this.$ctx.fillStyle = 'rgba(0,0,0,.1)';
				this.$ctx.fillRect(0, 0, this.$width, this.$height);
				this.$ctx.globalCompositeOperation = 'lighter';
			}
		}
	});
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

	module.exports = {
		template: '\n\t\t<div class="Scope"\n\t\tstyle="width:100%;height:100vh;background:black;">\n\t\t\t<!-- Abstract Canvas Visualization -->\n\t\t\t<canvas ref="canvas" width="400" height="400"\n\t\t\tstyle="display:block;width:60%;margin:auto;background:black;"></canvas>\n\t\t</div>\n\t',
		mounted: function mounted() {
			new Scope({
				el: this.$refs.canvas,
				width: 400,
				height: 400
			});
		}
	};

/***/ },

/***/ 67:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Canvas = function () {
		function Canvas(opts) {
			_classCallCheck(this, Canvas);

			this._options = opts;
			this._props = opts.props;
			this._data = opts.data;

			this.beforePlay = opts.beforePlay;
			this.render = opts.render;

			for (var key in opts.methods) {
				this[key] = opts.methods[key];
			}
		}

		_createClass(Canvas, [{
			key: '_init_cv',
			value: function _init_cv(kkk) {
				var cv = this;
				cv.$el = typeof kkk.el === 'string' ? document.querySelector(kkk.el) : kkk.el;
				cv.$ctx = cv.$el.getContext('2d');

				cv.$width = cv.$el.width || 1000;
				cv.$height = cv.$el.height || 1000;

				if (kkk.interval) {
					cv._interval = kkk.interval;
				}

				// init props
				var props = this._props ? this._props() : {};
				for (var key in props) {
					cv[key] = props[key];
				}
				for (var key in kkk.props) {
					cv[key] = kkk.props[key];
				}
				// init data
				var data = this._data();
				for (var key in data) {
					cv[key] = data[key];
				}

				this._listen();
				if (kkk.responsive === true) {
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

				this.$setSize(window.innerWidth, window.innerHeight);
				window.addEventListener('resize', function () {
					_this.$setSize(window.innerWidth, window.innerHeight);
				});
			}
			//onResize(){}

		}, {
			key: '_initCache',
			value: function _initCache() {
				this._cache = document.createElement('canvas');
				this._cache.width = 1000;
				this._cache.height = 1000;
				this.$ctx = this._cache.getContext('2d');
			}
		}, {
			key: '_render',
			value: function _render() {
				this.$ctx.clearRect(0, 0, this.$width, this.$height);
				this.$ctx.drawImage(this._cache, 0, 0);
			}
		}, {
			key: '_listen',
			value: function _listen() {
				var _this2 = this;

				this.$el.addEventListener('click', function () {
					if (_this2._playing) {
						_this2.$pause();
					} else {
						_this2.$resume();
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
			key: '$pause',
			value: function $pause() {
				this._playing = false;
			}
		}, {
			key: '$resume',
			value: function $resume() {
				this._playing = true;
				this._play();
			}
		}, {
			key: '$setSize',
			value: function $setSize(width, height) {
				this.$el.width = this.$width = width;
				this.$el.height = this.$height = height;
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

	// create a subclass of Canvas


	Canvas.extend = function (opts) {
		function Sub(kkk) {
			this._init_cv(kkk);
		}
		Sub.prototype = new Canvas(opts);
		return Sub;
	};

	Canvas.random = function (min, max) {
		return min + (max - min) * Math.random();
	};

	Canvas.prototype._renderFPS = function () {
		this._tick++;
		if (this._tick === 60) {
			var newTime = new Date().getTime();
			this._fps = Math.round(1 / ((newTime - this._time) / 1000 / 60));

			this._time = newTime;
			this._tick = 0;
		}
		this.$ctx.fillStyle = 'red';
		this.$ctx.font = '14px Microsoft Yahei';
		this.$ctx.fillText(this._fps + ' FPS', 10, 20, 100);
	};

	Canvas.random = function (min, max) {
		return min + Math.random() * (max - min);
	};

	window.Canvas = Canvas;

	exports.Canvas = Canvas;

/***/ }

});