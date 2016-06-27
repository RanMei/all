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
			function callback(){
				$(".slider .train a").eq(0).appendTo( $(".slider .train") );
				$(".slider .train").css( {marginLeft:"+="+width+"px"} );
				if( $$i<$$image_number ){$$i++}else{$$i=1};
				$(".slider .tabs li").removeClass("selected");
				$(".slider .tabs li").eq($$i-1).addClass("selected");
				switching=false;
			};
			$(".slider .train").animate(  {marginLeft:"-="+width+"px"},$$duration,callback  );
		};
	};
	//-------------------------------------------------------------------------
	setInterval(play,$$interval);
});

$(document).ready(function(){

	$(".spec").on("click",function(){
		$(".spec").removeClass("selected");
		$(this).addClass("selected");
	});
	$(".details ul li").on("click",function(){
		$(".details ul li").removeClass("selected");
		$(this).addClass("selected");
	});

	
	$(".to_cart").on("click",function(){
		$(this).html("已加入购物车");	
	});
	
});