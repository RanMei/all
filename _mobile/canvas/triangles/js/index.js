window.onload = function(){
	var frameRate = 33,
		canvas = document.getElementById("canvas"),
		ctx = canvas.getContext("2d"),
		W = window.innerWidth,
		H = window.innerHeight,
		particles = [],
		mouse = {},
		particle_count = 400,
		lastX,
		lastY,
		lastX2,
		lastY2,
		active;

	canvas.width = W;
	canvas.height = H;

	canvas.addEventListener('mousemove', track_mouse, false);

	canvas.addEventListener('mousedown', explosion, false);

	function explosion() {
		active = 100;
	}

	for(var i = 0; i < particle_count; i++) {
		particles.push(new particle());
	}

	function track_mouse(e) {
		mouse.x = e.pageX;
		mouse.y = e.pageY;
		active = 1;

	}

	function particle()	{
		this.speed = {
			x: -1.25 + Math.random() * 2.5,
			y: -0.40 + Math.random() * 2.5
		};

		if(mouse.x && mouse.y) {
			this.location = {
				x: mouse.x + ( active * (25 - Math.random() * 50 ) ), 
				y: mouse.y + ( active * (25 - Math.random() * 50 ) )
			};
		} else {
			this.location = {
				x: W/2, 
				y: H/2
			};
		}

		this.r = Math.round(Math.random() * 255) - 220;
		this.g = Math.round(Math.random() * 255) - 220;
		this.b = Math.round(Math.random() * 255) - 220;

		this.widthHeight = 10 + Math.random() * 40;
		
		this.life = 10 + Math.random() * 40;
		
		this.remaining_life = this.life;

		this.opacity = 1;
	}

	var f = 0;

	var oldX;
	var oldY;
	var oldR;
	var oldG;
	var oldB;

	function draw() {
		
		ctx.globalCompositeOperation = "source-over";

		if(mouse.x != undefined) {
			var lightX = mouse.x - oldX;
			(lightX <= 0) ? lightX = lightX * -1 : false ;	

			var lightY = mouse.y - oldY;
			(lightY <= 0) ?	lightY = lightY * -1 : false ;

			var finalLight = lightX + lightY;

			var r = finalLight + 80;
			(r<=0) ? r=0 : false ;
			(r>=250) ? r=110 : false ;
			(r>oldR+1) ? r = oldR+1 : false;
			(r<oldR-1) ? r = oldR-1 : false;
			oldR = r;

			var g = finalLight + 90;
			(g<=0) ? g=0 : false ;
			(g>=135) ? g=120 : false ;
			(g>oldG+1) ? g = oldG+1 : false;
			(g<oldG-1) ? g = oldG-1 : false;
			oldG = g;

			var b = finalLight + 190;
			(b<=0) ? b=0 : false ;
			(b>=190) ? b=200 : false ;
			(b>oldB+1) ? b = oldB+1 : false;
			(b<oldB-1) ? b = oldB-1 : false;
			oldB = b;

			oldX = mouse.x;
			oldY = mouse.y;

			ctx.fillStyle = "rgba("+parseInt(r)+","+parseInt(g)+","+parseInt(b)+",1)";
		} else {
			ctx.fillStyle = "rgba(80,90,170,1)";
		}

		ctx.fillRect(0, 0, W, H);
		ctx.globalCompositeOperation = "lighter";
		
		if(f >= 40){
			active = 25;
			f = 0 + ( Math.random() * 50 );
		}
		f++;

		for(var i = 0; i < particles.length; i++) {

			var p = particles[i],
				gradient = ctx.createRadialGradient(p.location.x, p.location.y, 0, p.location.x, p.location.y, 50);
			
			ctx.beginPath();
			ctx.moveTo( p.location.x , p.location.y );
			ctx.lineTo( lastX , lastY );	
			ctx.strokeStyle= "rgba(15,3,9,.6)";
			ctx.stroke();
			
			ctx.beginPath(); 
			ctx.moveTo( p.location.x , p.location.y );
			if( ( Math.random() + 0.498 ) > 0.5 ) {
				ctx.lineTo( lastX , lastY );
			} else {
				ctx.lineTo( lastX + ( active * (75 - Math.random() * 150 )), lastY + ( active * (75 - Math.random() * 150 )) );
			}
			ctx.lineTo( lastX2 , lastY2 );

			var dark = 5;

			var g = p.g + 5 - dark;
			(g<=0) ? g=0 : false ;

			var r = p.r + 15 - dark;
			(r<=0) ? r=0 : false ;

			var b = p.b - 5 - dark;
			(b<=0) ? b=0 : false ;

			var o = p.opacity - .1;
			(o<=0) ? o=0 : false ;

			ctx.fillStyle= "rgba("+r+","+g+","+b+","+o+")";
			ctx.stroke();
			ctx.fill();
			
			ctx.beginPath();
			gradient.addColorStop(0, "rgba(8,8,20,0.5)");
			gradient.addColorStop(0.5, "rgba(2,2,2,0.25)");
			gradient.addColorStop(1, "rgba(0,1,1,0)");
			ctx.fillStyle = gradient;
			ctx.arc(p.location.x , p.location.y, 50, Math.PI*2, false);
			ctx.fill();

			lastX2 = lastX;
			lastY2 = lastY;
			lastX = p.location.x;
			lastY = p.location.y;

			p.location.x += p.speed.x;
			p.location.y += p.speed.y;

			p.widthHeight--;

			p.remaining_life--;

			p.opacity = ( ( 100 * p.remaining_life ) / p.life ) / 100;

			frameRate++;

			if(p.opacity < 0) {
				particles[i] = new particle();
			}
		}

		active = 0;
	}

	setInterval(draw, 33);

}