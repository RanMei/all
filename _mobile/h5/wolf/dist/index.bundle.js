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
/******/ 	__webpack_require__.p = "./dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(15);

	__webpack_require__(16);

	new Vue({
		el: '#root',
		components: {
			App: __webpack_require__(17)
		},
		template: '\n\t\t<app></app>\n\t'
	});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
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
/* 16 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__vue_script__ = __webpack_require__(18);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\h5\\wolf\\src\\_index\\App.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(52);
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
	    var id = "_v-67a52cd8/App.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _store = __webpack_require__(19);

	exports.default = {
		components: {
			Slider: __webpack_require__(20)
		},
		data: function data() {
			return _store.data;
		},
		methods: {
			act: _store.act
		}
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var data = {
		img: '../../../desktop/_wolf/images'

	};

	function act(action) {}

	exports.data = data;
	exports.act = act;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(21);
	__vue_script__ = __webpack_require__(22);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\h5\\wolf\\src\\components\\Slider.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(51);
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
	    var id = "_v-2fb7ee9b/Slider.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 21 */
16,
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			img: {},
			items: {
				default: function _default() {
					return ['#6dace2', '#af9180', 'yellow', '', ''];
				}
			},
			duration: {
				default: 200
			}
		},
		components: {
			Item0: __webpack_require__(23),
			Item1: __webpack_require__(31),
			Item2: __webpack_require__(35),
			Item4: __webpack_require__(43)
		},
		data: function data() {
			return {
				viewportHeight: 0,
				color: 'black',
				current: 4,
				Y1: null,
				Y2: null,

				active: {
					0: false,
					1: false,
					2: false,
					3: false,
					4: false
				}
			};
		},
		watch: {
			current: function current(neo, old) {
				this.active[old] = false;
				this.active[neo] = true;
			}
		},
		mounted: function mounted() {
			var _this = this;

			this.viewportHeight = window.innerHeight;
			window.addEventListener('resize', function () {
				_this.viewportHeight = window.innerHeight;
			}, 50);

			this.active[this.current] = true;
		},
		methods: {
			keydown: function keydown(e) {
				console.log(e);
			},
			touchstart: function touchstart(e) {
				this.Y1 = e.changedTouches[0].pageY;
			},
			touchmove: function touchmove(e) {
				e.preventDefault();
			},
			touchend: function touchend(e) {
				this.Y2 = e.changedTouches[0].pageY;
				var distance = this.Y2 - this.Y1;

				if (distance < -10) {
					this.toNext();
				} else if (distance > 10) {
					if (this.current > 0) {
						this.current--;
					}
				}
			},
			toNext: function toNext() {
				if (this.current < this.items.length - 1) {
					this.current++;
				}
			}
		}
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(24);
	__vue_script__ = __webpack_require__(25);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\h5\\wolf\\src\\components\\Item0.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(30);
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
	    var id = "_v-3fa5089a/Item0.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 24 */
16,
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		components: {
			Circles: __webpack_require__(26)
		},
		props: ['img', 'act', 'active'],
		data: function data() {
			return {
				logoActive: false,
				circlesActive: false,
				text_new: false,
				text_0: false,
				text_1: false,
				text_2: false,
				text_3: false
			};
		},
		watch: {
			active: function active(b) {
				if (b) {
					this.go();
				} else {
					this.reset();
				}
			}
		},
		mounted: function mounted() {},
		methods: {
			go: function go() {
				var _this = this;

				this.reset();
				if (!this.active) return;
				this.logoActive = true;
				setTimeout(function () {
					if (!_this.active) return;
					_this.circlesActive = true;
					setTimeout(function () {
						if (!_this.active) return;
						_this.text_new = true;
						setTimeout(function () {
							if (!_this.active) return;
							_this.text_0 = true;
							setTimeout(function () {
								if (!_this.active) return;
								_this.text_1 = true;
								setTimeout(function () {
									if (!_this.active) return;
									_this.text_2 = true;
									setTimeout(function () {
										if (!_this.active) return;
										_this.text_3 = true;
									}, 1000);
								}, 1000);
							}, 1000);
						}, 1000);
					}, 1000);
				}, 1000);
			},
			reset: function reset() {
				this.logoActive = false;
				this.circlesActive = false;
				this.text_new = false;
				this.text_0 = false;
				this.text_1 = false;
				this.text_2 = false;
				this.text_3 = false;
			}
		}
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(27);
	__vue_script__ = __webpack_require__(28);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\h5\\wolf\\src\\components\\Circles.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(29);
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
	    var id = "_v-6b25414e/Circles.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 27 */
