var $ = window.jQuery || window.$;

$(document).ready(function(){

	function setRem (){
		var w = $('.bar').width();
		$('html').css({
			'font-size': 100*w/720+'px'
		});
	}
	setRem();
	$(window).on('resize',setRem);
	
});