import {DIR} from '../../config.js';

const actions = {
	GET_ITEMS: ({commit})=>{
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
			})
			console.log(items)
			commit('GET_ITEMS',items)
		}).catch(function(err) {
			console.log(err);
		});
	},
	PLUS: ({commit})=>{
		setTimeout(()=>{
			commit('PLUS');
		},2000);
	}
}

export {actions};