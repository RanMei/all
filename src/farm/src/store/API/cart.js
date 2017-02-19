export function cart(API,store){
	API.CART = {
		CHECK_ALL(){
			store.dispatch({
				type: 'CHECK_ALL'
			})
		},
		UNCHECK_ALL(){
			store.dispatch({
				type: 'UNCHECK_ALL'
			})
		},
		CHECK_THIS(i){
			store.dispatch({
				type: 'CHECK_THIS',
				i
			})
		},
		REMOVE(){

		}
	}
}