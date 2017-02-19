
class Circle {
	constructor(cv){
		this.cv = cv;
		this.spawn();
	}
	spawn(){
		this.tick = 0;
		this.x = this.cv.$width/2;
		this.y = this.cv.$height/2;
		this.r = Math.round( this.cv.circleMaxRadius*Math.random() );
		this.color = 'rgba(10,30,200,1)';
		this.alpha = 1;
		this.tick = 0;
	}
	step(){
		this.x += Canvas.random(-2,2);
		this.y += Canvas.random(-2,2);
		this.alpha -= this.cv.circleFadingRate;
		this.color = 'rgba(10,30,200,'+this.alpha+')';
		this.tick++;
		if( this.alpha<=0 ){
			this.spawn();
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

//import {Canvas} from './Canvas.js';

var Circles = Canvas.extend({
	props: function(){
		return {
			circleCount: 50,
			circleMaxRadius: 200,
			circleFadingRate: 0.01,
			lineWidth: 6
		}
	},
	data: function(){
		return {
			circles: []
		}
	},
	beforePlay: function(){
		this.$ctx.lineWidth = this.lineWidth;
		this.$ctx.lineCap = "round";
		this.$ctx.lineJoin = "round";
		//this.create();
		this.listen();
	},
	render: function(){
		var self = this;
		var ctx = this.$ctx;
		if( this.circles.length<this.circleCount ){
			this.circles.push( new Circle( this ) );
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
	`<canvas ref="cv"
	style="display:block;"></canvas>`,
	mounted: function(){
		new Circles({
			el: this.$refs.cv,
			responsive: true
		})
	}
}