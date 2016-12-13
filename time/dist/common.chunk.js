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
/******/ 			var _m = moreModules[moduleId];

/******/ 			// Check if module is deduplicated
/******/ 			switch(typeof _m) {
/******/ 			case "object":
/******/ 				// Module can be created from a template
/******/ 				modules[moduleId] = (function(_m) {
/******/ 					var args = _m.slice(1), templateId = _m[0];
/******/ 					return function (a,b,c) {
/******/ 						modules[templateId].apply(this, [a,b,c].concat(args));
/******/ 					};
/******/ 				}(_m));
/******/ 				break;
/******/ 			case "function":
/******/ 				// Normal module
/******/ 				modules[moduleId] = _m;
/******/ 				break;
/******/ 			default:
/******/ 				// Module is a copy of another module
/******/ 				modules[moduleId] = modules[_m];
/******/ 				break;
/******/ 			}
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
/******/ 		5:0
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

/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({"1":"cart","2":"index","3":"item","4":"search"}[chunkId]||chunkId) + ".chunk.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";
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
/* 0 */,
/* 1 */
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
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.store = undefined;

	var _items = __webpack_require__(33);

	var _items2 = _interopRequireDefault(_items);

	var _item = __webpack_require__(34);

	var _item2 = _interopRequireDefault(_item);

	var _user = __webpack_require__(35);

	var _user2 = _interopRequireDefault(_user);

	var _num = __webpack_require__(36);

	var _actions = __webpack_require__(37);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//Vue.use( Vuex );

	var store = new Vuex.Store({
		modules: {
			user: _user2.default,
			items: _items2.default,
			item: _item2.default,
			num: _num.num
		},
		actions: _actions.actions
	});

	exports.store = store;

/***/ },
/* 33 */
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
/* 34 */
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
/* 35 */
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
/* 36 */
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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.actions = undefined;

	var _config = __webpack_require__(1);

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

	exports.actions = actions;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.DELETE_ITEMS = exports.ADD_ITEM = exports.SAVE_ITEM = exports.GET_ITEMS = undefined;

	var _config = __webpack_require__(1);

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

	var _config = __webpack_require__(1);

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

	var _config = __webpack_require__(1);

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
/* 41 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 42 */,
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(44);
	__vue_script__ = __webpack_require__(45);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\components\\MyHeader.vue: named exports in *.vue files are ignored.");
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
	    var id = "_v-341844b6/MyHeader.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 44 */
41,
/* 45 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
		props: ['dir']
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"MY-HEADER\" _v-341844b6=\"\">\n\t<!-- searchbar -->\n\t<div class=\"searchbar wrapper\" _v-341844b6=\"\">\n\t\t<div class=\"container\" _v-341844b6=\"\">\n\t\t\t<div class=\"search_box\" _v-341844b6=\"\">\n\t\t\t\t<form _v-341844b6=\"\">\n\t\t\t\t\t<input type=\"text\" placeholder=\"请输入您想搜索的商品名称\" _v-341844b6=\"\">\n\t\t\t\t\t<a :href=\" dir.search \" class=\"a-search search_btn\" _v-341844b6=\"\"><i class=\"fa fa-search\" _v-341844b6=\"\"></i></a>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"LINE wrapper\" _v-341844b6=\"\"></div>\n\t<!-- topbar -->\n\t<div class=\"topbar wrapper\" _v-341844b6=\"\">\n\t\t<div class=\"container\" _v-341844b6=\"\">\n\t\t\t<p _v-341844b6=\"\"><a class=\"a_home\" :href=\"dir.index\" _v-341844b6=\"\">欢迎来到飞越太平洋海淘网站</a></p>\n\t\t\t<ul _v-341844b6=\"\">\n\t\t\t\t<li _v-341844b6=\"\"><a href=\"register.html\" class=\"a-signin login\" _v-341844b6=\"\">登录</a></li><span class=\"separator\" _v-341844b6=\"\">|</span>\n\t\t\t\t<li _v-341844b6=\"\"><a href=\"register.html\" class=\"a-signup register\" _v-341844b6=\"\">注册</a></li><span class=\"separator\" _v-341844b6=\"\">|</span>\n\t\t\t\t<li _v-341844b6=\"\"><i class=\"fa fa-file\" _v-341844b6=\"\"></i> <a class=\"a_my_orders\" href=\"./orders.html\" _v-341844b6=\"\">我的订单</a></li><span class=\"separator\" _v-341844b6=\"\">|</span>\n\t\t\t\t<li class=\"my_cart\" _v-341844b6=\"\">\n\t\t\t\t\t<i class=\"fa fa-shopping-cart\" _v-341844b6=\"\"></i> <a class=\"a-cart\" :href=\" dir.cart \" _v-341844b6=\"\">我的购物车(<span class=\"quantityIn\" _v-341844b6=\"\">0</span>)</a>\n\t\t\t\t\t<div class=\"cart_panel\" _v-341844b6=\"\">\n\t\t\t\t\t\t我的购物车\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<div class=\"clear\" _v-341844b6=\"\"></div>\n\t\t</div>\n\t\t<!--\n\t\t<div class=\"banner container\">\n\t\t\t<ul>\n\t\t\t\t<a href=\"\" style=\"background:url(images/165404.24885127.jpg)\">\n\t\t\t\t\t<div class=\"label\">新品</div>\n\t\t\t\t\t<div>星球大战入耳式耳机</div>\n\t\t\t\t</a>\n\t\t\t</ul>\n\t\t</div>\n\t\t-->\n\t</div>\n</div>\n";

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(48);
	__vue_script__ = __webpack_require__(49);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\components\\Focus.vue: named exports in *.vue files are ignored.");
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
	    var id = "_v-6988d3bc/Focus.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 48 */
