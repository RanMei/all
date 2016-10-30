import items from './modules/items.js';
import {num} from './modules/num.js';
import {actions} from './actions/actions.js';
//Vue.use( Vuex );

var store = new Vuex.Store({
	modules: {items,num},
	actions: actions
})

export {store};