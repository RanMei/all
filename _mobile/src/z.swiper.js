import {arr} from './data.js';

var $ = window.$;
	
$.fn.swipe = function( opts ){
		
	var $$swiper = this;
	var $$train = $$swiper.find(".train");
	// The sequence will not change after any DOM manipulation.
	var $$items = $$swiper.find(".item");
	var $$tabs = $$swiper.find(".tabs>li");
	var $$runtime = $$swiper.find(".runtime");

	// $$width is the width of this swiper.
	var $$width		= $$swiper.width(),
		$$height	= $$items.height(),//$$swiper.height(),
		$$length	= $$items.length;
	
	$(document).ready(function(){
		
		var $$currentOne	= 0;
		var $$target;
		var $$switching		= false;
		// Configuration.
		var $$mode			= opts.mode			|| "slider",
			$$direction		= opts.direction	|| "horizontal",
			$$autoplay		= opts.autoplay		|| true,
			$$carousel		= opts.carousel		|| false,
			$$interval		= opts.interval		|| 4000,
			$$duration		= opts.duration		|| 150;	

		function $$init(){
			$$currentOne= 0;
			$$target	= 0;
			$$switching	= false;
			$$width		= $$swiper.width();
			$$height	= $$items.height();
			$$swiper.height( $$height );
			$$train.css({
				transform: 'translate3d(0,0,0)',
				left: 0
			});
			$$renderTabs();
		}
		$(window).on('resize',$$init);

		function $$renderTabs(){
			$$tabs.removeClass("active");
			$$tabs.eq( $$currentOne ).addClass("active");
		}

		function $$handleResize(){
			$$width = $$swiper.width();
			var w = $$swiper.width();
			$$items.width( w );
		}
		$$handleResize();
		$(window).on('resize',$$handleResize);

		$$swiper.css({
			position:"relative"
		});
		$$train.css({
			position:"absolute",
			left:0,
			top:0
		});	
		
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
				// $$currentOne = $$target;
			}

			function next(){
				if( !$$switching ){
					$$switching=true;
					if( $$mode==="slider" ){
						
						// $$target = $$currentOne + 1;
						// if( $$target<=$$length-1 ){
						// 	to( $$target );
						// };
						// if( $$target===$$length ){
						// 	$$target = 0;
						// };
						
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
			$$tabs.on("click",jump);
			run();
			
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
			var trainOffsetX = 0;
			var itemOffsetX = 0;
			var currentItemScale = 1;
			var otherItemScale = 0.8;
			var isDown = false;
			var originalX;
			var X;
			var currentX;
			var t1,t2;
			function toCard( i ){
				//console.log($$width);
				$$items.css({transition:'0.3s'});
				$$items.addClass('inactive');
				$$items.eq(i).removeClass('inactive');

				setTimeout(function(){
					$$train.css({
						transition: '0.3s',
						transform: 'translate3d('+(-i*$$width)+'px,0,0)'
					});
					// $$items.eq( $$currentOne ).css({

					// });
					// $$items.eq( $$currentOne-1 ).css({
					// 	transition: '0.3s',
					// 	transform: 'scale(0.8)'
					// })
					$('.HEXAGON').removeClass('active');
					$('.HEXAGON').eq( $$currentOne ).addClass('active');
					$$renderTabs();
					$$switching = false;
				},0);
				// $$train.animate( {
				// 	left:(-i*$$width)
				// },$$duration,function(){
				// 	$$renderTabs();

				// 	$('.HEXAGON').removeClass('active');
				// 	$('.HEXAGON').eq( $$currentOne ).addClass('active');

				// 	$$switching = false;
				// } );
			}
			$$train.on("mousedown touchstart",function(e){

				if( true ){
					currentItemScale = 1;
					otherItemScale = 0.8;
					trainOffsetX = -$$currentOne*$$width;
					$$switching = true;
					//e.preventDefault();
					isDown = true;
					t1 = new Date().getTime();
					//console.log(e.changedTouches[0].pageX)
					originalX = e.originalEvent.changedTouches[0].pageX || e.pageX || e.originalEvent.changedTouches[0].pageX;
					X = originalX;
					if( $$carousel===true ){
						if( $$currentOne===$$length-1 ){
							$$items.eq(0).appendTo($$train);
							$$train.css({left:'+='+$$width+'px'});
						}
					}
				};
			});
			$$train.on("mousemove touchmove",function(e){
				
				if( isDown ){
					currentX = e.originalEvent.changedTouches[0].pageX || e.pageX || e.originalEvent.changedTouches[0].pageX;
					var distance = currentX - X;
					X = currentX;
					
					trainOffsetX += distance;
					itemOffsetX += distance;
					currentItemScale = (currentItemScale!==0.8)?(1-( 0.2*Math.abs(itemOffsetX)/$$width )):0.8;
					otherItemScale = (otherItemScale!==1)?(0.8+( 0.2*Math.abs(itemOffsetX)/$$width )):1;
					console.log(currentItemScale)

					if( Math.abs(distance)<4 ){
					}else{
						e.preventDefault();
					}
					// The train will move.
					// $$train.css({
					// 	transition: '0s',
					// 	transform: 'translate3d('+trainOffsetX+'px,0,100px)'
					// })
					// $$items.eq( $$currentOne ).css({
					// 	transition: '0s',
					// 	transform: 'scale('+currentItemScale+') rotate3d(0,1,0,60deg)'
					// })
					// $$items.eq( $$currentOne-1 ).css({
					// 	transition: '0s',
					// 	transform: 'scale('+otherItemScale+')'
					// })
					// $$items.eq( $$currentOne+1 ).css({
					// 	transition: '0s',
					// 	transform: 'scale('+otherItemScale+')'
					// })

					// // $$train.css( {left:"+="+distance+"px"},0 );
				};
			});
			$$train.on("mouseup mouseleave touchend",function(e){
				if( isDown ){
					t2 = new Date().getTime();
					//console.log(t2-t1);
					currentX = e.originalEvent.changedTouches[0].pageX || e.pageX || e.originalEvent.changedTouches[0].pageX;
					var distance = currentX - originalX;
					if( true||( t2-t1<200||distance<-0.25*$$width||distance>0.25*$$width ) ){
						if( distance<0 ){
							$$currentOne++;
							if( $$currentOne===$$length ){
								$$currentOne = $$carousel?0:($$length-1);
							}else{
								//通知服务器用户浏览了哪张卡片。
								forceLog( param('act_f'),'card-'+$$currentOne );
								//$$statistics.cards.push( $$currentOne );
								console.log( $$currentOne,'card-'+arr[$$currentOne].bid );
							}
						}else if( distance>0 ){
							$$currentOne--;
							if( $$currentOne===-1 ){
								$$currentOne = $$carousel?($$length-1):0;
							}else{
								//通知服务器用户浏览了哪张卡片。
								forceLog( param('act_f'),'card-'+$$currentOne );
								//$$statistics.cards.push( $$currentOne );
								console.log( $$currentOne,'card-'+arr[$$currentOne].bid );
							}
						}
					}

					// if( $$carousel===true&&$$currentOne===0 ){
					// 	$$train.animate( 
					// 		{left:-($$length-1)*$$width},
					// 		$$duration,
					// 		function(){
					// 			$$items.eq(0).prependTo($$train);
					// 			$$train.css({left:0});
					// 			$$renderTabs();
					// 			$$switching = false;
					// 		}
					// 	 )
					// };
					//console.log( $$currentOne );
					//console.log( toCard );
					toCard( $$currentOne );
					isDown = false;
				};
			});
			function next(){
				if( !$$switching ){
					$$currentOne++;
					if( $$currentOne===$$length ){
						$$currentOne = 0;
					};
					toCard( $$currentOne );
				};
			}
			function prev(){
				$$currentOne--;
				if( $$currentOne===-1 ){
					$$currentOne = $$length-1;
				};
				toCard( $$currentOne );
			}
			//$$autoplay?setInterval(next,4000):'';
			$$swiper.find(".next").on("click",next);
			$$swiper.find(".prev").on("click",prev);

			var hexagons = $('.HEXAGON');
			hexagons.on('click',function(){
				if( true ){
					//switching = true;
					//for jQuery
					var i = $(this).index('.HEXAGON');
					//通知服务器用户点击了哪个六边形。
					forceLog( param('act_f'),'hexagon-'+i );
					$$statistics.hexagons.push(i);
					console.log( i,'hexagon-'+i );
					hexagons.removeClass('active');
					$(this).addClass('active');
					$$currentOne = i;
					toCard( $$currentOne );
				}
			})
		};

		//
		if( $$mode==='fade' ){
			// init
			$$train.css({
				width: "100%"
			});
			$$items.css({
				position: "absolute",
				display: "none"
			});
			$$items.eq( $$currentOne ).show();
			
			// functions
			function to(i){
				$$items.eq( i ).siblings().fadeOut(100);
				$$items.eq( i ).fadeIn(400);
				$$renderTabs();
			}
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

			// actions
			setInterval(next,3000);
			$$tabs.on("click",function(){
				$$currentOne = $(this).index();
				to( $$currentOne );
			});
			$$swiper.find(".next").on("click",next);
			$$swiper.find(".prev").on("click",prev);
		};

	});
};