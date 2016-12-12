import './common.less';
import {router} from './router/router.js';
// import {store} from '../store/store.js';

new Vue({
	el: '#root',
	//store,
	router,
	template: `
	<div id="root">
		<router-view></router-view>
	</div>`,
	data: {
	},
	mounted: function(){
	},
	computed: {
	},
	methods: {
		act: function(){}
	}
})