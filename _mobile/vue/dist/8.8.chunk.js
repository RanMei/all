webpackJsonp([8],{

/***/ 58:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Canvas = __webpack_require__(59);

	function Drop(cv) {
		var self = this;
		this.cv = cv;
		this.ctx = cv.$ctx;
		this.spawn();
	}
	Drop.prototype = {
		spawn: function spawn() {
			this.x = Math.random() * this.cv.$width;
			this.y = -Math.random() * 800;
			//this.lightness = 50;
			this.a = 0.7 + Math.random() * 0.3;
			this.minus = true;
			this.color = 'rgba(0,94,255,' + this.a + ')'; //'hsl(250,100%,'+this.lightness+'%)';
			this.speed = _Canvas.Canvas.random(4, 14);
			this.width = function () {
				if (self.speed <= 5) {
					return 1;
					// }else if( self.speed<=12 ){
					// 	return 2;
				} else {
					return 2;
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
		},
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

	function Splash(x, y, cv) {
		this.ctx = cv.$ctx;
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

	var Rain = _Canvas.Canvas.extend({
		props: function props() {
			return {
				dropCount: 200
			};
		},
		data: function data() {
			return {
				drops: [],
				splashes: []
			};
		},
		beforePlay: function beforePlay() {
			this.createDrops();
		},
		render: function render() {
			var self = this;
			var ctx = this.$ctx;
			ctx.globalCompositeOperation = 'source-over';
			ctx.fillStyle = 'rgba(0,0,0,0.5)';
			ctx.fillRect(0, 0, this.$width, this.$height);
			ctx.globalCompositeOperation = 'lighter';

			self.drops.forEach(function (drop, i) {
				drop.step();
				if (drop.y > self.$height) {
					drop.spawn();
					self.splashes.push(new Splash(drop.x, self.$height, self));
				}
				drop.draw();
			});
			self.splashes.forEach(function (splash, i) {
				splash.draw();
				splash.step();
				if (splash.life <= 0) {
					self.splashes.splice(i, 1);
				}
			});
		},
		methods: {
			createDrops: function createDrops() {
				for (var i = 0; i < this.dropCount; i++) {
					this.drops[i] = new Drop(this);
				}
			}
		}
	});

	module.exports = {
		template: '<canvas id="Rain" ref="canvas" style="display:block;"></canvas>',
		mounted: function mounted() {
			new Rain({
				el: this.$refs.canvas,
				props: {
					dropCount: 500
				},
				responsive: true
			});
		}
	};

/***/ },

/***/ 59:
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

/***/ },

/***/ 60:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Canvas = __webpack_require__(59);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Circle = function () {
		function Circle(cv) {
			_classCallCheck(this, Circle);

			this.cv = cv;
			this.spawn();
		}

		_createClass(Circle, [{
			key: 'spawn',
			value: function spawn() {
				this.tick = 0;
				this.x = this.cv.$width / 2;
				this.y = this.cv.$height / 2;
				this.r = Math.round(this.cv.circleMaxRadius * Math.random());
				this.color = 'rgba(10,30,200,1)';
				this.alpha = 1;
				this.tick = 0;
			}
		}, {
			key: 'step',
			value: function step() {
				this.x += _Canvas.Canvas.random(-2, 2);
				this.y += _Canvas.Canvas.random(-2, 2);
				this.alpha -= this.cv.circleFadingRate;
				this.color = 'rgba(10,30,200,' + this.alpha + ')';
				this.tick++;
				if (this.alpha <= 0) {
					this.spawn();
				}
				this.draw();
			}
		}, {
			key: 'draw',
			value: function draw() {
				var ctx = this.cv.$ctx;
				ctx.beginPath();
				ctx.strokeStyle = this.color;
				ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
				ctx.stroke();
				ctx.closePath();
			}
		}]);

		return Circle;
	}();

	var Circles = _Canvas.Canvas.extend({
		props: function props() {
			return {
				circleCount: 50,
				circleMaxRadius: 200,
				circleFadingRate: 0.01,
				lineWidth: 6
			};
		},
		data: function data() {
			return {
				circles: []
			};
		},
		beforePlay: function beforePlay() {
			this.$ctx.lineWidth = this.lineWidth;
			this.$ctx.lineCap = "round";
			this.$ctx.lineJoin = "round";
			//this.create();
			this.listen();
		},
		render: function render() {
			var self = this;
			var ctx = this.$ctx;
			if (this.circles.length < this.circleCount) {
				this.circles.push(new Circle(this));
			};
			ctx.globalCompositeOperation = 'source-over';
			ctx.fillStyle = 'rgba(0,0,0,0.5)';
			ctx.fillRect(0, 0, this.$width, this.$height);
			ctx.globalCompositeOperation = 'lighter';

			this.circles.forEach(function (a, i) {
				a.step();
			});
		},
		methods: {
			listen: function listen() {
				var self = this;
				self.$el.addEventListener("mousedown", function (e) {
					console.log(e);
					var x = e.offsetX * 1000 / Number(document.defaultView.getComputedStyle(self.$el).width.replace(/px/, ''));
					var y = e.offsetY * 1000 / Number(document.defaultView.getComputedStyle(self.$el).height.replace(/px/, ''));
					self.circles.push(new Circle(x, y, self));
				});
			}
		}
	});

	module.exports = {
		template: '<canvas ref="cv"\n\tstyle="display:block;"></canvas>',
		mounted: function mounted() {
			new Circles({
				el: this.$refs.cv,
				responsive: true
			});
		}
	};

/***/ }

});