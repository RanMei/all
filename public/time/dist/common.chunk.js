/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		8:0
/******/ 	};

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

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({"0":"./_admin/admin","1":"cart","2":"hmr","3":"index","4":"item","5":"search","6":"signin","7":"test"}[chunkId]||chunkId) + ".chunk.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/time/dist/";
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = window.Vue;

/***/ },
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
/* 16 */,
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};

	/* styles */
	__webpack_require__(18);

	/* script */
	__vue_exports__ = __webpack_require__(19);

	/* template */
	var __vue_template__ = __webpack_require__(20);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}

	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	__vue_options__._scopeId = "data-v-61dfbd6f";

	module.exports = __vue_exports__;

/***/ },
/* 18 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

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
				this.$store.dispatch('LOGIN', JSON.stringify(this.signin_form));
			}
		}
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "Signin wrapper"
	  }, [_vm._m(0), _vm._v(" "), _c('div', {
	    staticClass: "panel__"
	  }, [_c('div', {
	    staticClass: "register"
	  }, [_c('div', {
	    staticClass: "register-center"
	  }, [_vm._m(1), _vm._v(" "), _c('form', {
	    staticClass: "register-form"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.signup_form.mobile),
	      expression: "signup_form.mobile"
	    }],
	    class: _vm.state.mobile,
	    attrs: {
	      "type": "text",
	      "name": "mobile",
	      "placeholder": "请输入11位手机号"
	    },
	    domProps: {
	      "value": _vm._s(_vm.signup_form.mobile)
	    },
	    on: {
	      "focus": function($event) {
	        _vm.onFocus('mobile')
	      },
	      "blur": _vm.check_mobile,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.signup_form.mobile = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('p', {
	    staticClass: "info"
	  }, [_vm._v(_vm._s(_vm.info.mobile))]), _vm._v(" "), _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.signup_form.password),
	      expression: "signup_form.password"
	    }],
	    class: _vm.state.password,
	    attrs: {
	      "type": "password",
	      "name": "password",
	      "placeholder": "密码（6-20位字母、数字与符号的组合）"
	    },
	    domProps: {
	      "value": _vm._s(_vm.signup_form.password)
	    },
	    on: {
	      "focus": function($event) {
	        _vm.onFocus('password')
	      },
	      "blur": _vm.check_password,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.signup_form.password = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('p', {
	    staticClass: "info"
	  }, [_vm._v(_vm._s(_vm.info.password))]), _vm._v(" "), _c('input', {
	    class: _vm.state.password2,
	    attrs: {
	      "type": "password",
	      "name": "password2",
	      "placeholder": "确认密码"
	    },
	    on: {
	      "focus": function($event) {
	        _vm.onFocus('password2')
	      },
	      "blur": _vm.check_password2
	    }
	  }), _vm._v(" "), _c('p', {
	    staticClass: "info"
	  }, [_vm._v(_vm._s(_vm.info.password2))]), _vm._v(" "), _c('input', {
	    attrs: {
	      "type": "text",
	      "name": "verif",
	      "placeholder": "请输入验证码"
	    }
	  }), _vm._v(" "), _c('p', {
	    staticClass: "info"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "check_b_container agree"
	  }, [_c('div', {
	    staticClass: "checkbox_",
	    class: _vm.signup_form.agreed ? 'checked' : '',
	    on: {
	      "click": _vm.toggle
	    }
	  }, [_c('div', {
	    staticClass: "square",
	    style: ('transform:' + (_vm.signup_form.agreed ? 'scale(1)' : 'scale(0)'))
	  })]), _vm._v(" "), _c('p', [_vm._v("已同意《飞越太平洋服务条款》")])]), _vm._v(" "), _c('div', {
	    staticClass: "btn__ register-button"
	  }, [_vm._v("注 册")])])])]), _vm._v(" "), _c('div', {
	    staticClass: "middle-line"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "login"
	  }, [_c('div', {
	    staticClass: "login-center"
	  }, [_vm._m(2), _vm._v(" "), _c('form', {
	    staticClass: "login-form"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.signin_form.id),
	      expression: "signin_form.id"
	    }],
	    attrs: {
	      "type": "text",
	      "name": "username",
	      "placeholder": "请输入您的用户名"
	    },
	    domProps: {
	      "value": _vm._s(_vm.signin_form.id)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.signin_form.id = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('p', {
	    staticClass: "info"
	  }), _vm._v(" "), _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.signin_form.password),
	      expression: "signin_form.password"
	    }],
	    attrs: {
	      "type": "password",
	      "name": "password",
	      "placeholder": "请输入您的密码"
	    },
	    domProps: {
	      "value": _vm._s(_vm.signin_form.password)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.signin_form.password = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('p', {
	    staticClass: "info"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "check_b_container remember_me"
	  }, [_c('div', {
	    staticClass: "checkbox_",
	    class: _vm.signin_form.remember_me ? 'checked' : '',
	    on: {
	      "click": _vm.toggle2
	    }
	  }, [_c('div', {
	    staticClass: "square",
	    style: ('transform:' + (_vm.signin_form.remember_me ? 'scale(1)' : 'scale(0)'))
	  })]), _vm._v(" "), _c('p', [_vm._v("下次自动登录")])]), _vm._v(" "), _c('div', {
	    staticClass: "btn__ login-button",
	    on: {
	      "click": _vm.LOGIN
	    }
	  }, [_vm._v("登 录")])])])])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "shade__"
	  }, [_c('div')])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "register-header"
	  }, [_c('h1', [_vm._v("新会员注册")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "login-header"
	  }, [_c('h1', {
	    staticClass: "hydl"
	  }, [_vm._v("会员登录")])])
	}]}

/***/ },
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.store = undefined;

	var _vue = __webpack_require__(3);

	var _vue2 = _interopRequireDefault(_vue);

	var _vuex = __webpack_require__(29);

	var _vuex2 = _interopRequireDefault(_vuex);

	var _base = __webpack_require__(30);

	var _base2 = _interopRequireDefault(_base);

	var _cart = __webpack_require__(31);

	var _cart2 = _interopRequireDefault(_cart);

	var _items = __webpack_require__(32);

	var _items2 = _interopRequireDefault(_items);

	var _item = __webpack_require__(33);

	var _item2 = _interopRequireDefault(_item);

	var _user = __webpack_require__(34);

	var _user2 = _interopRequireDefault(_user);

	var _num = __webpack_require__(35);

	var _actions = __webpack_require__(36);

	var _actions2 = _interopRequireDefault(_actions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.use(_vuex2.default);

	var store = new _vuex2.default.Store({
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

	module.exports = window.Vuex;

/***/ },
/* 30 */
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
/* 31 */
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
		CART_REMOVE: function CART_REMOVE(state, i) {
			state.items.splice(i, 1);
		},
		CART_PLUS: function CART_PLUS(state, i) {
			state.items[i].quantity++;
		},
		CART_MINUS: function CART_MINUS(state, i) {
			if (state.items[i].quantity > 1) {
				state.items[i].quantity--;
			}
		}
	};

	exports.default = { state: state, mutations: mutations };

/***/ },
/* 32 */
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
/* 33 */
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
/* 34 */
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
/* 35 */
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _config = __webpack_require__(37);

	var _items = __webpack_require__(38);

	var _item = __webpack_require__(39);

	var _user = __webpack_require__(40);

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
/* 37 */
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.DELETE_ITEMS = exports.ADD_ITEM = exports.SAVE_ITEM = exports.GET_ITEMS = undefined;

	var _config = __webpack_require__(37);

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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.GET_ITEM = undefined;

	var _config = __webpack_require__(37);

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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.LOGIN = undefined;

	var _config = __webpack_require__(37);

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
/* 41 */,
/* 42 */,
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};

	/* styles */
	__webpack_require__(44);

	/* script */
	__vue_exports__ = __webpack_require__(45);

	/* template */
	var __vue_template__ = __webpack_require__(46);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}

	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	__vue_options__._scopeId = "data-v-6f4f3b04";

	module.exports = __vue_exports__;

