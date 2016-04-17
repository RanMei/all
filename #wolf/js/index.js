$(document).ready(function(){
	
	var $$items = $(".slider>li");
	var $$tabs = $(".side_tabs li");

	var $$height = $(window).height();
	var $$duration = 500;
	var $$currentOne = 0;
	var $$target = 0;
	var $$length = 5;
	var $$pageSwitching = false;
	var $$steps = 0;
	var $$X = [40,140,240,380,500,600,690];
	var $$Y = [40,60,70,80,70,60,40];
	var $$cardSwitching = false;
	
	function init(){
		$$currentOne = 0;
		$$height = $(window).height();
		$$items.height( $$height );
		$("html,body").animate( {scrollTop:0},0 );
		pop();
		firstAnimate();
	};	
	function handleResize(){
		$$height = $(window).height();
		$$items.height( $$height );
	};	
	function firstAnimate(){
		var duration=700;
		$('.blue').animate( {"width":"38px","height":"38px","left":"+=265px"},duration );
		$('.lightblue').animate( {"width":"42px","height":"42px","left":"+=190px"},duration );
		$('.yellow').animate( {"width":"46px","height":"46px","left":"+=120px"},duration );
		$('.red').animate( {"width":"50px","height":"50px"},duration );
		$('.violet').animate( {"width":"46px","height":"46px","right":"+=120px"},duration );
		$('.green').animate( {"width":"42px","height":"42px","right":"+=190px"},duration );
		$('.purple').animate( {"width":"38px","height":"38px","right":"+=265px"},duration );
	};
	function restoreBalls(){
		var duration=700;
		$('.blue').animate( {"width":"20px","height":"20px","left":"-=265px"},duration );
		$('.lightblue').animate( {"width":"20px","height":"20px","left":"-=190px"},duration );
		$('.yellow').animate( {"width":"20px","height":"20px","left":"-=120px"},duration );
		$('.red').animate( {"width":"20px","height":"20px"},duration );
		$('.violet').animate( {"width":"20px","height":"20px","right":"-=120px"},duration );
		$('.green').animate( {"width":"20px","height":"20px","right":"-=190px"},duration );
		$('.purple').animate( {"width":"20px","height":"20px","right":"-=265px"},duration );	
	};	
	function pop(){
		var i=0;
		function pop(){
			$(".gallery img").eq(i)
			.animate( {bottom:"-=20px"},200 )
			.animate( {bottom:"+=80px"},200 )
			.animate( {bottom:"-=60px"},500 );
			i++;
			if( i===8 ){clearInterval(interval)};
		};
		var interval=setInterval( pop,50 );
	};
	/*
	function handleMouseEnter(){
		var i=$(this).index(".gallery a");
		$(this).animate( {bottom:"-30px"},300 );
		$(".gallery img").eq(i+1).animate( {bottom:-60},300 );	
	};
	function handleMouseLeave(){
		$(".gallery img").eq(0).animate( {bottom:-160},300 );
		$(".gallery img").eq(1).animate( {bottom:-110},300 );
		$(".gallery img").eq(2).animate( {bottom:-70},300 );
		$(".gallery img").eq(3).animate( {bottom:-130},300 );
		$(".gallery img").eq(4).animate( {bottom:-200},300 );
		$(".gallery img").eq(5).animate( {bottom:-100},300 );
		$(".gallery img").eq(6).animate( {bottom:-130},300 );
		$(".gallery img").eq(7).animate( {bottom:-80},300 );	
	};
	*/
	function flap(){
		$(this).css( {animation:"flap 0.5s forwards"} );	
	}
	function flapAgain(){
		$(this).css( {animation:"flap_again 0.5s forwards"} );	
	}
	function c_prev(){
		$$steps--;
		if($$steps===-1){$$steps=6};
		for(i=0;i<7;i++){
			var target=i+$$steps;
			if(target>6){target=target-7};
			$(".card").eq(i).css( {animation:"_to_"+target+" 0.5s forwards"} );
		};
		m_prev();
	}
	function nextCard(){
		if(!$$cardSwitching){
			$$cardSwitching=true;
			$$steps++;
			if($$steps===7){$$steps=0};
			for(i=0;i<7;i++){
				var target=i+$$steps;
				if(target>6){target=target-7};
				$(".card").eq(i).css( {animation:"to_"+target+" 0.5s forwards"} );
			};
			m_next();
			setTimeout(function(){$$cardSwitching=false},500);
		};
	}
	function m_prev(){
		for(i=1;i<7;i++){
			$(".month li").eq(i).animate( {left:$$X[i-1],top:$$Y[i-1]},500 );
		};
		$(".month li").eq(0).appendTo( $(".month") ).css( {left:$$X[6],top:$$Y[6]} );
	
	}
	function m_next(){
		for(i=0;i<6;i++){
			$(".month li").eq(i).animate( {left:$$X[i+1],top:$$Y[i+1]},500 );
		};
		$(".month li").eq(6).prependTo( $(".month") ).css( {left:$$X[0],top:$$Y[0]} );
	}
	//--------------------------------------------------------------
	function callback(){
		if( $$currentOne===0 ){
			firstAnimate();		
		}else
		if( $$currentOne===1 ){
			$(".warrior").css( {"animation":"dash 1s forwards"} );
		}else
		if( $$currentOne===2 ){
			pop();
		}else
		if( $$currentOne===4 ){
			$(".footer").animate( {bottom:0},400 );		
		};	
	};
	function $$restore( i ){
		if( i===0 ){
			restoreBalls();		
		}else
		if( i===1 ){
			$(".warrior").css( {"animation":"back 0.3s forwards"} );
		}else
		if( i===4 ){
			$(".footer").animate( {bottom:-106},400 );		
		};	
	};	
	function $$renderTabs(){
		$$tabs.removeClass("selected");
		$$tabs.eq( $$currentOne ).addClass("selected");
	}
	function $$to(){
		$$renderTabs();
		$("html,body")
			.animate( {scrollTop:"-=15px"},200 )
			.animate( {scrollTop:$$currentOne*$$height},$$duration-200 );	
		setTimeout(function(){
			$$pageSwitching=false;
			callback();
		},$$duration);
	}
	function nextPage(){
		if(	$$currentOne<$$length-1 ){
			// Update states.
			$$pageSwitching=true;
			$$restore( $$currentOne );
			$$currentOne++;
			$$to();
		};
	};
	function prevPage(){
		if( $$currentOne>0 ){
			// Update states.
			$$pageSwitching=true;
			$$restore( $$currentOne );
			$$currentOne--;
			$$to();
		};
	};
	function handle_scroll(e){
		if( !$$pageSwitching && $$currentOne>=0 && $$currentOne<=$$length-1 ){
			e.preventDefault();
			if( e.detail>0||e.wheelDelta<0 ){
				nextPage();
			}else{
				prevPage();
			};
		};
	}
	$$tabs.each(function(i){
		$(this).on("click",function(){
			$$pageSwitching = true;
			$$restore( $$currentOne );
			$$currentOne = i;
			$$to();
		});
	});
	//--------------------------------------------------------------
	init();
	$(window).on("resize",handleResize);
	document.addEventListener("DOMMouseScroll",handle_scroll);
	document.addEventListener("mousewheel",handle_scroll);
	//$(".gallery a").on("mouseenter",handleMouseEnter);
	//$(".gallery a").on("mouseleave",handleMouseLeave);
	$(".fourth .next,.prev").on("mouseenter",flap);
	$(".fourth .next,.prev").on("mouseleave",flapAgain);
	$(".fourth .next").on("click",nextCard);
	$(".fourth .prev").on("click",c_prev);
});