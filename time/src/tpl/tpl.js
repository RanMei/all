const fs = require('fs');

const config = [{
  name: 'index'
},{
  name: 'signin'
},{
  name: 'cart'
},{
  name: 'item'
},{
  name: 'search'
},{
  name: 'test'
},{

  name: 'admin'
}];

var env = process.env.NODE_ENV;

config.forEach(a=>{
  var tpl =
`
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>飞越太平洋</title>

  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
  <link href="../vendor/font-awesome-4.4.0/css/font-awesome.min.css" rel="stylesheet">
  ${env==='production'?
    (a.name==='admin'?(
      `<link rel="stylesheet" type="text/css" href="dist/common.style.css">
      <link rel="stylesheet" type="text/css" href="dist/_admin/admin.style.css">`
    ):(
      `<link rel="stylesheet" type="text/css" href="dist/common.style.css">
      <link rel="stylesheet" type="text/css" href="dist/${a.name}.style.css">`
    ))
    :
    ''
  }
  ${env==='production'?
    (a.name==='admin'?
      (`<link rel="stylesheet" type="text/css" href="dist/common.style.css">
      <link rel="stylesheet" type="text/css" href="dist/_admin/admin.style.css">`)
      :
      (`<link rel="stylesheet" type="text/css" href="dist/common.style.css">
      <link rel="stylesheet" type="text/css" href="dist/${a.name}.style.css">`)
    )
    :
    ''
  }
</head>

<body>

  <div id="root">
  </div>
  
  <script type="text/javascript" src="../vendor/fetch.js"></script>
  <script type="text/javascript" src="../vendor/vue2/vue.min.js"></script>
  <script type="text/javascript" src="../vendor/vue2/vuex.min.js"></script>

  ${a.name==='admin'?
    `<script type="text/javascript" src="../vendor/vue2/vue-router.min.js"></script>
    <script type="text/javascript" src="./dist/_admin/admin.chunk.js"></script>`
    :
    `<script type="text/javascript" src="./dist/common.chunk.js"></script>
    <script type="text/javascript" src="./dist/${a.name}.chunk.js"></script>`
  }

</body>

</html>
`;
  fs.writeFileSync( './public/time/'+a.name+'.html',tpl );
})

// ${env==='production'?
//     (`<script type="text/javascript" src="../vendor/vue2/vue.min.js"></script>
//     <script type="text/javascript" src="../vendor/vue2/vuex.min.js"></script>`)
//     :(`<script type="text/javascript" src="../vendor/vue2/vue.min.js"></script>
//     <script type="text/javascript" src="../vendor/vue2/vuex.min.js"></script>`)
//   }