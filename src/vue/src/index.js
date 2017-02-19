import './common.less';
import './rem.720.js';
import Vue from 'vue';
import {router} from './router/router.js';

new Vue({
	template: `
		<div id="root">
			<router-view></router-view>
		</div>
	`,
	router: router
}).$mount('#root');