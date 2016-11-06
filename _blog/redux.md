#Redux

The most efficient way to learn coding is to rewrite the masters' codes in your own way.

How does Redux works?

When Redux.dispatch was called,
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