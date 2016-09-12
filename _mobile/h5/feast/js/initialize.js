var initialize=(function(){
	var w,h;
	var $html=document.getElementsByTagName("html")[0];
	var $container=document.getElementsByClassName("container")[0];
	//-----------------------------------------
	function init(){
		w=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
		h=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
		$html.style.fontSize=100*w/640+"px";
	};
	//-----------------------------------------
	init();
	window.onresize=init;
})();