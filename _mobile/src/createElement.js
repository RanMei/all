/**
 * Create an HTML element.
 * @param  {string} tag  
 * @param  {array} childNodes
 * @return {object}
 */
function createElement( tag,config,childNodes ){
	var elem = document.createElement('div');
	if( config ){
		for( var key in config ){
			//console.log(key)
			if( key==='style' ){
				elem.style.cssText = config[key];
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
	//console.log(elem)
	return elem;
}

module.exports = createElement;