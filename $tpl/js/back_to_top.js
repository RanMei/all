/*
API needed: $(".back_to_top")
*/

(function( $ ){
	
	$(document).ready(function(){
		$(window).scroll(function(){
			if( $(window).scrollTop()>300 ){
				$(".back_to_top").fadeIn();
			}else{
				$(".back_to_top").fadeOut();
			};
		});
		$(".back_to_top").on("click",function(){
			$("html").animate(  {"scrollTop":"0"}  ,500);
		});
	});

})( jQuery );