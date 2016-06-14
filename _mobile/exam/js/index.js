$(document).ready(function(){
	
	function setRem (){
		var screen = $('.screen');
		screen.show();
		var w = screen.width();
		var h = screen.height();
		screen.hide();
		console.log( w,h )
		$('html').css({
			fontSize: 100*w/720+'px'
		});
		$('.container').height( h );
	}
	setRem();
	$(window).on('resize',setRem);

	$(document).on('click',function(){
		$('.frame').hide();
		$('.container').show();
	})
	// $('.swiper').swipe({
	// 	mode: 'touch',
	// 	autoplay: false
	// })
	
});