import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

var router = new VueRouter({
	routes: [{
		path: '/',
		redirect: '/admin'
	},{
		// admin
		path: '/admin',
		component: require('./Admin.vue'),
		redirect: '/admin/management',
		children: [{
			path: 'management',
			component: require('./Management.vue')
		},{
			path: 'editing',
			component: require('./Editing.vue')
		},{
			path: 'tables',
			component: require('./TableRoute.vue')
		}]
	}]
});

export {router};