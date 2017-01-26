webpackJsonp([4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(86);


/***/ },

/***/ 86:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

	var _store = __webpack_require__(28);

	new Vue({
		el: '#root',
		store: _store.store,
		components: {
			App: __webpack_require__(87)
		},
		template: '<app></app>'
	});

/***/ },

/***/ 87:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};

	/* script */
	__vue_exports__ = __webpack_require__(88);

	/* template */
	var __vue_template__ = __webpack_require__(97);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}

	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;

	module.exports = __vue_exports__;

/***/ },

/***/ 88:
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

	exports.default = {
		components: {
			MyHeader: __webpack_require__(56),
			MyFooter: __webpack_require__(60),
			BackToTop: __webpack_require__(52),

			Item: __webpack_require__(89)
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

/***/ 89:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};

	/* styles */
	__webpack_require__(90);

	/* script */
	__vue_exports__ = __webpack_require__(91);

	/* template */
	var __vue_template__ = __webpack_require__(96);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}

	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	__vue_options__._scopeId = "data-v-360a5446";

	module.exports = __vue_exports__;

/***/ },

/***/ 90:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 91:
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

	exports.default = {
		components: {
			TabbedBox: __webpack_require__(92)
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
	};

/***/ },

/***/ 92:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var __vue_exports__, __vue_options__;
	var __vue_styles__ = {};

	/* styles */
	__webpack_require__(93);

	/* script */
	__vue_exports__ = __webpack_require__(94);

	/* template */
	var __vue_template__ = __webpack_require__(95);
	__vue_options__ = __vue_exports__ = __vue_exports__ || {};
	if (_typeof(__vue_exports__.default) === "object" || typeof __vue_exports__.default === "function") {
	  __vue_options__ = __vue_exports__ = __vue_exports__.default;
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options;
	}

	__vue_options__.render = __vue_template__.render;
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns;
	__vue_options__._scopeId = "data-v-591c853c";

	module.exports = __vue_exports__;

/***/ },

/***/ 93:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 94:
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

/***/ 95:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "TabbedBox"
	  }, [_c('ul', {
	    staticClass: "tabs"
	  }, _vm._l((_vm.tabs), function(a, i) {
	    return _c('li', {
	      class: _vm.current === i ? 'active' : '',
	      on: {
	        "click": function($event) {
	          _vm.pick(i)
	        }
	      }
	    }, [_vm._v("\n\t\t" + _vm._s(a))])
	  })), _vm._v(" "), _c('ul', {
	    staticClass: "content"
	  }, [_c('li', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.current === 0),
	      expression: " current===0 "
	    }],
	    staticClass: "imgs_detailed"
	  }, [_c('img', {
	    attrs: {
	      "src": ""
	    }
	  }), _vm._v(" "), _c('img', {
	    attrs: {
	      "src": ""
	    }
	  }), _vm._v(" "), _c('img', {
	    attrs: {
	      "src": ""
	    }
	  })]), _vm._v(" "), _c('li', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.current === 1),
	      expression: " current===1 "
	    }]
	  }, [_vm._v("\n\t\t尚无评价晒单")]), _vm._v(" "), _c('li', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.current === 2),
	      expression: " current===2 "
	    }]
	  }, [_c('h3', [_vm._v("退货政策")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('h3', [_vm._v("配送速度查询")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('h3', [_vm._v("服务承诺")]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('h3', [_vm._v("权利声明")]), _vm._v(" "), _vm._m(3)])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('p', [_vm._v("\n\t\t\t\t自实际收到商品之日起15日内可以退货。"), _c('br'), _vm._v("    3C类商品：此类所退换商品要求不影响二次销售，配件完整，包装齐全（不带有店铺或商品商标logo的非密封性包装除外），商品外观无磨损，无使用痕迹，整体无磕碰。如有赠品，需如数退回。\n\t\t\t")])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('p', [_vm._v("\n\t\t\t\t1.下单成功之后，订单会随时更新您的订单状态。"), _c('br'), _vm._v("\n\t\t\t\t2.您可以登录到您的时光网账户中，实时查看您订单的生产及配送情况。"), _c('br'), _vm._v("\n\t\t\t\t3.订单显示已发货状态，即可看到物流信息更新显示。"), _c('br'), _vm._v("\t4.当您的包裹发货时，我们将会以短信的方式附上运单号码告知您，您可以到时光网账户跟踪物流信息或者根据快递单号直接进行查询。\n\t\t\t")])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('p', [_vm._v("\n\t\t\t\t1.时光网所售的产品都是官方授权，100%正品保证，您可以放心购买。"), _c('br'), _vm._v("\n\t\t\t\t2.如您的商品自签收之日起15天内出现质量问题、商品破损等问题可申请退货(特殊商品除外)。"), _c('br'), _vm._v("\n\t\t\t\t3.订单取消成功后，退款大约3-7个工作日内退至原支付账户。\n\t\t\t")])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('p', [_vm._v("\t\t\t\t\t\t\t\t\t\t\t\t\t\t时光网上的所有商品信息、客户评价、商品咨询、网友讨论等内容，是时光网重要的经营资源，未经许可，禁止非法转载使用。"), _c('br'), _vm._v("\t\t\t\t注：因部分品牌会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与网站图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本网站没有及时更新，请大家谅解！\n\t\t\t")])
	}]}

/***/ },

