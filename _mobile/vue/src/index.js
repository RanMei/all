require('./common.less');

Vue.use(VueRouter);

const routes = [{
	path: '/',
	component: require('./preloader-container.vue')
},{
	path: '/preloader',
	component: require('./preloader-container.vue')
},{
	path: '/svg-qq-container',
	component: require('./svg-qq-container.js')
},{
	path: '/swiper-container',
	component: require('./swiper-container.js')
}];

const router = new VueRouter({
	routes: routes
})

new Vue({
	template: '<router-view></router-view>',
	router: router
}).$mount('#root');