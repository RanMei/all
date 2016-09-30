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
			sessionStorage.user = JSON.stringify(action.user);
			console.log(sessionStorage)
			location.hash = 'home';
			return {userID: action.user.userID};				
		case 'LOGOUT':
			delete sessionStorage.user;
			return {};
		default:
			return state;
	}
}

export {user};