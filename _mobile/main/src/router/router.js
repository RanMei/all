import Vue from 'vue'
import VueRouter from 'vue-router'

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
},{
	path: '/post',
	component: require('./Post.vue')
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