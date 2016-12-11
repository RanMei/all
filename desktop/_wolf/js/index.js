function Balls(config){

}
Balls.prototype = {
	
}

function Cards(config){
	this.elem = config.elem;
	this.obj = $(this.elem);

	this.cards = this.obj.find('.card');
	this.month = this.obj.find('.month');
	this.months = this.obj.find('.month li');
	this.arrows = this.obj.find('.next,.prev');
	this.next = this.obj.find('.next');
	this.prev = this.obj.find('.prev');

	this.n = 0;
	this.$X = [40,140,240,380,500,600,690];
	this.$Y = [40,60,70,80,70,60,40];

	this.cardSwitching = false;
	this.init();
}
Cards.prototype = {
	init: function(){
		this.listen();
	},
	html: function(){
		this.elem.innerHTML = '';
	},
	listen: function(){
		this.arrows.on('mouseenter',function(){
			$(this).css( {animation:"flap 0.5s forwards"} );	
		});
		this.arrows.on('mouseleave',function(){
			$(this).css( {animation:"flap_again 0.5s forwards"} );
		});
		this.next.on('click',this.nextCard.bind(this));
		this.prev.on('click',this.prevCard.bind(this));
	},
	nextCard: function(){
		var self = this;
		if(!this.cardSwitching){
			this.cardSwitching = true;
			if( self.n<6 ){
				self.n++;
			}else{
				self.n = 0;
			}
			self.update();
			this.nextDate();
			setTimeout(function(){
				self.cardSwitching = false;
			},500);
		};
	},
	prevCard: function(){
		var self = this;
		if(!this.cardSwitching){
			this.cardSwitching = true;
			if( self.n>0 ){
				self.n--;
			}else{
				self.n = 6;
			}
			for( var i=0;i<7;i++ ){
				var target = self.n + i;
				if( target>6 ){
					target = target-7
				};
				self.cards.eq(i).css( {animation:"_to_"+target+" 0.5s forwards"} );
			};			
			this.prevDate();
			setTimeout(function(){
				self.cardSwitching = false;
			},500);
		}
	},
	update: function(){
		var self = this;
		for( var i=0;i<7;i++ ){
			var target = self.n + i;
			if( target>6 ){
				target = target - 7
			};
			self.cards.eq(i).css( {animation:"to_"+target+" 0.5s forwards"} );
		};
	},
	nextDate: function(){
		for( var i=0;i<6;i++ ){
			this.obj.find('.month li').eq(i).animate({
				left: this.$X[i+1],
				top: this.$Y[i+1]
			},500 );
		};
		this.obj.find('.month li').eq(6)
			.prependTo( this.month )
			.css( {left:this.$X[0],top:this.$Y[0]} );
	},
	prevDate: function(){
		for( var i=1;i<7;i++ ){
			this.obj.find('.month li').eq(i).animate( {left:this.$X[i-1],top:this.$Y[i-1]},500 );
		};
		this.obj.find('.month li').eq(0).appendTo( this.month ).css( {left:this.$X[6],top:this.$Y[6]} );
	
	}
}

new Cards({
	elem: document.querySelector('.fourth')
})

function App(config){
	this.elem = config.elem;
	this.obj = $(this.elem);
	this.slides = this.obj.find('.slider>li');
	this.dots = this.obj.find('.side_tabs li');

	this.height = $(window).height();
	this.duration = 500;

	this.currentOne = 0;
	this.target = 0;
	this.length = 5;
	this.pageSwitching = false;

	this.init();
}

