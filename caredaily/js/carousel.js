(function( $ ){
	$(document).ready(function(){
		
		var n				= 0;
		var switching		= false;
		var $$swiper		= $(".swiper"),
			$$width			= $$swiper.width(),
			$$img_number	= 3,
			$$interval		= 3000,
			$$duration		= 300;
		
		//-------------------------------------------------------------------
		function init(){
			n			= 0;
			switching	= false;
			$$swiper	= $(".swiper");
			$$width		= $$swiper.width();
			$$swiper.find(".train").css({
				left: "0"
			});
			renderTabs();
			
		}
		
		function next(){
			if( !switching ){
				switching=true;
				run();
				if( n<$$img_number-1 ){
					function callback(){
						n++;
						renderTabs();
						switching=false;
					}
					$(".train").animate(  {left:"-="+$$width+"px"},$$duration,callback  );
				}else if( n===$$img_number-1 ){
					function callback(){
						$(".train li").eq(-1).prependTo(  $(".train")  );
						$(".train").css({left:"0"});
						n=0;
						renderTabs();
						switching=false;
					}
					
					$(".train li").eq(0).appendTo( $(".train") );
					$(".train").css( {left:"+="+$$width+"px"} );
					$(".train").animate(  {left:"-="+$$width+"px"},$$duration,callback  );
				}

				$$swiper.find(".runtime").stop().animate(  {"width":"0px"},0  );
			};
		};
		
		function prev(){
			if( !switching ){
				switching=true;
				run();
				if( n>0 ){
					function callback(){
						n--;
						renderTabs();
						switching=false;
					}
					$(".train").animate(  {left:"+="+$$width+"px"},$$duration,callback  );
				}else if( n===0 ){
					function callback(){
						$(".train li").eq(0).appendTo(  $(".train")  );
						$(".train").css( {left:"-"+ ($$img_number-1)*$$width +"px"} );
						n=($$img_number-1);
						renderTabs();
						switching=false;
					}
					
					$(".train li").eq(-1).prependTo( $(".train") );
					$(".train").css( {left:"-="+$$width+"px"} );
					$(".train").animate(  {left:"+="+$$width+"px"},$$duration,callback  );
				}

				$$swiper.find(".runtime").stop().animate(  {"width":"0px"},0  );
			};
		};
		
		function jump(){
			switching=true;
			var i = $(this).index();
			console.log(i);
			$(".train").animate({left:"-"+i*$$width+"px"},$$duration,function(){
				n=i;
				renderTabs();
				switching=false;
			});
		}
		function run(){
			$$swiper.find(".runtime")
				.animate(  {"width":""+$$width+""},4500  )
				.delay(500)
				.animate(  {"width":"0px"},0  );
		};
		function renderTabs(){
			$$swiper.find(".tabs>li").removeClass("active");
			$$swiper.find(".tabs>li").eq(n).addClass("active");
		}
		//-------------------------------------------------------------
		setInterval(next,$$interval);
		$$swiper.find(".next").on("click",next);
		$$swiper.find(".prev").on("click",prev);
		$$swiper.find(".tabs>li").on("click",jump);
		run();
		$(window).resize(init);
	});
})( jQuery );