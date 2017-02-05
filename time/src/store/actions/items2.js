import dir from 'api/dir.js';

export function fetchItems ({state,commit}) {
	fetch( dir.api+'/items/', {
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
		commit('FETCH_ITEMS',items)
	}).catch(function(err) {
		console.log(err);
	});
}

function SAVE_ITEM ({commit},item_json) {
	fetch( DIR.api+'/items/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		mode: "cors",
		body: item_json
	}).then(function(res) {
		if (res.status === 200) {
			//return res.json()
		} else {
			//return Promise.reject(res.json())
		}
	}).then(function(data) {
		var new_item = JSON.parse(item_json);
		new_item.checked = false;
		commit('SAVE_ITEM',new_item)
	}).catch(function(err) {
		console.log(err);
	});
}

function ADD_ITEM ({commit},item_json) {
	fetch( DIR.api+'/items/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		mode: "cors",
		body: item_json
	}).then(function(res) {
		if (res.status === 200) {
			//return res.json()
		} else {
			//return Promise.reject(res.json())
		}
	}).then(function(data) {
		var new_item = JSON.parse(item_json);
		new_item.checked = false;
		commit('ADD_ITEM',new_item)
	}).catch(function(err) {
		console.log(err);
	});
}

function DELETE_ITEMS ({commit},ids){
	fetch( DIR.api+'/items/', {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
		mode: "cors",
		body: JSON.stringify(ids)
	}).then(function(res) {
		if (res.status === 200) {
			//return res.json()
		} else {
			//return Promise.reject(res.json())
		}
	}).then(function(data) {
		commit('DELETE_ITEMS')
	}).catch(function(err) {
		console.log(err);
	});
}