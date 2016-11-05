export function cart(API,store){
	API.CHECK_ALL = function(){
		store.dispatch({
			type: 'CHECK_ALL'
		})
	}

	API.UNCHECK_ALL	= function(){
		store.dispatch({
			type: 'UNCHECK_ALL'
		})
	}

	API.CHECK_THIS = function(i){
		store.dispatch({
			type: 'CHECK_THIS',
			i
		})
	}
}