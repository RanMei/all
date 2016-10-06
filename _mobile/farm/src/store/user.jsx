import {$$rootDir,$$phpDir} from '../common.jsx';

function user (state={},action){

	switch (action.type) {
		case 'INIT':
			return action.user;
		case 'LOGIN':
			location.hash = 'member';
			return action.user;				
		case 'LOGOUT':
			location.hash = 'signin';
			return {};
		default:
			return state;
	}
}

export {user};