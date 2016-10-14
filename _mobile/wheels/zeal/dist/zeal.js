(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';

/**
 * Extend an object.
 * 
 * @param  {object} obj [description]
 * @return {object}     [description]
 */
function extend ( target,src,deep ){
	for( var key in src ){
		if( deep&& typeof src[key]==='object' ){
			target[key] = extend( target[key],src[key],true );
		}else{
			target[key] = src[key];
		}
	}
	return target;
}

/**
 * Make a string camelcased.
 * @param  {string} string
 * @return {string}
 */
function camelCase( string ){
	string = string.replace(/(-[a-z]?)|(_[a-z]?)/ig,function(match){
		return match.replace(/-|_/,'').toUpperCase();
	});			
	return string;
}

/**
 * Traverse an array or an array-like object.
 * 
 * @param  {array|object}   arr      [description]
 * @param  {Function} callback [description]
 */
function forEach( src,callback ){
	if( typeof src==='object' ){
		for( var i=0;i<src.length;i++ ){
			callback( src[i],i );
		}
	}else{
		throw new TypeError('src must be an object or an array.').stack;
	}
}
function bubbleSort(arr){
	var i = 0;
	while( i<arr.length-1 ){
		for( var j=i+1;j<arr.length-1;j++ ){
			if( arr[i]>arr[j] ){
				var x = arr[i];
				arr[i] = arr[j];
				arr[j] = x;
			}
		}
		i++;
	}
	return arr;
}

// Module: core
var arr = [];
// This is a factory function to create a Zeal object.
// @param {string} selector
var Zeal = function( selector,context ){
	return new Zeal.prototype.init( selector,context );
};

Zeal.fn = Zeal.prototype = {
	length: 0,
	each: function( callback ){
		forEach(this,callback);
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
		return arr.slice.call( this );
	}
};

Zeal.extend = Zeal.fn.extend = function(src){
	extend( this,src );
};

Zeal.extend({
	isArray: Array.isArray,
	//copy: _.copy,
	camelCase: camelCase,
	bubbleSort: bubbleSort
});

/**
 * Create a Zeal object.
 * This is a constructor.
 * @param {object|string} selector
 */
var init = Zeal.prototype.init = function( selector,context ){
	if( !context ){
		var context = document;
	}
	var elems;
	this.selector = selector;
	// $(window), $(document), $(this)
	if( typeof selector==='object' ){
		//if( Array.isArray(selector) ){
		if( selector.length ){
			for( var i=0;i<selector.length;i++ ){
				this[i] = selector[i];
			}
			this.length = selector.length;
		}else{
			this[0] = selector;
			this.length = 1;
		}
	}
	
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
	}
};
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
Zeal.fn = Zeal.prototype;
init.prototype = Zeal.prototype;
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Zeal.fn.find = function( selector ){
	var context = this[0];
	return Zeal( selector,context );
};

// $(document).ready()
Zeal.fn.ready = function( callback ){
	// this[0] is actually document.
	var elem = this[0];
	// if( elem.readyState==="complete" ){
	// 	callback();
	// }else{
	// 	elem.addEventListener( "readystatechange",function(){
	// 		if( elem.readyState==="complete" ){
	// 			alert('444')
	// 			callback();
	// 		};
	// 	});
	// };
	document.addEventListener( 'DOMContentLoaded',callback );	
};

// Module: events
// $().on()
Zeal.fn.on = function( events,callback ){
	events = events.split(' ');
	this.each(function(elem){
		for( var i=0;i<events.length;i++ ){
			elem.addEventListener( events[i],function(e){
				var event = {};
				event.originalEvent = e;
				event.preventDefault = e.preventDefault.bind(e);
				event.stopPropagation = e.stopPropagation.bind(e);
				callback.call( e.currentTarget,event );
			} );
		}	
	});
	return this;
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
			});
			return this;
		}
	},
	removeAttr: function( key ){
		this.each(function(elem){
			elem.removeAttribute(key);
		});
	}
});


