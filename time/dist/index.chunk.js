webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _store = __webpack_require__(28);

	__webpack_require__(1);

	new Vue({
		el: '#root',
		store: _store.store,
		components: {
			App: __webpack_require__(67)
		},
		template: '<app></app>'
	});

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

/***/ 67:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__vue_script__ = __webpack_require__(68);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\_index\\App.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(77);
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
	    var id = "_v-46f47861/App.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 68:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		components: {
			TopbarBlack: __webpack_require__(42),
			MyHeader: __webpack_require__(54),
			MyFooter: __webpack_require__(58),
			BackToTop: __webpack_require__(50),
			Home: __webpack_require__(69)
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

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(70);
	__vue_script__ = __webpack_require__(71);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\components\\Home.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(76);
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
	    var id = "_v-44703528/Home.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 70:
1,

/***/ 71:
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
			Focus: __webpack_require__(72)
		},
		computed: {
			col2: function col2() {
				return [this.dir.item + '?id=1602091546'];
			}
		}
	};

/***/ },

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(73);
	__vue_script__ = __webpack_require__(74);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\components\\Focus.vue: named exports in *.vue files are ignored.");
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
	    var id = "_v-7eb276ca/Focus.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 73:
1,

/***/ 74:
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

/***/ 75:
/***/ function(module, exports) {

	module.exports = "\n<ul class=\"Focus wrapper\" _v-7eb276ca=\"\">\n\t<a :href=\" dir.item \" class=\"item\" v-for=\"(a,i) in items\" :class=\" i===current?'active':'' \" _v-7eb276ca=\"\">\n\t\t<li :style=\" 'background:url('+dir.img+'/focus/'+(i)+'.jpg) no-repeat center;' \" _v-7eb276ca=\"\">\n\t\t</li>\n\t</a>\n\t<ul class=\"pagination\" _v-7eb276ca=\"\">\n\t\t<div class=\"dot\" v-for=\"(b,index) in items\" :class=\" index===current?'active':'' \" @click=\"jump(index)\" _v-7eb276ca=\"\"></div>\n\t</ul>\n\t<div class=\"focus-last\" @click=\"prev\" _v-7eb276ca=\"\"><i class=\"fa fa-angle-left\" _v-7eb276ca=\"\"></i></div>\n\t<div class=\"focus-next\" @click=\"next\" _v-7eb276ca=\"\"><i class=\"fa fa-angle-right\" _v-7eb276ca=\"\"></i></div>\t\t\n</ul>\n";

/***/ },

