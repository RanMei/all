import {Canvas} from './Canvas.js';

class Circle {
	constructor(x,y,canvas){
		this.x = x;
		this.y = y;
		this.r = Math.round(canvas.circleMaxRadius*Math.random());
		this.alpha = 1;
		this.color = 'rgba(200,30,200,1)';
		this.tick = 0;
	}
	step(canvas){
		this.x += Math.random()*6-3;
		this.y += Math.random()*6-3;
		this.alpha -= canvas.circleFadingRate;
		this.color = 'rgba(10,30,200,'+this.alpha+')';
		this.tick++;
		this.draw(canvas);
	}
	draw(canvas){
		var ctx = canvas.ctx;
		ctx.beginPath();
		ctx.strokeStyle = this.color;
		ctx.arc( this.x,this.y,this.r,0,2*Math.PI );
		ctx.stroke();
	}
}

class Circles extends Canvas {
	constructor(options){
		super();
		this._init(options);
	}
	beforePlay(){
		this.circles = [];
		this.circleCount = this._options.circleCount||50;
		this.circleMaxRadius = 400;
		this.circleFadingRate = 0.008;
		this.ctx.lineWidth = this._options.lineWidth||5;
		this.ctx.lineCap="round";
		this.ctx.lineJoin="round";
		this.create();
		this.listen();
	}
	create(){

	}
	listen(){
		var self = this;
		self.el.addEventListener("mousedown",function(e){
			console.log(e)
			var x = e.offsetX*1000/Number( document.defaultView.getComputedStyle( self.el ).width.replace(/px/,'') );
			var y = e.offsetY*1000/Number( document.defaultView.getComputedStyle( self.el ).height.replace(/px/,'') );
			self.circles.push( new Circle( x,y,self ) );
		});
	}
	render(){
		var self = this;
		var ctx = this.ctx;
		if( this.circles.length<this.circleCount ){
			this.circles.push( new Circle( this.width/2,this.height/2,this/*Math.random()*$w,Math.random()*$h*/ ) );
		};
		ctx.globalCompositeOperation = 'source-over';
		ctx.fillStyle = 'rgba(0,0,0,0.5)';
		ctx.fillRect( 0,0,this.width,this.height );
		ctx.globalCompositeOperation = 'lighter';

		this.circles.map(function(elem,i){
			elem.step(self);
			if( elem.alpha<=0 ){
				self.circles.splice(i,1);
			}
		});
		this.tick++;
	}

}

export {Circles};