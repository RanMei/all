webpackJsonp([4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _config = __webpack_require__(2);

	__webpack_require__(3);

	__webpack_require__(39);

	var _MyHeader = __webpack_require__(15);

	var MyHeader = _interopRequireWildcard(_MyHeader);

	var _Focus = __webpack_require__(20);

	var Focus = _interopRequireWildcard(_Focus);

	var _BackToTop = __webpack_require__(25);

	var BackToTop = _interopRequireWildcard(_BackToTop);

	var _MyFooter = __webpack_require__(30);

	var MyFooter = _interopRequireWildcard(_MyFooter);

	var _Showcase = __webpack_require__(41);

	var _Showcase2 = _interopRequireDefault(_Showcase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	Vue.component('my-header', MyHeader);
	Vue.component('focus', Focus);
	Vue.component('back-to-top', BackToTop);
	Vue.component('my-footer', MyFooter);

	Vue.component('showcase', _Showcase2.default);

	new Vue({
		el: '#root',
		data: {
			DIR: _config.DIR,

			items: [],

			item: {},
			current: 0
		},
		mounted: function mounted() {
			var self = this;
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
					self.items.push(a);
				});
			}).catch(function (err) {
				console.log(err);
			});
		},
		methods: {
			pick: function pick(n) {
				this.current = n;
			}
		}
	});

/***/ },

/***/ 39:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(40);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./../../../node_modules/postcss-loader/index.js!./search.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/less-loader/index.js!./../../../node_modules/postcss-loader/index.js!./search.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 40:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "#SEARCH {\n  height: 1000px;\n  background: #127BAB;\n  overflow: hidden;\n}\n#SEARCH .center {\n  width: 970px;\n  background: white;\n  padding: 0 15px 0 15px;\n  margin-top: 80px;\n}\n#SEARCH .center .all {\n  padding: 20px 0 10px 0;\n  border-bottom: 1px solid lightgrey;\n  color: grey;\n}\n#SEARCH .center .all a:link {\n  color: black;\n}\n#SEARCH .center .all a:visited {\n  color: black;\n}\n#SEARCH .center .Row {\n  padding: 10px 0 10px 0;\n  border-bottom: 1px solid lightgrey;\n}\n#SEARCH .center .Row .title {\n  float: left;\n  margin-right: 15px;\n  color: grey;\n  font-size: 15px;\n}\n#SEARCH .center .Row a:link {\n  color: black;\n  margin-right: 15px;\n}\n#SEARCH .center .Row a:visited {\n  color: black;\n}\n#SEARCH .center .Row a:hover {\n  color: maroon;\n}\n", ""]);

	// exports


/***/ },

/***/ 41:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	__webpack_require__(42);
	__vue_script__ = __webpack_require__(44);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\components\\Showcase.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(45);
	module.exports = __vue_script__ || {};
	if (module.exports.__esModule) module.exports = module.exports.default;
	if (__vue_template__) {
	  (typeof module.exports === "function" ? module.exports.options || (module.exports.options = {}) : module.exports).template = __vue_template__;
	}
	if (false) {
	  (function () {
	    module.hot.accept();
	    var hotAPI = require("vue-hot-reload-api");
	    hotAPI.install(require("vue"), false);
	    if (!hotAPI.compatible) return;
	    var id = "./Showcase.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 42:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(43);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-1d2a37f9&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Showcase.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-1d2a37f9&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Showcase.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 43:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".Showcase[_v-1d2a37f9] {\n  width: 1000px;\n  margin: auto;\n  padding: 10px 0;\n  background: white;\n  overflow: hidden;\n}\n.Showcase .item__[_v-1d2a37f9] {\n  display: block;\n  box-sizing: border-box;\n  float: left;\n  width: 240px;\n  margin: 5px;\n  padding: 5px;\n  border: 3px solid transparent;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n}\n.Showcase .item__[_v-1d2a37f9]:link {\n  color: black;\n}\n.Showcase .item__[_v-1d2a37f9]:visited {\n  color: black;\n}\n.Showcase .item__[_v-1d2a37f9]:hover {\n  border: 3px solid #c40000;\n}\n.Showcase .item__ .thumb[_v-1d2a37f9] {\n  width: 224px;\n  height: 224px;\n}\n.Showcase .item__ .price[_v-1d2a37f9] {\n  font-size: 20px;\n  color: #c40000;\n}\n", ""]);

	// exports


/***/ },

/***/ 44:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: ['items'],
		computed: {
			DIR: function DIR() {
				return this.$root.$data.DIR;
			}
		}
	};

/***/ },

/***/ 45:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"Showcase\" _v-1d2a37f9=\"\">\n\t<a class=\"item__\" v-for=\"a in items\" :href=\" DIR.root+'/item.html?id='+a.id \" _v-1d2a37f9=\"\">\n\t\t<img class=\"thumb\" _v-1d2a37f9=\"\">\n\t\t<p class=\"price\" _v-1d2a37f9=\"\">￥{{a.price}}</p>\n\t\t<p class=\"name\" _v-1d2a37f9=\"\">{{a.name}}</p>\n\t</a>\n</div>\n";

/***/ }

});