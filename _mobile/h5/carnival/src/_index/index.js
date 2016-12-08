require('../common.less');
require('./index.less');
require('./keyframes.less');

new Vue({
	el: '#root',
	components: {
		Chips: require('../components/Chips.vue'),
		ButtonOrange: require('../components/ButtonOrange.vue')
	},
	data: {
		img: '../../../img/h5_carnival'
	}
})