App.prototype = {
	init: function(){
		this.currentOne = 0;
		this.renderTabs();
		this.setSize();
		this.listen();
		// this.toPage();
		// window.scroll(0,0)
		// $("html,body").animate( {scrollTop:0},0 );
		// this.pop();
		this.firstAnimate();
	},
	listen: function(){
		var self = this;
		$(window).on('resize',this.setSize.bind(this));
		$(document).on('DOMMouseScroll mousewheel',this.handleScroll.bind(this));
		this.dots.on('click',function(){
			var i = $(this).index('.side_tabs li');
			self.pageSwitching = true;
			self.reverse( self.currentOne );
			self.currentOne = i;
			self.toPage();
		})
	},
	setSize: function(){
		this.height = $(window).height();
		this.slides.height( this.height );
	},
	renderTabs: function(){
		this.dots.removeClass("selected");
		this.dots.eq( this.currentOne ).addClass("selected");
	},
	firstAnimate: function(){
		var duration=700;
		$('.blue').animate( {"width":"38px","height":"38px","left":"+=265px"},duration );
		$('.lightblue').animate( {"width":"42px","height":"42px","left":"+=190px"},duration );
		$('.yellow').animate( {"width":"46px","height":"46px","left":"+=120px"},duration );
		$('.red').animate( {"width":"50px","height":"50px"},duration );
		$('.violet').animate( {"width":"46px","height":"46px","right":"+=120px"},duration );
		$('.green').animate( {"width":"42px","height":"42px","right":"+=190px"},duration );
		$('.purple').animate( {"width":"38px","height":"38px","right":"+=265px"},duration );
	},
	restoreBalls: function(){
		var duration=700;
		$('.blue').animate( {"width":"20px","height":"20px","left":"-=265px"},duration );
		$('.lightblue').animate( {"width":"20px","height":"20px","left":"-=190px"},duration );
		$('.yellow').animate( {"width":"20px","height":"20px","left":"-=120px"},duration );
		$('.red').animate( {"width":"20px","height":"20px"},duration );
		$('.violet').animate( {"width":"20px","height":"20px","right":"-=120px"},duration );
		$('.green').animate( {"width":"20px","height":"20px","right":"-=190px"},duration );
		$('.purple').animate( {"width":"20px","height":"20px","right":"-=265px"},duration );
	},
	pop: function(){
		var i=0;
		function pop(){
			$(".Gallery img").eq(i)
			.animate( {bottom:"-=20px"},200 )
			.animate( {bottom:"+=80px"},200 )
			.animate( {bottom:"-=60px"},500 );
			i++;
			if( i===8 ){clearInterval(interval)};
		};
		var interval=setInterval( pop,50 );
	},
	reverse: function(i){
		if( i===0 ){
			this.restoreBalls();		
		}else
		if( i===1 ){
			$(".warrior").css( {"animation":"back 0.3s forwards"} );
		}else
		if( i===4 ){
			$(".footer").animate( {bottom:-106},400 );		
		};	
	},
	play: function(){
		if( this.currentOne===0 ){
			this.firstAnimate();		
		}else
		if( this.currentOne===1 ){
			$(".warrior").css( {"animation":"dash 1s forwards"} );
		}else
		if( this.currentOne===2 ){
			this.pop();
		}else
		if( this.currentOne===4 ){
			$(".footer").animate( {bottom:0},400 );		
		};	
	},
	toPage: function(){
		var self = this;
		this.renderTabs();
		$("html,body")
			.animate( {scrollTop:"-=15px"},200 )
			.animate( {scrollTop:this.currentOne*this.height},this.duration-200 );	
		setTimeout(function(){
			self.pageSwitching = false;
			self.play();
		},self.duration);
	},
	nextPage: function(){
		if(	this.currentOne<this.length-1 ){
			// Update states.
			this.pageSwitching = true;
			this.reverse( this.currentOne );
			this.currentOne++;
			this.toPage();
		};
	},
	prevPage: function(){
		if( this.currentOne>0 ){
			// Update states.
			this.pageSwitching = true;
			this.reverse( this.currentOne );
			this.currentOne--;
			this.toPage();
		}
	},
	handleScroll: function(e){
		e = e.originalEvent;
		if( !this.pageSwitching && this.currentOne>=0 && this.currentOne<=this.length-1 ){
			e.preventDefault();
			if( e.detail>0||e.wheelDelta<0 ){
				this.nextPage();
			}else{
				this.prevPage();
			};
		};
	}
}

