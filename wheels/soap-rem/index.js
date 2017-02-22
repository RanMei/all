var $html = document.querySelector('html');
var $body = document.querySelector('body');
var $screen = document.createElement('div');
var $rem_height = document.querySelectorAll('.rem_height');

$screen.style.cssText += 'position:fixed; width:100%; height:100%; display:none;';
$body.insertBefore($screen,$body.firstChild);

var rem = {
  remInitialized: false,
  // width of your UI drawing
  // the default value is 750px
  drawingWidth: 750,

  viewportWidth: null,
  viewportHeight: null,

  rem: null,

  init: function(){
    rem.set();
    window.addEventListener( 'resize',rem.set );
  },
  set: function(){
    // get width and height of current viewport
    $screen.style.display = 'block';
    var w = Number( document.defaultView.getComputedStyle( $screen ).width.replace(/px/,'') );
    var h = Number( document.defaultView.getComputedStyle( $screen ).height.replace(/px/,'') );
    rem.viewportWidth = w;
    rem.viewportHeight = h;
    $screen.style.display = 'none';
    
    // calculate and set the value of rem
    rem.rem = 100*w/rem.drawingWidth;
    $html.style.fontSize = rem.rem+'px';

    //document.getElementsByClassName('container')[0].style.height = h+'px';
    console.debug( '[rem] Rem reset. Size of the viewport is '+w+'*'+h+'.' );
    rem.isSet = true;
    [].forEach.call($rem_height,(a)=>{
      a.style.height = h+'px';
    })
  }
}

document.addEventListener('DOMContentLoaded',function(){
  
  if( rem.remInitialized===false ){
    rem.init();
  }

})

window.rem = rem;