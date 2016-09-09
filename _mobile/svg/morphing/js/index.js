	
$( window ).load(function() {
 $("#loadCover").fadeOut();
});

TweenMax.set("#computer path", {
						  drawSVG:'100%',
						  fill: 'none',
						  stroke: "#FFF",
						  strokeWidth: "5px",
						});

	TweenMax.set("#computer #screen", {
			opacity: 0
	});



			var tl = new TimelineMax({repeat: -1, repeatDelay: 2});

			 tl
			   .fromTo("#computer #circle", 1, {drawSVG: "-50%"}, {drawSVG: "100%"})
			   .to("#computer #circle", 1, {morphSVG:"#screen",  ease:Elastic.easeInOut})
			   .fromTo("#computer #middlebar", 1, {drawSVG: "0%"}, {drawSVG: "100%"}, "-=0.3")
			   .fromTo("#computer #topbar", 1, {drawSVG: "0%"}, {drawSVG: "100%"}, "-=1")
			   .fromTo("#computer #bottombar", 1, {drawSVG: "0%"}, {drawSVG: "100%"}, "-=1")
			   .staggerFromTo("#computer #Legs path", 0.4, {drawSVG: "0%"}, {drawSVG: "100%"}, 0, "-=0.4")
			   ;


//findShapeIndex("#circle", "#screen");