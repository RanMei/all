import './setRem.js';
import '../../src/z.swiper.js';
import {arr} from './data.js';
import {Mask} from '../../src/Mask.js';
import {Swiper} from '../../src/Swiper.js';
import {Page} from '../../src/Page.js';
import {ZeactDOM} from '../../src/ZeactDOM.js';

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
}

$(document).ready(function(){

	// var maskA = new Mask({
	// 	text: '确定退出吗？'
	// });
	// ZeactDOM.render( maskA,document.querySelector('body') );
	var pageA = new Page();
	ZeactDOM.render( pageA,document.querySelector('body') );

	// var swiperB = new Swiper({
	// 	items: [0,1]
	// });
	// ZeactDOM.render( swiperB,document.querySelector('body') );

	// var swiperC = new Swiper({
	// 	items: [0,1,2,3]
	// });
	// ZeactDOM.render( swiperC,document.querySelector('body') );

	var inserted = '';
	for( var i=0;i<arr.length;i++ ){
		var item = 
			'<li class="item">'+
				'<div class="card">'+
					'<img class="card-img" src="img/card_'+i+'.png"/>'+
					'<img class="banner" src="img/banner.png"/>'+
					'<img class="book" src="img/book_'+i+'.png"/>'+
					'<div class="toDetails"></div>'+
					'<img class="open_book" src="img/open_book.png"/>'+
					'<div class="ribbon">'+
						'<p class="title">'+arr[i].title+' <span>'+arr[i].className+'</span></p>'+
						'<p class="desc">'+arr[i].desc+'</p>'+
					'</div>'+
					//'</div>'+
				'</div>'+
			'</li>';
		$('.train').append( item );
	}
	//console.log( document.querySelectorAll('.item') );
	$('.swiper').swipe({
		mode: 'touch',
		autoplay: false
	})

	//console.log($('.card'));


	$('.toDetails').on('click',function(){
		var i = $(this).index('.toDetails');
		//通知服务器用户进入了哪本书的详情页。
		//forceLog( param('act_f'),'details-'+arr[i].bid );
		console.log( i,'details-'+arr[i].bid );
		//ABook.gotoReading( arr[i].bid );
	});

	window.onbeforeunload = function(){
		//forceLog( param('act_f'), JSON.stringify( $$statistics ) );
	}
	// $('.card').css({
	// 	transition:'0.3s';
	// })
});