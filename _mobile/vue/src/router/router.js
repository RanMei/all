import Vue from 'vue';
import VueRouter from 'vue-router';

import {list} from './list.js';
Vue.use(VueRouter);

const routes = [{
	path: '/',
	component: require('./Home.vue'),
	redirect: '/list',
	children: [{
		path: 'home',
		component: require('../components/Showcase.vue')
	},{
		path: 'list',
		component: require('../components/List.vue')
	}]
},{
	path: '/item',
	component: require('./RouteItem.vue'),
	children: list
},{
	path: '/test',
	component: require('./Test.vue')
}];

const router = new VueRouter({
	routes: routes
})

export {router};