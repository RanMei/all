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

/***/ 52:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(53);
	__vue_script__ = __webpack_require__(54);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\lib\\MachineGunText.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(55);
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
	    var id = "_v-e0ccbdda/MachineGunText.vue";
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
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function haha() {
		var container = document.querySelector('.MachineGunText');
		var _sentenceEndExp = /(榜)$/g;

		function machineGun(text) {
			var words = text.split(" "),
			    tl = new TimelineMax({ delay: 0.6, repeat: 2, repeatDelay: 4 }),
			    wordCount = words.length,
			    time = 0,
			    word,
			    element,
			    duration,
			    isSentenceEnd,
			    i;

			for (i = 0; i < wordCount; i++) {
				word = words[i];
				isSentenceEnd = _sentenceEndExp.test(word);
				element = function () {
					var child = document.createElement('h3');
					child.innerHTML = word;
					container.appendChild(child);
					return child;
				}();

				duration = Math.max(0.5, word.length * 0.15);
				if (isSentenceEnd) {
					duration += 0.6;
				}

				TweenLite.set(element, { autoAlpha: 0, scale: 0, z: 0.01 });

				tl.to(element, duration, {
					scale: 1.2,
					ease: SlowMo.ease.config(0.25, 0.9)
				}, time).to(element, duration, { autoAlpha: 1, ease: SlowMo.ease.config(0.25, 0.9, true) }, time);
				time += duration - 0.05;
				if (isSentenceEnd) {
					time += 0.6;
				}
			}
		}

		machineGun("阅文集团 年度庆典 原创 文学 风 云 榜");
	};

	exports.default = {
		mounted: function mounted() {
			haha();
		}
	};

/***/ },

/***/ 55:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"MachineGunText\"></div>\n";

/***/ },

/***/ 60:
/***/ function(module, exports) {

	'use strict';

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

	    this.cv = opts.cv;
	    this.color = this.opts.color;
	    this.x = this.opts.x;
	    this.y = this.opts.y;
	    this.d = this.opts.d;

	    this.radius = this.opts.radius;
	};
	Particle.prototype = {
	    update: function update() {
	        var width = this.cv.$width;
	        var height = this.cv.$height;
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

	var Snow = Canvas.extend({
	    props: function props() {
	        return {
	            color: 'white',
	            speed: 2,
	            count: 50,
	            maxRadius: 5
	        };
	    },
	    data: function data() {
	        return {
	            particles: [],
	            angle: 0
	        };
	    },
	    beforePlay: function beforePlay() {
	        var _this = this;

	        this.$setSize(window.innerWidth, window.innerHeight);
	        window.addEventListener('resize', function () {
	            _this.$setSize(window.innerWidth, window.innerHeight);
	        });
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
	                    color: self.color,
	                    x: Math.round(Math.random() * self.$width),
	                    y: Math.round(Math.random() * self.$height),
	                    d: Math.random(),
	                    radius: getRandomInt(2, self.maxRadius),
	                    cv: self,
	                    ctx: self.$ctx
	                }));
	            }
	        }
	    }
	});

	module.exports = {
	    template: '\n        <canvas ref="snowfall" width="1000" height="1000"\n        style="display:block;background:#0BA2FF;"></canvas>\n    ',
	    mounted: function mounted() {
	        new Snow({
	            el: this.$refs.snowfall,
	            props: {
	                color: 'white',
	                speed: 2,
	                count: 20,
	                maxRadius: 5
	            }
	        });
	    }
	};

/***/ }

});