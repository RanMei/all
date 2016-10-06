import {$$rootDir,$$phpDir} from '../common.jsx';

function items (state=[],action){

	var newState = JSON.parse( JSON.stringify(state) );

	switch (action.type) {
		case 'INIT':
			return action.items;
		default:
			return state;
	}
}

export {items};