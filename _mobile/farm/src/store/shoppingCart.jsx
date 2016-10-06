import {$$rootDir,$$phpDir} from '../common.jsx';

function shoppingCart (state=[],action){

	var newState = JSON.parse( JSON.stringify(state) );

	switch (action.type) {
		case 'INIT':
			return action.shoppingCart;
		case 'LOGIN':
			return action.shoppingCart;
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
			return newState;
		case 'LOGOUT':
			return [];
		default:
			return state;
	}
}

export {shoppingCart};