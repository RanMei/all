import '../rem.js';

import '../common.less';
import '../animations.less';

new Vue({
	el: '#root',
	components: {
		App: require('./App.vue')
	},
	template: `
		<app></app>
	`
})