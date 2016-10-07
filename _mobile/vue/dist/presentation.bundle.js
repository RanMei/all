webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(9);
	__webpack_require__(12);
	__webpack_require__(14);

	var technology = __webpack_require__(16);
	var css3Transitions = __webpack_require__(21);
	var css3Animations = __webpack_require__(25);
	var svgSection = __webpack_require__(30);

	//var swiper = require('./components/swiper.vue');

	var strokeCircle = __webpack_require__(35);


	Vue.component( 'css3Transitions',css3Transitions );
	Vue.component( 'css3Animations',css3Animations );
	Vue.component( 'svgSection',svgSection );
	Vue.component( 'technology',technology );
	//Vue.component( 'swiper',swiper );
	Vue.component( 'stroke-circle',strokeCircle );

	new Vue({
		el: 'body',
		components: {
		},
		data: {
			nav: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],

			current: 0,
			Y1: null,
			Y2: null,
			pages: [
				'home',
				'box'
			]
		},
		computed: {
			length: function(){
				return this.nav.length;
			}
		},
		methods: {
			toPage: function(i){
				this.current = i;
			},
			mousedown: function(e){
				this.Y1 = e.pageY;
			},
			mouseup: function(e){
				this.Y2 = e.pageY;
				var distance = this.Y2 - this.Y1;
				console.log(distance)
				if( distance<0 ){
					if( this.current<this.length-1 ){
						this.current++;
					}
				}else if( distance>0 ){
					if( this.current>0 ){
						this.current--;
					}
				}
			}
		}
	})

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 13 */,
/* 14 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 15 */,
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(17)
	__vue_script__ = __webpack_require__(19)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\components\\technology.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(20)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-14b8e32a/technology.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 17 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 18 */,
/* 19 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
		data: function data() {
			return {
				css3: 'img/css3.svg',
				svg: 'img/svg.png',
				html5: 'img/html5.svg'
			};
		}
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "\n<li class=\"item\" _v-14b8e32a=\"\">\n\t<h2 _v-14b8e32a=\"\">\n\t\t制作网页动画的技术\n\t</h2>\n\t<ul class=\"three\" _v-14b8e32a=\"\">\n\t\t<li _v-14b8e32a=\"\">\n\t\t\t<img :src=\"css3\" _v-14b8e32a=\"\">\n\t\t\t<h3 _v-14b8e32a=\"\">CSS3</h3>\n\t\t</li>\n\t\t<li _v-14b8e32a=\"\">\n\t\t\t<img :src=\"svg\" _v-14b8e32a=\"\">\n\t\t\t<h3 _v-14b8e32a=\"\">SVG</h3>\n\t\t</li>\n\t\t<li _v-14b8e32a=\"\">\n\t\t\t<img :src=\"html5\" _v-14b8e32a=\"\">\n\t\t\t<h3 _v-14b8e32a=\"\">Canvas</h3>\n\t\t</li>\n\t</ul>\n</li>\n";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(22)
	__vue_script__ = __webpack_require__(24)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\components\\css3Transitions.vue: named exports in *.vue files are ignored.")}
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-c24fdf82/css3Transitions.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 22 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 23 */,
/* 24 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
		template: "\n\t\t<li class=\"item\">\n\t\t\t<h2>\n\t\t\t\tCSS3 Transitions\n\t\t\t</h2>\n\t\t\t<div class=\"strip\">\n\t\t\t\t<div class=\"left\">\n\t\t\t\t\t<table><tr><th>\n\t\t\t\t\t\ttransform: translate3d(20vw,5vw,0);\n\t\t\t\t\t</th></tr></table>\n\t\t\t\t</div>\n\t\t\t\t<img class=\"r2d2 translate\" src=\"img/r2d2.png\"/>\n\t\t\t</div>\n\t\t\t<div class=\"strip\">\n\t\t\t\t<div class=\"left\">\n\t\t\t\t\t<table><tr><th>\n\t\t\t\t\ttransform: scale3d(1.2,1.2,1);\n\t\t\t\t\t</th></tr></table>\n\t\t\t\t</div>\n\t\t\t\t<img class=\"r2d2 scale3d\" src=\"img/r2d2.png\"/>\n\t\t\t</div>\n\t\t\t<div class=\"strip\">\n\t\t\t\t<div class=\"left\">\n\t\t\t\t\t<table><tr><th>\n\t\t\t\t\ttransform: skew(30deg,30deg);\n\t\t\t\t\t</th></tr></table>\n\t\t\t\t</div>\n\t\t\t\t<img class=\"r2d2 skew\" src=\"img/r2d2.png\"/>\n\t\t\t</div>\n\t\t</li>\n\t\t<li class=\"item\">\n\t\t\t<h2>\n\t\t\t\tCSS3 Transitions\n\t\t\t</h2>\n\t\t\t<div class=\"strip\">\n\t\t\t\t<div class=\"left\">\n\t\t\t\t\t<table><tr><th>\n\t\t\t\t\ttransform: rotateY(360deg);\n\t\t\t\t\t</th></tr></table>\n\t\t\t\t</div>\n\t\t\t\t<img class=\"r2d2 rotateY\" src=\"img/r2d2.png\"/>\n\t\t\t</div>\n\t\t\t<div class=\"strip\">\n\t\t\t\t<div class=\"left\">\n\t\t\t\t\t<table><tr><th>\n\t\t\t\t\ttransform: rotateX(60deg);\n\t\t\t\t\t</th></tr></table>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"square0 rotateX\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"strip\">\n\t\t\t\t<div class=\"left\">\n\t\t\t\t\t<table><tr><th>\n\t\t\t\t\tperspective: 1000px;<br/>\n\t\t\t\t\ttransform: rotateX(60deg);\n\t\t\t\t\t</th></tr></table>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"space\">\n\t\t\t\t\t<div class=\"square rotate\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t\t<li class=\"item\">\n\t\t\t<h2>\n\t\t\t\tCSS3 Transitions\n\t\t\t</h2>\n\t\t\t<div class=\"strip\">\n\t\t\t\t<div class=\"left\">\n\t\t\t\t\t<table><tr><th>\n\t\t\t\t\topacity: 0;\n\t\t\t\t\t</th></tr></table>\n\t\t\t\t</div>\n\t\t\t\t<img class=\"r2d2 opacity\" src=\"img/r2d2.png\"/>\n\t\t\t</div>\n\t\t\t<div class=\"strip\">\n\t\t\t\t<div class=\"left\">\n\t\t\t\t\t<table><tr><th>\n\t\t\t\t\tbackground: red;\n\t\t\t\t\t</th></tr></table>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"space\">\n\t\t\t\t\t<div class=\"square background\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"strip\">\n\t\t\t\t<div class=\"left\">\n\t\t\t\t\t<table><tr><th>\n\t\t\t\t\tbox-shadow: 0 0 10vw 1vw green;\n\t\t\t\t\t</th></tr></table>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"space\">\n\t\t\t\t\t<div class=\"square box-shadow\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t"
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(26)
	__vue_script__ = __webpack_require__(28)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\components\\css3Animations.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(29)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-0e72887e/css3Animations.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 26 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 27 */,
