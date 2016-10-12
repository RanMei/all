require('./common.less');

Vue.use(VueRouter);

const preloader = require('./components/preloader.vue');
const svgQq = require('./components/svg-qq.vue');

const routes = [{
	path: '/preloader',
	component: preloader
},{
	path: '/svg-qq',
	component: svgQq
}];

const router = new VueRouter({
	routes: routes
})

new Vue({
	template: '<router-view></router-view>',
	router: router
}).$mount('#root');

// Vue.component( 'preloader',require('./components/preloader.vue') );

// new Vue({
// 	el: '#root',
// 	mounted: function(){

// 	}
// })