41,
/* 49 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
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
/* 50 */
/***/ function(module, exports) {

	module.exports = "\n<ul class=\"Focus wrapper\" _v-6988d3bc=\"\">\n\t<a :href=\" dir.item \" class=\"item\" v-for=\"(a,i) in items\" :class=\" i===current?'active':'' \" _v-6988d3bc=\"\">\n\t\t<li :style=\" 'background:url('+dir.img+'/focus/'+(i)+'.jpg) no-repeat center;' \" _v-6988d3bc=\"\">\n\t\t</li>\n\t</a>\n\t<ul class=\"pagination\" _v-6988d3bc=\"\">\n\t\t<div class=\"dot\" v-for=\"(b,index) in items\" :class=\" index===current?'active':'' \" @click=\"jump(index)\" _v-6988d3bc=\"\"></div>\n\t</ul>\n\t<div class=\"focus-last\" @click=\"prev\" _v-6988d3bc=\"\"><i class=\"fa fa-angle-left\" _v-6988d3bc=\"\"></i></div>\n\t<div class=\"focus-next\" @click=\"next\" _v-6988d3bc=\"\"><i class=\"fa fa-angle-right\" _v-6988d3bc=\"\"></i></div>\t\t\n</ul>\n";

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(52);
	__vue_script__ = __webpack_require__(53);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\components\\BackToTop.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(54);
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
/* 52 */
41,
/* 53 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var body = document.querySelector('body');
	exports.default = {
		data: function data() {
			return {
				scrolling: false
			};
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
/* 54 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"BACK-TO-TOP\" @click=\"back\" _v-8f3a88d2=\"\"><i class=\"fa fa-angle-up\" _v-8f3a88d2=\"\"></i></div>\n";

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(56);
	__vue_script__ = __webpack_require__(57);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\components\\MyFooter.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(58);
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
/* 56 */
41,
/* 57 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {};

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"MY-FOOTER wrapper\" _v-767d0c9a=\"\">\n\t<!-- footer -->\n\t<div class=\"LINE wrapper\" _v-767d0c9a=\"\"></div>\n\t<div class=\"footer wrapper\" style=\"background:#F2F2F2;\" _v-767d0c9a=\"\">\n\t\t<ul class=\"container\" _v-767d0c9a=\"\">\n\t\t\t<li _v-767d0c9a=\"\">\t\n\t\t\t\t<h4 _v-767d0c9a=\"\">购物指南</h4>\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">新用户注册</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">购物流程</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">常见问题</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">发票制度</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">联系我们</a>\n\t\t\t</li>\n\t\t\t<li _v-767d0c9a=\"\">\t\n\t\t\t\t<h4 _v-767d0c9a=\"\">支付方式</h4>\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">在线付款</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">余额付款</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">优惠券使用说明</a>\n\t\t\t</li>\n\t\t\t<li _v-767d0c9a=\"\">\t\n\t\t\t\t<h4 _v-767d0c9a=\"\">配送方式</h4>\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">邮费说明</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">配送服务范围</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">配送速度查询</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">验货与签收</a>\n\t\t\t</li>\n\t\t\t<li _v-767d0c9a=\"\">\t\n\t\t\t\t<h4 _v-767d0c9a=\"\">售后服务</h4>\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">售后政策</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">退货政策</a><br _v-767d0c9a=\"\">\n\t\t\t\t<a href=\"\" _v-767d0c9a=\"\">退货流程</a>\n\t\t\t</li>\n\t\t\t<li _v-767d0c9a=\"\">\t\n\t\t\t\t<h4 _v-767d0c9a=\"\">客服电话</h4>\n\t\t\t\t<p class=\"serviceTel\" _v-767d0c9a=\"\">4006-118-118</p>\n\t\t\t\t<p _v-767d0c9a=\"\">周一至周日9:00~22:00</p>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n\t<div class=\"copyright wrapper\" _v-767d0c9a=\"\">\n\t\t<div class=\"container\" _v-767d0c9a=\"\">\n\t\t\t<p _v-767d0c9a=\"\">Copyright © 2015.FYTPY All rights reserved.</p>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ }
/******/ ])));