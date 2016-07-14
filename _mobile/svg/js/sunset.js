var 
	regex = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/,

	arizona = document.getElementById("arizona"),
	sun = document.getElementById("sun"),
	mesaLayers = arizona.querySelectorAll("path"),

	SVGoffsettop = arizona.getBoundingClientRect().top,
	vertHeight = arizona.getBoundingClientRect().height;


// function scrollHandler() {
// 	  if (window.scrollY < vertHeight) {
// 	  Array.prototype.forEach.call(mesaLayers, function(layer) { 
// 		  var layerFill = layer.getAttribute("fill"),
// 		  vertRoll = Math.abs(window.scrollY - vertHeight) / vertHeight;
// 		  hslComponents = layerFill.match(regex).slice(1),
// 		  newHSL = parseFloat(hslComponents[2]) * vertRoll;
// 		  layer.style.fill = "hsl(" + hslComponents[0] +", "+ hslComponents[1] + "%, " +  newHSL + "%)";
// 		  arizona.style.background = "hsl(48, " + 100 * vertRoll + "%, " + 88 * vertRoll + "%)";
// 		  sun.style.transform = "translate3d(0," + window.scrollY / 10 + "px, 0)";
// 		})
// 		} else {
// 			arizona.style.transform = "translateY(-"+ (window.scrollY - vertHeight)+"px)";
// 	}
// }

// window.onscroll = function() {
// 		window.requestAnimationFrame(scrollHandler);
// }

var mode = 'sunset';
var $tick = 0;
var ratio = 1;
var sunY = Number( sun.getAttribute('cy') );
console.log(sunY)
function render() {
	window.requestAnimationFrame(render);
	
	if( sunY<128 ){
		mode = 'sunset';
	}else if( sunY>170 ){
		mode = 'sunrise';
	}
	if( mode==='sunset' ){
		sunY += 0.1;
		sun.style.cy = sunY+'';
		//console.log(sunY)

		ratio -= 0.0022;

		Array.prototype.forEach.call(mesaLayers, function(layer) {
			
			var layerFill = layer.getAttribute("fill"),
				hslComponents = layerFill.match(regex).slice(1),
				newHSL = parseFloat(hslComponents[2]) * ratio;

			arizona.style.background = "hsl(48, " + 100 * ratio + "%, " + 88 * ratio + "%)";
			layer.style.fill = "hsl(" + hslComponents[0] +", "+ hslComponents[1] + "%, " +  newHSL + "%)";
			
		});
	}else{
		sunY -= 0.1;
		sun.style.cy = sunY+'';
		ratio += 0.0022;

		Array.prototype.forEach.call(mesaLayers, function(layer) {
			
			var layerFill = layer.getAttribute("fill"),
				hslComponents = layerFill.match(regex).slice(1),
				newHSL = parseFloat(hslComponents[2]) * ratio;

			arizona.style.background = "hsl(48, " + 100 * ratio + "%, " + 88 * ratio + "%)";
			layer.style.fill = "hsl(" + hslComponents[0] +", "+ hslComponents[1] + "%, " +  newHSL + "%)";
			
		});
	}
	
}

document.addEventListener('click',render)