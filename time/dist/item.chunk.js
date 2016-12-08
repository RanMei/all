webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _config = __webpack_require__(2);

	__webpack_require__(39);

	__webpack_require__(66);

	var _MyHeader = __webpack_require__(44);

	var MyHeader = _interopRequireWildcard(_MyHeader);

	var _Focus = __webpack_require__(49);

	var Focus = _interopRequireWildcard(_Focus);

	var _BackToTop = __webpack_require__(54);

	var BackToTop = _interopRequireWildcard(_BackToTop);

	var _MyFooter = __webpack_require__(59);

	var MyFooter = _interopRequireWildcard(_MyFooter);

	var _store = __webpack_require__(30);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	Vue.component('my-header', MyHeader);
	Vue.component('focus', Focus);
	Vue.component('back-to-top', BackToTop);
	Vue.component('my-footer', MyFooter);

	new Vue({
		el: '#root',
		store: _store.store,
		components: {
			TabbedBox: __webpack_require__(68)
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

/***/ 66:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(67);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(41)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./../../../node_modules/postcss-loader/index.js!./item.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./../../../node_modules/postcss-loader/index.js!./item.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 67:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports


	// module
	exports.push([module.id, "#ITEM {\n  background: #127BAB;\n  overflow: hidden;\n}\n#ITEM .itemID {\n  display: none;\n}\n#ITEM .item {\n  padding: 0 0 30px 0;\n  margin-top: 30px;\n  background: white;\n  overflow: hidden;\n}\n#ITEM .item .header {\n  margin: 15px 20px 10px 20px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid lightgrey;\n}\n#ITEM .item .header a:link {\n  color: black;\n}\n#ITEM .item .header a:visited {\n  color: black;\n}\n#ITEM .item .images {\n  float: left;\n  margin: 0 0 0 20px;\n}\n#ITEM .item .images .thumbnail {\n  width: 464px;\n  height: 464px;\n  padding: 2px;\n  border: 1px solid lightgrey;\n}\n#ITEM .item .images .thumbnail img {\n  width: 100%;\n}\n#ITEM .item .images .tabs {\n  width: 256px;\n  margin: auto;\n}\n#ITEM .item .images .tabs li {\n  float: left;\n  width: 54px;\n  height: 54px;\n  margin: 4px 2px 4px 2px;\n  padding: 2px;\n  border: 1px solid lightgrey;\n}\n#ITEM .item .images .tabs li img {\n  width: 100%;\n}\n#ITEM .item .images .tabs li:hover {\n  background: #DD4A4D;\n}\n#ITEM .information {\n  float: left;\n  width: 470px;\n  margin: 0 0 0 20px;\n  overflow: hidden;\n}\n#ITEM .information .name {\n  padding: 15px 0 15px 0;\n  font-size: 200%;\n}\n#ITEM .information .priceWrapper {\n  padding: 10px 0 10px 0;\n  border-bottom: 1px solid lightgrey;\n  color: #DD4A4D;\n  font-size: 40px;\n  font-family: helvetica;\n}\n#ITEM .information .priceWrapper .price {\n  font-size: 50px;\n  color: #DF4949;\n}\n#ITEM .information .buy {\n  float: left;\n  width: 187px;\n  height: 45px;\n  margin: 0 20px 0 0;\n  line-height: 45px;\n  text-align: center;\n  background: #DD4A4D;\n  cursor: pointer;\n  color: white;\n  border-radius: 5px;\n}\n#ITEM .information .buy:hover {\n  background: #CC3134;\n}\n#ITEM .information .toCart {\n  float: left;\n  width: 183px;\n  height: 41px;\n  line-height: 41px;\n  text-align: center;\n  background: white;\n  border: 2px solid #DD4A4D;\n  color: #DD4A4D;\n  cursor: pointer;\n  border-radius: 5px;\n}\n#ITEM .information .toCart:hover {\n  color: #CC3134;\n  border: 2px solid #CC3134;\n}\n#ITEM .shuliang {\n  padding: 30px 0 30px 0;\n}\n#ITEM .shuliang p {\n  float: left;\n  height: 30px;\n  vertical-align: top;\n  line-height: 30px;\n}\n#ITEM .shuliang .counter {\n  overflow: hidden;\n}\n#ITEM .shuliang .counter .minus,\n#ITEM .shuliang .counter .plus {\n  float: left;\n  width: 28px;\n  height: 28px;\n  border: 1px solid lightgrey;\n  line-height: 28px;\n  text-align: center;\n  background: #F4F4F4;\n  cursor: pointer;\n}\n#ITEM .shuliang .counter .quantity {\n  float: left;\n  width: 49px;\n  height: 28px;\n  border-top: 1px solid lightgrey;\n  border-bottom: 1px solid lightgrey;\n  line-height: 28px;\n  text-align: center;\n}\n#ITEM .shuliang .counter .minus:hover,\n#ITEM .shuliang .counter .plus:hover {\n  border: 1px solid #DD4A4D;\n  color: #DD4A4D;\n}\n", ""]);

	// exports


/***/ },

/***/ 68:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(69);
	__vue_script__ = __webpack_require__(71);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\_item\\TabbedBox.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(72);
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

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(70);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-dfc8e40a&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./TabbedBox.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-dfc8e40a&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./TabbedBox.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 70:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports


	// module
	exports.push([module.id, ".TabbedBox[_v-dfc8e40a] {\n  width: 1000px;\n  margin: 30px auto 40px auto;\n}\n.TabbedBox .tabs[_v-dfc8e40a] {\n  width: 100%;\n  height: 60px;\n  background: white;\n  overflow: hidden;\n  border-bottom: 1px solid #BABABA;\n}\n.TabbedBox .tabs li[_v-dfc8e40a] {\n  float: left;\n  margin: 20px;\n  color: #127BAB;\n  cursor: pointer;\n}\n.TabbedBox .tabs li.active[_v-dfc8e40a] {\n  border-bottom: 4px solid orange;\n}\n.TabbedBox .content[_v-dfc8e40a] {\n  position: relative;\n}\n.TabbedBox .content > li[_v-dfc8e40a] {\n  box-sizing: border-box;\n  width: 100%;\n  padding: 20px;\n  background: white;\n}\n.TabbedBox .content img[_v-dfc8e40a] {\n  margin-bottom: 20px;\n}\n", ""]);

	// exports


/***/ },

/***/ 71:
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

/***/ 72:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"TabbedBox\" _v-dfc8e40a=\"\">\n\t<ul class=\"tabs\" _v-dfc8e40a=\"\">\n\t\t<li v-for=\"(a,i) in tabs\" :class=\" current===i?'active':'' \" @click=\"pick(i)\" _v-dfc8e40a=\"\">\n\t\t{{a}}</li>\n\t</ul>\n\t<ul class=\"content\" _v-dfc8e40a=\"\">\n\t\t<li class=\"imgs_detailed\" v-show=\" current===0 \" _v-dfc8e40a=\"\">\n\t\t\t<img src=\"xxxHTMLLINKxxx0.81550942060778460.8729399904293997xxx\" _v-dfc8e40a=\"\">\n\t\t\t<img src=\"xxxHTMLLINKxxx0.70193684019035390.504475421929184xxx\" _v-dfc8e40a=\"\">\n\t\t\t<img src=\"xxxHTMLLINKxxx0.88341179501969910.3436036901475594xxx\" _v-dfc8e40a=\"\">\n\t\t</li>\n\t\t<li v-show=\" current===1 \" _v-dfc8e40a=\"\">\n\t\t尚无评价晒单</li>\n\t\t<li v-show=\" current===2 \" _v-dfc8e40a=\"\">\n\t\t\t<h3 _v-dfc8e40a=\"\">退货政策</h3>\n\t\t\t<p _v-dfc8e40a=\"\">\n\t\t\t\t自实际收到商品之日起15日内可以退货。<br _v-dfc8e40a=\"\">    3C类商品：此类所退换商品要求不影响二次销售，配件完整，包装齐全（不带有店铺或商品商标logo的非密封性包装除外），商品外观无磨损，无使用痕迹，整体无磕碰。如有赠品，需如数退回。\n\t\t\t</p>\n\t\t\t<h3 _v-dfc8e40a=\"\">配送速度查询</h3>\n\t\t\t<p _v-dfc8e40a=\"\">\n\t\t\t\t1.下单成功之后，订单会随时更新您的订单状态。<br _v-dfc8e40a=\"\">\n\t\t\t\t2.您可以登录到您的时光网账户中，实时查看您订单的生产及配送情况。<br _v-dfc8e40a=\"\">\n\t\t\t\t3.订单显示已发货状态，即可看到物流信息更新显示。<br _v-dfc8e40a=\"\">\t4.当您的包裹发货时，我们将会以短信的方式附上运单号码告知您，您可以到时光网账户跟踪物流信息或者根据快递单号直接进行查询。\n\t\t\t</p>\n\t\t\t<h3 _v-dfc8e40a=\"\">服务承诺</h3>\n\t\t\t<p _v-dfc8e40a=\"\">\n\t\t\t\t1.时光网所售的产品都是官方授权，100%正品保证，您可以放心购买。<br _v-dfc8e40a=\"\">\n\t\t\t\t2.如您的商品自签收之日起15天内出现质量问题、商品破损等问题可申请退货(特殊商品除外)。<br _v-dfc8e40a=\"\">\n\t\t\t\t3.订单取消成功后，退款大约3-7个工作日内退至原支付账户。\n\t\t\t</p>\n\t\t\t<h3 _v-dfc8e40a=\"\">权利声明</h3>\n\t\t\t<p _v-dfc8e40a=\"\">\t\t\t\t\t\t\t\t\t\t\t\t\t\t时光网上的所有商品信息、客户评价、商品咨询、网友讨论等内容，是时光网重要的经营资源，未经许可，禁止非法转载使用。<br _v-dfc8e40a=\"\">\t\t\t\t注：因部分品牌会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本司不能确保客户收到的货物与网站图片、产地、附件说明完全一致。只能确保为原厂正货！并且保证与当时市场上同样主流新品一致。若本网站没有及时更新，请大家谅解！\n\t\t\t</p>\n\t\t</li>\n\t</ul>\n</div>\n";

/***/ }

});