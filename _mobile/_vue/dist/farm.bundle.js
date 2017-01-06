/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var root = new Vue({
		el: '#root',
		components: {
			App: __webpack_require__(8)
		},
		template: '<app></app>'
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	__webpack_require__(3);

	__webpack_require__(4);

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	document.addEventListener('DOMContentLoaded', function () {

		var $html = document.querySelector('html');
		var $body = document.querySelector('body');
		var $screen = document.createElement('div');

		$screen.style.cssText += 'position:fixed; width:100%; height:100%; display:none;';
		$body.insertBefore($screen, $body.firstChild);

		function setRem() {
			$screen.style.display = 'block';
			var w = Number(document.defaultView.getComputedStyle($screen).width.replace(/px/, ''));
			var h = Number(document.defaultView.getComputedStyle($screen).height.replace(/px/, ''));
			$screen.style.display = 'none';
			$html.style.fontSize = 100 * w / 750 + 'px';
			//document.getElementsByClassName('container')[0].style.height = h+'px';
			console.debug('rem: Rem reset. Size of the viewport is ' + w + '*' + h + '.');
		}
		setRem();
		window.addEventListener('resize', setRem);
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	var root = location.href.replace(/act161203.+/, 'act161203/adr/');

	window.DIR = {
		video: root + 'video/'
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(9);
	__vue_script__ = __webpack_require__(12);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\_vue\\src\\_farm\\App.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(24);
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
	    var id = "_v-710a0456/App.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		components: {
			Farm: __webpack_require__(13)
		},
		data: function data() {
			return {};
		},
		computed: {},
		watch: {},
		created: function created() {},
		mounted: function mounted() {},
		methods: {}
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(14);
	__vue_script__ = __webpack_require__(16);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\_vue\\src\\lib\\Farm.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(23);
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
	    var id = "_v-091a8982/Farm.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 14 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 15 */,
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		components: {
			Confetti: __webpack_require__(17),
			SmokyText: __webpack_require__(18)
		}
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	var Canvas = window.Canvas;

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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(19);
	__vue_script__ = __webpack_require__(21);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\_vue\\src\\lib\\SmokyText.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(22);
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
	    var id = "_v-e96d0a98/SmokyText.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 19 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 20 */,
/* 21 */
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
/* 22 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"SmokyText\" :class=\"className\"\n@click=\"go\">\n\t<p class=\"text\">\n\t\t<span>冬</span><span>牧</span><span>场</span><span>冬</span><span>牧</span><span>场</span><br/>\n\t\t<span>冬</span><span>牧</span><span>场</span><span>冬</span><span>牧</span><span>场</span><br/>\n\t</p>\n</div>\n";

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Farm\" _v-091a8982=\"\">\n\t<confetti _v-091a8982=\"\"></confetti>\n\t<smoky-text _v-091a8982=\"\"></smoky-text>\n</div>\n";

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "\n\t<div id=\"root\" _v-710a0456=\"\">\n\n\t\t\n\t\t<div class=\"main\" _v-710a0456=\"\">\n\t\t\t<farm _v-710a0456=\"\"></farm>\n\t\t</div>\n\n<!-- \t\t<debugger\n\t\t:state=\"$data\"></debugger> -->\n\t</div>\n";

/***/ }
/******/ ]);