import '../../src/rem.js';
import {arr} from './data.js';
import {Swiper} from './Swiper.js';

var Local = window.Local;
var forceLog = window.forceLog;
var param = window.param;
var ABook = window.ABook;
var $ = window.$;

console.log( navigator.userAgent )

function App(config){
	this.elem = config.elem;
	this.obj = $(this.elem);
	this.train = this.obj.find('.train');
	this.toDetails = this.obj.find('.toDetails');
	this.hexagons = this.obj.find('.HEXAGON');

	this.arr = config.arr;

	this.init();
}

App.prototype = {
	init: function(){
		this.render();
		this.listen();
	},
	render: function(){
		this.swiper = new Swiper({
			elem: document.getElementsByClassName('swiper')[0],
			items: this.arr,
			act: this.act.bind(this)
		})
	},
	listen: function(){
		var self = this;
		this.toDetails.on('click',function(){
			var i = $(this).index('.toDetails');
			console.log( i,'details-'+arr[i].bid );
		})
		this.hexagons.on('click',function(){
			var i = $(this).index('.HEXAGON');
			self.swiper.toItem(i)
		})
	},
	act: function(action){
		switch(action.type){
			case 'SWITCH':
				this.hexagons.removeClass('active');
				this.hexagons.eq(action.index).addClass('active');
				break;
		}
	}
}

new App({
	elem: document.getElementsByTagName('html')[0],
	arr: arr
})