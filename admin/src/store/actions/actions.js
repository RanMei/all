import {DIR} from '../../config.js';

import {GET_ITEMS,SAVE_ITEM,DELETE_ITEMS} from './items.js';

const actions = {
	
	GET_ITEMS,
	SAVE_ITEM,
	DELETE_ITEMS,

	PLUS: ({commit})=>{
		setTimeout(()=>{
			commit('PLUS');
		},2000);
	}
}

export {actions};