16,
/* 28 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			active: {}
		},
		data: function data() {
			return {};
		}
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Circles\" _v-6b25414e=\"\">\n\t<div class=\"round blue\" :class=\" active?'active':'' \" _v-6b25414e=\"\"></div>\n\t<div class=\"round lightblue\" :class=\" active?'active':'' \" _v-6b25414e=\"\"></div>\n\t<div class=\"round yellow\" :class=\" active?'active':'' \" _v-6b25414e=\"\"></div>\n\t<div class=\"round red\" :class=\" active?'active':'' \" _v-6b25414e=\"\"></div>\n\t<div class=\"round violet\" :class=\" active?'active':'' \" _v-6b25414e=\"\"></div>\n\t<div class=\"round green\" :class=\" active?'active':'' \" _v-6b25414e=\"\"></div>\n\t<div class=\"round purple\" :class=\" active?'active':'' \" _v-6b25414e=\"\"></div>\n</div>\n";

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "\n<li class=\"Item0\" style=\"background:white;\" _v-3fa5089a=\"\">\n\t<img class=\"logo\" :src=\" img+'/logo.png' \" :class=\" logoActive?'active':'' \" _v-3fa5089a=\"\">\n\t<circles :active=\"circlesActive\" _v-3fa5089a=\"\"></circles>\n\t<p class=\"text_new\" :class=\" text_new?'active':'' \" _v-3fa5089a=\"\">全新的紫狼游戏</p>\n\t<p class=\"text text_0\" :class=\" text_0?'active':'' \" _v-3fa5089a=\"\">紫狼游戏创立于2008年</p>\n\t<p class=\"text text_1\" :class=\" text_1?'active':'' \" _v-3fa5089a=\"\">发起人是一群热爱游戏的小伙伴</p>\n\t<p class=\"text text_2\" :class=\" text_2?'active':'' \" _v-3fa5089a=\"\">公司创始人中有多位高级程序员</p>\n\t<p class=\"text text_3\" :class=\" text_3?'active':'' \" _v-3fa5089a=\"\">因此公司在创立之初就被灌注了浓厚的技术基因</p>\n\t<img class=\"arrow\" _v-3fa5089a=\"\">\n</li>\n";

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(32);
	__vue_script__ = __webpack_require__(33);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\h5\\wolf\\src\\components\\Item1.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(34);
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
	    var id = "_v-3f88d998/Item1.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 32 */
16,
/* 33 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			img: {},
			active: {}
		},
		data: function data() {
			return {
				title: false,
				warrior: false
			};
		},
		watch: {
			active: function active(b) {
				if (b) {
					this.go();
				} else {
					this.reset();
				}
			}
		},
		methods: {
			go: function go() {
				this.warrior = true;
				this.title = true;
			},
			reset: function reset() {
				this.warrior = false;
				this.title = false;
			}
		}
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"Item1\" _v-3f88d998=\"\">\n\t<p class=\"title\" :class=\" title?'active':'' \" _v-3f88d998=\"\">做业内最优秀的游戏开拓者</p>\n\t<img class=\"warrior\" :src=\" img+'/cont2_m.png' \" :class=\" warrior?'active':'' \" _v-3f88d998=\"\">\n</div>\n";

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(36);
	__vue_script__ = __webpack_require__(37);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\h5\\wolf\\src\\components\\Item2.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(42);
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
	    var id = "_v-3f6caa96/Item2.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 36 */
