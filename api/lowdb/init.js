var low = require('lowdb');

const db = low('./api/main.db');

db.defaults({
	items: []
}).value();

var items = [{
	id: null,
	name: 'iPad',
	price: 6000
},{
	id: null,
	name: 'Huawei nova',
	price: 2000
}];

items.forEach((a)=>{
	a.id = new Date().getTime();
	db.get('items').push(a).value();
});