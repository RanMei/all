$(document).ready(function(){

	$('.btnStart').on('click',function(){
		$('.frame').hide();
		$('.container').show();
	})
	$('.train').on('click',function(){
		$('.train').css({
			transition: '2s ease',
			transform: 'translate3d(0,-50%,0)'
		})
	})
	// $('.swiper').swipe({
	// 	mode: 'touch',
	// 	autoplay: false
	// })
	
});