import '../common.less';

import {router} from './router/router.js';
import {store} from '../store/store.js';

var vm = new Vue({
	el: '#root',
	store,
	router,
	components: {
		App: require('./App.vue')
	},
	template: '<app></app>'
})