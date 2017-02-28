import './common.less';
import Vue from 'vue'
import {router} from './router/router.js';
import store from './store/store.js';

var app = new Vue({
	el: '#app',
	store,
	router,
	components: {
		App: require('./router/App.vue')
	},
  computed: {
    user(){
      return this.$store.state.user;
    }
  },
  watch: {
    '$store.user'(){
      console.log('aldkjf')
    }
  },
	template: '<app></app>'
})
console.log(app)

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(function() {
  });
}