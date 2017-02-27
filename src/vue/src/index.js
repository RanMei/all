import './common/common.js';

import Vue from 'vue';
import store from './store/store.js';
import {router} from './router/router.js';

import App from './App.vue';

new Vue({
  store,
	router,
  // updated: function(){
  //   console.log('updated');
  // },
  render: h=>h(App)
}).$mount('#root');