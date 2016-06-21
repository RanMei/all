import {_} from './_.es6';
//var _ = require('./_.js');


// Module: core
var arr = [];

// This is a factory function to create a Zeal object.
// @param {string} selector
var Zeal = function( selector,context ){
	return new Zeal.prototype.init( selector,context );
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
	index: function( selector ){
		var theOne = this[0];
		var match = Zeal( selector );
		var _index = -1;
		match.each(function(elem,i){
			if( theOne===elem ){
				_index = i;
			}
		});
		return _index;
	},
	siblings: function(){

	},
	toArray: function(){
		return [].slice.call( this );
	}
};

Zeal.extend = Zeal.fn.extend = _.extend;

Zeal.extend({
	copy: _.copy,
	camelCase: _.camelCase
});

// This is a constructor.
// @param {string} selector
var init = Zeal.prototype.init = function( selector,context ){
	if( !context ){
		var context = document;
	}
	var elems;
	this.selector = selector;
	// $(window), $(document), $(this)
	if( typeof selector==='object' ){
		this[0] = selector;
		this.length = 1;
	};
	
	if( typeof selector==='string' ){
		if( selector==='' ){
			this.length = 1;
		}else if( />/.test(selector) ){
			elems = context.querySelectorAll( selector );
		}else if( /^#/.test(selector) ){
			// $('#id')
			var string = selector.replace(/#/,'');
			elems = context.getElementById( string );
		}else if( /^\./.test(selector) ){
			// $('.className')
			var string = selector.replace(/\./,'');
			elems = context.getElementsByClassName( string );
		}else{
			// $('tagName')
			elems = context.getElementsByTagName( selector );
		}
		if( elems.length ){
			for( var i=0;i<elems.length;i++ ){
				this[i] = elems[i];
			}
		}else{
			this[0] = elems;
		}
		this.length = elems.length;
	};
};
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Zeal.fn = Zeal.prototype;
init.prototype = Zeal.prototype;
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Zeal.fn.find = function( selector ){
	var context = this[0];
	return Zeal( selector,context );
}

// $(document).ready()
Zeal.fn.ready = function( callback ){
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

// Module: events
// $().on()
Zeal.fn.on = function( events,callback ){
	events = events.split(' ');
	console.log(events);
	this.each(function(elem){
		for( var i=0;i<events.length;i++ ){
			elem.addEventListener( events[i],function(e){
				var event = {};
				event.originalEvent = e;
				event.preventDefault = e.preventDefault.bind(e);
				event.stopPropagation = e.stopPropagation.bind(e);
				callback.call( e.currentTarget,event )
			} );
		};	
	});
};

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
	attr: function( name,value ){
		if( arguments.length === 1 ){
			return this[0].getAttribute( name );
		}else{
			this.each(function(elem){
				elem.setAttribute( name,value );
			})
			return this;
		}
	}
})


// Module: DOM manipulation
Zeal.fn.extend({
	// @param {string} string
	html: function( string ){
		this.each(function(elem){
			elem.innerHTML = string;
		});
		return this;
	},
	append: function( obj ){
		this.each(function(elem){
			if( typeof obj === 'string' ){
				elem.innerHTML += obj;		
			}else{
				for( var i=0;i<obj.length;i++ ){
					elem.appendChild( obj[i] );
				}
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

// Module: css
Zeal.fn.extend({
	// @param {object} opts
	css: function( opts ){
		if( arguments.length === 1 ){
			if( typeof arguments[0]==='string' ){
				// css( name )
				var elem = this[0] || this;
				var name = arguments[0];
				return document.defaultView.getComputedStyle(elem)[ name ];
			}else{
				// typeof arguments[0]==='object'
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
		}
	},
	width: function(){
		return Number( Zeal.fn.css.call( this,'width' ).replace(/px/,'') );
	},
	height: function(){
		return Number( Zeal.fn.css.call( this,'height' ).replace(/px/,'') );
	},
	hide: function(){
		this.each(function(elem){
			elem.style.display = 'none';
		});
		return this;			
	},
	show: function(){
		this.each(function(elem){
			elem.style.display = 'block';
		});
		return this;			
	}
})

// Module: animate
// @param {object} opts
// @param {number} time
// @param {function} callback
Zeal.fn.animate=function( opts,duration,callback ){
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
	slideUp: function( duration,callback ){
		this.css( {overflow:'hidden'} );
		this.animate( {height:0},duration,callback );
	},
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

// Module: ajax
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

window.$ = Zeal;