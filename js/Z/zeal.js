(function(){
	
	// This is a factory function to create a Zeal object.
	// @param {string} selector
	var Zeal = function( selector ){
		return new Zeal.prototype.init( selector );
	};

	Zeal.fn = Zeal.prototype = {
		each: function( f ){
			for( var i=0;i<this.length;i++ ){
				f( this[i] );
			}
		},
		eq: function(i){
			// Create a Zeal object.
			var zeo = Zeal('');
			zeo[0] = this[i];
			return zeo;
		},
		toArray: function(){
			return [].slice.call( this );
		}
	};

	Zeal.extend = Zeal.fn.extend = _.extend;

	// This is a constructor.
	// @param {string} selector
	var init = Zeal.prototype.init = function( selector ){
		var elems;
		this.selector = selector;
		// $(document), $(this)
		if( typeof selector==='object' ){
			this[0] = selector;
			this.length = 1;
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
		for( var i=0;i<this.length;i++ ){
			this[i].addEventListener( event,callback );	
		};
	};

	// @param {string} string
	Zeal.prototype.html = function( string ){
		this.each(function(elem){
			elem.innerHTML = string;
		});
		return this;
	}

	Zeal.fn.extend({
		// @param {string} className
		addClass: function( className ){
			this.each(function(elem){
				elem.classList.add( className );
			});
			return this;
		},
		removeClass: function( className ){
			this.each(function(elem){
				elem.classList.remove( className );
			});
			return this;
		},
		append: function( obj ){
			this.each(function(elem){
				for( var i=0;i<obj.length;i++ ){
					elem.appendChild( obj[i] );
				}
			});
		},
		prepend: function( obj ){
			this.each(function(elem){
				for( var i=0;i<obj.length;i++ ){
					elem.insertBefore( obj[i],elem.childNodes[0] );
				}
			});
		},
		remove: function(){
			this.each(function(elem){
				elem.parentNode.removeChild(elem);
			})
		}

	});
	

	// @param {object} opts
	Zeal.prototype.css = function( opts ){
		for( var i=0;i<this.length;i++ ){
			for( var prop in opts ){
				this[i].style[prop] = opts[prop];
			};
		};
	}

	// 
	Zeal.prototype.fadeOut = function( time,callback ){

			var elem = this[0];
			var currentOpacity = document.defaultView.getComputedStyle(elem).opacity;
			if( currentOpacity!==0 ){
				var p = currentOpacity;
				var dp = p/(time/10);
				var interval = setInterval(function(){
					if( p-dp>0 ){		
						p-=dp;
						elem.style.opacity = p;
					}else{
						clearInterval( interval );
						elem.style.opacity = 0;
						if( callback ){
							callback();
						};
					};
				},10);
			};

	};
	Zeal.prototype.fadeIn = function( time ){
		var elem = this[0];
		var currentOpacity = document.defaultView.getComputedStyle(elem).opacity;
		var p = Number(currentOpacity);
		console.log(p);
		var dp = (1-p)/(time/10);
		var interval = setInterval(function(){
			if( p+dp<1 ){		
				p+=dp;
				elem.style.opacity = p;
			}else{
				clearInterval( interval );
				elem.style.opacity = 1;
			};
		},10);

	};
	Zeal.prototype.fadeToggle=function( time ){
		var elem = this[0];
		var currentOpacity = Number(document.defaultView.getComputedStyle(elem).opacity);
		if( currentOpacity===1 ){
			this.fadeOut( time );
		}else if( currentOpacity===0 ){
			this.fadeIn(time);
		};
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

	// @param {object} opts
	// @param {number} time
	// @param {function} callback
	Zeal.prototype.animate=function( opts,time,callback ){

			var elem = this[0];
			var p = {};
			var dp = {};
			var interval = {};
			for ( var prop in opts ){
				p[prop] = Number(document.defaultView.getComputedStyle(elem)[prop].replace(/px/,""));
				console.log(p);
				dp[prop] = (opts[prop]-p[prop])/(time/10);
				console.log(dp)
				interval[prop] = setInterval(function(){
					if( p[prop]+dp[prop]<opts[prop] ){
						p[prop]+=dp[prop];
						elem.style[prop] = p[prop] + "px";
					}else{
						clearInterval( interval[prop] );
						elem.style[prop] = opts[prop];
						if( callback ){
							callback();					
						};
					};
				},10);
			};

	};
	//-----------------------------------------------------------
	Zeal.extend({
		copy: _.copy,
		camelCase: _.camelCase
	});

	Zeal.ajax = function( obj ){
		var xhr = new XMLHttpRequest();
		xhr.open( obj.type,obj.url );
		xhr.send( obj.data||null );
		xhr.onreadystatechange = function(){
			var data = xhr.responseText;
			if( xhr.status===200 ){
				obj.success(data);
			};
		};		
	};
	//-----------------------------------------------------------
	window.$=Zeal;
	
})();