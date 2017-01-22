webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _store = __webpack_require__(28);

	new Vue({
		el: '#root',
		store: _store.store,
		components: {
			App: __webpack_require__(78)
		},
		template: '<app></app>'
	});

/***/ },

/***/ 78:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__vue_script__ = __webpack_require__(79);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\_item\\App.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(88);
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
	    var id = "_v-70554684/App.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 79:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		components: {
			MyHeader: __webpack_require__(54),
			MyFooter: __webpack_require__(58),
			BackToTop: __webpack_require__(50),

			Item: __webpack_require__(80)
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

/***/ 80:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(81);
	__vue_script__ = __webpack_require__(82);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\_item\\Item.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(87);
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
	    var id = "_v-360a5446/Item.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 81:
1,

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		components: {
			TabbedBox: __webpack_require__(83)
		},
		data: function data() {
			return {
				id: '',
				query: '',
				current: 0,
				quantity: 1
			};
		},
		mounted: function mounted() {
			this.get_query();
			this.$store.dispatch('GET_ITEM', this.get_id());
		},
		computed: {
			item: function item() {
				return this.$store.state.item;
			}
		},
		methods: {
			get_id: function get_id() {
				var id = location.href.match(/id=.+/)[0].split(/&/)[0].replace(/id=/, '');
				return id;
			},
			get_query: function get_query() {
				this.query = location.href.match(/\?.+/)[0];
			},
			get_item: function get_item() {
				var self = this;
			},
			plus: function plus() {
				this.quantity++;
			},
			minus: function minus() {
				if (this.quantity > 1) {
					this.quantity--;
				}
			},
			pick: function pick(n) {
				this.current = n;
			}
		}
	};

/***/ },

/***/ 83:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(84);
	__vue_script__ = __webpack_require__(85);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\_item\\TabbedBox.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(86);
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
	    var id = "_v-591c853c/TabbedBox.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 84:
1,

/***/ 85:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: {
			tabs: {
				default: ['商品详情', '评价晒单', '购买须知']
			}
		},
		data: function data() {
			return {
				current: 0
			};
		},
		methods: {
			pick: function pick(i) {
				this.current = i;
			}
		}
	};

/***/ },

/***/ 86:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"TabbedBox\" _v-591c853c=\"\">\n\t<ul class=\"tabs\" _v-591c853c=\"\">\n\t\t<li v-for=\"(a,i) in tabs\" :class=\" current===i?'active':'' \" @click=\"pick(i)\" _v-591c853c=\"\">\n\t\t{{a}}</li>\n\t</ul>\n\t<ul class=\"content\" _v-591c853c=\"\">\n\t\t<li class=\"imgs_detailed\" v-show=\" current===0 \" _v-591c853c=\"\">\n\t\t\t<img src=\"xxxHTMLLINKxxx0.78045782004483040.8668113625608385xxx\" _v-591c853c=\"\">\n\t\t\t<img src=\"xxxHTMLLINKxxx0.83288345718756320.8554449686780572xxx\" _v-591c853c=\"\">\n\t\t\t<img src=\"xxxHTMLLINKxxx0.78324343450367450.7292779178824276xxx\" _v-591c853c=\"\">\n\t\t</li>\n\t\t<li v-show=\" current===1 \" _v-591c853c=\"\">\n\t\t尚无评价晒单</li>\n\t\t<li v-show=\" current===2 \" _v-591c853c=\"\">\n\t\t\t<h3 _v-591c853c=\"\">退货政策</h3>\n\t\t\t<p _v-591c853c=\"\">\n\t\t\t\t自实际收到商品之日起15日内可以退货。<br _v-591c853c=\"\">    3C类商品：此类所退换商品要求不影响二次销售，配件完整，包装齐全（不带有店铺或商品商标logo的非密封性包装除外），商品外观无磨损，无使用痕迹，整体无磕碰。如有赠品，需如数退回。\n\t\t\t</p>\n\t\t\t<h3 _v-591c853c=\"\">配送速度查询</h3>\n\t\t\t<p _v-591c853c=\"\">\n\t\t\t\t1.下单成功之后，订单会随时更新您的订单状态。<br _v-591c853c=\"\">\n\t\t\t\t2.您可以登录到您的时光网账户中，实时查看您订单的生产及配送情况。<br _v-591c853c=\"\">\n\t\t\t\t3.订单显示已发货状态，即可看到物流信息更新显示。<br _v-591c853c=\"\">\t4.当您的包裹发货时，我们将会以短信的方式附上运单号码告知您，您可以到时光网账户跟踪物流信息或者根据快递单号直接进行查询。\n\t\t\t</p>\n\t\t\t<h3 _v-591c853c=\"\">服务承诺</h3>\n\t\t\t<p _v-591c853c=\"\">\n\t\t\t\t1.时光网所售的产品都是官方授权，100%正品保证，您可以放心购买。<br _v-591c853c=\"\">\n\t\t\t\t2.如您的商品自签收之日起15天内出现质量问题、商品破损等问题可申请退货(特殊商品除外)。<br _v-591c853c=\"\">\n\t\t\t\t3.订单取消成功后，退款大约3-7个工作日内退至原支付账户。\n\t\t\t</p>\n\t\t\t<h3 _v-591c853c=\"\">权利声明</h3>\n\t\t\t<p _v-591c853c=\"\">\t\t\t\t\t\t\t\t\t\t\t\t\t\t时光网上的所有商品信息、客户评价、商品咨询、网友讨论等内容，是时光网重要的经营资源，未经许可，禁止非法转载使用。<br _v-591c853c=\"\">\t\t\t\t注：因部分品牌会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与网站图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本网站没有及时更新，请大家谅解！\n\t\t\t</p>\n\t\t</li>\n\t</ul>\n</div>\n";

