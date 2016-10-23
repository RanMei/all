var fs = require('fs');

var files = [
	'Scope'
];

files.forEach((a,i)=>{
	var html =
`<!DOCTYPE html>
<html>
	<head>
		<title>${a}</title>
	</head>

	<body>
		<div class="topbar"></div>
		<div id="root"></div>
		<script src="../../../vendor/vue2/vue.min.js"></script>
		<script src="../dist/${a}.bundle.js"></script>
	</body>
</html>`;
	fs.writeFileSync( './_mobile/vue/item/'+a+'.html',html );
})