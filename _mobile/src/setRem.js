var $ = window.jQuery;

$(document).ready(function(){

	function setRem (){
		var w = $('.bar').width();
		$('html').css({
			fontSize: 100*w/720+'px'
		});
	}
	setRem();
	$(window).on('resize',setRem);
	
});