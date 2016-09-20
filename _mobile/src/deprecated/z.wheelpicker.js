(function( $ ){

	// @param {object} params
	$.fn.isWheelPicker = function( params ){
		
		var $$wheelPicker	= this;

		// params.items -> $$items
		var $$names			= params.names,
			$$items			= params.items,
			$$itemHeight	= '0.5rem',
			$$wheelNumber	= params.wheelNumber || 3;

		var $$itemWidth = (1/$$names.length)*100+'%';

		// Set ".wheelPicker"'s style.
		$$wheelPicker.css({
			//position:"fixed",
			left:0,
			bottom:0,
			width:"100%",
			'font-size': '0.3rem',
			overflow:"hidden"
		});

		// Render 'parts' on the page.
		var thisParts;
		(function(){
			$$wheelPicker.prepend(
				'<div class="parts" style="position:relative;width:100%;position:relative;overflow:hidden;"></div>'
			);
			thisParts = $$wheelPicker.find(".parts");
		})();

		// Constructor
		// @param {string} name
		// @param {array} items
		function Part ( name,items ) {

			var THIS = this;
			
			THIS.name = name;
			THIS.items = items;
			// @state
			THIS.currentOne = 0;
			// @state
			THIS.isMouseDown = false;
			

			// Function to render the template on the page.
			function render(){
				thisParts.append(
					'<div class="part '+ name +'" style="float:left;width:'+ $$itemWidth +';">'+
						'<div class="partHeader" style="height:30px;text-align:center;"></div>'+
						'<div class="window" style="position:relative;height:'+'2.5rem'+';background:lightgrey;overflow:hidden;">'+
							'<div style="position:absolute;left:0;top:0;width:100%;height:80px;background:linear-gradient(#EFEFEF,transparent);z-index:5"></div>'+
							'<div style="position:absolute;left:0;bottom:0;width:100%;height:80px;background:linear-gradient(transparent,#EFEFEF);z-index:5"></div>'+
							'<div style="position:absolute;left:0;top:36%;width:100%;height:1px;background:black;z-index:5"></div>'+
							'<div style="position:absolute;left:0;top:60%;width:100%;height:1px;background:black;z-index:5"></div>'+
							'<ul class="wheel" style="background:lightgrey;">'+
							'</ul>'+
						'</div>'+
					'</div>'
				);				
			};
			render();
			var thisWindow		= $$wheelPicker.find("."+name).find(".window");
			THIS.partHeader	= $$wheelPicker.find("."+name).find(".partHeader");
			var thisWheel		= $$wheelPicker.find("."+name).find(".wheel");


			// Function to render the items.
			THIS.renderItems = function( items ){
				$$wheelPicker.find("."+name).find(".wheel").html('');
				for(var i=0;i<items.length;i++){
					items[i] = items[i] + (THIS.name==='years'?'年':'');
					items[i] = items[i] + (THIS.name==='months'?'月':'');
					items[i] = items[i] + (THIS.name==='days'?'日':'');
					$$wheelPicker.find("."+name).find(".wheel").append(
						'<li style="height:'+$$itemHeight+';line-height:'+$$itemHeight+';text-align:center">'+
							items[i]+
						'</li>'
					);
				}
			}
			// Render the items.
			THIS.renderItems( THIS.items );

			// Function to adjust the items' position.
			function adjustPosition() {
				var marginTop = thisWheel.css("marginTop").replace(/px/,'');
				var marginTopMax = (2*$$itemHeight);
				var marginTopMin = -(THIS.items.length-3)*$$itemHeight;

				var offsetYMin = -(THIS.items.length-3)*$$itemHeight;


				if( marginTop>marginTopMax ){
					thisWheel.animate(
						{marginTop:marginTopMax},
						200,
						callback
					);
					// thisWheel.css({
					// 	transition: '0.2s',
					// 	transform: 'translate3d(0,-'+marginTopMax+'px,0)'
					// });
					// setTimeout(callback,200);
				}else if( marginTop<marginTopMin ){
					thisWheel.animate(
						{marginTop:marginTopMin},
						200,
						callback
					);
					// thisWheel.css({
					// 	transition: '0.2s',
					// 	transform: 'translate3d(0,-'+marginTopMin+'px,0)'
					// });
					// setTimeout(callback,200);
				}else{
					thisWheel.animate(
						{marginTop:Math.round( marginTop/$$itemHeight )*$$itemHeight},
						100,
						callback
					);
					// thisWheel.css({
					// 	transition: '0.1s',
					// 	transform: 'translate3d(0,-'+Math.round( marginTop/$$itemHeight )*$$itemHeight+'px,0)'
					// });
					// setTimeout(callback,100);
				}
				function callback() {
					THIS.currentOne = ( 2 - (thisWheel.css("marginTop").replace(/px/,'')/$$itemHeight) );
					//console.log(THIS.currentOne);
					THIS.partHeader.html( THIS.items[THIS.currentOne] );
					THIS.rerenderDays( $$parts["days"] );
				}
			}

			THIS.pick = function (i){
				thisWheel.css({
					marginTop:(2-i)*$$itemHeight
				});
				THIS.currentOne = i;
				THIS.partHeader.html( THIS.items[i] );
			}
			
			THIS.init = function(){
				//var thisMonth = new Date().getMonth();
				THIS.pick( 0 );
			}
			THIS.init();

			THIS.rerenderDays = function( days ){
				if( THIS.name==='months' ){
					if(
						THIS.currentOne===3||
						THIS.currentOne===5||
						THIS.currentOne===8||
						THIS.currentOne===10
					){
						days.items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
					} else if ( THIS.currentOne===1 ) {
						days.items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
					} else {
						days.items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
					};
					days.renderItems( days.items );
				};
			}

			// Add event-listeners.
			var originalY,y1,t1,t2;
			var translateY = 0;
			var interval;

			thisWindow.on("mousedown touchstart",function(e){
				e.preventDefault();
				//console.log(e);
				clearInterval(interval);
				adjustPosition();
				THIS.isMouseDown = true;
				originalY = e.pageY || e.originalEvent.changedTouches[0].pageY;
				y1 = e.pageY||e.originalEvent.changedTouches[0].pageY;
				t1 = new Date().getTime();
			});
			thisWindow.on("mousemove touchmove",function(e){
				if( THIS.isMouseDown ){
					var currentY = e.pageY || e.originalEvent.changedTouches[0].pageY;
					var distance = currentY - y1;
					translateY += distance;
					y1 = currentY;
					//console.log(distance);
					//thisWheel.animate({marginTop:"+="+distance+"px"},0);
					thisWheel.css({
						transition: '0s',
						transform: 'translate3d(0,'+translateY+'px,0)'
					})
				};
			});
			thisWindow.on("mouseup mouseleave touchend",function(e){
				THIS.isMouseDown = false;
				t2 = new Date().getTime();
				var marginTop = thisWheel.css("marginTop").replace(/px/,'');
				var currentY = e.pageY||e.originalEvent.changedTouches[0].pageY;
				if( t2-t1<120 ){
					//console.log(t2-t1);
					if( currentY-originalY>0 ){
						interval = setInterval(function(){
							thisWheel.css({marginTop:"+=4px"});
							if( thisWheel.css("marginTop").replace(/px/,'')>=(2*$$itemHeight) ){
								clearInterval(interval);
								adjustPosition();
							}
						},10);
					}else if( currentY-originalY<0 ){
						interval = setInterval(function(){
							thisWheel.css({marginTop:"-=4px"});
							if( thisWheel.css("marginTop").replace(/px/,'')<=-(THIS.items.length-3)*$$itemHeight ){
								clearInterval(interval);
								adjustPosition();
							}
						},10);
					}
				}else{
					adjustPosition();
				}
			});
		};

		// Create two buttons.
		(function(){
			$$wheelPicker.append(
				'<div style="overflow:hidden;">'+
					'<div class="confirm" style="float:left;width:50%;height:40px;line-height:40px;text-align:center;">确定</div>'+
					'<div class="cancel" style="float:left;width:50%;height:40px;line-height:40px;text-align:center;">取消</div>'+
				'</div>'
			);
			$$wheelPicker.find(".confirm").on("click",function(){
				console.log(months.items[months.itemPicked]+'月'+days.items[days.itemPicked]+'日'+provinces.items[provinces.itemPicked])
			});
		})();

		var $$parts = {
			years: null,
			months: null,
			days: null,
			provinces: null
		};
		// Create the parts of this wheelpicker.
		for( var i=0;i<$$names.length;i++ ){
			$$parts[ $$names[i] ] = new Part( $$names[i],$$items[i] );
		};

	};

})( jQuery );