import {DIR} from '../config.js';

function items(state,action){
	
	switch(action.type){
		case 'GET_ITEMS':
			fetch( DIR.api+'/items/', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
				mode: "cors"
			}).then(function(res) {
				if (res.status === 200) {
					return res.json()
				} else {
					//return Promise.reject(res.json())
				}
			}).then(function(items) {
				items.forEach(a=>{
					a.checked = false;
					state.push(a)
				})
				console.log(state)
			}).catch(function(err) {
				console.log(err);
			});
			break;
		case 'SAVE_ITEM':
			fetch( DIR.api+'/items/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				mode: "cors",
				body: action.item
			}).then(function(res) {
				if (res.status === 200) {
					//return res.json()
				} else {
					//return Promise.reject(res.json())
				}
			}).then(function(data) {
				var new_item = JSON.parse(action.item);
				new_item.checked = false;
				state.push(new_item);
			}).catch(function(err) {
				console.log(err);
			});
			break;
		case 'CHECK_TOGGLE':
			var i = action.i;
			if(state[i].checked===true){
				state[i].checked = false;
			}else{
				state[i].checked = true;
			}
			//console.log(store.items[i].checked)
			break;
		case 'DELETE':
			console.log('delete')
			fetch( DIR.api+'/items/', {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
				mode: "cors",
				body: (function(){
					let ids = [];
					state.forEach(a=>{
						if(a.checked===true){
							ids.push(a.id);
						}
					})
					return JSON.stringify(ids);
				})()
			}).then(function(res) {
				if (res.status === 200) {
					//return res.json()
				} else {
					//return Promise.reject(res.json())
				}
			}).then(function(data) {
				var i = state.length-1;
				while( i>=0 ){
					if( state[i].checked === true ){
						console.log(i)
						state.splice(i,1)
					};
					i--;
				}
			}).catch(function(err) {
				console.log(err);
			});
			break;
	}
}

export {items};