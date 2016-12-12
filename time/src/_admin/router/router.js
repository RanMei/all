Vue.use(VueRouter);

var router = new VueRouter({
	routes: [{
		path: '/',
		redirect: '/admin'
	},{
		path: '/admin',
		component: require('../_admin/Admin.vue'),
		redirect: '/admin/items',
		children: [{
			path: 'items',
			component: require('../components/Items.vue')
		},{
			path: 'signin',
			component: require('../_signin/Signin.vue')
		}]
	},{
		path: '/test',
		component: require('../_test/Test.vue')
	}]
});

export {router};