var list1 = [{
	time: '2016-10-3',
	title: 'What is Functional Programming'
},{
	time: '2016-10-4',
	title: 'night'
}];



function list(state=[],action){
	switch (action.type){
		case 'GET_LIST':
			return list1;
		default:
			return state;
	}
}

function post(state={},action){
	switch (action.type) {
		case 'GET_POST':
			var newState;
			list1.forEach(a=>{
				if(a.time===action.time){
					newState = a;
				}
			})
			return newState;				
		default:
			return state;
	}
}

var $$reducer = Redux.combineReducers({post,list});

export {$$reducer};