/* 28 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
		data: function data() {
			return {
				img: {
					yoda: 'img/yoda.png'
				}
			};
		}
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "\n<li class=\"item\" _v-0e72887e=\"\">\n\t<h2 _v-0e72887e=\"\">\n\t\tCSS3 Animations\n\t</h2>\n\t<div class=\"two\" _v-0e72887e=\"\">\n\t\t<div class=\"col small\" _v-0e72887e=\"\">\n\t\t\t@keyframes rubberBand {<br _v-0e72887e=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;0% {<br _v-0e72887e=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: scale3d(1, 1, 1);<br _v-0e72887e=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;}<br _v-0e72887e=\"\">\n\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;30% {<br _v-0e72887e=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: scale3d(1.25, 0.75, 1);<br _v-0e72887e=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;}<br _v-0e72887e=\"\">\n\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;40% {<br _v-0e72887e=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: scale3d(0.75, 1.25, 1);<br _v-0e72887e=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;}<br _v-0e72887e=\"\">\n\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;50% {<br _v-0e72887e=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: scale3d(1.15, 0.85, 1);<br _v-0e72887e=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;}<br _v-0e72887e=\"\">\n\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;65% {<br _v-0e72887e=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: scale3d(.95, 1.05, 1);<br _v-0e72887e=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;}<br _v-0e72887e=\"\">\n\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;75% {<br _v-0e72887e=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: scale3d(1.05, .95, 1);<br _v-0e72887e=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;}<br _v-0e72887e=\"\">\n\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;100% {<br _v-0e72887e=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform: scale3d(1, 1, 1);<br _v-0e72887e=\"\">\n\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;}<br _v-0e72887e=\"\">\n\t\t\t}\n\t\t</div>\n\t\t<div class=\"col\" _v-0e72887e=\"\">\n\t\t\t<img class=\"yoda\" :src=\"img.yoda\" _v-0e72887e=\"\">\n\t\t</div>\n\t</div>\n</li>\t\n";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(31)
	__vue_script__ = __webpack_require__(33)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\components\\svg-section.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(34)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-38ff25a6/svg-section.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 31 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 32 */,
