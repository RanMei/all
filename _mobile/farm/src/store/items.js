function items (state=[],action){

	switch (action.type) {
		case 'INIT':
			return action.items;
		default:
			return state;
	}
}

export {items};