for( var i=0;i<4;i++ ){
  var $button = document.getElementsByClassName('button')[i];
  var $ripple = document.querySelectorAll('.ripple');
  //var $circle = document.getElementById('js-ripple');

  function rippleAnimation(event, duration) {
    var tl           = new TimelineMax();
        w            = event.target.offsetWidth,
        h            = event.target.offsetHeight,
        x            = event.offsetX,
        y            = event.offsetY,
        offsetX      = Math.abs( (w / 2) - x ),
        offsetY      = Math.abs( (h / 2) - y ),
        deltaX       = (w / 2) + offsetX,
        deltaY       = (h / 2) + offsetY,
        rippleRadius  = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

    console.log('width is:' + w);
    console.log('height is:' + h);
    console.log('x is:' + x);
    console.log('y is:' + y);
    console.log('offsetX is:' + offsetX);
    console.log('offsetY is:' + offsetY);
    console.log('deltaX is:' + deltaX);
    console.log('deltaY is:' + deltaY);
    console.log('scale ratio is:' + rippleRadius);

    tl.fromTo($ripple, duration, {
      x: x,
      y: y,
      transformOrigin: '50% 50%',
      scale: 0,
      opacity: 1,
      ease: Linear.easeIn
    },{
      scale: rippleRadius,
      opacity: 0,
      repeat: 1,
      yoyo: false
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
};