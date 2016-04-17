window.onload=function(){
	var n="home";
	var y1,y2;
	var switching=true;
	
	var $toggle=document.getElementsByClassName("toggle");
	var $container=document.getElementsByClassName("container")[0];
	
	var $homePage=document.getElementsByClassName("homePage")[0];
	var $createImg=document.getElementsByClassName("createImg")[0];
	var $begin=document.getElementsByClassName("begin")[0];
	var $farewell=document.getElementsByClassName("farewell")[0];
	var $withUs=document.getElementsByClassName("withUs")[0];
	var $start=document.getElementsByClassName("start")[0];
	var $feastImg=document.getElementsByClassName("feastImg")[0];
	var $angle=document.getElementsByClassName("angle")[0];
	
	var $endPage=document.getElementsByClassName("endPage")[0];
	
	var $pages=document.getElementsByClassName("pages")[0];
	var $imgs=document.getElementsByClassName("imgs");
	var $nav=document.getElementsByClassName("nav")[0];

	function toggle(){
		if(typeof n==="number"){
			$nav.style.display="block";
			
			for(var i=0;i<$toggle.length;i++){
				if( $toggle[i].style.animation!=="" ){
					$toggle[i].style.animation="fadeOut 0.5s forwards";
				};
			};
			
			$toggle[n].style.animation="fadeIn 0.5s forwards";
		}else{
			for(var i=0;i<$toggle.length;i++){
				$toggle[i].style.animation="";
			};
			$nav.style.display="none";
		};
	};	
	
	function homePageAnimate(){
		//
		var E=[$createImg,$begin,$farewell,$withUs,$start,$feastImg,$angle];
		for( var i=0;i<E.length;i++){
			E[i].style.opacity=0;		
		};
		//
		$createImg.style.animation="scaleFadeIn 1s forwards";
		$createImg.style.webkitAnimation="scaleFadeIn 1s forwards";
		setTimeout( function(){$begin.style.animation="fadeIn 1s forwards"},500 );
		setTimeout( function(){$farewell.style.animation="fadeIn 1s forwards"},1000 );
		setTimeout( function(){$withUs.style.animation="fadeIn 1s forwards"},1500 );
		setTimeout( function(){$start.style.animation="fadeIn 1s forwards"},2000 );
		setTimeout( function(){$feastImg.style.animation="scaleFadeIn2 1s forwards"},2500 );
		setTimeout( function(){$angle.style.animation="fadeIn 1s forwards"},3000 );
		//
		setTimeout( function(){
			for( var i=0;i<E.length;i++){
				E[i].style.animation="";
				E[i].style.opacity=1;
			};
			switching=false;
		},4000 );
	};
	
	function up(n){
		$imgs[0].style.animation="up"+n+" 1.7s forwards";
		$imgs[1].style.animation="up"+n+" 1.5s forwards";
		$imgs[2].style.animation="up"+n+" 1.1s forwards";
		$imgs[3].style.animation="up"+n+" 1.2s forwards";
		$imgs[4].style.animation="up"+n+" 1s forwards";
		$imgs[5].style.animation="up"+n+" 1.3s forwards";
		$imgs[6].style.animation="up"+n+" 1.4s forwards";
		$imgs[7].style.animation="up"+n+" 1.6s forwards";
		$imgs[0].style.webkitAnimation="up"+n+" 1.7s forwards";
		$imgs[1].style.webkitAnimation="up"+n+" 1.5s forwards";
		$imgs[2].style.webkitAnimation="up"+n+" 1.1s forwards";
		$imgs[3].style.webkitAnimation="up"+n+" 1.2s forwards";
		$imgs[4].style.webkitAnimation="up"+n+" 1s forwards";
		$imgs[5].style.webkitAnimation="up"+n+" 1.3s forwards";
		$imgs[6].style.webkitAnimation="up"+n+" 1.4s forwards";
		$imgs[7].style.webkitAnimation="up"+n+" 1.6s forwards";	
	};
	function down(n){
		$imgs[0].style.animation="down"+n+" 1.7s forwards";
		$imgs[1].style.animation="down"+n+" 1.5s forwards";
		$imgs[2].style.animation="down"+n+" 1.1s forwards";
		$imgs[3].style.animation="down"+n+" 1.2s forwards";
		$imgs[4].style.animation="down"+n+" 1s forwards";
		$imgs[5].style.animation="down"+n+" 1.3s forwards";
		$imgs[6].style.animation="down"+n+" 1.4s forwards";
		$imgs[7].style.animation="down"+n+" 1.6s forwards";
		$imgs[0].style.webkitAnimation="down"+n+" 1.7s forwards";
		$imgs[1].style.webkitAnimation="down"+n+" 1.5s forwards";
		$imgs[2].style.webkitAnimation="down"+n+" 1.1s forwards";
		$imgs[3].style.webkitAnimation="down"+n+" 1.2s forwards";
		$imgs[4].style.webkitAnimation="down"+n+" 1s forwards";
		$imgs[5].style.webkitAnimation="down"+n+" 1.3s forwards";
		$imgs[6].style.webkitAnimation="down"+n+" 1.4s forwards";
		$imgs[7].style.webkitAnimation="down"+n+" 1.6s forwards";
	};
	//主页最初出现时：
	homePageAnimate();
	//判断屏幕上的手指的滑动方向：
	$container.addEventListener("touchstart",function(e){
		e.preventDefault();
		y1=e.changedTouches[0].pageY;
		$container.addEventListener("touchend",function(e){
			e.preventDefault();
			y2=e.changedTouches[0].pageY;
			if( switching===false ){
				if(y2<y1){//如果用户的手指向上滑动
					if(n=="home"){
						switching=true;
						n=0;
						$homePage.style.display="none";
						$pages.style.display="block";
						toggle();
						up(0);
						setTimeout( function(){
							switching=false;
						},1700 );	
					}else if(n===7){
						switching=true;
						n="end";
						toggle();
						up(8);
						setTimeout( function(){
							$pages.style.display="none";
							$endPage.style.display="block";	
							switching=false;
						},1700 );
					}else if(n!=="end"){
						switching=true;
						n++;
						toggle();
						up(n);
						setTimeout( function(){
							switching=false;
						},1700 );				
					};
				}else if(y2>y1){
					if(n===0){
						switching=true;
						n="home";
						toggle();
						down(0);
						setTimeout( function(){
							$pages.style.display="none";
							$homePage.style.display="block";
							homePageAnimate();
						},1700 );
					}else if(n==="end"){
						switching=true;
						n=7;
						$endPage.style.display="none";
						$pages.style.display="block";
						toggle();			
						down(8);
						setTimeout( function(){
							switching=false;
						},1700 );			
					}else if(n!=="home"){
						switching=true;
						n--;
						toggle();
						down(n+1);
						setTimeout( function(){
							switching=false;
						},1700 );				
					};
				};
			};
		});
	});
};