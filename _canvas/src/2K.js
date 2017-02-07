// q = function(e,b){
// 	return~~( e + m.random()*(b-e+1))
// };
function Particle(cv){
	this.cv = cv;
	this.spawn();
}
Particle.prototype = {
	spawn: function(){
		var q = Canvas.randomInt;
		this.x = this.cv.w/2;
		this.y = this.cv.h/2;
		this.r = q(25,350)/100;
		this.rad = q(0,360);
		this.b = q(-75,75)/100;
		this.c = q(-40,40);
	},
	draw: function(){
		var ctx = this.cv.$ctx;
		var p = this;
		var u = this.cv.u;
		ctx.beginPath();
		ctx.arc( p.x, p.y, p.r, 0, 2*Math.PI );
		ctx.moveTo( p.cv.w/2,p.cv.h/2 );
		ctx.lineTo( p.x,p.y );
		ctx.fillStyle = "hsl("+(u+p.c)+",100%,50%)";
		ctx.fill();
		ctx.strokeStyle = "hsla("+(u+p.c)+",100%,50%,.05)";
		ctx.stroke();
	},
	step: function(){
		var p = this;
		var w = this.cv.w;
		var h = this.cv.h;
		var j = this.cv.j;
		var k = this.cv.k;
		var u = this.cv.u;
		p.r -= 0.02;
		var f = p.rad*Math.PI/180,
			g = Math.sin(f)*p.b;
		p.x += Math.cos(f)*p.b + j*p.r/175;
		p.y += g + k*p.r/175;
		if( p.y-p.r>h||p.y<-p.r||p.x>w+p.r||p.x<-p.r||p.r<0 ){
			p.spawn();
		};
	}
}

var Flower = Canvas.extend({
	props: function(){
		return {
			length: 200
		}
	},
	data: function(){
		return {
			particles: [],
			w: window.innerWidth,
			h: window.innerHeight,
			j: 0,
			k: 0,
			u: 0
		}
	},
	beforePlay: function(){
		//console.log(this.particles)
		var self = this;
		self.$el.style.background="#000";
		self.$el.width = window.innerWidth;
		self.$el.height = window.innerHeight;
		window.addEventListener('resize',function(){
			self.w = window.innerWidth;
			self.h = window.innerHeight;
			self.$el.width = window.innerWidth;
			self.$el.height = window.innerHeight;
		})
		this.$el.addEventListener("mousemove",function(e){
			var j,k,u;
			var d = "Infinity";
			j = Math.floor( e.pageX-self.$el.offsetLeft-200 );
			k = Math.floor( e.pageY-self.$el.offsetTop-self.h/2 );
			e = -(-k/-j);
			u = Math.floor( Math.atan(e)*(180/Math.PI) );
			0>j&&0>k&&(u+=180);
			0>j&&0<k&&(u+=180);
			0<j&&0<k&&(u+=360);
			0>k&&e=="-"+d&&(u=90);
			0<k&&e==d&&(u=270);
			0>j&&"0"==e&&(u=180);
			isNaN(u)&&(u=0);
			self.j = j;
			self.k = k;
			self.u = u;
		});
		var l = this.length;
		while(l--){
			this.particles.push( new Particle(this) )
		}
	},
	render: function(){
		var ctx = this.$ctx;
		ctx.fillStyle = "rgba(0,0,0,.1)";
		ctx.fillRect( 0,0,this.w,this.h );
		this.particles.forEach(function(a){
			a.draw();
			a.step();
		})
	}
})

new Flower({
	el: document.getElementsByTagName('canvas')[0]
})

/*

var b = document.body;
var c = document.getElementsByTagName('canvas')[0];
var a = c.getContext('2d');
w=window.innerWidth;
h=window.innerHeight;
particles=[];
j=0;
k=0;
u=0;
m=Math;
q = function(e,b){
	return~~( e + m.random()*(b-e+1))
};
d="Infinity";
c.width = window.innerWidth;
c.height = window.innerHeight;

window.addEventListener('resize',function(){
	w = window.innerWidth;
	h = window.innerHeight;
	c.width = window.innerWidth;
	c.height = window.innerHeight;
})

document.bgColor="#111";
c.style.background="#000";
c.addEventListener("mousemove",function(e){
	j=m.floor(e.pageX-c.offsetLeft-200);
	k=m.floor(e.pageY-c.offsetTop-h/2);
	e=-(-k/-j);
	u=m.floor(m.atan(e)*(180/m.PI));
	0>j&&0>k&&(u+=180);
	0>j&&0<k&&(u+=180);
	0<j&&0<k&&(u+=360);
	0>k&&e=="-"+d&&(u=90);
	0<k&&e==d&&(u=270);
	0>j&&"0"==e&&(u=180);
	isNaN(u)&&(u=0)
});

setInterval(function(){
	a.fillStyle = "rgba(0,0,0,.1)";
	a.fillRect( 0,0,w,h );
	var e=particles.length;
	if(e<200){
		for(var b=200-e;b--;){
			particles.push({
				alpha: q(25,350)/100,
				x:w/2,
				y:h/2,
				d:q(0,360),
				b:q(-75,75)/100,
				c:q(-40,40)
			})
		};
	}
	for(;e--;){
		b = particles[e];
		a.beginPath();
		// draw a circle
		a.arc( b.x,b.y,b.alpha,0,2*m.PI );
		a.moveTo( w/2,h/2 );
		a.lineTo( b.x,b.y );
		a.fillStyle = "hsl("+(u+b.c)+",100%,50%)";
		a.fill();
		a.strokeStyle = "hsla("+(u+b.c)+",100%,50%,.05)";
		a.stroke();

		b.alpha -= 0.02;
		var f = b.d*m.PI/180,g=m.sin(f)*b.b;
		b.x += m.cos(f)*b.b+j*b.alpha/175;
		b.y += g+k*b.alpha/175;
		(b.y-b.alpha>h||b.y<-b.alpha||b.x>w+b.alpha||b.x<-b.alpha||0>b.alpha)&&particles.splice(e,1)
	}
},5);

*/