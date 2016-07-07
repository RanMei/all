var ZeactElement = function(){};

/**
 * Create an HTML element.
 * @param  {string} tag  
 * @param  {array} childNodes
 * @return {object}
 */
ZeactElement.createElement = function( type,props ){
	var elem;
	if( typeof type==='function' ){
		var obj = new type(props);
		elem = obj.render();
		elem.obj = obj;
	}else{
		elem = document.createElement(type);
	}
	if( props ){
		for( var key in props ){
			//console.log(key)
			if( key==='style' ){
				elem.style.cssText = props[key];
			}else if( key==='ref' ){
				this.refs[ props.ref ] = elem;
			}else if( /(src)/.test(key) ){
				elem.setAttribute(key,props[key]);
			};
		}
	};
	if( arguments.length>2 ){
		//var childrenLength = arguments.length - 2;
		for( var i=2;i<arguments.length;i++ ){
			var child = arguments[i];
			if( typeof child==='object' ){
				if( Array.isArray(child) ){
					child.forEach(function(item){
						elem.appendChild( item )
					})
				}else{
					elem.appendChild( child );
				}
			}else if( typeof child==='string' ){
				var textNode = document.createTextNode(child);
				elem.appendChild( textNode );
			};
		};
	};
	return elem;
}

export {ZeactElement};