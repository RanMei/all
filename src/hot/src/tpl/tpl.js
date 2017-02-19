const fs = require('fs');

const vue = `<script type="text/javascript" src="../vendor/vue2/vue.min.js"></script>`;
const vue3 = 
	`<script type="text/javascript" src="../vendor/vue2/vue.min.js"></script>
	<script type="text/javascript" src="../vendor/vue2/vue-router.min.js"></script>
	<script type="text/javascript" src="../vendor/vue2/vuex.min.js"></script>`;

var config = [{
	name: 'index',
	dest: './public/index.html',
	css: `<link rel="stylesheet" type="text/css" href="./vendor/font-awesome-4.4.0/css/font-awesome.min.css">`,
	scripts: `<script type="text/javascript" src="./vendor/vue2/vue.min.js"></script>
	<script type="text/javascript" src="./vendor/vue2/vue-router.min.js"></script>
	<script type="text/javascript" src="./vendor/vue2/vuex.min.js"></script>`
},{

	name: 'hot',
	dest: './public/hot/hot.html',
	scripts: vue3
},{
	name: 'test',
	dest: './public/hot/test.html',
	scripts: vue
},{
	name: 'front-end',
	dest: './public/hot/front-end.html',
	scripts: vue
},{

	name: 'wolf',
	dest: './public/h5/wolf.html',
	scripts: vue
},{
	name: 'carnival',
	dest: './public/h5/carnival.html',
	scripts: vue
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
	
	${a.css?a.css:''}
	${process.env.NODE_ENV==='production'?
	`<link rel="stylesheet" type="text/css" href="dist/${a.name}.style.css">`:''}
</head>

<body>
	<div id="${a.name==='wolf'?'root':'app'}">
	</div>
	
	${a.scripts}
	<script type="text/javascript" src="dist/${a.name}.bundle.js"></script>

</body>

</html>
`;
	fs.writeFileSync( a.dest,tpl );
})
