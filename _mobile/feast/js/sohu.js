new Vue({
	el: 'body',
	data: {
		current: 0,

		switching: true,
		navShown: false,

		Y0: null,
		Y1: null,

		toggles: [0,1,2,3,4,5,6,7],

		createImg: '',
		begin: '',
		farewell: '',
		withUs: '',
		start: '',
		feastImg: '',
		angle: '',

		strips: [0,1,2,3,4,5,6,7],
		train: '',
		imgs: 'transform: translate3d(0,11.36rem,0);'
	},
	ready: function(){
		this.homePagePlay();
	},
	methods: {
		homePagePlay: function(){
			var self = this;
			self.createImg = 'animation: scaleFadeIn 1s forwards';
			setTimeout( function(){
				self.begin = 'animation: fadeIn 1s forwards';
			},500 );
			setTimeout( function(){self.farewell='animation: fadeIn 1s forwards'},1000 );
			setTimeout( function(){self.withUs='animation: fadeIn 1s forwards'},1500 );
			setTimeout( function(){self.start='animation: fadeIn 1s forwards'},2000 );
			setTimeout( function(){self.feastImg='animation: scaleFadeIn2 1s forwards'},2500 );
			setTimeout( function(){self.angle='animation: fadeIn 1s forwards'},3000 );
			setTimeout( function(){
				self.switching = false;
			},4000 );
		},
		touchstart: function(e){
			this.Y0 = e.changedTouches[0].pageY;
		},
		touchend: function(e){
			var self = this;
			this.Y1 = e.changedTouches[0].pageY;
			var distance = this.Y1 - this.Y0;
			if( !self.switching ){
				if( distance<0 ){
					self.toNext();
				}else if( distance>0 ){
					self.toPrev();
				}
			}
			console.log( self.current )
		},
		toNext: function(){
			var self = this;
			if( self.current<9 ){
				self.switching = true;
				switch (self.current) {
					case 0:
						self.current++;
						self.createImg = '';
						self.begin = '';
						self.farewell = '';
						self.withUs = '';
						self.start = '';
						self.feastImg = '';
						self.angle = '';
						self.navShown = true;
						setTimeout(function(){
							self.imgs = 'transform: translate3d(0,0,0);';
							setTimeout(function(){
								self.switching = false;
							},1700)
						},50);
						break;
					case 1:
					case 2:
					case 3:
					case 4:
					case 5:
					case 6:
					case 7:
						self.current++;
						self.imgs = 'transform: translate3d(0,-'+(self.current-1)+'00%,0);';
						setTimeout(function(){
							self.switching = false;
						},1700);
						break;
					case 8:
						self.navShown = false;
						self.imgs = 'transform: translate3d(0,-'+(self.current)*11.36+'rem,0);';
						setTimeout(function(){
							self.current++;
							self.switching = false;
						},1700);
						break;
				}	
			};
		},
		toPrev: function(){
			var self = this;
			if( self.current>0 ){
				self.switching = true;
				switch (self.current) {
					case 1:
						self.imgs = 'transform: translate3d(0,11.36rem,0);';
						self.navShown = false;
						setTimeout(function(){
							self.current--;
							self.homePagePlay();
						},1700);
						break;
					case 2:
					case 3:
					case 4:
					case 5:
					case 6:
					case 7:
					case 8:
						self.current--;
						self.imgs = 'transform: translate3d(0,-'+(self.current-1)*11.36+'rem,0);';
						setTimeout(function(){
							self.switching = false;
						},1700);
						break;
					case 9:
						self.navShown = true;
						self.current--;
						setTimeout(function(){
							self.imgs = 'transform: translate3d(0,-'+(self.current-1)*11.36+'rem,0);';
							setTimeout(function(){
								self.switching = false;
							},1700);
						},50);
						break;
				}
			};
		}
	}
})