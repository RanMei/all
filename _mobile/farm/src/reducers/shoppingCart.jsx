import {$$rootDir,$$phpDir} from '../common.jsx';

function shoppingCart (state,action){
	
	if( state===undefined ){
		if( sessionStorage.shoppingCart ){
			state = JSON.parse( sessionStorage.shoppingCart );
		}else{
			state = [];
		}
	};

	var newState = JSON.parse( JSON.stringify(state) );

	switch (action.type) {
		case 'LOGIN':
			return action.user.shoppingCart;
		case 'PLUS':
			// console.log( newState[action.i] )
			newState[action.i].quantity++;
			sessionStorage.shoppingCart = JSON.stringify( newState );
			return newState;
		case 'MINUS':
			newState[action.i].quantity--;
			sessionStorage.shoppingCart = JSON.stringify( newState );
			return newState;
		case 'CHECK_THIS':
			if( newState[action.i].selected===true ){
				newState[action.i].selected = false;
			}else{
				newState[action.i].selected = true;
			}
			sessionStorage.shoppingCart = JSON.stringify( newState );
			return newState;
		case 'CHECK_ALL':
			newState.forEach(a=>{
				a.selected = true;
			})
			sessionStorage.shoppingCart = JSON.stringify( newState );
			return newState;
		case 'UNCHECK_ALL':
			newState.forEach(a=>{
				a.selected = false;
			})
			sessionStorage.shoppingCart = JSON.stringify( newState );
			return newState;
		case 'REMOVE':
			var _newState = [];
			newState.forEach((a)=>{
				if( !a.selected ){
					_newState.push(a);
				};
			})
			sessionStorage.shoppingCart = JSON.stringify( _newState );
			return _newState;
		case 'ADD_TO_CART':
			newState.push(action.item);
			// console.log(action)
			// fetch('/addToCart', {
			// 	method: 'POST',
			// 	headers: {
			// 		// 'Accept': 'application/json',
			// 		'Content-Type': 'application/json'
			// 	},
			// 	body: JSON.stringify({itemID: action.itemID})
			// }).then(function(res){
			// 	return res.json();
			// }).then(function(data){
			// 	console.log('fuck')
			// }).catch(function(e,f,g){
			// 	console.log(e,f,g);
			// })
			sessionStorage.shoppingCart = JSON.stringify( newState );
			return newState;
		case 'LOGOUT':
			return [];
		default:
			return state;
	}
}

export {shoppingCart};