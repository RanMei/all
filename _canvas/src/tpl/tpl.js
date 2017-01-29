const fs = require('fs');

var config = [{
	name: '2K'
},{
	name: 'Fireworks'
},{
	name: 'Scope'
}]

config.forEach(a=>{
	var tpl =
`
<!DOCTYPE html>
<html>

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
	<title>${a.name}</title>
	<style type="text/css">
		* {
			margin: 0; padding: 0;
		}
	</style>
</head>

<body>
	<canvas id="canvas" style="display:block"></canvas>
	<script type="text/javascript" src="../vendor/canvas.js"></script>
	<script type="text/javascript" src="src/${a.name}.js"></script>
</body>
</html>
`;
fs.writeFileSync( './_canvas/'+a.name+'.html',tpl );
})
