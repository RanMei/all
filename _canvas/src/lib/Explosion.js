function Particle(cv){
	this.cv = cv;
	this.type = cv.type===1?'red':'star';
	this.x = cv.mouse.x;
	this.y = cv.mouse.y;
	this.xv = cv.type? 18*Math.random()-9 : 24*Math.random()-12;
	this.yv = cv.type? 18*Math.random()-9 : 24*Math.random()-12;
	this.color = cv.type?'rgb(255,'+((200*Math.random())|0)+','+((80*Math.random())|0)+')':'rgb(255,255,255)';
	this.r = cv.type?5+10*Math.random():1;
	this.a = 1;
}

Particle.prototype = {
	draw: function(){
		var ctx = this.cv.$ctx;
		ctx.globalAlpha = this.a;
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc( this.x,this.y,this.r,0,2*Math.PI );
		ctx.fill();
	},
	step: function(){
		var mouse = this.cv.mouse;
		if( !mouse.out ){
			var dx = mouse.x - this.x;
			var dy = mouse.y - this.y;
			var a = this.x*this.x + this.y*this.y;
			a = a>100?this.cv.gravityStrength/a:this.cv.gravityStrength/100;
			this.xv = (this.xv+a*this.x)*0.99
			this.yv = (this.yv+a*this.y)*0.99
		}
		this.x += this.xv
		this.y += this.yv
		this.a *= 0.99
	}
}

var Explostion = Canvas.extend({
	props: function(){
		return {
			gravityStrength: 10,
			spawnTimer: 0,
			spawnInterval: 10,
			maxCount: 700
		}
	},
	data: function(){
		return {
			particles: [],
			type: 0,
			mouse: {
				x: 0,
				y: 0,
				out: false
			}
		}
	},
	beforePlay: function(){

		this.$setSize( window.innerWidth,window.innerHeight );
		this.mouse.x = this.$width/2;
		this.mouse.y = this.$height/2;
		this.listen();
	},
	render: function(){
		this.$ctx.fillStyle = 'black';
		this.$ctx.fillRect( 0,0,this.$width,this.$height );
		this.particles.forEach(a=>{
			a.draw();
		})

		var dt = 80;
		if(!this.mouse.out){
			this.spawnTimer += (dt<100)?dt:100
			//for(;this.spawnTimer>0;this.spawnTimer-=this.spawnInterval){
			//	this.newParticle()
			//}
			var n = 3;
			while(n--){
				this.newParticle();
			}
		}
		if( this.particles.length>this.maxCount ){
			this.particles.splice( 0,this.particles.length-this.maxCount );
		}
		this.particles.forEach(a=>{
			a.step();
		})
	},
	methods: {
		newParticle: function(){
			this.type = this.type?0:1;
			this.particles.push( new Particle(this) );
		},
		listen: function(){
			this.$el.addEventListener('mouseout',()=>{
				this.mouse.out = true;
			});
			this.$el.addEventListener('mousemove',(e)=>{
				var rect = this.$el.getBoundingClientRect()
				this.mouse = {
					x: e.clientX - rect.left,
					y: e.clientY - rect.top,
					out: false
				}
			});
		}
	}
})

module.exports = {
	template: `<canvas ref="cv"
	style="display:block;"></canvas>`,
	mounted: function(){
		new Explostion({
			el: this.$refs.cv,
			responsive: true
		})
	}
}