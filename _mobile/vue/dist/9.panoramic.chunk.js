webpackJsonp([9],{

/***/ 50:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(51);
	__vue_script__ = __webpack_require__(52);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\components\\Panoramic.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(53);
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
	    var id = "_v-67fa3152/Panoramic.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 51:
74,

/***/ 52:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// <!-- Panoramic (pure CSS) -->
	// <div class="space">
	// 	<div class='roller'>
	// 	  <div class='slice' v-for="n in 32"></div>
	// 	</div>
	// </div>
	// </template>
	//
	// <style lang="less" scoped>
	//
	//
	// .space {
	// 	width: 100%; height: 100vh;
	//   	perspective: 5rem;
	//   background: black;
	// }
	//
	// .roller {
	//   transform-style: preserve-3d;
	//   animation: rot 20s linear infinite;
	// }
	// .roller, .roller * {
	//   position: absolute;
	//   top: 50%;
	//   left: 50%;
	// }
	//
	// .slice {
	//   margin: -50vh -4.92457vw;
	//   width: 9.84914vw;
	//   height: 100vh;
	//   backface-visibility: hidden;
	//   background: url(http://androidforensicphotography.files.wordpress.com/2012/06/canal-rocks-360-degrees.jpg);
	//   background-size: 315.17249vw 100%;
	// }
	// .slice:nth-child(1) {
	//   transform: rotateY(0deg) translateZ(-49vw);
	//   background-position: 0vw 50%;
	// }
	// .slice:nth-child(2) {
	//   transform: rotateY(11.25deg) translateZ(-49vw);
	//   background-position: 9.84914vw 50%;
	// }
	// .slice:nth-child(3) {
	//   transform: rotateY(22.5deg) translateZ(-49vw);
	//   background-position: 19.69828vw 50%;
	// }
	// .slice:nth-child(4) {
	//   transform: rotateY(33.75deg) translateZ(-49vw);
	//   background-position: 29.54742vw 50%;
	// }
	// .slice:nth-child(5) {
	//   transform: rotateY(45deg) translateZ(-49vw);
	//   background-position: 39.39656vw 50%;
	// }
	// .slice:nth-child(6) {
	//   transform: rotateY(56.25deg) translateZ(-49vw);
	//   background-position: 49.2457vw 50%;
	// }
	// .slice:nth-child(7) {
	//   transform: rotateY(67.5deg) translateZ(-49vw);
	//   background-position: 59.09484vw 50%;
	// }
	// .slice:nth-child(8) {
	//   transform: rotateY(78.75deg) translateZ(-49vw);
	//   background-position: 68.94398vw 50%;
	// }
	// .slice:nth-child(9) {
	//   transform: rotateY(90deg) translateZ(-49vw);
	//   background-position: 78.79312vw 50%;
	// }
	// .slice:nth-child(10) {
	//   transform: rotateY(101.25deg) translateZ(-49vw);
	//   background-position: 88.64226vw 50%;
	// }
	// .slice:nth-child(11) {
	//   transform: rotateY(112.5deg) translateZ(-49vw);
	//   background-position: 98.4914vw 50%;
	// }
	// .slice:nth-child(12) {
	//   transform: rotateY(123.75deg) translateZ(-49vw);
	//   background-position: 108.34054vw 50%;
	// }
	// .slice:nth-child(13) {
	//   transform: rotateY(135deg) translateZ(-49vw);
	//   background-position: 118.18968vw 50%;
	// }
	// .slice:nth-child(14) {
	//   transform: rotateY(146.25deg) translateZ(-49vw);
	//   background-position: 128.03882vw 50%;
	// }
	// .slice:nth-child(15) {
	//   transform: rotateY(157.5deg) translateZ(-49vw);
	//   background-position: 137.88796vw 50%;
	// }
	// .slice:nth-child(16) {
	//   transform: rotateY(168.75deg) translateZ(-49vw);
	//   background-position: 147.73711vw 50%;
	// }
	// .slice:nth-child(17) {
	//   transform: rotateY(180deg) translateZ(-49vw);
	//   background-position: 157.58625vw 50%;
	// }
	// .slice:nth-child(18) {
	//   transform: rotateY(191.25deg) translateZ(-49vw);
	//   background-position: 167.43539vw 50%;
	// }
	// .slice:nth-child(19) {
	//   transform: rotateY(202.5deg) translateZ(-49vw);
	//   background-position: 177.28453vw 50%;
	// }
	// .slice:nth-child(20) {
	//   transform: rotateY(213.75deg) translateZ(-49vw);
	//   background-position: 187.13367vw 50%;
	// }
	// .slice:nth-child(21) {
	//   transform: rotateY(225deg) translateZ(-49vw);
	//   background-position: 196.98281vw 50%;
	// }
	// .slice:nth-child(22) {
	//   transform: rotateY(236.25deg) translateZ(-49vw);
	//   background-position: 206.83195vw 50%;
	// }
	// .slice:nth-child(23) {
	//   transform: rotateY(247.5deg) translateZ(-49vw);
	//   background-position: 216.68109vw 50%;
	// }
	// .slice:nth-child(24) {
	//   transform: rotateY(258.75deg) translateZ(-49vw);
	//   background-position: 226.53023vw 50%;
	// }
	// .slice:nth-child(25) {
	//   transform: rotateY(270deg) translateZ(-49vw);
	//   background-position: 236.37937vw 50%;
	// }
	// .slice:nth-child(26) {
	//   transform: rotateY(281.25deg) translateZ(-49vw);
	//   background-position: 246.22851vw 50%;
	// }
	// .slice:nth-child(27) {
	//   transform: rotateY(292.5deg) translateZ(-49vw);
	//   background-position: 256.07765vw 50%;
	// }
	// .slice:nth-child(28) {
	//   transform: rotateY(303.75deg) translateZ(-49vw);
	//   background-position: 265.92679vw 50%;
	// }
	// .slice:nth-child(29) {
	//   transform: rotateY(315deg) translateZ(-49vw);
	//   background-position: 275.77593vw 50%;
	// }
	// .slice:nth-child(30) {
	//   transform: rotateY(326.25deg) translateZ(-49vw);
	//   background-position: 285.62507vw 50%;
	// }
	// .slice:nth-child(31) {
	//   transform: rotateY(337.5deg) translateZ(-49vw);
	//   background-position: 295.47421vw 50%;
	// }
	// .slice:nth-child(32) {
	//   transform: rotateY(348.75deg) translateZ(-49vw);
	//   background-position: 305.32335vw 50%;
	// }
	//
	// @keyframes rot {
	//   to {
	//     transform: rotateY(1turn);
	//   }
	// }
	// </style>
	//
	// <script>
	exports.default = {
		data: function data() {
			return {};
		}
	};
	// </script>

/***/ },

/***/ 53:
/***/ function(module, exports) {

	module.exports = "\n<!-- Panoramic (pure CSS) -->\n<div class=\"space\" _v-67fa3152=\"\">\n\t<div class=\"roller\" _v-67fa3152=\"\">\n\t  <div class=\"slice\" v-for=\"n in 32\" _v-67fa3152=\"\"></div>\n\t</div>\n</div>\n";

/***/ }

});