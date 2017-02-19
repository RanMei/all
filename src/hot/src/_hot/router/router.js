import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
	path: '/',
	component: require('../App.vue')
}];

const router = new VueRouter({
	routes: routes
})

export default router;