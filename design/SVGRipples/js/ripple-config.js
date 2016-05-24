var $button = document.getElementsByClassName('button')[0];
var $ripple = document.querySelectorAll('.ripple');
//var $circle = document.getElementById('js-ripple');

function rippleAnimation(event, duration) {
  var tl           = new TimelineMax();
      x            = event.offsetX,
      y            = event.offsetY,
      w            = event.target.offsetWidth,
      h            = event.target.offsetHeight,
      offsetX      = Math.abs( (w / 2) - x ),
      offsetY      = Math.abs( (h / 2) - y ),
      deltaX       = (w / 2) + offsetX,
      deltaY       = (h / 2) + offsetY,
      scale_ratio  = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

  console.log('x is:' + x);
  console.log('y is:' + y);
  console.log('offsetX is:' + offsetX);
  console.log('offsetY is:' + offsetY);
  console.log('deltaX is:' + deltaX);
  console.log('deltaY is:' + deltaY);
  console.log('width is:' + w);
  console.log('height is:' + h);
  console.log('scale ratio is:' + scale_ratio);

  tl.fromTo($ripple, duration, {
    x: x,
    y: y,
    transformOrigin: '50% 50%',
    scale: 0,
    opacity: 1,
    ease: Linear.easeIn
  },{
    scale: scale_ratio,
    opacity: 0,
    repeat: 1,
    yoyo: true
  });

  return tl;
}

function init(duration) {
  $button.addEventListener('click', function(event) {
    console.log(this);
    rippleAnimation.call(this, event, duration);
  });
}

init(0.75);