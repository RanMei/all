const fs = require('fs');

const config = [{
  name: 'index'
}];

var env = process.env.NODE_ENV;

config.forEach(a=>{
  var tpl =
`
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>rx</title>

  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">

  <link rel="stylesheet" type="text/css" href="dist/${a.name}.style.css">
</head>

<body>

  <div id="app">
    <button>button</button>
  </div>
  
  <script type="text/javascript" src="./dist/${a.name}.chunk.js"></script>

</body>

</html>
`;
  fs.writeFileSync( './public/rx/'+a.name+'.html',tpl );
})