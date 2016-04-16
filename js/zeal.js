(function(){
	
	// This is a factory function to create a Zeal object.
	// @param {string} selector
	var Zeal = function( selector ){
		return new Zeal.prototype.init( selector );
	};

	Zeal.fn = Zeal.prototype = {
		each: function( f ){
			for( var i=0;i<this.length;i++ ){
				f();
			}
		},
		eq: function(i){
			// Create a Zeal object.
			var x = Zeal('');
			x[0] = this[i];
			return x;
		}
	};

	// This is a constructor.
	// @param {string} selector
	var init = Zeal.prototype.init = function( selector ){
		var elems;
		this.selector = selector;
		// $(document)
		if( selector===document ){
			this[0] = document;
		};
		// $(".className")
		if( (typeof selector==='string')&&(/^\./.test(selector)) ){
			var string = selector.replace(/\./,'');
			elems = document.getElementsByClassName( string );
			for( var i=0;i<elems.length;i++ ){
				this[i] = elems[i];
			}
			this.length = elems.length;
		};
		if( (selector==='') ){
			this.length = 1;
		};
	};
	//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	Zeal.fn = Zeal.prototype;
	init.prototype = Zeal.prototype;
	//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	
	// $(document).ready()
	Zeal.prototype.ready = function( callback ){
		// this[0] is actually document.
		var elem = this[0];
		if( elem.readyState==="complete" ){
			callback();
		}else{
			elem.addEventListener( "readystatechange",function(){
				if( elem.readyState==="complete" ){
					callback();
				};
			});
		};		
	};
	// $().on()
	Zeal.prototype.on = function( event,callback ){
		this[0].addEventListener( event,callback );	
	};

	// @param {string} string
	Zeal.prototype.html = function( string ){
		for( var i=0;i<this.length;i++ ){
			this[i].innerHTML = string;
		}
		return this;
	}

	Zeal.prototype.css = function( params ){
		console.log(params)
	}

	// 
	Zeal.prototype.fadeOut = function( time,callback ){
		var elem = this.elem;
		var currentOpacity = document.defaultView.getComputedStyle(elem).opacity;
		var opacity = elem.style.opacity;
		console.log(currentOpacity);
		if( (!this.inAnimation)&&currentOpacity!==0 ){
			this.inAnimation = true;
			var p = 1;
			var dp = 1/(time/10);
			var interval = setInterval(function(){
				if( p-dp>0 ){		
					p-=dp;
					elem.style.opacity = p;
				}else{
					clearInterval( interval );
					elem.style.opacity = 0;
					this.inAnimation = false;
					if( callback ){
						callback();
					};
				};
			},10);
		};
	};
	Zeal.prototype.fadeIn=function( time ){
		var elem=this.elem;
		if( elem.style.opacity==0 ){
			var p=0;
			var dp=1/(time/10);
			var interval=setInterval(function(){
				if( p+dp<1 ){		
					p+=dp;
					elem.style.opacity=p;
				}else{
					clearInterval( interval );
					elem.style.opacity=1;
					console.log( elem.style.opacity );
				};
			},10);
		};
	};
	Zeal.prototype.fadeToggle=function( time ){
		this.fadeOut(time);
		this.fadeIn(time);
	};
	//-----------------------------------------------------------
	Zeal.prototype.slideUp=function( time ){
		var elem=this.elem;
		elem.style.overflow="hidden";
		var p=elem.offsetHeight;
		var dp=p/(time/10);			
		var interval=setInterval(function(){
			if( p-dp>0 ){
				p-=dp;
				elem.style.height=p+"px";
			}else{
				clearInterval( interval );
				elem.style.height=0;
				console.log( elem.offsetHeight );
			};
		},10);
	};
	//-----------------------------------------------------------
	Zeal.prototype.css=function( o,time ){
		var elem=this.elem;
	
	
	
	
	
	
	
	};	
	//-----------------------------------------------------------
	Zeal.prototype.animate=function( o,time,callback ){
		var elem=this.elem;
		var p=document.defaultView.getComputedStyle(elem).marginLeft;
		p=p.replace(/px/,"");
		p=Number(p);
		console.log(p);
		if( o["margin-left"] ){
			var dp=o["margin-left"]/(time/10);
			var tar=p+o["margin-left"];
			if( o["margin-left"]>=0 ){
				var interval=setInterval(function(){
					if( p+dp<=tar ){
						p+=dp;
						elem.style.marginLeft=p+"px";
					}else{
						clearInterval( interval );
						elem.style.marginLeft=tar;
						if( callback ){
							callback();					
						};
					};
				},10);
			}else{
				var interval=setInterval(function(){
					if( p+dp>=tar ){
						p+=dp;
						elem.style.marginLeft=p+"px";
					}else{
						clearInterval( interval );
						elem.style.marginLeft=tar;
						if( callback ){
							callback();					
						};
					};
				},10);			
			};
		};
	};
	//-----------------------------------------------------------
	Zeal.ajax = function( params ){
		var xhr = new XMLHttpRequest();
		xhr.open( params.type,params.url );
		xhr.send( params.data||null );
		xhr.onreadystatechange = function(){
			var data = xhr.responseText;
			if( xhr.status===200 ){
				params.success(data);
			};
		};		
	};
	//-----------------------------------------------------------
	window.$=Zeal;
	
})();