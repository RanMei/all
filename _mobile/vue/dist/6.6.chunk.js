webpackJsonp([6],{

/***/ 36:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(37);
	__vue_script__ = __webpack_require__(38);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\lib\\Carousel.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(39);
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
	    var id = "_v-4acd40ed/Carousel.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 37:
1,

/***/ 38:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {
				rotateY: 0
			};
		},
		methods: {
			next: function next() {
				this.rotateY -= 60;
			},
			prev: function prev() {
				this.rotateY += 60;
			}
		}
	};

/***/ },

/***/ 39:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Carousel\" _v-4acd40ed=\"\">\n\t<!-- CSS 3D Carousel -->\n\t<div class=\"cards\" :style=\" 'transform: rotateY('+rotateY+'deg);-webkit-transform: rotateY('+rotateY+'deg);' \" _v-4acd40ed=\"\">\n\t\t<div class=\"item a\" _v-4acd40ed=\"\">A</div>\n\t\t<div class=\"item b\" _v-4acd40ed=\"\">B</div>\n\t\t<div class=\"item c\" _v-4acd40ed=\"\">C</div>\n\t\t<div class=\"item d\" _v-4acd40ed=\"\">D</div>\n\t\t<div class=\"item e\" _v-4acd40ed=\"\">E</div>\n\t\t<div class=\"item f\" _v-4acd40ed=\"\">F</div>\n\t</div>\n\t<div class=\"next\" @click=\"next\" _v-4acd40ed=\"\">Next</div>\n\t<div class=\"prev\" @click=\"prev\" _v-4acd40ed=\"\">Prev</div>\n</div>\n";

/***/ },

/***/ 40:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(41);
	__vue_script__ = __webpack_require__(42);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\lib\\StrokeCircle.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(43);
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
	    var id = "_v-6f13ce35/StrokeCircle.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 41:
1,

/***/ 42:
/***/ function(module, exports) {

	"use strict";

	var strokeCircle = {};
	module.exports = strokeCircle;

/***/ },

/***/ 43:
/***/ function(module, exports) {

	module.exports = "\n<svg class=\"test\" viewBox=\"0,0,1000,1000\" pointer-events=\"all\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" _v-6f13ce35=\"\">\n\t<defs _v-6f13ce35=\"\">\n\t\t<linearGradient id=\"linearGradient-1\" x1=\"0%\" y1=\"100%\" x2=\"100%\" y2=\"100%\" _v-6f13ce35=\"\">\n\t\t\t<stop stop-color=\"#2090F8\" offset=\"0%\" _v-6f13ce35=\"\"></stop>\n\t\t\t<stop stop-color=\"#01FCE4\" offset=\"41.7610013%\" _v-6f13ce35=\"\"></stop>\n\t\t\t<stop stop-color=\"#0BFF8C\" offset=\"78.6870217%\" _v-6f13ce35=\"\"></stop>\n\t\t\t<stop stop-color=\"#51FF00\" offset=\"100%\" _v-6f13ce35=\"\"></stop>\n\t\t</linearGradient>\n\t</defs>\n\n\t<circle class=\"circle-red\" cx=\"500\" cy=\"500\" r=\"200\" stroke=\"url(#linearGradient-1)\" _v-6f13ce35=\"\"></circle>\n\t<circle class=\"circle-red-1\" cx=\"500\" cy=\"500\" r=\"100\" stroke=\"url(#linearGradient-1)\" _v-6f13ce35=\"\"></circle>\n\n</svg>\n";

/***/ },

