require('./common.less');

Vue.use(VueRouter);

const svg_qq_container = function(resolve){
	require.ensure(['./containers/svg-qq-container.js'], () => {
		resolve( require('./containers/svg-qq-container.js') )
	})
}
const orientation = resolve => {
	require.ensure(['./components/orientation.vue'], () => {
		resolve( require('./components/orientation.vue') )
	})
}
const _3d_cube = resolve => {
	require.ensure(['./components/3d-cube.vue'], () => {
		resolve( require('./components/3d-cube.vue') )
	})
}
const Heart = function(resolve){
	require.ensure(['./components/Heart.vue'], () => {
		resolve( require('./components/Heart.vue') )
	})
}
const Scope = function(resolve){
	require.ensure(['./components/Scope.vue'], () => {
		resolve( require('./components/Scope.vue') )
	})
}

const routes = [{
	path: '/',
	component: require('./containers/preloader-container.vue')
},{
	path: '/preloader',
	component: require('./containers/preloader-container.vue')
},{
	path: '/svg-qq-container',
	component: svg_qq_container
},{
	path: '/swiper-container',
	component: require('./containers/swiper-container.js')
},{
	path: '/3d',
	component: require('./components/3d.vue')
},{
	path: '/orientation',
	component: orientation
},{
	path: '/3d-cube',
	component: _3d_cube
},{
	path: '/heart',
	component: Heart
},{
	path: '/scope',
	component: Scope
}];

const router = new VueRouter({
	routes: routes
})

new Vue({
	template: '<router-view></router-view>',
	router: router
}).$mount('#root');