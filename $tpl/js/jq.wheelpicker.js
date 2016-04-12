(function( $ ){

	// @param {object} params
	$.fn.isWheelPicker = function( params ){
		
		var $$wheelPicker	= this;

		// params.items -> $$items
		var $$names			= params.names,
			$$items			= params.items,
			$$itemHeight	= params.itemHeight || 30,
			$$wheelNumber	= params.wheelNumber || 3;

		// Set ".wheelPicker"'s style.
		$$wheelPicker.css({
			position:"relative",
			overflow:"hidden"
		});

		// Render 'parts' on the page.
		var thisParts;
		(function(){
			$$wheelPicker.prepend(
				'<div class="parts" style="position:relative;width:100%;position:relative;overflow:hidden;"></div>'
			);
			thisParts = $$wheelPicker.find(".parts");
			thisParts.append(
				'<div style="position:absolute;left:0;top:42%;width:100%;height:1px;background:black;z-index:5"></div>'+
				'<div style="position:absolute;left:0;top:58%;width:100%;height:1px;background:black;z-index:5"></div>'
			);
		})();

		// Constructor
		// @param {string} name
		// @param {array} items
		function Part ( name,items ) {

			var THIS = this;
			
			THIS.name = name;
			THIS.items = items;
			// @state
			THIS.itemPicked = 0;
			// @state
			THIS.isMouseDown = false;
			
			var originalY,y1,t1,t2;
			var interval;

			// Function to render the template on the page.
			function render(){
				thisParts.append(
					'<div class="part '+ name +'" style="float:left;width:33.333333%;">'+
						'<div class="partHeader" style="height:30px;text-align:center;"></div>'+
						'<div class="window" style="position:relative;height:'+(5*$$itemHeight)+'px;background:lightgrey;overflow:hidden;">'+
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
					$$wheelPicker.find("."+name).find(".wheel").append(
						'<li style="height:'+$$itemHeight+'px;line-height:30px;text-align:center">'+
							items[i]+(THIS.name==='months'?'月':'')+
						'</li>'
					);
				}
			}
			// Render the items.
			THIS.renderItems( THIS.items );

			// This function will 
			function setPosition() {
				var marginTop = thisWheel.css("marginTop").replace(/px/,'');
				var marginTopMax = (2*$$itemHeight);
				var marginTopMin = -(THIS.items.length-3)*$$itemHeight;
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
					THIS.itemPicked = ( 2 - (thisWheel.css("marginTop").replace(/px/,'')/$$itemHeight) );
					//console.log(THIS.itemPicked);
					THIS.partHeader.html( THIS.items[THIS.itemPicked] );
					THIS.setDays( days );	
				}
			}

			THIS.pick = function (i){
				thisWheel.css({
					marginTop:(i+2)*$$itemHeight
				});
				THIS.itemPicked = i;
				THIS.partHeader.html( THIS.items[i] );
			}
			
			THIS.init = function(){
				THIS.pick( 0 );
			}
			THIS.init();

			THIS.setDays = function( days ){
				if( THIS.name==='months' ){
					if(
						THIS.itemPicked===3||
						THIS.itemPicked===5||
						THIS.itemPicked===8||
						THIS.itemPicked===10
					){
						days.items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
					} else if ( THIS.itemPicked===1 ) {
						days.items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
					} else {
						days.items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
					};
					days.renderItems( days.items );
				};
			}

			thisWindow.on("mousedown touchstart",function(e){
				e.preventDefault();
				//console.log(e);
				clearInterval(interval);
				setPosition();
				THIS.isMouseDown = true;
				originalY = e.pageY || e.originalEvent.changedTouches[0].pageY;
				y1 = e.pageY||e.originalEvent.changedTouches[0].pageY;
				t1 = new Date().getTime();
			});

			thisWindow.on("mousemove touchmove",function(e){
				if( THIS.isMouseDown ){
					var currentY = e.pageY || e.originalEvent.changedTouches[0].pageY;
					var distance = currentY - y1;
					y1 = currentY;
					//console.log(distance);
					thisWheel.animate({marginTop:"+="+distance+"px"},0);
				};
			});

			thisWindow.on("mouseup touchend",function(e){
				THIS.isMouseDown = false;
				t2 = new Date().getTime();
				var marginTop = thisWheel.css("marginTop").replace(/px/,'');
				var currentY = e.pageY||e.originalEvent.changedTouches[0].pageY;
				if( t2-t1<120 ){
					//console.log(t2-t1);
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
							if( thisWheel.css("marginTop").replace(/px/,'')<=-(THIS.items.length-3)*$$itemHeight ){
								clearInterval(interval);
								setPosition();
							}
						},10);
					}
				}else{
					setPosition();
				}
			});
		};

		// Create two buttons. 
		(function(){
			$$wheelPicker.prepend(
				'<div style="height:30px;">'+
					'<div class="confirm" style="float:left;width:50%;text-align:center;">确定</div>'+
					'<div style="float:left;width:50%;text-align:center;">取消</div>'+
				'</div>'
			);
			$$wheelPicker.find(".confirm").on("click",function(){
				console.log(months.items[months.itemPicked]+'月'+days.items[days.itemPicked]+'日'+provinces.items[provinces.itemPicked])
			});
		})();

		var parts = [];
		for( var i=0;i<$$names.length;i++ ){
			parts[i] = new Part( $$names[i],$$items[i] );
		};
		console.log(parts);
		var months = parts[0];
		var days = parts[1];
		var provinces = parts[2];

	};

})( jQuery );