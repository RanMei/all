
require('./common.less');

Vue.use(VueRouter);

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
		component: r=>{require.ensure([],()=>{r(require('./containers/preloader-container.vue'))},'pl')}
	},{
		path: 'svg-qq-container',
		component: r=>{require.ensure([],()=>{r(require('./containers/svg-qq-container.js'))},'sqq')}
	},{
		path: 'swiper-container',
		component: r=>{require.ensure([],()=>{r(require('./containers/swiper-container.js'))},'sco')}
	},{
		path: '3d',
		component: require('./components/3d.vue')
	},{
		path: 'orientation',
		component: r=>{require.ensure([],()=>{r(require('./components/orientation.vue'))},'or')}
	},{
		path: '3d-cube',
		component: r=>{require.ensure([],()=>{r(require('./components/3d-cube.vue'))},'cube')}
	},{
		path: 'heart',
		component: r=>{require.ensure([],()=>{r(require('./components/Heart.vue'))},'ht')}
	},{
		path: 'scope',
		component: r=>{require.ensure([],()=>{r(require('./canvas/Scope.vue'))},'sc')}
	},{
		path: 'stroke-circle',
		component: r=>{require.ensure([],()=>{r(require('./components/StrokeCircle.vue'))},'stci')}
	},{
		path: 'carousel',
		component: r=>{require.ensure([],()=>{r(require('./components/Carousel.vue'))},'crsels')}
	},{
		path: 'panoramic',
		component: r=>{require.ensure([],()=>{r(require('./components/Panoramic.vue'))},'Panoramic')}
	},{
		path: 'rain',
		component: r=>{require.ensure([],()=>{r(require('./canvas/Rain.vue'))},'rain')}
	},{
		path: 'circles',
		component: r=>{require.ensure([],()=>{r(require('./canvas/Circles.vue'))},'Circles')}
	},{
		path: 'snowfall',
		component: r=>{require.ensure([],()=>{r(require('./canvas/Snowfall.vue'))},'Snowfall')}
	},{
		path: 'neon-hexagons',
		component: r=>{require.ensure([],()=>{r(require('./canvas/NeonHexagons.vue'))},'Nh')}
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