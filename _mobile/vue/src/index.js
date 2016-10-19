require('./common.less');

Vue.use(VueRouter);

const svg_qq_container = function(resolve){
	require.ensure(['./svg-qq-container.js'], () => {
		resolve( require('./svg-qq-container.js') )
	})
}
const orientation = resolve => {
	require.ensure(['./components/orientation.vue'], () => {
		resolve( require('./components/orientation.vue') )
	})
}

const routes = [{
	path: '/',
	component: require('./preloader-container.vue')
},{
	path: '/preloader',
	component: require('./preloader-container.vue')
},{
	path: '/svg-qq-container',
	component: svg_qq_container
},{
	path: '/swiper-container',
	component: require('./swiper-container.js')
},{
	path: '/3d',
	component: require('./components/3d.vue')
},{
	path: '/orientation',
	component: orientation
}];

const router = new VueRouter({
	routes: routes
})

new Vue({
	template: '<router-view></router-view>',
	router: router
}).$mount('#root');