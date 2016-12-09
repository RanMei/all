webpackJsonp([8],{

/***/ 54:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Snowfall = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Canvas2 = __webpack_require__(55);

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

	        var _this = _possibleConstructorReturn(this, (Snowfall.__proto__ || Object.getPrototypeOf(Snowfall)).call(this, opts));

	        _this._init(opts);
	        return _this;
	    }

	    _createClass(Snowfall, [{
	        key: 'beforePlay',
	        value: function beforePlay() {
	            this.config = {
	                color: 'white',
	                speed: 2,
	                count: 1000,
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


	var Snows = _Canvas2.Canvas.extend({
	    props: {
	        color: {
	            default: 'white'
	        }
	    },
	    data: function data() {
	        return {
	            particles: [],
	            angle: 0
	        };
	    },
	    beforePlay: function beforePlay() {
	        this.createParticles();
	    },
	    render: function render() {
	        var self = this;
	        this.angle = this.angle - 0.0001;

	        this.$ctx.clearRect(0, 0, this.$width, this.$height);
	        this.particles.forEach(function (p) {
	            p.update();
	            p.draw(self.$ctx);
	        });
	    },
	    methods: {
	        createParticles: function createParticles() {
	            var self = this;
	            for (var i = 0; i < this.count; i++) {
	                self.particles.push(new Particle({
	                    color: 'white',
	                    x: Math.round(Math.random() * self.$width),
	                    y: Math.round(Math.random() * self.$height),
	                    d: Math.random(),
	                    radius: getRandomInt(2, self.maxRadius),
	                    host: self,
	                    ctx: self.$ctx
	                }));
	            }
	        }
	    }
	});
	// new Sub({
	//     el: '#snowfall',
	//     color: 'white',
	//     speed: 2,
	//     count: 100,
	//     maxRadius: 5
	// })

	module.exports = {
	    template: '\n        <canvas ref="snowfall" width="1000" height="1000"\n        style="display:block;width:100%;background:#0BA2FF;"></canvas>\n    ',
	    mounted: function mounted() {
	        new Snowfall({
	            el: this.$refs.snowfall
	        });
	    }
	};

/***/ },

/***/ 55:
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
		}

		_createClass(Canvas, [{
			key: '_init',
			value: function _init(options) {
				this._options = options;

				this.el = typeof options.el === 'string' ? document.querySelector(options.el) : options.el;
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

	// create a subclass of Canvas


	Canvas.extend = function (opts) {
		function Sub() {
			this._init(opts);
		}
		Sub.prototype = new Canvas(opts);
		return Sub;
	};

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

/***/ }

});