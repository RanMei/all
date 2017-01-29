const fs = require('fs');

var config = [{
	name: 'index'
},{
	name: 'wolf'
},{
	name: 'test'
},{
	name: 'carnival'
}]

console.log(process.env.NODE_ENV)

config.forEach(a=>{
	var tpl =
`
<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
	<title>${a.name}</title>
	${process.env.NODE_ENV==='production'?
	`<link rel="stylesheet" type="text/css" href="dist/${a.name}.style.css">`:''}
</head>

<body>
	<div id="${a.name==='wolf'?'root':'app'}">
	</div>

${process.env.NODE_ENV==='production'&&a.name==='wolf'?	
'<script type="text/javascript" src="../vendor/vue2/vue.min.js"></script>':''
}
${process.env.NODE_ENV==='production'&&a.name!=='wolf'?
'<script type="text/javascript" src="../vendor/vue2/vue.min.js"></script>'+
'<script type="text/javascript" src="../vendor/vue2/vue-router.min.js"></script>'+
'<script type="text/javascript" src="../vendor/vue2/vuex.min.js"></script>':
''
}
<script type="text/javascript" src="dist/${a.name}.bundle.js"></script>

</body>

</html>
`;
	fs.writeFileSync( './public/hot/'+a.name+'.html',tpl );
})
