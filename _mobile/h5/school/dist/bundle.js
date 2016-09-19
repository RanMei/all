/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var face = __webpack_require__(2);

	Vue.component('face', face);

	var app = new Vue({
		el: 'body',
		data: {
			isLogin: false,
			over: false,
			gifts: {
				1: {
					acquired: false,
					timeleft: 0
				},
				2: {
					acquired: false,
					timeleft: 0,
					left: 0
				},
				3: {
					acquired: false,
					timeleft: 0,
					left: 0
				},
				4: {
					acquired: false,
					timeleft: 0,
					left: 0
				}
			},
			chance: 0,
			myavor: 'img/default.jpg',

			current: 0,
			pressed: false,

			ios: /ios/.test(document.title) ? true : false,
			testMode: false,

			maskShown: false,
			inProcessing: false,
			closeShown: false,
			infoShown: true,
			square: '',
			info: '--',
			desc: '--',
			pinkBtn: '',
			help: '',
			centered: false,

			trophies: [0, 1, 2, 3, 4, 5, 6, 7],
			inDrawing: false,

			ver_ok: true,

			prizes: ['iphone6', '10成长值', '金士顿U盘', '5书券', '小米手环', '小米耳机', '100元沪江网校学习卡', '50元沪江网校学习卡'],
			prizes_ios: ['iphone6', '未中奖', '乐扣乐扣保温杯', '5阅券', '小米移动电源', '小米路由器', '100元沪江网校学习卡', '50元沪江网校学习卡']

		},
		computed: {
			text: function text() {
				if (!this.isLogin) {
					return '今日还需阅读：<br/>未登录';
				} else if (this.gifts[1].timeleft <= 0) {
					return '今日阅读时长已达45分钟，可领取';
				} else {
					return '今日还需阅读：<br/>' + Math.ceil(this.gifts[1].timeleft / 1000 / 60) + '分钟';
				}
			},
			hours2: function hours2() {
				return Math.floor(this.gifts[2].timeleft / 1000 / 3600);
			},
			minutes2: function minutes2() {
				var hours = Math.floor(this.gifts[2].timeleft / 1000 / 3600);
				var minutes = Math.floor(this.gifts[2].timeleft / 1000 / 60 - hours * 60);
				return minutes;
			},
			hours3: function hours3() {
				return Math.floor(this.gifts[3].timeleft / 1000 / 3600);
			},
			minutes3: function minutes3() {
				var hours = Math.floor(this.gifts[3].timeleft / 1000 / 3600);
				var minutes = Math.floor(this.gifts[3].timeleft / 1000 / 60 - hours * 60);
				return minutes;
			},
			hours4: function hours4() {
				return Math.floor(this.gifts[4].timeleft / 1000 / 3600);
			},
			minutes4: function minutes4() {
				var hours = Math.floor(this.gifts[4].timeleft / 1000 / 3600);
				var minutes = Math.floor(this.gifts[4].timeleft / 1000 / 60 - hours * 60);
				return minutes;
			}
		},
		ready: function ready() {
			// if( this.ios===false ){
			// 	this.getAndroidOSVersion();
			// }
			this.getData();
		},
		methods: {
			getData: function getData() {
				var self = this;

				//通知服务器用户进入了index.html页面。
				Local.forceLog(common.param('act_f'), 'index');

				Local.reqaObj(common.server() + 'pkg160804/init' /*+'?tf=1&skey=@bvnUSeMcj&timi=549595715'*/, function (data) {
					console.log(data);

					if (self.ios === false) {
						self.ver_ok = data.ver_ok;
					}

					//更新model：
					self.isLogin = data.isLogin;

					for (var i = 1; i < 5; i++) {
						self.gifts[i].acquired = data.gifts[i].acquired;
						self.gifts[i].left = data.gifts[i].left;
						self.gifts[i].timeleft = data.gifts[i].timeLeft;
					}
					self.chance = data.chance;
					if (data.isLogin) {
						if (data.myavor !== '') {
							self.myavor = data.myavor;
						};
					};

					// 供测试用：
					if (self.testMode) {
						self.fake();
					}
				}, [], function () {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
			},
			getAndroidOSVersion: function getAndroidOSVersion() {
				console.log(navigator);
				//变量v的值为用户手机的安卓操作系统的版本号首位。
				var v = Number(navigator.userAgent.match(/Android \d/)[0].replace(/Android /, ''));
				console.log(v);
			},
			toUpgrade: function toUpgrade() {
				location.href = 'http://misc.wcd.qq.com/app?packageName=com.qq.reader&channelId=10000382';
			},
			cancle: function cancle() {
				this.ver_ok = true;
			},
			fake: function fake() {
				var self = this;
				self.isLogin = false;
				self.gifts[1].timeleft = 0;
				self.gifts[2].timeleft = 0;
				self.gifts[3].timeleft = 0;
				self.gifts[4].timeleft = 0;
			},
			signin: function signin() {
				if (this.testMode) {
					this.isLogin = true;
				} else if (this.ios) {
					Local.login();
				} else {
					Local.login();
				}
			},
			get: function get(i) {
				var self = this;
				Local.reqaObj(common.server() + 'pkg160804/pick?prizeNumber=' + i, function (data) {
					console.log(data);
					// 供测试用：
					if (self.testMode) {
						data.code = -5;
					};
					// 如果成功领取到该礼包：
					if (data.code === 0) {
						self.gifts[i].acquired = true;
						self.chance += i;
						self.showMask(i);
						// 如果该礼包已经被领光：
					} else if (data.code === -5) {
							self.showMask('out');
							// 如果领取该礼包失败：
						} else {
								Local.showToast("领取失败");
							};
				}, [], function () {
					Local.showToast("网络异常，请稍候重试");
				}, 1);
			},
			// 添加在抽奖按钮上的事件：
			drawtouchstart: function drawtouchstart(e) {

				this.pressed = true;
			},
			drawtouchmove: function drawtouchmove() {
				this.pressed = false;
			},
			drawtouchend: function drawtouchend() {
				if (this.pressed) {
					this.draw();
				};
				this.pressed = false;
			},
			drawtouchcancel: function drawtouchcancel() {
				this.pressed = false;
			},
			draw: function draw() {
				var self = this;
				if (!self.inDrawing) {
					//如果用户可以抽奖：
					if (self.chance > 0) {
						//启动抽奖过程。
						self.inDrawing = true;
						//向服务器发出请求。
						Local.reqaObj(common.server() + 'pkg160804/dolottery', function (data) {
							console.log(data);

							if (self.testMode) {
								data.prizename = '100元沪江网校学习卡';
							}
							//如果用户中奖了：
							if (data.prizename) {
								var result;
								var cycle;
								var duration;

								(function () {
									var move = function move() {
										self.current++;
										if (self.current === 8) {
											self.current = 0;
											cycle++;
										};
										duration += 10;
										if (cycle === 3 && self.current === result) {
											setTimeout(function () {
												self.showMask('get' + result);
												self.chance--;
												self.inDrawing = false;
											}, 1000);
										} else {
											setTimeout(move, duration);
										}
									};

									if (self.ios) {
										self.prizes_ios.forEach(function (a, i) {
											if (a === data.prizename) {
												result = i;
											}
										});
									} else {
										self.prizes.forEach(function (a, i) {
											if (a === data.prizename) {
												result = i;
											}
										});
									};
									cycle = 0;
									duration = 100;

									setTimeout(move, duration);
								})();
							};
						}, [], function () {
							Local.showToast("网络异常，请稍候重试");
						}, 1);
					} else {
						self.showMask('none');
					}
				};
			},
			showMask: function showMask(i) {
				var self = this;
				if (!self.inProcessing) {
					self.inProcessing = true;

					var name = self.ios ? '阅券' : '书券';
					self.square = '';
					self.centered = false;
					self.closeShown = false;
					self.infoShown = true;
					switch (i) {
						case 'none':
							self.info = '无抽奖机会';
							self.desc = '参与每日任务和累计阅读时长可获得抽奖机会';
							self.pinkBtn = 'gotIt';
							self.closeShown = false;
							break;
						case 'out':
							self.info = '礼包被抢光';
							self.desc = '来晚一步，去看看其他的礼包';
							self.centered = true;
							self.pinkBtn = 'gotIt';
							self.closeShown = false;
							break;
						case 1:
							this.info = '恭喜你获得<span>1次</span>抽奖机会';
							this.desc = '赶紧去抽奖，iPhone6，小米手环等奖品等着你';
							this.text = '今日阅读时长已达45分钟，可领取';
							this.closeShown = false;
							this.pinkBtn = 'gotIt';
							break;
						case 2:
							self.closeShown = false;
							self.info = '恭喜你获得<br/><span>2次</span>抽奖机会、<span>50</span>' + name;
							self.desc = '50' + name + '已及时到账，15天到期，到期将不能使用';
							self.pinkBtn = 'gotIt';
							break;
						case 3:
							self.info = '恭喜你获得<br/><span>3次</span>抽奖机会、<span>100</span>' + name;
							self.desc = '100' + name + '已及时到账，15天到期，到期将不能使用';
							self.pinkBtn = 'gotIt';
							break;
						case 4:
							self.info = '恭喜你获得<span>4次</span>抽奖机会、<span>200</span>' + name + '和<span>200元</span>沪江学习卡';
							self.desc = '200' + name + '已及时到账，15天到期，到期将不能使用';
							self.help = '<img class="query" src="img/query.png"/> 查看如何使用学习卡';
							self.closeShown = true;
							self.pinkBtn = 'help';
							break;
						case 'how':
							self.info = '如何使用学习卡？';
							self.desc = '1、进入优惠券开课页面<br/>\n\t\t\t\t\t\t\t<span class="link">http://class.hujiang.com/<br/>coupon/open</span><br/>\n\t\t\t\t\t\t\t2、输入优惠券代码，选择课程。<br/>\n\t\t\t\t\t\t\t3、确认用户名，开通课程。';
							self.pinkBtn = 'gotIt';
							break;
						case 'get0':
							self.square = '<img src="img/square_0.png">';
							self.info = '恭喜你获得<span>iPhone6</span>';
							self.desc = '务必填写正确的联系方式，方便客服与你联系';
							self.pinkBtn = 'write';
							self.closeShown = true;
							break;
						case 'get1':
							if (self.ios) {
								self.square = '<img src="img/square_1_ios.png">';
								self.info = '';
								self.infoShown = false;
								self.centered = true;
								self.desc = '继续加油，好运即将来临';
								self.pinkBtn = 'gotIt';
							} else {
								self.square = '<img src="img/square_1.png">';
								self.info = '恭喜你获得<span>10成长值</span>';
								self.centered = true;
								self.desc = '10成长值已及时到账';
								self.pinkBtn = 'gotIt';
							}
							break;
						case 'get2':
							if (self.ios) {
								self.square = '<img src="img/square_2_ios.png">';
								self.info = '恭喜你获得<span>乐扣乐扣保温杯</span>';
							} else {
								self.square = '<img src="img/square_2.png">';
								self.info = '恭喜你获得<span>金士顿U盘</span>';
							}
							self.desc = '务必填写正确的联系方式，方便客服与你联系';
							self.pinkBtn = 'write';
							self.closeShown = true;
							break;
						case 'get3':
							self.square = '<img src="img/square_3' + (self.ios ? '_ios' : '') + '.png">';
							self.info = '恭喜你获得<span>5' + name + '</span>';
							self.desc = '5' + name + '已及时到账，15天到期，到期将不能使用';
							self.pinkBtn = 'gotIt';
							break;
						case 'get4':
							self.square = '<img src="img/square_4' + (self.ios ? '_ios' : '') + '.png">';
							self.info = '恭喜你获得<span>小米' + (self.ios ? '移动电源' : '手环') + '</span>';
							self.desc = '务必填写正确的联系方式，方便客服与你联系';
							self.pinkBtn = 'write';
							self.closeShown = true;
							break;
						case 'get5':
							self.square = '<img src="img/square_5' + (self.ios ? '_ios' : '') + '.png">';
							self.info = '恭喜你获得<span>小米' + (self.ios ? '路由器' : '耳机') + '</span>';
							self.desc = '务必填写正确的联系方式，方便客服与你联系';
							self.pinkBtn = 'write';
							self.closeShown = true;
							break;
						case 'get6':
							self.square = '<img src="img/square_6.png">';
							self.info = '恭喜你获得<span>100元沪江学习卡</span>';
							self.desc = '请到“我的奖品”页面查看兑换码';
							self.help = '<img class="query" src="img/query.png"/> 查看如何使用';
							self.pinkBtn = 'help';
							self.closeShown = true;
							break;
						case 'get7':
							self.square = '<img src="img/square_7.png">';
							self.info = '恭喜你获得<span>50元沪江学习卡</span>';
							self.desc = '请到“我的奖品”页面查看兑换码';
							self.help = '<img class="query" src="img/query.png"/> 查看如何使用';
							self.pinkBtn = 'help';
							self.closeShown = true;
							break;
					}
					setTimeout(function () {
						self.maskShown = true;
						self.inProcessing = false;
					}, 300);
				};
			},
			closeMask: function closeMask() {
				this.maskShown = false;
			},
			toContact: function toContact() {
				if (this.isLogin) {
					if (this.ios) {
						Local.openInside(location.href.replace('index.html', 'contact.html'));
					} else {
						location.href = './contact.html';
					}
				} else {
					this.signin();
				}
			},
			toMine: function toMine() {
				if (this.ios) {
					Local.openInside(location.href.replace('index.html', 'mine.html'));
				} else {
					location.href = './mine.html';
				}
			}
		}
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	document.addEventListener('DOMContentLoaded', function () {

		var $html = document.querySelector('html');
		var $body = document.querySelector('body');
		var $screen = document.createElement('div');

		$screen.style.cssText += 'position:fixed; width:100%; height:100%; display:none;';
		$body.insertBefore($screen, $body.firstChild);

		function setRem() {
			$screen.style.display = 'block';
			var w = Number(document.defaultView.getComputedStyle($screen).width.replace(/px/, ''));
			var h = Number(document.defaultView.getComputedStyle($screen).height.replace(/px/, ''));
			$screen.style.display = 'none';
			$html.style.fontSize = 100 * w / 720 + 'px';
			//document.getElementsByClassName('container')[0].style.height = h+'px';
			console.log('rem: Size of the viewport is ' + w + '*' + h + '.');
		}
		setRem();
		window.addEventListener('resize', setRem);
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(3)
	__vue_script__ = __webpack_require__(7)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] _mobile\\h5\\school\\lib\\components\\face.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(8)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "./face.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-7780e1db&scoped=true!./../../../../../node_modules/less-loader/index.js!./../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./face.vue", function() {
				var newContent = require("!!./../../../../../node_modules/css-loader/index.js!./../../../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-7780e1db&scoped=true!./../../../../../node_modules/less-loader/index.js!./../../../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./face.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, ".face[_v-7780e1db] {\n  position: relative;\n  width: 100%;\n  height: 5.8rem;\n  overflow: hidden;\n  background: #5acce6;\n}\n.face .cloud_1[_v-7780e1db] {\n  position: absolute;\n  left: 0.32rem;\n  top: 0.75rem;\n  width: 0.52rem;\n  -webkit-animation: cloud_1 10s linear infinite;\n          animation: cloud_1 10s linear infinite;\n}\n@-webkit-keyframes cloud_1 {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(1500%, 0, 0);\n            transform: translate3d(1500%, 0, 0);\n  }\n}\n@keyframes cloud_1 {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(1500%, 0, 0);\n            transform: translate3d(1500%, 0, 0);\n  }\n}\n.face .cloud_2[_v-7780e1db] {\n  position: absolute;\n  left: 0.75rem;\n  top: 2.25rem;\n  width: 0.87rem;\n  -webkit-animation: cloud_2 15s linear infinite;\n          animation: cloud_2 15s linear infinite;\n}\n@-webkit-keyframes cloud_2 {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(900%, 0, 0);\n            transform: translate3d(900%, 0, 0);\n  }\n}\n@keyframes cloud_2 {\n  0% {\n    -webkit-transform: translate3d(-200%, 0, 0);\n            transform: translate3d(-200%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(900%, 0, 0);\n            transform: translate3d(900%, 0, 0);\n  }\n}\n.face .cloud_3[_v-7780e1db] {\n  position: absolute;\n  left: 4.6rem;\n  top: -0.1rem;\n  width: 0.9rem;\n  -webkit-animation: cloud_3 20s linear infinite;\n          animation: cloud_3 20s linear infinite;\n}\n@-webkit-keyframes cloud_3 {\n  0% {\n    -webkit-transform: translate3d(-650%, 0, 0);\n            transform: translate3d(-650%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(300%, 0, 0);\n            transform: translate3d(300%, 0, 0);\n  }\n}\n@keyframes cloud_3 {\n  0% {\n    -webkit-transform: translate3d(-650%, 0, 0);\n            transform: translate3d(-650%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(300%, 0, 0);\n            transform: translate3d(300%, 0, 0);\n  }\n}\n.face .cloud_4[_v-7780e1db] {\n  position: absolute;\n  left: 6.25rem;\n  top: 1.32rem;\n  width: 0.48rem;\n  -webkit-animation: cloud_4 12s linear infinite;\n          animation: cloud_4 12s linear infinite;\n}\n@-webkit-keyframes cloud_4 {\n  0% {\n    -webkit-transform: translate3d(-1500%, 0, 0);\n            transform: translate3d(-1500%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(300%, 0, 0);\n            transform: translate3d(300%, 0, 0);\n  }\n}\n@keyframes cloud_4 {\n  0% {\n    -webkit-transform: translate3d(-1500%, 0, 0);\n            transform: translate3d(-1500%, 0, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(300%, 0, 0);\n            transform: translate3d(300%, 0, 0);\n  }\n}\n.face .clouds_1[_v-7780e1db] {\n  position: absolute;\n  left: 0rem;\n  top: 2.2rem;\n  width: 7.2rem;\n  -webkit-animation: twinkle 3s linear infinite;\n          animation: twinkle 3s linear infinite;\n}\n@-webkit-keyframes twinkle {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes twinkle {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.2;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.face .clouds_2[_v-7780e1db] {\n  position: absolute;\n  left: 0rem;\n  top: 2.9rem;\n  width: 7.2rem;\n  -webkit-animation: twinkle2 3s linear infinite;\n          animation: twinkle2 3s linear infinite;\n}\n@-webkit-keyframes twinkle2 {\n  0% {\n    opacity: 0.2;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.2;\n  }\n}\n@keyframes twinkle2 {\n  0% {\n    opacity: 0.2;\n  }\n  50% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0.2;\n  }\n}\n.face .logos[_v-7780e1db] {\n  position: absolute;\n  left: 0.14rem;\n  top: 0.2rem;\n  width: 2.88rem;\n}\n.face .planet[_v-7780e1db] {\n  position: absolute;\n  left: 0.7rem;\n  top: 0.7rem;\n  width: 5.8rem;\n}\n.face .clouds_3[_v-7780e1db] {\n  position: absolute;\n  left: 0;\n  top: 3.2rem;\n  width: 100%;\n}\n.face .grass[_v-7780e1db] {\n  position: absolute;\n  left: 0;\n  top: 5rem;\n  width: 100%;\n}\n.face .trees[_v-7780e1db] {\n  position: absolute;\n  left: 5.88rem;\n  top: 4.24rem;\n  width: 1.35rem;\n}\n.face .car[_v-7780e1db] {\n  position: absolute;\n  left: 0.5rem;\n  top: 4.75rem;\n  width: 0.9rem;\n}\n", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function () {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for (var i = 0; i < this.length; i++) {
				var item = this[i];
				if (item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function (modules, mediaQuery) {
			if (typeof modules === "string") modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for (var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if (typeof id === "number") alreadyImportedModules[id] = true;
			}
			for (i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if (mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if (mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
		data: function data() {
			return {
				img: {
					cloud_1: './img/face/cloud_1.png',
					cloud_2: './img/face/cloud_2.png',
					cloud_3: './img/face/cloud_3.png',
					cloud_4: './img/face/cloud_4.png',
					clouds_1: './img/face/clouds_1.png',
					clouds_2: './img/face/clouds_2.png',
					logos: './img/face/logos.png',
					planet: './img/face/planet.png',
					clouds_3: './img/face/clouds_3.png',
					grass: './img/face/grass.png',
					trees: './img/face/trees.png',
					car: './img/face/car.png'
				}
			};
		}
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"face\" _v-7780e1db=\"\">\n\t<img class=\"cloud_1\" :src=\"img.cloud_1\" _v-7780e1db=\"\">\n\t<img class=\"cloud_2\" :src=\"img.cloud_2\" _v-7780e1db=\"\">\n\t<img class=\"cloud_3\" :src=\"img.cloud_3\" _v-7780e1db=\"\">\n\t<img class=\"cloud_4\" :src=\"img.cloud_4\" _v-7780e1db=\"\">\n\t<img class=\"clouds_1\" :src=\"img.clouds_1\" _v-7780e1db=\"\">\n\t<img class=\"clouds_2\" :src=\"img.clouds_2\" _v-7780e1db=\"\">\n\t<img class=\"logos\" :src=\"img.logos\" _v-7780e1db=\"\">\n\t<img class=\"planet\" :src=\"img.planet\" _v-7780e1db=\"\">\n\t<img class=\"clouds_3\" :src=\"img.clouds_3\" _v-7780e1db=\"\">\n\t<img class=\"grass\" :src=\"img.grass\" _v-7780e1db=\"\">\n\t<img class=\"trees\" :src=\"img.trees\" _v-7780e1db=\"\">\n\t<img class=\"car\" :src=\"img.car\" _v-7780e1db=\"\">\n</div>\t\n";

/***/ }
/******/ ]);