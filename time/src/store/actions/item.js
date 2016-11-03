import {DIR} from '../../config.js';

function GET_ITEM ({commit},id) {
	fetch( DIR.api+'/item?id='+id, {
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
	}).then(function(item) {

		commit('SET_ITEM',item)
	}).catch(function(err) {
		console.log(err);
	});
}

export {GET_ITEM};