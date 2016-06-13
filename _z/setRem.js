(function(){
	var $html = document.getElementsByTagName("html")[0];
	function setRem(){
		var w = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
		console.log(w);
		$html.style.fontSize = 100*w/720+"px";
	};
	setRem();
	window.addEventListener('resize',setRem);
})();