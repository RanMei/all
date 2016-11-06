#Redux

A state tree in Redux is like this:

state = {
	items: []
}

You must change the reference of "items" to make the UI change happen.
The state change would not be detected if you directly mutate "items".