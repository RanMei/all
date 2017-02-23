(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Canvas = factory());
}(this, (function () { 'use strict';

/*
  Canvas.extend();
*/

function noop (){}

var Canvas = function Canvas(options){
  var this$1 = this;

  this._options = options;
  this._props = options.props;
  this._data = options.data;
    
  this.beforePlay = options.beforePlay;
  this.render = options.render;
    
  for( var key in options.methods ){
    this$1[key] = options.methods[key];
  }
};
Canvas.prototype._init_cv = function _init_cv (cvOpts){
  var cv = this;
  cv.$el = (typeof cvOpts.el==='string')?document.querySelector(cvOpts.el):cvOpts.el;
  cv.$ctx = cv.$el.getContext('2d');

  function proxy(key,thunk,setter){
    Object.defineProperty(cv,key,{
      enumerable: true,
      configurable: true,
      // writable: elKey?true:false,
      get: function(){
        return thunk();
      },
      set: setter
    });
  }
  proxy('$w',
    function (){return cv.$el.width},
    function (newVal){cv.$el.width=newVal;}
  );
  proxy('$h',
    function (){return cv.$el.height},
    function (newVal){cv.$el.height=newVal;}
  );
  proxy('$cx',
    function (){return cv.$el.width/2},
    noop
  );

  // init props
  var props = this._props?this._props():{};
  for(var key in props){
    cv[key] = props[key];
  }
  for(var key in cvOpts.props){
    cv[key] = cvOpts.props[key];
  }

  // init config
  cv._config = {
    renderFPS: true,
    useInterval: false,
    responsive: true,
    pausable: true
  };
  for( var key$1 in cvOpts.config ){
    cv._config[key$1] = cvOpts.config[key$1];
  }
  if( typeof cv._config.useInterval==='number' ){
    window.requestAnimationFrame = function(callback) {
      window.setTimeout( callback, 1000 / cv._config.useInterval );
    };
  }
  if( cv._config.responsive===true ){
    cv.$fit();
  }
  if( cv._config.pausable===true ){
    cv.$el.addEventListener('click',function (){
      if(cv._playing){
        cv.$pause();
      }else{
        cv.$resume();   
      }
    });
  }

  // init data
  var data = this._data();
  for(var key in data){
    cv[key] = data[key];
  }

  this._listen();

  this._start();
};
Canvas.prototype._start = function _start (){
  this._playing = false;
  this._tick = 0;
  this._time = new Date().getTime();
  this._fps = 0;


  //this._initCache();
  this.beforePlay();

  this._playing = true;
  this._play();
};
//onResize(){}
Canvas.prototype._initCache = function _initCache (){
  this._cache = document.createElement('canvas');
  this._cache.width = 1000;
  this._cache.height = 1000;
  this.$ctx = this._cache.getContext('2d'); 
};
Canvas.prototype._render = function _render (){
  this.$ctx.clearRect(0,0,this.$width,this.$height);
  this.$ctx.drawImage(this._cache, 0, 0);
};
Canvas.prototype._listen = function _listen (){
    
  // document.addEventListener('keydown',()=>{
  //console.log(111)
  //this._playing = false;
  //setTimeout(()=>{
  //  this._start();
  //},1000)
      
  // })
};
Canvas.prototype.$fit = function $fit (){
    var this$1 = this;

  this.$el.width = window.innerWidth;
  this.$el.height = window.innerHeight;
  window.addEventListener('resize',function (){
    this$1.$el.width = window.innerWidth;
    this$1.$el.height = window.innerHeight;
  });
};
Canvas.prototype.$pause = function $pause (){
  this._playing = false;
};
Canvas.prototype.$resume = function $resume (){
  this._playing = true;
  this._play();
};
Canvas.prototype.$setSize = function $setSize ( width,height ){
  this.$w = width;
  this.$h = height;
};
Canvas.prototype._play = function _play (){
  if( this._playing ){
    requestAnimationFrame( this._play.bind(this) );
    this.render();
    if( this._config.renderFPS ){
      this._renderFPS();
    }
    //this._render();
  }
};

Canvas.version = '0.0.1';
// create a subclass of Canvas and return it
Canvas.extend = function(opts){
  function Subclass(cvOpts){
    this._init_cv(cvOpts);
  }
  Subclass.prototype = new Canvas(opts);
  return Subclass;
};

Canvas.random = function(min,max){
  return min + (max-min)*Math.random();
};
Canvas.randomInt = function(min,max){
  return ~~(min + (max-min+1)*Math.random());
};

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
};

return Canvas;

})));
