function Trail(){

}
Trail.prototype = {
	spawn: function(){

	},
	draw: function(){
		
	}
}

var Scope = Canvas.extend({
	data: function(){
		return {
			mx: 0,
			my: 0,
			//trail
			trail: [],
			mouseDown: false,

			radius: 1,
			speed: 0.4,
			angle: 0,
			arcx: 0,
			arcy: 0,
			growRadius: true,
			seconds: 0,
			milliseconds: 0
		}
	},
	props: function(){
		return {
			maxTrail: 200
		}
	},
	beforePlay: function(){
		this.$setSize( window.innerWidth,window.innerHeight );
		this.$ctx.lineWidth = .1;
		this.$ctx.lineJoin = 'round';
	},
	render: function(){
		this.clearCanvas();
		this.updateArc();
		this.updateTrail();
		this.renderTrail();
	},
	methods: {
		rand: function(min, max){
			return ~~( (Math.random()*(max-min+1))+min );
		},
		hitTest: function(x1, y1, w1, h1, x2, y2, w2, h2){
			return !(x1 + w1 < x2 || x2 + w2 < x1 || y1 + h1 < y2 || y2 + h2 < y1);
		},
		createPoint: function(x, y){					
			this.trail.push({
				x: x,
				y: y						
			});
		},
		updateArc: function(){
			this.arcx = (this.$width/2) + Math.sin(this.angle) * this.radius;
			this.arcy = (this.$height/2) + Math.cos(this.angle) * this.radius;					
			var d = new Date();
			this.seconds = d.getSeconds();
			this.milliseconds = d.getMilliseconds();
			this.angle += this.speed*(this.seconds+1+(this.milliseconds/1000));

			if(this.radius <= 1){
				this.growRadius = true;
			} 
			if(this.radius >= 200){
				this.growRadius = false;
			}

			if(this.growRadius){
				this.radius += 1;	
			} else {
				this.radius -= 1;	
			}
		},
		renderTrail: function(){
			var i = this.trail.length;					

			this.$ctx.beginPath();
			while(i--){
				var point = this.trail[i];
				var nextPoint = (i == this.trail.length) ? this.trail[i+1] : this.trail[i];

				var c = (point.x + nextPoint.x) / 2;
				var d = (point.y + nextPoint.y) / 2;						
				this.$ctx.quadraticCurveTo(Math.round(this.arcx), Math.round(this.arcy), c, d);
			};
			this.$ctx.strokeStyle = 'hsla('+this.rand(170,300)+', 100%, '+this.rand(50, 75)+'%, 1)';	
			this.$ctx.stroke();
			this.$ctx.closePath();
		},
		updateTrail: function(){					
			if(this.trail.length < this.maxTrail){
				this.createPoint(this.arcx, this.arcy);
			};
			if(this.trail.length >= this.maxTrail){
				this.trail.splice(0, 1);
			};					
		},
		clearCanvas: function(){
			//this.ctx.globalCompositeOperation = 'source-over';
			//this.ctx.clearRect(0,0,this.cw,this.ch);
			this.$ctx.globalCompositeOperation = 'destination-out';
			this.$ctx.fillStyle = 'rgba(0,0,0,.1)';
			this.$ctx.fillRect(0,0,this.$width,this.$height);					
			this.$ctx.globalCompositeOperation = 'lighter';
		}
	}
})

var isCanvasSupported = function(){
	var elem = document.createElement('canvas');
	return !!(elem.getContext && elem.getContext('2d'));
};

/*=============================================================================*/	
/* Setup requestAnimationFrame
/*=============================================================================*/
var setupRAF = function(){
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x){
		window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
	};

	if(!window.requestAnimationFrame){
		window.requestAnimationFrame = function(callback, element){
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};
	};

	if (!window.cancelAnimationFrame){
		window.cancelAnimationFrame = function(id){
			clearTimeout(id);
		};
	};
};			

// if(isCanvasSupported){
//     // var c = document.createElement('canvas');
//     // c.width = 400;
//     // c.height = 400;			
//     // var cw = c.width;
//     // var ch = c.height;	
//     // document.body.appendChild(c);
//     var c = document.getElementById('scope');
//     var cw = c.width;
//     var ch = c.height;
//     var cl = new SmoothTrail(c, cw, ch);				
    
//     //setupRAF();
//     cl.init();
// }

// module.exports = {
// 	template: `
// 		<div class="Scope"
// 		style="width:100%;height:100vh;background:black;">
// 			<!-- Abstract Canvas Visualization -->
// 			<canvas ref="canvas" width="400" height="400"
// 			style="display:block;width:60%;margin:auto;background:black;"></canvas>
// 		</div>
// 	`,
// 	mounted: function(){
// 		new Scope({
// 			el: this.$refs.canvas,
// 			width: 400,
// 			height: 400
// 		})
// 	}
// }

var canvas = document.querySelector('#canvas');
canvas.style.background = 'black';

new Scope({
	el: canvas,
	//responsive: true
})