$(document).ready(function(){
	$('body').prepend(
		'<div class="screen"></div>'+
		'<div class="bar"></div>'
	);
	$('.bar').css({
		width: '100%'
	});
	$('.screen').css({
		position: 'fixed',
		width: '100%',
		height: '100%'
	})
	
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
});