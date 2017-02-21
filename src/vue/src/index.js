import './common.less';
import './rem.750.js';
import Vue from 'vue';
import store from './store/store.js';
import {router} from './router/router.js';

import App from './App.vue';

new Vue({
  store,
	router,
  render: h=>h(App)
}).$mount('#root');