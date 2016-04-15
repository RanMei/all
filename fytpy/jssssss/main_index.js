require( ["jquery","session","common"],function($){

	$(document).ready(function(){
		//focus
		var n=0;
		//-----------------------------------------------------------------------------------------
		function atCenter(){
			var left=(1920-$(".focus").width())/2;
			var leftOfTabs=($(".focus").width()-98)/2;
			console.log(leftOfTabs);
			$(".focus>a").css(  {left:-left}  );
			$(".focus-tabs").css(  {left:leftOfTabs}  );
		};
		function next(){
			$(".focus>a").eq(n).fadeToggle(100);
			if(n<3){n++}else{n=0};
			$(".focus-tabs li").css(  {opacity:"0.5"}  );
			$(".focus-tabs li").eq(n).css(  {opacity:"1"}  );
			$(".focus>a").eq(n).fadeToggle(400);
		};
		function last(){
			$(".focus>a").eq(n).fadeToggle(100);
			if(n>0){n--}else{n=3};
			$(".focus-tabs li").css(  {opacity:"0.5"}  );
			$(".focus-tabs li").eq(n).css(  {opacity:"1"}  );
			$(".focus>a").eq(n).fadeToggle(400);
		};
		function jump(){
			var m=$(this).index();
			if(m!==n){
				$(".focus>a").eq(n).fadeToggle(100);
				$(".focus>a").eq(m).fadeToggle(400);
				n=m;
				$(".focus-tabs li").css(  {opacity:"0.5"}  );
				$(".focus-tabs li").eq(n).css(  {opacity:"1"}  );
			};
		};
		//-----------------------------------------------------------------------------------------
		atCenter();
		window.onresize=atCenter;
		setInterval(next,4000);
		$(".focus-next").click(next);
		$(".focus-last").click(last);
		$(".focus-tabs>li").click(jump);
	});

});