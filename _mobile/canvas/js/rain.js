(function(){
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');

	var $w = canvas.width = 1000;
	var $h = canvas.height = 1000;
	
	function Drop(){
		this.x = Math.random()*$w;
		this.y = 0;
		this.color = 'blue';
		this.speed = 4+Math.random()*15;
	}
	Drop.prototype = {
		step: function(){
			this.y += this.speed;
		},
		draw: function(){
			ctx.beginPath();
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x,this.y,3,6);
		}
	}

	var drops = [];
	for(var i=0;i<300;i++){
		drops.push( new Drop() );
	}

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
			}
		})

	}
	render();

})();