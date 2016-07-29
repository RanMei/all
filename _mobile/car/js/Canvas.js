import {_} from './_.js';

function Canvas( config ){
	this.canvas = config.elem;
	this.canvas.width = config.width;
	this.canvas.height = config.height;
	this.ctx = this.canvas.getContext('2d');
	this.img = {};
	for(var key in config.imgs){
		this.img[key] = this.getImage(
			config.imgs[key][0],
			config.imgs[key][1],
			config.imgs[key][2]
		)
	};
	this.lineX = -250;
	this.carScale = 1;
	this.init();
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
	},
	drawStrip: function(x,y){
		var ctx = this.ctx;
		ctx.beginPath();
		ctx.moveTo(x,y);
		ctx.lineTo(x+this.canvas.width,y-300);
		ctx.lineTo(x+this.canvas.width,y-300-150);
		ctx.lineTo(x,y-150);
		ctx.closePath();
		ctx.fillStyle = 'silver';
		ctx.fill();
	},
	clip: function(x,y,h){
		var ctx = this.ctx;
		ctx.save();
		ctx.beginPath();
		ctx.moveTo(x,y);
		ctx.lineTo(this.canvas.width,y-350);
		ctx.lineTo(this.canvas.width,y-350-h);
		ctx.lineTo(x,y-h);
		// ctx.fillStyle = 'red';
		// ctx.fill();
		ctx.clip();
	},
	render: function(y,dy){
		//console.log(y,dy)
		// console.log(this.img.car)
		var ctx = this.ctx;
		var width = this.canvas.width;
		var shape = this.img.shape;
		var bg = this.img.bg;
		var title = this.img.title;
		var lamp = this.img.lamp;
		var lamp1 = this.img.lamp1;
		var road = this.img.road;
		
		ctx.clearRect( 0, 0, this.canvas.width, this.canvas.height )

		// ctx.fillStyle = 'red';
		// ctx.rect(0,0,100,100);
		// ctx.fill();

		var cy = y%(this.canvas.width*road.r);
		//console.log(cy)
		for( var i=-3;i<5;i++ ){
			ctx.drawImage(
				this.img.road, 0, cy+i*this.canvas.width*road.r, this.canvas.width, this.canvas.width*this.img.road.r
			)
		}

		// if( y>10000 ){
		// 	this.carScale-=0.01;
		// 	ctx.scale(this.carScale,this.carScale);
		// }
		ctx.drawImage(
			this.img.car, width/2.7, 800, width/2, width/2*this.img.car.r
		)
		// if( y>10000 ){
		// 	ctx.scale(1/this.carScale,1/this.carScale)
		// }

		if( y>0&&y<12000 ){

			var cy = y - 0 - width*shape.r;

			if( y>3200&&y<=7000 ){
				cy = 3200 - width*shape.r;
			}else if( y>7000 ){
				cy = y - 3200 - width*shape.r;
			}
			
			if( y>2200 ){

			}
			ctx.drawImage(
				bg, 0, cy-300, width, width*bg.r
			)
			ctx.drawImage(
				shape, 0, cy, width, width*shape.r
			)

		};
		
		if( y>8000 ){
			var cy = y - 8000 - width*lamp.r;
			ctx.drawImage(
				lamp, 0, cy, width, width*lamp.r
			)
			this.clip( 0, cy+350, 1000 );
			ctx.drawImage(
				lamp1, 0, cy-1000, width, width*lamp1.r
			)
			ctx.restore();

			var cy = cy + 335;
			this.lineX += dy/6;

			this.drawStrip( this.lineX,cy )
		}

		ctx.fillStyle = 'red';
		ctx.font = '100px Arial';
		ctx.fillText(y,100,100,100)
		ctx.fillText(dy,300,100,100)
	}
}

export {Canvas};