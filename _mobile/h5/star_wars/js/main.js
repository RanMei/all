'use strict';

function App( config ){
	this.elem = config.elem;
	this.obj = $(this.elem);
	this.train = this.obj.find('.train');
	this.pages = this.obj.find('.page');
	this.nextBtn = this.obj.find('.next');

	this.n = 0;
	this.scrolling = false;
	this.Y1 = null;
	this.Y2 = null;
	this.init();
}

App.prototype = {
	init: function(){
		var self = this;
		window.addEventListener('DOMContentLoaded',function(){
			$('body').prepend(
				'<div class="screen"></div>'+
				'<div class="bar"></div>'
			);
			self.screen = $('.screen');
			$('.bar').css({
				width: '100%',
				height: 0
			});
			//console.log($('.bar'))
			self.screen.css({
				position: 'fixed',
				width: '100%',
				height: '100%'
			})
			//console.log(this.screen)
			self.setRem();
			self.listen();
		});
	},
	listen: function(){
		$(window).on('resize',this.setRem.bind(this));
		$(window).on("DOMMouseScroll mousewhell keydown",this.onScroll.bind(this));
		$(document).on('touchstart mousedown',this.onTouchStart.bind(this));
		$(document).on('touchend mouseup',this.onTouchEnd.bind(this));
	},
	setRem: function(){
		this.screen.show();
		//console.log(this.screen)
		this.w = this.screen.width();
		this.h = this.screen.height();
		this.screen.hide();
		$('html').css({
			'font-size': 100*this.w/720+'px'
		});
		$('.container').height( this.h );
		this.train.css({
			transition: '0s',
			transform: 'translate3d(0,-'+this.n*this.h+'px,0)'
		})
	},
	show: function(i){
		switch(i){
			case 0:
				$('.title').addClass('fade-in-from-both');
				break;
			case 1:
				$('h1').addClass('fade-in-from-left');
				break;
			case 2:
				$('.iron-man').addClass('fade-in-from-top');
				break;
		}
	},
	restore: function(i){
		switch(i){
			case 0:
				$('.title').removeClass('fade-in-from-both');
				break;
			case 1:
				$('h1').removeClass('fade-in-from-left');
				break;
			case 2:
				$('.iron-man').removeClass('fade-in-from-top');
				break;
		}
	},
	toNext: function(){
		var self = this;
		if( (!this.scrolling) && this.n<this.pages.length-1 ){
			this.scrolling = true;
			this.restore( this.n );
			console.log( this.n )
			this.train.css({
				transition: '0.3s',
				transform: 'translate3d(0,-'+(this.n+1)*this.h+'px,0)'
			});
			//console.log( $train[0] )
			setTimeout(function(){
				self.n++;
				//console.log(n)
				self.scrolling = false;
				self.show(self.n);
			},300);
		};
	},
	toPrev: function(){
		if( !this.scrolling && this.n>0 ){
			this.scrolling = true;
			this.restore(this.n);
			this.train.css({
				transition: '0.3s ease-out',
				transform: 'translate3d(0,-'+(this.n-1)*this.h+'px,0)'
			});
			var self = this;
			setTimeout(function(){
				self.n--;
				self.show(self.n);
				//console.log(n)
				self.scrolling = false;
			},300);	
		};
	},	
	onTouchStart: function(e){
		e.preventDefault();
		this.Y1 = e.originalEvent.changedTouches[0].pageY;
		console.log(this.Y1)
	},
	onTouchEnd: function(e){	
		e.preventDefault();
		this.Y2 = e.originalEvent.changedTouches[0].pageY;
		var distance = this.Y2-this.Y1;
		console.log('The distance is '+distance+'.');
		if( distance<0 ){
			this.toNext();
		}else if( distance>0 ){
			this.toPrev();
		}
	},
	onScroll: function(e){
		e = e.originalEvent;
		if( e.detail>0||e.wheelDelta<0||e.keyCode===40 ){
			this.toNext();
		}else
		if( e.detail<0||e.wheelDelta>0||e.keyCode===38 ){
			this.toPrev();
		};
	}
}

new App({
	elem: document.getElementsByTagName('html')[0]
})