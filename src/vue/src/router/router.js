import Vue from 'vue';
import VueRouter from 'vue-router';

import {list} from './list.js';
// Vue.use(VueRouter);

import items from '../api/items.js';
// console.log(items)

// var list2 = [{
// 	path:'preloader',
// 	component: resolve => {
// 		require.ensure( [], (require)=>{
// 			resolve( require('../lib/'+a) );
// 		});
// 	}
// }]
// var list2 = [];
// items.forEach((a)=>{
// 	list2.push({
// 		path: a.name.toLowerCase(),
// 		component: resolve => {
// 			// require.ensure( [], (require)=>{
// 			// 	resolve( require('../lib/'+a.name+'.vue') );
// 			// });
// 			resolve(
// 				import(a.path)
// 			    .then( ()=>{console.log('success')} )
// 			    .then(str => console.log(str))
// 			    .catch(err => console.log('Failed to load moment', err))
// 			);
// 		}
// 	});
// })

// var a = './lib/Card.vue';
// import(a)

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