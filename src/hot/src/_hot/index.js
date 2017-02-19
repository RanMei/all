import '../common/common.js';

import Vue from 'vue';
import store from './store/store.js';
import router from './router/router.js';

new Vue({
	el: '#app',
	store,
	router,
	components: {
		App: require('./App.vue')
	},
	template: `<router-view></router-view>`
})

/* eslint-env browser */

// Uncomment one of the following lines to see error handling
// require('unknown-module')
// } syntax-error

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(function() {
    //clearInterval(timer);
  });
}
