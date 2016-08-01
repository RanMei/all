(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function Swiper(config) {
	this.elem = config.elem;
	this.obj = $(this.elem);

	this.items = config.items;
	this.act = config.act;

	this.carousel = config.carousel || false;
	this.duration = config.duration || 300;

	this.currentOne = 0;
	this.trainOffsetX = 0;

	this.init();
}

Swiper.prototype = {
	init: function init() {
		var _this = this;

		var obj = this.obj;
		this.train = obj.find('.train');

		var arr = this.items;
		var fragment = '';
		for (var i = 0; i < arr.length; i++) {
			fragment += '<li class="item ' + (i === 0 ? 'active' : '') + '">\n\t\t\t\t\t<div class="card">\n\t\t\t\t\t\t<img class="card-img" src="img/card_' + i + '.png"/>\n\t\t\t\t\t\t<img class="banner" src="img/banner.png"/>\n\t\t\t\t\t\t<img class="book" src="img/book_' + i + '.png"/>\n\t\t\t\t\t\t<div class="toDetails"></div>\n\t\t\t\t\t\t<img class="open_book" src="img/open_book.png"/>\n\t\t\t\t\t\t<div class="ribbon">\n\t\t\t\t\t\t\t<p class="title">' + arr[i].title + '<span>' + arr[i].className + '</span></p>\n\t\t\t\t\t\t\t<p class="desc">' + arr[i].desc + '</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</li>';
		}
		this.train.append(fragment);

		this.items = obj.find('.item');
		this.imgs = obj.find('img');
		this.dots = obj.find('.dot');

		this.switching = false;
		this.isDown = false;

		this.sticky = true;
		this.length = this.items.length;
		this.last = this.length - 1;

		var self = this;
		window.addEventListener('DOMContentLoaded', function () {
			_this.setSize();
		});

		this.renderTabs();
		this.items.css({
			transition: '0.3s'
		});
		//this.css();
		this.listen();
	},
	setSize: function setSize() {
		this.width = Number(document.defaultView.getComputedStyle(this.elem).width.replace(/px/, ''));
		this.height = Number(document.defaultView.getComputedStyle(this.elem).height.replace(/px/, ''));
	},
	resize: function resize() {
		var self = this;
		setTimeout(function () {
			self.setSize();
			self.toItem(self.currentOne);
		}, 50);
	},
	listen: function listen() {
		$(window).on('resize', this.resize.bind(this));
		this.obj.on('touchstart', this.ontouchstart.bind(this));
		this.obj.on('touchmove', this.ontouchmove.bind(this));
		this.obj.on('touchend', this.ontouchend.bind(this));
	},
	css: function css() {
		this.obj.css({
			width: '80%',
			margin: '50px auto'
		}), this.train.css({}), this.items.css({
			width: this.width + 'px'
		}), this.imgs.css({
			width: '100%'
		});
	},
	renderTabs: function renderTabs() {
		this.dots.removeClass('active');
		this.dots.eq(this.currentOne).addClass('active');
	},
	toItem: function toItem(i) {
		this.currentOne = i;
		this.act({
			type: 'SWITCH',
			index: i
		});
		this.train.css({
			transition: '0.3s',
			transform: 'translate3d(' + -i * this.width + 'px,0,0)'
		});
		this.items.removeClass('active');
		this.items.eq(this.currentOne).addClass('active');
		this.renderTabs();
		setTimeout(function () {
			this.currentItemScale = 1;
			this.otherItemScale = 0.8;
			this.switching = false;
		}, this.duration);
	},
	ontouchstart: function ontouchstart(e) {
		if (!this.switching) {
			this.moveCount = 0;
			this.scrolling = false;
			this.trainOffsetX = -this.currentOne * this.width;
			this.isDown = true;
			this.touchStartTime = new Date().getTime();

			this.X0 = this.X1 = e.originalEvent ? e.originalEvent.changedTouches[0].pageX : e.changedTouches[0].pageX;
			this.Y1 = e.originalEvent ? e.originalEvent.changedTouches[0].pageY : e.changedTouches[0].pageY;

			if (this.carousel === true) {
				if (this.currentOne === 0) {
					this.items.eq(this.last).prependTo(this.train);
					this.trainOffsetX = -this.width;
					this.train.css({
						transition: '0s',
						transform: 'translate3d(' + this.trainOffsetX + 'px,0,0)'
					});
				} else if (this.currentOne === this.last) {
					this.items.eq(0).appendTo(this.train);
					this.train.css({
						transition: '0s',
						'padding-left': this.width + 'px'
					});
				}
			}
		};
	},
	ontouchmove: function ontouchmove(e) {
		if (this.isDown) {
			this.X2 = e.originalEvent ? e.originalEvent.changedTouches[0].pageX : e.changedTouches[0].pageX;
			this.Y2 = e.originalEvent ? e.originalEvent.changedTouches[0].pageY : e.changedTouches[0].pageY;
			var distanceY = this.Y2 - this.Y1;
			var distance = this.X2 - this.X1;
			this.X1 = this.X2;

			this.moveCount++;
			if (this.moveCount === 1) {
				if (Math.abs(distance) < Math.abs(distanceY)) {
					this.scrolling = true;
				}
			}

			this.trainOffsetX += distance;
			this.itemOffsetX += distance;
			this.currentItemScale += 0.2 * distance / this.width;
			this.otherItemScale = this.otherItemScale !== 1 ? 0.8 + 0.2 * Math.abs(this.itemOffsetX) / this.width : 1;

			if (this.scrolling) {} else {
				//e.preventDefault();
				this.scrollPrevented = true;
				if (this.sticky) {
					//The train will move.
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
		if (this.isDown) {
			if (!this.switching && !this.scrolling) {
				this.switching = true;
				this.touchEndTime = new Date().getTime();
				var timeSpan = this.touchEndTime - this.touchStartTime;
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
					this.isDown = false;
				} else {
					if (true || timeSpan < 200 || distance < -0.25 * this.width || distance > 0.25 * this.width) {
						if (distance < 0) {
							//$$target = $$currentOne===$$length-1? 0:$$currentOne++ ;
							this.currentOne++;
							if (this.currentOne === this.length) {
								this.currentOne = 0;
							}
							this.state = 'toNext';
						} else if (distance > 0) {
							//$$target = $$currentOne===0? $$length-1:$$currentOne--;
							this.currentOne--;
							if (this.currentOne === -1) {
								this.currentOne = this.length - 1;
							}
							this.state = 'toPrev';
						}
					}
					this.renderTabs();
					//console.log($$currentOne)
					if (this.carousel === true && this.currentOne === 0 && distance < 0) {
						this.trainOffsetX = -this.length * this.width;
						this.train.css({
							transition: '0.3s',
							transform: 'translate3d(' + this.trainOffsetX + 'px,0,0)'
						});
						setTimeout(function () {
							self.items.eq(0).prependTo(self.train);
							self.trainOffsetX = 0;
							self.train.css({
								transition: '0s',
								transform: 'translate3d(' + self.trainOffsetX + 'px,0,0)',
								'padding-left': '0px'
							});
						}, 300);
					} else if (self.carousel === true && self.currentOne === self.length - 2 && distance > 0) {
						self.trainOffsetX = -(self.length - 2) * self.width;
						self.train.css({
							transition: '0.3s',
							transform: 'translate3d(' + self.trainOffsetX + 'px,0,0)'
						});
						setTimeout(function () {
							self.items.eq(0).prependTo(self.train);
							self.train.css({
								transition: '0s',
								'padding-left': '0px'
							});
						}, 300);
					} else if (self.carousel === true && self.currentOne === self.last && distance > 0) {
						self.trainOffsetX = 0;
						self.train.css({
							transition: '0.3s',
							transform: 'translate3d(' + self.trainOffsetX + 'px,0,0)'
						});
						setTimeout(function () {
							self.items.eq(self.last).appendTo(self.train);
							self.trainOffsetX = -(self.length - 1) * self.width;
							self.train.css({
								transition: '0s',
								transform: 'translate3d(' + self.trainOffsetX + 'px,0,0)'
							});
						}, 300);
					} else if (self.carousel === true && self.currentOne === 1 && self.state === 'toNext') {
						self.trainOffsetX = -2 * self.width;
						self.train.css({
							transition: '0.3s',
							transform: 'translate3d(' + self.trainOffsetX + 'px,0,0)'
						});
						setTimeout(function () {
							self.items.eq(self.last).appendTo(self.train);
							self.trainOffsetX = -self.width;
							self.train.css({
								transition: '0s',
								transform: 'translate3d(' + self.trainOffsetX + 'px,0,0)'
							});
						}, 300);
					} else {
						self.toItem(self.currentOne);
						self.isDown = false;
					}
				}
				setTimeout(function () {
					self.switching = false;
				}, 300);
			}
		};
	}
};

exports.Swiper = Swiper;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var arr = [{
	bid: 495203,
	author: '打眼',
	title: '宝鉴',
	className: '都市',
	desc: '都市与修仙结合的成功之作，获近千万阅读量的抢眼成绩，一切精彩尽在宝鉴之中！'
}, {
	bid: 500680,
	author: '耳根',
	title: '我欲封天',
	className: '仙侠',
	desc: '古典小说之中的代表神作！此书奠定了耳根在网络小说行业中的白金作家地位。'
}, {
	bid: 216415,
	author: '高楼大厦',
	title: '武帝',
	className: '玄幻',
	desc: '英雄争锋舍我其谁的热血传奇，天庭无主，为我武帝！付费阅读人数一路高歌猛进！'
}, {
	bid: 372652,
	author: '丁墨',
	title: '乖宠',
	className: '科幻空间',
	desc: '对未来世界的浪漫幻想之作，科幻与言情完美的结合。一路畅销，人气爆棚。'
}, {
	bid: 222411,
	author: '国王陛下',
	title: '从前有座灵剑山',
	className: '仙侠',
	desc: '轻松搞笑，令人耳目一新的非传统风格仙侠神作。改编同名漫画人气逾3亿！'
},
//**********
{
	bid: 498380,
	author: '骷髅精灵',
	title: '星战风暴',
	className: '科幻',
	desc: '讲述最热血的机甲狂潮！王霸流中的佼佼者！多次获得销售榜第一，人气居高不下。'
}, {
	bid: 489672,
	author: '林海听涛',
	title: '胜者为王',
	className: '体育竞技',
	desc: '竞技佳作，长期高居各类排行榜前列，作者林海听涛竞技类小说中的王者，没有之一！'
}, {
	bid: 751297,
	author: '单兮',
	title: '高冷老公强势宠：亲亲小娇妻',
	className: '现代言情',
	desc: '霸道总裁带你谈一场宠溺的契约恋，一经上架，24小时销售破万。'
}, {
	bid: 528920,
	author: '流浪的蛤蟆',
	title: '大猿王',
	className: '仙侠',
	desc: '东方神话色彩的古典神魔武侠小说，一经连载即受大批读者追捧，拥有千万读者阅读。'
}, {
	bid: 319657,
	author: '犁天',
	title: '三界独尊',
	className: '玄幻',
	desc: '天帝之子转生逆袭，精巧的剧情，庞大的幻想世界，阅读人数千万级，横扫各大榜单。'
}, {
	bid: 220193,
	author: '胜己',
	title: '邪少药王',
	className: '玄幻',
	desc: '纨绔邪少，邪气的人生，无可匹敌！阅读量逾220万，各项成绩斐然，粉丝众多。'
},
//**********
{
	bid: 478442,
	author: '意千重',
	title: '国色芳华',
	className: '古代言情',
	desc: '传承“一生一世一双人”的人气古言小说，连载期便登上各大榜单，出版成绩瞩目。'
}, {
	bid: 237930,
	author: '石三',
	title: '创世至尊',
	className: '玄幻',
	desc: '抬头望星问月，这方天地谁为至尊？读者阅读量近 500万，创台湾繁体销量前三作品。'
}, {
	bid: 493070,
	author: '跳舞',
	title: '天骄无双',
	className: '玄幻',
	desc: '宅男开启称霸异世之路，千万人气狂热追捧！不容忽视的穿越异界小说！'
}, {
	bid: 216436,
	author: '小刀锋利',
	title: '傲剑天穹',
	className: '玄幻',
	desc: '羸弱少年如何一路登天？浩大玄幻世界让你热血澎湃。阅读数破500万，粉丝众多。'
}, {
	bid: 665035,
	author: '辛呓呓',
	title: '霸道首席全球追妻：甜心乖乖入怀',
	className: '现代言情',
	desc: '霸道总裁强势来袭，在各项榜单中均表现不俗，深受读者喜爱。'
},
//**********
{
	bid: 462593,
	author: '血红',
	title: '三界血歌',
	className: '仙侠',
	desc: '修仙类扛鼎之作，热血修仙，气势磅礴！创最快纪录冲入百度搜索排行榜前十的佳绩。'
}, {
	bid: 349652,
	author: '妖夜',
	title: '焚天之怒',
	className: '玄幻',
	desc: '热血玄幻流宗师之作，初上线即引业界关注，为同名游戏定制小说。'
}, {
	bid: 466145,
	author: '张小花',
	title: '史上第一混乱',
	className: '都市',
	desc: '掀起网络文学搞笑风暴，幽默诙谐于谈笑间，成功改编为电影、话剧、漫画等。'
}, {
	bid: 187571,
	author: '叶非夜',
	title: '萌物遇上高富帅：101次抢婚',
	className: '现代言情',
	desc: '言情小天后暖心之作，引万千读者共鸣，阅读量近500万，出版后市场反响热烈。'
}];
exports.arr = arr;

},{}],3:[function(require,module,exports){
'use strict';

require('../../src/rem.js');

var _data = require('./data.js');

var _Swiper = require('./Swiper.js');

var Local = window.Local;
var forceLog = window.forceLog;
var param = window.param;
var ABook = window.ABook;
var $ = window.$;

console.log(navigator.userAgent);

function App(config) {
	this.elem = config.elem;
	this.obj = $(this.elem);
	this.train = this.obj.find('.train');
	this.toDetails = this.obj.find('.toDetails');
	this.hexagons = this.obj.find('.HEXAGON');

	this.arr = config.arr;

	this.init();
}

App.prototype = {
	init: function init() {
		this.render();
		this.listen();
	},
	render: function render() {
		this.swiper = new _Swiper.Swiper({
			elem: document.getElementsByClassName('swiper')[0],
			items: this.arr,
			act: this.act.bind(this)
		});
	},
	listen: function listen() {
		var self = this;
		this.toDetails.on('click', function () {
			var i = $(this).index('.toDetails');
			console.log(i, 'details-' + _data.arr[i].bid);
		});
		this.hexagons.on('click', function () {
			var i = $(this).index('.HEXAGON');
			self.swiper.toItem(i);
		});
	},
	act: function act(action) {
		switch (action.type) {
			case 'SWITCH':
				this.hexagons.removeClass('active');
				this.hexagons.eq(action.index).addClass('active');
				break;
		}
	}
};

new App({
	elem: document.getElementsByTagName('html')[0],
	arr: _data.arr
});

},{"../../src/rem.js":4,"./Swiper.js":1,"./data.js":2}],4:[function(require,module,exports){
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

},{}]},{},[3]);