/***/ 96:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "Item"
	  }, [_c('div', {
	    staticClass: "item container"
	  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
	    staticClass: "information"
	  }, [_c('p', {
	    staticClass: "name"
	  }, [_vm._v(_vm._s(_vm.item.name))]), _vm._v(" "), _c('p', {
	    staticClass: "description"
	  }, [_vm._v(_vm._s(_vm.item.description))]), _vm._v(" "), _c('p', {
	    staticClass: "priceWrapper"
	  }, [_c('b', [_vm._v("￥"), _c('span', {
	    staticClass: "price"
	  }, [_vm._v(_vm._s(_vm.item.price.toFixed(2)))])])]), _vm._v(" "), _c('div', {
	    staticClass: "shuliang"
	  }, [_c('p', [_vm._v("数量：")]), _vm._v(" "), _c('div', {
	    staticClass: "counter"
	  }, [_c('div', {
	    staticClass: "minus",
	    on: {
	      "click": _vm.minus
	    }
	  }, [_vm._v("-")]), _vm._v(" "), _c('div', {
	    staticClass: "quantity"
	  }, [_vm._v(_vm._s(_vm.quantity))]), _vm._v(" "), _c('div', {
	    staticClass: "plus",
	    on: {
	      "click": _vm.plus
	    }
	  }, [_vm._v("+")])])]), _vm._v(" "), _c('div', {
	    staticClass: "buy"
	  }, [_vm._v("立即购买")]), _vm._v(" "), _c('div', {
	    staticClass: "toCart"
	  }, [_vm._v("放入购物车")])])]), _vm._v(" "), _c('tabbed-box')], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "header"
	  }, [_c('p', [_c('a', {
	    attrs: {
	      "href": "../"
	    }
	  }, [_vm._v("主页")]), _vm._v(" > "), _c('a', {
	    staticClass: "item_class",
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("--")]), _vm._v(" > "), _c('a', {
	    staticClass: "sub_class",
	    attrs: {
	      "href": ""
	    }
	  }, [_vm._v("--")])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "images"
	  }, [_c('div', {
	    staticClass: "thumbnail"
	  }, [_c('img', {
	    attrs: {
	      "src": ""
	    }
	  })]), _vm._v(" "), _c('ul', {
	    staticClass: "tabs"
	  }, [_c('li', [_c('img', {
	    attrs: {
	      "src": ""
	    }
	  })]), _vm._v(" "), _c('li', [_c('img', {
	    attrs: {
	      "src": ""
	    }
	  })]), _vm._v(" "), _c('li', [_c('img', {
	    attrs: {
	      "src": ""
	    }
	  })]), _vm._v(" "), _c('li', [_c('img', {
	    attrs: {
	      "src": ""
	    }
	  })])])])
	}]}

/***/ },

/***/ 97:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "id": "root"
	    }
	  }, [_c('back-to-top'), _vm._v(" "), _c('my-header', {
	    attrs: {
	      "dir": _vm.dir
	    }
	  }), _vm._v(" "), _c('item'), _vm._v(" "), _c('my-footer')], 1)
	},staticRenderFns: []}

/***/ }

});