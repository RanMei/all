const fs = require('fs');

var config = [{
	name: 'index'
}]

config.forEach(a=>{
	var tpl =
`
<!DOCTYPE html>
<html >
<head>
	<meta charset="UTF-8">
	<title></title>
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">

  ${process.env.NODE_ENV==='production'?
  `<link rel="stylesheet" type="text/css" href="./dist/index.style.css">`:``}
</head>

<body>
	<div id="root">
	</div>

<script type="text/javascript" src="./debug.js"></script>
<script type="text/javascript" src="../vendor/rem.js"></script>
<script type="text/javascript" src="../vendor/vue2/vue.min.js"></script>
<script type="text/javascript" src="../vendor/vue2/vue-router.min.js"></script>

<script type="text/javascript" src="../vendor/GSAP/TweenMax.min.js"></script>
<script type="text/javascript" src="../vendor/canvas.js"></script>

<script type="text/javascript" src="./dist/index.chunk.js"></script>
</body>
</html>
`;
fs.writeFileSync( './public/vue/'+a.name+'.html',tpl );
})
