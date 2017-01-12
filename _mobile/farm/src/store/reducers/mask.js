function mask (state={
	text: ''
},action){
	switch (action.type) {
		case 'CONFIRM':
			var newState = {
				text: action.text
			}
			return newState;
		case 'CLOSE_MASK':
			return {
				text: ''
			}
		default:
			return state;
	}
}

export {mask};