Vue.use(VueRouter);

var router = new VueRouter({
	routes: [{
		path: '/',
		redirect: '/admin'
	},{
		path: '/admin',
		component: require('./Admin.vue'),
		redirect: '/admin/items',
		children: [{
			path: 'items',
			component: require('../components/Items.vue')
		}]
	},{
		path: '/test',
		component: require('../_test/Test.vue')
	}]
});

export {router};