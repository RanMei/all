var fs = require('fs');
const path = require('path');

var items = require('../src/api/items.js');

var list = [];
items.forEach(a=>{
	list.push({
		path: a.component.toLowerCase(),
		file: a.path
	})
})

var text = `var list = [`

list.forEach((a,i)=>{
	text += 
`{
	path:'${a.path}',
	component: resolve => {
		require.ensure( ['${a.file}'], ()=>{
			resolve( require('${a.file}') );
		});
	}
},`;
})

text += `
{
	path: 'others',
	component: require('../components/Others.vue')
}];\nexport {list};`

fs.writeFileSync( './src/vue/src/router/list.js',text );