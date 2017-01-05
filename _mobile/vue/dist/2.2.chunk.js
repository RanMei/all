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
	    var id = "_v-44c1c51d/Card.vue";
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

	module.exports = "\n<div class=\"space\" _v-44c1c51d=\"\">\n\t<div class=\"flipper\" :class=\"state\" @click=\"handleClick\" _v-44c1c51d=\"\">\n\t\t<div class=\"face front\" _v-44c1c51d=\"\">\n\t\t\t<p _v-44c1c51d=\"\">front</p>\n\t\t\t<img :src=\" '../../img/icons/iron_man.png' \" _v-44c1c51d=\"\">\n\t\t</div>\n\t\t<div class=\"face back\" _v-44c1c51d=\"\">\n\t\t\t<p _v-44c1c51d=\"\">back</p>\n\t\t\t<img :src=\" '../../img/icons/storm-trooper.png' \" _v-44c1c51d=\"\">\n\t\t</div>\n\t</div>\n</div>\n";

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

/***/ 66:
/***/ function(module, exports) {

	'use strict';

	function haha(elem) {
	  var COLORS, Confetti, NUM_CONFETTI, PI_2, canvas, confetti, context, drawCircle, i, range, resizeWindow, xpos;

	  NUM_CONFETTI = 60;

	  COLORS = [[85, 71, 106], [174, 61, 99], [219, 56, 83], [244, 92, 68], [248, 182, 70]];

	  PI_2 = 2 * Math.PI;

	  canvas = elem;

	  context = canvas.getContext("2d");

	  window.w = 0;

	  window.h = 0;

	  resizeWindow = function resizeWindow() {
	    window.w = canvas.width = window.innerWidth;
	    return window.h = canvas.height = window.innerHeight;
	  };

	  resizeWindow();

	  window.addEventListener('resize', resizeWindow, false);

	  window.onload = function () {
	    return setTimeout(resizeWindow, 0);
	  };

	  range = function range(a, b) {
	    return (b - a) * Math.random() + a;
	  };

	  drawCircle = function drawCircle(x, y, r, style) {
	    context.beginPath();
	    context.arc(x, y, r, 0, PI_2, false);
	    context.fillStyle = style;
	    return context.fill();
	  };

	  xpos = 0.5;

	  // document.onmousemove = function(e) {
	  //   return xpos = e.pageX / w;
	  // };

	  window.requestAnimationFrame = function () {
	    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
	      return window.setTimeout(callback, 1000 / 60);
	    };
	  }();

	  Confetti = function () {
	    function Confetti() {
	      this.style = COLORS[~~range(0, 5)];
	      //this.rgb = "rgba(" + this.style[0] + "," + this.style[1] + "," + this.style[2];
	      this.rgb = 'rgba(255,255,255';
	      //this.r = ~~range(2, 6);
	      this.r = ~~range(2, 6);
	      this.r2 = 2 * this.r;
	      this.replace();
	    }

	    Confetti.prototype.replace = function () {
	      this.opacity = 0;
	      this.dop = 0.03 * range(1, 4);
	      this.x = range(-this.r2, w - this.r2);
	      this.y = range(-20, h - this.r2);
	      this.xmax = w - this.r;
	      this.ymax = h - this.r;
	      //this.vx = range(0, 2) + 8 * xpos - 5;
	      this.vx = range(-3, 0);
	      //this.vy = 0.7 * this.r + range(-1, 1);
	      this.vy = 1 * this.r + range(-1, 1);
	    };

	    Confetti.prototype.draw = function () {
	      var ref;
	      this.x += this.vx;
	      this.y += this.vy;
	      this.opacity += this.dop;
	      if (this.opacity > 1) {
	        this.opacity = 1;
	        this.dop *= -1;
	      }
	      if (this.opacity < 0 || this.y > this.ymax) {
	        this.replace();
	      }
	      if (!(0 < (ref = this.x) && ref < this.xmax)) {
	        this.x = (this.x + this.xmax) % this.xmax;
	      }
	      return drawCircle(~~this.x, ~~this.y, this.r, this.rgb + "," + this.opacity + ")");
	    };

	    return Confetti;
	  }();

	  confetti = function () {
	    var j, ref, results;
	    results = [];
	    for (i = j = 1, ref = NUM_CONFETTI; 1 <= ref ? j <= ref : j >= ref; i = 1 <= ref ? ++j : --j) {
	      results.push(new Confetti());
	    }
	    return results;
	  }();

	  window.step = function () {
	    var c, j, len, results;
	    requestAnimationFrame(step);
	    context.clearRect(0, 0, w, h);
	    results = [];
	    for (j = 0, len = confetti.length; j < len; j++) {
	      c = confetti[j];
	      results.push(c.draw());
	    }
	    return results;
	  };

	  step();
	}

	module.exports = {
	  template: '\n        <canvas ref="confetti"\n        style="display:block;background:url(./cover.jpg);background-size:100% auto;"></canvas>\n    ',
	  mounted: function mounted() {
	    haha(this.$refs.confetti);
	  }
	};

/***/ },

/***/ 70:
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