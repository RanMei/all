webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _config = __webpack_require__(1);

	__webpack_require__(42);

	__webpack_require__(61);

	var _MyHeader = __webpack_require__(44);

	var MyHeader = _interopRequireWildcard(_MyHeader);

	var _Focus = __webpack_require__(48);

	var Focus = _interopRequireWildcard(_Focus);

	var _BackToTop = __webpack_require__(52);

	var BackToTop = _interopRequireWildcard(_BackToTop);

	var _MyFooter = __webpack_require__(56);

	var MyFooter = _interopRequireWildcard(_MyFooter);

	var _store = __webpack_require__(32);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	Vue.component('my-header', MyHeader);
	Vue.component('focus', Focus);
	Vue.component('back-to-top', BackToTop);
	Vue.component('my-footer', MyFooter);

	new Vue({
		el: '#root',
		store: _store.store,
		components: {
			TabbedBox: __webpack_require__(62)
		},
		data: {
			DIR: _config.DIR,
			id: '',
			query: '',
			current: 0,
			quantity: 1
		},
		mounted: function mounted() {
			//this.get_id();
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
	});

/***/ },

/***/ 48:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(49);
	__vue_script__ = __webpack_require__(50);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\components\\Focus.vue: named exports in *.vue files are ignored.");
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
	    var id = "_v-6988d3bc/Focus.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 49:
42,

/***/ 50:
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

/***/ 51:
/***/ function(module, exports) {

	module.exports = "\n<ul class=\"Focus wrapper\" _v-6988d3bc=\"\">\n\t<a :href=\" dir.item \" class=\"item\" v-for=\"(a,i) in items\" :class=\" i===current?'active':'' \" _v-6988d3bc=\"\">\n\t\t<li :style=\" 'background:url('+dir.img+'/focus/'+(i)+'.jpg) no-repeat center;' \" _v-6988d3bc=\"\">\n\t\t</li>\n\t</a>\n\t<ul class=\"pagination\" _v-6988d3bc=\"\">\n\t\t<div class=\"dot\" v-for=\"(b,index) in items\" :class=\" index===current?'active':'' \" @click=\"jump(index)\" _v-6988d3bc=\"\"></div>\n\t</ul>\n\t<div class=\"focus-last\" @click=\"prev\" _v-6988d3bc=\"\"><i class=\"fa fa-angle-left\" _v-6988d3bc=\"\"></i></div>\n\t<div class=\"focus-next\" @click=\"next\" _v-6988d3bc=\"\"><i class=\"fa fa-angle-right\" _v-6988d3bc=\"\"></i></div>\t\t\n</ul>\n";

/***/ },

/***/ 61:
42,

/***/ 62:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(63);
	__vue_script__ = __webpack_require__(64);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\_item\\TabbedBox.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(65);
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
	    var id = "_v-dfc8e40a/TabbedBox.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 63:
42,

/***/ 64:
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

/***/ 65:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"TabbedBox\" _v-dfc8e40a=\"\">\n\t<ul class=\"tabs\" _v-dfc8e40a=\"\">\n\t\t<li v-for=\"(a,i) in tabs\" :class=\" current===i?'active':'' \" @click=\"pick(i)\" _v-dfc8e40a=\"\">\n\t\t{{a}}</li>\n\t</ul>\n\t<ul class=\"content\" _v-dfc8e40a=\"\">\n\t\t<li class=\"imgs_detailed\" v-show=\" current===0 \" _v-dfc8e40a=\"\">\n\t\t\t<img src=\"xxxHTMLLINKxxx0.75300414719673260.684253256759114xxx\" _v-dfc8e40a=\"\">\n\t\t\t<img src=\"xxxHTMLLINKxxx0.53382883806655810.8751630422848689xxx\" _v-dfc8e40a=\"\">\n\t\t\t<img src=\"xxxHTMLLINKxxx0.55736783023254070.8567085049390166xxx\" _v-dfc8e40a=\"\">\n\t\t</li>\n\t\t<li v-show=\" current===1 \" _v-dfc8e40a=\"\">\n\t\t尚无评价晒单</li>\n\t\t<li v-show=\" current===2 \" _v-dfc8e40a=\"\">\n\t\t\t<h3 _v-dfc8e40a=\"\">退货政策</h3>\n\t\t\t<p _v-dfc8e40a=\"\">\n\t\t\t\t自实际收到商品之日起15日内可以退货。<br _v-dfc8e40a=\"\">    3C类商品：此类所退换商品要求不影响二次销售，配件完整，包装齐全（不带有店铺或商品商标logo的非密封性包装除外），商品外观无磨损，无使用痕迹，整体无磕碰。如有赠品，需如数退回。\n\t\t\t</p>\n\t\t\t<h3 _v-dfc8e40a=\"\">配送速度查询</h3>\n\t\t\t<p _v-dfc8e40a=\"\">\n\t\t\t\t1.下单成功之后，订单会随时更新您的订单状态。<br _v-dfc8e40a=\"\">\n\t\t\t\t2.您可以登录到您的时光网账户中，实时查看您订单的生产及配送情况。<br _v-dfc8e40a=\"\">\n\t\t\t\t3.订单显示已发货状态，即可看到物流信息更新显示。<br _v-dfc8e40a=\"\">\t4.当您的包裹发货时，我们将会以短信的方式附上运单号码告知您，您可以到时光网账户跟踪物流信息或者根据快递单号直接进行查询。\n\t\t\t</p>\n\t\t\t<h3 _v-dfc8e40a=\"\">服务承诺</h3>\n\t\t\t<p _v-dfc8e40a=\"\">\n\t\t\t\t1.时光网所售的产品都是官方授权，100%正品保证，您可以放心购买。<br _v-dfc8e40a=\"\">\n\t\t\t\t2.如您的商品自签收之日起15天内出现质量问题、商品破损等问题可申请退货(特殊商品除外)。<br _v-dfc8e40a=\"\">\n\t\t\t\t3.订单取消成功后，退款大约3-7个工作日内退至原支付账户。\n\t\t\t</p>\n\t\t\t<h3 _v-dfc8e40a=\"\">权利声明</h3>\n\t\t\t<p _v-dfc8e40a=\"\">\t\t\t\t\t\t\t\t\t\t\t\t\t\t时光网上的所有商品信息、客户评价、商品咨询、网友讨论等内容，是时光网重要的经营资源，未经许可，禁止非法转载使用。<br _v-dfc8e40a=\"\">\t\t\t\t注：因部分品牌会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与网站图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本网站没有及时更新，请大家谅解！\n\t\t\t</p>\n\t\t</li>\n\t</ul>\n</div>\n";

/***/ }

});