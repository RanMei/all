import {_} from './_.js';

function Canvas( config ){
	this.canvas = config.elem;
	this.canvas.width = config.width;
	this.canvas.height = config.height;
	this.ctx = this.canvas.getContext('2d');
	this.img = {};
	for(var key in config.imgs){
		var img = new Image();
		img.src = config.imgs[key][0];
		img.r = config.imgs[key][2]/config.imgs[key][1];
		img.cy = config.imgs[key][3];
		this.img[key] = img;
	}
}

Canvas.prototype = {
	init: function(){
		// window.addEventListener('resize',this.onResize.bind(this));
		// this.onResize();
	},
	onResize: function(){
		this.canvas.width = _.getWidth( this.canvas );
		this.canvas.height = _.getHeight( this.canvas );
		//console.log(this.canvas.width,this.canvas.height)
		//this.render();
	},
	getImage: function(src,w,h){
		var img = new Image();
		img.src = src;
		img.r = h/w;
		return img;
	}
}

export {Canvas};