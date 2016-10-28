webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _config = __webpack_require__(2);

	var _MyHeader = __webpack_require__(9);

	var MyHeader = _interopRequireWildcard(_MyHeader);

	var _Focus = __webpack_require__(15);

	var Focus = _interopRequireWildcard(_Focus);

	var _BackToTop = __webpack_require__(20);

	var BackToTop = _interopRequireWildcard(_BackToTop);

	var _MyFooter = __webpack_require__(25);

	var MyFooter = _interopRequireWildcard(_MyFooter);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	__webpack_require__(3);
	__webpack_require__(30);


	Vue.component('my-header', MyHeader);
	Vue.component('focus', Focus);
	Vue.component('back-to-top', BackToTop);
	Vue.component('my-footer', MyFooter);

	new Vue({
		el: '#root',
		data: {
			DIR: _config.DIR,
			IMG: '../' + _config.IMG,
			col2: [_config.DIR.item + '?id=1602091546']
		},
		mounted: function mounted() {
			fetch(_config.DIR.api + '/items', {
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
				console.log(data);
			}).catch(function (err) {
				console.log(err);
			});
		}
	});

/***/ },

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(31);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./../../node_modules/postcss-loader/index.js!./index.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/less-loader/index.js!./../../node_modules/postcss-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "#home {\n  background: #F2F2F2;\n  overflow: hidden;\n  /*----------------------------------------------------------------------------------------------------------------------------*/\n}\n#home .navbar {\n  position: relative;\n  height: 60px;\n  background: #2378BA;\n}\n#home .navbar .container {\n  position: relative;\n  height: 60px;\n}\n#home .menu {\n  position: absolute;\n  top: 4px;\n  width: 240px;\n  overflow: hidden;\n  z-index: 1;\n}\n#home .menu-head {\n  width: 240px;\n  height: 56px;\n  background: #2784CC;\n  font-size: 18px;\n  line-height: 56px;\n  text-indent: 30px;\n  color: white;\n}\n#home .menu > li {\n  width: 240px;\n  height: 110px;\n  background: white;\n  overflow: hidden;\n}\n#home .menu .upper {\n  height: 36px;\n  margin: 10px 0 10px 15px;\n  overflow: hidden;\n}\n#home .menu .a_a {\n  float: left;\n}\n#home .menu .a_b:link {\n  color: #0088E3;\n  font-size: 20px;\n  margin-left: 5px;\n  height: 36px;\n  line-height: 36px;\n}\n#home .menu .a_b:visited {\n  color: #0088E3;\n}\n#home .menu .lower {\n  margin-left: 15px;\n}\n#home .menu .lower a:link {\n  color: #757575;\n  font-size: 13px;\n  margin-right: 15px;\n}\n#home .menu .lower a:visited {\n  color: #757575;\n  font-size: 14px;\n}\n#home .navbar .tabs {\n  position: absolute;\n  left: 260px;\n}\n#home .navbar .tabs > li {\n  position: relative;\n  float: left;\n  margin: 0 20px 0 20px;\n  font-size: 18px;\n  padding: 18px 0 5px 0;\n}\n#home .navbar .tabs > li:hover {\n  border-bottom: 4px solid white;\n}\n#home .navbar .tabs a:link {\n  color: white;\n}\n#home .navbar .tabs a:visited {\n  color: white;\n}\n#home .box2 {\n  width: 960px;\n  margin-bottom: 50px;\n  margin-top: 30px;\n  overflow: hidden;\n}\n#home .box2 a:link {\n  color: white;\n}\n#home .box2 a:visited {\n  color: white;\n}\n#home .box2 .col1 {\n  float: left;\n}\n#home .box2 .col1 li {\n  width: 192px;\n  height: 96px;\n  color: white;\n  overflow: hidden;\n}\n#home .box2 .col1 li p:nth-child(1) {\n  margin: 15px 0 0 15px;\n}\n#home .box2 .col1 li p:nth-child(2) {\n  margin: 0 0 0 15px;\n  font-size: 80%;\n}\n#home .box2 .col1 li:nth-child(1) {\n  background: #FA881E;\n}\n#home .box2 .col1 li:nth-child(2) {\n  background: #2378B9;\n}\n#home .box2 .col1 li:nth-child(3) {\n  background: #49B67C;\n}\n#home .box2 .col1 li:nth-child(4) {\n  background: #1A9EA5;\n}\n#home .box2 .upper {\n  margin: 15px 0 0 20px;\n  overflow: hidden;\n}\n#home .box2 .upper img {\n  width: 36px;\n}\n#home .box2 .title {\n  height: 36px;\n  line-height: 36px;\n  font-size: 18px;\n  margin-left: 5px;\n}\n#home .box2 .icon {\n  float: left;\n}\n#home .box2 .lower {\n  margin: 0 0 0 15px;\n  font-size: 14px;\n}\n#home .box2 .col2 dt {\n  float: left;\n  width: 383px;\n  height: 186px;\n  border-bottom: 1px solid #E9E9E9;\n  border-right: 1px solid #E9E9E9;\n  border-top: 1px solid #E9E9E9;\n}\n#home .box2 .col2 dt:hover {\n  position: relative;\n  box-shadow: 0 0 10px grey;\n}\n#home .box2 .col2 dd {\n  float: left;\n  width: 191px;\n  height: 195px;\n  border-bottom: 1px solid #E9E9E9;\n  border-right: 1px solid #E9E9E9;\n}\n#home .box2 .col2 dd:hover {\n  position: relative;\n  box-shadow: 0 0 10px grey;\n}\n#home .showcase {\n  height: 480px;\n  margin-bottom: 50px;\n}\n#home .showcase li {\n  box-shadow: 0 0 2px grey;\n  position: relative;\n}\n#home .showcase li:hover {\n  box-shadow: 0 0 5px grey;\n}\n#home .showcase .left a:link {\n  width: 100%;\n  height: 100%;\n  color: black;\n  display: block;\n  z-index: 2;\n}\n#home .showcase .left a:visited {\n  color: black;\n}\n#home .showcase .right a:link {\n  width: 100%;\n  height: 100%;\n  color: black;\n  display: block;\n  z-index: 2;\n}\n#home .showcase .right a:visited {\n  color: black;\n}\n#home .showcase .words {\n  position: absolute;\n  top: 20px;\n  left: 30px;\n}\n#home .showcase .name {\n  font-size: 20px;\n}\n#home .showcase .desc {\n  font-size: 14px;\n  color: grey;\n}\n#home .showcase .price {\n  font-size: 22px;\n  font-weight: bold;\n  margin-top: 10px;\n}\n#home .showcase .left {\n  float: left;\n  width: 325px;\n  margin: 7px 10px 0 0;\n}\n#home .showcase .left > li:first-child {\n  width: 325px;\n  height: 250px;\n  margin: 0 0 10px 0;\n}\n#home .showcase .left > li:last-child {\n  width: 325px;\n  height: 200px;\n  margin: 0 0 0 0;\n}\n#home .showcase .middle {\n  float: left;\n  width: 325px;\n}\n#home .showcase .middle > li:first-child {\n  height: 120px;\n  padding: 30px 0 30px 0;\n  background: #FA881E;\n}\n#home .showcase .middle > li:last-child {\n  width: 325px;\n  height: 287px;\n}\n#home .showcase .middle_left {\n  float: left;\n  width: 40%;\n  height: 100%;\n  border-right: 1px solid white;\n}\n#home .showcase .middle_left .icon {\n  width: 88px;\n  margin: auto;\n  display: block;\n}\n#home .showcase .middle_left .title {\n  font-size: 20px;\n  text-align: center;\n}\n#home .showcase .middle_left .title a:visited {\n  color: white;\n}\n#home .showcase .middle_right {\n  overflow: hidden;\n}\n#home .showcase .middle_right .list a:link {\n  color: white;\n  font-size: 14px;\n  margin-left: 20px;\n}\n#home .showcase .middle_right .list a:visited {\n  color: white;\n}\n#home .showcase .middle_right .list a:hover {\n  text-decoration: underline;\n}\n#home .showcase .more {\n  width: 100px;\n  height: 30px;\n  margin: 20px 0 0 20px;\n  border-radius: 15px;\n  background: white;\n  display: block;\n  font-size: 14px;\n  line-height: 30px;\n  text-align: center;\n  color: #FA881E;\n}\n#home .showcase .right {\n  float: left;\n  width: 325px;\n  margin: 7px 0 0 10px;\n}\n#home .showcase .right > li:first-child {\n  width: 325px;\n  height: 200px;\n  margin: 0 0 10px 0;\n}\n#home .showcase .right > li:last-child {\n  width: 325px;\n  height: 250px;\n  margin: 0 0 0 0;\n}\n", ""]);

	// exports


/***/ }

});