/***/ },
/* 44 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

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
/* 46 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "TopbarBlack"
	  }, [_c('a', {
	    staticClass: "li",
	    attrs: {
	      "href": "./index.html"
	    }
	  }, [_vm._v("Home")]), _vm._v(" "), _c('a', {
	    staticClass: "li",
	    attrs: {
	      "href": "./test.html"
	    }
	  }, [_vm._v("Test")]), _vm._v(" "), _c('a', {
	    staticClass: "li",
	    attrs: {
	      "href": "./admin.html"
	    }
	  }, [_vm._v("Admin")])])
	}]}

/***/ },
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};

	/* styles */
	__webpack_require__(53);

	/* script */
	__vue_exports__ = __webpack_require__(54);

	/* template */
	var __vue_template__ = __webpack_require__(55);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}

	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	__vue_options__._scopeId = "data-v-7b4f24f6";

	module.exports = __vue_exports__;

/***/ },
/* 53 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 54 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

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
				//window.scroll(0,0);
			}
		}
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "BACK-TO-TOP",
	    on: {
	      "click": _vm.back
	    }
	  }, [_c('i', {
	    staticClass: "fa fa-angle-up"
	  })])
	},staticRenderFns: []}

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};

	/* styles */
	__webpack_require__(57);

	/* script */
	__vue_exports__ = __webpack_require__(58);

	/* template */
	var __vue_template__ = __webpack_require__(59);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}

	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	__vue_options__._scopeId = "data-v-69956734";

	module.exports = __vue_exports__;

