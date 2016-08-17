import {$$rootDir,$$phpDir} from '../common.jsx';

function user (state={},action){
	switch (action.type) {
		case 'LOGIN':
			sessionStorage.userID = action.user.userID;
			location.hash = 'home';
			return {userID: action.user.userID};				
		case 'LOGOUT':
			delete sessionStorage.userID;
			return {userID: undefined};
		default:
			return state;
	}
}

export {user};