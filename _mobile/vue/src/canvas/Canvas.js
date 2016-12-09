class Canvas {
	constructor(opts){

	}
	_init(options){
		this._options = options;

		this.el = (typeof options.el==='string')?document.querySelector(options.el):options.el;
		this.ctx = this.el.getContext('2d');
		this.width = this.el.width||1000;
		this.height = this.el.height||1000;
		this._listen();
		if(options.responsive===true){
			this._response();
		}

		this._start();
	}
	_start(){
		this._playing = false;
		this._tick = 0;
		this._time = new Date().getTime();
		this._fps = 0;


		//this._initCache();
		this.beforePlay();

		this._playing = true;
		this._play();
	}
	_response(){
		window.addEventListener('resize',()=>{
			this.width = this.el.width = window.innerWidth;
			this.height = this.el.height = window.innerHeight;
		})
	}
	//onResize(){}
	_initCache(){
		this._cache = document.createElement('canvas');
		this._cache.width = 1000;
		this._cache.height = 1000;
		this.ctx = this._cache.getContext('2d'); 
	}
	_render(){
		this._ctx.clearRect(0,0,this.width,this.height);
		this._ctx.drawImage(this._cache, 0, 0);
	}
	_listen(){
		this.el.addEventListener('click',()=>{
			if(this._playing){
				this._pause();
			}else{
				this._resume();		
			}
		})
		// document.addEventListener('keydown',()=>{
		// 	console.log(111)
		// 	this._playing = false;
		// 	setTimeout(()=>{
		// 		this._start();
		// 	},1000)
			
		// })
	}
	_pause(){
		this._playing = false;
	}
	_resume(){
		this._playing = true;
		this._play();
	}
	_play(){
		if( this._playing ){
			requestAnimationFrame( this._play.bind(this) );
			this.render();
			this._renderFPS();
			//this._render();
		};
	}
}

// create a subclass of Canvas
Canvas.extend = function(opts){
	function Sub(){
		this._init(opts);
	}
	Sub.prototype = new Canvas(opts);
	return Sub;
}

Canvas.prototype._renderFPS = function(){
	this._tick++;
	if(this._tick===60){
		var newTime = new Date().getTime();
		this._fps = Math.round( 1/((newTime - this._time)/1000/60) );

		this._time = newTime;
		this._tick = 0;
	}
	this.ctx.fillStyle = 'red';
	this.ctx.font = '14px Microsoft Yahei';
	this.ctx.fillText(this._fps+' FPS', 10,20,100);
}

export {Canvas};