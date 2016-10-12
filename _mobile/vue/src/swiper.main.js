require('./common.less');
var swiper = require('./components/swiper.vue');

Vue.component( 'swiper',swiper );

new Vue({
	el: '#root',
	data: {
		items: [{
			background: 'red'
		},{
			background: 'orange'
		},{
			background: 'yellow'
		},{ 
			background: 'green'
		},{
			background: 'blue'
		}]
	},
	computed: {
	},
	methods: {
	},
	mounted: function(){
		console.log(this)
	}
})