/***/ },
/* 57 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 58 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
		props: ['dir'],
		computed: {
			quantity_in_cart: function quantity_in_cart() {
				return this.$store.state.cart.items.length;
			}
		}
	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "MY-HEADER"
	  }, [_c('div', {
	    staticClass: "searchbar wrapper"
	  }, [_c('div', {
	    staticClass: "container"
	  }, [_c('div', {
	    staticClass: "search_box"
	  }, [_c('form', [_c('input', {
	    attrs: {
	      "type": "text",
	      "placeholder": "请输入您想搜索的商品名称"
	    }
	  }), _vm._v(" "), _c('a', {
	    staticClass: "a-search search_btn",
	    attrs: {
	      "href": _vm.dir.search
	    }
	  }, [_c('i', {
	    staticClass: "fa fa-search"
	  })])])])])]), _vm._v(" "), _c('div', {
	    staticClass: "LINE wrapper"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "topbar wrapper"
	  }, [_c('div', {
	    staticClass: "container"
	  }, [_c('p', [_c('a', {
	    staticClass: "a_home",
	    attrs: {
	      "href": _vm.dir.index
	    }
	  }, [_vm._v("欢迎来到飞越太平洋海淘网站")])]), _vm._v(" "), _c('ul', [_c('li', [_c('a', {
	    staticClass: "a-signin login",
	    attrs: {
	      "href": _vm.dir.signin
	    }
	  }, [_vm._v("登录")])]), _c('span', {
	    staticClass: "separator"
	  }, [_vm._v("|")]), _vm._v(" "), _c('li', [_c('a', {
	    staticClass: "a-signup register",
	    attrs: {
	      "href": _vm.dir.signin
	    }
	  }, [_vm._v("注册")])]), _c('span', {
	    staticClass: "separator"
	  }, [_vm._v("|")]), _vm._v(" "), _vm._m(0), _c('span', {
	    staticClass: "separator"
	  }, [_vm._v("|")]), _vm._v(" "), _c('li', {
	    staticClass: "my_cart"
	  }, [_c('i', {
	    staticClass: "fa fa-shopping-cart"
	  }), _vm._v(" "), _c('a', {
	    staticClass: "a-cart",
	    attrs: {
	      "href": _vm.dir.cart
	    }
	  }, [_vm._v("我的购物车("), _c('span', {
	    staticClass: "quantityIn"
	  }, [_vm._v(_vm._s(_vm.quantity_in_cart || 0))]), _vm._v(")")]), _vm._v(" "), _c('div', {
	    staticClass: "cart_panel"
	  }, [_vm._v("\r\n\t\t\t\t\t\t我的购物车\r\n\t\t\t\t\t")])])]), _vm._v(" "), _c('div', {
	    staticClass: "clear"
	  })])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', [_c('i', {
	    staticClass: "fa fa-file"
	  }), _vm._v(" "), _c('a', {
	    staticClass: "a_my_orders",
	    attrs: {
	      "href": "./orders.html"
	    }
	  }, [_vm._v("我的订单")])])
	}]}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};

	/* styles */
	__webpack_require__(61);

	/* script */
	__vue_exports__ = __webpack_require__(62);

	/* template */
	var __vue_template__ = __webpack_require__(63);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}

	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	__vue_options__._scopeId = "data-v-abfa2f18";

	module.exports = __vue_exports__;

/***/ },
/* 61 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 62 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {};

/***/ },
/* 63 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "MY-FOOTER wrapper"
	  }, [_c('div', {
	    staticClass: "LINE wrapper"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "footer wrapper",
	    staticStyle: {
	      "background": "#F2F2F2"
	    }
	  }, [_c('ul', {
	    staticClass: "container"
	  }, [_c('li', [_c('h4', [_vm._v("购物指南")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("新用户注册")]), _c('br'), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("购物流程")]), _c('br'), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("常见问题")]), _c('br'), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("发票制度")]), _c('br'), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("联系我们")])]), _vm._v(" "), _c('li', [_c('h4', [_vm._v("支付方式")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("在线付款")]), _c('br'), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("余额付款")]), _c('br'), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("优惠券使用说明")])]), _vm._v(" "), _c('li', [_c('h4', [_vm._v("配送方式")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("邮费说明")]), _c('br'), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("配送服务范围")]), _c('br'), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("配送速度查询")]), _c('br'), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("验货与签收")])]), _vm._v(" "), _c('li', [_c('h4', [_vm._v("售后服务")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("售后政策")]), _c('br'), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("退货政策")]), _c('br'), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("退货流程")])]), _vm._v(" "), _c('li', [_c('h4', [_vm._v("客服电话")]), _vm._v(" "), _c('p', {
	    staticClass: "serviceTel"
	  }, [_vm._v("4006-118-118")]), _vm._v(" "), _c('p', [_vm._v("周一至周日9:00~22:00")])])])]), _vm._v(" "), _c('div', {
	    staticClass: "copyright wrapper"
	  }, [_c('div', {
	    staticClass: "container"
	  }, [_c('p', [_vm._v("Copyright © 2015.FYTPY All rights reserved.")])])])])
	}]}

/***/ },
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};

	/* styles */
	__webpack_require__(74);

	/* script */
	__vue_exports__ = __webpack_require__(75);

	/* template */
	var __vue_template__ = __webpack_require__(80);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}

	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	__vue_options__._scopeId = "data-v-44703528";

	module.exports = __vue_exports__;

