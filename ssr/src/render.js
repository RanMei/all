var fs = require('fs');
const Vue = require('vue')
var path = require('path')
 
const renderer = require('vue-server-renderer').createRenderer()
//const code = fs.readFileSync( path.resolve(__dirname,'../dist/server.chunk.js'),'utf-8' );
const code = fs.readFileSync( './ssr/server_bundles/server.chunk.js','utf-8' );
const bundleRenderer = require('vue-server-renderer').createBundleRenderer(code);
console.log(code)
 
bundleRenderer.renderToString((err, html) => {
	var str = 
	`
<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
	<title></title>
	<link rel="stylesheet" type="text/css" href="./dist/index.style.css">
</head>

<body>

	${html}

<script type="text/javascript" src="../vendor/vue2/vue.min.js"></script>
<script type="text/javascript" src="./dist/index.chunk.js"></script>

</body>

</html>
	`;
	console.log(str)
	fs.writeFileSync( './ssr/index.html',str );
})