$(document).ready(function(){
	$(".tabs li").on("click",function(){
		$(".tabs li").removeClass("selected");
		$(this).addClass("selected");	
	});
});