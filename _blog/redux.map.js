Redux.createStore();
Redux.combineReducers();

store.dispatch()
store.subscribe()


Redux.combineReducers();

Redux.applyMiddleware();
  // typical example of currying
  return function(createStore){

  }

// In redux, a reducer is actually a pure function that 
// takes current state and an action to return next state
Redux.createStore(reducer,initialState,enhancer)
  // a closure will be created
  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }
    return enhancer(createStore)(reducer, preloadedState);
  }

  var currentReducer = reducer;
  var currentState = initialState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  dispatch({ type: ActionTypes.INIT });
  
  return {
    getState,
    dispatch,
    
  }:store

store.getState();
  return currentState;

store.dispatch(action)
  if (isDispatching) {
    throw new Error('Reducers may not dispatch actions.');
  }
  try {
    isDispatching = true;
    // In redux, a reducer is actually a pure function that 
    // takes current state and an action to return next state
    currentState = currentReducer(currentState, action);
  } finally {
    isDispatching = false;
  }
  // execute the listeners
  var listeners = currentListeners = nextListeners;
  for (var i = 0; i < listeners.length; i++) {
    listeners[i]();
  }
  return action;