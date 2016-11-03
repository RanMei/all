import items from './modules/items.js';
import item from './modules/item.js';
import user from './modules/user.js';
import {num} from './modules/num.js';

import {actions} from './actions/actions.js';
//Vue.use( Vuex );

var store = new Vuex.Store({
	modules: {
		user,
		items,
		item,
		num
	},
	actions: actions
})

export {store};