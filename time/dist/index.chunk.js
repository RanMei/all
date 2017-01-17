webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _store = __webpack_require__(27);

	__webpack_require__(38);

	new Vue({
		el: '#root',
		store: _store.store,
		components: {
			App: __webpack_require__(65)
		},
		template: '<app></app>'
	});

/***/ },

/***/ 41:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(42);
	__vue_script__ = __webpack_require__(43);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\components\\TopbarBlack.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(44);
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
	    var id = "_v-9450a536/TopbarBlack.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 42:
38,

/***/ 43:
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

/***/ 44:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"TopbarBlack\" _v-9450a536=\"\">\n\t<a class=\"li\" href=\"./index.html\" _v-9450a536=\"\">Home</a>\n\t<a class=\"li\" href=\"./test.html\" _v-9450a536=\"\">Test</a>\n\t<a class=\"li\" href=\"./admin.html\" _v-9450a536=\"\">Admin</a>\n</div>\n";

/***/ },

/***/ 65:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__vue_script__ = __webpack_require__(66);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\_index\\App.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(75);
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
	    var id = "_v-09d4b442/App.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 66:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		components: {
			TopbarBlack: __webpack_require__(41),
			MyHeader: __webpack_require__(53),
			MyFooter: __webpack_require__(57),
			BackToTop: __webpack_require__(49),
			Home: __webpack_require__(67)
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

/***/ 67:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(68);
	__vue_script__ = __webpack_require__(69);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\components\\Home.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(74);
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
	    var id = "_v-14c6ee2b/Home.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 68:
38,

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			dir: {}
		},
		components: {
			Focus: __webpack_require__(70)
		},
		computed: {
			col2: function col2() {
				return [this.dir.item + '?id=1602091546'];
			}
		}
	};

/***/ },

/***/ 70:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(71);
	__vue_script__ = __webpack_require__(72);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\components\\Focus.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(73);
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

/***/ 71:
38,

/***/ 72:
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

/***/ 73:
/***/ function(module, exports) {

	module.exports = "\n<ul class=\"Focus wrapper\" _v-6988d3bc=\"\">\n\t<a :href=\" dir.item \" class=\"item\" v-for=\"(a,i) in items\" :class=\" i===current?'active':'' \" _v-6988d3bc=\"\">\n\t\t<li :style=\" 'background:url('+dir.img+'/focus/'+(i)+'.jpg) no-repeat center;' \" _v-6988d3bc=\"\">\n\t\t</li>\n\t</a>\n\t<ul class=\"pagination\" _v-6988d3bc=\"\">\n\t\t<div class=\"dot\" v-for=\"(b,index) in items\" :class=\" index===current?'active':'' \" @click=\"jump(index)\" _v-6988d3bc=\"\"></div>\n\t</ul>\n\t<div class=\"focus-last\" @click=\"prev\" _v-6988d3bc=\"\"><i class=\"fa fa-angle-left\" _v-6988d3bc=\"\"></i></div>\n\t<div class=\"focus-next\" @click=\"next\" _v-6988d3bc=\"\"><i class=\"fa fa-angle-right\" _v-6988d3bc=\"\"></i></div>\t\t\n</ul>\n";

/***/ },

