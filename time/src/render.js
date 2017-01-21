var fs = require('fs');
const Vue = require('vue')
var path = require('path')
 
//const renderer = require('vue-server-renderer').createRenderer()
//const code = fs.readFileSync( path.resolve(__dirname,'../dist/server.chunk.js'),'utf-8' );
const code = fs.readFileSync( './time/server_bundles/test.server.bundle.js','utf-8' );
const bundleRenderer = require('vue-server-renderer').createBundleRenderer(code);
 
bundleRenderer.renderToString((err, html) => {
	var str = 
	`
<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<title>飞越太平洋</title>
	<link href="../vendor/font-awesome-4.4.0/css/font-awesome.min.css" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="dist/test.style.css">
</head>

<body>
	${html}
	
<script type="text/javascript" src="../vendor/vue2/vue.min.js"></script>
<script type="text/javascript" src="../vendor/vue2/vuex.min.js"></script>

<script type="text/javascript" src="./dist/test.chunk.js"></script>
</body>

</html>
	`;
	fs.writeFileSync( './time/test.html',str );
})