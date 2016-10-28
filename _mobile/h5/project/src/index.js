require('./common.less');

Vue.use(VueRouter);

Vue.component( 'slider',require('./components/Slider.vue') );
//Vue.component( 'home',require('./containers/home.vue') );

const router = new VueRouter({
	routes: [{
		path: '/',
		component: require('./routes/home.vue')
	}]
})

new Vue({
	el: '#root',
	router: router,
	template: `
		<div id="root">
			<router-view></router-view>
		</div>
	`
})