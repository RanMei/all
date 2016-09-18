var technology = require('./components/technology.vue');
var css3Transitions = require('./components/css3Transitions.vue');
var css3Animations = require('./components/css3Animations.vue');

var swiper = require('./components/swiper.vue');


Vue.component( 'css3Transitions',css3Transitions );
Vue.component( 'css3Animations',css3Animations );
Vue.component( 'technology',technology );
Vue.component( 'swiper',swiper );

new Vue({
	el: 'body',
	components: {
	},
	data: {
		nav: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],

		current: 0,
		Y1: null,
		Y2: null,
		pages: [
			'home',
			'box'
		]
	},
	computed: {
		length: function(){
			return this.nav.length;
		}
	},
	methods: {
		toPage: function(i){
			this.current = i;
		},
		mousedown: function(e){
			this.Y1 = e.pageY;
		},
		mouseup: function(e){
			this.Y2 = e.pageY;
			var distance = this.Y2 - this.Y1;
			console.log(distance)
			if( distance<0 ){
				if( this.current<this.length-1 ){
					this.current++;
				}
			}else if( distance>0 ){
				if( this.current>0 ){
					this.current--;
				}
			}
		}
	}
})