window.addEventListener('DOMContentLoaded',function(){
	new App({
		elem: document.getElementsByTagName('body')[0]
	})
})


// $(document).ready(function(){
	
// 	var $$items = $(".slider>li");
// 	var $$tabs = $(".side_tabs li");

// 	var $$height = $(window).height();
// 	var $$duration = 500;
// 	var $$currentOne = 0;
// 	var $$target = 0;
// 	var $$length = 5;
// 	var $$pageSwitching = false;
// 	var $$steps = 0;
// 	var $$X = [40,140,240,380,500,600,690];
// 	var $$Y = [40,60,70,80,70,60,40];
// 	var $$cardSwitching = false;
	
// 	function init(){
// 		$$currentOne = 0;
// 		$$height = $(window).height();
// 		$$items.height( $$height );
// 		$("html,body").animate( {scrollTop:0},0 );
// 		pop();
// 		firstAnimate();
// 	};	
// 	function handleResize(){
// 		$$height = $(window).height();
// 		$$items.height( $$height );
// 	};	
// 	function firstAnimate(){
// 		var duration=700;
// 		$('.blue').animate( {"width":"38px","height":"38px","left":"+=265px"},duration );
// 		$('.lightblue').animate( {"width":"42px","height":"42px","left":"+=190px"},duration );
// 		$('.yellow').animate( {"width":"46px","height":"46px","left":"+=120px"},duration );
// 		$('.red').animate( {"width":"50px","height":"50px"},duration );
// 		$('.violet').animate( {"width":"46px","height":"46px","right":"+=120px"},duration );
// 		$('.green').animate( {"width":"42px","height":"42px","right":"+=190px"},duration );
// 		$('.purple').animate( {"width":"38px","height":"38px","right":"+=265px"},duration );
// 	};
// 	function restoreBalls(){
// 		var duration=700;
// 		$('.blue').animate( {"width":"20px","height":"20px","left":"-=265px"},duration );
// 		$('.lightblue').animate( {"width":"20px","height":"20px","left":"-=190px"},duration );
// 		$('.yellow').animate( {"width":"20px","height":"20px","left":"-=120px"},duration );
// 		$('.red').animate( {"width":"20px","height":"20px"},duration );
// 		$('.violet').animate( {"width":"20px","height":"20px","right":"-=120px"},duration );
// 		$('.green').animate( {"width":"20px","height":"20px","right":"-=190px"},duration );
// 		$('.purple').animate( {"width":"20px","height":"20px","right":"-=265px"},duration );	
// 	};	
// 	function pop(){
// 		var i=0;
// 		function pop(){
// 			$(".gallery img").eq(i)
// 			.animate( {bottom:"-=20px"},200 )
// 			.animate( {bottom:"+=80px"},200 )
// 			.animate( {bottom:"-=60px"},500 );
// 			i++;
// 			if( i===8 ){clearInterval(interval)};
// 		};
// 		var interval=setInterval( pop,50 );
// 	};
// 	/*
// 	function handleMouseEnter(){
// 		var i=$(this).index(".gallery a");
// 		$(this).animate( {bottom:"-30px"},300 );
// 		$(".gallery img").eq(i+1).animate( {bottom:-60},300 );	
// 	};
// 	function handleMouseLeave(){
// 		$(".gallery img").eq(0).animate( {bottom:-160},300 );
// 		$(".gallery img").eq(1).animate( {bottom:-110},300 );
// 		$(".gallery img").eq(2).animate( {bottom:-70},300 );
// 		$(".gallery img").eq(3).animate( {bottom:-130},300 );
// 		$(".gallery img").eq(4).animate( {bottom:-200},300 );
// 		$(".gallery img").eq(5).animate( {bottom:-100},300 );
// 		$(".gallery img").eq(6).animate( {bottom:-130},300 );
// 		$(".gallery img").eq(7).animate( {bottom:-80},300 );	
// 	};
// 	*/


