Redux.createStore();
Redux.combineReducers();

store.dispatch()
store.subscribe()

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

store.dispatch(action);
  if (isDispatching) {
    throw new Error('Reducers may not dispatch actions.');
  }
  try {
    isDispatching = true;
    currentState = currentReducer(currentState, action);
  } finally {
    isDispatching = false;
  }