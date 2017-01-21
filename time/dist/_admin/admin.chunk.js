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

	var _store = __webpack_require__(28);

	var vm = new Vue({
		el: '#root',
		store: _store.store,
		router: _router.router,
		components: {
			App: __webpack_require__(40)
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

	var router = new VueRouter({
		routes: [{
			path: '/',
			redirect: '/admin'
		}, {
			path: '/admin',
			component: __webpack_require__(3),
			redirect: '/admin/items',
			children: [{
				path: 'items',
				component: __webpack_require__(10)
			}, {
				path: 'signin',
				component: __webpack_require__(17)
			}]
		}, {
			path: '/test',
			component: __webpack_require__(21)
		}]
	});

	exports.router = router;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__vue_script__ = __webpack_require__(4);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\_admin\\_admin\\Admin.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(9);
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
	    var id = "_v-126118d4/Admin.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		components: {
			Navbar: __webpack_require__(5)
		}
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(6);
	__vue_script__ = __webpack_require__(7);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\_admin\\components\\Navbar.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(8);
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
	    var id = "_v-1fca1f5a/Navbar.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 6 */
1,
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		data: function data() {
			return {
				tabs: [{
					name: 'items',
					href: '#/admin/items',
					subs: []
				}, {
					name: 'signin',
					href: '#/admin/signin',
					subs: []
				}]
			};
		},
		computed: {
			id: function id() {
				return this.$store.state.user.id;
			}
		}
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Navbar\" _v-1fca1f5a=\"\">\n\t<div class=\"centered\" _v-1fca1f5a=\"\">\n\t\t<div class=\"tab\" v-for=\"a in tabs\" _v-1fca1f5a=\"\">\n\t\t\t<a class=\"link\" :href=\"a.href\" _v-1fca1f5a=\"\">{{a.name}}</a>\n\t\t\t<ul class=\"subs\" _v-1fca1f5a=\"\">\n\t\t\t\t<li v-for=\"b in a.subs\" _v-1fca1f5a=\"\">Ned</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Admin\">\n\t<navbar></navbar>\n\t<router-view></router-view>\n</div>\n";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(11);
	__vue_script__ = __webpack_require__(12);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\_admin\\components\\Items.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(16);
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
	    var id = "_v-2eabaf4d/Items.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 11 */
1,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _stringify = __webpack_require__(13);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		data: function data() {
			return {
				item: {
					id: '',
					name: '',
					price: '',
					desc_: '',
					specs: '',
					class_: '',
					sub_class: ''
				},
				current: -1
			};
		},
		computed: {
			items: function items() {
				return this.$store.state.items;
			}
		},
		mounted: function mounted() {},
		methods: {
			reset: function reset() {
				for (var key in this.item) {
					this.item[key] = '';
				}
			},
			TO_ITEM: function TO_ITEM(i) {
				this.$store.commit('SET_ITEM', this.items[i]);
				location.href = '#/item';
			},
			CHECK_TOGGLE: function CHECK_TOGGLE(i) {
				this.$store.commit('CHECK_TOGGLE', i);
			},
			edit: function edit(i) {
				for (var key in this.item) {
					this.item[key] = this.items[i][key];
				}
				this.current = i;
			},
			SAVE_ITEM: function SAVE_ITEM() {
				if (!this.item.id) {
					this.item.id = new Date().getTime() + '';
					this.$store.dispatch('ADD_ITEM', (0, _stringify2.default)(this.item));
				} else {
					this.$store.dispatch('SAVE_ITEM', (0, _stringify2.default)(this.item));
				};
				this.reset();
			},
			DELETE_ITEMS: function DELETE_ITEMS() {
				var ids = [];
				this.items.forEach(function (a) {
					if (a.checked) {
						ids.push(a.id);
					}
				});
				this.$store.dispatch('DELETE_ITEMS', ids);
			},
			getTime: function getTime() {
				var time = new Date();
				var fullYear = time.getFullYear();
				var month = time.getMonth() + 1;
				time = fullYear + '-' + month;
				return time;
			}
		}
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(14), __esModule: true };

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var core = __webpack_require__(15),
	    $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
	module.exports = function stringify(it) {
	  // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	var core = module.exports = { version: '2.4.0' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ITEMS\" _v-2eabaf4d=\"\">\n\t<div class=\"panel panel-default\" _v-2eabaf4d=\"\">\n\t\t<div class=\"panel-body\" _v-2eabaf4d=\"\">\n\t\t\t\n\t\t</div>\n\t</div>\n\t<div class=\"panel panel-info\" _v-2eabaf4d=\"\">\n\t\t<div class=\"panel-heading\" _v-2eabaf4d=\"\">\n\t\t\t<li _v-2eabaf4d=\"\"></li>\n\t\t\t<li _v-2eabaf4d=\"\">id</li>\n\t\t\t<li _v-2eabaf4d=\"\">name</li>\n\t\t\t<li _v-2eabaf4d=\"\">desc_</li>\n\t\t\t<li _v-2eabaf4d=\"\">price</li>\n\t\t</div>\n\t\t<div class=\"list-group\" _v-2eabaf4d=\"\">\n\t\t\t<div class=\"list-group-item\" :class=\" current===i?'':'' \" :style=\" a.checked?'background:#d9edf7':'background:white' \" v-for=\"(a,i) in items\" key=\"a.id\" _v-2eabaf4d=\"\">\n\t\t\t\t<li _v-2eabaf4d=\"\">\n\t\t\t\t\t<input type=\"checkbox\" class=\"checkbox i-checks\" :checked=\"a.checked\" @change=\"CHECK_TOGGLE(i)\" _v-2eabaf4d=\"\">\n\t\t\t\t</li>\n\t\t\t\t<li @click=\"TO_ITEM(i)\" _v-2eabaf4d=\"\">{{a.id}}</li>\n\t\t\t\t<li _v-2eabaf4d=\"\">{{a.name}}</li>\n\t\t\t\t<li _v-2eabaf4d=\"\">{{a.desc_}}</li>\n\t\t\t\t<li _v-2eabaf4d=\"\">{{a.price}}</li>\n\t\t\t\t<li _v-2eabaf4d=\"\"><a class=\"edit\" @click=\"edit(i)\" _v-2eabaf4d=\"\">edit</a></li>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"panel-footer _row\" _v-2eabaf4d=\"\">\n\t\t\t<li _v-2eabaf4d=\"\"></li>\n\t\t\t<li _v-2eabaf4d=\"\">{{item.id}}</li>\n\t\t\t<li _v-2eabaf4d=\"\"><input type=\"text\" placeholder=\"name\" class=\"form-control\" v-model=\"item.name\" _v-2eabaf4d=\"\"></li>\n\t\t\t<li _v-2eabaf4d=\"\"><input type=\"text\" placeholder=\"desc_\" class=\"form-control\" v-model=\"item.desc_\" _v-2eabaf4d=\"\"></li>\n\t\t\t<li _v-2eabaf4d=\"\"><input type=\"text\" placeholder=\"price\" class=\"form-control\" v-model=\"item.price\" _v-2eabaf4d=\"\"></li>\n\t\t\t<a class=\"save btn btn-success m-b-xs w-xs\" @click=\"SAVE_ITEM\" _v-2eabaf4d=\"\">save</a>\n\t\t\t<a class=\"delete btn btn-danger\" @click=\"DELETE_ITEMS\" _v-2eabaf4d=\"\">delete</a>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(18);
	__vue_script__ = __webpack_require__(19);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\components\\Signin.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(20);
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
	    var id = "_v-61dfbd6f/Signin.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 18 */
1,
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _stringify = __webpack_require__(13);

	var _stringify2 = _interopRequireDefault(_stringify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		data: function data() {
			return {
				signup_form: {
					mobile: '',
					password: '',
					password_2: '',
					verif: '',
					agreed: false
				},
				info: {
					mobile: '',
					password: '',
					password2: ''
				},
				state: {
					mobile: '',
					password: '',
					password2: ''
				},
				signin_form: {
					id: '',
					password: '',
					remember_me: false
				}
			};
		},
		mounted: function mounted() {},
		methods: {
			onFocus: function onFocus(str) {
				this.state[str] = 'active';
				this.info[str] = '';
			},
			toggle: function toggle() {
				if (this.signup_form.agreed === false) {
					this.signup_form.agreed = true;
				} else {
					this.signup_form.agreed = false;
				}
			},
			toggle2: function toggle2() {
				if (this.signin_form.remember_me === false) {
					this.signin_form.remember_me = true;
				} else {
					this.signin_form.remember_me = false;
				}
			},
			check_mobile: function check_mobile() {
				if (/^1[3|4|5|8]\d{9}$/.test(this.signup_form.mobile)) {
					this.state.mobile = 'success';
				} else if (this.signup_form.mobile === '') {
					this.state.mobile = '';
				} else {
					this.state.mobile = 'error';
					this.info.mobile = '手机号格式不正确';
				}
			},
			check_password: function check_password() {
				if (/^\w{6,20}$/.test(this.signup_form.password)) {
					this.state.password = 'success';
				} else if (this.signup_form.password === '') {
					this.state.password = '';
				} else {
					this.state.password = 'error';
					this.info.password = '密码格式不正确';
				}
			},
			check_password2: function check_password2() {
				if (this.signup_form.password2 === this.signup_form.password) {
					this.state.password2 = 'success';
				} else if (this.signup_form.password2 === '') {
					this.state.password2 = '';
				} else {
					this.state.password2 = 'error';
					this.info.password2 = '两次输入的密码不一致';
				}
			},
			LOGIN: function LOGIN() {
				this.$store.dispatch('LOGIN', (0, _stringify2.default)(this.signin_form));
			}
		}
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Signin wrapper\" _v-61dfbd6f=\"\">\n\t<div class=\"shade__\" _v-61dfbd6f=\"\">\n\t\t<div _v-61dfbd6f=\"\"></div>\n\t</div>\n\t<div class=\"panel__\" _v-61dfbd6f=\"\">\n\t\t<div class=\"register\" _v-61dfbd6f=\"\">\n\t\t\t<div class=\"register-center\" _v-61dfbd6f=\"\">\n\t\t\t\t<div class=\"register-header\" _v-61dfbd6f=\"\">\n\t\t\t\t\t<h1 _v-61dfbd6f=\"\">新会员注册</h1>\n\t\t\t\t</div>\n\t\t\t\t<form class=\"register-form\" _v-61dfbd6f=\"\">\n\t\t\t\t\t<input type=\"text\" name=\"mobile\" placeholder=\"请输入11位手机号\" v-model=\"signup_form.mobile\" :class=\"state.mobile\" @focus=\"onFocus('mobile')\" @blur=\"check_mobile\" _v-61dfbd6f=\"\">\n\t\t\t\t\t<p class=\"info\" _v-61dfbd6f=\"\">{{info.mobile}}</p>\n\t\t\t\t\t<input type=\"password\" name=\"password\" placeholder=\"密码（6-20位字母、数字与符号的组合）\" v-model=\"signup_form.password\" :class=\"state.password\" @focus=\"onFocus('password')\" @blur=\"check_password\" _v-61dfbd6f=\"\">\n\t\t\t\t\t<p class=\"info\" _v-61dfbd6f=\"\">{{info.password}}</p>\n\t\t\t\t\t<input type=\"password\" name=\"password2\" placeholder=\"确认密码\" :class=\"state.password2\" @focus=\"onFocus('password2')\" @blur=\"check_password2\" _v-61dfbd6f=\"\">\n\t\t\t\t\t<p class=\"info\" _v-61dfbd6f=\"\">{{info.password2}}</p>\n\t\t\t\t\t<input type=\"text\" name=\"verif\" placeholder=\"请输入验证码\" _v-61dfbd6f=\"\">\n\t\t\t\t\t<p class=\"info\" _v-61dfbd6f=\"\"></p>\n\n\t\t\t\t\t<div class=\"check_b_container agree\" _v-61dfbd6f=\"\">\n\t\t\t\t\t\t<div class=\"checkbox_\" :class=\" signup_form.agreed?'checked':'' \" @click=\"toggle\" _v-61dfbd6f=\"\">\n\t\t\t\t\t\t\t<div class=\"square\" :style=\" 'transform:'+(signup_form.agreed?'scale(1)':'scale(0)') \" _v-61dfbd6f=\"\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p _v-61dfbd6f=\"\">已同意《飞越太平洋服务条款》</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"btn__ register-button\" _v-61dfbd6f=\"\">注 册</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"middle-line\" _v-61dfbd6f=\"\"></div>\n\t\t<div class=\"login\" _v-61dfbd6f=\"\">\n\t\t\t<div class=\"login-center\" _v-61dfbd6f=\"\">\n\t\t\t\t<div class=\"login-header\" _v-61dfbd6f=\"\">\n\t\t\t\t\t<h1 class=\"hydl\" _v-61dfbd6f=\"\">会员登录</h1>\n\t\t\t\t</div>\n\t\t\t\t<form class=\"login-form\" _v-61dfbd6f=\"\">\n\t\t\t\t\t<input type=\"text\" name=\"username\" placeholder=\"请输入您的用户名\" v-model=\"signin_form.id\" _v-61dfbd6f=\"\">\n\t\t\t\t\t<p class=\"info\" _v-61dfbd6f=\"\"></p>\n\t\t\t\t\t<input type=\"password\" name=\"password\" placeholder=\"请输入您的密码\" v-model=\"signin_form.password\" _v-61dfbd6f=\"\">\n\t\t\t\t\t<p class=\"info\" _v-61dfbd6f=\"\"></p>\n\n\t\t\t\t\t<div class=\"check_b_container remember_me\" _v-61dfbd6f=\"\">\n\t\t\t\t\t\t<div class=\"checkbox_\" :class=\" signin_form.remember_me?'checked':'' \" @click=\"toggle2\" _v-61dfbd6f=\"\">\n\t\t\t\t\t\t\t<div class=\"square\" :style=\" 'transform:'+(signin_form.remember_me?'scale(1)':'scale(0)') \" _v-61dfbd6f=\"\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p _v-61dfbd6f=\"\">下次自动登录</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"btn__ login-button\" @click=\"LOGIN\" _v-61dfbd6f=\"\">登 录</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__vue_script__ = __webpack_require__(22);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\_admin\\_test\\Test.vue: named exports in *.vue files are ignored.");
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
	    var id = "_v-1da7e6f0/Test.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		components: {
			NavbarRed: __webpack_require__(23)
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
	  console.warn("[vue-loader] time\\src\\_admin\\components\\NavbarRed.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(26);
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
	    var id = "_v-bd881224/NavbarRed.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 24 */
1,
/* 25 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			items: {
				default: function _default() {
					return [{
						name: 'Home',
						href: './index.html'
					}, {
						name: 'Admin',
						href: '#/admin'
					}, {
						name: 'Test',
						href: '#/test'
					}];
				}
			}
		},
		data: function data() {
			return {
				fixed: false,
				current: 0
			};
		},
		mounted: function mounted() {
			var _this = this;

			window.addEventListener('scroll', function () {
				var a = document.body.scrollTop;
				var b = _this.$refs.bar.scrollHeight;
				if (a >= b) {
					_this.fixed = true;
				} else {
					_this.fixed = false;
				}
			});
		},
		methods: {
			mouseenter: function mouseenter(e, i) {
				this.current = i;
			},
			mouseleave: function mouseleave() {
				this.current = 0;
			},
			haha: function haha(e) {
				console.log(e);
			}
		}
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"NavbarRed\" ref=\"bar\" _v-bd881224=\"\">\n\t<div class=\"inner\" :class=\" fixed?'fixed':'' \" _v-bd881224=\"\">\n\t\t<div class=\"container__\" _v-bd881224=\"\">\n\t\t\t<ul class=\"tabs\" @mouseleave=\"mouseleave\" _v-bd881224=\"\">\n\t\t\t\t<a v-for=\"(a,i) in items\" @mouseenter=\"mouseenter($event,i)\" :href=\"a.href\" _v-bd881224=\"\">{{a.name}}</a>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Test\">\n\t<navbar-red></navbar-red>\n\t<div style=\"height:5000px\"></div>\n\t<router-view></router-view>\n</div>\t\n";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.store = undefined;

	var _base = __webpack_require__(29);

	var _base2 = _interopRequireDefault(_base);

	var _cart = __webpack_require__(30);

	var _cart2 = _interopRequireDefault(_cart);

	var _items = __webpack_require__(31);

	var _items2 = _interopRequireDefault(_items);

	var _item = __webpack_require__(32);

	var _item2 = _interopRequireDefault(_item);

	var _user = __webpack_require__(33);

	var _user2 = _interopRequireDefault(_user);

	var _num = __webpack_require__(34);

	var _actions = __webpack_require__(35);

	var _actions2 = _interopRequireDefault(_actions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//Vue.use( Vuex );

	var store = new Vuex.Store({
		modules: {
			base: _base2.default,
			cart: _cart2.default,
			user: _user2.default,
			items: _items2.default,
			item: _item2.default,
			num: _num.num
		},
		actions: _actions2.default
	});

	exports.store = store;

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var _root;

	if (/^http/.test(location.href)) {
		_root = location.origin + '/time';
	} else {
		_root = location.href.replace(/time\/.+/, 'time');
	}

	var DIR = {
		root: _root,
		img: _root + '/../img/time',
		//api: _root+'/../api/time',
		api: 'http://localhost:80/api',

		admin: _root + '/admin.html',

		index: _root + '/index.html',
		signin: _root + '/signin.html',
		cart: _root + '/cart.html',
		item: _root + '/item.html',
		search: _root + '/search.html'
	};

	var state = {
		DIR: DIR
	};

	var mutations = {};

	exports.default = { state: state, mutations: mutations };

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var state = {
		items: [{
			name: 'iPhone7',
			price: 6000,
			quantity: 1
		}, {
			name: 'iPad mini',
			price: 2000,
			quantity: 1
		}]
	};

	var mutations = {
		'CART.REMOVE': function CARTREMOVE(state, i) {
			state.items.splice(i, 1);
		},
		'CART.PLUS': function CARTPLUS(state, i) {
			state.items[i].quantity++;
		}
	};

	exports.default = { state: state, mutations: mutations };

/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var state = [];

	var mutations = {
		GET_ITEMS: function GET_ITEMS(state, items) {
			items.forEach(function (a) {
				state.push(a);
			});
		},
		SAVE_ITEM: function SAVE_ITEM(state, item) {
			state.forEach(function (a) {
				if (a.id === item.id) {
					for (var key in a) {
						a[key] = item[key];
					}
				}
			});
		},
		ADD_ITEM: function ADD_ITEM(state, new_item) {
			state.push(new_item);
		},
		DELETE_ITEMS: function DELETE_ITEMS(state) {
			var i = state.length - 1;
			while (i >= 0) {
				if (state[i].checked === true) {
					state.splice(i, 1);
				};
				i--;
			}
		},
		CHECK_TOGGLE: function CHECK_TOGGLE(state, i) {
			if (state[i].checked === true) {
				state[i].checked = false;
			} else {
				state[i].checked = true;
			}
		}
	};

	exports.default = { state: state, mutations: mutations };

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var state = {
		id: '',
		name: '',
		desc_: '',
		spec: '',
		price: 0,
		class_: '',
		sub_class: ''
	};

	var mutations = {
		SET_ITEM: function SET_ITEM(state, item) {
			for (var key in state) {
				state[key] = item[key];
			}
		}
	};

	exports.default = { state: state, mutations: mutations };

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var state = {
		id: ''
	};

	var mutations = {
		LOGIN: function LOGIN(state, user) {
			for (var key in state) {
				state[key] = user[key];
			}
		}
	};

	exports.default = { state: state, mutations: mutations };

/***/ },
/* 34 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var state = {
		num: 0
	};

	var mutations = {
		PLUS: function PLUS(state) {
			state.num++;
		}
	};

	var num = {
		state: state, mutations: mutations
	};

	exports.num = num;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _config = __webpack_require__(36);

	var _items = __webpack_require__(37);

	var _item = __webpack_require__(38);

	var _user = __webpack_require__(39);

	var actions = {

		GET_ITEMS: _items.GET_ITEMS,
		SAVE_ITEM: _items.SAVE_ITEM,
		ADD_ITEM: _items.ADD_ITEM,
		DELETE_ITEMS: _items.DELETE_ITEMS,

		GET_ITEM: _item.GET_ITEM,

		LOGIN: _user.LOGIN,

		PLUS: function PLUS(_ref) {
			var commit = _ref.commit;

			setTimeout(function () {
				commit('PLUS');
			}, 2000);
		}
	};

	exports.default = actions;

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _root;
	if (/^http/.test(location.href)) {
		_root = location.origin + '/time';
	} else {
		_root = 'file:///D:/git/all/time';
	}

	var DIR = {
		root: _root,
		img: _root + '/../img/time',
		//api: _root+'/../api/time',
		api: 'http://localhost:80/api',

		admin: _root + '/admin.html',

		index: _root + '/index.html',
		cart: _root + '/cart.html',
		item: _root + '/item.html',
		search: _root + '/search.html'
	};

	exports.DIR = DIR;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.DELETE_ITEMS = exports.ADD_ITEM = exports.SAVE_ITEM = exports.GET_ITEMS = undefined;

	var _config = __webpack_require__(36);

	function GET_ITEMS(_ref) {
		var commit = _ref.commit;

		fetch(_config.DIR.api + '/items/', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
			mode: "cors"
		}).then(function (res) {
			if (res.status === 200) {
				return res.json();
			} else {
				//return Promise.reject(res.json())
			}
		}).then(function (items) {
			items.forEach(function (a) {
				a.checked = false;
			});
			console.log(items);
			commit('GET_ITEMS', items);
		}).catch(function (err) {
			console.log(err);
		});
	}

	function SAVE_ITEM(_ref2, item_json) {
		var commit = _ref2.commit;

		fetch(_config.DIR.api + '/items/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			mode: "cors",
			body: item_json
		}).then(function (res) {
			if (res.status === 200) {
				//return res.json()
			} else {
					//return Promise.reject(res.json())
				}
		}).then(function (data) {
			var new_item = JSON.parse(item_json);
			new_item.checked = false;
			commit('SAVE_ITEM', new_item);
		}).catch(function (err) {
			console.log(err);
		});
	}

	function ADD_ITEM(_ref3, item_json) {
		var commit = _ref3.commit;

		fetch(_config.DIR.api + '/items/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			mode: "cors",
			body: item_json
		}).then(function (res) {
			if (res.status === 200) {
				//return res.json()
			} else {
					//return Promise.reject(res.json())
				}
		}).then(function (data) {
			var new_item = JSON.parse(item_json);
			new_item.checked = false;
			commit('ADD_ITEM', new_item);
		}).catch(function (err) {
			console.log(err);
		});
	}

	function DELETE_ITEMS(_ref4, ids) {
		var commit = _ref4.commit;

		fetch(_config.DIR.api + '/items/', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			},
			mode: "cors",
			body: JSON.stringify(ids)
		}).then(function (res) {
			if (res.status === 200) {
				//return res.json()
			} else {
					//return Promise.reject(res.json())
				}
		}).then(function (data) {
			commit('DELETE_ITEMS');
		}).catch(function (err) {
			console.log(err);
		});
	}

	exports.GET_ITEMS = GET_ITEMS;
	exports.SAVE_ITEM = SAVE_ITEM;
	exports.ADD_ITEM = ADD_ITEM;
	exports.DELETE_ITEMS = DELETE_ITEMS;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.GET_ITEM = undefined;

	var _config = __webpack_require__(36);

	function GET_ITEM(_ref, id) {
		var commit = _ref.commit;

		fetch(_config.DIR.api + '/item?id=' + id, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
			mode: "cors"
		}).then(function (res) {
			if (res.status === 200) {
				return res.json();
			} else {
				//return Promise.reject(res.json())
			}
		}).then(function (item) {

			commit('SET_ITEM', item);
		}).catch(function (err) {
			console.log(err);
		});
	}

	exports.GET_ITEM = GET_ITEM;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.LOGIN = undefined;

	var _config = __webpack_require__(36);

	function LOGIN(_ref, user_json) {
		var commit = _ref.commit;

		fetch(_config.DIR.api + '/state/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			mode: "cors",
			body: user_json
		}).then(function (res) {
			if (res.status === 200) {
				return res.json();
			} else {
				//return Promise.reject(res.json())
			}
		}).then(function (res) {
			if (res === false) {} else {
				console.log(res);
				commit('LOGIN', user_json);
				location.href = '#/';
			}
		}).catch(function (err) {
			console.log(err);
		});
	}

	exports.LOGIN = LOGIN;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__vue_script__ = __webpack_require__(41);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\_admin\\App.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(46);
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
	    var id = "_v-6f20f444/App.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		components: {
			TopbarBlack: __webpack_require__(42)
		},
		mounted: function mounted() {
			this.$store.dispatch('GET_ITEMS');
			this.$store.dispatch('PLUS');
		},
		computed: {
			items: function items() {
				return this.$store.state.items;
			},
			num: function num() {
				return this.$store.state.num.num;
			}
		},
		methods: {
			act: function act() {}
		}
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(43);
	__vue_script__ = __webpack_require__(44);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\components\\TopbarBlack.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(45);
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
	    var id = "_v-6f4f3b04/TopbarBlack.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 43 */
1,
/* 44 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			items: {
				default: function _default() {
					return [{}];
				}
			}
		}
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"TopbarBlack\" _v-6f4f3b04=\"\">\n\t<a class=\"li\" href=\"./index.html\" _v-6f4f3b04=\"\">Home</a>\n\t<a class=\"li\" href=\"./test.html\" _v-6f4f3b04=\"\">Test</a>\n\t<a class=\"li\" href=\"./admin.html\" _v-6f4f3b04=\"\">Admin</a>\n</div>\n";

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "\n<div id=\"root\">\n\t<topbar-black></topbar-black>\n\t<router-view></router-view>\n</div>\n";

/***/ }
/******/ ])));