const fs = require('fs');

var config = [{
	name: 'index'
}]

config.forEach(a=>{
	var tpl =
`
<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
	<title>MadSoap</title>
	<link rel="stylesheet" type="text/css" href="./vendor/font-awesome-4.4.0/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="./dist/index.style.css">
</head>

<body>

	<div id="root"></div>

<script type="text/javascript" src="./vendor/vue2/vue.min.js"></script>
<script type="text/javascript" src="./vendor/vue2/vue-router.min.js"></script>
<script type="text/javascript" src="./vendor/vue2/vuex.min.js"></script>

<script type="text/javascript" src="./dist/index.chunk.js"></script>

</body>

</html>
`;
fs.writeFileSync( './public/'+a.name+'.html',tpl );
})
