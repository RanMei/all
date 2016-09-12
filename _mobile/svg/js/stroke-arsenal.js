function Arsenal(){
	this.wheel = document.querySelector('#wheel');
	this.cannon = document.querySelector('#cannon');
	this.blue = document.querySelectorAll('.blue');
	this.template = document.querySelector('#template');
	this.plate1 = document.querySelector('#plate1');
	this.plate2 = document.querySelector('#plate2');

	this.cannonFill = document.querySelector('#cannon-fill');

	this.textStroke = document.querySelector('.text-stroke');
	this.textFill = document.querySelector('.text-fill');
	this.init();
}
Arsenal.prototype = {
	init: function(){
		var self = this;
		self.begin( self.wheel, '2s wheel forwards', 0 );
		self.begin( self.cannon, '2s cannon forwards', 1000 );
		self.begin( self.blue[0], '2s blue forwards', 2500 );
		self.begin( self.blue[1], '2s blue forwards', 3000 );
		self.begin( self.template, '2s template forwards', 3000 );
		self.begin( self.cannonFill, '1s cannon-fill ease-out forwards', 5000 );

		setTimeout(function(){
			self.wheel.style.fill = '#A39161';
			//self.cannonFill.style.animation = '1s cannon-fill ease-out forwards';
			self.cannon.style.strokeWidth = 3;
			self.blue[0].style.fill = '#003876';
			self.blue[1].style.fill = '#003876';
			self.plate1.style.fill = '##EC1C2E';
			self.plate2.style.fill = '#CE1141';
			self.template.style.fill = '#A39161';
			self.template.style.stroke = '#A39161';
		},5000);

		self.begin( self.textStroke, '1s text forwards', 6000 );
		self.begin( self.textFill, '1s text forwards', 6000 );
	},
	begin: function(elem,animation,timeout){
		setTimeout(function(){
			elem.style.animation = animation;
			elem.style.webkitAnimation = animation;
		},timeout);
	}
}
new Arsenal();