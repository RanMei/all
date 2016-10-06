function homeSwiper (state=[],action){

	switch (action.type) {
		case 'INIT':
			return action.homeSwiper;
		default:
			return state;
	}
}

export {homeSwiper};