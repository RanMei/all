function Sunset(){
	this.arizona = document.getElementById("arizona");
	this.sun = document.getElementById("sun");
	this.mesaLayers = this.arizona.querySelectorAll("path");

	this.regex = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/;
	this.mode = 'sunset';
	this.tick = 0;
	this.ratio = 1;
	this.sunY = Number( this.sun.getAttribute('cy') );
	

	this.playing = false;

	this.Y0 = null;
	this.Y1 = null;
	this.Y2 = null;

	this.init();
}
Sunset.prototype = {
	init: function(){
		this.onResize();
		this.arizona.addEventListener( 'click',this.handleClick.bind(this) );
		document.addEventListener( 'touchstart',this.touchstart.bind(this) );
		document.addEventListener( 'touchmove',this.touchmove.bind(this) );
		window.addEventListener( 'resize',this.onResize.bind(this) );
	},
	onResize: function(){
		var self = this;
		setTimeout(function(){
			self.height = Number( document.defaultView.getComputedStyle( self.arizona ).height.replace(/px/,'') );
		},300);
	},
	handleClick: function(){
		if( !this.playing ){
			this.playing = true;
			this.play();
		}else{
			this.playing = false;
		}
	},
	touchstart: function(e){
		this.Y0 = this.Y1 = e.changedTouches[0].pageY;
	},
	touchmove: function(e){
		this.Y2 = e.changedTouches[0].pageY;
		var distance = this.Y2 - this.Y1;
		//var relativeDistance = distance/this.height;
		//console.log(relativeDistance)
		this.Y1 = this.Y2;
		this.sunY += distance/10;
		if( this.sunY>170 ){
			this.sunY = 170;
		}else if( this.sunY<128 ){
			this.sunY = 128;
		}else{
			this.ratio -= distance/460;
		}
		
		this.sun.style.cy = this.sunY+'';
		this.layersChange();
	},
	layersChange: function(){
		var self = this;
		Array.prototype.forEach.call(self.mesaLayers, function(layer) {
			
			var layerFill = layer.getAttribute("fill"),
				hslComponents = layerFill.match(self.regex).slice(1),
				newHSL = parseFloat(hslComponents[2]) * self.ratio;

			self.arizona.style.background = "hsl(48, " + 100 * self.ratio + "%, " + 88 * self.ratio + "%)";
			layer.style.fill = "hsl(" + hslComponents[0] +", "+ hslComponents[1] + "%, " +  newHSL + "%)";
			
		});
	},
	play: function(){
		var self = this;
		if( self.playing ){
			window.requestAnimationFrame( self.play.bind(self) );
		};
		
		if( self.sunY<128 ){
			self.mode = 'sunset';
		}else if( self.sunY>170 ){
			self.mode = 'sunrise';
		}
		if( self.mode==='sunset' ){
			self.sunY += 0.1;
			self.sun.style.cy = self.sunY+'';
			self.ratio -= 0.0022;			
		}else{
			self.sunY -= 0.1;
			self.sun.style.cy = self.sunY+'';
			self.ratio += 0.0022;
		};
		self.layersChange();
	}
}
new Sunset();

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

//arizona.addEventListener('click',render)