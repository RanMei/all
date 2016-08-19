import './rem.js';

var app = new Vue({
	el: 'body',
	data: {
		over: false,
		loggedIn: false,
		myName: '--',
		myCoin: '--',
		myRanking: '--',
		list: [],
		timeleft: {
			days: '--',
			hours: '--',
			minutes: '--'
		}
	},
	methods: {
		init: function(){
			this.initCountdown(1000000000);
			this.updateList();
		},
		toSignin: function(){
			this.loggedIn = true;
			this.myName = 'Jon Snow';
			this.myCoin = 1000;
			this.myRanking = 1;
		},
		initCountdown: function(time){
			var self = this;
			self.updateTimeLeft(time);
			setInterval(function(){
				time -= 60000;
				self.updateTimeLeft(time);
			},60000)
		},
		updateTimeLeft: function(time){
			var _days = time/1000/3600/24;
			var days = Math.floor( _days );
			var _hours = (_days-days)*24;
			var hours = Math.floor( _hours );
			var minutes = Math.floor( (_hours-hours)*60 );
			this.timeleft.days = days<10?('0'+days):days;
			this.timeleft.hours = hours<10?('0'+hours):hours;
			this.timeleft.minutes = minutes<10?('0'+minutes):minutes;
		},
		updateList: function(){
			for( var i=0;i<15;i++ ){
				this.list.push({
					name: 'Aegon',
					coin: 22222
				})
			}
		}
	}
})
app.init();

var swiper = new Vue({
	el: '.swiper',
	data: {
		switching: false,
		isDown: false,
		moveCount: 0,
		scrolling: false,
		trainOffsetX: 0,

		currentOne: 0,
		offset: 0
	},
	methods: {
		touchstart: function(){
			if( this.switching===false ){
				this.isDown = true;
				// reset states of this touch cycle
				this.moveCount = 0;
				this.scrolling = false;
				this.trainOffsetX = -this.currentOne*this.width;
				
				this.T0 = new Date().getTime();
				
				this.X0 = this.X1 = e.originalEvent? e.originalEvent.changedTouches[0].pageX : e.changedTouches[0].pageX;
				this.Y1 = e.originalEvent? e.originalEvent.changedTouches[0].pageY : e.changedTouches[0].pageY;
				
				if( this.carousel ){
					this.trainOffsetX = 0;
				}
			};
		}
	}
})