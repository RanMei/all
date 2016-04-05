(function( $ ){
	
	$.fn.backToTop = function(){

		var $$this = this;

		$(document).ready(function(){
			$(window).scroll(function(){
				if( $(window).scrollTop()>300 ){
					$$this.fadeIn();
				}else{
					$$this.fadeOut();
				};
			});
			$$this.on("click",function(){
				$("html").animate(  {"scrollTop":"0"}  ,500);//for Firefox
				$("body").animate(  {"scrollTop":"0"}  ,500);//for Chrome
			});
		});

	};

})( jQuery );