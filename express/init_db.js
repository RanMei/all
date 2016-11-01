var low = require('lowdb');

const db = low('./api/main.db');

db.defaults({
	users: [],
	items: []
}).value();

var users = [{
	id: '15911111111',
	password: '111111',
	cart: []
}]

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