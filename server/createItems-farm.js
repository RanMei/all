var fs = require('fs');

var items = [
	{
		id: '1606291027',
		className: 'fruit',
		name: '余姚特级王荸荠杨梅约3斤/箱',
		desc: '成熟度高，颜色更深（6月20日起发货）',
		price: 239
	},
	{
		id: '1606291034',
		className: 'fruit',
		name: '美国恐龙蛋5个/盒（约130g/个）',
		desc: '水润多汁，甜嫩爽口',
		price: 49
	},
	{
		id: '1606291039',
		className: 'fruit',
		name: '新西兰佳沛阳光金果6个/盒（约130g/个）',
		desc: '皮薄肉多，口感爽滑。',
		price: 69
	},
	{
		id: '1606291040',
		className: 'fruit',
		name: '精选国产蓝莓125g/盒*2',
		desc: '果肉细腻，风味独特',
		price: 29
	}
];

fs.writeFileSync( './json/items-farm.json',JSON.stringify(items) );