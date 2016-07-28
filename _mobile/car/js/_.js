function getWidth( elem ){
	return Number( document.defaultView.getComputedStyle( elem ).width.replace(/px/,'') );
}

function getHeight( elem ){
	return Number( document.defaultView.getComputedStyle( elem ).height.replace(/px/,'') );
}

var _ = {
	getWidth: getWidth,
	getHeight: getHeight
}

export {_};