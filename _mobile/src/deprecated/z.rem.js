if( window.$ ){
	$(document).ready(function(){
		$('body').prepend(
			'<div rem-screen></div>'+
			'<div rem-bar></div>'
		);
		//console.log( document.querySelector('[rem-screen]') )
		$screen = $( document.querySelector('[rem-screen]') );
		$bar = $( document.querySelector('[rem-bar]') );
		$screen.removeAttr('rem-screen');
		$bar.removeAttr('rem-bar');
		//console.log($screen)
		// $('html').css({
		// 	'font-size': '100px'
		// });
		$bar.css({
			width: '100%'
		});
		$screen.css({
			position: 'fixed',
			width: '100%',
			height: '100%'
		})
		/**
		 * Get width and height of current viewport and set rem.
		 */
		function setRem (){
			$screen.show();
			var w = $screen.width();
			var h = $screen.height();
			$screen.hide();
			console.log( 'rem: Size of the viewport is '+w+'*'+h+'.' );
			$('html').css({
				fontSize: 100*w/720+'px'
			});
			$('.container').height( h );
		}
		setRem();
		$(window).on('resize',setRem);
	});
}else{
	document.addEventListener('DOMContentLoaded',function(){
		var $html = document.getElementsByTagName("html")[0];
		function setRem(){
			var w = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
			console.log(w);
			$html.style.fontSize = 100*w/720+"px";
		};
		setRem();
		window.addEventListener('resize',setRem);
	});
};