// document.addEventListener('DOMContentLoaded',function(){
	
// });

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
	/**
	 * Get width and height of current viewport and set rem.
	 */
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

// (function(){
// 	var $html = document.getElementsByTagName("html")[0];
// 	function setRem(){
// 		var w = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
// 		console.log(w);
// 		$html.style.fontSize = 100*w/720+"px";
// 	};
// 	setRem();
// 	window.addEventListener('resize',setRem);
// })();