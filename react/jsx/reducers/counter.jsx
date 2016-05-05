function counter(state = {num:0}, action) {
	var _state = {num:state.num};
	switch (action.type) {
		case 'INCREMENT':
    		_state.num+=1;
    		break;
		case 'DECREMENT':
			_state.num--;
			break;
		default:
			break;
	}
	console.log(_state);
	return _state;
}

export {counter};