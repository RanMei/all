var initialize=(function(){
	var w;
	var $html=document.getElementsByTagName("html")[0];
	function init(){
		w=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
		console.log(w);
		$html.style.fontSize=100*w/720+"px";
	};
	init();
	window.onresize=init;
})();