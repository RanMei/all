Vue.use(VueRouter);

var router = new VueRouter({
	routes: [{
		path: '/',
		component: require('../_home/Home.vue')
	},{
		path: '/item',
		component: require('../_item/Item.vue'),
		children: [{
			path: 'explosion',
			component: require('../lib/Explosion.js')
		}]
	}]
});

export {router};