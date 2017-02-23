(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

var _html = document.querySelector('html');
var _body = document.querySelector('body');

// create a div and insert it into <body>
// by which we can get viewportWidth and viewportHeight
var _screen = document.createElement('div');
_screen.style.cssText += 'position:fixed; width:100%; height:100%; display:none;';
_body.insertBefore( _screen,_body.firstChild );

var initialized = false;
// width of your UI drawing
// the default value is 750px
var drawingWidth = 750;

var rem;
var viewportWidth;
var viewportHeight;

function init(){
  if( initialized===false ){
    window.addEventListener( 'resize',setRem );
    document.addEventListener('DOMContentLoaded',function(){
      setRem();
    });
    initialized = true;
  }else{
    throw new Error('[soap-rem] REM is already initialized.');
  }
}

function setDrawingWidth(val){
  if( typeof val==='number' ){
    drawingWidth = val;
    setRem();
  }else{
    throw new TypeError('[soap-rem] drawingWidth must be a number');
  }
}

function setRem(){
  // get width and height of current viewport
  _screen.style.display = 'block';
  var w = Number( document.defaultView.getComputedStyle( _screen ).width.replace(/px/,'') );
  var h = Number( document.defaultView.getComputedStyle( _screen ).height.replace(/px/,'') );
  viewportWidth = w;
  viewportHeight = h;
  _screen.style.display = 'none';
  
  // calculate and set the value of rem
  rem = 100*w/drawingWidth;
  _html.style.fontSize = rem+'px';

  console.debug( '[soap-rem] Rem reset. Size of the viewport is '+w+'*'+h+'.' );
}

function getRem(){
  return rem;
}
function getViewportWidth(){
  return viewportWidth;
}
function getViewportHeight(){
  return viewportHeight;
}

init();

var REM = {
  setDrawingWidth: setDrawingWidth,
  getRem: getRem,
  getViewportWidth: getViewportWidth,
  getViewportHeight: getViewportHeight
};

module.exports = REM;

})));
