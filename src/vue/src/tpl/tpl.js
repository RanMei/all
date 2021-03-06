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
	<title>YUX动效库</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
  
  <link rel="stylesheet" type="text/css" href="../vendor/font-awesome-4.4.0/css/font-awesome.min.css">
  ${process.env.NODE_ENV==='production'?
  `<link rel="stylesheet" type="text/css" href="./dist/index.style.css">`:``}
</head>

<body>
	<div id="root">
	</div>

<script type="text/javascript" src="./debug.js"></script>

<script type="text/javascript" src="../vendor/vue2/vue.min.js"></script>
<script type="text/javascript" src="../vendor/vue2/vuex.min.js"></script>
<script type="text/javascript" src="../vendor/vue2/vue-router.min.js"></script>

<script type="text/javascript" src="../vendor/GSAP/TweenMax.min.js"></script>
<script type="text/javascript" src="../vendor/canvas.js"></script>

${process.env.NODE_ENV==='production'?
`<script type="text/javascript" src="./dist/index.chunk.js"></script>`:
`<script type="text/javascript" src="/vue/dist/index.chunk.js"></script>`}
</body>
</html>
`;
fs.writeFileSync( './public/vue/'+a.name+'.html',tpl );
})
