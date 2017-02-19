import './common.less';
import Vue from 'vue'
import {router} from './router/router.js';
import store from './store/store.js';

new Vue({
	el: '#app',
	store,
	router,
	components: {
		App: require('./router/App.vue')
	},
	template: '<app></app>'
})

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(function() {
  });
}