import {DIR} from '../../config.js';

import {GET_ITEMS,SAVE_ITEM,DELETE_ITEMS,ADD_ITEM} from './items.js';

import {LOGIN} from './user.js';

const actions = {
	
	GET_ITEMS,
	SAVE_ITEM,
	ADD_ITEM,
	DELETE_ITEMS,

	LOGIN,

	PLUS: ({commit})=>{
		setTimeout(()=>{
			commit('PLUS');
		},2000);
	}
}

export {actions};