$( document ).ready(function(){

	//variables
	var w,h;
	var 
		$train = $('.train'),
		$pages = $('.page'),
		$next = $('.next');
	var n = 0;
	var scrolling = false;

	function init(){
		$('body').prepend(
			'<div class="screen"></div>'+
			'<div class="bar"></div>'
		);
		$('.bar').css({
			width: '100%',
			height: 0
		});
		$('.screen').css({
			position: 'fixed',
			width: '100%',
			height: '100%'
		})
		
		function setRem (){
			var screen = $('.screen');
			screen.show();
			w = screen.width();
			h = screen.height();
			screen.hide();
			console.log( w,h )
			$('html').css({
				'font-size': 100*w/720+'px'
			});
			$('.container').height( h );
			//$pages.height( h );
			$train.css({
				transition: '0s',
				transform: 'translate3d(0,-'+n*h+'px,0)'
			})
		}
		setRem();
		$(window).on('resize',setRem);
	};
	init();

	function toNext(){
		if( !scrolling && n<$pages.length-1 ){
			scrolling = true;
			restore(n);
			$train.css({
				transition: '0.3s',
				transform: 'translate3d(0,-'+(n+1)*h+'px,0)'
			});
			//console.log( $train[0] )
			setTimeout(function(){
				n++;
				//console.log(n)
				scrolling = false;
				show(n);
			},300);
			// $('.train').animate({marginTop:'-='+h},200,function(){
			// 	n++;
			// 	scrolling = false;
			// });
		};
	};
	function toPrev(){
		if( !scrolling && n>0 ){
			scrolling = true;
			restore(n);
			$train.css({
				transition: '0.3s ease-out',
				transform: 'translate3d(0,-'+(n-1)*h+'px,0)'
			});
			setTimeout(function(){
				n--;
				show(n);
				//console.log(n)
				scrolling = false;
			},300);	
			// $('.train').animate({marginTop:'+='+h},200,function(){
			// 	n--;
			// 	scrolling = false;
			// });		
		};		
	};
	function show(i){
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
	}
	function restore(i){
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
	}

	$('.next').on("click",toNext);

	$( window ).on("DOMMouseScroll mousewhell keydown",function(e){
		e = e || window.event;
		//console.log(e.keyCode)
		if( e.detail>0||e.wheelDelta<0||e.keyCode===40 ){
			toNext();
		}else
		if( e.detail<0||e.wheelDelta>0||e.keyCode===38 ){
			toPrev();
		};
	});
	
	var Y1,Y2;
	$(document).on('touchstart mousedown',function(e){
		e.preventDefault();
		Y1 = e.originalEvent.changedTouches[0].pageY;
		//console.log(Y1);
	});
	$(document).on('touchend mouseup',function(e){
		e.preventDefault();
		Y2 = e.originalEvent.changedTouches[0].pageY;
		var distance = Y2-Y1;
		console.log(distance);
		if( distance<0 ){
			toNext();
		}else if( distance>0 ){
			toPrev();
		}
	});

});