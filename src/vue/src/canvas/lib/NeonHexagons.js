import {Canvas} from './Canvas.js';

const baseRad = Math.PI * 2 / 6;

class NeonHexagons extends Canvas {
	constructor(options){
		super(options);
		this._init(options);
	}
	beforePlay(){
		this.opts = {

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

			cx: this.width / 2,
			cy: this.height / 2,
			repaintAlpha: .04,
			hueChange: .1
		};
		this.tick = 0;
		this.lines = [];
		this.dieX = this.width / 2 / this.opts.len;
		this.dieY = this.height / 2 / this.opts.len;
		this.ctx.fillStyle = 'black';
		this.ctx.fillRect( 0, 0, this.width, this.height );
	}
	onResize(){
		this.opts.cx = this.width/2;
		this.opts.cy = this.height/2;
	}
	render(){
		var ctx = this.ctx;
		++this.tick;

		ctx.globalCompositeOperation = 'source-over';
		ctx.shadowBlur = 0;
	    // Background color
	    ctx.fillStyle = 'rgba(0,0,0,alp)'.replace( 'alp', this.opts.repaintAlpha );
	    ctx.fillRect( 0, 0, this.width, this.height );

	    ctx.globalCompositeOperation = 'lighter';
	    
	    if( this.lines.length < this.opts.count && Math.random() < this.opts.spawnChance ){
	    	this.lines.push( new Line(this) );
	    };
	    
	    this.lines.map( function( line ){ line.step(); } );
	}
}

export {NeonHexagons};

class Line {
	constructor(canvas){
		this.canvas = canvas;  
		this.reset();
	}
	reset(){
		var opts = this.canvas.opts;
		var tick = this.canvas.tick;
		this.x = 0;
		this.y = 0;
		this.addedX = 0;
		this.addedY = 0;
		// radius
	    this.rad = 0;
	    
	    this.lightInputMultiplier = opts.baseLightInputMultiplier + opts.addedLightInputMultiplier * Math.random();
	    
	    this.color = opts.color.replace( 'hue', tick * opts.hueChange );
	    this.cumulativeTime = 0;
	    
	    this.beginPhase();
	}
	beginPhase(){
		var opts = this.canvas.opts;
		var dieX = this.canvas.dieX;
		var dieY = this.canvas.dieY;


		this.x += this.addedX;
		this.y += this.addedY;

		this.time = 0;
		this.targetTime = ( opts.baseTime + opts.addedTime * Math.random() ) |0;

		this.rad += baseRad * ( Math.random() < .5 ? 1 : -1 );
		this.addedX = Math.cos( this.rad );
		this.addedY = Math.sin( this.rad );

		if( Math.random() < opts.dieChance || this.x > dieX || this.x < -dieX || this.y > dieY || this.y < -dieY ){
			this.reset();
		};
	}
	step(){
		var opts = this.canvas.opts;
		var ctx = this.canvas.ctx;

		++this.time;
		++this.cumulativeTime;

		if( this.time >= this.targetTime ){
			this.beginPhase();
		}

		var prop = this.time / this.targetTime,
		wave = Math.sin( prop * Math.PI / 2  ),
		x = this.addedX * wave,
		y = this.addedY * wave;

		ctx.shadowBlur = prop * opts.shadowToTimePropMult;
		ctx.fillStyle = ctx.shadowColor = this.color.replace( 'light', opts.baseLight + opts.addedLight * Math.sin( this.cumulativeTime * this.lightInputMultiplier ) );
		ctx.fillRect( opts.cx + ( this.x + x ) * opts.len, opts.cy + ( this.y + y ) * opts.len, 2, 2 );

		if( Math.random() < opts.sparkChance ){
			ctx.fillRect( opts.cx + ( this.x + x ) * opts.len + Math.random() * opts.sparkDist * ( Math.random() < .5 ? 1 : -1 ) - opts.sparkSize / 2, opts.cy + ( this.y + y ) * opts.len + Math.random() * opts.sparkDist * ( Math.random() < .5 ? 1 : -1 ) - opts.sparkSize / 2, opts.sparkSize, opts.sparkSize )
		
		}
	}
}


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