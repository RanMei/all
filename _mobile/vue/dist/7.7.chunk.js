webpackJsonp([7],{

/***/ 48:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(49);
	__vue_script__ = __webpack_require__(50);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\canvas\\Rain.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(53);
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
	    var id = "_v-173881b2/Rain.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 49:
1,

/***/ 50:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Rain = __webpack_require__(51);

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

/***/ },

/***/ 51:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Rain = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Canvas2 = __webpack_require__(52);

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

			var _this = _possibleConstructorReturn(this, (Rain.__proto__ || Object.getPrototypeOf(Rain)).call(this, options));

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

/***/ 52:
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

/***/ 53:
/***/ function(module, exports) {

	module.exports = "\n<canvas id=\"RAIN\" width=\"1000\" height=\"1000\" _v-173881b2=\"\"></canvas>\n";

/***/ },

/***/ 54:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(55);
	__vue_script__ = __webpack_require__(56);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\canvas\\Snowfall.vue: named exports in *.vue files are ignored.");
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
	    var id = "_v-8c6f64c8/Snowfall.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 55:
1,

/***/ 56:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _Snowfall = __webpack_require__(57);

	exports.default = {
		mounted: function mounted() {
			new _Snowfall.Snowfall({
				el: '#SNOWFALL'
			});
		}
	};

/***/ },

/***/ 57:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Snowfall = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Canvas2 = __webpack_require__(52);

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

/***/ 58:
/***/ function(module, exports) {

	module.exports = "\n<canvas id=\"SNOWFALL\" width=\"1000\" height=\"1000\" _v-8c6f64c8=\"\"></canvas>\n";

/***/ }

});