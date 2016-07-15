//import {arr} from './data.js';

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
		$$last		= $$length-1;

	$(document).ready(function(){
		
		// state
		var $$currentOne	= 0;
		var $$target;
		var $$switching		= false;

		var state = {
			currentOne: 0,
			switching: false,
			X0: null,
			X1: null,
			X2: null,
			Y1: null,
			Y2: null
		}

		var config = {
			mode: 'slider',
			direction: 'horizontal',
			autoplay: false,
			carousel: false,
			sticky: true,
			interval: 4000,
			duration: 300,
			keyControll: true,
			wheelControll: true
		}

		for( key in opts ){
			config[key] = opts[key];
		}

		// Configuration.
		var $$mode			= opts.mode			|| "slider",
			$$direction		= opts.direction	|| "horizontal",
			$$autoplay		= opts.autoplay		|| false,
			$$carousel		= opts.carousel		|| true,
			$$sticky		= opts.sticky		|| true,
			$$interval		= opts.interval		|| 4000,
			$$duration		= opts.duration		|| 300;

		var $$keyControll 	= opts.keyControll  || true,
			$$wheelControll = opts.wheelControll|| true;

		function $$init(){
			$$currentOne= 0;
			$$target	= 0;
			$$switching	= false;
			$$width		= $$swiper.width();
			$$items.width( $$width );
			$$height	= $$items.height();
			$$swiper.height( $$height );
			$$train.css({
				transform: 'translate3d(0,0,0)',
				left: 0
			});
			$$renderTabs();
		}
		$$init();
		$(window).on( 'resize',$$init );

		function $$renderTabs(){
			$$tabs.removeClass("active");
			$$tabs.eq( $$currentOne ).addClass("active");
		}

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
			
			/**
			 * @param {number} i [description]
			 */			
			function to( i ){
				// $$train.animate(
				// 	$$direction==="horizontal"?
				// 	{left:-i*$$width}:
				// 	{top:-i*$$height},
				// 	$$duration,
				// 	callback
				// );
				$$train.css({
					transition: $$duration/1000+'s ease',
					transform: 'translate3d('+(-i*$$width)+'px,0,0)'
				})
				setTimeout(callback,$$duration);
				function callback() {
					$$renderTabs();
					$$switching=false;
				}
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
						
						//$$runtime.stop().css(  {width:0}  );
						//run();
						
						// if current one is not the last one
						if( $$currentOne < $$length-1 ){
							$$currentOne++;
							to( $$currentOne );
						// else if the current one is the last one
						}else if( $$currentOne===$$length-1 ){
							$$items.eq(0).appendTo( $$train );
							$$train.css({
								transition: '0s',
								transform: 'translate3d(-'+($$length-2)*$$width+'px,0,0)'	
							});
							setTimeout(function(){
								$$train.css({
									transition: $$duration/1000+'s',
									transform: 'translate3d(-'+($$length-1)*$$width+'px,0,0)'
								})
								setTimeout(function(){
									$$items.eq(0).prependTo( $$train );
									$$train.css({
										transition: '0s',
										transform: 'translate3d(0,0,0)'
									})
									$$currentOne = 0;
									$$renderTabs();
									$$switching = false;
								},$$duration);
							},20);
							// $$items.eq(0).appendTo( $$train );
							// // $$train.css(
							// // 	$$direction==="horizontal"?
							// // 	{left:"+="+$$width+"px"}:
							// // 	{top:"+="+$$height+"px"}
							// // );
							// // $$train.animate(
							// // 	$$direction==="horizontal"?
							// // 	{left:"-="+$$width+"px"}:
							// // 	{top:"-="+$$height+"px"},
							// // 	$$duration,
							// // 	callback 
							// // );
							// function callback(){
							// 	$$train.css(
							// 		$$direction==="horizontal"?
							// 		{left:0}:
							// 		{top:0}
							// 	);
							// 	$$items.eq(0).prependTo( $$train );
							// 	$$currentOne = 0;
							// 	$$renderTabs();
							// 	$$switching = false;
							// }
						}
					};				
				};
			};
			
			function prev(){
				if( !$$switching ){
					$$switching = true;
					if( $$mode==="slider" ){
						//$$runtime.stop().animate(  {"width":"0px"},0  );
						if( $$currentOne>0 ){
							$$currentOne--;
							to( $$currentOne );
						}else if( $$currentOne===0 ){
							// function callback(){
							// 	$$items.eq(-1).appendTo(  $$train  );
							// 	$$train.css(
							// 		$$direction==="horizontal"?
							// 		{left:"-"+ ($$length-1)*$$width +"px"}:
							// 		{top:"-"+ ($$length-1)*$$height +"px"}
							// 	);
							// 	$$currentOne = ($$length-1);
							// 	$$renderTabs();
							// 	$$switching = false;
							// }
							
							// $$items.eq(-1).prependTo( $$train );
							// $$train.css(
							// 	$$direction==="horizontal"?
							// 	{left:"-="+$$width+"px"}:
							// 	{top:"-="+$$height+"px"}
							// );
							// $$train.animate(
							// 	$$direction==="horizontal"?
							// 	{left:"+="+$$width+"px"}:
							// 	{top:"+="+$$height+"px"},
							// 	$$duration,
							// 	callback
							// );
							$$items.eq(-1).prependTo( $$train );
							$$train.css({
								transition: '0s',
								transform: 'translate3d('+(-$$width)+'px,0,0)'	
							});
							setTimeout(function(){
								$$train.css({
									transition: $$duration/1000+'s',
									transform: 'translate3d(0,0,0)'
								})
								setTimeout(function(){
									$$items.eq(-1).appendTo( $$train );
									$$train.css({
										transition: '0s',
										transform: 'translate3d(-'+($$length-1)*$$width+'px,0,0)'
									})
									$$currentOne = $$length-1;
									$$renderTabs();
									$$switching = false;
								},$$duration);
							},20);
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
			//run();
			
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
			var X0, X1, X2;
			var originalX;
			var prevX;
			var currentX;
			var touchStartTime,touchEndTime;
			var Y1, Y2;
			var scrollPrevented = false;

			$$items.addClass('inactive');
			$$items.eq(0).removeClass('inactive');

			function toCard( i ){
				$$train.css({
					transition: '0.3s',
					transform: 'translate3d('+  (-i*$$width)  +'px,0,0)'
				});
				$$renderTabs();
				setTimeout(function(){
					currentItemScale = 1;
					otherItemScale = 0.8;				
					$$switching = false;
				},$$duration);

			}
			$$train.on("mousedown touchstart",function(e){

				if( !$$switching ){
					scrollPrevented = false;
					trainOffsetX = -$$currentOne*$$width;
					
					//e.preventDefault();
					isDown = true;
					touchStartTime = new Date().getTime();
					//console.log(e.changedTouches[0].pageX)
					X0 = X1 = e.originalEvent? e.originalEvent.changedTouches[0].pageX : e.changedTouches[0].pageX;
					Y1 = e.originalEvent? e.originalEvent.changedTouches[0].pageY : e.changedTouches[0].pageY;
					if( $$carousel===true ){
						if( $$currentOne===$$length-1 ){
							$$items.eq(0).appendTo($$train);
							$$train.css({
								transition: '0s',
								'padding-left': $$width+'px'
							})
						}else if( $$currentOne===0 ){
							$$items.eq( $$last ).prependTo( $$train );
							trainOffsetX = -$$width;
							$$train.css({
								transition: '0s',
								transform: 'translate3d('+trainOffsetX+'px,0,0)'
							})
						}
					}
				};
			});
			$$train.on("mousemove touchmove",function(e){
				
				if( isDown ){
					X2 = e.originalEvent? e.originalEvent.changedTouches[0].pageX : e.changedTouches[0].pageX;
					Y2 = e.originalEvent? e.originalEvent.changedTouches[0].pageY : e.changedTouches[0].pageY;
					var distanceY = Y2 - Y1;
					var distance = X2 - X1;
					if( distanceY>distance ){

					}
					X1 = X2;
					//console.log(distance)
					trainOffsetX += distance;
					itemOffsetX += distance;
					currentItemScale += 0.2*distance/$$width;
					otherItemScale = (otherItemScale!==1)?(0.8+( 0.2*Math.abs(itemOffsetX)/$$width )):1;
					//console.log(currentItemScale)

		
					if( !scrollPrevented&&Math.abs(distance)<Math.abs(distanceY) ){
						
					}else{
						e.preventDefault();
						scrollPrevented = true;
						if( $$sticky ){
							//The train will move.
							$$train.css({
								transition: '0s',
								transform: 'translate3d('+trainOffsetX+'px,0,0)'
							})
							// $$items.eq( $$currentOne ).css({
							// 	transition: '0s',
							// 	transform: 'scale('+currentItemScale+')'
							// })
							// // $$items.eq( $$currentOne-1 ).css({
							// // 	transition: '0s',
							// // 	transform: 'scale('+otherItemScale+')'
							// // })
							// $$items.eq( $$currentOne+1 ).css({
							// 	transition: '0s',
							// 	transform: 'scale('+otherItemScale+')'
							// })
						};
					}
				


					// // $$train.css( {left:"+="+distance+"px"},0 );
				};
			});
			$$train.on("mouseup mouseleave touchend",function(e){
				if( isDown ){
					if(!$$switching){
						$$switching = true;
						touchEndTime = new Date().getTime();
						var timeSpan = touchEndTime - touchStartTime;
						//console.log( timeSpan );
						X2 = e.originalEvent? e.originalEvent.changedTouches[0].pageX : e.changedTouches[0].pageX;
						var distance = X2 - X0;
						
						if( $$carousel===false ){
							if( distance<0 ){
								$$currentOne = $$currentOne===$$last? $$last:$$currentOne+1 ;
							}else if( distance>0 ){
								$$currentOne = $$currentOne===0? 0:$$currentOne-1;
							}
							toCard( $$currentOne );
							isDown = false;
						}else{
							if( true||( timeSpan<200||distance<-0.25*$$width||distance>0.25*$$width ) ){
								if( distance<0 ){
									//$$target = $$currentOne===$$length-1? 0:$$currentOne++ ;
									$$currentOne++;
									if( $$currentOne===$$length ){
										$$currentOne = 0;
									}
									state.switching = 'toNext';
								}else if( distance>0 ){
									//$$target = $$currentOne===0? $$length-1:$$currentOne--;
									$$currentOne--;
									if( $$currentOne===-1 ){
										$$currentOne = $$length-1;
									}
									state.switching = 'toPrev';
								}
							}
							console.log($$currentOne)
							if( $$carousel===true&&$$currentOne===0&&distance<0 ){
								$$renderTabs();
								trainOffsetX = -$$length*$$width;
								$$train.css({
									transition: '0.3s',
									transform: 'translate3d('+trainOffsetX+'px,0,0)'
								})
								setTimeout(function(){
									$$items.eq(0).prependTo( $$train );
									trainOffsetX = 0;
									$$train.css({
										transition: '0s',
										transform: 'translate3d('+trainOffsetX+'px,0,0)',
										'padding-left': '0px'
									})
								},300);
							}else if( $$carousel===true&&$$currentOne===$$length-2&&distance>0 ){
								$$renderTabs();
								trainOffsetX = -($$length-2)*$$width;
								$$train.css({
									transition: '0.3s',
									transform: 'translate3d('+trainOffsetX+'px,0,0)'
								})
								setTimeout(function(){
									$$items.eq(0).prependTo( $$train );
									$$train.css({
										transition: '0s',
										'padding-left': '0px'
									})
								},300);				
							}else if( $$carousel===true&&$$currentOne===$$last&&distance>0 ){
								trainOffsetX = 0;
								$$train.css({
									transition: '0.3s',
									transform: 'translate3d('+trainOffsetX+'px,0,0)'
								})
								setTimeout(function(){
									$$items.eq( $$last ).appendTo( $$train );
									trainOffsetX = -($$length-1)*$$width;
									$$train.css({
										transition: '0s',
										transform: 'translate3d('+trainOffsetX+'px,0,0)'
									})
								},300);
							}else if( $$carousel===true&&$$currentOne===1&&state.switching==='toNext' ){
								trainOffsetX = -2*$$width;
								$$train.css({
									transition: '0.3s',
									transform: 'translate3d('+trainOffsetX+'px,0,0)'
								})
								setTimeout(function(){
									$$items.eq( $$last ).appendTo( $$train );
									trainOffsetX = -$$width;
									$$train.css({
										transition: '0s',
										transform: 'translate3d('+trainOffsetX+'px,0,0)'
									})
								},300);
							}else{
								toCard( $$currentOne );
								isDown = false;
							}
						}
						setTimeout(function(){
							$$switching = false;
						},300)
					}



					
					
					
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

			if( $$keyControll ){
				$(document).on('keydown',function(){

				})
			}
			// if( $$wheelControll ){
			// 	$$train.on("mousewheel DOMMouseScroll",function(e){
			// 		e.preventDefault();
			// 		console.log(e.originalEvent.detail)
			// 		if( e.originalEvent.detail>0 ){
			// 			next();
			// 		}else{
			// 			prev();
			// 		};
			// 	});
			// }
			if( $$autoplay ){
				setInterval( next,4000 );
			}
			$$swiper.find(".next").on("click",next);
			$$swiper.find(".prev").on("click",prev);

			$$tabs.on('click',function(){
				if( true ){
					$$currentOne = $(this).index();
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