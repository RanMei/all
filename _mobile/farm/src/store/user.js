function user (state={},action){

	switch (action.type) {
		case 'INIT':
			return action.user;
		case 'LOGIN':
			return action.user;				
		case 'LOGOUT':
			return {};
		default:
			return state;
	}
}

export {user};