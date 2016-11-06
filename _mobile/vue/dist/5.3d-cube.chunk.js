webpackJsonp([5],{

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(29);
	__vue_script__ = __webpack_require__(30);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\components\\3d-cube.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(31);
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
	    var id = "_v-0d8274a2/3d-cube.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 29:
74,

/***/ 30:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="space3d">
	// 		<div class="cube"
	// 		:class=" recalibrating?'recalibrating':'' "
	// 		@click="recalibrate"
	// 		:style=" 'transform: rotateX('+rotateX+'deg) rotateY('+rotateY+'deg);-webkit-transform:rotateX('+rotateX+'deg) rotateY('+rotateY+'deg);'  ">
	// 			<div class="face face-front"></div>
	// 			<div class="face face-top"></div>
	// 			<div class="face face-bottom"></div>
	// 			<div class="face face-left"></div>
	// 			<div class="face face-right"></div>
	// 			<div class="face face-back"></div>
	// 		</div>
	// 	</div>
	// </template>
	//
	// <style lang="less" scoped>
	// .space3d {
	// 	@num: 3rem;
	// 	position: absolute; left: 0; top: 0; right: 0; bottom: 0;
	// 	margin: auto;
	// 	width: @num; height: @num;
	// 	perspective: 1000px;
	// 	text-align: center;
	// 	display: inline-block;
	// 	.cube {
	// 		display: inline-block;
	// 		//transition: all 0.85s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	// 		text-align: center;
	// 		position: relative;
	// 		width: 100%;
	// 		height: 100%;
	// 		transform-style: preserve-3d;
	// 		//transform: rotateX(-15deg) rotateY(15deg);
	// 		&.recalibrating {
	// 			transition: all 0.85s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	// 		}
	// 		.face {
	// 			overflow: hidden;
	// 			position: absolute;
	// 			width: @num; height: @num;
	// 			border: 1px solid black;
	// 			//background: #FFF;
	// 			box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.1), 0 0 50px rgba(0, 0, 0, 0.3);
	// 			font-size: 0.5rem;
	// 			color: grey;
	// 			line-height: @num;
	// 			opacity: 1;
	// 		}
	//
	// 		.face-front {
	// 			transform: translate3d(0, 0, @num/2);
	// 		}
	//
	// 		.face-top {
	// 			transform: rotateX(90deg) translate3d(0, 0, @num/2);
	// 		}
	//
	// 		.face-bottom {
	// 			transform: rotateX(-90deg) translate3d(0, 0, @num/2);
	// 		}
	//
	// 		.face-left {
	// 			left: 50%;
	// 			margin-left: -@num/2;
	// 			transform: rotateY(-90deg) translate3d(0, 0, @num/2);
	// 		}
	//
	// 		.face-right {
	// 			left: 50%;
	// 			margin-left: -@num/2;
	// 			transform: rotateY(90deg) translate3d(0, 0, @num/2);
	// 		}
	//
	// 		.face-back {
	// 			transform: rotateY(180deg) translate3d(0, 0, @num/2);
	// 		}
	// 	}
	// }	
	// </style>
	//
	// <script>
	exports.default = {
		data: function data() {
			return {
				rotationRate: {
					alpha: '111'
				},
				rotateX: 0,
				rotateY: 0,
				recalibrating: false
			};
		},
		created: function created() {
			var self = this;
			if (window.DeviceMotionEvent) {
				window.addEventListener('devicemotion', self.handler.bind(self), false);
			} else {
				console.log('Sorry, your browser doesn\'t support DeviceMotionEvent.');
			}
		},
		methods: {
			recalibrate: function recalibrate(e) {
				var _this = this;

				this.recalibrating = true;
				this.rotateX = 0;
				this.rotateY = 0;
				setTimeout(function () {
					_this.recalibrating = false;
				}, 1000);
			},
			handler: function handler(e) {
				if (!this.recalibrating) {
					this.rotationRate.alpha = e.rotationRate.alpha;

					var nextX = this.rotateX - e.rotationRate.alpha * 3;
					// if(nextX>=45){
					// 	nextX = 45;
					// }else if(nextX<=-45){
					// 	nextX = -45;
					// }
					this.rotateX = nextX;

					var nextY = this.rotateY + e.rotationRate.beta * 3;
					// if(nextY>=45){
					// 	nextY = 45;
					// }else if(nextY<=-45){
					// 	nextY = -45;
					// }
					this.rotateY = nextY;
				}
			}
		}
	};
	// </script>

/***/ },

/***/ 31:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"space3d\" _v-0d8274a2=\"\">\n\t<div class=\"cube\" :class=\" recalibrating?'recalibrating':'' \" @click=\"recalibrate\" :style=\" 'transform: rotateX('+rotateX+'deg) rotateY('+rotateY+'deg);-webkit-transform:rotateX('+rotateX+'deg) rotateY('+rotateY+'deg);'  \" _v-0d8274a2=\"\">\n\t\t<div class=\"face face-front\" _v-0d8274a2=\"\"></div>\n\t\t<div class=\"face face-top\" _v-0d8274a2=\"\"></div>\n\t\t<div class=\"face face-bottom\" _v-0d8274a2=\"\"></div>\n\t\t<div class=\"face face-left\" _v-0d8274a2=\"\"></div>\n\t\t<div class=\"face face-right\" _v-0d8274a2=\"\"></div>\n\t\t<div class=\"face face-back\" _v-0d8274a2=\"\"></div>\n\t</div>\n</div>\n";

/***/ }

});