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

	var _Swiper = __webpack_require__(1);

	function App(config) {
		this.elem = config.elem;
		this.obj = $(this.elem);

		this.mask = this.obj.find('.mask');

		this.main = this.obj.find('.main');
		this.countdown = this.obj.find('.countdown');
		this.days = this.obj.find('.days');
		this.hours = this.obj.find('.hours');
		this.minutes = this.obj.find('.minutes');
		this.signin = this.obj.find('.signin');
		this.mine = this.obj.find('.mine');
		this.myAvatar = this.obj.find('.myAvatar');
		this.myName = this.obj.find('.myName');
		this.coinNumber = this.obj.find('.coinNumber');
		this.myRanking = this.obj.find('.myRanking');
		this.toBookshelf = this.obj.find('.toBookshelf');
		this.list = this.obj.find('.list');
		this.more = this.obj.find('.more');

		this.nav = this.obj.find('.nav');
		this.navText = this.obj.find('.nav-text');

		this.mask = this.obj.find('.mask');
		this.colors = this.obj.find('.colors');
		this.bugleLeft = this.obj.find('.bugle-left');
		this.bugleRight = this.obj.find('.bugle-right');
		this.envelope = this.obj.find('.envelope');
		this.hand = this.obj.find('.hand');
		this.button = this.obj.find('.button');
		this.paper = this.obj.find('.paper');
		this.pDown = this.obj.find('.pDown');
		this.cloud = this.obj.find('.cloud');

		this.shadow = this.obj.find('.shadow');

		this.myResult = this.obj.find('.myResult');
		this.__name = this.obj.find('.__name');
		this.__ranking = this.obj.find('.__ranking');
		this.rPrize = this.obj.find('.rPrize');
		this.myPrize = this.obj.find('.myPrize');
		this.toContact = this.obj.find('.toContact');
		this.toTop10 = this.obj.find('.toTop10');

		this.result = this.obj.find('.result');
		this.list_1 = this.obj.find('.list-1');
		this.list_2 = this.obj.find('.list-2');
		this.list_3 = this.obj.find('.list-3');
		this.list_4 = this.obj.find('.list-4');

		this.testMode = true;
		//根据document.title判断该页面是安卓版还是ios版。
		this.ios = document.title === 'ios' ? true : false;
		console.log(document.title);

		this.data = null;

		this.init();
	}

	App.prototype = {
		init: function init() {
			//从服务器获取数据。
			this.getData();
			//监听事件。
			//this.listen();

			window.addEventListener('load', this.play.bind(this));
			this.listen2();
		},
		listen2: function listen2() {
			var self = this;
			this.toTop10.on('click', function () {
				//window.scroll(0,0)
				//self.myResult.hide();
				self.result.show().css({
					transform: 'translate3d(0,0,0)'
				});
			});
			var mark = 0;
			self.nav.on('click', function () {
				if (mark === 0) {
					self.navText.html('点击查看我的奖项');
					self.result.show().css({
						transform: 'translate3d(0,0,0)'
					});
					mark = 1;
				} else {
					self.navText.html('点击查看前10名榜单');
					self.result.show().css({
						transform: 'translate3d(0,100%,0)'
					});
					mark = 0;
				}
			});
			self.toContact.on('click', function () {
				var url = location.href.replace('act160801', 'act160804').replace('index.html', 'contact.html');
				location.href = url;
			});
		},
		play: function play() {
			var self = this;
			var Y0, Y1;
			// 开始信封下落的动画：
			this.envelope.addClass('bounceInDown');
			setTimeout(function () {
				// 开始手指上下滑动的动画：
				self.hand.show();
				self.hand.addClass('upDown');
				setTimeout(function () {
					// 开始其他元素的动画：
					self.colors.addClass('ka-colors');
					self.bugleLeft.addClass('ka-bugle-left');
					self.bugleRight.addClass('ka-bugle-right');
					self.pDown.addClass('ka-pDown');
					self.cloud.addClass('ka-cloud');
				}, 0);
				self.button.on('touchstart', function (e) {
					Y0 = e.originalEvent.changedTouches[0].pageY;
				});
				self.button.on('touchmove', function (e) {
					Y1 = e.originalEvent.changedTouches[0].pageY;
					// 如果用户的手指在seal上向下滑动了：
					if (Y1 > Y0) {
						self.hand.hide();
						self.button.addClass('buttonDown');
						self.paper.addClass('paperUp');
						setTimeout(function () {
							// 切换到下一页：
							self.play2();
						}, 800);
					}
				});
			}, 1200);
		},
		play2: function play2() {
			var self = this;
			self.myResult.show().addClass('resultShow');
			setTimeout(function () {
				self.nav.show().addClass('ka-nav');
			}, 500);
		},
		renderList: function renderList(items) {
			function item(i) {
				var __item = '\n\t\t\t\t<ul class="result-item">\n\t\t\t\t\t<li class="avatar" style="background: url(img/round.png); background-size: 100%;">\n\t\t\t\t\t\t<div class="avatar-img">\n\t\t\t\t\t\t\t<img src="' + items[i].avor + '"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class="name">\n\t\t\t\t\t\t' + items[i].name + '\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class="coin">\n\t\t\t\t\t\t消耗书币：<span>' + items[i].score + '</span>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t';
				return __item;
			}
			this.list_1.append(item(0));
			this.list_2.append(item(1) + item(2));
			this.list_3.append(item(3) + item(4) + item(5));
			this.list_4.append(item(6) + item(7) + item(8) + item(9));
		},
		getData: function getData() {
			var self = this;
			var data = {
				rankList: [{
					avor: 'img/default.jpg'
				}]
			};
			console.log(data);
			//如果开启了testMode，则对服务器返回的原始数据作以下修改以测试各种不同状态下页面的状态。
			if (self.testMode) {
				data.isLogin = true;
				data.myrank = 1;
				data.myscore = 0;
				data.mynick = '超人';
				data.myavor = null;
				data.timeleft = 0;
				//data.rankList = data.rankList.slice(0,5);
			}
			self.data = data;
			//如果剩余时间小于等于零，即如果活动结束：
			if (data.timeleft <= 0) {
				self.main.hide();
				// 渲染中奖用户的列表：
				//self.renderList( data.rankList );
				// 如果当前用户没有登录或没有获奖：
				if (data.isLogin === false || data.myrank > 10 || data.myrank <= 0) {
					self.result.css({
						transition: '0s',
						transform: 'translate3d(0,0,0)'
					});
					self.shadow.hide();
					self.result.show();
					// 如果当前用户获奖了：
				} else {
						var chars = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
						self.__name.html(data.mynick);
						self.__ranking.html('第' + chars[data.myrank] + '名');
						var src = '';
						var name = '--';
						if (data.myrank === 1) {
							src = 'img/r_prize_0.png';
							name = '[ 联想(Lenovo)小新Air 13.3英寸超轻薄笔记本电脑 ]';
						} else if (data.myrank <= 3) {
							src = 'img/r_prize_1.png';
							name = '[ iPhone6 ]';
						} else if (data.myrank <= 6) {
							src = 'img/r_prize_2.png';
							name = '[ 小米5 ]';
						} else if (data.myrank <= 10) {
							src = 'img/r_prize_3.png';
							name = '[ 京东卡500元 ]';
						};
						self.rPrize.attr('src', src);
						self.myPrize.html(name);
						self.mask.show();
					}
				// 如果活动没有结束：
			} else {
					self.main.show();
					//开始倒计时。
					self.initCountdown(data.timeleft);
					//如果用户已登录：
					if (data.isLogin) {
						self.signin.hide();
						if (!data.mynick && !data.myavor) {
							self.myAvatar.attr('src', 'img/default.png');
							self.myName.html('游客');
						} else {
							self.myAvatar.attr('src', data.myavor);
							self.myName.html(data.mynick);
						}
						self.coinNumber.html(data.myscore);
						self.myRanking.html(data.myrank === -1 || data.myscore === 0 ? '--' : data.myrank > 200 ? '200+' : data.myrank);
						self.mine.show();
					}
					self.renderItems(data.rankList);
				}
		}
	};

	new App({
		elem: document.getElementsByTagName('body')[0]
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function Swiper(config) {
		this.elem = config.elem;
		this.obj = $(this.elem);

		this.prizes = ['联想(Lenovo)小新Air 13.3英寸超轻薄笔记本电脑', 'iPhone6', '小米5', '京东卡500元'];
		this.grades = ['1', '2-3', '4-6', '7-10'];

		this.carousel = config.carousel;
		this.sticky = config.sticky;
		this.duration = config.duration || 300;

		this.currentOne = 0;
		this.trainOffsetX = 0;

		this.init();
	}

	Swiper.prototype = {
		init: function init() {
			var obj = this.obj;
			this.body = obj.find('.swiper-body');
			this.train = obj.find('.train');
			this.items = obj.find('.item');
			this.imgs = obj.find('img');
			this.dots = obj.find('.dot');
			this.prizeNumber = obj.find('.prizeNumber');
			this.desc = obj.find('.desc');

			this.switching = false;
			this.inCycle = false;

			this.length = this.items.length;
			this.last = this.length - 1;

			var self = this;

			$(window).on('load', function () {
				self.resize();
			});

			if (this.carousel) {
				this.train.css({
					'margin-left': '-100%'
				});
				this.train.prepend(this.items.eq(this.last));
			}
			this.listen();
		},
		resize: function resize() {
			var self = this;
			self.width = self.body.width();
			self.height = self.body.height();
			console.log(this.width);
			self.items.css({
				width: self.width + 'px'
			});
			self.toItem(self.currentOne);
		},
		listen: function listen() {
			var self = this;
			$(window).on('resize', function () {
				setTimeout(function () {
					self.resize();
				}, 300);
			});
			this.body.on('touchstart', this.ontouchstart.bind(this));
			this.body.on('touchmove', this.ontouchmove.bind(this));
			this.body.on('touchend', this.ontouchend.bind(this));
		},
		updatePagi: function updatePagi() {
			this.dots.removeClass('active');
			this.dots.eq(this.currentOne).addClass('active');
		},
		updateInfo: function updateInfo(i) {
			this.prizeNumber.html('[ 第' + this.grades[i] + '名 ]');
			this.desc.html(this.prizes[i]);
		},
		toItem: function toItem(i) {
			this.updateInfo(i);
			this.train.css({
				transition: this.duration / 1000 + 's ease-out',
				transform: 'translate3d(' + -i * this.width + 'px,0,0)'
			});
			this.items.removeClass('active');
			this.items.eq(this.currentOne).addClass('active');
		},
		toNext: function toNext() {
			if (this.currentOne < this.last) {
				this.currentOne++;
			} else {
				this.currentOne = 0;
			}
			this.updateInfo(this.currentOne);
			this.items.removeClass('active');
			this.items.eq(this.currentOne).addClass('active');
			this.train.css({
				transition: this.duration / 1000 + 's ease-out',
				transform: 'translate3d(' + -this.width + 'px,0,0)'
			});
			var self = this;
			setTimeout(function () {
				self.train.append(self.obj.find('.item').eq(0));
				self.train.css({
					transition: '0s',
					transform: 'translate3d(0,0,0)'
				});
			}, self.duration);
		},
		toPrev: function toPrev() {
			if (this.currentOne > 0) {
				this.currentOne--;
			} else {
				this.currentOne = this.last;
			}
			this.updateInfo(this.currentOne);
			this.items.removeClass('active');
			this.items.eq(this.currentOne).addClass('active');
			this.train.css({
				transition: this.duration / 1000 + 's ease-out',
				transform: 'translate3d(' + this.width + 'px,0,0)'
			});
			var self = this;
			setTimeout(function () {
				self.train.prepend(self.obj.find('.item').eq(self.last));
				self.train.css({
					transition: '0s',
					transform: 'translate3d(0,0,0)'
				});
			}, self.duration);
		},
		ontouchstart: function ontouchstart(e) {
			if (this.switching === false) {
				this.inCycle = true;
				// reset states of this touch cycle
				this.moveCount = 0;
				this.scrolling = false;
				this.trainOffsetX = -this.currentOne * this.width;

				this.T0 = new Date().getTime();

				this.X0 = this.X1 = e.originalEvent ? e.originalEvent.changedTouches[0].pageX : e.changedTouches[0].pageX;
				this.Y1 = e.originalEvent ? e.originalEvent.changedTouches[0].pageY : e.changedTouches[0].pageY;

				if (this.carousel) {
					this.trainOffsetX = 0;
				}
			};
		},
		ontouchmove: function ontouchmove(e) {
			if (this.inCycle && !this.switching) {
				this.X2 = e.originalEvent ? e.originalEvent.changedTouches[0].pageX : e.changedTouches[0].pageX;
				this.Y2 = e.originalEvent ? e.originalEvent.changedTouches[0].pageY : e.changedTouches[0].pageY;
				var distanceY = this.Y2 - this.Y1;
				var distance = this.X2 - this.X1;
				this.X1 = this.X2;

				this.moveCount++;
				// if the touchmove is the first one in this touch cycle:
				if (this.moveCount === 1) {
					if (Math.abs(distance) < Math.abs(distanceY)) {
						// the page will scroll
						this.scrolling = true;
					}
				}

				this.trainOffsetX += distance;
				this.itemOffsetX += distance;

				// do nothing if the page is scrolling
				if (this.scrolling) {
					// acturally the page will scroll
				} else {
						e.preventDefault();
						if (this.sticky) {
							// The train will move.
							this.train.css({
								transition: '0s',
								transform: 'translate3d(' + this.trainOffsetX + 'px,0,0)'
							});
						};
					}
			};
		},
		ontouchend: function ontouchend(e) {
			var self = this;
			if (this.inCycle) {
				if (!this.switching && !this.scrolling) {
					this.switching = true;
					this.T2 = new Date().getTime();
					var timeSpan = this.T2 - this.T0;
					//console.log( timeSpan );
					this.X2 = e.originalEvent ? e.originalEvent.changedTouches[0].pageX : e.changedTouches[0].pageX;
					var distance = this.X2 - this.X0;

					if (this.carousel === false) {
						if (distance < 0) {
							this.currentOne = this.currentOne === this.last ? this.last : this.currentOne + 1;
						} else if (distance > 0) {
							this.currentOne = this.currentOne === 0 ? 0 : this.currentOne - 1;
						}
						this.toItem(this.currentOne);
						this.inCycle = false;
					} else {
						if (distance < 0) {
							self.toNext();
						} else if (distance > 0) {
							self.toPrev();
						}
					}

					setTimeout(function () {
						self.switching = false;
					}, self.duration);
				}
			};
		},
		html: function html() {
			var str = '\n\t\t\t<div class="swiper>\n\t\t\t\t<ul class="train">\n\t\t\t\t\t<li class="item"></li>\n\t\t\t\t<ul/>\n\t\t\t\t<ul class="pagination">\n\t\t\t\t\t<li class="dot"></li>\n\t\t\t\t</ul>\n\t\t\t</div>';
			this.elem.innerHTML = str;
		},
		css: function css() {
			this.obj.css({
				width: '80%',
				margin: '50px auto'
			}), this.train.css({}), this.items.css({
				width: this.width + 'px',
				transition: this.duration / 1000 + 's'
			}), this.imgs.css({
				width: '100%'
			});
		}
	};

	exports.Swiper = Swiper;

/***/ }
/******/ ]);