/***/ },

/***/ 87:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Item\" _v-360a5446=\"\">\n\t<div class=\"item container\" _v-360a5446=\"\">\n\t\t<div class=\"header\" _v-360a5446=\"\">\n\t\t\t<p _v-360a5446=\"\">\n\t\t\t\t<a href=\"../\" _v-360a5446=\"\">主页</a> &gt; <a href=\"\" class=\"item_class\" _v-360a5446=\"\">--</a> &gt; <a href=\"\" class=\"sub_class\" _v-360a5446=\"\">--</a>\n\t\t\t</p>\n\t\t</div>\n\t\t<div class=\"images\" _v-360a5446=\"\">\n\t\t\t<div class=\"thumbnail\" _v-360a5446=\"\">\n\t\t\t\t<img src=\"xxxHTMLLINKxxx0.186085191555321220.2931671906262636xxx\" _v-360a5446=\"\">\n\t\t\t</div>\n\t\t\t<ul class=\"tabs\" _v-360a5446=\"\">\n\t\t\t\t<li _v-360a5446=\"\"><img src=\"xxxHTMLLINKxxx0.16605979227460920.9230925641022623xxx\" _v-360a5446=\"\"></li>\n\t\t\t\t<li _v-360a5446=\"\"><img src=\"xxxHTMLLINKxxx0.07656473829410970.4039541569072753xxx\" _v-360a5446=\"\"></li>\n\t\t\t\t<li _v-360a5446=\"\"><img src=\"xxxHTMLLINKxxx0.95204819785431030.5348259613383561xxx\" _v-360a5446=\"\"></li>\n\t\t\t\t<li _v-360a5446=\"\"><img src=\"xxxHTMLLINKxxx0.473867109743878250.8153535632882267xxx\" _v-360a5446=\"\"></li>\n\t\t\t</ul>\n\t\t</div>\t\t\n\t\t<div class=\"information\" _v-360a5446=\"\">\n\t\t\t<p class=\"name\" _v-360a5446=\"\">{{item.name}}</p>\n\t\t\t<p class=\"description\" _v-360a5446=\"\">{{item.description}}</p>\n\t\t\t<p class=\"priceWrapper\" _v-360a5446=\"\"><b _v-360a5446=\"\">￥<span class=\"price\" _v-360a5446=\"\">{{item.price.toFixed(2)}}</span></b></p>\n\t\t\t<div class=\"shuliang\" _v-360a5446=\"\">\n\t\t\t\t<p _v-360a5446=\"\">数量：</p>\n\t\t\t\t<div class=\"counter\" _v-360a5446=\"\">\n\t\t\t\t\t<div class=\"minus\" @click=\"minus\" _v-360a5446=\"\">-</div>\n\t\t\t\t\t<div class=\"quantity\" _v-360a5446=\"\">{{quantity}}</div>\n\t\t\t\t\t<div class=\"plus\" @click=\"plus\" _v-360a5446=\"\">+</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"buy\" _v-360a5446=\"\">立即购买</div>\n\t\t\t<div class=\"toCart\" _v-360a5446=\"\">放入购物车</div>\n\t\t\t\n\t\t</div>\n\t</div>\n\t\n\t<tabbed-box _v-360a5446=\"\"></tabbed-box>\n</div>\n";

/***/ },

/***/ 88:
/***/ function(module, exports) {

	module.exports = "\n<div id=\"root\">\n\t<back-to-top></back-to-top>\n\t<my-header :dir=\"dir\"></my-header>\n\t\n\t<item></item>\n\t\n\t<my-footer></my-footer>\n</div>\n";

/***/ }

});