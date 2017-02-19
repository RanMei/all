function item (state={
	id: '',
	name: '--',
	specs: {},
	price: 0
},action){
	switch(action.type){
		case 'SET_ITEM':
			var new_state = JSON.parse( JSON.stringify(state) );
			for(var key in action.item){
				new_state[key] = action.item[key];
			}
			return new_state;
		default:
			return state;
	}
}

export {item};