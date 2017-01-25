import '../../common/common.js';
import '../animations.less';

new Vue({
	el: '#root',
	components: {
		App: require('./App.vue')
	},
	template: `
		<app></app>
	`
})

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(function() {
    //clearInterval(timer);
  });
}