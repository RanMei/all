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
	<title></title>
	<link rel="stylesheet" type="text/css" href="../../vendor/font-awesome-4.4.0/css/font-awesome.min.css">
</head>

<body>
	<div id="app"></div>

<!-- <script type="text/javascript" src="../vendor/debug.js"></script> -->
<script type="text/javascript" src="../../vendor/fetch.js"></script>

<script type="text/javascript" src="../../vendor/react/react.min.js"></script>
<script type="text/javascript" src="../../vendor/react/react-dom.min.js"></script>
<script type="text/javascript" src="../../vendor/react/ReactRouter.min.js"></script>
<script type="text/javascript" src="../../vendor/react/redux.js"></script>
<script type="text/javascript" src="../../vendor/react/react-redux.min.js"></script>
<script type="text/javascript" src="../../vendor/react/redux-thunk.js"></script>
  
  ${process.env.NODE_ENV==='production'?
  `<script type="text/javascript" src="./dist/bundle.js"></script>`:
  `<script type="text/javascript" src="/farm/dist/bundle.js"></script>`}
</body>

</html>
`;
	fs.writeFileSync( './public/farm/'+a.name+'.html',tpl );
})