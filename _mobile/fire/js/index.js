window.addEventListener('DOMContentLoaded',function(){

	var canvas = document.getElementById("fire");
	var ctx = canvas.getContext("2d");
	
	//Make the canvas occupy the full page
	//var W = window.innerWidth, H = window.innerHeight;
	var W = 800;
	var H = 1000;
	canvas.width = W;
	canvas.height = H;	

	function FlameParticle(){
		//speed, life, location, life, colors
		//speed.x range = -2.5 to 2.5 
		//speed.y range = -15 to -5 to make it move upwards
		//lets change the Y speed to make it look like a flame
		this.speed = {
			x: -2.5+Math.random()*5, 
			y: -25+Math.random()*10
		};
		
		var locmin = (W/2)-(flamewidth/2); 
		var locmax = (W/2)+(flamewidth/2);
		this.location = {
			x: Math.random()*(locmax - locmin)+locmin,
			y: 2*H/3
		};
		
		this.radius = Math.random()*50;
		//life range = 20-30
		this.life = 20 + Math.random()*10;
		this.remaining_life = this.life;
		//colors
		this.r = '255';
		this.g = Math.round(Math.random()*(100 - 190) + 100);
		this.b = Math.round(Math.random()*(10 - 30) + 10);
	}
	FlameParticle.prototype = {
		draw: function(){
			var p = this;
			ctx.beginPath();
			//changing opacity according to the life.
			//opacity goes to 0 at the end of life of a particle
			p.opacity = Math.round(p.remaining_life/p.life*100)/100;
			//a gradient instead of white fill
			var gradient = ctx.createRadialGradient(p.location.x, p.location.y, 0, p.location.x, p.location.y, p.radius);
			gradient.addColorStop(0, "rgba("+p.r+", "+p.g+", "+p.b+", "+p.opacity+")");
			gradient.addColorStop(0.5, "rgba("+p.r+", "+p.g+", "+p.b+", "+p.opacity+")");
			gradient.addColorStop(1, "rgba("+p.r+", "+p.g+", "+p.b+", 0)");
			ctx.fillStyle = gradient;
			//ctx.fillStyle = 'rgba(50,255,255,'+p.opacity+')';
			ctx.arc(p.location.x, p.location.y, p.radius, Math.PI*2, false);
			ctx.fill();
		},
		step: function(){
			var p = this;
			//lets move the particles
			p.remaining_life--;
			p.radius -= 2;
			p.location.x += p.speed.x;
			p.location.y += p.speed.y;
		}
	}

	function SmokeParticle(){
		//speed, life, location, life, colors
		this.speed = {x: -2.5+Math.random()*5, y: -15+Math.random()*3};

		var locmin = (W/2)-flamewidth/2; 
		var locmax = (W/2)+flamewidth/2;
		this.location = {
			x: Math.random()*(locmax - locmin)+locmin,
			y: 2*H/3
		};
		
		this.radius = Math.random()*16;
		//life range = 20-80
		this.life = 20+Math.random()*40;
		this.remaining_life = this.life;
		//colors
		var b = Math.round( Math.random()*(120 - 255) + 120 );
		this.r = b;
		this.g = b;
		this.b = b;
	}
	SmokeParticle.prototype = {
		draw: function(){
			var s = this;
			ctx.beginPath();
			//changing opacity according to the life.
			//opacity goes to 0 at the end of life of a particle
			s.opacity = Math.round(s.remaining_life/s.life*100)/100
			//a gradient instead of white fill
			var gradient = ctx.createRadialGradient(s.location.x, s.location.y, 0, s.location.x, s.location.y, s.radius);
			gradient.addColorStop( 0, "rgba("+s.r+", "+s.g+", "+s.b+", "+s.opacity+")" );
			gradient.addColorStop( 0.5, "rgba("+s.r+", "+s.g+", "+s.b+", "+s.opacity+")" );
			gradient.addColorStop( 1, "rgba("+s.r+", "+s.g+", "+s.b+", 0)" );
			ctx.fillStyle = gradient;
			ctx.arc(s.location.x, s.location.y, s.radius, Math.PI*2, false);
			ctx.fill();
		},
		step: function(){
			var s = this;
			//lets move the particles
			s.remaining_life -= 0.3;
			s.radius -= 0.2;
			s.location.x += s.speed.x;
			s.location.y += s.speed.y;
		}
	}

	var particles = [];
	var smoke_particles = [];
	//Lets create some particles now
	var particle_count = 400;
	var flamewidth = 300;
	for(var i = 0; i < particle_count; i++){
		particles.push( new FlameParticle() );
	}
	var smoke_count = 50;
	for(var o = 0; o < smoke_count; o++){
		smoke_particles.push( new SmokeParticle() );
	}
	
	function render(){
		//window.requestAnimationFrame( render );
		//Painting the canvas black
		//Time for lighting magic
		//particles are painted with "lighter"
		//In the next frame the background is painted normally without blending to the 
		//previous frame
		ctx.globalCompositeOperation = "source-over";
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, W, H);
		//ctx.clearRect(0, 0, W, H);
		ctx.globalCompositeOperation = "lighter";
		
		particles.forEach(function(p,i){
			p.draw();
			p.step();
			//regenerate particles
			if(p.remaining_life < 0 || p.radius < 0){
				//a brand new particle replacing the dead one
				particles[i] = new FlameParticle();
			}
		})

		smoke_particles.forEach(function(s,i){
			s.draw();
			s.step();
			//regenerate particles
			if(s.remaining_life < 0 || s.radius < 0){
				//a brand new particle replacing the dead one
				smoke_particles[i] = new SmokeParticle();
			}
		})

	}
	//render();
	setInterval(render, 33);

});