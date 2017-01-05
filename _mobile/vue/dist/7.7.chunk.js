webpackJsonp([7],{

/***/ 48:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(49);
	__vue_script__ = __webpack_require__(50);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\lib\\MorphingPhones.vue: named exports in *.vue files are ignored.");
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
	    var id = "_v-3ed9078c/MorphingPhones.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 49:
1,

/***/ 50:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		mounted: function mounted() {
			var script = document.createElement('script');
			script.src = '../../vendor/svg-morpheus.js';
			script.addEventListener('load', function () {
				function App() {
					this.CONFIG = {
						duration: 1000,
						easing: 'elastic-out',
						rotation: 'none'
					};
					this.M = new SVGMorpheus('#mobiltelefonens', this.CONFIG);
					this.phones = [{ id: 'a' }, { id: 'b' }, { id: 'c', easing: 'quart-in-out', duration: 500 }, { id: 'd' }, { id: 'e' }, { id: 'f', easing: 'quart-in-out', duration: 500 }, { id: 'g' }, { id: 'h' }, { id: 'i' }, { id: 'j' }, { id: 'k' }];
					this.current = -1;
					this.init();
				}
				App.prototype = {
					init: function init() {
						var self = this;
						this.update();
						setInterval(function () {
							self.update();
						}, 1000);
					},
					update: function update() {
						if (this.current < this.phones.length - 1) {
							this.current++;
						} else {
							this.current = 0;
						}
						var phone = this.phones[this.current];
						this.M.to(phone.id, {
							easing: phone.easing || 'elastic-out',
							duration: phone.duration || 1000
						});
					}
				};
				new App();
			});
			document.querySelector('body').appendChild(script);
		}
	};

/***/ },

