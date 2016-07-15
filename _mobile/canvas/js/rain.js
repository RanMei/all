(function(){
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');

	var $w = canvas.width = 1000;
	var $h = canvas.height = 1000;
	
	function Drop(){
		var self = this;
		this.x = Math.random()*$w;
		this.y = -Math.random()*800;
		//this.lightness = 50;
		this.a = 0.7 + Math.random()*0.3;
		this.minus = true;
		this.color = 'rgba(0,94,255,'+this.a+')';//'hsl(250,100%,'+this.lightness+'%)';
		this.speed = 4 + Math.random()*10;
		this.width = (function(){
			if( self.speed<=5 ){
				return 1;
			}else if( self.speed<=12 ){
				return 2;
			}else{
				return 3;
			}
		})();
		this.height = (function(){
			if( self.speed<=5 ){
				return 2;
			}else if( self.speed<=12 ){
				return 4;
			}else{
				return 6;
			}
		})();
	}
	Drop.prototype = {
		step: function(){
			this.y += this.speed;
			// this.lightness -= 0.2;
			// this.color = 'hsl(250,100%,'+this.lightness+'%)';
			if( this.a>=1 ){
				this.minus = true;
			}else if(this.a<=0.7 ){
				this.minus = false;
			}
			if( this.minus===true ){
				this.a -= 0.05;
			}else{
				this.a += 0.05;
			}
			this.color = 'rgba(0,94,255,'+this.a+')';
		},
		draw: function(){
			ctx.beginPath();
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x,this.y,this.width,this.height);
		}
	}

	function Splash(x,y){
		this.x = x;
		this.y = y;
		this.r = 2;
		this.speedX = Math.random()*6 - 3;
		this.speedY = -Math.random()*3;
		this.life = 30;
		this.color = 'rgba(0,94,255,1)';
	}
	Splash.prototype = {
		draw: function(){
			ctx.beginPath();
			ctx.fillStyle = this.color;
			ctx.arc(this.x, this.y, this.r, Math.PI*2, false);
			ctx.fill();
		},
		step: function(){
			this.x += this.speedX;
			this.y += this.speedY;
			this.r += -0.05;
			this.life--;
		}
	}

	var drops = [];
	for(var i=0;i<500;i++){
		drops.push( new Drop() );
	}
	var splashes = [];

	function render(){
		window.requestAnimationFrame(render);

		ctx.globalCompositeOperation = 'source-over';
		ctx.fillStyle = 'rgba(0,0,0,0.5)';
		ctx.fillRect( 0,0,$w,$h );
		ctx.globalCompositeOperation = 'lighter';

		drops.forEach(function(drop,i){
			drop.draw();
			drop.step();			
			if( drop.y>$h ){
				drops[i] = new Drop();
				splashes.push( new Splash(drop.x,$h) );
			}
		})

		splashes.forEach(function(splash,i){
			splash.draw();
			splash.step();
			if( splash.life<=0 ){
				splashes.splice(i,1);
			}
		})
		//console.log(splashes.length)

	}
	render();

})();