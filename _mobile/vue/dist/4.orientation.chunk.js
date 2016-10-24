webpackJsonp([4],{

/***/ 20:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(21);
	__vue_script__ = __webpack_require__(22);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\components\\orientation.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(23);
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
	    var id = "_v-8069c6fe/orientation.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 21:
74,

/***/ 22:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// 	<div class="space">
	// 		<div class="square"
	// 		:class=" recalibrating?'recalibrating':'' "
	// 		@click="recalibrate"
	// 		:style=" 'transform: rotateX('+rotateX+'deg) rotateY('+rotateY+'deg);-webkit-transform:rotateX('+rotateX+'deg) rotateY('+rotateY+'deg);'  ">
	// 			{{rotationRate.alpha}}<br/>
	// 			{{rotateY}}
	// 		</div>
	// 	</div>
	// </template>
	//
	// <style lang="less" scoped>
	// 	.space {
	// 		width: 100%;
	// 		margin-top: 3rem;
	// 		perspective: 1000px;
	// 		.square {
	// 			width: 3rem; height: 3rem;
	// 			margin: auto;
	// 			background: orange;
	// 			font-size: 14px;
	// 			transform-style: preserve-3d;
	// 			&.recalibrating {
	// 				transition: 1s;
	// 			}
	// 		}
	// 	};
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
				console.log('');
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

					var nextX = this.rotateX + e.rotationRate.alpha * 3;
					if (nextX >= 45) {
						nextX = 45;
					} else if (nextX <= -45) {
						nextX = -45;
					}
					this.rotateX = nextX;

					var nextY = this.rotateY + e.rotationRate.beta * 3;
					if (nextY >= 45) {
						nextY = 45;
					} else if (nextY <= -45) {
						nextY = -45;
					}
					this.rotateY = nextY;
				}
			}
		}
	};
	// </script>

/***/ },

/***/ 23:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"space\" _v-8069c6fe=\"\">\n\t<div class=\"square\" :class=\" recalibrating?'recalibrating':'' \" @click=\"recalibrate\" :style=\" 'transform: rotateX('+rotateX+'deg) rotateY('+rotateY+'deg);-webkit-transform:rotateX('+rotateX+'deg) rotateY('+rotateY+'deg);'  \" _v-8069c6fe=\"\">\n\t\t{{rotationRate.alpha}}<br _v-8069c6fe=\"\">\n\t\t{{rotateY}}\n\t</div>\n</div>\n";

/***/ },

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var __vue_script__, __vue_template__;
	var __vue_styles__ = {};
	__webpack_require__(25);
	__vue_script__ = __webpack_require__(26);
	if (__vue_script__ && __vue_script__.__esModule && Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\vue\\src\\components\\3d.vue: named exports in *.vue files are ignored.");
	}
	__vue_template__ = __webpack_require__(27);
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
	    var id = "_v-52530720/3d.vue";
	    if (!module.hot.data) {
	      hotAPI.createRecord(id, module.exports);
	    } else {
	      hotAPI.update(id, module.exports, __vue_template__);
	    }
	  })();
	}

/***/ },

/***/ 25:
74,

/***/ 26:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <template>
	// <div class="space">
	// 	<div class="flipper" :class="state"
	// 	@click="handleClick">
	// 		<div class="face front">
	// 			<p>front</p>
	// 			<img :src="img.iron_man"/>
	// 		</div>
	// 		<div class="face back">
	// 			<p>back</p>
	// 			<img :src="img.storm_trooper"/>
	// 		</div>
	// 	</div>
	// </div>
	// </template>
	//
	// <style lang="less" scoped>
	// 	.space {
	// 		position: relative;
	// 		width: 5rem; height: 8rem;
	// 		margin: auto;
	// 		perspective: 1000px;
	// 		.flipper {
	// 			position: relative;
	// 			width: 100%; height: 100%;
	// 			transition: transform 1s ease-in-out;
	// 			transform-style: preserve-3d;
	// 			&.two {
	// 				transform: rotateY(180deg);
	// 			}
	// 		}
	// 		.front, .back {
	// 			backface-visibility: hidden;
	// 			position: absolute; left: 0; top: 0;
	// 			width: 100%; height: 100%;
	// 			border-radius: 0.1rem;
	// 			transform-style: preserve-3d;
	// 			p {
	// 				width: 3rem;
	// 				margin: auto;
	// 				text-align: center;
	// 				background: red;
	// 				font-size: 0.5rem;
	// 				transform: translate3d(0,1rem,1rem);
	// 				//box-shadow: 0 0 1rem red;
	// 			}
	// 			img {
	// 				width: 2rem;
	// 				margin: auto;
	// 				transform: translate3d(0,2rem,4rem);
	// 			}
	// 		}
	// 		.front {
	// 			background: orange;
	// 			z-index: 2;
	// 			//perspective: 1000px;
	// 			transform-style: preserve-3d;
	// 			&.two {
	// 				//transform: rotateY(180deg);
	// 			}
	// 		}
	// 		.back {
	// 			background: blue;
	// 			transform: rotateY(180deg);
	// 			&.two {
	// 			}
	// 		}
	// 	}
	// </style>
	//
	// <script>
	exports.default = {
		data: function data() {
			return {
				state: '',
				img: {
					iron_man: 'img/iron_man.png',
					storm_trooper: 'img/storm-trooper.png'
				}
			};
		},
		mounted: function mounted() {
			var _this = this;

			document.addEventListener('keydown', function (e) {
				if (e.keyCode === 39) {
					_this.state = 'two';
				} else if (e.keyCode === 37) {
					_this.state = '';
				}
				//console.log(e)
			});
		},
		methods: {
			handleClick: function handleClick() {
				this.state = this.state === '' ? 'two' : '';
			}
		}
	};

	// </script>

/***/ },

/***/ 27:
/***/ function(module, exports) {

	module.exports = "\n<div class=\"space\" _v-52530720=\"\">\n\t<div class=\"flipper\" :class=\"state\" @click=\"handleClick\" _v-52530720=\"\">\n\t\t<div class=\"face front\" _v-52530720=\"\">\n\t\t\t<p _v-52530720=\"\">front</p>\n\t\t\t<img :src=\"img.iron_man\" _v-52530720=\"\">\n\t\t</div>\n\t\t<div class=\"face back\" _v-52530720=\"\">\n\t\t\t<p _v-52530720=\"\">back</p>\n\t\t\t<img :src=\"img.storm_trooper\" _v-52530720=\"\">\n\t\t</div>\n\t</div>\n</div>\n";

/***/ }

});