16,
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			img: {},
			active: {}
		},
		components: {
			CardCarousel: __webpack_require__(38)
		},
		data: function data() {
			return {
				count: 0,
				an: {
					carousel: {
						s: '',
						p: 0
					},
					title: {
						s: '',
						p: 1000
					},
					text_0: {
						s: '',
						p: 1500
					},
					text_1: {
						s: '',
						p: 2000
					},
					text_2: {
						s: '',
						p: 2500
					},
					text_3: {
						s: '',
						p: 3000
					}
				}
			};
		},
		watch: {
			active: function active(neo) {
				if (neo) {
					this.go();
				} else {
					this.reset();
				}
			}
		},
		mounted: function mounted() {},
		methods: {
			go: function go() {
				var _this = this;

				this.reset();
				this.count++;
				var count = this.count;

				var _loop = function _loop(key) {
					setTimeout(function () {
						if (count !== _this.count) return;
						_this.an[key].s = 'active';
					}, _this.an[key].p);
				};

				for (var key in this.an) {
					_loop(key);
				}
			},
			reset: function reset() {
				for (var key in this.an) {
					this.an[key].s = '';
				}
			}
		}
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(39);
	__vue_script__ = __webpack_require__(40);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\h5\\wolf\\src\\components\\CardCarousel.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(41);
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
	    var id = "_v-47ef156c/CardCarousel.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 39 */
16,
/* 40 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			img: {},
			active: {},
			duration: {
				default: 500
			}
		},
		data: function data() {
			return {
				state: ['transform: translate3d(-360px,0,-360px) rotateY(40deg);'],

				carousel: false,
				cards: [{
					style: '',
					p: 0
				}, {
					style: '',
					p: 1
				}, {
					style: '',
					p: 2
				}, {
					style: '',
					p: 3
				}, {
					style: '',
					p: 4
				}, {
					style: '',
					p: 5
				}, {
					style: '',
					p: 6
				}],
				switching: false,
				current: 0
			};
		},
		watch: {
			active: function active(b) {
				if (b) {
					this.carousel = true;
				} else {
					this.carousel = false;
				}
			}
		},
		mounted: function mounted() {},
		methods: {
			update: function update() {
				var self = this;
				self.cards.forEach(function (a) {
					var target = a.p + 1;
					if (target > 6) {
						target = 0;
					};
					a.style = 'animation: ' + self.duration + 'ms _' + a.p + 'to' + target + ' forwards';
					a.p = target;
				});
			},
			next: function next() {
				var self = this;
				if (!this.switching) {
					this.switching = true;

					self.cards.forEach(function (a) {
						var target = a.p + 1;
						if (target > 6) {
							target = 0;
						};
						a.style = 'animation: ' + self.duration + 'ms _' + a.p + 'to' + target + ' forwards';
						a.p = target;
					});

					if (self.current < 6) {
						self.current++;
					} else {
						self.current = 0;
					}

					setTimeout(function () {
						self.switching = false;
					}, self.duration);
				};
			},
			prev: function prev() {
				var self = this;
				if (!this.switching) {
					this.switching = true;

					self.cards.forEach(function (a) {
						var target = a.p - 1;
						if (target < 0) {
							target = 6;
						};
						a.style = 'animation: ' + self.duration + 'ms _' + a.p + 'to' + target + ' forwards';
						a.p = target;
					});

					if (self.current > 0) {
						self.current--;
					} else {
						self.current = 6;
					}

					setTimeout(function () {
						self.switching = false;
					}, self.duration);
				};
			}
		}
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"CardCarousel\" :class=\" carousel?'active':'' \" _v-47ef156c=\"\">\n\t<img class=\"prev\" :src=\" img+'/left.png' \" @click=\"prev\" _v-47ef156c=\"\">\n\t<img class=\"next\" :src=\" img+'/right.png' \" @click=\"next\" _v-47ef156c=\"\">\n\t<div class=\"cards\" _v-47ef156c=\"\">\n\t\t<img v-for=\"(a,i) in cards\" class=\"card\" :class=\" 'card'+(i+1) \" :src=\" img+'/cont4_demo'+(i+1)+'.png' \" :style=\" a.style \" _v-47ef156c=\"\">\n\t</div>\n</div>\n";

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"Item2\" _v-3f6caa96=\"\">\n\t<card-carousel :img=\"img\" :active=\"active\" _v-3f6caa96=\"\"></card-carousel>\n\t<p class=\"title\" :class=\"an.title.s\" _v-3f6caa96=\"\">发展历程</p>\n\t<p class=\"text text_0\" :class=\"an.text_0.s\" _v-3f6caa96=\"\">2012年，团队组建，紫狼游戏蓄势待发</p>\n\t<p class=\"text text_1\" :class=\"an.text_1.s\" _v-3f6caa96=\"\">经过三年的努力</p>\n\t<p class=\"text text_2\" :class=\"an.text_2.s\" _v-3f6caa96=\"\">紫狼游戏已经在整个游戏产业中积累了相当的资源</p>\n\t<p class=\"text text_3\" :class=\"an.text_3.s\" _v-3f6caa96=\"\">未来，我们的竞争优势会与日俱增</p>\n</div>\n";

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(44);
	__vue_script__ = __webpack_require__(45);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\h5\\wolf\\src\\components\\Item4.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(50);
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
	    var id = "_v-3f344c92/Item4.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 44 */
