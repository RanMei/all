import '../common.less';
import Vue from 'vue';
import store from '../store/store.js';

new Vue({
	el: '#root',
	store,
	components: {
		App: require('./App.vue')
	},
	template: '<app></app>'
})