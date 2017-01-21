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
}({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _config = __webpack_require__(36);

	var _store = __webpack_require__(28);

	__webpack_require__(1);

	new Vue({
		el: '#root',
		components: {
			App: __webpack_require__(103)
		},
		template: '<app></app>'
	});

/***/ },

/***/ 1:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 28:
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

/***/ 29:
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

/***/ 30:
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

/***/ 31:
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

/***/ 32:
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

/***/ 33:
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

/***/ 34:
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

/***/ 35:
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

/***/ 36:
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

/***/ 37:
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

/***/ 38:
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

/***/ 39:
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

/***/ 42:
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

/***/ 43:
1,

/***/ 44:
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

/***/ 45:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"TopbarBlack\" _v-6f4f3b04=\"\">\n\t<a class=\"li\" href=\"./index.html\" _v-6f4f3b04=\"\">Home</a>\n\t<a class=\"li\" href=\"./test.html\" _v-6f4f3b04=\"\">Test</a>\n\t<a class=\"li\" href=\"./admin.html\" _v-6f4f3b04=\"\">Admin</a>\n</div>\n";

/***/ },

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__vue_script__ = __webpack_require__(104);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\_test\\App.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(109);
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
	    var id = "_v-66179186/App.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		components: {
			TopbarBlack: __webpack_require__(42),
			NavbarWeifeng: __webpack_require__(105)
		}
	};

/***/ },

/***/ 105:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(106);
	__vue_script__ = __webpack_require__(107);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\components\\NavbarWeifeng.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(108);
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
	    var id = "_v-4b00ada6/NavbarWeifeng.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 106:
1,

/***/ 107:
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
						name: '首页'
					}, {
						name: '新手'
					}, {
						name: '游戏'
					}, {
						name: '新闻'
					}, {
						name: '锋科技'
					}, {
						name: '锋观点'
					}, {
						name: '评测'
					}, {
						name: '论坛'
					}, {
						name: '威锋源'
					}, {
						name: '威锋游戏'
					}, {
						name: '威锋商城'
					}, {
						name: '兔兔助手'
					}];
				}
			}
		},
		data: function data() {
			return {
				current: 0
			};
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

/***/ 108:
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"NavbarWeifeng\" _v-4b00ada6=\"\">\n\t<div class=\"container__\" _v-4b00ada6=\"\">\n\t\t<ul class=\"tabs\" @mouseleave=\"mouseleave\" _v-4b00ada6=\"\">\n\t\t\t<li v-for=\"(a,i) in items\" @mouseenter=\"mouseenter($event,i)\" _v-4b00ada6=\"\">{{a.name}}</li>\n\t\t</ul>\n\t\t<div class=\"bar-wrapper\" _v-4b00ada6=\"\">\n\t\t\t<div class=\"bar\" :style=\" 'transform:translate3d('+(current*83)+'px,0,0);' \" _v-4b00ada6=\"\"></div>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },

/***/ 109:
/***/ function(module, exports) {

	module.exports = "\n<div id=\"root\">\n\t<topbar-black></topbar-black>\n\t<navbar-weifeng></navbar-weifeng>\n</div>\n";

/***/ }

/******/ })));