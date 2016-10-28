webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _config = __webpack_require__(2);

	__webpack_require__(3);

	__webpack_require__(32);

	var _MyHeader = __webpack_require__(9);

	var MyHeader = _interopRequireWildcard(_MyHeader);

	var _Focus = __webpack_require__(15);

	var Focus = _interopRequireWildcard(_Focus);

	var _BackToTop = __webpack_require__(20);

	var BackToTop = _interopRequireWildcard(_BackToTop);

	var _MyFooter = __webpack_require__(25);

	var MyFooter = _interopRequireWildcard(_MyFooter);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	Vue.component('my-header', MyHeader);
	Vue.component('focus', Focus);
	Vue.component('back-to-top', BackToTop);
	Vue.component('my-footer', MyFooter);

	new Vue({
		el: '#root',
		data: {
			DIR: _config.DIR,
			id: '',
			item: {
				name: '--',
				price: 0
			},
			current: 0,
			quantity: 1
		},
		mounted: function mounted() {
			this.get_id();
			this.get_item();
		},
		methods: {
			get_id: function get_id() {
				var id = location.href.match(/id=.+/)[0].split(/&/)[0].replace(/id=/, '');
				this.id = id;
			},
			get_item: function get_item() {
				var self = this;
				fetch(_config.DIR.api + '/item/', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					mode: "cors",
					body: JSON.stringify({
						id: this.id
					})
				}).then(function (res) {
					if (res.status === 200) {
						return res.json();
					} else {
						//return Promise.reject(res.json())
					}
				}).then(function (data) {
					data.price = Number(data.price);
					console.log(data);
					self.item = data;
				}).catch(function (err) {
					console.log(err);
				});
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

/***/ 32:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(33);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
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

/***/ 33:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "#ITEM {\n  background: #127BAB;\n  overflow: hidden;\n}\n#ITEM .itemID {\n  display: none;\n}\n#ITEM .item {\n  padding: 0 0 30px 0;\n  margin-top: 30px;\n  background: white;\n  overflow: hidden;\n}\n#ITEM .item .header {\n  margin: 15px 20px 10px 20px;\n  padding-bottom: 10px;\n  border-bottom: 1px solid lightgrey;\n}\n#ITEM .item .header a:link {\n  color: black;\n}\n#ITEM .item .header a:visited {\n  color: black;\n}\n#ITEM .item .images {\n  float: left;\n  margin: 0 0 0 20px;\n}\n#ITEM .item .images .thumbnail {\n  width: 464px;\n  height: 464px;\n  padding: 2px;\n  border: 1px solid lightgrey;\n}\n#ITEM .item .images .thumbnail img {\n  width: 100%;\n}\n#ITEM .item .images .tabs {\n  width: 256px;\n  margin: auto;\n}\n#ITEM .item .images .tabs li {\n  float: left;\n  width: 54px;\n  height: 54px;\n  margin: 4px 2px 4px 2px;\n  padding: 2px;\n  border: 1px solid lightgrey;\n}\n#ITEM .item .images .tabs li img {\n  width: 100%;\n}\n#ITEM .item .images .tabs li:hover {\n  background: #DD4A4D;\n}\n#ITEM .information {\n  float: left;\n  width: 470px;\n  margin: 0 0 0 20px;\n  overflow: hidden;\n}\n#ITEM .information .name {\n  padding: 15px 0 15px 0;\n  font-size: 200%;\n}\n#ITEM .information .priceWrapper {\n  padding: 10px 0 10px 0;\n  border-bottom: 1px solid lightgrey;\n  color: #DD4A4D;\n  font-size: 40px;\n  font-family: helvetica;\n}\n#ITEM .information .priceWrapper .price {\n  font-size: 50px;\n  color: #DF4949;\n}\n#ITEM .information .buy {\n  float: left;\n  width: 187px;\n  height: 45px;\n  margin: 0 20px 0 0;\n  line-height: 45px;\n  text-align: center;\n  background: #DD4A4D;\n  cursor: pointer;\n  color: white;\n  border-radius: 5px;\n}\n#ITEM .information .buy:hover {\n  background: #CC3134;\n}\n#ITEM .information .toCart {\n  float: left;\n  width: 183px;\n  height: 41px;\n  line-height: 41px;\n  text-align: center;\n  background: white;\n  border: 2px solid #DD4A4D;\n  color: #DD4A4D;\n  cursor: pointer;\n  border-radius: 5px;\n}\n#ITEM .information .toCart:hover {\n  color: #CC3134;\n  border: 2px solid #CC3134;\n}\n#ITEM .shuliang {\n  padding: 30px 0 30px 0;\n}\n#ITEM .shuliang p {\n  float: left;\n  height: 30px;\n  vertical-align: top;\n  line-height: 30px;\n}\n#ITEM .shuliang .counter {\n  overflow: hidden;\n}\n#ITEM .shuliang .counter .minus,\n#ITEM .shuliang .counter .plus {\n  float: left;\n  width: 28px;\n  height: 28px;\n  border: 1px solid lightgrey;\n  line-height: 28px;\n  text-align: center;\n  background: #F4F4F4;\n  cursor: pointer;\n}\n#ITEM .shuliang .counter .quantity {\n  float: left;\n  width: 49px;\n  height: 28px;\n  border-top: 1px solid lightgrey;\n  border-bottom: 1px solid lightgrey;\n  line-height: 28px;\n  text-align: center;\n}\n#ITEM .shuliang .counter .minus:hover,\n#ITEM .shuliang .counter .plus:hover {\n  border: 1px solid #DD4A4D;\n  color: #DD4A4D;\n}\n#ITEM .box {\n  margin: 30px auto 40px auto;\n}\n#ITEM .box .box-header {\n  height: 60px;\n  background: white;\n  overflow: hidden;\n  border-bottom: 1px solid #BABABA;\n}\n#ITEM .box .box-header > h1 {\n  float: left;\n  margin: 5px 20px 0 30px;\n  color: white;\n}\n#ITEM .box .box-header > p {\n  float: right;\n  margin: 20px 20px 0 0;\n  color: white;\n}\n#ITEM .box .tab > li {\n  float: left;\n  margin: 20px;\n  color: #127BAB;\n  cursor: pointer;\n}\n#ITEM .box .tab > li.active {\n  border-bottom: 4px solid orange;\n}\n#ITEM .box .content {\n  position: relative;\n}\n#ITEM .box .content > li {\n  width: 960px;\n  background: white;\n  padding: 20px;\n}\n#ITEM .box .content img {\n  margin-bottom: 20px;\n}\n", ""]);

	// exports


/***/ }

});