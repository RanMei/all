import {list} from './list.js';
Vue.use(VueRouter);

const routes = [{
	path: '/',
	component: require('./Home.vue')
},{
	path: '/item',
	component: require('./RouteItem.vue'),
	children: list
}];

const router = new VueRouter({
	routes: routes
})

export {router};