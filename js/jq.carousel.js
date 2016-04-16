(function( $ ){
	
	$.fn.swipe = function( opts ){
			
		var $$swiper = this;
		var $$train = $$swiper.find(".train");
		var $$runtime = $$swiper.find(".runtime");
		// The sequence will not change after any DOM manipulation.
		var $$items = $$swiper.find(".train>li");
		var $$width		= $$swiper.width(),
			$$height	= $$swiper.height(),
			$$length	= $$items.length;
		
		$(document).ready(function(){
			
			var $$currentOne	= 0;
			var $$switching		= false;
			// $$width is the width of this swiper.
			var $$mode			= opts.mode			|| "slider",
				$$direction		= opts.direction	|| "horizontal",
				$$carousel		= opts.carousel		|| false,
				$$interval		= opts.interval		|| 4000,
				$$duration		= opts.duration		|| 300;

				$$swiper.css({
					position:"relative",
					width: $$width+"px"
				});
				$$train.css({
					position:"absolute",
					left:0,
					top:0
				});		

			function $$renderTabs(){
				$$swiper.find(".tabs>li").removeClass("active");
				$$swiper.find(".tabs>li").eq( $$currentOne ).addClass("active");
			}
			
			if( $$mode==="slider" ){
				if( $$direction==="horizontal" ){

				}else if( $$direction==="vertical" ){
					$$train.css({
						width: '100%'
					});
					$$items.css({
						float: ''
					});

				}

				//-------------------------------------------------------------------
				function init(){
					$$currentOne			= 0;
					$$switching	= false;
					$$width		= $$swiper.width();
					$$train.css({
						left: 0
					});
					$$renderTabs();
					
				}
				
				// @param {number} i			
				function to( i ){
					function callback() {
						$$renderTabs();
						$$switching=false;
					}
					$$train.animate(
						$$direction==="horizontal"?
						{left:-i*$$width}:
						{top:-i*$$height},
						$$duration,
						callback
					);
				}

				function next(){
					if( !$$switching ){
						$$switching=true;
						if( $$mode==="slider" ){
							$$runtime.stop().css(  {width:0}  );
							run();
							if( $$currentOne<$$length-1 ){
								$$currentOne++;
								to( $$currentOne );
							}else if( $$currentOne===$$length-1 ){
								function callback(){
									$$train.css(
										$$direction==="horizontal"?
										{left:0}:
										{top:0}
									);
									$$items.eq(0).prependTo( $$train );
									$$currentOne = 0;
									$$renderTabs();
									$$switching = false;
								}
								
								$$items.eq(0).appendTo( $$train );
								$$train.css(
									$$direction==="horizontal"?
									{left:"+="+$$width+"px"}:
									{top:"+="+$$height+"px"}
								);
								$$train.animate(
									$$direction==="horizontal"?
									{left:"-="+$$width+"px"}:
									{top:"-="+$$height+"px"},
									$$duration,
									callback 
								);
							}
						};

						
					};
				};
				
				function prev(){
					if( !$$switching ){
						$$switching = true;
						if( $$mode==="slider" ){
							$$runtime.stop().animate(  {"width":"0px"},0  );
							if( $$currentOne>0 ){
								$$currentOne--;
								to( $$currentOne );
							}else if( $$currentOne===0 ){
								function callback(){
									$$items.eq(-1).appendTo(  $$train  );
									$$train.css(
										$$direction==="horizontal"?
										{left:"-"+ ($$length-1)*$$width +"px"}:
										{top:"-"+ ($$length-1)*$$height +"px"}
									);
									$$currentOne = ($$length-1);
									$$renderTabs();
									$$switching = false;
								}
								
								$$items.eq(-1).prependTo( $$train );
								$$train.css(
									$$direction==="horizontal"?
									{left:"-="+$$width+"px"}:
									{top:"-="+$$height+"px"}
								);
								$$train.animate(
									$$direction==="horizontal"?
									{left:"+="+$$width+"px"}:
									{top:"+="+$$height+"px"},
									$$duration,
									callback
								);
							}
						};
					};
				};
				
				function jump(){
					if(!$$switching){
						$$switching=true;
						if( $$mode==="slider" ){
							$$currentOne = $(this).index();
							to( $$currentOne );
						};
					};
				}
				function run(){
					$$runtime
						.animate(  {"width": $$width},$$interval,function(){
							$$runtime.css({width:0});
						});
				};

				setInterval(next,$$interval);
				$$swiper.find(".next").on("click",next);
				$$swiper.find(".prev").on("click",prev);
				$$swiper.find(".tabs>li").on("click",jump);
				run();
				$(window).resize(init);
				
				var X1,X2,Y1,Y2;
				// $$train.on("mousedown touchstart",function(e){
				// 	X1 = e.pageX;
				// 	Y1 = e.pageY;
				// });
				// $$train.on("mouseup mouseleave touchend",function(e){
				// 	X2 = e.pageX;
				// 	Y2 = e.pageY;
				// 	if( $$direction==="horizontal" ){
				// 		X2<X1?next():prev();
				// 	};
				// 	if( $$direction==="vertical" ){
				// 		Y2<Y1?next():prev();
				// 	};
				// });
				$$train.on("mousewheel DOMMouseScroll",function(e){
					e.preventDefault();
					if( e.originalEvent.detail>0 ){
						next();
					}else{
						prev();
					};
				});


			};

			//			
			if( $$mode==='touch' ){
				var isDown = false;
				var originalX;
				var X;
				var currentX;
				var t1,t2;
				function to( i ){
					$$train.animate( {
						left:(-i*$$width)
					},300,function(){$$renderTabs();} );
				}
				$$train.on("mousedown touchstart",function(e){
					e.preventDefault();
					isDown = true;
					t1 = new Date().getTime();
					originalX = e.pageX || e.originalEvent.changedTouches[0].pageX;
					X = e.pageX || e.originalEvent.changedTouches[0].pageX;
				});
				$$train.on("mousemove touchmove",function(e){
					if( isDown ){
						currentX = e.pageX || e.originalEvent.changedTouches[0].pageX;
						var distance = currentX - X;
						X = currentX;
						$$train.animate( {left:"+="+distance+"px"},0 );
					};
				});
				$$train.on("mouseup mouseleave touchend",function(e){
					if( isDown ){
						t2 = new Date().getTime();
						console.log(t2-t1);
						currentX = e.pageX || e.originalEvent.changedTouches[0].pageX;
						var distance = currentX - originalX;
						if( 
							(t2-t1<200&&distance<0&&$$currentOne<$$length-1) ||
							(distance<-0.25*$$width&&$$currentOne<$$length-1)
						){
							$$currentOne++;
						}else if( 
							(t2-t1<200&&distance>0&&$$currentOne>0) ||
							(distance>0.25*$$width&&$$currentOne>0)
						){
							$$currentOne--;
						};
						to( $$currentOne );
						isDown = false;
					};
				});
				function next(){
					$$currentOne++;
					if( $$currentOne===$$length ){
						$$currentOne = 0;
					};
					to( $$currentOne );
				}
				function prev(){
					$$currentOne--;
					if( $$currentOne===-1 ){
						$$currentOne = $$length-1;
					};
					to( $$currentOne );
				}
				setInterval(next,4000);
				$$swiper.find(".next").on("click",next);
				$$swiper.find(".prev").on("click",prev);
			};

			//
			if( $$mode==='fade' ){
				$$train.css({
					width: "100%"
				});
				$$items.css({
					position: "absolute",
					display: "none"
				});
				$$items.eq( $$currentOne ).show();
				function to(){
					$$items.eq( $$currentOne ).siblings().fadeOut(100);
					$$items.eq( $$currentOne ).fadeIn(400);
					$$renderTabs();
				}
				function next(){
					$$currentOne++;
					if( $$currentOne===$$length ){
						$$currentOne = 0;
					};
					to( $$currentOne );
				}
				setInterval(next,3000);
				$$swiper.find(".tabs>li").on("click",function(){
					$$currentOne = $(this).index();
					to( $$currentOne );
				});
				$$swiper.find(".next").on("click",next);
			};

		});
	};
		
})( jQuery );