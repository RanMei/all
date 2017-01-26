import Vue from 'vue';
import VueRouter from 'vue-router';

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
			component: require('../../components/Signin.vue')
		}]
	},{
		path: '/test',
		component: require('../_test/Test.vue')
	}]
});

export {router};