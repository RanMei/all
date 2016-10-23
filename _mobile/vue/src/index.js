
require('./common.less');

import {list} from './list.js';
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
	children: list
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