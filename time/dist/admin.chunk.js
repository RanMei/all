webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _config = __webpack_require__(2);

	__webpack_require__(3);


	Vue.component('items', __webpack_require__(7));

	new Vue({
		el: '#root',
		data: {
			items: []
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
			}).then(function (data) {
				self.items = data;
			}).catch(function (err) {
				console.log(err);
			});
		},
		template: '<items :items="items"></items>'
	});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	__webpack_require__(8);
	__vue_script__ = __webpack_require__(11);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] time\\src\\components\\Items.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(12);
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
	    var id = "./Items.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-ec3c9ab8&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Items.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-ec3c9ab8&scoped=true!./../../../node_modules/less-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./Items.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "ul[_v-ec3c9ab8] {\n  overflow: hidden;\n}\nul li[_v-ec3c9ab8] {\n  float: left;\n  width: 20%;\n  height: 30px;\n  line-height: 30px;\n  list-style: none;\n}\nul button[_v-ec3c9ab8] {\n  float: left;\n}\n.row[_v-ec3c9ab8]:hover {\n  background: lightblue;\n}\n", ""]);

	// exports


/***/ },
/* 10 */,
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		props: ['items'],
		mounted: function mounted() {
			console.log(this.items);
		},
		methods: function methods() {}
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"ITEMS\" _v-ec3c9ab8=\"\">\n\t<ul class=\"row\" _v-ec3c9ab8=\"\">\n\t\t<li _v-ec3c9ab8=\"\">id</li>\n\t\t<li _v-ec3c9ab8=\"\">name</li>\n\t\t<li _v-ec3c9ab8=\"\">price</li>\n\t</ul>\n\t<ul class=\"row\" v-for=\"a in items\" _v-ec3c9ab8=\"\">\n\t\t<li _v-ec3c9ab8=\"\">{{a.id}}</li>\n\t\t<li _v-ec3c9ab8=\"\">{{a.name}}</li>\n\t\t<li _v-ec3c9ab8=\"\">{{a.price}}</li>\n\t\t<button class=\"edit\" _v-ec3c9ab8=\"\">edit</button>\n\t</ul>\n</div>\n";

/***/ }
]);