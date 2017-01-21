import Vue from 'vue'; 
//import {store} from '../store/store.js';

const app = new Vue({
	components: {
		App: require('./App.vue')
	},
	template: '<app></app>'
})

export default context => {
  // data pre-fetching 
	return app
}