// Module: DOM manipulation
Zeal.fn.extend({
	/**
	 * Sets the innerHTML of matched elements.
	 * @param {string} string
	 */
	html: function( string ){
		this.each(function(elem){
			elem.innerHTML = string;
		});
		return this;
	},
	append: function( obj ){
		this.each(function(elem){
			if( typeof obj === 'string' ){
				var fragment = document.createDocumentFragment();
				var container = document.createElement('div');
				container.innerHTML = obj;
				arr.slice.call(container.children).forEach(function(item){
					fragment.appendChild( item );
				});
				elem.appendChild( fragment );
			}else{
				if( obj.length ){
					for( var i=0;i<obj.length;i++ ){
						elem.appendChild( obj[i] );
					}
				}else{
					elem.appendChild( obj );
				}
			}
		});
	},
	prepend: function( obj ){
		var fragment = document.createDocumentFragment();
		var container = document.createElement('div');
		this.each(function(elem){
			if( typeof obj === 'string' ){
				container.innerHTML = obj;
				arr.slice.call(container.children).forEach(function(item){
					fragment.appendChild( item );
				});
			}else{
				for( var i=0;i<obj.length;i++ ){
					fragment.appendChild( obj[i] );
				}
			}
			elem.insertBefore( fragment,elem.firstChild );
			fragment.textContent = '';
		});
	},
	remove: function(){
		this.each(function(elem){
			elem.parentNode.removeChild(elem);
		});
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
						if( !/-/.test(prop) ){
							var _prop = prop.replace(/[A-Z]/g,function(letter){
								return '-'+letter.toLowerCase();
							});
							if( /(transform)|(transition)/.test( _prop) ){
								cssText += _prop+':'+opts[prop]+';-webkit-'+_prop+':'+opts[prop]+';';
								//console.log(cssText)
							}else{
								cssText += _prop+':'+opts[prop]+';';
							}
						}else{
							cssText += prop+':'+opts[prop]+';';
						}
					}
					elem.style.cssText += cssText;

				});
				return this;
			}
		}
	},
	width: function( number ){
		if( number ){
			this.each(function(elem){
				elem.style.width = number+'px';
			});
		}else{
			return Number( Zeal.fn.css.call( this,'width' ).replace(/px/,'') );
		}
	},
	height: function( number ){
		if( number ){
			this.each(function(elem){
				elem.style.height = number+'px';
			});
		}else if( this[0]===document ){
			// Chrome || Firefox
			return Math.max(
				document.body.scrollHeight,
				document.body.offsetHeight,
				document.body.clientHeight,
				document.documentElement.scrollHeight,
				document.documentElement.offsetHeight,
				document.documentElement.clientHeight
			);
		}else if( this[0]===window ){
			return window.innerHeight;
		}else{
			return Number( Zeal.fn.css.call( this,'height' ).replace(/px/,'') );
		}
	},
	scrollTop: function(){
		// Chrome || Firefox
		var val = document.body.scrollTop || document.documentElement.scrollTop;
		return val;
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
});

// Module: animate
/**
 * @param {object} opts
 * @param {number} time
 * @param {function} callback
 */
Zeal.fn.animate = function( opts,duration,callback ){
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
				}
				i++;
			}else{
				clearInterval( interval );
				for( var prop in opts ){
					elem.style[prop] = target[prop];
				}
				if( callback ){
					callback();					
				}
			}
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
			}
		});
	}
});

// Module: ajax
Zeal.ajax = function( obj ){
	var xhr = new XMLHttpRequest();
    xhr.timeout = 5000;
    xhr.ontimeout = function(){
        console.log('timeout');
    };
    xhr.onerror = function(xhr,type){
        console.log(xhr, type);
    };
    xhr.onreadystatechange = function(){
        if( xhr.readyState===4 ){
            if( xhr.status===200 ){
                var data = xhr.responseText;
                obj.success(data);
            }
        }
    };
    xhr.open( obj.type,obj.url );
    xhr.send( obj.data||null );		
};

if( window.$===undefined ){
	window.$ = Zeal;
	console.warn('Zeal: window.$ is window.Zeal.');
}else{
	console.warn('Zeal: $ is already occupied.');
	window.Zeal = Zeal;
}

})));