/***/ 76:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Home\" _v-44703528=\"\">\n\t<!-- navbar -->\n\t<div class=\"navbar wrapper\" _v-44703528=\"\">\n\t\t<div class=\"container\" _v-44703528=\"\">\n\t\t\t<ul class=\"menu\" _v-44703528=\"\">\n\t\t\t\t<div class=\"menu-head\" _v-44703528=\"\">全部商品分类</div>\n\t\t\t\t<li _v-44703528=\"\">\n\t\t\t\t\t<div class=\"upper\" _v-44703528=\"\">\n\t\t\t\t\t\t<a href=\"\" class=\"a_a\" _v-44703528=\"\"><img :src=\" dir.img+'/icons/0.png' \" _v-44703528=\"\"></a>\n\t\t\t\t\t\t<a href=\"\" class=\"a_b\" _v-44703528=\"\">玩具模型</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"lower\" _v-44703528=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">模型公仔</a>\n\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">仿真收藏</a>\n\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">变形金刚</a><br _v-44703528=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">毛绒玩具</a>\n\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">角色扮演</a>\n\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">益智拼插</a>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li _v-44703528=\"\">\n\t\t\t\t\t<div class=\"upper\" _v-44703528=\"\">\n\t\t\t\t\t\t<a href=\"\" class=\"a_a\" _v-44703528=\"\"><img :src=\" dir.img+'/icons/1.png' \" _v-44703528=\"\"></a>\n\t\t\t\t\t\t<a href=\"\" class=\"a_b\" _v-44703528=\"\">数码配件</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"lower\" _v-44703528=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">手机配件</a>\n\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">充电装备</a>\n\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">时尚U盘</a><br _v-44703528=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">电脑周边</a>\n\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">车载用品</a>\n\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">趣味拍照</a>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li _v-44703528=\"\">\n\t\t\t\t\t<div class=\"upper\" _v-44703528=\"\">\n\t\t\t\t\t\t<a href=\"\" class=\"a_a\" _v-44703528=\"\"><img :src=\" dir.img+'/icons/2.png' \" _v-44703528=\"\"></a>\n\t\t\t\t\t\t<a href=\"\" class=\"a_b\" _v-44703528=\"\">服装服饰</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"lower\" _v-44703528=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">男装</a>\n\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">女装</a>\n\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">童装</a>\n\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">鞋靴</a><br _v-44703528=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">时尚包品</a>\n\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">服饰配件</a>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t\t<li _v-44703528=\"\">\n\t\t\t\t\t<div class=\"upper\" _v-44703528=\"\">\n\t\t\t\t\t\t<a href=\"\" class=\"a_a\" _v-44703528=\"\"><img :src=\" dir.img+'/icons/3.png' \" _v-44703528=\"\"></a>\n\t\t\t\t\t\t<a href=\"\" class=\"a_b\" _v-44703528=\"\">居家日用</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"lower\" _v-44703528=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">创意文具</a>\n\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">抱枕靠垫</a>\n\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">水杯水壶</a>\n\t\t\t\t\t</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<ul class=\"tabs\" _v-44703528=\"\">\n\t\t\t\t<li _v-44703528=\"\"><a :href=\" dir.admin \" _v-44703528=\"\">首页</a></li>\n\t\t\t\t<li _v-44703528=\"\"><a href=\"\" _v-44703528=\"\">服饰</a></li>\n\t\t\t\t<li _v-44703528=\"\"><a href=\"\" _v-44703528=\"\">钱包</a></li>\n\t\t\t\t<li _v-44703528=\"\"><a href=\"\" _v-44703528=\"\">耳机</a></li>\n\t\t\t\t<li _v-44703528=\"\"><a href=\"\" _v-44703528=\"\">运动鞋</a></li>\n\t\t\t\t<li _v-44703528=\"\"><a href=\"\" _v-44703528=\"\">色盲眼镜</a></li>\n\t\t\t\t<li _v-44703528=\"\"><a href=\"\" _v-44703528=\"\">手表</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t\n\t<focus :dir=\"dir\" _v-44703528=\"\"></focus>\n\n\t<!-- main -->\n\t<div class=\"main wrapper\" _v-44703528=\"\">\n\t\t<div class=\"container\" _v-44703528=\"\">\n\t\t\t<div class=\"box2\" _v-44703528=\"\">\n\t\t\t\t<ul class=\"col1\" _v-44703528=\"\">\n\t\t\t\t\t<li _v-44703528=\"\">\n\t\t\t\t\t\t<div class=\"upper\" _v-44703528=\"\">\n\t\t\t\t\t\t\t<div class=\"icon\" _v-44703528=\"\"><a href=\"\" _v-44703528=\"\"><img :src=\" dir.img+'/icons/4.png' \" _v-44703528=\"\"></a></div>\n\t\t\t\t\t\t\t<a href=\"\" class=\"title\" _v-44703528=\"\">玩具模型</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"lower\" _v-44703528=\"\">\n\t\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">模型公仔</a> <a href=\"\" _v-44703528=\"\">仿真收藏</a> <a href=\"\" _v-44703528=\"\">更多&gt;</a></div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li _v-44703528=\"\">\n\t\t\t\t\t\t<div class=\"upper\" _v-44703528=\"\">\n\t\t\t\t\t\t\t<div class=\"icon\" _v-44703528=\"\"><a href=\"\" _v-44703528=\"\"><img :src=\" dir.img+'/icons/5.png' \" _v-44703528=\"\"></a></div>\n\t\t\t\t\t\t\t<a href=\"\" class=\"title\" _v-44703528=\"\">数码配件</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"lower\" _v-44703528=\"\">\n\t\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">手机配件</a> <a href=\"\" _v-44703528=\"\">充电装备</a> <a href=\"\" _v-44703528=\"\">更多&gt;</a></div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li _v-44703528=\"\">\n\t\t\t\t\t\t<div class=\"upper\" _v-44703528=\"\">\n\t\t\t\t\t\t\t<div class=\"icon\" _v-44703528=\"\"><a href=\"\" _v-44703528=\"\"><img :src=\" dir.img+'/icons/6.png' \" _v-44703528=\"\"></a></div>\n\t\t\t\t\t\t\t<a href=\"\" class=\"title\" _v-44703528=\"\">服装服饰</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"lower\" _v-44703528=\"\">\n\t\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">男装</a> <a href=\"\" _v-44703528=\"\">女装</a> <a href=\"\" _v-44703528=\"\">更多&gt;</a></div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li _v-44703528=\"\">\n\t\t\t\t\t\t<div class=\"upper\" _v-44703528=\"\">\n\t\t\t\t\t\t\t<div class=\"icon\" _v-44703528=\"\"><a href=\"\" _v-44703528=\"\"><img :src=\" dir.img+'/icons/7.png' \" _v-44703528=\"\"></a></div>\n\t\t\t\t\t\t\t<a href=\"\" class=\"title\" _v-44703528=\"\">居家日用</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"lower\" _v-44703528=\"\">\n\t\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">创意文具</a> <a href=\"\" _v-44703528=\"\">抱枕靠垫</a> <a href=\"\" _v-44703528=\"\">更多&gt;</a></div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<div class=\"col2\" _v-44703528=\"\">\n\t\t\t\t\t<dl _v-44703528=\"\">\n\t\t\t\t\t\t<dt _v-44703528=\"\"><a :href=\" col2[0] \" _v-44703528=\"\"><img :src=\" dir.img+'/index/showcase/0.jpg' \" _v-44703528=\"\"></a></dt>\n\t\t\t\t\t\t<dt _v-44703528=\"\"><a :href=\" col2[0] \" _v-44703528=\"\"><img :src=\" dir.img+'/index/showcase/1.jpg' \" _v-44703528=\"\"></a></dt>\n\t\t\t\t\t\t<dd _v-44703528=\"\"><a :href=\" col2[0] \" _v-44703528=\"\"><img :src=\" dir.img+'/index/showcase/2.jpg' \" _v-44703528=\"\"></a></dd>\n\t\t\t\t\t\t<dd _v-44703528=\"\"><a :href=\" col2[0] \" _v-44703528=\"\"><img :src=\" dir.img+'/index/showcase/3.jpg' \" _v-44703528=\"\"></a></dd>\n\t\t\t\t\t\t<dd _v-44703528=\"\"><a :href=\" col2[0] \" _v-44703528=\"\"><img :src=\" dir.img+'/index/showcase/4.jpg' \" _v-44703528=\"\"></a></dd>\n\t\t\t\t\t\t<dd _v-44703528=\"\"><a :href=\" col2[0] \" _v-44703528=\"\"><img :src=\" dir.img+'/index/showcase/5.jpg' \" _v-44703528=\"\"></a></dd>\t\t\n\t\t\t\t\t</dl>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t\t<!-- toys -->\n\t\t\t<div class=\"showcase\" _v-44703528=\"\">\n\t\t\t\t<ul class=\"left\" _v-44703528=\"\">\n\t\t\t\t\t<li :style=\" 'background:url('+dir.img+'/index/toys/0.jpg)' \" _v-44703528=\"\">\n\t\t\t\t\t\t<a href=\"item.html?id=1602091458\" _v-44703528=\"\">\n\t\t\t\t\t\t\t<div class=\"words\" _v-44703528=\"\">\n\t\t\t\t\t\t\t\t<p class=\"name\" _v-44703528=\"\">星球大战BB-8智能球形机器人</p>\n\t\t\t\t\t\t\t\t<p class=\"desc\" _v-44703528=\"\">翻滚吧！球形BB-8！</p>\n\t\t\t\t\t\t\t\t<p class=\"price\" _v-44703528=\"\">￥1198</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li :style=\" 'background:url('+dir.img+'/index/toys/1.jpg)' \" _v-44703528=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">\n\t\t\t\t\t\t\t<div class=\"words\" _v-44703528=\"\">\n\t\t\t\t\t\t\t\t<p class=\"name\" _v-44703528=\"\">复仇者联盟2迷你公仔套装</p>\n\t\t\t\t\t\t\t\t<p class=\"desc\" _v-44703528=\"\">Q萌复联英雄 霸气拯救世界</p>\n\t\t\t\t\t\t\t\t<p class=\"price\" _v-44703528=\"\">￥150</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<ul class=\"middle\" _v-44703528=\"\">\n\t\t\t\t\t<li _v-44703528=\"\">\n\t\t\t\t\t\t<div class=\"middle_left\" _v-44703528=\"\">\n\t\t\t\t\t\t\t<a href=\"\" class=\"icon\" _v-44703528=\"\"><img :src=\" dir.img+'/icons/4.png' \" _v-44703528=\"\"></a>\n\t\t\t\t\t\t\t<div class=\"title\" _v-44703528=\"\"><a href=\"\" _v-44703528=\"\">玩具模型</a></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"middle_right\" _v-44703528=\"\">\n\t\t\t\t\t\t\t<div class=\"list\" _v-44703528=\"\">\n\t\t\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">模型公仔</a><a href=\"\" _v-44703528=\"\">仿真收藏</a><br _v-44703528=\"\">\n\t\t\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">变形金刚</a><a href=\"\" _v-44703528=\"\">毛绒玩具</a><br _v-44703528=\"\">\n\t\t\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">角色扮演</a><a href=\"\" _v-44703528=\"\">益智拼插</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<a href=\"\" class=\"more\" _v-44703528=\"\">查看更多</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li _v-44703528=\"\"><a href=\"\" _v-44703528=\"\"><img :src=\" dir.img+'/index/toys/2.jpg' \" _v-44703528=\"\"></a></li>\n\t\t\t\t</ul>\n\t\t\t\t<ul class=\"right\" _v-44703528=\"\">\n\t\t\t\t\t<li :style=\" 'background:url('+dir.img+'/index/toys/3.jpg)' \" _v-44703528=\"\">\n\t\t\t\t\t\t<a href=\"items/item.html?id=1602091557\" _v-44703528=\"\">\n\t\t\t\t\t\t\t<div class=\"words\" _v-44703528=\"\">\n\t\t\t\t\t\t\t\t<p class=\"name\" _v-44703528=\"\">HEROCROSS星球大战白兵</p>\n\t\t\t\t\t\t\t\t<p class=\"desc\" _v-44703528=\"\">Q版可动白兵</p>\n\t\t\t\t\t\t\t\t<p class=\"price\" _v-44703528=\"\">￥398</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li :style=\" 'background:url('+dir.img+'/index/toys/4.jpg)' \" _v-44703528=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">\n\t\t\t\t\t\t\t<div class=\"words\" _v-44703528=\"\">\n\t\t\t\t\t\t\t\t<p class=\"name\" _v-44703528=\"\">复仇者联盟2 Q版收藏公仔</p>\n\t\t\t\t\t\t\t\t<p class=\"desc\" _v-44703528=\"\">复联男神 横空出击</p>\n\t\t\t\t\t\t\t\t<p class=\"price\" _v-44703528=\"\">￥99</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t\n\t\t\t<!-- digital -->\n\t\t\t<div class=\"showcase\" _v-44703528=\"\">\n\t\t\t\t<ul class=\"left\" _v-44703528=\"\">\n\t\t\t\t\t<li :style=\" 'background:url('+dir.img+'/index/digital/0.jpg)' \" _v-44703528=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">\n\t\t\t\t\t\t\t<div class=\"words\" _v-44703528=\"\">\n\t\t\t\t\t\t\t\t<p class=\"name\" _v-44703528=\"\">星战经典充电宝套装</p>\n\t\t\t\t\t\t\t\t<p class=\"desc\" _v-44703528=\"\">黑白双枭 能量伴侣</p>\n\t\t\t\t\t\t\t\t<p class=\"price\" _v-44703528=\"\">￥149</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li :style=\" 'background:url('+dir.img+'/index/digital/1.jpg)' \" _v-44703528=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">\n\t\t\t\t\t\t\t<div class=\"words\" _v-44703528=\"\">\n\t\t\t\t\t\t\t\t<p class=\"name\" _v-44703528=\"\">宜博M639钢铁侠游戏鼠标</p>\n\t\t\t\t\t\t\t\t<p class=\"desc\" _v-44703528=\"\">百炼成“钢” 内“芯”强大</p>\n\t\t\t\t\t\t\t\t<p class=\"price\" _v-44703528=\"\">￥198</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<ul class=\"middle\" _v-44703528=\"\">\n\t\t\t\t\t<li style=\"background:#2378B9\" _v-44703528=\"\">\n\t\t\t\t\t\t<div class=\"middle_left\" _v-44703528=\"\">\n\t\t\t\t\t\t\t<a href=\"\" class=\"icon\" _v-44703528=\"\"><img :src=\" dir.img+'/icons/5.png' \" _v-44703528=\"\"></a>\n\t\t\t\t\t\t\t<div class=\"title\" _v-44703528=\"\"><a href=\"\" _v-44703528=\"\">数码配件</a></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"middle_right\" _v-44703528=\"\">\n\t\t\t\t\t\t\t<div class=\"list\" _v-44703528=\"\">\n\t\t\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">手机配件</a><a href=\"\" _v-44703528=\"\">充电装备</a><br _v-44703528=\"\">\n\t\t\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">时尚U盘</a><a href=\"\" _v-44703528=\"\">电脑周边</a><br _v-44703528=\"\">\n\t\t\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">车载用品</a><a href=\"\" _v-44703528=\"\">趣味拍照</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<a href=\"\" class=\"more\" style=\"color:#2378B9\" _v-44703528=\"\">查看更多</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li _v-44703528=\"\"><a href=\"\" _v-44703528=\"\"><img :src=\" dir.img+'/index/digital/2.jpg' \" _v-44703528=\"\"></a></li>\n\t\t\t\t</ul>\n\t\t\t\t<ul class=\"right\" _v-44703528=\"\">\n\t\t\t\t\t<li :style=\" 'background:url('+dir.img+'/index/digital/3.jpg)' \" _v-44703528=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">\n\t\t\t\t\t\t\t<div class=\"words\" _v-44703528=\"\">\n\t\t\t\t\t\t\t\t<p class=\"name\" _v-44703528=\"\">阿宝爱包子i6手机壳</p>\n\t\t\t\t\t\t\t\t<p class=\"desc\" _v-44703528=\"\">吃货阿宝 再秀包子神功</p>\n\t\t\t\t\t\t\t\t<p class=\"price\" _v-44703528=\"\">￥45</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li :style=\" 'background:url('+dir.img+'/index/digital/4.jpg)' \" _v-44703528=\"\">\n\t\t\t\t\t\t<a href=\"items/item.html?id=1602091550\" _v-44703528=\"\">\n\t\t\t\t\t\t\t<div class=\"words\" _v-44703528=\"\">\n\t\t\t\t\t\t\t\t<p class=\"name\" _v-44703528=\"\">星球大战入耳式耳机</p>\n\t\t\t\t\t\t\t\t<p class=\"desc\" _v-44703528=\"\">出色音质 唤醒你的耳朵</p>\n\t\t\t\t\t\t\t\t<p class=\"price\" _v-44703528=\"\">￥60</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t\n\t\t\t<!-- clothes -->\n\t\t\t<div class=\"showcase\" _v-44703528=\"\">\n\t\t\t\t<ul class=\"left\" _v-44703528=\"\">\n\t\t\t\t\t<li :style=\" 'background:url('+dir.img+'/index/clothes/0.jpg)' \" _v-44703528=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">\n\t\t\t\t\t\t\t<div class=\"words\" _v-44703528=\"\">\n\t\t\t\t\t\t\t\t<p class=\"name\" _v-44703528=\"\">功夫熊猫3双宝环保袋</p>\n\t\t\t\t\t\t\t\t<p class=\"desc\" _v-44703528=\"\">呆萌阿宝伴你环保出行</p>\n\t\t\t\t\t\t\t\t<p class=\"price\" _v-44703528=\"\">￥49</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li :style=\" 'background:url('+dir.img+'/index/clothes/1.jpg)' \" _v-44703528=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">\n\t\t\t\t\t\t\t<div class=\"words\" _v-44703528=\"\">\n\t\t\t\t\t\t\t\t<p class=\"name\" _v-44703528=\"\">蚁人炫酷休闲帽</p>\n\t\t\t\t\t\t\t\t<p class=\"desc\" _v-44703528=\"\">蚁人酷帽 霸气来袭</p>\n\t\t\t\t\t\t\t\t<p class=\"price\" _v-44703528=\"\">￥39</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<ul class=\"middle\" _v-44703528=\"\">\n\t\t\t\t\t<li style=\"background:#49B67C\" _v-44703528=\"\">\n\t\t\t\t\t\t<div class=\"middle_left\" _v-44703528=\"\">\n\t\t\t\t\t\t\t<a href=\"\" class=\"icon\" _v-44703528=\"\"><img :src=\" dir.img+'/icons/6.png' \" _v-44703528=\"\"></a>\n\t\t\t\t\t\t\t<div class=\"title\" _v-44703528=\"\"><a href=\"\" _v-44703528=\"\">服装服饰</a></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"middle_right\" _v-44703528=\"\">\n\t\t\t\t\t\t\t<div class=\"list\" _v-44703528=\"\">\n\t\t\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">男装</a><a href=\"\" _v-44703528=\"\">女装</a><br _v-44703528=\"\">\n\t\t\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">童装</a><a href=\"\" _v-44703528=\"\">鞋靴</a><br _v-44703528=\"\">\n\t\t\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">时尚包品</a><a href=\"\" _v-44703528=\"\">服饰配件</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<a href=\"\" class=\"more\" style=\"color:#49B67C\" _v-44703528=\"\">查看更多</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li _v-44703528=\"\"><a href=\"\" _v-44703528=\"\"><img :src=\" dir.img+'/index/clothes/2.jpg' \" _v-44703528=\"\"></a></li>\n\t\t\t\t</ul>\n\t\t\t\t<ul class=\"right\" _v-44703528=\"\">\n\t\t\t\t\t<li :style=\" 'background:url('+dir.img+'/index/clothes/3.jpg)' \" _v-44703528=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">\n\t\t\t\t\t\t\t<div class=\"words\" _v-44703528=\"\">\n\t\t\t\t\t\t\t\t<p class=\"name\" _v-44703528=\"\">蜘蛛侠低帮智能定位童鞋</p>\n\t\t\t\t\t\t\t\t<p class=\"desc\" _v-44703528=\"\">智能定位 宝贝行踪随时掌控</p>\n\t\t\t\t\t\t\t\t<p class=\"price\" _v-44703528=\"\">￥359</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li :style=\" 'background:url('+dir.img+'/index/clothes/4.jpg)' \" _v-44703528=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">\n\t\t\t\t\t\t\t<div class=\"words\" _v-44703528=\"\">\n\t\t\t\t\t\t\t\t<p class=\"name\" _v-44703528=\"\">星球经典复古双肩背包</p>\n\t\t\t\t\t\t\t\t<p class=\"desc\" _v-44703528=\"\">酷炫星战 原力觉醒</p>\n\t\t\t\t\t\t\t\t<p class=\"price\" _v-44703528=\"\">￥249</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t\n\t\t\t<!-- living -->\n\t\t\t<div class=\"showcase\" _v-44703528=\"\">\n\t\t\t\t<ul class=\"left\" _v-44703528=\"\">\n\t\t\t\t\t<li :style=\" 'background:url('+dir.img+'/index/living/0.jpg)' \" _v-44703528=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">\n\t\t\t\t\t\t\t<div class=\"words\" _v-44703528=\"\">\n\t\t\t\t\t\t\t\t<p class=\"name\" _v-44703528=\"\">功夫熊猫3旅行套装</p>\n\t\t\t\t\t\t\t\t<p class=\"desc\" _v-44703528=\"\">呆萌阿宝 贴心出行</p>\n\t\t\t\t\t\t\t\t<p class=\"price\" _v-44703528=\"\">￥50</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li :style=\" 'background:url('+dir.img+'/index/living/1.jpg)' \" _v-44703528=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">\n\t\t\t\t\t\t\t<div class=\"words\" _v-44703528=\"\">\n\t\t\t\t\t\t\t\t<p class=\"name\" _v-44703528=\"\">星战数码印花限量版方巾</p>\n\t\t\t\t\t\t\t\t<p class=\"desc\" _v-44703528=\"\">给你不一样的亲肤体验</p>\n\t\t\t\t\t\t\t\t<p class=\"price\" _v-44703528=\"\">￥49</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t\t<ul class=\"middle\" _v-44703528=\"\">\n\t\t\t\t\t<li style=\"background:#1A9EA5\" _v-44703528=\"\">\n\t\t\t\t\t\t<div class=\"middle_left\" _v-44703528=\"\">\n\t\t\t\t\t\t\t<a href=\"\" class=\"icon\" _v-44703528=\"\"><img :src=\" dir.img+'/icons/7.png' \" _v-44703528=\"\"></a>\n\t\t\t\t\t\t\t<div class=\"title\" _v-44703528=\"\"><a href=\"\" _v-44703528=\"\">居家日用</a></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"middle_right\" _v-44703528=\"\">\n\t\t\t\t\t\t\t<div class=\"list\" _v-44703528=\"\">\n\t\t\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">创意文具</a><a href=\"\" _v-44703528=\"\">抱枕靠垫</a><br _v-44703528=\"\">\n\t\t\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">水杯/水壶</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<a href=\"\" class=\"more\" style=\"color:#1A9EA5\" _v-44703528=\"\">查看更多</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li _v-44703528=\"\"><a href=\"\" _v-44703528=\"\"><img :src=\" dir.img+'/index/living/2.jpg' \" _v-44703528=\"\"></a></li>\n\t\t\t\t</ul>\n\t\t\t\t<ul class=\"right\" _v-44703528=\"\">\n\t\t\t\t\t<li :style=\" 'background:url('+dir.img+'/index/living/3.jpg)' \" _v-44703528=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">\n\t\t\t\t\t\t\t<div class=\"words\" _v-44703528=\"\">\n\t\t\t\t\t\t\t\t<p class=\"name\" _v-44703528=\"\">功夫熊猫3抱枕</p>\n\t\t\t\t\t\t\t\t<p class=\"desc\" _v-44703528=\"\">功夫阿宝 让你放心依靠</p>\n\t\t\t\t\t\t\t\t<p class=\"price\" _v-44703528=\"\">￥80</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li :style=\" 'background:url('+dir.img+'/index/living/4.jpg)' \" _v-44703528=\"\">\n\t\t\t\t\t\t<a href=\"\" _v-44703528=\"\">\n\t\t\t\t\t\t\t<div class=\"words\" _v-44703528=\"\">\n\t\t\t\t\t\t\t\t<p class=\"name\" _v-44703528=\"\">星球大战马克杯套装</p>\n\t\t\t\t\t\t\t\t<p class=\"desc\" _v-44703528=\"\">黑白双雄 原力觉醒</p>\n\t\t\t\t\t\t\t\t<p class=\"price\" _v-44703528=\"\">￥99</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },

/***/ 77:
/***/ function(module, exports) {

	module.exports = "\n<div id=\"root\">\n\t<back-to-top></back-to-top>\n\t<topbar-black></topbar-black>\n\t<my-header :dir=\"dir\"></my-header>\n\t\n\t<home :dir=\"dir\"></home>\n\t\n\t<my-footer></my-footer>\n</div>\n";

/***/ }

});