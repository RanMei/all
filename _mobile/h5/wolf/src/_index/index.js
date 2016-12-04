import '../rem.js';

require('../common.less');

new Vue({
	el: '#root',
	components: {
		App: require('./App.vue')
	},
	template: `
		<app></app>
	`
})