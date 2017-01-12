import {DIR,IMG} from '../config.js';

require('../common.less');

import {store} from '../store/store.js';

new Vue({
	el: '#root',
	components: {
		App: require('./App.vue')
	},
	template: '<app></app>'
})