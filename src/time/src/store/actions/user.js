import {DIR} from '../../config.js';

function LOGIN ({commit},user_json) {
	fetch( DIR.api+'/state/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		mode: "cors",
		body: user_json
	}).then(function(res) {
		if (res.status === 200) {
			return res.json()
		} else {
			//return Promise.reject(res.json())
		}
	}).then(function(res) {
		if(res===false){

		}else{
			console.log(res)
			commit('LOGIN',user_json)
			location.href = '#/';
		}
	}).catch(function(err) {
		console.log(err);
	});
}

export {LOGIN};