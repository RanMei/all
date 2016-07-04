var ZeactDOM = {};

ZeactDOM.render = function(component,container){
	container.appendChild( component.render() );
}

export {ZeactDOM};