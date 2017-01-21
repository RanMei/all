import Vue from 'vue'
import App from './App.vue'
 
const app = new Vue({
	components: {
		App: App
	},
	template: '<app></app>'
})
 
// the default export should be a function 
// which will receive the context of the render call 
export default context => {
  // data pre-fetching 
	return app
}