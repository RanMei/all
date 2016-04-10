(function( $ ){
/*
	HTML structure
	<div class="swiper">
		<ul class="train">
			<li style="background: url(images/swiper_0.jpg) center;"></li>
			<li style="background: url(images/swiper_1.jpg) center;"></li>
			<li style="background: url(images/swiper_2.jpg) center;"></li>
		</ul>
		<div class="centered">
			<ul class="tabs">
				<li class="active"></li><li></li><li></li>
			</ul>
		</div>
	</div>
*/

	
	$.fn.swipe = function( params ){
			
		var $$swiper = this;
		
		$(document).ready(function(){
			
			var n			= 0;
			var switching	= false;
			// $$width is the width of this swiper.
			var $$mode			= params.mode			|| "slider",
				$$width			= params.width			|| $$swiper.width(),
				$$slideNumber	= params.slideNumber	|| 3,
				$$interval		= params.interval		|| 4000,
				$$duration		= params.duration		|| 300;

			$$swiper.css({
				position:"relative",
				width: $$width+"px"
			});
			$$swiper.find(".train").css({
				position:"absolute",
				left:0,
				top:0
			});		
			
			//-------------------------------------------------------------------
			function init(){
				n			= 0;
				switching	= false;
				$$width		= $$swiper.width();
				$$swiper.find(".train").css({
					left: "0"
				});
				renderTabs();
				
			}
			
			function next(){
				if( !switching ){
					switching=true;
					if( $$mode==="slider" ){
						run();
						if( n<$$slideNumber-1 ){
							function callback(){
								n++;
								renderTabs();
								switching=false;
							}
							$(".train").animate(  {left:"-="+$$width+"px"},$$duration,callback  );
						}else if( n===$$slideNumber-1 ){
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
					}else if( $$mode==="focus" ){
						
					}

					$$swiper.find(".runtime").stop().animate(  {"width":"0px"},0  );
				};
			};
			
			function prev(){
				if( !switching ){
					switching=true;
					if( $$mode==="slider" ){
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
								$(".train").css( {left:"-"+ ($$slideNumber-1)*$$width +"px"} );
								n=($$slideNumber-1);
								renderTabs();
								switching=false;
							}
							
							$(".train li").eq(-1).prependTo( $(".train") );
							$(".train").css( {left:"-="+$$width+"px"} );
							$(".train").animate(  {left:"+="+$$width+"px"},$$duration,callback  );
						}
					};
					$$swiper.find(".runtime").stop().animate(  {"width":"0px"},0  );
				};
			};
			
			function jump(){
				switching=true;
				if( $$mode==="slider" ){
					var i = $(this).index();
					console.log(i);
					$(".train").animate({left:"-"+i*$$width+"px"},$$duration,function(){
						n=i;
						renderTabs();
						switching=false;
					});
				};
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
	};
		
})( jQuery );