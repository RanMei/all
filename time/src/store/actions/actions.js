//import {DIR} from '../../config.js';

import ITEMS from './items.js';

import {GET_ITEM} from './item.js';

import {LOGIN} from './user.js';

const actions = {

	GET_ITEM,

	LOGIN,

	PLUS: ({commit})=>{
		setTimeout(()=>{
			commit('PLUS');
		},2000);
	}
}
for(let key in ITEMS){
	actions[key] = ITEMS[key];
}

export default actions;