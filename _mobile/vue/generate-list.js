var fs = require('fs');

var items = require('./src/api/items.js');

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
	//component: require('${a.file}')
	component: resolve => {
		require.ensure( ['${a.file}'], ()=>{
			resolve( require('${a.file}') );
		});
	}
}`;
	text += i===list.length-1?'':',';
})

text.replace(/\,$/,'');

text += `];\nexport {list};`

fs.writeFileSync( './_mobile/vue/src/router/list.js',text );