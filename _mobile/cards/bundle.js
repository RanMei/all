(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
'use strict';

require('./setRem.js');

require('../../js/z.swiper.js');

var _data = require('./data.js');

var _zAlert = require('../../src/zAlert.js');

var Local = window.Local;
var forceLog = window.forceLog;
var param = window.param;
var ABook = window.ABook;
var $ = window.$;

//Local.init();//注册客户端方法
//forceLog( param('act_f') );

var $$statistics = {
	cards: [],
	hexagons: []
};

$(document).ready(function () {
	(0, _zAlert.zAlert)('确定退出吗？');

	var inserted = '';
	for (var i = 0; i < _data.arr.length; i++) {
		var item = '<li class="item">' + '<div class="card">' + '<img class="card-img" src="img/card_' + i + '.png"/>' + '<img class="banner" src="img/banner.png"/>' + '<img class="book" src="img/book_' + i + '.png"/>' + '<div class="toDetails"></div>' + '<img class="open_book" src="img/open_book.png"/>' + '<div class="ribbon">' + '<p class="title">' + _data.arr[i].title + ' <span>' + _data.arr[i].className + '</span></p>' + '<p class="desc">' + _data.arr[i].desc + '</p>' + '</div>' +
		//'</div>'+
		'</div>' + '</li>';
		$('.train').append(item);
	}

	$('.swiper').swipe({
		mode: 'touch',
		autoplay: false
	});

	//console.log($('.card'));

	$('.toDetails').on('click', function () {
		var i = $(this).index('.toDetails');
		//通知服务器用户进入了哪本书的详情页。
		//forceLog( param('act_f'),'details-'+arr[i].bid );
		console.log(i, 'details-' + _data.arr[i].bid);
		//ABook.gotoReading( arr[i].bid );
	});

	window.onbeforeunload = function () {}
	//forceLog( param('act_f'), JSON.stringify( $$statistics ) );

	// $('.card').css({
	// 	transition:'0.3s';
	// })
	;
});

},{"../../js/z.swiper.js":4,"../../src/zAlert.js":5,"./data.js":1,"./setRem.js":3}],3:[function(require,module,exports){
'use strict';

var $ = window.jQuery || window.$;

$(document).ready(function () {

	function setRem() {
		var w = $('.bar').width();
		$('html').css({
			'font-size': 100 * w / 720 + 'px'
		});
	}
	setRem();
	$(window).on('resize', setRem);
});

},{}],4:[function(require,module,exports){
"use strict";

//import {arr} from './data.js';

var $ = window.$;

$.fn.swipe = function (opts) {

	var $$swiper = this;
	var $$train = $$swiper.find(".train");
	// The sequence will not change after any DOM manipulation.
	var $$items = $$swiper.find(".item");
	var $$tabs = $$swiper.find(".tabs>li");
	var $$runtime = $$swiper.find(".runtime");

	// $$width is the width of this swiper.
	var $$width = $$swiper.width(),
	    $$height = $$items.height(),
	    //$$swiper.height(),
	$$length = $$items.length;

	$(document).ready(function () {

		var $$currentOne = 0;
		var $$target;
		var $$switching = false;
		// Configuration.
		var $$mode = opts.mode || "slider",
		    $$direction = opts.direction || "horizontal",
		    $$autoplay = opts.autoplay || false,
		    $$carousel = opts.carousel || false,
		    $$sticky = opts.sticky || true,
		    $$interval = opts.interval || 4000,
		    $$duration = opts.duration || 300;

		var $$keyControll = opts.keyControll || true,
		    $$wheelControll = opts.wheelControll || true;

		function $$init() {
			$$currentOne = 0;
			$$target = 0;
			$$switching = false;
			$$width = $$swiper.width();
			$$items.width($$width);
			$$height = $$items.height();
			$$swiper.height($$height);
			$$train.css({
				transform: 'translate3d(0,0,0)',
				left: 0
			});
			$$renderTabs();
		}
		$(window).on('resize', $$init);

		function $$renderTabs() {
			$$tabs.removeClass("active");
			$$tabs.eq($$currentOne).addClass("active");
		}

		$$swiper.css({
			position: "relative"
		});
		$$train.css({
			position: "absolute",
			left: 0,
			top: 0
		});

		if ($$mode === "slider") {
			var X1, X2, Y1, Y2;

			(function () {

				//-------------------------------------------------------------------

				/**
     * @param {number} i [description]
     */

				var to = function to(i) {
					// $$train.animate(
					// 	$$direction==="horizontal"?
					// 	{left:-i*$$width}:
					// 	{top:-i*$$height},
					// 	$$duration,
					// 	callback
					// );
					$$train.css({
						transition: $$duration / 1000 + 's ease',
						transform: 'translate3d(' + -i * $$width + 'px,0,0)'
					});
					setTimeout(callback, $$duration);
					function callback() {
						$$renderTabs();
						$$switching = false;
					}
					// $$currentOne = $$target;
				};

				var next = function next() {
					if (!$$switching) {
						$$switching = true;
						if ($$mode === "slider") {

							// $$target = $$currentOne + 1;
							// if( $$target<=$$length-1 ){
							// 	to( $$target );
							// };
							// if( $$target===$$length ){
							// 	$$target = 0;
							// };

							//$$runtime.stop().css(  {width:0}  );
							//run();

							// if current one is not the last one
							if ($$currentOne < $$length - 1) {
								$$currentOne++;
								to($$currentOne);
								// else if the current one is the last one
							} else if ($$currentOne === $$length - 1) {
									$$items.eq(0).appendTo($$train);
									$$train.css({
										transition: '0s',
										transform: 'translate3d(-' + ($$length - 2) * $$width + 'px,0,0)'
									});
									setTimeout(function () {
										$$train.css({
											transition: $$duration / 1000 + 's',
											transform: 'translate3d(-' + ($$length - 1) * $$width + 'px,0,0)'
										});
										setTimeout(function () {
											$$items.eq(0).prependTo($$train);
											$$train.css({
												transition: '0s',
												transform: 'translate3d(0,0,0)'
											});
											$$currentOne = 0;
											$$renderTabs();
											$$switching = false;
										}, $$duration);
									}, 20);
									// $$items.eq(0).appendTo( $$train );
									// // $$train.css(
									// // 	$$direction==="horizontal"?
									// // 	{left:"+="+$$width+"px"}:
									// // 	{top:"+="+$$height+"px"}
									// // );
									// // $$train.animate(
									// // 	$$direction==="horizontal"?
									// // 	{left:"-="+$$width+"px"}:
									// // 	{top:"-="+$$height+"px"},
									// // 	$$duration,
									// // 	callback
									// // );
									// function callback(){
									// 	$$train.css(
									// 		$$direction==="horizontal"?
									// 		{left:0}:
									// 		{top:0}
									// 	);
									// 	$$items.eq(0).prependTo( $$train );
									// 	$$currentOne = 0;
									// 	$$renderTabs();
									// 	$$switching = false;
									// }
								}
						};
					};
				};

				var prev = function prev() {
					if (!$$switching) {
						$$switching = true;
						if ($$mode === "slider") {
							//$$runtime.stop().animate(  {"width":"0px"},0  );
							if ($$currentOne > 0) {
								$$currentOne--;
								to($$currentOne);
							} else if ($$currentOne === 0) {
								// function callback(){
								// 	$$items.eq(-1).appendTo(  $$train  );
								// 	$$train.css(
								// 		$$direction==="horizontal"?
								// 		{left:"-"+ ($$length-1)*$$width +"px"}:
								// 		{top:"-"+ ($$length-1)*$$height +"px"}
								// 	);
								// 	$$currentOne = ($$length-1);
								// 	$$renderTabs();
								// 	$$switching = false;
								// }

								// $$items.eq(-1).prependTo( $$train );
								// $$train.css(
								// 	$$direction==="horizontal"?
								// 	{left:"-="+$$width+"px"}:
								// 	{top:"-="+$$height+"px"}
								// );
								// $$train.animate(
								// 	$$direction==="horizontal"?
								// 	{left:"+="+$$width+"px"}:
								// 	{top:"+="+$$height+"px"},
								// 	$$duration,
								// 	callback
								// );
								$$items.eq(-1).prependTo($$train);
								$$train.css({
									transition: '0s',
									transform: 'translate3d(' + -$$width + 'px,0,0)'
								});
								setTimeout(function () {
									$$train.css({
										transition: $$duration / 1000 + 's',
										transform: 'translate3d(0,0,0)'
									});
									setTimeout(function () {
										$$items.eq(-1).appendTo($$train);
										$$train.css({
											transition: '0s',
											transform: 'translate3d(-' + ($$length - 1) * $$width + 'px,0,0)'
										});
										$$currentOne = $$length - 1;
										$$renderTabs();
										$$switching = false;
									}, $$duration);
								}, 20);
							}
						};
					};
				};

				var jump = function jump() {
					if (!$$switching) {
						$$switching = true;
						if ($$mode === "slider") {
							$$currentOne = $(this).index();
							to($$currentOne);
						};
					};
				};

				var run = function run() {
					$$runtime.animate({ "width": $$width }, $$interval, function () {
						$$runtime.css({ width: 0 });
					});
				};

				if ($$direction === "horizontal") {} else if ($$direction === "vertical") {
					$$train.css({
						width: '100%'
					});
					$$items.css({
						float: ''
					});
				};

				;

				;

				setInterval(next, $$interval);
				$$swiper.find(".next").on("click", next);
				$$swiper.find(".prev").on("click", prev);
				$$tabs.on("click", jump);
				//run();

				// $$train.on("mousedown touchstart",function(e){
				// 	X1 = e.pageX;
				// 	Y1 = e.pageY;
				// });
				// $$train.on("mouseup mouseleave touchend",function(e){
				// 	X2 = e.pageX;
				// 	Y2 = e.pageY;
				// 	if( $$direction==="horizontal" ){
				// 		X2<X1?next():prev();
				// 	};
				// 	if( $$direction==="vertical" ){
				// 		Y2<Y1?next():prev();
				// 	};
				// });
				$$train.on("mousewheel DOMMouseScroll", function (e) {
					e.preventDefault();
					if (e.originalEvent.detail > 0) {
						next();
					} else {
						prev();
					};
				});
			})();
		};

		//			
		if ($$mode === 'touch') {
			var trainOffsetX;
			var itemOffsetX;
			var currentItemScale;
			var otherItemScale;
			var isDown;
			var originalX;
			var prevX;
			var currentX;
			var touchStartTime, touchEndTime;
			var Y1, Y2;
			var scrollPrevented;
			var hexagons;

			(function () {
				var toCard = function toCard(i) {
					//console.log($$width);
					$$items.css({ transition: $$duration / 1000 + 's' });
					$$items.addClass('inactive');
					$$items.eq(i).removeClass('inactive');
					$$train.css({
						transition: '0.3s',
						transform: 'translate3d(' + -i * $$width + 'px,0,0)'
					});
					// $$items.eq( $$currentOne ).css({
					// 	transform: ''
					// });
					// $$items.eq( $$currentOne-1 ).css({
					// 	transition: '0.3s',
					// 	transform: 'scale(0.8)'
					// })
					$('.HEXAGON').removeClass('active');
					$('.HEXAGON').eq($$currentOne).addClass('active');
					$$renderTabs();
					setTimeout(function () {
						currentItemScale = 1;
						otherItemScale = 0.8;
						$$switching = false;
					}, $$duration);
					// $$train.animate( {
					// 	left:(-i*$$width)
					// },$$duration,function(){
					// 	$$renderTabs();

					// 	$('.HEXAGON').removeClass('active');
					// 	$('.HEXAGON').eq( $$currentOne ).addClass('active');

					// 	$$switching = false;
					// } );
				};

				var next = function next() {
					if (!$$switching) {
						$$currentOne++;
						if ($$currentOne === $$length) {
							$$currentOne = 0;
						};
						toCard($$currentOne);
					};
				};

				var prev = function prev() {
					$$currentOne--;
					if ($$currentOne === -1) {
						$$currentOne = $$length - 1;
					};
					toCard($$currentOne);
				};

				trainOffsetX = 0;
				itemOffsetX = 0;
				currentItemScale = 1;
				otherItemScale = 0.8;
				isDown = false;
				scrollPrevented = false;


				$$items.addClass('inactive');
				$$items.eq(0).removeClass('inactive');

				$$train.on("mousedown touchstart", function (e) {

					if (true) {
						scrollPrevented = false;
						trainOffsetX = -$$currentOne * $$width;
						$$switching = true;
						//e.preventDefault();
						isDown = true;
						touchStartTime = new Date().getTime();
						//console.log(e.changedTouches[0].pageX)
						originalX = e.originalEvent.changedTouches[0].pageX || e.pageX || e.originalEvent.changedTouches[0].pageX;
						Y1 = e.originalEvent.changedTouches[0].pageY;
						prevX = originalX;
						if ($$carousel === true) {
							if ($$currentOne === $$length - 1) {
								$$items.eq(0).appendTo($$train);
								$$train.css({ left: '+=' + $$width + 'px' });
							}
						}
					};
				});
				$$train.on("mousemove touchmove", function (e) {

					if (isDown) {
						currentX = e.originalEvent.changedTouches[0].pageX || e.pageX || e.originalEvent.changedTouches[0].pageX;
						Y2 = e.originalEvent.changedTouches[0].pageY;
						var distanceY = Y2 - Y1;
						var distance = currentX - prevX;
						prevX = currentX;
						//console.log(distance)
						trainOffsetX += distance;
						itemOffsetX += distance;
						currentItemScale += 0.2 * distance / $$width;
						otherItemScale = otherItemScale !== 1 ? 0.8 + 0.2 * Math.abs(itemOffsetX) / $$width : 1;
						//console.log(currentItemScale)

						if (!scrollPrevented && Math.abs(distance) < Math.abs(distanceY)) {} else {
							e.preventDefault();
							scrollPrevented = true;
							if ($$sticky) {
								//The train will move.
								$$train.css({
									transition: '0s',
									transform: 'translate3d(' + trainOffsetX + 'px,0,0)'
								});
								// $$items.eq( $$currentOne ).css({
								// 	transition: '0s',
								// 	transform: 'scale('+currentItemScale+')'
								// })
								// // $$items.eq( $$currentOne-1 ).css({
								// // 	transition: '0s',
								// // 	transform: 'scale('+otherItemScale+')'
								// // })
								// $$items.eq( $$currentOne+1 ).css({
								// 	transition: '0s',
								// 	transform: 'scale('+otherItemScale+')'
								// })
							};
						}

						// // $$train.css( {left:"+="+distance+"px"},0 );
					};
				});
				$$train.on("mouseup mouseleave touchend", function (e) {
					if (isDown) {
						touchEndTime = new Date().getTime();
						var timeSpan = touchEndTime - touchStartTime;
						//console.log( timeSpan );
						currentX = e.originalEvent.changedTouches[0].pageX || e.pageX || e.originalEvent.changedTouches[0].pageX;
						var distance = currentX - originalX;
						if (timeSpan < 200 || distance < -0.25 * $$width || distance > 0.25 * $$width) {
							if (distance < 0) {
								$$currentOne++;
								if ($$currentOne === $$length) {
									$$currentOne = $$carousel ? 0 : $$length - 1;
								} else {
									//通知服务器用户浏览了哪张卡片。
									//forceLog( param('act_f'),'card-'+$$currentOne );
									//$$statistics.cards.push( $$currentOne );
									//console.log( $$currentOne,'card-'+arr[$$currentOne].bid );
								}
							} else if (distance > 0) {
									$$currentOne--;
									if ($$currentOne === -1) {
										$$currentOne = $$carousel ? $$length - 1 : 0;
									} else {
										//通知服务器用户浏览了哪张卡片。
										//forceLog( param('act_f'),'card-'+$$currentOne );
										//$$statistics.cards.push( $$currentOne );
										//console.log( $$currentOne,'card-'+arr[$$currentOne].bid );
									}
								}
						}

						// if( $$carousel===true&&$$currentOne===0 ){
						// 	$$train.animate(
						// 		{left:-($$length-1)*$$width},
						// 		$$duration,
						// 		function(){
						// 			$$items.eq(0).prependTo($$train);
						// 			$$train.css({left:0});
						// 			$$renderTabs();
						// 			$$switching = false;
						// 		}
						// 	 )
						// };
						//console.log( $$currentOne );
						//console.log( toCard );
						toCard($$currentOne);
						isDown = false;
					};
				});


				if ($$keyControll) {
					$(document).on('keydown', function () {});
				}
				// if( $$wheelControll ){
				// 	$$train.on("mousewheel DOMMouseScroll",function(e){
				// 		e.preventDefault();
				// 		console.log(e.originalEvent.detail)
				// 		if( e.originalEvent.detail>0 ){
				// 			next();
				// 		}else{
				// 			prev();
				// 		};
				// 	});
				// }
				if ($$autoplay) {
					setInterval(next, 4000);
				}
				$$swiper.find(".next").on("click", next);
				$$swiper.find(".prev").on("click", prev);

				hexagons = $('.HEXAGON');

				hexagons.on('click', function () {
					if (true) {
						//switching = true;
						//for jQuery
						var i = $(this).index('.HEXAGON');
						//通知服务器用户点击了哪个六边形。
						//forceLog( param('act_f'),'hexagon-'+i );
						//$$statistics.hexagons.push(i);
						console.log(i, 'hexagon-' + i);
						hexagons.removeClass('active');
						$(this).addClass('active');
						$$currentOne = i;
						toCard($$currentOne);
					}
				});
			})();
		};

		//
		if ($$mode === 'fade') {
			(function () {

				// functions

				var to = function to(i) {
					$$items.eq(i).siblings().fadeOut(100);
					$$items.eq(i).fadeIn(400);
					$$renderTabs();
				};

				var next = function next() {
					$$currentOne++;
					if ($$currentOne === $$length) {
						$$currentOne = 0;
					};
					to($$currentOne);
				};

				var prev = function prev() {
					$$currentOne--;
					if ($$currentOne === -1) {
						$$currentOne = $$length - 1;
					};
					to($$currentOne);
				};

				// actions


				// init
				$$train.css({
					width: "100%"
				});
				$$items.css({
					position: "absolute",
					display: "none"
				});
				$$items.eq($$currentOne).show();setInterval(next, 3000);
				$$tabs.on("click", function () {
					$$currentOne = $(this).index();
					to($$currentOne);
				});
				$$swiper.find(".next").on("click", next);
				$$swiper.find(".prev").on("click", prev);
			})();
		};
	});
};

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var $ = window.$;

$('body').prepend('<div class="mask2016">' + '<div class="bg"></div>' + '<div class="panel">' + '<p class="text"></p>' + '<div class="buttons">' + '<div class="button confirm">确定</div>' + '<div class="button cancel">取消</div>' + '</div>' + '</div>' + '</div>');

var $mask = $('.mask2016');
var $bg = $mask.find('.bg');
var $panel = $mask.find('.panel');
var $text = $mask.find('.text');
var $buttons = $mask.find('.buttons');
var $button = $mask.find('.button');
var $confirm = $mask.find('.confirm');
var $cancel = $mask.find('.cancel');

$mask.css({
	position: 'fixed',
	left: 0,
	top: 0,
	width: '100%',
	height: '100%',
	display: 'none',
	'z-index': 1000
});
$bg.css({
	width: '100%',
	height: '100%',
	background: 'rgba(0,0,0,0.5)'
});
$panel.css({
	position: 'absolute',
	left: 0, top: 0, right: 0, bottom: 0,
	width: '5rem',
	height: '3rem',
	margin: 'auto',
	background: 'white',
	'font-size': '0.3rem'
});
$text.css({
	'box-sizing': 'border-box',
	padding: '0.15rem'
});
$buttons.css({
	overflow: 'hidden'
});
$button.css({
	float: 'left',
	width: '50%',
	'text-align': 'center'
});

$bg.on('click', function () {
	$mask.hide();
});
$cancel.on('click', function () {
	$mask.hide();
});

function zAlert(text) {
	$text.html(text);
	$mask.show();
}

exports.zAlert = zAlert;

},{}]},{},[2]);
