function App(){
	this.CONFIG = {
		duration: 1000,
		easing: 'elastic-out',
		rotation: 'none',
	};
	this.M = new SVGMorpheus('#mobiltelefonens', this.CONFIG);
	this.phones = [
		{id:'a'},
		{id:'b'},
		{id:'c',easing:'quart-in-out',duration:500},
		{id:'d'},
		{id:'e'},
		{id:'f',easing:'quart-in-out',duration:500},
		{id:'g'},
		{id:'h'},
		{id:'i'},
		{id:'j'},
		{id:'k'}
	]
	this.current = -1;
	this.init();
}
App.prototype = {
	init: function(){
		var self = this;
		this.update();
		setInterval(function(){
			self.update();
		},1000)
	},
	update: function(){
		if( this.current<this.phones.length-1 ){
			this.current++;
		}else{
			this.current = 0;
		}
		var phone = this.phones[this.current];
		this.M.to( phone.id,{
			easing: phone.easing||'elastic-out',
			duration: phone.duration||1000
		})
	}
}
new App();
/* Noel Delgado | @pixelia_me */

/* 
*** full attribution ***

- Original infographic 
- http://www.fremtidensbusiness.dk/wp-content/uploads/2015/04/evolution.png 
*/
/*
var CONFIG = {
	duration: 1000,
	easing: 'elastic-out',
	rotation: 'none',
};

var phonesInfo = [].slice.call(document.getElementsByTagName('g'), 0).map(function(el) {
	return {
		id : el.getAttribute('id'),
		easing : el.getAttribute('data-easing') || CONFIG.easing,
		duration : el.getAttribute('data-duration') || CONFIG.duration
	};
});
var phonesLen = (phonesInfo.length - 1);
var timelineElement = document.querySelector('.timeline-list');
var moveTimelinePxs = 69;

var now, delta;
var interval = 1500 * 1;
var then = +new Date();
var index = 0;

var M = new SVGMorpheus('#mobiltelefonens', CONFIG);



update();
loop();

function update() {
	var p = phonesInfo[index++];
	var x = (((index - 1) * moveTimelinePxs) * -1);

	M.to(p.id, {
		easing: p.easing,
		duration: p.duration
	});
	timelineElement.style.webkitTransform = 'translateX(' + x + 'px)';
	timelineElement.style.transform = 'translateX(' + x + 'px)';

	if (index > phonesLen) index = 0;

	p = x = null;
}

function loop() {
	requestAnimationFrame(loop);

	now = +new Date();
	delta = now - then;

	if (delta > interval) {
		then = now - (delta % interval);
		update();
	}
}

*/