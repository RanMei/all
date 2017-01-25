require('../common.less');

import {store} from '../store/store.js';

new Vue({
	el: '#root',
	store: store,
	components: {
		App: require('./App.vue')
	},
	template: '<app></app>'
})