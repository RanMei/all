webpackJsonp([4],{

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(17);
	__vue_script__ = __webpack_require__(18);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\lib\\GooeyMenu.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(19);
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
	    var id = "_v-ca5707c8/GooeyMenu.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 17:
1,

/***/ 18:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		mounted: function mounted() {
			function App() {
				this.elem = document.querySelector('#feGB');
				this.init();
			}
			App.prototype = {
				init: function init() {
					this.setStdDeviation();
					window.addEventListener('resize', this.setStdDeviation.bind(this));
				},
				setStdDeviation: function setStdDeviation() {
					var self = this;
					setTimeout(function () {
						self.width = window.innerWidth;
						var deviation = 12 * self.width / 720;
						self.elem.setAttribute('stdDeviation', deviation);
					}, 300);
				}
			};
			new App();
		}
	};

/***/ },

/***/ 19:
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"GooeyMenuContainer\" _v-ca5707c8=\"\">\n\t<div class=\"GooeyMenu\" _v-ca5707c8=\"\">\n\t\t<!-- CSS Gooey Menu (Version 2) -->\n\t\t<input type=\"checkbox\" href=\"#\" class=\"menu-open\" name=\"menu-open\" id=\"menu-open\" _v-ca5707c8=\"\">\n\t\t<label class=\"menu-open-button\" for=\"menu-open\" _v-ca5707c8=\"\">\n\t\t\t<span class=\"hamburger hamburger-1\" _v-ca5707c8=\"\"></span>\n\t\t\t<span class=\"hamburger hamburger-2\" _v-ca5707c8=\"\"></span>\n\t\t\t<span class=\"hamburger hamburger-3\" _v-ca5707c8=\"\"></span>\n\t\t</label>\n\n\t\t<a class=\"menu-item\" _v-ca5707c8=\"\"> <i class=\"fa fa-bar-chart\" _v-ca5707c8=\"\"></i> </a>\n\t\t<a class=\"menu-item\" _v-ca5707c8=\"\"> <i class=\"fa fa-plus\" _v-ca5707c8=\"\"></i> </a>\n\t\t<a class=\"menu-item\" _v-ca5707c8=\"\"> <i class=\"fa fa-heart\" _v-ca5707c8=\"\"></i> </a>\n\t\t<a class=\"menu-item\" _v-ca5707c8=\"\"> <i class=\"fa fa-envelope\" _v-ca5707c8=\"\"></i> </a>\n\t\t<a class=\"menu-item\" _v-ca5707c8=\"\"> <i class=\"fa fa-cog\" _v-ca5707c8=\"\"></i> </a>\n\t\t<a class=\"menu-item\" _v-ca5707c8=\"\"> <i class=\"fa fa-ellipsis-h\" _v-ca5707c8=\"\"></i> </a>\n\n\t\t<!-- filters -->\n\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 100 100\" _v-ca5707c8=\"\">\n\t\t\t<circle cx=\"50\" cy=\"50\" r=\"20\" fill=\"red\" _v-ca5707c8=\"\"></circle>\n\t\t\t<defs _v-ca5707c8=\"\">\n\t\t\t\t<filter id=\"shadowed-goo\" _v-ca5707c8=\"\">\n\t\t\t\t\t<feGaussianBlur in=\"SourceGraphic\" result=\"blur\" stdDeviation=\"10\" _v-ca5707c8=\"\"></feGaussianBlur>\n\t\t\t\t\t<feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7\" result=\"goo\" _v-ca5707c8=\"\"></feColorMatrix>\n\t\t\t\t\t<feGaussianBlur in=\"goo\" stdDeviation=\"3\" result=\"shadow\" _v-ca5707c8=\"\"></feGaussianBlur>\n\t\t\t\t\t<feColorMatrix in=\"shadow\" mode=\"matrix\" values=\"0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2\" result=\"shadow\" _v-ca5707c8=\"\"></feColorMatrix>\n\t\t\t\t\t<feOffset in=\"shadow\" dx=\"1\" dy=\"1\" result=\"shadow\" _v-ca5707c8=\"\"></feOffset>\n\t\t\t\t\t<feComposite in2=\"shadow\" in=\"goo\" result=\"goo\" _v-ca5707c8=\"\"></feComposite>\n\t\t\t\t\t<feComposite in2=\"goo\" in=\"SourceGraphic\" result=\"mix\" _v-ca5707c8=\"\"></feComposite>\n\t\t\t\t</filter>\n\t\t\t\t<filter id=\"goo\" x=\"-300%\" y=\"-300%\" width=\"600%\" height=\"600%\" _v-ca5707c8=\"\">\n\t\t\t\t\t<feGaussianBlur id=\"feGB\" in=\"SourceGraphic\" result=\"blur\" stdDeviation=\"8\" _v-ca5707c8=\"\"></feGaussianBlur>\n\t\t\t\t\t<feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7\" result=\"goo\" _v-ca5707c8=\"\"></feColorMatrix>\n\t\t\t\t\t<feComposite in2=\"goo\" in=\"SourceGraphic\" result=\"mix\" _v-ca5707c8=\"\"></feComposite>\n\t\t\t\t</filter>\n\t\t\t</defs>\n\t\t</svg>\n\t</div>\n</div>\n";

/***/ },

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
	    var id = "_v-300eafae/Carousel.vue";
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

	module.exports = "\n<div class=\"Carousel\" _v-300eafae=\"\">\n\t<!-- CSS 3D Carousel -->\n\t<div class=\"cards\" :style=\" 'transform: rotateY('+rotateY+'deg);-webkit-transform: rotateY('+rotateY+'deg);' \" _v-300eafae=\"\">\n\t\t<div class=\"item a\" _v-300eafae=\"\">A</div>\n\t\t<div class=\"item b\" _v-300eafae=\"\">B</div>\n\t\t<div class=\"item c\" _v-300eafae=\"\">C</div>\n\t\t<div class=\"item d\" _v-300eafae=\"\">D</div>\n\t\t<div class=\"item e\" _v-300eafae=\"\">E</div>\n\t\t<div class=\"item f\" _v-300eafae=\"\">F</div>\n\t</div>\n\t<div class=\"next\" @click=\"next\" _v-300eafae=\"\">Next</div>\n\t<div class=\"prev\" @click=\"prev\" _v-300eafae=\"\">Prev</div>\n</div>\n";

/***/ },

/***/ 56:
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

/***/ }

});