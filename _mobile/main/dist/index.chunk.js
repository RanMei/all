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

	__webpack_require__(1);

	var _router = __webpack_require__(2);

	var _store = __webpack_require__(19);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	new Vue({
		el: '#root',
		store: _store2.default,
		router: _router.router,
		components: {
			App: __webpack_require__(25)
		},
		template: '<app></app>'
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	Vue.use(VueRouter);

	var routes = [{
		path: '/',
		redirect: '/home'
	}, {
		path: '/home',
		component: __webpack_require__(3)
	}, {
		path: '/projects',
		component: __webpack_require__(7)
	}, {
		path: '/blog',
		component: __webpack_require__(11)
	}, {
		path: '/post',
		component: __webpack_require__(15)
	}];
	// 	redirect: '/home',
	// 	children: [{
	// 		path: 'home',
	// 		component: require('./Home.vue')
	// 	}]
	// }];

	var router = new VueRouter({
		routes: routes
	});

	exports.router = router;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(4);
	__vue_script__ = __webpack_require__(5);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\main\\src\\router\\Home.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(6);
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
	    var id = "_v-5cf0da80/Home.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 4 */
1,
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {};

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"Home\" _v-5cf0da80=\"\">\n\t<div class=\"block\" _v-5cf0da80=\"\">\n\t\tGreetings! I am a front-end developer.<br _v-5cf0da80=\"\">\n\t\tGithub: github.com/403177368<br _v-5cf0da80=\"\">\n\t\tWebsite: madsoap.net<br _v-5cf0da80=\"\">\n\t\tWelcome, my friend! This is my personal website! Maybe you want to tap the navicon on top-left?\n\t</div>\n</div>\n";

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(8);
	__vue_script__ = __webpack_require__(9);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\main\\src\\router\\Projects.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(10);
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
	    var id = "_v-10d4374a/Projects.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 8 */
1,
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {},
		computed: {
			list: function list() {
				console.log(this.$store);
				return this.$store.state.projects;
			}
		}
	};

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"Projects\" _v-10d4374a=\"\">\n\t<div class=\"log\" _v-10d4374a=\"\">\n\t\tAh, you finally got here! These are the projects I am maintaining currently.\n\t</div>\n\t<div class=\"panel--\" v-for=\"a in list\" _v-10d4374a=\"\">\n\t\t<div class=\"heading__\" _v-10d4374a=\"\">\n\t\t\t<span class=\"title\" _v-10d4374a=\"\">{{a.title}}</span>\n\t\t</div>\n\t\t<div class=\"desc\" v-if=\"a.desc\" _v-10d4374a=\"\">\n\t\t\t{{a.desc}}\n\t\t</div>\n\t\t<div class=\"panel-body\" v-if=\"a.hrefs\" _v-10d4374a=\"\">\n\t\t\t<span v-for=\"b in a.hrefs\" _v-10d4374a=\"\"><a :href=\"b\" target=\"_blank\" _v-10d4374a=\"\">{{b}}</a><br _v-10d4374a=\"\"></span>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(12);
	__vue_script__ = __webpack_require__(13);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\main\\src\\router\\Blog.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(14);
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
	    var id = "_v-71d897fa/Blog.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 12 */
1,
/* 13 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		computed: {
			list: function list() {
				return this.$store.state.posts.items;
			}
		}
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"Blog\" _v-71d897fa=\"\">\n\t<div class=\"list\" _v-71d897fa=\"\">\n\t\t<div class=\"list-item\" v-for=\"a in list\" _v-71d897fa=\"\">\n\t\t\t<a class=\"title\" :href=\" '#/post?time='+a.time \" _v-71d897fa=\"\">\n\t\t\t\t{{a.title}}\n\t\t\t</a>\n\t\t\t<p class=\"time\" _v-71d897fa=\"\">{{a.time}}</p>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(16);
	__vue_script__ = __webpack_require__(17);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\main\\src\\router\\Post.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(18);
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
	    var id = "_v-1ba16e01/Post.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 16 */
1,
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {},
		computed: {
			post: function post() {
				console.log(this.$store.state.post);
				return this.$store.state.post;
			}
		},
		mounted: function mounted() {
			this.$store.dispatch('$POST_FETCH');
		}
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"Post\" _v-1ba16e01=\"\">\n\t<div class=\"post-title\" _v-1ba16e01=\"\">{{post.title}}</div>\n\t<div class=\"post-time\" _v-1ba16e01=\"\">{{post.time}}</div>\n\t<div class=\"post-body\" _v-1ba16e01=\"\">\n\t\t<p v-for=\"a in post.body\" _v-1ba16e01=\"\">{{a}}</p>\n\t</div>\n</div>\n";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _projects = __webpack_require__(20);

	var _projects2 = _interopRequireDefault(_projects);

	var _posts = __webpack_require__(21);

	var _posts2 = _interopRequireDefault(_posts);

	var _post = __webpack_require__(22);

	var _post2 = _interopRequireDefault(_post);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = new Vuex.Store({
		modules: {
			projects: _projects2.default,
			posts: _posts2.default,
			post: _post2.default
		},
		actions: {
			INIT: function INIT(_ref) {
				var commit = _ref.commit;

				var projects = __webpack_require__(23).default;
				var posts = __webpack_require__(24).default;
				commit('PROJECTS.FETCH', projects);
				commit('POSTS.FETCH', posts);
			},
			$POST_FETCH: function $POST_FETCH(_ref2) {
				var state = _ref2.state;
				var commit = _ref2.commit;

				console.log(state);
				var newPost;
				var time = location.hash.match(/time=[\d|-]+/)[0].replace(/time=/, '');
				state.posts.forEach(function (a) {
					if (a.time === time) {
						newPost = a;
					}
				});
				commit('POST.FETCH', newPost);
			}
		}
	});

	exports.default = store;

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var state = [];

	var mutations = {
		'PROJECTS.FETCH': function PROJECTSFETCH(state, arr) {
			state.push.apply(state, _toConsumableArray(arr));
		}
	};

	exports.default = { state: state, mutations: mutations };

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var state = {
		items: []
	};

	var mutations = {
		'POSTS.FETCH': function POSTSFETCH(state, arr) {
			var _state$items;

			(_state$items = state.items).push.apply(_state$items, _toConsumableArray(arr));
		}
	};

	exports.default = { state: state, mutations: mutations };

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var state = {
		title: '',
		time: '',
		body: []
	};

	var mutations = {
		'POST.FETCH': function POSTFETCH(state, obj) {
			for (var key in obj) {
				state[key] = obj[key];
			}
		}
	};

	exports.default = { state: state, mutations: mutations };

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = [{
		title: 'Farm',
		desc: 'An E-commerce mobile webapp built with react, react-router, redux and webpack.',
		hrefs: ['./_mobile/farm/index.html']
	}, {
		title: 'Time',
		desc: 'An E-commerce website with an admin system built using vue, vue-router, vuex and webpack.',
		hrefs: ['./time/index.html']
	}, {
		title: 'Desktop',
		desc: 'Some desktop website projects.',
		hrefs: ['./fytpy/index.html', './fytpy/react/index.html', './caredaily/index.html', './desktop/_wolf/index.html', './desktop/presentation/index.html']
	}, {
		title: 'H5',
		desc: 'So-called H5 projects',
		hrefs: ['./_mobile/h5/star_wars/index.html', './_mobile/h5/olympics/index.html', './_mobile/h5/olympics/result.html', './_mobile/h5/carnival/index.html', './_mobile/h5/school/index.html', './_mobile/h5/feast/feast.html', './_mobile/h5/live/live.html', './_mobile/h5/project/index.html', './_mobile/h5/wolf/index.html']
	}, {
		title: 'Canvas',
		desc: '',
		hrefs: ['./_canvas/Heart.html', './_canvas/NeonHexagons/index.html', './_canvas/DriftingBalls/index.html', './_canvas/lion/index.html', './_canvas/cube/canvas_geometry_cube.html']
	}, {
		title: 'Vue Components',
		desc: 'Some animated vue components',
		hrefs: ['./_mobile/vue/index.html']
	}];

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = [{
		title: 'What is functional programming?',
		time: '2016-10-3',
		body: ['Functional programming is a programming paradigm. Functional programming is a programming paradigm.', 'These are some important concepts in functional programming: higher-order function, pure function, side effects... These are some important concepts in functional programming: higher-order function, pure function, side effects...']
	}, {
		title: 'How to learn English?',
		time: '2016-10-4',
		body: ['huh?adsgadga', 'what the hell?dfadfafa', 'dgfdgsfdhfdhfsdh']
	}];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(26);
	__vue_script__ = __webpack_require__(27);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\main\\src\\router\\App.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(38);
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
	    var id = "_v-09dac450/App.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 26 */
1,
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		components: {
			Navbar: __webpack_require__(28),
			Slider: __webpack_require__(32),
			Footer: __webpack_require__(35)
		},
		mounted: function mounted() {
			this.$store.dispatch('INIT');
		}
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(29);
	__vue_script__ = __webpack_require__(30);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\main\\src\\components\\Navbar.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(31);
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
	    var id = "_v-65063b78/Navbar.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 29 */
1,
/* 30 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {
				show: false
			};
		},
		methods: {
			toggle: function toggle() {
				this.show = !this.show;
			},
			hide: function hide() {
				this.show = false;
			}
		}
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"Navbar\" _v-65063b78=\"\">\n\t<div class=\"navicon\" @click=\"toggle\" _v-65063b78=\"\">\n\t\t<i class=\"fa fa-navicon\" _v-65063b78=\"\"></i>\n\t</div>\n\tMadSoap\n\t<div :class=\"show?'box _show':'box'\" @click=\"hide\" _v-65063b78=\"\">\n\t\t<div class=\"section\" _v-65063b78=\"\">\n\t\t\t<div class=\"tab\" _v-65063b78=\"\"><a href=\"#/home\" _v-65063b78=\"\"><i class=\"fa fa-home\" _v-65063b78=\"\"></i> Home</a></div>\n\t\t\t<div class=\"tab\" _v-65063b78=\"\"><a href=\"#/projects\" _v-65063b78=\"\"><i class=\"fa fa-rocket\" _v-65063b78=\"\"></i> Projects</a></div>\n\t\t\t<div class=\"tab\" _v-65063b78=\"\"><a href=\"#/animations\" _v-65063b78=\"\"><i class=\"fa fa-cog fa-spin\" _v-65063b78=\"\"></i> Animations</a></div>\n\t\t\t<div class=\"tab\" _v-65063b78=\"\"><a href=\"#/blog\" _v-65063b78=\"\"><i class=\"fa fa-book\" _v-65063b78=\"\"></i> Blog</a></div>\n\t\t</div>\n\t\t<div class=\"section-bottom\" _v-65063b78=\"\">\n\t\t\t<div class=\"tab\" _v-65063b78=\"\"><a href=\"./_mobile/farm/index.html\" target=\"_blank\" _v-65063b78=\"\"><i class=\"fa fa-money\" _v-65063b78=\"\"></i> Farm</a></div>\n\t\t\t<div class=\"tab\" _v-65063b78=\"\"><a href=\"./front_end.html\" target=\"_blank\" _v-65063b78=\"\"><i class=\"fa fa-file-text\" _v-65063b78=\"\"></i> Animation Library</a></div>\n\t\t\t<div class=\"tab\" _v-65063b78=\"\"><a href=\"./time/index.html\" target=\"_blank\" _v-65063b78=\"\"><i class=\"fa fa-file-text\" _v-65063b78=\"\"></i> Time</a></div>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(33);
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
	    var id = "_v-1c0d6e95/Slider.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 33 */
1,
/* 34 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"Slider\" _v-1c0d6e95=\"\">\n\t<a href=\"#/home\" _v-1c0d6e95=\"\">Home</a>\n\t<a href=\"#/projects\" _v-1c0d6e95=\"\">Projects</a>\n\t<a href=\"#/animations\" _v-1c0d6e95=\"\">Animation</a>\n\t<a href=\"#/blog\" _v-1c0d6e95=\"\">Blog</a>\n\t<a href=\"./_mobile/farm/index.html\" _v-1c0d6e95=\"\">Farm</a>\n\t<a href=\"./_mobile/vue/index.html\" _v-1c0d6e95=\"\">Vue</a>\n\t<a href=\"./time/index.html\" _v-1c0d6e95=\"\">Time</a>\n\t<a href=\"./time/admin.html\" _v-1c0d6e95=\"\">Admin</a>\n</div>\n";

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(36);
	__vue_template__ = __webpack_require__(37);
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
	    var id = "_v-2ecabe4f/Footer.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 36 */
1,
/* 37 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n<div class=\"Footer\" _v-2ecabe4f=\"\">\n\tCopyright ©2016 SoapTech\n</div>\n";

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n<div id=\"root\" _v-09dac450=\"\">\n\t<navbar _v-09dac450=\"\"></navbar>\n\t<slider _v-09dac450=\"\"></slider>\n\t<router-view _v-09dac450=\"\"></router-view>\n\t<footer _v-09dac450=\"\"></footer>\n</div>\n";

/***/ }
/******/ ])));