document.addEventListener('DOMContentLoaded',function(){
	
	var $html = document.querySelector('html');
	var $body = document.querySelector('body');
	var $screen = document.createElement('div');
	
	$screen.style.cssText += 'position:fixed; width:100%; height:100%; display:none;';
	$body.insertBefore($screen,$body.firstChild);
	
	function setRem(){
		$screen.style.display = 'block';
		var w = Number( document.defaultView.getComputedStyle( $screen ).width.replace(/px/,'') );
		var h = Number( document.defaultView.getComputedStyle( $screen ).height.replace(/px/,'') );
		$screen.style.display = 'none';
		$html.style.fontSize = 100*w/750+'px';
		//document.getElementsByClassName('container')[0].style.height = h+'px';
		console.debug( 'rem: Rem reset. Size of the viewport is '+w+'*'+h+'.' );
	}
	setRem();
	window.addEventListener('resize',setRem);

})