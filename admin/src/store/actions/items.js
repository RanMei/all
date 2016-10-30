import {DIR} from '../../config.js';

function GET_ITEMS ({commit}) {
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
}

function SAVE_ITEM ({commit},item) {
	fetch( DIR.api+'/items/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		mode: "cors",
		body: item
	}).then(function(res) {
		if (res.status === 200) {
			//return res.json()
		} else {
			//return Promise.reject(res.json())
		}
	}).then(function(data) {
		var new_item = JSON.parse(item);
		new_item.checked = false;
		commit('SAVE_ITEM',new_item)
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

export {
	GET_ITEMS,
	SAVE_ITEM,
	DELETE_ITEMS
};