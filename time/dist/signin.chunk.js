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

	__webpack_require__(38);

	var _store = __webpack_require__(27);

	new Vue({
		el: '#root',
		store: _store.store,
		components: {
			App: __webpack_require__(98)
		},
		template: '<app></app>',
		mounted: function mounted() {
			var self = this;
			self.$store.dispatch('GET_ITEMS');
		},
		methods: {}
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
/* 15 */,
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = { "default": __webpack_require__(17), __esModule: true };

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var core = __webpack_require__(18),
	    $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
	module.exports = function stringify(it) {
	  // eslint-disable-line no-unused-vars
	  return $JSON.stringify.apply($JSON, arguments);
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	var core = module.exports = { version: '2.4.0' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ },
/* 19 */,
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(21);
	__vue_script__ = __webpack_require__(22);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\components\\Signin.vue: named exports in *.vue files are ignored.");
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
	    var id = "_v-5580db24/Signin.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 21 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _stringify = __webpack_require__(16);

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
/* 23 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Signin wrapper\" _v-5580db24=\"\">\n\t<div class=\"shade__\" _v-5580db24=\"\">\n\t\t<div _v-5580db24=\"\"></div>\n\t</div>\n\t<div class=\"panel__\" _v-5580db24=\"\">\n\t\t<div class=\"register\" _v-5580db24=\"\">\n\t\t\t<div class=\"register-center\" _v-5580db24=\"\">\n\t\t\t\t<div class=\"register-header\" _v-5580db24=\"\">\n\t\t\t\t\t<h1 _v-5580db24=\"\">新会员注册</h1>\n\t\t\t\t</div>\n\t\t\t\t<form class=\"register-form\" _v-5580db24=\"\">\n\t\t\t\t\t<input type=\"text\" name=\"mobile\" placeholder=\"请输入11位手机号\" v-model=\"signup_form.mobile\" :class=\"state.mobile\" @focus=\"onFocus('mobile')\" @blur=\"check_mobile\" _v-5580db24=\"\">\n\t\t\t\t\t<p class=\"info\" _v-5580db24=\"\">{{info.mobile}}</p>\n\t\t\t\t\t<input type=\"password\" name=\"password\" placeholder=\"密码（6-20位字母、数字与符号的组合）\" v-model=\"signup_form.password\" :class=\"state.password\" @focus=\"onFocus('password')\" @blur=\"check_password\" _v-5580db24=\"\">\n\t\t\t\t\t<p class=\"info\" _v-5580db24=\"\">{{info.password}}</p>\n\t\t\t\t\t<input type=\"password\" name=\"password2\" placeholder=\"确认密码\" :class=\"state.password2\" @focus=\"onFocus('password2')\" @blur=\"check_password2\" _v-5580db24=\"\">\n\t\t\t\t\t<p class=\"info\" _v-5580db24=\"\">{{info.password2}}</p>\n\t\t\t\t\t<input type=\"text\" name=\"verif\" placeholder=\"请输入验证码\" _v-5580db24=\"\">\n\t\t\t\t\t<p class=\"info\" _v-5580db24=\"\"></p>\n\n\t\t\t\t\t<div class=\"check_b_container agree\" _v-5580db24=\"\">\n\t\t\t\t\t\t<div class=\"checkbox_\" :class=\" signup_form.agreed?'checked':'' \" @click=\"toggle\" _v-5580db24=\"\">\n\t\t\t\t\t\t\t<div class=\"square\" :style=\" 'transform:'+(signup_form.agreed?'scale(1)':'scale(0)') \" _v-5580db24=\"\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p _v-5580db24=\"\">已同意《飞越太平洋服务条款》</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"btn__ register-button\" _v-5580db24=\"\">注 册</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"middle-line\" _v-5580db24=\"\"></div>\n\t\t<div class=\"login\" _v-5580db24=\"\">\n\t\t\t<div class=\"login-center\" _v-5580db24=\"\">\n\t\t\t\t<div class=\"login-header\" _v-5580db24=\"\">\n\t\t\t\t\t<h1 class=\"hydl\" _v-5580db24=\"\">会员登录</h1>\n\t\t\t\t</div>\n\t\t\t\t<form class=\"login-form\" _v-5580db24=\"\">\n\t\t\t\t\t<input type=\"text\" name=\"username\" placeholder=\"请输入您的用户名\" v-model=\"signin_form.id\" _v-5580db24=\"\">\n\t\t\t\t\t<p class=\"info\" _v-5580db24=\"\"></p>\n\t\t\t\t\t<input type=\"password\" name=\"password\" placeholder=\"请输入您的密码\" v-model=\"signin_form.password\" _v-5580db24=\"\">\n\t\t\t\t\t<p class=\"info\" _v-5580db24=\"\"></p>\n\n\t\t\t\t\t<div class=\"check_b_container remember_me\" _v-5580db24=\"\">\n\t\t\t\t\t\t<div class=\"checkbox_\" :class=\" signin_form.remember_me?'checked':'' \" @click=\"toggle2\" _v-5580db24=\"\">\n\t\t\t\t\t\t\t<div class=\"square\" :style=\" 'transform:'+(signin_form.remember_me?'scale(1)':'scale(0)') \" _v-5580db24=\"\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<p _v-5580db24=\"\">下次自动登录</p>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"btn__ login-button\" @click=\"LOGIN\" _v-5580db24=\"\">登 录</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.store = undefined;

	var _items = __webpack_require__(28);

	var _items2 = _interopRequireDefault(_items);

	var _item = __webpack_require__(29);

	var _item2 = _interopRequireDefault(_item);

	var _user = __webpack_require__(30);

	var _user2 = _interopRequireDefault(_user);

	var _num = __webpack_require__(31);

	var _base = __webpack_require__(32);

	var _base2 = _interopRequireDefault(_base);

	var _actions = __webpack_require__(33);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//Vue.use( Vuex );

	var store = new Vuex.Store({
		modules: {
			base: _base2.default,
			user: _user2.default,
			items: _items2.default,
			item: _item2.default,
			num: _num.num
		},
		actions: _actions.actions
	});

	exports.store = store;

/***/ },
/* 28 */
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
/* 29 */
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
/* 30 */
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
/* 31 */
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
/* 32 */
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.actions = undefined;

	var _config = __webpack_require__(34);

	var _items = __webpack_require__(35);

	var _item = __webpack_require__(36);

	var _user = __webpack_require__(37);

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

	exports.actions = actions;

/***/ },
/* 34 */
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.DELETE_ITEMS = exports.ADD_ITEM = exports.SAVE_ITEM = exports.GET_ITEMS = undefined;

	var _config = __webpack_require__(34);

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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.GET_ITEM = undefined;

	var _config = __webpack_require__(34);

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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.LOGIN = undefined;

	var _config = __webpack_require__(34);

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
/* 38 */
21,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(50);
	__vue_script__ = __webpack_require__(51);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\components\\BackToTop.vue: named exports in *.vue files are ignored.");
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
	    var id = "_v-8f3a88d2/BackToTop.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 50 */
21,
/* 51 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var body;
	exports.default = {
		data: function data() {
			return {
				scrolling: false
			};
		},
		mounted: function mounted() {
			body = document.querySelector('body');
		},
		methods: {
			back: function back() {
				var _this = this;

				if (!this.scrolling) {
					this.scrolling = true;
					var duration = 300;
					var distance = body.scrollTop;
					var dy = 10 * distance / duration;
					var interval = setInterval(function () {
						if (body.scrollTop - dy > 0) {
							body.scrollTop -= dy;
						} else {
							body.scrollTop = 0;
							clearInterval(interval);
							_this.scrolling = false;
						}
					}, 10);
				}
			}
		}
	};

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"BACK-TO-TOP\" @click=\"back\" _v-8f3a88d2=\"\"><i class=\"fa fa-angle-up\" _v-8f3a88d2=\"\"></i></div>\n";

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(54);
	__vue_script__ = __webpack_require__(55);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\components\\MyHeader.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(56);
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
	    var id = "_v-341844b6/MyHeader.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 54 */
21,
/* 55 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
		props: ['dir'],
		computed: {}
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"MY-HEADER\" _v-341844b6=\"\">\n\t<!-- searchbar -->\n\t<div class=\"searchbar wrapper\" _v-341844b6=\"\">\n\t\t<div class=\"container\" _v-341844b6=\"\">\n\t\t\t<div class=\"search_box\" _v-341844b6=\"\">\n\t\t\t\t<form _v-341844b6=\"\">\n\t\t\t\t\t<input type=\"text\" placeholder=\"请输入您想搜索的商品名称\" _v-341844b6=\"\">\n\t\t\t\t\t<a :href=\" dir.search \" class=\"a-search search_btn\" _v-341844b6=\"\"><i class=\"fa fa-search\" _v-341844b6=\"\"></i></a>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"LINE wrapper\" _v-341844b6=\"\"></div>\n\t<!-- topbar -->\n\t<div class=\"topbar wrapper\" _v-341844b6=\"\">\n\t\t<div class=\"container\" _v-341844b6=\"\">\n\t\t\t<p _v-341844b6=\"\"><a class=\"a_home\" :href=\"dir.index\" _v-341844b6=\"\">欢迎来到飞越太平洋海淘网站</a></p>\n\t\t\t<ul _v-341844b6=\"\">\n\t\t\t\t<li _v-341844b6=\"\"><a :href=\" dir.signin \" class=\"a-signin login\" _v-341844b6=\"\">登录</a></li><span class=\"separator\" _v-341844b6=\"\">|</span>\n\t\t\t\t<li _v-341844b6=\"\"><a :href=\" dir.signin \" class=\"a-signup register\" _v-341844b6=\"\">注册</a></li><span class=\"separator\" _v-341844b6=\"\">|</span>\n\t\t\t\t<li _v-341844b6=\"\"><i class=\"fa fa-file\" _v-341844b6=\"\"></i> <a class=\"a_my_orders\" href=\"./orders.html\" _v-341844b6=\"\">我的订单</a></li><span class=\"separator\" _v-341844b6=\"\">|</span>\n\t\t\t\t<li class=\"my_cart\" _v-341844b6=\"\">\n\t\t\t\t\t<i class=\"fa fa-shopping-cart\" _v-341844b6=\"\"></i> <a class=\"a-cart\" :href=\" dir.cart \" _v-341844b6=\"\">我的购物车(<span class=\"quantityIn\" _v-341844b6=\"\">0</span>)</a>\n\t\t\t\t\t<div class=\"cart_panel\" _v-341844b6=\"\">\n\t\t\t\t\t\t我的购物车\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<div class=\"clear\" _v-341844b6=\"\"></div>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(58);
	__vue_script__ = __webpack_require__(59);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\components\\MyFooter.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(60);
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
	    var id = "_v-767d0c9a/MyFooter.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 58 */
21,
/* 59 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {};

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"MY-FOOTER wrapper\" _v-767d0c9a=\"\">\n\t<!-- footer -->\n\t<div class=\"LINE wrapper\" _v-767d0c9a=\"\"></div>\n\t<div class=\"footer wrapper\" style=\"background:#F2F2F2;\" _v-767d0c9a=\"\">\n\t\t<ul class=\"container\" _v-767d0c9a=\"\">\n\t\t\t<li _v-767d0c9a=\"\">\t\n\t\t\t\t<h4 _v-767d0c9a=\"\">购物指南</h4>\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">新用户注册</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">购物流程</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">常见问题</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">发票制度</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">联系我们</a>\n\t\t\t</li>\n\t\t\t<li _v-767d0c9a=\"\">\t\n\t\t\t\t<h4 _v-767d0c9a=\"\">支付方式</h4>\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">在线付款</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">余额付款</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">优惠券使用说明</a>\n\t\t\t</li>\n\t\t\t<li _v-767d0c9a=\"\">\t\n\t\t\t\t<h4 _v-767d0c9a=\"\">配送方式</h4>\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">邮费说明</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">配送服务范围</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">配送速度查询</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">验货与签收</a>\n\t\t\t</li>\n\t\t\t<li _v-767d0c9a=\"\">\t\n\t\t\t\t<h4 _v-767d0c9a=\"\">售后服务</h4>\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">售后政策</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">退货政策</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">退货流程</a>\n\t\t\t</li>\n\t\t\t<li _v-767d0c9a=\"\">\t\n\t\t\t\t<h4 _v-767d0c9a=\"\">客服电话</h4>\n\t\t\t\t<p class=\"serviceTel\" _v-767d0c9a=\"\">4006-118-118</p>\n\t\t\t\t<p _v-767d0c9a=\"\">周一至周日9:00~22:00</p>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\t<div class=\"copyright wrapper\" _v-767d0c9a=\"\">\n\t\t<div class=\"container\" _v-767d0c9a=\"\">\n\t\t\t<p _v-767d0c9a=\"\">Copyright © 2015.FYTPY All rights reserved.</p>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__vue_script__ = __webpack_require__(99);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\_signin\\App.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(100);
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
	    var id = "_v-0c7a2f0c/App.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		components: {
			MyHeader: __webpack_require__(53),
			MyFooter: __webpack_require__(57),
			BackToTop: __webpack_require__(49),
			Signin: __webpack_require__(20)
		},
		computed: {
			dir: function dir() {
				return this.$store.state.base.DIR;
			},
			items: function items() {
				return this.$store.state.items;
			}
		}
	};

/***/ },
/* 100 */
/***/ function(module, exports) {

	module.exports = "\n<div id=\"root\">\n\t<back-to-top></back-to-top>\n\t<my-header :dir=\"dir\"></my-header>\n\t\n\t<signin></signin>\n\t\n\t<my-footer></my-footer>\n</div>\n";

/***/ }
/******/ ])));