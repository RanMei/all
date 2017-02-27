#Redux

The most efficient way to learn coding is to rewrite the masters' codes in your own way.

How does Redux work?

When Redux.createStore is called:
a closure is created...
an action named "@@redux/INIT" is dispatched so the initial state tree is created and 
assigned to the private variable "currentState"...
an object named "store" is returned.

When Redux.dispatch was called,
currentState and an action were passed into reducer and a new object was returned 
cause reducer must be a pure function...
so actually the reference of "currentState" was changed as a result

then the listeners were executed one by one.

```javascript
var currentState;
var isDispatching = false;
function dispatch(action) {
  isDispatching = true;
  currentState = currentReducer(currentState,action);
  isDispatching = false;
  currentListeners.forEach(a=>{
    a();
  })
}
```
applyMiddleware
changed dispatch function


A state tree in Redux is like this:

```javascript
var state = {
  items: [{
    id: 0
  },{
    id: 1
  }]
}
```

You must change the reference of "items" to make the UI change happen.
The state change would not be detected if you directly mutate "items".

Immutable.js is not necessary for redux.
It will just make the performance better.

A thunk is a function that wraps an expression and will return the value when called.

currying