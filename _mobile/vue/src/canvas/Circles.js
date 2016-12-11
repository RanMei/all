import {Canvas} from './Canvas.js';

class Circle {
	constructor(x,y,cv){
		this.x = x;
		this.y = y;
		this.cv = cv;
		this.r = Math.round( cv.circleMaxRadius*Math.random() );
		this.alpha = 1;
		this.color = 'rgba(200,30,200,1)';
		this.tick = 0;
	}
	step(){
		this.x += Math.random()*6-3;
		this.y += Math.random()*6-3;
		this.alpha -= this.cv.circleFadingRate;
		this.color = 'rgba(10,30,200,'+this.alpha+')';
		this.tick++;
		if( this.alpha<=0 ){
			//self.circles.splice(i,1);
			this.x = this.cv.$width/2;
			this.y = this.cv.$height/2;
			this.r = Math.round( this.cv.circleMaxRadius*Math.random() );
			this.alpha = 1;
			this.tick = 0;
		}
		this.draw();
	}
	draw(){
		var ctx = this.cv.$ctx;
		ctx.beginPath();
		ctx.strokeStyle = this.color;
		ctx.arc( this.x,this.y,this.r,0,2*Math.PI );
		ctx.stroke();
		ctx.closePath();
	}
}

var Circles = Canvas.extend({
	props: function(){
		return {
			circleCount: 15,
			circleMaxRadius: 400,
			circleFadingRate: 0.04,
			lineWidth: 5
		}
	},
	data: function(){
		return {
			circles: []
		}
	},
	beforePlay: function(){
		this.$ctx.lineWidth = this.lineWidth;
		this.$ctx.lineCap="round";
		this.$ctx.lineJoin="round";
		//this.create();
		this.listen();
	},
	render: function(){
		var self = this;
		var ctx = this.$ctx;
		if( this.circles.length<this.circleCount ){
			this.circles.push( new Circle( this.$width/2,this.$height/2,this/*Math.random()*$w,Math.random()*$h*/ ) );
		};
		ctx.globalCompositeOperation = 'source-over';
		ctx.fillStyle = 'rgba(0,0,0,0.5)';
		ctx.fillRect( 0,0,this.$width,this.$height );
		ctx.globalCompositeOperation = 'lighter';

		this.circles.forEach(function(a,i){
			a.step();
		});
	},
	methods: {
		listen: function(){
			var self = this;
			self.$el.addEventListener("mousedown",function(e){
				console.log(e)
				var x = e.offsetX*1000/Number( document.defaultView.getComputedStyle( self.$el ).width.replace(/px/,'') );
				var y = e.offsetY*1000/Number( document.defaultView.getComputedStyle( self.$el ).height.replace(/px/,'') );
				self.circles.push( new Circle( x,y,self ) );
			});	
		}
	}
})

module.exports = {
	template: 
	`<canvas ref="cv" width="1000" height="1000"
	style="display:block;width:100%;"></canvas>`,
	mounted: function(){
		new Circles({
			el: this.$refs.cv
		})
	}
}