
import './common.less';
import {router} from './router/router.js';


new Vue({
	template: `
		<div id="root">
			<router-view></router-view>
		</div>
	`,
	router: router
}).$mount('#root');