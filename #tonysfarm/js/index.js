(function( $ ){
	$(document).ready(function(){
		var switching=false;
		var $$i=1,
			$$image_number=4,
			$$duration=500,
			$$interval=2000;
		//----------------------------------------------------------------------------------
		function play(){
			if( !switching ){
				var width=$(".slider").width();
				switching=true;
				function f(){
					$(".slider-imgs li").eq(-1).after( $(".slider-imgs li").eq(0) );
					$(".slider-imgs").css( {marginLeft:"+="+width+"px"} );
					if($$i<$$image_number){$$i++}else{$$i=1};
					$(".slider-tabs li").removeClass("selected");
					$(".slider-tabs li").eq($$i-1).addClass("selected");
					switching=false;
				};
				$(".slider-imgs").animate(  {marginLeft:"-="+width+"px"},$$duration,f  );
			};
		};
		//-------------------------------------------------------------------------
		setInterval(play,$$interval);
	});
})( jQuery );