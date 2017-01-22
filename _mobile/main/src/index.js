import './common.less';
import {router} from './router/router.js';
import store from './store/store.js';

new Vue({
	el: '#root',
	store,
	router,
	components: {
		App: require('./router/App.vue')
	},
	template: '<app></app>'
})