/***/ 74:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Home\" _v-14c6ee2b=\"\">\n\t<!-- navbar -->\n\t<div class=\"navbar wrapper\" _v-14c6ee2b=\"\">\n\t\t<div class=\"container\" _v-14c6ee2b=\"\">\n\t\t\t<ul class=\"menu\" _v-14c6ee2b=\"\">\n\t\t\t\t<div class=\"menu-head\" _v-14c6ee2b=\"\">全部商品分类</div>\n\t\t\t\t<li _v-14c6ee2b=\"\">\n\t\t\t\t\t<div class=\"upper\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t<a href=\"\" class=\"a_a\" _v-14c6ee2b=\"\"><img :src=\" dir.img+'/icons/0.png' \" _v-14c6ee2b=\"\"></a>\n\t\t\t\t\t\t<a href=\"\" class=\"a_b\" _v-14c6ee2b=\"\">玩具模型</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"lower\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">模型公仔</a>\n\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">仿真收藏</a>\n\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">变形金刚</a><br _v-14c6ee2b=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">毛绒玩具</a>\n\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">角色扮演</a>\n\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">益智拼插</a>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li _v-14c6ee2b=\"\">\n\t\t\t\t\t<div class=\"upper\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t<a href=\"\" class=\"a_a\" _v-14c6ee2b=\"\"><img :src=\" dir.img+'/icons/1.png' \" _v-14c6ee2b=\"\"></a>\n\t\t\t\t\t\t<a href=\"\" class=\"a_b\" _v-14c6ee2b=\"\">数码配件</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"lower\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">手机配件</a>\n\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">充电装备</a>\n\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">时尚U盘</a><br _v-14c6ee2b=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">电脑周边</a>\n\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">车载用品</a>\n\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">趣味拍照</a>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li _v-14c6ee2b=\"\">\n\t\t\t\t\t<div class=\"upper\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t<a href=\"\" class=\"a_a\" _v-14c6ee2b=\"\"><img :src=\" dir.img+'/icons/2.png' \" _v-14c6ee2b=\"\"></a>\n\t\t\t\t\t\t<a href=\"\" class=\"a_b\" _v-14c6ee2b=\"\">服装服饰</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"lower\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">男装</a>\n\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">女装</a>\n\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">童装</a>\n\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">鞋靴</a><br _v-14c6ee2b=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">时尚包品</a>\n\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">服饰配件</a>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li _v-14c6ee2b=\"\">\n\t\t\t\t\t<div class=\"upper\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t<a href=\"\" class=\"a_a\" _v-14c6ee2b=\"\"><img :src=\" dir.img+'/icons/3.png' \" _v-14c6ee2b=\"\"></a>\n\t\t\t\t\t\t<a href=\"\" class=\"a_b\" _v-14c6ee2b=\"\">居家日用</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"lower\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">创意文具</a>\n\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">抱枕靠垫</a>\n\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">水杯水壶</a>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<ul class=\"tabs\" _v-14c6ee2b=\"\">\n\t\t\t\t<li _v-14c6ee2b=\"\"><a :href=\" dir.admin \" _v-14c6ee2b=\"\">首页</a></li>\n\t\t\t\t<li _v-14c6ee2b=\"\"><a href=\"\" _v-14c6ee2b=\"\">服饰</a></li>\n\t\t\t\t<li _v-14c6ee2b=\"\"><a href=\"\" _v-14c6ee2b=\"\">钱包</a></li>\n\t\t\t\t<li _v-14c6ee2b=\"\"><a href=\"\" _v-14c6ee2b=\"\">耳机</a></li>\n\t\t\t\t<li _v-14c6ee2b=\"\"><a href=\"\" _v-14c6ee2b=\"\">运动鞋</a></li>\n\t\t\t\t<li _v-14c6ee2b=\"\"><a href=\"\" _v-14c6ee2b=\"\">色盲眼镜</a></li>\n\t\t\t\t<li _v-14c6ee2b=\"\"><a href=\"\" _v-14c6ee2b=\"\">手表</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t\n\t<focus :dir=\"dir\" _v-14c6ee2b=\"\"></focus>\n\n\t<!-- main -->\n\t<div class=\"main wrapper\" _v-14c6ee2b=\"\">\n\t\t<div class=\"container\" _v-14c6ee2b=\"\">\n\t\t\t<div class=\"box2\" _v-14c6ee2b=\"\">\n\t\t\t\t<ul class=\"col1\" _v-14c6ee2b=\"\">\n\t\t\t\t\t<li _v-14c6ee2b=\"\">\n\t\t\t\t\t\t<div class=\"upper\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t<div class=\"icon\" _v-14c6ee2b=\"\"><a href=\"\" _v-14c6ee2b=\"\"><img :src=\" dir.img+'/icons/4.png' \" _v-14c6ee2b=\"\"></a></div>\n\t\t\t\t\t\t\t<a href=\"\" class=\"title\" _v-14c6ee2b=\"\">玩具模型</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"lower\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">模型公仔</a> <a href=\"\" _v-14c6ee2b=\"\">仿真收藏</a> <a href=\"\" _v-14c6ee2b=\"\">更多&gt;</a></div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li _v-14c6ee2b=\"\">\n\t\t\t\t\t\t<div class=\"upper\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t<div class=\"icon\" _v-14c6ee2b=\"\"><a href=\"\" _v-14c6ee2b=\"\"><img :src=\" dir.img+'/icons/5.png' \" _v-14c6ee2b=\"\"></a></div>\n\t\t\t\t\t\t\t<a href=\"\" class=\"title\" _v-14c6ee2b=\"\">数码配件</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"lower\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">手机配件</a> <a href=\"\" _v-14c6ee2b=\"\">充电装备</a> <a href=\"\" _v-14c6ee2b=\"\">更多&gt;</a></div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li _v-14c6ee2b=\"\">\n\t\t\t\t\t\t<div class=\"upper\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t<div class=\"icon\" _v-14c6ee2b=\"\"><a href=\"\" _v-14c6ee2b=\"\"><img :src=\" dir.img+'/icons/6.png' \" _v-14c6ee2b=\"\"></a></div>\n\t\t\t\t\t\t\t<a href=\"\" class=\"title\" _v-14c6ee2b=\"\">服装服饰</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"lower\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">男装</a> <a href=\"\" _v-14c6ee2b=\"\">女装</a> <a href=\"\" _v-14c6ee2b=\"\">更多&gt;</a></div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li _v-14c6ee2b=\"\">\n\t\t\t\t\t\t<div class=\"upper\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t<div class=\"icon\" _v-14c6ee2b=\"\"><a href=\"\" _v-14c6ee2b=\"\"><img :src=\" dir.img+'/icons/7.png' \" _v-14c6ee2b=\"\"></a></div>\n\t\t\t\t\t\t\t<a href=\"\" class=\"title\" _v-14c6ee2b=\"\">居家日用</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"lower\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">创意文具</a> <a href=\"\" _v-14c6ee2b=\"\">抱枕靠垫</a> <a href=\"\" _v-14c6ee2b=\"\">更多&gt;</a></div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<div class=\"col2\" _v-14c6ee2b=\"\">\n\t\t\t\t\t<dl _v-14c6ee2b=\"\">\n\t\t\t\t\t\t<dt _v-14c6ee2b=\"\"><a :href=\" col2[0] \" _v-14c6ee2b=\"\"><img :src=\" dir.img+'/index/showcase/0.jpg' \" _v-14c6ee2b=\"\"></a></dt>\n\t\t\t\t\t\t<dt _v-14c6ee2b=\"\"><a :href=\" col2[0] \" _v-14c6ee2b=\"\"><img :src=\" dir.img+'/index/showcase/1.jpg' \" _v-14c6ee2b=\"\"></a></dt>\n\t\t\t\t\t\t<dd _v-14c6ee2b=\"\"><a :href=\" col2[0] \" _v-14c6ee2b=\"\"><img :src=\" dir.img+'/index/showcase/2.jpg' \" _v-14c6ee2b=\"\"></a></dd>\n\t\t\t\t\t\t<dd _v-14c6ee2b=\"\"><a :href=\" col2[0] \" _v-14c6ee2b=\"\"><img :src=\" dir.img+'/index/showcase/3.jpg' \" _v-14c6ee2b=\"\"></a></dd>\n\t\t\t\t\t\t<dd _v-14c6ee2b=\"\"><a :href=\" col2[0] \" _v-14c6ee2b=\"\"><img :src=\" dir.img+'/index/showcase/4.jpg' \" _v-14c6ee2b=\"\"></a></dd>\n\t\t\t\t\t\t<dd _v-14c6ee2b=\"\"><a :href=\" col2[0] \" _v-14c6ee2b=\"\"><img :src=\" dir.img+'/index/showcase/5.jpg' \" _v-14c6ee2b=\"\"></a></dd>\t\t\n\t\t\t\t\t</dl>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<!-- toys -->\n\t\t\t<div class=\"showcase\" _v-14c6ee2b=\"\">\n\t\t\t\t<ul class=\"left\" _v-14c6ee2b=\"\">\n\t\t\t\t\t<li :style=\" 'background:url('+dir.img+'/index/toys/0.jpg)' \" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t<a href=\"item.html?id=1602091458\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t<div class=\"words\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t\t<p class=\"name\" _v-14c6ee2b=\"\">星球大战BB-8智能球形机器人</p>\n\t\t\t\t\t\t\t\t<p class=\"desc\" _v-14c6ee2b=\"\">翻滚吧！球形BB-8！</p>\n\t\t\t\t\t\t\t\t<p class=\"price\" _v-14c6ee2b=\"\">￥1198</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li :style=\" 'background:url('+dir.img+'/index/toys/1.jpg)' \" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t<div class=\"words\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t\t<p class=\"name\" _v-14c6ee2b=\"\">复仇者联盟2迷你公仔套装</p>\n\t\t\t\t\t\t\t\t<p class=\"desc\" _v-14c6ee2b=\"\">Q萌复联英雄 霸气拯救世界</p>\n\t\t\t\t\t\t\t\t<p class=\"price\" _v-14c6ee2b=\"\">￥150</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<ul class=\"middle\" _v-14c6ee2b=\"\">\n\t\t\t\t\t<li _v-14c6ee2b=\"\">\n\t\t\t\t\t\t<div class=\"middle_left\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t<a href=\"\" class=\"icon\" _v-14c6ee2b=\"\"><img :src=\" dir.img+'/icons/4.png' \" _v-14c6ee2b=\"\"></a>\n\t\t\t\t\t\t\t<div class=\"title\" _v-14c6ee2b=\"\"><a href=\"\" _v-14c6ee2b=\"\">玩具模型</a></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"middle_right\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t<div class=\"list\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">模型公仔</a><a href=\"\" _v-14c6ee2b=\"\">仿真收藏</a><br _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">变形金刚</a><a href=\"\" _v-14c6ee2b=\"\">毛绒玩具</a><br _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">角色扮演</a><a href=\"\" _v-14c6ee2b=\"\">益智拼插</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<a href=\"\" class=\"more\" _v-14c6ee2b=\"\">查看更多</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li _v-14c6ee2b=\"\"><a href=\"\" _v-14c6ee2b=\"\"><img :src=\" dir.img+'/index/toys/2.jpg' \" _v-14c6ee2b=\"\"></a></li>\n\t\t\t\t</ul>\n\t\t\t\t<ul class=\"right\" _v-14c6ee2b=\"\">\n\t\t\t\t\t<li :style=\" 'background:url('+dir.img+'/index/toys/3.jpg)' \" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t<a href=\"items/item.html?id=1602091557\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t<div class=\"words\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t\t<p class=\"name\" _v-14c6ee2b=\"\">HEROCROSS星球大战白兵</p>\n\t\t\t\t\t\t\t\t<p class=\"desc\" _v-14c6ee2b=\"\">Q版可动白兵</p>\n\t\t\t\t\t\t\t\t<p class=\"price\" _v-14c6ee2b=\"\">￥398</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li :style=\" 'background:url('+dir.img+'/index/toys/4.jpg)' \" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t<div class=\"words\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t\t<p class=\"name\" _v-14c6ee2b=\"\">复仇者联盟2 Q版收藏公仔</p>\n\t\t\t\t\t\t\t\t<p class=\"desc\" _v-14c6ee2b=\"\">复联男神 横空出击</p>\n\t\t\t\t\t\t\t\t<p class=\"price\" _v-14c6ee2b=\"\">￥99</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t\n\t\t\t<!-- digital -->\n\t\t\t<div class=\"showcase\" _v-14c6ee2b=\"\">\n\t\t\t\t<ul class=\"left\" _v-14c6ee2b=\"\">\n\t\t\t\t\t<li :style=\" 'background:url('+dir.img+'/index/digital/0.jpg)' \" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t<div class=\"words\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t\t<p class=\"name\" _v-14c6ee2b=\"\">星战经典充电宝套装</p>\n\t\t\t\t\t\t\t\t<p class=\"desc\" _v-14c6ee2b=\"\">黑白双枭 能量伴侣</p>\n\t\t\t\t\t\t\t\t<p class=\"price\" _v-14c6ee2b=\"\">￥149</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li :style=\" 'background:url('+dir.img+'/index/digital/1.jpg)' \" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t<div class=\"words\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t\t<p class=\"name\" _v-14c6ee2b=\"\">宜博M639钢铁侠游戏鼠标</p>\n\t\t\t\t\t\t\t\t<p class=\"desc\" _v-14c6ee2b=\"\">百炼成“钢” 内“芯”强大</p>\n\t\t\t\t\t\t\t\t<p class=\"price\" _v-14c6ee2b=\"\">￥198</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<ul class=\"middle\" _v-14c6ee2b=\"\">\n\t\t\t\t\t<li style=\"background:#2378B9\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t<div class=\"middle_left\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t<a href=\"\" class=\"icon\" _v-14c6ee2b=\"\"><img :src=\" dir.img+'/icons/5.png' \" _v-14c6ee2b=\"\"></a>\n\t\t\t\t\t\t\t<div class=\"title\" _v-14c6ee2b=\"\"><a href=\"\" _v-14c6ee2b=\"\">数码配件</a></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"middle_right\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t<div class=\"list\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">手机配件</a><a href=\"\" _v-14c6ee2b=\"\">充电装备</a><br _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">时尚U盘</a><a href=\"\" _v-14c6ee2b=\"\">电脑周边</a><br _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">车载用品</a><a href=\"\" _v-14c6ee2b=\"\">趣味拍照</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<a href=\"\" class=\"more\" style=\"color:#2378B9\" _v-14c6ee2b=\"\">查看更多</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li _v-14c6ee2b=\"\"><a href=\"\" _v-14c6ee2b=\"\"><img :src=\" dir.img+'/index/digital/2.jpg' \" _v-14c6ee2b=\"\"></a></li>\n\t\t\t\t</ul>\n\t\t\t\t<ul class=\"right\" _v-14c6ee2b=\"\">\n\t\t\t\t\t<li :style=\" 'background:url('+dir.img+'/index/digital/3.jpg)' \" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t<div class=\"words\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t\t<p class=\"name\" _v-14c6ee2b=\"\">阿宝爱包子i6手机壳</p>\n\t\t\t\t\t\t\t\t<p class=\"desc\" _v-14c6ee2b=\"\">吃货阿宝 再秀包子神功</p>\n\t\t\t\t\t\t\t\t<p class=\"price\" _v-14c6ee2b=\"\">￥45</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li :style=\" 'background:url('+dir.img+'/index/digital/4.jpg)' \" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t<a href=\"items/item.html?id=1602091550\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t<div class=\"words\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t\t<p class=\"name\" _v-14c6ee2b=\"\">星球大战入耳式耳机</p>\n\t\t\t\t\t\t\t\t<p class=\"desc\" _v-14c6ee2b=\"\">出色音质 唤醒你的耳朵</p>\n\t\t\t\t\t\t\t\t<p class=\"price\" _v-14c6ee2b=\"\">￥60</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t\n\t\t\t<!-- clothes -->\n\t\t\t<div class=\"showcase\" _v-14c6ee2b=\"\">\n\t\t\t\t<ul class=\"left\" _v-14c6ee2b=\"\">\n\t\t\t\t\t<li :style=\" 'background:url('+dir.img+'/index/clothes/0.jpg)' \" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t<div class=\"words\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t\t<p class=\"name\" _v-14c6ee2b=\"\">功夫熊猫3双宝环保袋</p>\n\t\t\t\t\t\t\t\t<p class=\"desc\" _v-14c6ee2b=\"\">呆萌阿宝伴你环保出行</p>\n\t\t\t\t\t\t\t\t<p class=\"price\" _v-14c6ee2b=\"\">￥49</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li :style=\" 'background:url('+dir.img+'/index/clothes/1.jpg)' \" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t<div class=\"words\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t\t<p class=\"name\" _v-14c6ee2b=\"\">蚁人炫酷休闲帽</p>\n\t\t\t\t\t\t\t\t<p class=\"desc\" _v-14c6ee2b=\"\">蚁人酷帽 霸气来袭</p>\n\t\t\t\t\t\t\t\t<p class=\"price\" _v-14c6ee2b=\"\">￥39</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<ul class=\"middle\" _v-14c6ee2b=\"\">\n\t\t\t\t\t<li style=\"background:#49B67C\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t<div class=\"middle_left\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t<a href=\"\" class=\"icon\" _v-14c6ee2b=\"\"><img :src=\" dir.img+'/icons/6.png' \" _v-14c6ee2b=\"\"></a>\n\t\t\t\t\t\t\t<div class=\"title\" _v-14c6ee2b=\"\"><a href=\"\" _v-14c6ee2b=\"\">服装服饰</a></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"middle_right\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t<div class=\"list\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">男装</a><a href=\"\" _v-14c6ee2b=\"\">女装</a><br _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">童装</a><a href=\"\" _v-14c6ee2b=\"\">鞋靴</a><br _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">时尚包品</a><a href=\"\" _v-14c6ee2b=\"\">服饰配件</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<a href=\"\" class=\"more\" style=\"color:#49B67C\" _v-14c6ee2b=\"\">查看更多</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li _v-14c6ee2b=\"\"><a href=\"\" _v-14c6ee2b=\"\"><img :src=\" dir.img+'/index/clothes/2.jpg' \" _v-14c6ee2b=\"\"></a></li>\n\t\t\t\t</ul>\n\t\t\t\t<ul class=\"right\" _v-14c6ee2b=\"\">\n\t\t\t\t\t<li :style=\" 'background:url('+dir.img+'/index/clothes/3.jpg)' \" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t<div class=\"words\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t\t<p class=\"name\" _v-14c6ee2b=\"\">蜘蛛侠低帮智能定位童鞋</p>\n\t\t\t\t\t\t\t\t<p class=\"desc\" _v-14c6ee2b=\"\">智能定位 宝贝行踪随时掌控</p>\n\t\t\t\t\t\t\t\t<p class=\"price\" _v-14c6ee2b=\"\">￥359</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li :style=\" 'background:url('+dir.img+'/index/clothes/4.jpg)' \" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t<div class=\"words\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t\t<p class=\"name\" _v-14c6ee2b=\"\">星球经典复古双肩背包</p>\n\t\t\t\t\t\t\t\t<p class=\"desc\" _v-14c6ee2b=\"\">酷炫星战 原力觉醒</p>\n\t\t\t\t\t\t\t\t<p class=\"price\" _v-14c6ee2b=\"\">￥249</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t\n\t\t\t<!-- living -->\n\t\t\t<div class=\"showcase\" _v-14c6ee2b=\"\">\n\t\t\t\t<ul class=\"left\" _v-14c6ee2b=\"\">\n\t\t\t\t\t<li :style=\" 'background:url('+dir.img+'/index/living/0.jpg)' \" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t<div class=\"words\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t\t<p class=\"name\" _v-14c6ee2b=\"\">功夫熊猫3旅行套装</p>\n\t\t\t\t\t\t\t\t<p class=\"desc\" _v-14c6ee2b=\"\">呆萌阿宝 贴心出行</p>\n\t\t\t\t\t\t\t\t<p class=\"price\" _v-14c6ee2b=\"\">￥50</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li :style=\" 'background:url('+dir.img+'/index/living/1.jpg)' \" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t<div class=\"words\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t\t<p class=\"name\" _v-14c6ee2b=\"\">星战数码印花限量版方巾</p>\n\t\t\t\t\t\t\t\t<p class=\"desc\" _v-14c6ee2b=\"\">给你不一样的亲肤体验</p>\n\t\t\t\t\t\t\t\t<p class=\"price\" _v-14c6ee2b=\"\">￥49</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<ul class=\"middle\" _v-14c6ee2b=\"\">\n\t\t\t\t\t<li style=\"background:#1A9EA5\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t<div class=\"middle_left\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t<a href=\"\" class=\"icon\" _v-14c6ee2b=\"\"><img :src=\" dir.img+'/icons/7.png' \" _v-14c6ee2b=\"\"></a>\n\t\t\t\t\t\t\t<div class=\"title\" _v-14c6ee2b=\"\"><a href=\"\" _v-14c6ee2b=\"\">居家日用</a></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"middle_right\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t<div class=\"list\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">创意文具</a><a href=\"\" _v-14c6ee2b=\"\">抱枕靠垫</a><br _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">水杯/水壶</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<a href=\"\" class=\"more\" style=\"color:#1A9EA5\" _v-14c6ee2b=\"\">查看更多</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li _v-14c6ee2b=\"\"><a href=\"\" _v-14c6ee2b=\"\"><img :src=\" dir.img+'/index/living/2.jpg' \" _v-14c6ee2b=\"\"></a></li>\n\t\t\t\t</ul>\n\t\t\t\t<ul class=\"right\" _v-14c6ee2b=\"\">\n\t\t\t\t\t<li :style=\" 'background:url('+dir.img+'/index/living/3.jpg)' \" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t<div class=\"words\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t\t<p class=\"name\" _v-14c6ee2b=\"\">功夫熊猫3抱枕</p>\n\t\t\t\t\t\t\t\t<p class=\"desc\" _v-14c6ee2b=\"\">功夫阿宝 让你放心依靠</p>\n\t\t\t\t\t\t\t\t<p class=\"price\" _v-14c6ee2b=\"\">￥80</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li :style=\" 'background:url('+dir.img+'/index/living/4.jpg)' \" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t<div class=\"words\" _v-14c6ee2b=\"\">\n\t\t\t\t\t\t\t\t<p class=\"name\" _v-14c6ee2b=\"\">星球大战马克杯套装</p>\n\t\t\t\t\t\t\t\t<p class=\"desc\" _v-14c6ee2b=\"\">黑白双雄 原力觉醒</p>\n\t\t\t\t\t\t\t\t<p class=\"price\" _v-14c6ee2b=\"\">￥99</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },

/***/ 75:
/***/ function(module, exports) {

	module.exports = "\n<div id=\"root\">\n\t<back-to-top></back-to-top>\n\t<topbar-black></topbar-black>\n\t<my-header :dir=\"dir\"></my-header>\n\t\n\t<home :dir=\"dir\"></home>\n\t\n\t<my-footer></my-footer>\n</div>\n";

/***/ }

});