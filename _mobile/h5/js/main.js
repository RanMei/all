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
				fontSize: 100*w/720+'px'
			});
			$('.container').height( h );
			//$pages.height( h );
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
		}
	}
	//---------------------------------------------------------------------------------------------------------------

	//$next.style.animation="poping 1s infinite";

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
	
});