import {$$rootDir,$$phpDir} from '../common.jsx';

function shoppingCart (state=[],action){
	
	switch (action.type) {
		case 'ADD_TO_CART':
			console.log(action)
			fetch('/addToCart', {
				method: 'POST',
				headers: {
					// 'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({itemID: action.itemID})
			}).then(function(res){
				return res.json();
			}).then(function(data){
				console.log('fuck')
			}).catch(function(e,f,g){
				console.log(e,f,g);
			})
			return state;
		default:
			return state;
	}
}

export {shoppingCart};