/***/ },
/* 74 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
		props: {
			dir: {}
		},
		components: {
			Focus: __webpack_require__(76)
		},
		computed: {
			col2: function col2() {
				return [this.dir.item + '?id=1602091546'];
			}
		}
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};

	/* styles */
	__webpack_require__(77);

	/* script */
	__vue_exports__ = __webpack_require__(78);

	/* template */
	var __vue_template__ = __webpack_require__(79);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}

	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	__vue_options__._scopeId = "data-v-7eb276ca";

	module.exports = __vue_exports__;

/***/ },
/* 77 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 78 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
		props: {
			dir: {},
			items: {
				default: [0, 1, 2, 3]
			}
		},
		data: function data() {
			return {
				current: 0
			};
		},
		watch: {
			curernt: function curernt(val, prev_val) {}
		},
		methods: {
			prev: function prev() {
				if (this.current > 0) {
					this.current--;
				} else {
					this.current = 3;
				}
			},
			next: function next() {
				if (this.current < 3) {
					this.current++;
				} else {
					this.current = 0;
				}
			},
			jump: function jump(i) {
				this.current = i;
			}
		}
	};

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('ul', {
	    staticClass: "Focus wrapper"
	  }, [_vm._l((_vm.items), function(a, i) {
	    return _c('a', {
	      staticClass: "item",
	      class: i === _vm.current ? 'active' : '',
	      attrs: {
	        "href": _vm.dir.item
	      }
	    }, [_c('li', {
	      style: ('background:url(' + _vm.dir.img + '/focus/' + (i) + '.jpg) no-repeat center;')
	    })])
	  }), _vm._v(" "), _c('ul', {
	    staticClass: "pagination"
	  }, _vm._l((_vm.items), function(b, index) {
	    return _c('div', {
	      staticClass: "dot",
	      class: index === _vm.current ? 'active' : '',
	      on: {
	        "click": function($event) {
	          _vm.jump(index)
	        }
	      }
	    })
	  })), _vm._v(" "), _c('div', {
	    staticClass: "focus-last",
	    on: {
	      "click": _vm.prev
	    }
	  }, [_c('i', {
	    staticClass: "fa fa-angle-left"
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "focus-next",
	    on: {
	      "click": _vm.next
	    }
	  }, [_c('i', {
	    staticClass: "fa fa-angle-right"
	  })])], 2)
	},staticRenderFns: []}

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "Home"
	  }, [_c('div', {
	    staticClass: "navbar wrapper"
	  }, [_c('div', {
	    staticClass: "container"
	  }, [_c('ul', {
	    staticClass: "menu"
	  }, [_c('div', {
	    staticClass: "menu-head"
	  }, [_vm._v("全部商品分类")]), _vm._v(" "), _c('li', [_c('div', {
	    staticClass: "upper"
	  }, [_c('a', {
	    staticClass: "a_a",
	    attrs: {
	      "href": ""
	    }
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.dir.img + '/icons/0.png'
	    }
	  })]), _vm._v(" "), _c('a', {
	    staticClass: "a_b",
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("玩具模型")])]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('li', [_c('div', {
	    staticClass: "upper"
	  }, [_c('a', {
	    staticClass: "a_a",
	    attrs: {
	      "href": ""
	    }
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.dir.img + '/icons/1.png'
	    }
	  })]), _vm._v(" "), _c('a', {
	    staticClass: "a_b",
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("数码配件")])]), _vm._v(" "), _vm._m(1)]), _vm._v(" "), _c('li', [_c('div', {
	    staticClass: "upper"
	  }, [_c('a', {
	    staticClass: "a_a",
	    attrs: {
	      "href": ""
	    }
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.dir.img + '/icons/2.png'
	    }
	  })]), _vm._v(" "), _c('a', {
	    staticClass: "a_b",
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("服装服饰")])]), _vm._v(" "), _vm._m(2)]), _vm._v(" "), _c('li', [_c('div', {
	    staticClass: "upper"
	  }, [_c('a', {
	    staticClass: "a_a",
	    attrs: {
	      "href": ""
	    }
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.dir.img + '/icons/3.png'
	    }
	  })]), _vm._v(" "), _c('a', {
	    staticClass: "a_b",
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("居家日用")])]), _vm._v(" "), _vm._m(3)])]), _vm._v(" "), _c('ul', {
	    staticClass: "tabs"
	  }, [_c('li', [_c('a', {
	    attrs: {
	      "href": _vm.dir.admin
	    }
	  }, [_vm._v("首页")])]), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._m(5), _vm._v(" "), _vm._m(6), _vm._v(" "), _vm._m(7), _vm._v(" "), _vm._m(8), _vm._v(" "), _vm._m(9)])])]), _vm._v(" "), _c('focus', {
	    attrs: {
	      "dir": _vm.dir
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "main wrapper"
	  }, [_c('div', {
	    staticClass: "container"
	  }, [_c('div', {
	    staticClass: "box2"
	  }, [_c('ul', {
	    staticClass: "col1"
	  }, [_c('li', [_c('div', {
	    staticClass: "upper"
	  }, [_c('div', {
	    staticClass: "icon"
	  }, [_c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.dir.img + '/icons/4.png'
	    }
	  })])]), _vm._v(" "), _c('a', {
	    staticClass: "title",
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("玩具模型")])]), _vm._v(" "), _vm._m(10)]), _vm._v(" "), _c('li', [_c('div', {
	    staticClass: "upper"
	  }, [_c('div', {
	    staticClass: "icon"
	  }, [_c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.dir.img + '/icons/5.png'
	    }
	  })])]), _vm._v(" "), _c('a', {
	    staticClass: "title",
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("数码配件")])]), _vm._v(" "), _vm._m(11)]), _vm._v(" "), _c('li', [_c('div', {
	    staticClass: "upper"
	  }, [_c('div', {
	    staticClass: "icon"
	  }, [_c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.dir.img + '/icons/6.png'
	    }
	  })])]), _vm._v(" "), _c('a', {
	    staticClass: "title",
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("服装服饰")])]), _vm._v(" "), _vm._m(12)]), _vm._v(" "), _c('li', [_c('div', {
	    staticClass: "upper"
	  }, [_c('div', {
	    staticClass: "icon"
	  }, [_c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.dir.img + '/icons/7.png'
	    }
	  })])]), _vm._v(" "), _c('a', {
	    staticClass: "title",
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("居家日用")])]), _vm._v(" "), _vm._m(13)])]), _vm._v(" "), _c('div', {
	    staticClass: "col2"
	  }, [_c('dl', [_c('dt', [_c('a', {
	    attrs: {
	      "href": _vm.col2[0]
	    }
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.dir.img + '/index/showcase/0.jpg'
	    }
	  })])]), _vm._v(" "), _c('dt', [_c('a', {
	    attrs: {
	      "href": _vm.col2[0]
	    }
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.dir.img + '/index/showcase/1.jpg'
	    }
	  })])]), _vm._v(" "), _c('dd', [_c('a', {
	    attrs: {
	      "href": _vm.col2[0]
	    }
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.dir.img + '/index/showcase/2.jpg'
	    }
	  })])]), _vm._v(" "), _c('dd', [_c('a', {
	    attrs: {
	      "href": _vm.col2[0]
	    }
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.dir.img + '/index/showcase/3.jpg'
	    }
	  })])]), _vm._v(" "), _c('dd', [_c('a', {
	    attrs: {
	      "href": _vm.col2[0]
	    }
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.dir.img + '/index/showcase/4.jpg'
	    }
	  })])]), _vm._v(" "), _c('dd', [_c('a', {
	    attrs: {
	      "href": _vm.col2[0]
	    }
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.dir.img + '/index/showcase/5.jpg'
	    }
	  })])])])])]), _vm._v(" "), _c('div', {
	    staticClass: "showcase"
	  }, [_c('ul', {
	    staticClass: "left"
	  }, [_c('li', {
	    style: ('background:url(' + _vm.dir.img + '/index/toys/0.jpg)')
	  }, [_vm._m(14)]), _vm._v(" "), _c('li', {
	    style: ('background:url(' + _vm.dir.img + '/index/toys/1.jpg)')
	  }, [_vm._m(15)])]), _vm._v(" "), _c('ul', {
	    staticClass: "middle"
	  }, [_c('li', [_c('div', {
	    staticClass: "middle_left"
	  }, [_c('a', {
	    staticClass: "icon",
	    attrs: {
	      "href": ""
	    }
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.dir.img + '/icons/4.png'
	    }
	  })]), _vm._v(" "), _vm._m(16)]), _vm._v(" "), _vm._m(17)]), _vm._v(" "), _c('li', [_c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.dir.img + '/index/toys/2.jpg'
	    }
	  })])])]), _vm._v(" "), _c('ul', {
	    staticClass: "right"
	  }, [_c('li', {
	    style: ('background:url(' + _vm.dir.img + '/index/toys/3.jpg)')
	  }, [_vm._m(18)]), _vm._v(" "), _c('li', {
	    style: ('background:url(' + _vm.dir.img + '/index/toys/4.jpg)')
	  }, [_vm._m(19)])])]), _vm._v(" "), _c('div', {
	    staticClass: "showcase"
	  }, [_c('ul', {
	    staticClass: "left"
	  }, [_c('li', {
	    style: ('background:url(' + _vm.dir.img + '/index/digital/0.jpg)')
	  }, [_vm._m(20)]), _vm._v(" "), _c('li', {
	    style: ('background:url(' + _vm.dir.img + '/index/digital/1.jpg)')
	  }, [_vm._m(21)])]), _vm._v(" "), _c('ul', {
	    staticClass: "middle"
	  }, [_c('li', {
	    staticStyle: {
	      "background": "#2378B9"
	    }
	  }, [_c('div', {
	    staticClass: "middle_left"
	  }, [_c('a', {
	    staticClass: "icon",
	    attrs: {
	      "href": ""
	    }
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.dir.img + '/icons/5.png'
	    }
	  })]), _vm._v(" "), _vm._m(22)]), _vm._v(" "), _vm._m(23)]), _vm._v(" "), _c('li', [_c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.dir.img + '/index/digital/2.jpg'
	    }
	  })])])]), _vm._v(" "), _c('ul', {
	    staticClass: "right"
	  }, [_c('li', {
	    style: ('background:url(' + _vm.dir.img + '/index/digital/3.jpg)')
	  }, [_vm._m(24)]), _vm._v(" "), _c('li', {
	    style: ('background:url(' + _vm.dir.img + '/index/digital/4.jpg)')
	  }, [_vm._m(25)])])]), _vm._v(" "), _c('div', {
	    staticClass: "showcase"
	  }, [_c('ul', {
	    staticClass: "left"
	  }, [_c('li', {
	    style: ('background:url(' + _vm.dir.img + '/index/clothes/0.jpg)')
	  }, [_vm._m(26)]), _vm._v(" "), _c('li', {
	    style: ('background:url(' + _vm.dir.img + '/index/clothes/1.jpg)')
	  }, [_vm._m(27)])]), _vm._v(" "), _c('ul', {
	    staticClass: "middle"
	  }, [_c('li', {
	    staticStyle: {
	      "background": "#49B67C"
	    }
	  }, [_c('div', {
	    staticClass: "middle_left"
	  }, [_c('a', {
	    staticClass: "icon",
	    attrs: {
	      "href": ""
	    }
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.dir.img + '/icons/6.png'
	    }
	  })]), _vm._v(" "), _vm._m(28)]), _vm._v(" "), _vm._m(29)]), _vm._v(" "), _c('li', [_c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.dir.img + '/index/clothes/2.jpg'
	    }
	  })])])]), _vm._v(" "), _c('ul', {
	    staticClass: "right"
	  }, [_c('li', {
	    style: ('background:url(' + _vm.dir.img + '/index/clothes/3.jpg)')
	  }, [_vm._m(30)]), _vm._v(" "), _c('li', {
	    style: ('background:url(' + _vm.dir.img + '/index/clothes/4.jpg)')
	  }, [_vm._m(31)])])]), _vm._v(" "), _c('div', {
	    staticClass: "showcase"
	  }, [_c('ul', {
	    staticClass: "left"
	  }, [_c('li', {
	    style: ('background:url(' + _vm.dir.img + '/index/living/0.jpg)')
	  }, [_vm._m(32)]), _vm._v(" "), _c('li', {
	    style: ('background:url(' + _vm.dir.img + '/index/living/1.jpg)')
	  }, [_vm._m(33)])]), _vm._v(" "), _c('ul', {
	    staticClass: "middle"
	  }, [_c('li', {
	    staticStyle: {
	      "background": "#1A9EA5"
	    }
	  }, [_c('div', {
	    staticClass: "middle_left"
	  }, [_c('a', {
	    staticClass: "icon",
	    attrs: {
	      "href": ""
	    }
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.dir.img + '/icons/7.png'
	    }
	  })]), _vm._v(" "), _vm._m(34)]), _vm._v(" "), _vm._m(35)]), _vm._v(" "), _c('li', [_c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.dir.img + '/index/living/2.jpg'
	    }
	  })])])]), _vm._v(" "), _c('ul', {
	    staticClass: "right"
	  }, [_c('li', {
	    style: ('background:url(' + _vm.dir.img + '/index/living/3.jpg)')
	  }, [_vm._m(36)]), _vm._v(" "), _c('li', {
	    style: ('background:url(' + _vm.dir.img + '/index/living/4.jpg)')
	  }, [_vm._m(37)])])])])])], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "lower"
	  }, [_c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("模型公仔")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("仿真收藏")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("变形金刚")]), _c('br'), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("毛绒玩具")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("角色扮演")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("益智拼插")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "lower"
	  }, [_c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("手机配件")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("充电装备")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("时尚U盘")]), _c('br'), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("电脑周边")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("车载用品")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("趣味拍照")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "lower"
	  }, [_c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("男装")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("女装")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("童装")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("鞋靴")]), _c('br'), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("时尚包品")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("服饰配件")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "lower"
	  }, [_c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("创意文具")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("抱枕靠垫")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("水杯水壶")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', [_c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("服饰")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', [_c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("钱包")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', [_c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("耳机")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', [_c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("运动鞋")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', [_c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("色盲眼镜")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('li', [_c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("手表")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "lower"
	  }, [_c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("模型公仔")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("仿真收藏")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("更多>")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "lower"
	  }, [_c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("手机配件")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("充电装备")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("更多>")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "lower"
	  }, [_c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("男装")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("女装")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("更多>")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "lower"
	  }, [_c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("创意文具")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("抱枕靠垫")]), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("更多>")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('a', {
	    attrs: {
	      "href": "item.html?id=1602091458"
	    }
	  }, [_c('div', {
	    staticClass: "words"
	  }, [_c('p', {
	    staticClass: "name"
	  }, [_vm._v("星球大战BB-8智能球形机器人")]), _vm._v(" "), _c('p', {
	    staticClass: "desc"
	  }, [_vm._v("翻滚吧！球形BB-8！")]), _vm._v(" "), _c('p', {
	    staticClass: "price"
	  }, [_vm._v("￥1198")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_c('div', {
	    staticClass: "words"
	  }, [_c('p', {
	    staticClass: "name"
	  }, [_vm._v("复仇者联盟2迷你公仔套装")]), _vm._v(" "), _c('p', {
	    staticClass: "desc"
	  }, [_vm._v("Q萌复联英雄 霸气拯救世界")]), _vm._v(" "), _c('p', {
	    staticClass: "price"
	  }, [_vm._v("￥150")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "title"
	  }, [_c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("玩具模型")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "middle_right"
	  }, [_c('div', {
	    staticClass: "list"
	  }, [_c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("模型公仔")]), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("仿真收藏")]), _c('br'), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("变形金刚")]), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("毛绒玩具")]), _c('br'), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("角色扮演")]), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("益智拼插")])]), _vm._v(" "), _c('a', {
	    staticClass: "more",
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("查看更多")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('a', {
	    attrs: {
	      "href": "items/item.html?id=1602091557"
	    }
	  }, [_c('div', {
	    staticClass: "words"
	  }, [_c('p', {
	    staticClass: "name"
	  }, [_vm._v("HEROCROSS星球大战白兵")]), _vm._v(" "), _c('p', {
	    staticClass: "desc"
	  }, [_vm._v("Q版可动白兵")]), _vm._v(" "), _c('p', {
	    staticClass: "price"
	  }, [_vm._v("￥398")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_c('div', {
	    staticClass: "words"
	  }, [_c('p', {
	    staticClass: "name"
	  }, [_vm._v("复仇者联盟2 Q版收藏公仔")]), _vm._v(" "), _c('p', {
	    staticClass: "desc"
	  }, [_vm._v("复联男神 横空出击")]), _vm._v(" "), _c('p', {
	    staticClass: "price"
	  }, [_vm._v("￥99")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_c('div', {
	    staticClass: "words"
	  }, [_c('p', {
	    staticClass: "name"
	  }, [_vm._v("星战经典充电宝套装")]), _vm._v(" "), _c('p', {
	    staticClass: "desc"
	  }, [_vm._v("黑白双枭 能量伴侣")]), _vm._v(" "), _c('p', {
	    staticClass: "price"
	  }, [_vm._v("￥149")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_c('div', {
	    staticClass: "words"
	  }, [_c('p', {
	    staticClass: "name"
	  }, [_vm._v("宜博M639钢铁侠游戏鼠标")]), _vm._v(" "), _c('p', {
	    staticClass: "desc"
	  }, [_vm._v("百炼成“钢” 内“芯”强大")]), _vm._v(" "), _c('p', {
	    staticClass: "price"
	  }, [_vm._v("￥198")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "title"
	  }, [_c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("数码配件")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "middle_right"
	  }, [_c('div', {
	    staticClass: "list"
	  }, [_c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("手机配件")]), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("充电装备")]), _c('br'), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("时尚U盘")]), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("电脑周边")]), _c('br'), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("车载用品")]), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("趣味拍照")])]), _vm._v(" "), _c('a', {
	    staticClass: "more",
	    staticStyle: {
	      "color": "#2378B9"
	    },
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("查看更多")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_c('div', {
	    staticClass: "words"
	  }, [_c('p', {
	    staticClass: "name"
	  }, [_vm._v("阿宝爱包子i6手机壳")]), _vm._v(" "), _c('p', {
	    staticClass: "desc"
	  }, [_vm._v("吃货阿宝 再秀包子神功")]), _vm._v(" "), _c('p', {
	    staticClass: "price"
	  }, [_vm._v("￥45")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('a', {
	    attrs: {
	      "href": "items/item.html?id=1602091550"
	    }
	  }, [_c('div', {
	    staticClass: "words"
	  }, [_c('p', {
	    staticClass: "name"
	  }, [_vm._v("星球大战入耳式耳机")]), _vm._v(" "), _c('p', {
	    staticClass: "desc"
	  }, [_vm._v("出色音质 唤醒你的耳朵")]), _vm._v(" "), _c('p', {
	    staticClass: "price"
	  }, [_vm._v("￥60")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_c('div', {
	    staticClass: "words"
	  }, [_c('p', {
	    staticClass: "name"
	  }, [_vm._v("功夫熊猫3双宝环保袋")]), _vm._v(" "), _c('p', {
	    staticClass: "desc"
	  }, [_vm._v("呆萌阿宝伴你环保出行")]), _vm._v(" "), _c('p', {
	    staticClass: "price"
	  }, [_vm._v("￥49")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_c('div', {
	    staticClass: "words"
	  }, [_c('p', {
	    staticClass: "name"
	  }, [_vm._v("蚁人炫酷休闲帽")]), _vm._v(" "), _c('p', {
	    staticClass: "desc"
	  }, [_vm._v("蚁人酷帽 霸气来袭")]), _vm._v(" "), _c('p', {
	    staticClass: "price"
	  }, [_vm._v("￥39")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "title"
	  }, [_c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("服装服饰")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "middle_right"
	  }, [_c('div', {
	    staticClass: "list"
	  }, [_c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("男装")]), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("女装")]), _c('br'), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("童装")]), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("鞋靴")]), _c('br'), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("时尚包品")]), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("服饰配件")])]), _vm._v(" "), _c('a', {
	    staticClass: "more",
	    staticStyle: {
	      "color": "#49B67C"
	    },
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("查看更多")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_c('div', {
	    staticClass: "words"
	  }, [_c('p', {
	    staticClass: "name"
	  }, [_vm._v("蜘蛛侠低帮智能定位童鞋")]), _vm._v(" "), _c('p', {
	    staticClass: "desc"
	  }, [_vm._v("智能定位 宝贝行踪随时掌控")]), _vm._v(" "), _c('p', {
	    staticClass: "price"
	  }, [_vm._v("￥359")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_c('div', {
	    staticClass: "words"
	  }, [_c('p', {
	    staticClass: "name"
	  }, [_vm._v("星球经典复古双肩背包")]), _vm._v(" "), _c('p', {
	    staticClass: "desc"
	  }, [_vm._v("酷炫星战 原力觉醒")]), _vm._v(" "), _c('p', {
	    staticClass: "price"
	  }, [_vm._v("￥249")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_c('div', {
	    staticClass: "words"
	  }, [_c('p', {
	    staticClass: "name"
	  }, [_vm._v("功夫熊猫3旅行套装")]), _vm._v(" "), _c('p', {
	    staticClass: "desc"
	  }, [_vm._v("呆萌阿宝 贴心出行")]), _vm._v(" "), _c('p', {
	    staticClass: "price"
	  }, [_vm._v("￥50")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_c('div', {
	    staticClass: "words"
	  }, [_c('p', {
	    staticClass: "name"
	  }, [_vm._v("星战数码印花限量版方巾")]), _vm._v(" "), _c('p', {
	    staticClass: "desc"
	  }, [_vm._v("给你不一样的亲肤体验")]), _vm._v(" "), _c('p', {
	    staticClass: "price"
	  }, [_vm._v("￥49")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "title"
	  }, [_c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("居家日用")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "middle_right"
	  }, [_c('div', {
	    staticClass: "list"
	  }, [_c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("创意文具")]), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("抱枕靠垫")]), _c('br'), _vm._v(" "), _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("水杯/水壶")])]), _vm._v(" "), _c('a', {
	    staticClass: "more",
	    staticStyle: {
	      "color": "#1A9EA5"
	    },
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("查看更多")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_c('div', {
	    staticClass: "words"
	  }, [_c('p', {
	    staticClass: "name"
	  }, [_vm._v("功夫熊猫3抱枕")]), _vm._v(" "), _c('p', {
	    staticClass: "desc"
	  }, [_vm._v("功夫阿宝 让你放心依靠")]), _vm._v(" "), _c('p', {
	    staticClass: "price"
	  }, [_vm._v("￥80")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('a', {
	    attrs: {
	      "href": ""
	    }
	  }, [_c('div', {
	    staticClass: "words"
	  }, [_c('p', {
	    staticClass: "name"
	  }, [_vm._v("星球大战马克杯套装")]), _vm._v(" "), _c('p', {
	    staticClass: "desc"
	  }, [_vm._v("黑白双雄 原力觉醒")]), _vm._v(" "), _c('p', {
	    staticClass: "price"
	  }, [_vm._v("￥99")])])])
	}]}

/***/ }
/******/ ]);