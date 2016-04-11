(function( $ ){

	$.fn.isWheelPicker = function( params ){
		
		var $$wheelPicker	= this;

		// params.items -> $$items
		var $$names			= params.names,
			$$items			= params.items,
			$$itemHeight	= params.itemHeight || 30;
		var $$wheelNumber	= params.wheelNumber || 3;

		$$wheelPicker.css({
			overflow:"hidden"
		});

		// function renderTemplate () {
		// 	var inserted = '';
		// 	for(var i=0;i<items.length;i++){
		// 		inserted+='<li style="height:30px;line-height:30px;text-align:center">'+items[i]+'</li>';
		// 	}
		// 	for( var i=0;i<$$wheelNumber;i++ ){
		// 		$$wheelPicker.append(
		// 			'<div class="part" style="float:left;">'+
		// 				'<div class="itemPicked" style="height:30px;"></div>'+
		// 				'<div class="window" style="position:relative;width:200px;height:150px;background:lightgrey;overflow:hidden;">'+
		// 					'<ul class="wheel" style="background:lightgrey;">'+
		// 						inserted+
		// 					'</ul>'+
		// 				'</div>'+
		// 			'</div>'
		// 		);
		// 	};
		// }
		// renderTemplate();

		function creatWheel ( name,items ) {

			var $$itemPicked = 0;
			// @state
			var isMouseDown = false;
			var originalY,y1,t1,t2;
			var interval;

			function render(){
				$$wheelPicker.append(
					'<div class="part '+ name +'" style="float:left;">'+
						'<div class="itemPicked" style="height:30px;"></div>'+
						'<div class="window" style="position:relative;width:200px;height:'+(5*$$itemHeight)+'px;background:lightgrey;overflow:hidden;">'+
							'<ul class="wheel" style="background:lightgrey;">'+
							'</ul>'+
						'</div>'+
					'</div>'
				);
				for(var i=0;i<items.length;i++){
					$$wheelPicker.find("."+name).find(".wheel").append('<li style="height:'+$$itemHeight+'px;line-height:30px;text-align:center">'+items[i]+'</li>');
				}				
			};
			render();

			var thisWindow		= $$wheelPicker.find("."+name).find(".window");
			var thisItemPicked	= $$wheelPicker.find("."+name).find(".itemPicked");
			var thisWheel		= $$wheelPicker.find("."+name).find(".wheel");

			function wheel(items,itemHeight,itemPicked) {
				this.items = items;
			}

			// This function will 
			function setPosition() {
				var marginTop = thisWheel.css("marginTop").replace(/px/,'');
				var marginTopMax = (2*$$itemHeight);
				var marginTopMin = -(items.length-3)*$$itemHeight;
				if( marginTop>marginTopMax ){
					thisWheel.animate(
						{marginTop:marginTopMax},
						200,
						callback
					);
				}else if( marginTop<marginTopMin ){
					thisWheel.animate(
						{marginTop:marginTopMin},
						200,
						callback
					);
				}else{
					thisWheel.animate(
						{marginTop:Math.round( marginTop/$$itemHeight )*$$itemHeight},
						100,
						callback
					);
				}
				function callback() {
					$$itemPicked = ( 2 - (thisWheel.css("marginTop").replace(/px/,'')/$$itemHeight) );
					console.log($$itemPicked);
					thisItemPicked.html( items[$$itemPicked] );
				}
			}

			thisWindow.on("mousedown touchstart",function(e){
				console.log(e);
				clearInterval(interval);
				setPosition();
				isMouseDown = true;
				originalY = e.pageY || e.originalEvent.changedTouches[0].pageY;
				y1 = e.pageY||e.originalEvent.changedTouches[0].pageY;
				t1 = new Date().getTime();
			});

			thisWindow.on("mousemove touchmove",function(e){
				if( isMouseDown ){
					var currentY = e.pageY || e.originalEvent.changedTouches[0].pageY;
					var distance = currentY - y1;
					y1 = currentY;
					//console.log(distance);
					thisWheel.animate({marginTop:"+="+distance+"px"},0);
				};
			});

			thisWindow.on("mouseup touchend",function(e){
				isMouseDown = false;
				t2 = new Date().getTime();
				var marginTop = thisWheel.css("marginTop").replace(/px/,'');
				var currentY = e.pageY||e.originalEvent.changedTouches[0].pageY;
				if( t2-t1<150 ){
					console.log(t2-t1);
					if(currentY-originalY>0){
						interval = setInterval(function(){
							thisWheel.css({marginTop:"+=4px"});
							if( thisWheel.css("marginTop").replace(/px/,'')>=(2*$$itemHeight) ){
								clearInterval(interval);
								setPosition();
							}
						},10);
					}else if(currentY-originalY<0){
						interval = setInterval(function(){
							thisWheel.css({marginTop:"-=4px"});
							if( thisWheel.css("marginTop").replace(/px/,'')<=-(items.length-3)*$$itemHeight ){
								clearInterval(interval);
								setPosition();
							}
						},10);
					}
				}else{
					setPosition();
				}
				// }else if( marginTop>60 ){
				// 	$(this).find('.wheel').animate({marginTop:60},200);
				// }else if( marginTop<-(items.length-3)*30 ){
				// 	$(this).find('.wheel').animate({marginTop:-(items.length-3)*30},200);
				// }else{
				// 	$(this).find('.wheel').animate({marginTop:Math.round( marginTop/30 )*30},100);
				// }
				//console.log( $(this).find('.wheel').css("marginBottom") );
				// if( $(this).find('.wheel').css("marginBottom").replace(/px/,'')<0 ){
				// 	$(this).find('.wheel').animate({marginBottom:0},200);
				// };
			});
		};

		for( var i=0;i<$$names.length;i++ ){
			creatWheel( $$names[i],$$items[i] );
		};

	};

})( jQuery );