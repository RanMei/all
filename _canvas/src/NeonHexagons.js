
const baseRad = Math.PI * 2 / 6;

function Line (cv) {
	this.cv = cv;  
	this.reset();
}

console.dir(Line)

Line.prototype = {
	reset: function(){
		var tick = this.cv.tick;
		var baseLightInputMultiplier = this.cv.baseLightInputMultiplier;
		var addedLightInputMultiplier = this.cv.addedLightInputMultiplier;
		var color = this.cv.color;
		var hueChange = this.cv.hueChange;

		this.x = 0;
		this.y = 0;
		this.addedX = 0;
		this.addedY = 0;
		// radius
	    this.rad = 0;
	    
	    this.lightInputMultiplier = baseLightInputMultiplier + addedLightInputMultiplier * Math.random();
	    
	    this.color = color.replace( 'hue', tick * hueChange );
	    this.cumulativeTime = 0;
	    
	    this.beginPhase();
	},
	beginPhase: function(){
		var dieX = this.cv.dieX;
		var dieY = this.cv.dieY;
		var baseTime = this.cv.baseTime;
		var addedTime = this.cv.addedTime;
		var dieChance = this.cv.dieChance;


		this.x += this.addedX;
		this.y += this.addedY;

		this.time = 0;
		this.targetTime = ( baseTime + addedTime * Math.random() ) |0;

		this.rad += baseRad * ( Math.random() < .5 ? 1 : -1 );
		this.addedX = Math.cos( this.rad );
		this.addedY = Math.sin( this.rad );

		if( Math.random() < dieChance || this.x > dieX || this.x < -dieX || this.y > dieY || this.y < -dieY ){
			this.reset();
		};
	},
	step: function(){
		var ctx = this.cv.$ctx;
		var shadowToTimePropMult = this.cv.shadowToTimePropMult;
		var baseLight = this.cv.baseLight;
		var addedLight = this.cv.addedLight;
		var cx = this.cv.cx;
		var cy = this.cv.cy;
		var len = this.cv.len;
		var sparkChance = this.cv.sparkChance;
		var sparkDist = this.cv.sparkDist;
		var sparkSize = this.cv.sparkSize;

		++this.time;
		++this.cumulativeTime;

		if( this.time >= this.targetTime ){
			this.beginPhase();
		}

		var prop = this.time / this.targetTime,
		wave = Math.sin( prop * Math.PI / 2  ),
		x = this.addedX * wave,
		y = this.addedY * wave;

		ctx.shadowBlur = prop * shadowToTimePropMult;
		ctx.fillStyle = ctx.shadowColor = this.color.replace( 'light', baseLight + addedLight * Math.sin( this.cumulativeTime * this.lightInputMultiplier ) );
		ctx.fillRect( cx + ( this.x + x ) * len, cy + ( this.y + y ) * len, 2, 2 );

		if( Math.random() < sparkChance ){
			ctx.fillRect( cx + ( this.x + x ) * len + Math.random() * sparkDist * ( Math.random() < .5 ? 1 : -1 ) - sparkSize / 2, cy + ( this.y + y ) * len + Math.random() * sparkDist * ( Math.random() < .5 ? 1 : -1 ) - sparkSize / 2, sparkSize, sparkSize )
		
		}
	}
}

var NeonHexagons = Canvas.extend({
	data: function(){
		return {

			len: 20,
			count: 50,// Max count of the lines
			baseTime: 10,
			addedTime: 10,
			dieChance: .05,
			spawnChance: 1,
			sparkChance: .1,
			sparkDist: 10,
			sparkSize: 2,

			color: 'hsl(hue,100%,light%)',
			baseLight: 50,
			addedLight: 10, // [50-10,50+10]
			shadowToTimePropMult: 6,
			baseLightInputMultiplier: .01,
			addedLightInputMultiplier: .02,

			cx: null,
			cy: null,
			repaintAlpha: .04,
			hueChange: .1
		};
	},
	beforePlay: function(){
		this.$el.width = window.innerWidth;
		this.$el.height = window.innerHeight;
		window.addEventListener('resize',function(){
			this.cx = this.$el.width/2;
			this.cy = this.$el.height/2;
		})
		this.cx = this.$el.width/2;
		this.cy = this.$el.height/2;
		this.tick = 0;
		this.lines = [];
		this.dieX = this.$el.width / 2 / this.len;
		this.dieY = this.$el.height / 2 / this.len;
		this.$ctx.fillStyle = 'black';
		this.$ctx.fillRect( 0, 0, this.$el.width, this.$el.height );
	},
	render: function(){
		var ctx = this.$ctx;
		++this.tick;

		ctx.globalCompositeOperation = 'source-over';
		ctx.shadowBlur = 0;
	    // Background color
	    ctx.fillStyle = 'rgba(0,0,0,alp)'.replace( 'alp', this.repaintAlpha );
	    ctx.fillRect( 0, 0, this.$el.width, this.$el.height );

	    ctx.globalCompositeOperation = 'lighter';
	    
	    if( this.lines.length < this.count && Math.random() < this.spawnChance ){
	    	this.lines.push( new Line(this) );
	    };
	    
	    this.lines.map( function( line ){
	    	line.step();
	    });
	}
})
console.dir(NeonHexagons)
new NeonHexagons({
	el: document.querySelector('canvas')
})



//render();

// window.addEventListener( 'resize', function(){

//   w = c.width = window.innerWidth;
//   h = c.height = window.innerHeight;
//   ctx.fillStyle = 'black';
//   ctx.fillRect( 0, 0, w, h );

//   opts.cx = w / 2;
//   opts.cy = h / 2;

//   dieX = w / 2 / opts.len;
//   dieY = h / 2 / opts.len;
// });