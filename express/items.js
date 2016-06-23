var fs = require('fs');

var items = [
	{
		name: 'oranges',
		desc: 'juicy oranges',
		price: 200
	}
];

fs.writeFileSync( './json/items.json',JSON.stringify(items) );