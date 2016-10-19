class Canvas {
	constructor(options){

	}
	_init(options){
		this._options = options;

		this.el = document.querySelector(options.el);
		this.ctx = this.el.getContext('2d');
		this.width = this.el.width = options.width||1000;
		this.height = this.el.height = options.height||1000;

		this._playing = false;

		this.beforePlay();
		this.listen();
		this._playing = true;
		this.play();
		console.log(this)
	}
	pause(){
		this._playing = false;
	}
	play(){
		if( this._playing ){
			requestAnimationFrame( this.play.bind(this) );
			this.render();
		};
	}
}

export {Canvas};