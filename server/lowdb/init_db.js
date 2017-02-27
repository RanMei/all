var low = require('lowdb');

const db = low('./main.db');

db.defaults({
	users: [],
	items: [],
	carts: []
}).value();

var users = [{
	id: '15911111111',
	password: '111111',
	cart: []
}]

users.forEach( (a,i)=>{
	db.get('users').push(a).value();
})

var items = [{
	id: null,
	brand: 'Apple',
	name: 'iPad',
	price: 6000
},{
	id: null,
	brand: '华为',
	name: 'Huawei nova',
	price: 2000
}];

var time = new Date().getTime();
items.forEach( (a,i)=>{
	a.id = time+i+'';
	db.get('items').push(a).value();
})