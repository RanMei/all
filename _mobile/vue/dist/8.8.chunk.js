webpackJsonp([8],{

/***/ 56:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(57);
	__vue_script__ = __webpack_require__(58);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\lib\\SmokyText.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(59);
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
	    var id = "_v-cee754da/SmokyText.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 57:
1,

/***/ 58:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {
				className: ''
			};
		},
		mounted: function mounted() {},
		methods: {
			go: function go() {
				this.className = this.className === '' ? 'active' : '';
			}
		}
	};

/***/ },

/***/ 59:
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"SmokyText\" :class=\"className\"\n@click=\"go\">\n\t<p class=\"text\">\n\t\t<span>冬</span><span>牧</span><span>场</span><span>冬</span><span>牧</span><span>场</span><br/>\n\t\t<span>冬</span><span>牧</span><span>场</span><span>冬</span><span>牧</span><span>场</span><br/>\n\t</p>\n</div>\n";

/***/ },

/***/ 60:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(61);
	__vue_script__ = __webpack_require__(62);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\lib\\Farm.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(64);
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
	    var id = "_v-7ce41f43/Farm.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 61:
1,

/***/ 62:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		components: {
			Confetti: __webpack_require__(63),
			SmokyText: __webpack_require__(56)
		}
	};

/***/ },

/***/ 63:
/***/ function(module, exports) {

	'use strict';

	function Confetti(cv) {
		this.cv = cv;
		//this.style = COLORS[~~range(0, 5)];
		//this.rgb = "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2];
		this.rgb = 'rgba(255,255,255';
		//this.r = ~~range(2, 6);
		this.r = ~~Canvas.random(2, 6);
		this.r2 = 2 * this.r;
		this.spawn();
	}

	Confetti.prototype = {
		PI_2: 2 * Math.PI,
		xpos: 0.5,
		spawn: function spawn() {
			this.opacity = 0;
			this.dop = 0.03 * Canvas.random(1, 4);
			this.x = Canvas.random(-this.r2, this.cv.$width - this.r2);
			this.y = Canvas.random(-20, this.cv.$height - this.r2);
			this.xmax = this.cv.$width - this.r;
			this.ymax = this.cv.$height - this.r;
			//this.vx = range(0, 2) + 8 * xpos - 5;
			this.vx = Canvas.random(-3, 0);
			//this.vy = 0.7 * this.r + range(-1, 1);
			this.vy = 1 * this.r + Canvas.random(-1, 1);
		},
		draw: function draw() {
			var ref;
			this.x += this.vx;
			this.y += this.vy;
			this.opacity += this.dop;
			if (this.opacity > 1) {
				this.opacity = 1;
				this.dop *= -1;
			}
			if (this.opacity < 0 || this.y > this.ymax) {
				this.spawn();
			}
			if (!(0 < (ref = this.x) && ref < this.xmax)) {
				this.x = (this.x + this.xmax) % this.xmax;
			}
			var ctx = this.cv.$ctx;
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.r, 0, this.PI_2, false);
			ctx.fillStyle = this.rgb + ',' + this.opacity + ')';
			ctx.fill();
		}
	};

	var HAHA = Canvas.extend({
		props: function props() {
			return {
				count: 60,
				COLORS: [[85, 71, 106], [174, 61, 99], [219, 56, 83], [244, 92, 68], [248, 182, 70]]
			};
		},
		data: function data() {
			return {
				confetti: []
			};
		},
		beforePlay: function beforePlay() {
			var _this = this;

			this.$setSize(window.innerWidth, window.innerHeight);
			window.addEventListener('resize', function () {
				_this.$setSize(window.innerWidth, window.innerHeight);
			});
			for (var i = 1, j = 1, ref = this.count; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
				this.confetti.push(new Confetti(this));
			}
		},
		render: function render() {
			this.$ctx.clearRect(0, 0, this.$width, this.$height);
			this.confetti.forEach(function (a) {
				a.draw();
			});
		}
	});

	module.exports = {
		template: '\n\t<canvas ref="confetti"\n\tstyle="display:block;background:url(../../img/cover.jpg);background-size:100% auto;"></canvas>\n\t',
		mounted: function mounted() {
			new HAHA({
				el: this.$refs.confetti
			});
		}
	};

/***/ },

/***/ 64:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Farm\" _v-7ce41f43=\"\">\n\t<confetti _v-7ce41f43=\"\"></confetti>\n\t<smoky-text _v-7ce41f43=\"\"></smoky-text>\n</div>\n";

/***/ },

/***/ 68:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Canvas = __webpack_require__(69);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Circle = function () {
		function Circle(x, y, cv) {
			_classCallCheck(this, Circle);

			this.x = x;
			this.y = y;
			this.cv = cv;
			this.r = Math.round(cv.circleMaxRadius * Math.random());
			this.alpha = 1;
			this.color = 'rgba(200,30,200,1)';
			this.tick = 0;
		}

		_createClass(Circle, [{
			key: 'step',
			value: function step() {
				this.x += Math.random() * 6 - 3;
				this.y += Math.random() * 6 - 3;
				this.alpha -= this.cv.circleFadingRate;
				this.color = 'rgba(10,30,200,' + this.alpha + ')';
				this.tick++;
				if (this.alpha <= 0) {
					//self.circles.splice(i,1);
					this.x = this.cv.$width / 2;
					this.y = this.cv.$height / 2;
					this.r = Math.round(this.cv.circleMaxRadius * Math.random());
					this.alpha = 1;
					this.tick = 0;
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
				circleCount: 15,
				circleMaxRadius: 400,
				circleFadingRate: 0.04,
				lineWidth: 5
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
				this.circles.push(new Circle(this.$width / 2, this.$height / 2, this /*Math.random()*$w,Math.random()*$h*/));
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
		template: '<canvas ref="cv" width="1000" height="1000"\n\tstyle="display:block;width:100%;"></canvas>',
		mounted: function mounted() {
			new Circles({
				el: this.$refs.cv
			});
		}
	};

/***/ },

/***/ 69:
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

				window.addEventListener('resize', function () {
					_this.$width = _this.$el.width = window.innerWidth;
					_this.$height = _this.$el.height = window.innerHeight;
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