// 	function nextCard(){
// 		if(!$$cardSwitching){
// 			$$cardSwitching=true;
// 			$$steps++;
// 			if($$steps===7){$$steps=0};
// 			for(i=0;i<7;i++){
// 				var target=i+$$steps;
// 				if(target>6){target=target-7};
// 				$(".card").eq(i).css( {animation:"to_"+target+" 0.5s forwards"} );
// 			};
// 			m_next();
// 			setTimeout(function(){$$cardSwitching=false},500);
// 		};
// 	}
// 	function m_prev(){
// 		for(i=1;i<7;i++){
// 			$(".month li").eq(i).animate( {left:$$X[i-1],top:$$Y[i-1]},500 );
// 		};
// 		$(".month li").eq(0).appendTo( $(".month") ).css( {left:$$X[6],top:$$Y[6]} );
	
// 	}
// 	function m_next(){
// 		for(i=0;i<6;i++){
// 			$(".month li").eq(i).animate( {left:$$X[i+1],top:$$Y[i+1]},500 );
// 		};
// 		$(".month li").eq(6).prependTo( $(".month") ).css( {left:$$X[0],top:$$Y[0]} );
// 	}
// 	//--------------------------------------------------------------
// 	function callback(){
// 		if( $$currentOne===0 ){
// 			firstAnimate();		
// 		}else
// 		if( $$currentOne===1 ){
// 			$(".warrior").css( {"animation":"dash 1s forwards"} );
// 		}else
// 		if( $$currentOne===2 ){
// 			pop();
// 		}else
// 		if( $$currentOne===4 ){
// 			$(".footer").animate( {bottom:0},400 );		
// 		};	
// 	};
// 	function $$restore( i ){
// 		if( i===0 ){
// 			restoreBalls();		
// 		}else
// 		if( i===1 ){
// 			$(".warrior").css( {"animation":"back 0.3s forwards"} );
// 		}else
// 		if( i===4 ){
// 			$(".footer").animate( {bottom:-106},400 );		
// 		};	
// 	};	
// 	function $$renderTabs(){
// 		$$tabs.removeClass("selected");
// 		$$tabs.eq( $$currentOne ).addClass("selected");
// 	}
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
// 	function nextPage(){
// 		if(	$$currentOne<$$length-1 ){
// 			// Update states.
// 			$$pageSwitching=true;
// 			$$restore( $$currentOne );
// 			$$currentOne++;
// 			$$to();
// 		};
// 	};
// 	function prevPage(){
// 		if( $$currentOne>0 ){
// 			// Update states.
// 			$$pageSwitching=true;
// 			$$restore( $$currentOne );
// 			$$currentOne--;
// 			$$to();
// 		};
// 	};
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
// 	$$tabs.each(function(i){
// 		$(this).on("click",function(){
// 			$$pageSwitching = true;
// 			$$restore( $$currentOne );
// 			$$currentOne = i;
// 			$$to();
// 		});
// 	});
// 	//--------------------------------------------------------------
// 	init();
// 	$(window).on("resize",handleResize);
// 	document.addEventListener("DOMMouseScroll",handle_scroll);
// 	document.addEventListener("mousewheel",handle_scroll);
// 	//$(".gallery a").on("mouseenter",handleMouseEnter);
// 	//$(".gallery a").on("mouseleave",handleMouseLeave);
// 	$(".fourth .next,.prev").on("mouseenter",flap);
// 	$(".fourth .next,.prev").on("mouseleave",flapAgain);
// 	$(".fourth .next").on("click",nextCard);
// 	$(".fourth .prev").on("click",c_prev);
// });