/***/ 51:
/***/ function(module, exports) {

	module.exports = "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class=\"MorphingPhones\" _v-3ed9078c=\"\">\n\t<svg id=\"mobiltelefonens\" viewBox=\"0 0 100 300\" _v-3ed9078c=\"\">\n\n\t\t<g id=\"a\" style=\"display: none;\" _v-3ed9078c=\"\">\n\t\t\t<path g=\"\" d=\"M 26 70C 26 70 59 70 59 70 59 70 64 45 64 45 64 45 64 6 64 6 64 6 69 6 69 6 69 6 69 45 69 45 69 45 73 70 73 70 73 70 76 70.75 76 74 76 75.75 76 125.33 76 125.33 76 125.33 76 153.83 76 153.83 76 153.83 76 290 76 290 76 290 75.5 294 73 294 72.25 294 26 294 26 294 23.37 294 23 290 23 290 23 290 23 154.17 23 154.17 23 154.17 23 125.5 23 125.5 23 125.5 23 74 23 74 23 70.75 26 70 26 70Z\" fill=\"rgb(45,44,46)\" _v-3ed9078c=\"\"></path>\n\t\t\t<rect x=\"28\" y=\"125\" width=\"42\" height=\"29\" fill=\"rgb(255,255,255)\" _v-3ed9078c=\"\"></rect>\n\t\t</g>\n\n\t\t<g id=\"b\" style=\"display: none;\" _v-3ed9078c=\"\">\n\t\t\t<path g=\"\" d=\"M 48.5 134.5C 67.33 134.33 73 136 73 136 73 136 73 111 73 111 73 111 73 82 73 82 73 82 79 82 79 82 79 82 79 111 79 111 79 111 79 135 79 135 79 135 79 139 79 139 79 139 79 164 79 164 79 164 79 208.67 79 208.67 79 208.67 79 290 79 290 79 290 78.12 293.87 75 294 73.25 294 24 294 24 294 21.13 294 20 290 20 290 20 290 20 208.5 20 208.5 20 208.5 20 163.83 20 163.83 20 163.83 20 139 20 139 20 139 30.67 134.5 48.5 134.5Z\" fill=\"rgb(45,44,46)\" _v-3ed9078c=\"\"></path>\n\t\t\t<rect x=\"25\" y=\"164\" width=\"47\" height=\"44\" fill=\"rgb(255,255,255)\" _v-3ed9078c=\"\"></rect>\n\t\t</g>\n\n\t\t<g id=\"c\" style=\"display: none;\" data-easing=\"quart-in-out\" data-duration=\"500\" _v-3ed9078c=\"\">\n\t\t\t<path g=\"\" d=\"M 34 159C 36.94 158 45 157 45 157 45 157 49 157 49 157 49 157 50 157 50 157 50 157 51 157 51 157 51 157 55 157 55 157 55 157 62.44 157.88 65 159 65.87 159.44 69.75 160.56 72 165 75.63 172.63 76.88 176.38 77 197.17 77.38 220.75 73 233.33 73 233.33 73 233.33 73 290 73 290 73.06 293.62 70 294 70 294 70 294 30 294 30 294 27.44 294 27 290 27 290 27 290 27 232.83 27 232.83 27 232.83 23 218.12 23 197.17 23.12 175.63 25.63 170.88 28 165 30.5 160.37 34 159 34 159Z\" fill=\"rgb(45,44,46)\" _v-3ed9078c=\"\"></path>\n\t\t\t<rect x=\"31\" y=\"194\" width=\"37\" height=\"26\" fill=\"rgb(255,255,255)\" _v-3ed9078c=\"\"></rect>\n\t\t</g>\n\n\t\t<g id=\"d\" style=\"display: none;\" _v-3ed9078c=\"\">\n\t\t\t<path g=\"\" d=\"M 33 172C 36.33 170 40 170 40 170 40 170 46 170 46 170 46 170 50 170 50 170 50 170 53 170 53 170 53 170 60 170 60 170 60 170 64.06 170.09 67 172 68.97 173.72 69.83 174.5 72 181 74.67 189.83 74 197.33 74 197.33 74 197.33 74 225.83 74 225.83 74 225.83 74 290 74 290 74.06 293.12 71 294 71 294 71 294 29 294 29 294 26.44 293.94 26 290 26 290 26 290 26 226.17 26 226.17 26 226.17 26 197.5 26 197.5 26 197.5 26.17 188.17 28 182 29.67 175.67 30.97 173.47 33 172Z\" fill=\"rgb(45,44,46)\" _v-3ed9078c=\"\"></path>\n\t\t\t<rect x=\"31\" y=\"196\" width=\"37\" height=\"25\" fill=\"rgb(255,255,255)\" _v-3ed9078c=\"\"></rect>\n\t\t</g>\n\n\t\t<g id=\"e\" style=\"display: none;\" _v-3ed9078c=\"\">\n\t\t\t<path g=\"\" d=\"M 32 165C 32 165 43 165 43 165 43 165 43 178 43 178 43 178 43 182 43 182 43 182 43 186 43 186 43 186 43 193 43 193 43 193 46.63 191.94 55 192 65 192 74 196 74 196 74 196 74 216.33 74 216.33 74 216.33 74 244.83 74 244.83 74 244.83 74 277 74 277 74.12 289 71 294 71 294 71 294 29 294 29 294 29 294 26 287.88 26 277 26 276.22 26 245.17 26 245.17 26 245.17 26 216.5 26 216.5 26 216.5 26 196 26 196 26 196 32 165 32 165Z\" fill=\"rgb(45,44,46)\" _v-3ed9078c=\"\"></path>\n\t\t\t<rect x=\"31\" y=\"206\" width=\"37\" height=\"25\" fill=\"rgb(255,255,255)\" _v-3ed9078c=\"\"></rect>\n\t\t</g>\n\n\t\t<g id=\"f\" style=\"display: none;\" data-easing=\"quart-in-out\" data-duration=\"500\" _v-3ed9078c=\"\">\n\t\t\t<path g=\"\" d=\"M 31.16 192.73C 31.16 192.73 31.22 192.67 31.22 192.67 31.22 192.67 31.31 192.61 31.31 192.61 31.31 192.61 39.48 190 48.94 190 60.08 189.98 68.62 192.59 68.62 192.59 68.62 192.59 68.69 192.67 68.69 192.67 68.69 192.67 68.77 192.8 68.77 192.8 68.77 192.8 68.8 192.92 68.8 192.92 68.8 192.92 68.83 193 68.83 193 68.83 193 72 232.06 72 240.83 72 276 69 292 69 292 69 292 63.38 294.94 51 295 49.12 295.25 48 295 48 295 35.5 295 30 292 30 292 30 292 27 275.81 27 241.17 27 231.94 31.03 192.94 31.03 192.94 31.03 192.94 31.08 192.83 31.08 192.83 31.08 192.83 31.16 192.73 31.16 192.73Z\" fill=\"rgb(45,44,46)\" _v-3ed9078c=\"\"></path>\n\t\t\t<rect x=\"33\" y=\"212\" width=\"33\" height=\"23\" fill=\"rgb(255,255,255)\" _v-3ed9078c=\"\"></rect>\n\t\t</g>\n\n\t\t<g id=\"g\" style=\"display: none;\" _v-3ed9078c=\"\">\n\t\t\t<path g=\"\" d=\"M 28 189C 28 189 35 189 35 189 35 189 42 189 42 189 42 189 49 189 49 189 49 189 56 189 56 189 56 189 64 189 64 189 64 189 72 189 72 189 74.81 190.44 75 193 75 193 75 193 75 244.33 75 244.33 75 244.33 75 272.83 75 272.83 75 272.83 75 290 75 290 73.94 293.31 72 294 72 294 72 294 28 294 28 294 25.69 293.06 25 290 25 290 25 290 25 273.17 25 273.17 25 273.17 25 244.5 25 244.5 25 244.5 25 193 25 193 25.63 190.13 28 189 28 189Z\" fill=\"rgb(45,44,46)\" _v-3ed9078c=\"\"></path>\n\t\t\t<rect x=\"30\" y=\"203\" width=\"40\" height=\"52\" fill=\"rgb(255,255,255)\" _v-3ed9078c=\"\"></rect>\n\t\t</g>\n\n\t\t<g id=\"h\" style=\"display: none;\" _v-3ed9078c=\"\">\n\t\t\t<path g=\"\" d=\"M 21 170C 21 170 28 170 28 170 28 170 35 170 35 170 35 170 42 170 42 170 42 170 49 170 49 170 49 170 57 170 57 170 57 170 79 170 79 170 81.81 171.44 82 174 82 174 82 174 82 244.33 82 244.33 82 244.33 82 272.83 82 272.83 82 272.83 82 290 82 290 80.94 293.31 79 294 79 294 79 294 21 294 21 294 18.69 293.06 18 290 18 290 18 290 18 273.17 18 273.17 18 273.17 18 244.5 18 244.5 18 244.5 18 174 18 174 18.62 171.13 21 170 21 170Z\" fill=\"rgb(45,44,46)\" _v-3ed9078c=\"\"></path>\n\t\t\t<rect x=\"23\" y=\"190\" width=\"54\" height=\"83\" fill=\"rgb(255,255,255)\" _v-3ed9078c=\"\"></rect>\n\t\t</g>\n\n\t\t<g id=\"i\" style=\"display: none;\" _v-3ed9078c=\"\">\n\t\t\t<path g=\"\" d=\"M 18 158C 18 158 25 158 25 158 25 158 32 158 32 158 32 158 39 158 39 158 39 158 46 158 46 158 46 158 54 158 54 158 54 158 82 158 82 158 84.81 159.44 85 162 85 162 85 162 85 244.33 85 244.33 85 244.33 85 272.83 85 272.83 85 272.83 85 290 85 290 83.94 293.31 82 294 82 294 82 294 18 294 18 294 15.69 293.06 15 290 15 290 15 290 15 273.17 15 273.17 15 273.17 15 244.5 15 244.5 15 244.5 15 162 15 162 15.63 159.13 18 158 18 158Z\" fill=\"rgb(45,44,46)\" _v-3ed9078c=\"\"></path>\n\t\t\t<rect x=\"20\" y=\"175\" width=\"60\" height=\"100\" fill=\"rgb(255,255,255)\" _v-3ed9078c=\"\"></rect>\n\t\t</g>\n\n\t\t<g id=\"j\" style=\"display: none;\" _v-3ed9078c=\"\">\n\t\t\t<path g=\"\" d=\"M 18 149C 18 149 25 149 25 149 25 149 32 149 32 149 32 149 39 149 39 149 39 149 46 149 46 149 46 149 54 149 54 149 54 149 82 149 82 149 84.81 150.44 85 153 85 153 85 153 85 244.33 85 244.33 85 244.33 85 272.83 85 272.83 85 272.83 85 290 85 290 83.94 293.31 82 294 82 294 82 294 18 294 18 294 15.69 293.06 15 290 15 290 15 290 15 273.17 15 273.17 15 273.17 15 244.5 15 244.5 15 244.5 15 153 15 153 15.63 150.13 18 149 18 149Z\" fill=\"rgb(45,44,46)\" _v-3ed9078c=\"\"></path>\n\t\t\t<rect x=\"20\" y=\"161\" width=\"60\" height=\"120\" fill=\"rgb(255,255,255)\" _v-3ed9078c=\"\"></rect>\n\t\t</g>\n\n\t\t<g id=\"k\" style=\"display: none;\" _v-3ed9078c=\"\">\n\t\t\t<path g=\"\" d=\"M 6 109C 6 109 61 109 61 109 61 109 68 109 68 109 68 109 75 109 75 109 75 109 82 109 82 109 82 109 90 109 90 109 90 109 93 109 93 109 95.81 110.44 96 113 96 113 96 113 96 244.33 96 244.33 96 244.33 96 272.83 96 272.83 96 272.83 96 290 96 290 94.94 293.31 93 294 93 294 93 294 6 294 6 294 3.69 293.06 3 290 3 290 3 290 3 273.17 3 273.17 3 273.17 3 244.5 3 244.5 3 244.5 3 113 3 113 3.62 110.12 6 109 6 109Z\" fill=\"rgb(45,44,46)\" _v-3ed9078c=\"\"></path>\n\t\t\t<rect x=\"8\" y=\"126\" width=\"83\" height=\"147\" fill=\"rgb(255,255,255)\" _v-3ed9078c=\"\"></rect>\n\t\t</g>\n\n\t\t<g id=\"l\" style=\"display: none;\" _v-3ed9078c=\"\">\n\t\t\t<path g=\"\" d=\"M50,50 L60,60 L60,50 L50,50\" fill=\"rgb(45,44,46)\" _v-3ed9078c=\"\"></path>\n\t\t\t<rect x=\"8\" y=\"126\" width=\"83\" height=\"147\" fill=\"rgb(255,255,255)\" _v-3ed9078c=\"\"></rect>\n\t\t</g>\n\n\t</svg>\n\n\n\t<div id=\"main\" _v-3ed9078c=\"\">\n\t\t<div class=\"timeline\" _v-3ed9078c=\"\">\n\t\t\t<ul class=\"timeline-list\" _v-3ed9078c=\"\">\n\t\t\t\t<li class=\"timeline-item -date\" _v-3ed9078c=\"\">\n\t\t\t\t\t<span _v-3ed9078c=\"\">1990</span>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"timeline-item\" _v-3ed9078c=\"\"></li>\n\t\t\t\t<li class=\"timeline-item\" _v-3ed9078c=\"\"></li>\n\t\t\t\t<li class=\"timeline-item\" _v-3ed9078c=\"\"></li>\n\t\t\t\t<li class=\"timeline-item\" _v-3ed9078c=\"\"></li>\n\t\t\t\t<li class=\"timeline-item -date\" _v-3ed9078c=\"\">\n\t\t\t\t\t<span _v-3ed9078c=\"\">1995</span>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"timeline-item\" _v-3ed9078c=\"\"></li>\n\t\t\t\t<li class=\"timeline-item\" _v-3ed9078c=\"\"></li>\n\t\t\t\t<li class=\"timeline-item\" _v-3ed9078c=\"\"></li>\n\t\t\t\t<li class=\"timeline-item\" _v-3ed9078c=\"\"></li>\n\t\t\t\t<li class=\"timeline-item -date\" _v-3ed9078c=\"\">\n\t\t\t\t\t<span _v-3ed9078c=\"\">2000</span>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"timeline-item\" _v-3ed9078c=\"\"></li>\n\t\t\t\t<li class=\"timeline-item\" _v-3ed9078c=\"\"></li>\n\t\t\t\t<li class=\"timeline-item\" _v-3ed9078c=\"\"></li>\n\t\t\t\t<li class=\"timeline-item\" _v-3ed9078c=\"\"></li>\n\t\t\t\t<li class=\"timeline-item -date\" _v-3ed9078c=\"\">\n\t\t\t\t\t<span _v-3ed9078c=\"\">2005</span>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"timeline-item\" _v-3ed9078c=\"\"></li>\n\t\t\t\t<li class=\"timeline-item\" _v-3ed9078c=\"\"></li>\n\t\t\t\t<li class=\"timeline-item\" _v-3ed9078c=\"\"></li>\n\t\t\t\t<li class=\"timeline-item\" _v-3ed9078c=\"\"></li>\n\t\t\t\t<li class=\"timeline-item -date\" _v-3ed9078c=\"\">\n\t\t\t\t\t<span _v-3ed9078c=\"\">2010</span>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"timeline-item\" _v-3ed9078c=\"\"></li>\n\t\t\t\t<li class=\"timeline-item\" _v-3ed9078c=\"\"></li>\n\t\t\t\t<li class=\"timeline-item\" _v-3ed9078c=\"\"></li>\n\t\t\t\t<li class=\"timeline-item\" _v-3ed9078c=\"\"></li>\n\t\t\t\t<li class=\"timeline-item -date\" _v-3ed9078c=\"\">\n\t\t\t\t\t<span _v-3ed9078c=\"\">2015</span>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>\n";

/***/ }

});