16,
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			img: {},
			active: {}
		},
		data: function data() {
			return {
				svg_penguin: false,
				text_0: '',
				text_1: ''
			};
		},
		components: {
			SvgPenguin: __webpack_require__(46)
		},
		watch: {
			active: function active(neo) {
				if (neo) {
					this.go();
				} else {
					this.reset();
				}
			}
		},
		methods: {
			go: function go() {
				var _this = this;

				this.svg_penguin = true;
				setTimeout(function () {
					_this.text_0 = 'active';
					setTimeout(function () {
						_this.text_1 = 'active';
					}, 500);
				}, 7000);
			},
			reset: function reset() {
				this.svg_penguin = false;
				this.text_0 = '';
				this.text_1 = '';
			}
		}
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(47);
	__vue_script__ = __webpack_require__(48);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\h5\\wolf\\src\\components\\SvgPenguin.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(49);
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
	    var id = "_v-7486e53c/SvgPenguin.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 47 */
16,
/* 48 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			active: {}
		},
		data: function data() {
			return {
				cycle: 0,

				coversC: '',
				backbone: '',

				coversA: '',
				coversB: '',
				pages: '',

				markA: '',
				markB: '',

				second: ''
			};
		},
		watch: {
			active: function active(neo) {
				console.log(neo);
				if (neo) {
					this.cycle++;
					this.go();
				} else {
					this.reset();
				}
			}
		},
		mounted: function mounted() {},
		methods: {
			go: function go() {
				var _this = this;

				var self = this;
				var cycle = this.cycle;
				if (cycle !== this.cycle) return;
				self.reset();
				self.coversC = 'active';
				self.backbone = 'active';
				setTimeout(function () {
					if (cycle !== _this.cycle) return;
					self.coversA = 'active';
					self.coversB = 'active';
					self.pages = 'active';
					setTimeout(function () {
						if (cycle !== _this.cycle) return;
						self.markA = 'active';
						self.markB = 'active';
						setTimeout(function () {
							if (cycle !== _this.cycle) return;
							self.second = 'active';
						}, 2000);
					}, 2000);
				}, 2000);
			},
			reset: function reset() {
				this.coversC = '__';
				this.backbone = '';
				this.coversA = '';
				this.coversB = '';
				this.pages = '';
				this.markA = '';
				this.markB = '';
				this.second = '';
			}
		}
	};

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = "\n<svg viewBox=\"0 0 189 217\" xmlns=\"http://www.w3.org/2000/svg\" class=\"SvgPenguin\" _v-7486e53c=\"\">\n\t<g fill=\"none\" fill-rule=\"evenodd\" _v-7486e53c=\"\">\n\t\t<path class=\"second\" id=\"face\" :class=\"second\" fill=\"#000\" d=\"M159.015 67.85c-1.022 35.733-10.915 44.3-64.69 44.3-53.785 0-64.94-8.553-64.94-44.3C29.384 28.83 58.4.732 94.192.732c35.805 0 65.82 32.11 64.822 67.116z\" _v-7486e53c=\"\"></path>\n\t\t<path class=\"second\" id=\"beak\" :class=\"second\" d=\"M122.093 87.704C108.323 95.15 104.495 99.1 93.67 99.486c-10.83.385-14.652-4.335-28.425-11.78-21.67-11.715-12.01-12.7 1.77-16.97 8.177-2.53 19.414-3.77 26.655-3.77 7.235 0 18.476 1.24 26.65 3.77 13.786 4.27 23.44 5.255 1.773 16.968z\" fill=\"#FA0\" _v-7486e53c=\"\"></path>\n\t\t<path class=\"second\" id=\"mouth\" :class=\"second\" d=\"M126.5 77.197s-4.202 6.393-15.634 10.912c-5.988 2.365-8.466 7.798-17.196 7.798-8.728 0-11.222-5.4-17.2-7.8C65.198 83.59 60.84 77.2 60.84 77.2c2.536 2.023 12.508 11.788 32.674 11.788 20.173 0 30.45-9.765 32.986-11.79z\" fill=\"#AB2C29\" _v-7486e53c=\"\"></path>\n\t\t<path class=\"second\" id=\"eyes\" :class=\"second\" d=\"M63.88 48.69C63.514 39 68.636 30.902 75.323 30.6c6.68-.298 12.388 7.315 12.75 17 .366 9.69-4.756 17.786-11.438 18.086-6.685.302-12.4-7.314-12.757-16.997zM98.342 48.507c0-9.67 5.41-17.51 12.082-17.51 6.67 0 12.085 7.84 12.085 17.51 0 9.665-5.415 17.502-12.086 17.502-6.67-.002-12.082-7.838-12.082-17.503z\" fill=\"#FFF\" _v-7486e53c=\"\"></path>\n\t\t<path class=\"second\" id=\"pupils\" :class=\"second\" d=\"M113.76 53.12c-.865 0-1.564-.705-1.564-1.57v-.364c0-4.075-1.55-7.266-3.524-7.266-1.978 0-3.528 3.19-3.528 7.266v.363c0 .865-.697 1.57-1.563 1.57-.862 0-1.566-.705-1.566-1.57v-.364c0-6.123 2.743-10.4 6.658-10.4 3.912 0 6.654 4.277 6.654 10.4v.363c0 .864-.705 1.57-1.567 1.57zM84.866 47.06c.32 4.498-1.866 8.493-4.872 8.93-3.01.436-5.707-2.856-6.028-7.355-.314-4.5 1.866-8.494 4.868-8.927 3.016-.437 5.716 2.856 6.032 7.353z\" fill=\"#000\" _v-7486e53c=\"\"></path>\n\t\t<path class=\"second\" id=\"hole\" :class=\"second\" d=\"M82.672 46.803c.05 1.503-.788 2.79-1.87 2.87-1.073.086-1.982-1.062-2.032-2.57-.044-1.5.793-2.792 1.867-2.873 1.08-.08 1.987 1.07 2.035 2.573z\" fill=\"#FFF\" _v-7486e53c=\"\"></path>\n\n\t\t<path class=\"second\" id=\"arms\" d=\"M6.78 110.387c2.692 4.73 8.25 3.438 9.727 10.577 1.478 7.14.135 13.657-4.376 14.558-4.51.9-9.1-.283-11.147-7.28-3.124-10.678 3.105-22.586 5.797-17.855zM181.866 110.387c-2.692 4.73-8.25 3.438-9.727 10.577-1.48 7.14-.136 13.657 4.375 14.558 4.51.9 9.1-.283 11.148-7.28 3.124-10.678-3.105-22.586-5.797-17.855z\" fill=\"#000\" _v-7486e53c=\"\"></path>\n\t\t\n\t\t<path id=\"pages\" :class=\"pages\" d=\"M98.283 104.618c5.574-2.742 36.5-18.417 70.34-24.037l9.494 9.83-1.022 2.37s-73.875 22.713-82.355 23.723l-.007.027v.01c-.048.002-.106.002-.17 0h-.12c-.038 0-.075.002-.12 0-.063.002-.122.002-.17 0v-.01l-.007-.027c-8.48-1.01-82.355-23.724-82.355-23.724l-1.02-2.37 9.253-8.872c35.306 5.865 67.637 21.884 71.153 23.385l1.045.5c.95.47 1.61.538 2.02.543h.405c.414-.005 1.08-.073 2.043-.555l1.595-.792z\" fill=\"#F5F5F5\" _v-7486e53c=\"\"></path>\n\n\t\t<path id=\"covers-a\" :class=\"coversA\" d=\"M10.567 85.83c.93-.014 5.878.64 24.383 5.634 19.46 5.25 49.595 17.37 49.595 17.37s4.187 1.87 4.187 4.174l.76 94.953c0 2.306-.068 4.8-2.38 4.8l-69.467-21.495c-2.217-.62-4.187-1.87-4.187-4.174l-9.27-94.05c0-2.306 4.473-7.183 6.38-7.21zM178.41 85.49c-.98.014-8.715.546-26.64 5.288-19.946 5.277-47.337 18.055-47.337 18.055s-4.187 2.427-4.187 4.174l-1.52 94.953c0 2.305.828 4.8 3.14 4.8l69.466-21.495c2.265-.668 4.187-1.87 4.187-4.174l8.89-94.53c-.228-2.305-3.924-7.097-6-7.07z\" fill=\"#76D5FF\" _v-7486e53c=\"\"></path>\n\t\t<path id=\"covers-b\" :class=\"coversB\" d=\"M94.298 110.92c5.64.135 9.07-1.563 9.353-1.585l-1.783 102.8c0 3.06-6.662 3.547-7.43 3.547-.628 0-7.325-.487-7.325-3.548l-1.52-102.704c.448.158 3.066 1.357 8.706 1.49z\" fill=\"#76D5FF\" _v-7486e53c=\"\"></path>\n\t\t<path id=\"covers-c\" :class=\"coversC\" d=\"M6.626 91.633s6.334 1.902 25.945 7.048c20.15 5.288 51.975 17.854 51.975 17.854s4.187 1.87 4.187 4.174l1.52 88.787c0 2.305-.828 4.8-3.14 4.8 0 0-23.985-8.886-43.295-14.894-14.552-4.527-27.3-7.72-27.3-7.72-2.217-.62-4.187-1.87-4.187-4.175L4.188 95.018c0-2.305-.122-3.93 2.438-3.385zM181.763 91.633s-9.96 1.628-28.915 6.626c-20.558 5.42-48.624 18.274-48.624 18.274s-4.187 2.427-4.187 4.174l-1.52 88.787c0 2.305.828 4.8 3.14 4.8 0 0 21.985-8.264 40.638-14.068 15.62-4.86 29.956-8.548 29.956-8.548 2.266-.67 4.188-1.87 4.188-4.175l8.143-92.487c0-2.305-.11-3.93-2.817-3.385z\" fill=\"#00ADFC\" _v-7486e53c=\"\"></path>\n\t\t<path id=\"backbone\" :class=\"backbone\" d=\"M94.14 118.6c5.65.133 9.448-2.125 9.42-1.57l-1.836 96.637c-.06 1.94-6.676 2.41-7.447 2.41-.628 0-7.37-.468-7.34-2.41l-1.835-96.636c0-.555 3.388 1.435 9.038 1.57z\" fill=\"#19B6FF\" _v-7486e53c=\"\"></path>\n\t\t\n\t\t<path id=\"mark-a\" :class=\"markA\" d=\"M133.43 96.282c-.03-.02-.2.01-.478.083l-15.495 5.793c-.41.39-.55 1.18-.55 1.18l.734-.315s5.646 4.608 6.073 5.28l16.533-6.232c-1.247-1.275-6.743-5.743-6.815-5.788z\" fill=\"#F2556F\" _v-7486e53c=\"\"></path>\n\t\t<path id=\"mark-b\" :class=\"markB\" d=\"M116.908 103.337s.146-.83.587-1.217c1.006-.88 15.603-6.05 15.936-5.838.08.05 7.038 5.708 7.078 6.112.395 4.035-1.77 19.837-.34 28.43.976 5.86 1.74 6.548 1.057 6.704-.683.156-5.61-1.94-7.657-1.707-2.045.233-6.336 7.107-7.235 7.106-.952 0-2.135-3.97-2.346-4.94-2.652-12.185-.576-26.21-.233-29.608.034-.338-6.113-5.354-6.113-5.354l-.732.313z\" fill=\"#F23051\" _v-7486e53c=\"\"></path>\n\n\t\t<path class=\"second\" id=\"hands\" :class=\"second\" d=\"M182.584 114.216c-2.306 4.93-8.25 4.156-9.727 11.296-1.478 7.14-.135 13.657 4.376 14.558 4.51.9 9.518-4.127 10.844-11.296 2.41-13.022-3.184-19.494-5.493-14.558zM6.062 114.216c2.143 5.003 8.25 4.156 9.727 11.296 1.476 7.14.134 13.657-4.377 14.558-4.51.9-9.518-4.127-10.844-11.296-2.41-13.022 3.39-19.465 5.492-14.558z\" fill=\"#000\" _v-7486e53c=\"\"></path>\n\n\t</g>\n</svg>\n";

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"Item4\" _v-3f344c92=\"\">\n\t<div style=\"height:0.5rem\" _v-3f344c92=\"\"></div>\n\t<svg-penguin :active=\"svg_penguin\" _v-3f344c92=\"\"></svg-penguin>\n\t<p class=\"text text_0\" :class=\"text_0\" _v-3f344c92=\"\">海量原著</p>\n\t<p class=\"text text_1\" :class=\"text_1\" _v-3f344c92=\"\">想读就读</p>\n</div>\n";

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"Slider\" @touchstart=\"touchstart($event)\" @touchmove=\"touchmove($event)\" @touchend=\"touchend($event)\" @keypress=\"keydown($event)\" ref=\"slider\" :style=\" 'height:'+viewportHeight+'px' \" _v-2fb7ee9b=\"\">\n\t<ul class=\"train\" :style=\" 'transform: translate3d(0,'+(-current*10)+'%,0)' \" _v-2fb7ee9b=\"\">\n\t\t<item0 :img=\"img\" :active=\"active[0]\" _v-2fb7ee9b=\"\"></item0>\n\t\t<item1 :img=\"img\" :active=\"active[1]\" _v-2fb7ee9b=\"\"></item1>\n\t\t<item2 :img=\"img\" :active=\"active[2]\" _v-2fb7ee9b=\"\"></item2>\n\t\t<item0 :img=\"img\" :active=\"active[0]\" _v-2fb7ee9b=\"\"></item0>\n\t\t<item4 :img=\"img\" :active=\"active[4]\" _v-2fb7ee9b=\"\"></item4>\n\t</ul>\n</div>\n";

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = "\n<div id=\"root\">\n\t<slider :img=\"img\"></slider>\n</div>\n";

/***/ }
/******/ ])));