//import Vue from 'vue';
import Vuex from 'vuex';
import './common.less';

//Vue.use(Vuex)

// var store = Vuex.Store({
// 	state: {
// 		haha: 'kkkk'
// 	}
// })

new Vue({
	el: '#app',
	//store,
	data: {
		msg: 'exp'
	},
	components: {
		Bar: require('./Bar.vue')
	},
	computed: {
		haha: function(){
			return 111;
		}
	},
	mounted: function(){
	},
	template: `
		<div id="app">
			{{msg}}
			<bar></bar>
		</div>
	`
})

/* eslint-env browser */
// var app = document.getElementById('app');
// var time = document.getElementById('time');

// time.innerHTML = '111111111'

console.log(111)
// Uncomment one of the following lines to see error handling
// require('unknown-module')
// } syntax-error

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(function() {
    //clearInterval(timer);
  });
}
