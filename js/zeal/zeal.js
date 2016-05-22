(function(){
	
	// This is a factory function to create a Zeal object.
	// @param {string} selector
	var Zeal = function( selector ){
		return new Zeal.prototype.init( selector );
	};

	Zeal.fn = Zeal.prototype = {
		each: function( callback ){
			for( var i=0;i<this.length;i++ ){
				callback( this[i],i );
			}
		},
		eq: function(i){
			return Zeal( this[i] );
		},
		siblings: function(){

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
		
		if( (typeof selector==='string') ){
			// $(".className")
			if( /^\./.test(selector) ){
				var string = selector.replace(/\./,'');
				elems = document.getElementsByClassName( string );
			// $('tagName')
			}else{
				elems = document.getElementsByTagName( selector );
			}
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
		var events = event.split(' ');
		console.log(events);
		this.each(function(elem){
			for( var i=0;i<events.length;i++ ){
				elem.addEventListener( events[i],callback );
			};	
		});
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
		this.each(function(elem){
			var cssText = '';
			for( var prop in opts ){
				cssText += prop+':'+opts[prop]+';';
				//this[i].style[prop] = opts[prop];
			};
			elem.style.cssText += cssText;
		});
		return this;
	}

	// @param {object} opts
	// @param {number} time
	// @param {function} callback
	Zeal.prototype.animate=function( opts,duration,callback ){
		this.each(function(elem){
			var p = {};
			var target = {};
			var dp = {};
			var interval;
			var iteration = Math.ceil(duration/10);
			var i = 0;
			//console.log(iteration);
			for ( var prop in opts ){
				p[prop] = Number(document.defaultView.getComputedStyle(elem)[prop].replace(/px/,''));
				if( /\+|\-/.test( opts[prop] ) ){
					target[prop] = 
						p[prop]+
						Number( opts[prop].replace(/(px)|\+|\=/g,'') );
				}else{
					target[prop] = opts[prop];
				}
				dp[prop] = (target[prop]-p[prop])/(duration/10);
			}
			interval = setInterval(function(){
				if( i<iteration ){
					for( var prop in opts ){
						p[prop]+=dp[prop];
						elem.style[prop] = p[prop] + (prop==='opacity'?0:"px");
					};
					i++;
				}else{
					clearInterval( interval );
					for( var prop in opts ){
						elem.style[prop] = target[prop];
					};
					if( callback ){
						callback();					
					};
				};
			},10);
		});
	};
	// 
	Zeal.fn.extend({
		fadeOut: function( duration,callback ){
			this.animate({opacity:0},duration,callback);
		},
		fadeIn: function( duration ){
			this.animate({opacity:1},duration);
		},
		fadeToggle: function( duration ){
			this.each( function(elem,i){
				var currentOpacity = Number(document.defaultView.getComputedStyle(elem).opacity);
				if( currentOpacity===1 ){
					Zeal(elem).fadeOut( duration );
				}else if( currentOpacity===0 ){
					Zeal(elem).fadeIn( duration );
				};
			});
		}
	})

	//-----------------------------------------------------------
	Zeal.prototype.slideUp=function( duration ){
		this.css({overflow:'hidden'});
		this.animate({height:0},duration);
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