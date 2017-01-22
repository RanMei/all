Vue.use(VueRouter);

const routes = [{
	path: '/',
	redirect: '/home'
},{
	path: '/home',
	component: require('./Home.vue')
},{
	path: '/projects',
	component: require('./Projects.vue')
},{
	path: '/blog',
	component: require('./Blog.vue')
}];
// 	redirect: '/home',
// 	children: [{
// 		path: 'home',
// 		component: require('./Home.vue')
// 	}]
// }];

const router = new VueRouter({
	routes: routes
})

export {router};