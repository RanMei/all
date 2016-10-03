import {$$rootDir,$$phpDir} from '../common.jsx';

function user (state,action){
	if( state===undefined ){
		if( sessionStorage.user ){
			state = JSON.parse( sessionStorage.user );
		}else{
			state = {};
		}
	}

	switch (action.type) {
		case 'LOGIN':
			location.hash = 'member';
			return {id: action.user.id};				
		case 'LOGOUT':
			return {};
		default:
			return state;
	}
}

export {user};