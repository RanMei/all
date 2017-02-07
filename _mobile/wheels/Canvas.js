/*
  Canvas.extend();
*/

class Canvas {
  constructor(opts){
    this._options = opts;
    this._props = opts.props;
    this._data = opts.data;
    
    this.beforePlay = opts.beforePlay;
    this.render = opts.render;
    
    for( var key in opts.methods ){
      this[key] = opts.methods[key];
    }
  }
  _init_cv(cvOpts){
    var cv = this;
    cv.$el = (typeof cvOpts.el==='string')?document.querySelector(cvOpts.el):cvOpts.el;
    cv.$ctx = cv.$el.getContext('2d');

    cv.$width = cv.$el.width||1000;
    cv.$height = cv.$el.height||1000;

    if( cvOpts.interval ){
      cv._interval = cvOpts.interval;
    }

    // init props
    var props = this._props?this._props():{};
    for(var key in props){
      cv[key] = props[key];
    }
    for(var key in cvOpts.props){
      cv[key] = cvOpts.props[key];
    }

    if( cvOpts.useInterval ){
      window.requestAnimationFrame = function(callback) {
        window.setTimeout( callback, 1000 / cvOpts.useInterval );
      };
    }

    // init data
    var data = this._data();
    for(var key in data){
      cv[key] = data[key];
    }

    this._listen();
    if(cvOpts.responsive===true){
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
    this.$setSize(window.innerWidth,window.innerHeight);
    window.addEventListener('resize',()=>{
      this.$setSize(window.innerWidth,window.innerHeight);
    })
  }
  //onResize(){}
  _initCache(){
    this._cache = document.createElement('canvas');
    this._cache.width = 1000;
    this._cache.height = 1000;
    this.$ctx = this._cache.getContext('2d'); 
  }
  _render(){
    this.$ctx.clearRect(0,0,this.$width,this.$height);
    this.$ctx.drawImage(this._cache, 0, 0);
  }
  _listen(){
    this.$el.addEventListener('click',()=>{
      if(this._playing){
        this.$pause();
      }else{
        this.$resume();   
      }
    })
    // document.addEventListener('keydown',()=>{
    //  console.log(111)
    //  this._playing = false;
    //  setTimeout(()=>{
    //    this._start();
    //  },1000)
      
    // })
  }
  $fit(){
    this.$el.width = window.innerWidth;
    this.$el.height = window.innerHeight;
    window.addEventListener('resize',()=>{
      this.$el.width = window.innerWidth;
      this.$el.height = window.innerHeight;
    })
  }
  $pause(){
    this._playing = false;
  }
  $resume(){
    this._playing = true;
    this._play();
  }
  $setSize( width,height ){
    this.$el.width = this.$width = width;
    this.$el.height = this.$height = height;
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
  function Sub(cvOpts){
    this._init_cv(cvOpts);
  }
  Sub.prototype = new Canvas(opts);
  return Sub;
}

Canvas.random = function(min,max){
  return min + (max-min)*Math.random();
}
Canvas.randomInt = function(min,max){
  return ~~(min + (max-min+1)*Math.random());
}

Canvas.prototype._renderFPS = function(){
  this._tick++;
  if(this._tick===60){
    var newTime = new Date().getTime();
    this._fps = Math.round( 1/((newTime - this._time)/1000/60) );

    this._time = newTime;
    this._tick = 0;
  }
  this.$ctx.fillStyle = 'red';
  this.$ctx.font = '14px Microsoft Yahei';
  this.$ctx.fillText(this._fps+' FPS', 10,20,100);
}

window.Canvas = Canvas;

export {Canvas};