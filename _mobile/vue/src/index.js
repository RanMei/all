require('./common.less');

Vue.use(VueRouter);


const svg_qq_container = function(resolve){
	require.ensure(['./containers/svg-qq-container.js'], () => {
		resolve( require('./containers/svg-qq-container.js') )
	})
}
const orientation = resolve => {
	require.ensure(['./components/orientation.vue'], () => {
		resolve( require('./components/orientation.vue') )
	})
}
const _3d_cube = resolve => {
	require.ensure(['./components/3d-cube.vue'], () => {
		resolve( require('./components/3d-cube.vue') )
	})
}
const Heart = function(resolve){
	require.ensure(['./components/Heart.vue'], () => {
		resolve( require('./components/Heart.vue') )
	})
}
const Scope = function(resolve){
	require.ensure(['./canvas/Scope.vue'], () => {
		resolve( require('./canvas/Scope.vue') )
	})
}

// var self = this;
// function create(file){
// 	var fn = function(resolve){
// 		require.ensure([file], () => {
// 			resolve( require(file) )
// 		})
// 	}
// 	return fn.bind(self);
// }

const routes = [{
	path: '/',
	component: {
		template: `
			<div class="INDEX">
				<p v-for="a in list">
					<a :href=" '#/item/'+a.path ">{{a.path}}</a>
				</p>
			</div>
		`,
		data: function(){
			return {
				list: []
			}
		},
		mounted: function(){
			this.list = JSON.parse( JSON.stringify(this.$root.$options.router.options.routes[1].children) );
			//console.log(this.list);
		}
	}
},{
	path: '/item',
	component: {
		template: `
			<div class="ITEM">
				<div class="TOPBAR">
					<span @click="back">返回</span>
				</div>
				<router-view></router-view>
			</div>
		`,
		methods: {
			back: function(){
				history.go(-1);
			}
		}
	},
	children: [{
		path: 'preloader',
		component: require('./containers/preloader-container.vue')
	},{
		path: 'svg-qq-container',
		component: svg_qq_container
	},{
		path: 'swiper-container',
		component: require('./containers/swiper-container.js')
	},{
		path: '3d',
		component: require('./components/3d.vue')
	},{
		path: 'orientation',
		component: orientation
	},{
		path: '3d-cube',
		component: _3d_cube
	},{
		path: 'heart',
		component: Heart
	},{
		path: 'scope',
		component: Scope
	},{
		path: 'stroke-circle',
		component: function(resolve){
			require.ensure(['./components/StrokeCircle.vue'], () => {
				resolve( require('./components/StrokeCircle.vue') )
			})
		}
	},{
		path: 'carousel',
		component: function(resolve){
			require.ensure(['./components/Carousel.vue'], () => {
				resolve( require('./components/Carousel.vue') )
			})
		}
	},{
		path: 'panoramic',
		component: function(resolve){
			require.ensure(['./components/Panoramic.vue'], () => {
				resolve( require('./components/Panoramic.vue') )
			})
		}
	},{
		path: 'rain',
		component: function(resolve){
			require.ensure(['./canvas/Rain.vue'], () => {
				resolve( require('./canvas/Rain.vue') )
			})
		}
	},{
		path: 'circles',
		component: function(resolve){
			require.ensure(['./canvas/Circles.vue'], () => {
				resolve( require('./canvas/Circles.vue') )
			})
		}
	},{
		path: 'snowfall',
		component: function(resolve){
			require.ensure(['./canvas/Snowfall.vue'], () => {
				resolve( require('./canvas/Snowfall.vue') )
			})
		}
	}]
}];

const router = new VueRouter({
	routes: routes
})

new Vue({
	template: `
		<div class="ROUTER">
			<router-view></router-view>
		</div>
	`,
	router: router
}).$mount('#root');