/***/ 65:
/***/ function(module, exports) {

	'use strict';

	function haha(el) {
		// hyperstellar
		var c = el;
		var $ = c.getContext('2d');
		var u = 0;

		var go = function go() {
			var sc,
			    g,
			    g1,
			    i,
			    j,
			    p,
			    x,
			    y,
			    z,
			    w,
			    a,
			    cur,
			    d = new Date() / 1000,
			    rnd = shift(),
			    rnd1 = d,
			    rnd2 = 2.4,
			    rnd3 = d * 0.2,
			    rnd1c = Math.cos(rnd1),
			    rnd1s = Math.sin(rnd1),
			    rnd2c = Math.cos(rnd2),
			    rnd2s = Math.sin(rnd2);

			c.width = window.innerWidth;
			c.height = window.innerHeight;
			sc = Math.max(c.width, c.height);
			$.translate(c.width * 0.5, c.height * 0.5);
			$.scale(sc, sc);
			g = $.createLinearGradient(-1, -2, 1, 2);
			g.addColorStop(0.0, 'hsla(338, 95%, 25%, 1)');
			g.addColorStop(0.5, 'hsla(260, 95%, 5%, 1)');
			g.addColorStop(1.0, 'hsla(338, 95%, 30%, 1)');
			$.fillStyle = g;
			$.fillRect(-0.5, -0.5, 1, 1);
			$.globalCompositeOperation = 'lighter';
			$.rotate(rnd3 % Math.PI * 2);

			for (i = 0; i < 50; i += 1) {
				p = rnd();
				x = (p & 0xff) / 128 - 1;
				y = (p >>> 8 & 0xff) / 128 - 1;
				z = (p >>> 16 & 0xff) / 128 - 1;
				w = (p >>> 24 & 0xff) / 256;
				z += d * 0.5;
				z = (z + 1) % 2 - 1;
				a = (z + 1) * 0.5;
				if (a < 0.9) {
					$.globalAlpha = a / 0.7;
				} else {
					a -= 0.9;
					$.globalAlpha = 1 - a / 0.1;
				}
				cur = x * rnd1c + y * rnd1s;
				y = x * rnd1s - y * rnd1c;
				x = cur;
				cur = y * rnd2c + z * rnd2s;
				z = y * rnd2s - z * rnd2c;
				y = cur;
				z -= 0.65;
				if (z >= 0) {
					continue;
				}
				sc = 0.1 / z;
				x *= sc;
				y *= sc;
				$.save();
				// g1 = $.createRadialGradient(1, 1, 2, 1, 1, 1);
				// g1.addColorStop(0.0, 'hsla('+i+', 70%, 40%,.8)');
				// g1.addColorStop(0.5, 'hsla('+i+', 75%, 50%, 1)');
				// g1.addColorStop(1.0, 'hsla('+i+', 80%, 60%, .8)');
				$.fillStyle = 'white';
				$.translate(x, y);
				$.scale(sc * 0.017, sc * 0.017);
				$.beginPath();
				$.moveTo(2, 0);
				for (j = 0; j < 10; j += 1) {
					$.rotate(Math.PI * 2 * 0.1);
					$.lineTo(j % 2 + 1, 0);
				}
				$.arc(10, 10, 2, 0, Math.PI * 2);
				$.rotate(Math.PI * 2 * 0.1);
				$.closePath();
				$.fill();
				$.restore();
			}
		};
		/*
	 Marsaglia's Xorshift128 PRG: http://en.wikipedia.org/wiki/Xorshift
	 */
		var shift = function shift(x, y, z, w) {
			x = x || 123456789;
			y = y || 362436069;
			z = z || 521288629;
			w = w || 88675123;

			return function () {
				var s = x ^ x << 11;
				x = y;
				y = z;
				z = w;
				w = w ^ w >>> 19 ^ (s ^ s >>> 8);
				return w;
			};
		};
		window.addEventListener('resize', function () {
			c.width = window.innerWidth;
			c.height = window.innerHeight;
		}, false);

		var run = function run() {
			window.requestAnimationFrame(run);
			go();
		};
		run();
	};

	module.exports = {
		template: '\n\t<canvas ref="Blizzard" width="1000" height="1000"\n\tstyle="display:block;background:#0BA2FF;"></canvas>\n\t',
		mounted: function mounted() {
			haha(this.$refs.Blizzard);
		}
	};

/***/ },

/***/ 67:
/***/ function(module, exports) {

	'use strict';

	function Drop(cv) {
		var self = this;
		this.w = cv.$width;
		this.ctx = cv.$ctx;
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

	var Rain = Canvas.extend({
		props: function props() {
			return {
				dropCount: 500
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
				drop.draw();
				drop.step();
				if (drop.y > self.$height) {
					self.drops[i] = new Drop(self);
					self.splashes.push(new Splash(drop.x, self.$height, self));
				}
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
		template: '<canvas id="Rain" width="1000" height="1000" ref="canvas" style="display:block;width:100%;"></canvas>',
		mounted: function mounted() {
			new Rain({
				el: this.$refs.canvas,
				props: {
					dropCount: 500
				}
			});
		}
	};

/***/ }

});