/* 33 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
		data: function data() {
			return {
				img: {
					svg_essence: 'img/svg_essence.jpg',
					pen: 'img/pen.jpg',
					orange: 'img/orange.png',
					transformer: 'img/transformer.jpeg'
				}
			};
		}
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "\n<li class=\"item\" _v-38ff25a6=\"\">\n\t<h2 _v-38ff25a6=\"\">SVG的本质</h2>\n\t<p _v-38ff25a6=\"\">\n\t\t一张SVG图片本质上是由一些路径围成的色块组成的。<br _v-38ff25a6=\"\">\n\t</p>\n\t<img class=\"svg-essence\" :src=\"img.svg_essence\" _v-38ff25a6=\"\">\n</li>\n<li class=\"item\" _v-38ff25a6=\"\">\n\t<h2 _v-38ff25a6=\"\">Color-changing Animation</h2>\n\t<div class=\"two\" _v-38ff25a6=\"\">\n\t\t<div class=\"col normal\" _v-38ff25a6=\"\">\n\t\t\tExample:<br _v-38ff25a6=\"\">\n\t\t\t sunset<br _v-38ff25a6=\"\">\n\t\t</div>\n\t\t<div class=\"col\" _v-38ff25a6=\"\">\n\t\t\t<img class=\"pen\" :src=\"img.orange\" _v-38ff25a6=\"\">\n\t\t</div>\n\t</div>\n</li>\n<li class=\"item\" _v-38ff25a6=\"\">\n\t<h2 _v-38ff25a6=\"\">SVG Stroke Animation</h2>\n\t<div class=\"two\" _v-38ff25a6=\"\">\n\t\t<div class=\"col normal\" _v-38ff25a6=\"\">\n\t\t\tExamples:<br _v-38ff25a6=\"\">\n\t\t\t stroke-arsenal<br _v-38ff25a6=\"\">\n\t\t\t stroke-square<br _v-38ff25a6=\"\">\n\t\t\t stroke-circle<br _v-38ff25a6=\"\">\n\t\t\t stroke-gameboy<br _v-38ff25a6=\"\">\n\t\t\t stroke-qq<br _v-38ff25a6=\"\">\n\t\t\t countdown<br _v-38ff25a6=\"\">\n\t\t</div>\n\t\t<div class=\"col\" _v-38ff25a6=\"\">\n\t\t\t<img class=\"pen\" :src=\"img.pen\" _v-38ff25a6=\"\">\n\t\t</div>\n\t</div>\n</li>\n<li class=\"item\" _v-38ff25a6=\"\">\n\t<h2 _v-38ff25a6=\"\">Shape-morphing Animation</h2>\n\t<div class=\"two\" _v-38ff25a6=\"\">\n\t\t<div class=\"col normal\" _v-38ff25a6=\"\">\n\t\t\tExamples:<br _v-38ff25a6=\"\">\n\t\t\t morphing-phones<br _v-38ff25a6=\"\">\n\t\t</div>\n\t\t<div class=\"col\" _v-38ff25a6=\"\">\n\t\t\t<img class=\"pen\" :src=\"img.transformer\" _v-38ff25a6=\"\">\n\t\t</div>\n\t</div>\n</li>\t\n";

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(36)
	__vue_script__ = __webpack_require__(38)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\components\\stroke-circle.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(39)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-c251b814/stroke-circle.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 36 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 37 */,
/* 38 */
/***/ function(module, exports) {

	"use strict";

	var strokeCircle = {};
	module.exports = strokeCircle;

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports = "\n<svg class=\"test\" viewBox=\"0,0,1000,1000\" pointer-events=\"all\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" _v-c251b814=\"\">\n\t<defs _v-c251b814=\"\">\n\t\t<linearGradient id=\"linearGradient-1\" x1=\"0%\" y1=\"100%\" x2=\"100%\" y2=\"100%\" _v-c251b814=\"\">\n\t\t\t<stop stop-color=\"#2090F8\" offset=\"0%\" _v-c251b814=\"\"></stop>\n\t\t\t<stop stop-color=\"#01FCE4\" offset=\"41.7610013%\" _v-c251b814=\"\"></stop>\n\t\t\t<stop stop-color=\"#0BFF8C\" offset=\"78.6870217%\" _v-c251b814=\"\"></stop>\n\t\t\t<stop stop-color=\"#51FF00\" offset=\"100%\" _v-c251b814=\"\"></stop>\n\t\t</linearGradient>\n\t</defs>\n\n\t<circle class=\"circle-red\" cx=\"500\" cy=\"500\" r=\"200\" stroke=\"url(#linearGradient-1)\" _v-c251b814=\"\"></circle>\n\t<circle class=\"circle-red-1\" cx=\"500\" cy=\"500\" r=\"100\" stroke=\"url(#linearGradient-1)\" _v-c251b814=\"\"></circle>\n\n</svg>\n";

/***/ }
]);