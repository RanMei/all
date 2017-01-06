// In redux, a reducer is actually a pure function that 
// takes current state and an action to return next state
Redux.createStore(reducer,initialState,enhancer)
	var currentReducer = reducer;
	var currentState = initialState;
	var currentListeners = [];
	var nextListeners = currentListeners;
	var isDispatching = false;

	dispatch({ type: ActionTypes.INIT });
	
	return {
		getState,
		dispatch,
		
	}