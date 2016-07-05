var ZeactElement = function(){};

/**
 * Create an HTML element.
 * @param  {string} tag  
 * @param  {array} childNodes
 * @return {object}
 */
ZeactElement.createElement = function( type,config,childNodes ){
	var elem = document.createElement(type);
	if( config ){
		for( var key in config ){
			//console.log(key)
			if( key==='style' ){
				elem.style.cssText = config[key];
			}else if( key==='ref' ){
				this.refs[ config.ref ] = elem;
			}else{
				elem.setAttribute(key,config[key]);
			};
		}
	};
	if( childNodes ){
		childNodes.forEach(function(child){
			if( typeof child==='object' ){
				elem.appendChild( child );
			}else if( typeof child==='string' ){
				var textNode = document.createTextNode(child);
				elem.appendChild( textNode );
			};
		});
	};
	return elem;
}

export {ZeactElement};