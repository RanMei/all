function app (state={userID:null},action){
	switch (action.type) {
		case 'LOGIN':
			return {userID:action.data.userID};
		default:
			return state;
	}
}

export {app};